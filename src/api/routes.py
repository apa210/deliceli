"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import random
import json
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, Usuarios, Productos, Categorias_Productos, Carritos, Contactos, Categorias, Favoritos
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from sqlalchemy import func, text
from datetime import datetime

api = Blueprint('api', __name__)

# ----------                                Web app rutes                           ----------

# ------------- Cocinas --------------------
        # Ver todas las cocinas - GET
@api.route('/kitchens', methods=['GET'])
def get_all_kitchens():
    usuarios = Usuarios.query.filter_by(rol='cocina').all() # se obtienen todas los usuarios con rol cocina de la tabla Usuarios
    results = list(map(lambda item: item.serialize(), usuarios)) #serializa los datos del arrays usuarios

    return jsonify(results), 200


        # Ver una cocina - GET
@api.route('/kitchen/<int:kitchen_id>', methods=['GET'])
def get_kitchen(kitchen_id):
    usuario = Usuarios.query.filter_by(id=kitchen_id, rol='cocina').first()

    if usuario is None:
        return jsonify("vacio"), 200
    return jsonify(usuario.serialize()), 200



# ---------------- Productos ------------------
        # Ver todas los productos - GET
@api.route('/products', methods=['GET'])
def get_all_products():
    productos = Productos.query.all()
    results = list(map(lambda item: {**item.serialize(),**item.serialize_cocinero()}, productos))

    return jsonify(results), 200

    # Ver todos los productos segun su categoria
    # SELECT Productos.* 
    # FROM Productos INNER_JOIN Categorias_Productos ON Productos.id = Categorias_Productos.producto_id
    # WHERE Categorias_Productos.categoria_id = cat_id
@api.route('/productsCategory/<int:cat_id>', methods=['GET'])
def get_all_products_category(cat_id):
    productos = db.session.query(Productos).join(Categorias_Productos).filter_by(categoria_id=cat_id)
    results = list(map(lambda item: {**item.serialize(),**item.serialize_cocinero()}, productos))
    return jsonify(results), 200


        # Ver un producto - GET
@api.route('/product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    producto = Productos.query.filter_by(id=product_id).first()

    if producto is None:
        return jsonify("vacio"), 200
    return jsonify({"product":producto.serialize(), "User": producto.serialize_cocinero()}), 200


        # Obtener todos los productos por nombre- GET
@api.route('/products/find/<string:cadena>', methods=['GET'])
def get_all_products_find_name(cadena):
    productos = Productos.query.filter(func.upper(Productos.nombre).like('%'+cadena.upper()+'%')).all()
    results = list(map(lambda item: item.serialize(), productos))

    return jsonify(results), 200



# ------------------- Carrito de compras -----------------

@api.route('/cart/deleted', methods=['DELETE'])
@jwt_required()
def delete_cart_user():
    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    body = json.loads(request.data)
    query_carritos = Carritos.query.filter_by(usuario_id=login_user.id, confirmado=False).first()

    print(query_carritos)
    
    if query_carritos is not None:
        db.session.delete(query_carritos)
        db.session.commit()
        response_body = {
                "msg": "deleted cart"
            }

        return jsonify(response_body), 200

    response_body = {
            "msg": "Not exist cart"
        }
    return jsonify(response_body), 400



@api.route('/cart/deletedProduct/<int:product_id>', methods=['DELETE'])
@jwt_required()
def delete_product_cart_user(product_id):

    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    body = json.loads(request.data)

    query_carritos = Carritos.query.filter_by(usuario_id=login_user.id, producto_id=product_id, confirmado=False).first()
    print(query_carritos)
    
    if query_carritos is not None:
        db.session.delete(query_carritos)
        db.session.commit()
        response_body = {
                "msg": "deleted product cart"
            }

        return jsonify(response_body), 200

    response_body = {
            "msg": "Not exist"
        }
    return jsonify(response_body), 400



        # Crear un carrito - POST
# Ejemplo Body JSON POST:
# {"usuario_id":"2","producto_id": "1","cocina_id": "1","cantidad": "2","precio_unitario": "200","total": "400"}
@api.route('/cart/addProduct', methods=['POST'])
@jwt_required()
def add_product_to_cart():
    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    body = json.loads(request.data)

    #Se obtiene el maximo id
    id = db.session.query(func.max(Carritos.id)).scalar()
    if id is None:
        id = 1
    else:
        id = id + 1

    # Si existe un carrito activo para el usuario
    query_cart = Carritos.query.filter_by(usuario_id=login_user.id,confirmado=False).first()

    if query_cart is None: # Nuevo carrito
        cart_id = db.session.query(func.max(Carritos.id_carrito)).scalar()
        if cart_id is None:
            cart_id = 1
        else:
            cart_id = cart_id + 1

    else: # Tiene un carrito activo
        cart_aux = query_cart.serialize()
        cart_id = cart_aux["id_carrito"]
    
    fecha_hora = datetime.now()

    cart = Carritos(id=id, id_carrito=cart_id, usuario_id=login_user.id, producto_id=body["producto_id"], cocina_id=body["cocina_id"], fecha=fecha_hora, cantidad=body["cantidad"], precio_unitario=body["precio_unitario"], total=body["total"], confirmado=False )

    db.session.add(cart)
    db.session.commit()
    response_body = {
            "msg": cart.serialize()
        }
    return jsonify(response_body), 200


        # Ver todos los productos de un carrito de un usuario
@api.route('/cart/productsCart', methods=['GET'])
@jwt_required()
def get_all_products_cart_to_user():

    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    # productos = db.session.query(Productos,Carritos).join(Carritos).filter_by(usuario_id=user_id, confirmado=False)

    carritos = Carritos.query.filter_by(usuario_id=login_user.id, confirmado=False).order_by(Carritos.producto_id).all()
    print("$$$$$$$$Carritos: " + str(carritos))

    if carritos is None:
        response_body = {
                    "msg": "El carrito no tiene productos"
                }
        return jsonify(response_body), 400
    
    results = list(map(lambda item: {**item.serialize(),**item.serialize_cocinero(),**item.serialize_producto()}, carritos))
    # results = list(map(lambda item: {
    #                                 "nombre": item[0].nombre,
    #                                 "descripcion": item[0].descripcion,
    #                                 "cantidad_user": item[1].cantidad,
    #                                 "precio_unitario": item[1].precio_unitario,
    #                                 "total": item[1].total,
    #                                 "cocina_id": item[0].cocina_id,
    #                                 "foto": item[0].foto,
    #                                 "cantidad_stock": item[0].cantidad
    #                                 }, productos))

    return jsonify(results), 200




        # Editar un producto de un carrito de un usuario
# Ejemplo Body JSON PUT:
# {"producto_id": "2","cantidad": "333","precio_unitario": "250","total": "999"}
@api.route('/cart/editProduct', methods=['PUT'])
@jwt_required()
def edit_product_cart_user():

    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    body = json.loads(request.data)

    carrito = Carritos.query.filter_by(usuario_id=login_user.id, producto_id=body["producto_id"], confirmado=False).first()
    
    if carrito is not None:
        carrito.cantidad = body["cantidad"]
        carrito.precio_unitario = body["precio_unitario"]
        carrito.total = body["total"]
        db.session.commit()
        response_body = {
                "msg": "update product cart"
            }

        return jsonify(response_body), 200

    response_body = {
            "msg": "Not exist"
        }
    return jsonify(response_body), 400





# ------------------- Categorias -----------------

@api.route('/category', methods=['GET'])
def get_all_categorys():
    categorias = Categorias.query.all()
    results = list(map(lambda item: item.serialize(), categorias))

    return jsonify(results), 200



# ----------                                User rutes                              ----------

    # ------------- login validation (conmprueba si el usuario esta logeado) ----------- 
#desde el front cada vez que se actualiza la app se llama a la funcion de la api valid_token 
@api.route("/valid-token", methods=["GET"])
@jwt_required() # para proteger datos
def valid_token():  
    
    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()
    if login_user is None:
        return jsonify({"status": False}), 404
    response_body={
        "status": True,
        "usuario":{
            "id": login_user.id,
            "nombre": login_user.user_name,
            "email": login_user.email
        }
    }
    return jsonify(response_body), 200


    # -----------------   Get In (entrar en la app) ---------------

        # logearse (entrar con una cuenta existente)
@api.route('/login', methods=['POST'])
def login():
    # se consigue lo enviado por el front
    body = request.get_json()

    # declaracion de exepciones (si lo que envia el front no cumple con alguna le devuelve un error)
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'email' not in body:
        raise APIException('You need to specify the email', status_code=400)
    if 'password' not in body:
        raise APIException('You need to specify the password', status_code=400)

    # busca el usuario pedido en la tabla
    user = Usuarios.query.filter_by(email=body["email"]).first()

    password_encrypted = current_app.bcrypt.check_password_hash(user.password, body["password"]) # returns True

    # comprueba si el usuario existe, en caso de que no exista le devuelve un error
    if user is None:
        raise APIException('The user does not exist', status_code=404)
    # comprueba que el email y la contraseña concuerden con las del usuario, devuelve error en el caso que no conincida alguno
    
    elif body["email"] != user.email or not password_encrypted:
        raise APIException('Bad email or password', status_code=401)

    # si el codigo no fue interrumpido hasta ahora,
    # retorna un token y el email, id del usuario (para ingresar a las rutas protegidas del usuario)
    access_token = create_access_token(identity=user.email)
    return jsonify({"user": {
            "id":str(user.id), 
            "rol": str(user.rol)
        }, 
        "access_token":access_token
        }), 200

        # Registrarse (añadir una cuenta a la base de datos)
@api.route('/signup', methods=['POST'])
def signup():

    # trae la información del front
    body = request.get_json()

    # comprueba que existan los campos requeridos
    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    elif 'user_name' not in body:
        raise APIException("You need to specify the username", status_code=400)
    elif 'first_name' not in body:
        raise APIException("You need to specify the first name", status_code=400)
    elif 'last_name' not in body:
        raise APIException("You need to specify the last name", status_code=400)
    elif 'password' not in body:
        raise APIException("You need to specify the password", status_code=400)
    elif 'email' not in body:
        raise APIException("You need to specify the email", status_code=400)
    elif 'phone' not in body:
        raise APIException("You need to specify the phone", status_code=400)

    # ve que el email no exista en la tabla
    user = Usuarios.query.filter_by(email=body["email"]).first()

    pw_hash = current_app.bcrypt.generate_password_hash(body["password"]).decode('utf-8')
    # si ese email no existe, crea un nuevo usuario
    if user is None:
        base_id = body["email"]
        list_aux = []
        for item_aux in base_id:
            list_aux.append(str(ord(item_aux) - 96))
        new_aux = ''.join(list_aux)
        new_aux = new_aux.split("-")
        new_id = ''.join(new_aux)
        new_id = int(new_id[random.randint(0, len(new_id)-3)]+new_id[random.randint(0, len(new_id)-3)]+new_id[random.randint(0, len(new_id)-3)]+new_id[random.randint(0, len(new_id)-3)]+new_id[random.randint(0, len(new_id)-3)]+new_id[random.randint(0, len(new_id)-3)]+new_id[random.randint(0, len(new_id)-3)]+new_id[random.randint(0, len(new_id)-3)]+new_id[random.randint(0, len(new_id)-3)])
        user_id = Usuarios.query.filter_by(id=new_id).first()
        if user_id is None:
            new_id = new_id
        else:
            new_id = new_id+len(str(new_id))+ int(str(new_id)[random.randint(0, len(str(new_id))-3)])
        new_user = Usuarios(id=new_id, user_name=body["user_name"], first_name=body["first_name"], last_name=body["last_name"], password=pw_hash, email=body["email"], telefono=body["phone"], rol="cliente")
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "Created user"}), 200
    
    # si el email ya esta registrado en la tabla, devuelve un error
    raise APIException("This email address is already registered", status_code=400)

 
    # ------------------ User Client (ususario promedio o para todos los usuarios) -------------

        # Favorites

            # Ver todos los favoritos
@api.route('/user/favorites', methods=['GET'])
@jwt_required()
def get_all_favorite():

    current_user = get_jwt_identity()
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    favorites_user = Favoritos.query.filter_by(usuario_id=login_user.id).all()

    results = list(map(lambda item: {**item.serialize(),**item.serialize_cocinero(),**item.serialize_producto()}, favorites_user))

    return jsonify(results), 200
        
            # Agregar un favorito - POST

@api.route('/user/favorite', methods=['POST'])
@jwt_required()
def add_favorite():
    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    return jsonify("ok"), 200

            # Eliminar un favorito - DELETE
@api.route('/user/favorite', methods=['DELETE'])
@jwt_required()
def add_remove():
    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    return jsonify("ok"), 200



# ------------------------ Profile ------------------------

    # Ver el perfil
@api.route('/user/profile', methods=['GET'])
@jwt_required() # para proteger datos - se encarga de valida por el email si existe en la BD
def get_profile():

    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404
        
    return jsonify(login_user.serialize()), 200



    # Editar perfil
# {"user_name": "", "first_name": "", "last_name": "", 
# "email": "", "telefono": 1, "foto": "", "direccion": "", "facebook": "", "twitter": "", 
# "linkedin": "", "instagram": "", "dribble": "", "pinterest": "", "descripcion": "" }
@api.route('/user', methods=['PUT'])
@jwt_required()
def edit_username():

    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    body = json.loads(request.data)

    if login_user is not None:
        if "user_name" in body:
            login_user.user_name = body["user_name"]
        if "first_name" in body:
            login_user.first_name = body["first_name"]
        if "last_name" in body:
            login_user.last_name = body["last_name"]
        if "email" in body:
            login_user.email = body["email"]
        if "telefono" in body:
            login_user.telefono = body["telefono"]
        if "foto" in body:
            login_user.foto = body["foto"]
        if "direccion" in body:
            login_user.direccion = body["direccion"]
        if "facebook" in body:
            login_user.facebook = body["facebook"]
        if "twitter" in body:
            login_user.twitter = body["twitter"]
        if "linkedin" in body:
            login_user.linkedin = body["linkedin"]
        if "instagram" in body:
            login_user.instragram = body["instagram"]
        if "dribble" in body:
            login_user.dribble = body["dribble"]
        if "pinterest" in body:
            login_user.pinterest = body["pinterest"]
        if "descripcion" in body:
            login_user.descripcion = body["descripcion"]

        db.session.commit()

        response_body = {
            "msg": "update user"
        }

        return jsonify(response_body), 200

    else:
        response_body = {
            "msg": "Debe loguearse para actualizar datos"
        }
        return jsonify(response_body), 404

# ----------------------------------------------
#  "old_password": "", "new_password": "",
@api.route('/user/password', methods=['PUT'])
@jwt_required()
def edit_user_password():

    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    body = json.loads(request.data)

    if login_user is not None:
        if "old_password" in body:
            password_encrypted = current_app.bcrypt.check_password_hash(login_user.password, body["old_password"]) # returns True
            if password_encrypted and "new_password" in body:
                pw_hash = current_app.bcrypt.generate_password_hash(body["new_password"]).decode('utf-8')
                login_user.password = pw_hash
            else:
                response_body = {"msg": "La contraseña actual no es correcta"}
                return jsonify(response_body), 400
        
        db.session.commit()

        response_body = {
            "msg": "update password"
        }

        return jsonify(response_body), 200

    else:
        response_body = {
            "msg": "Debe loguearse para actualizar la contraseña"
        }
        return jsonify(response_body), 404
    

            # Recuperar la contraseña
                # para completar !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                #!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                #!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        
        # Rated - puntuaciones hechas por el usuario

            # todo (cocinas y productos)

@api.route('/user/<int:user_id>/rated', methods=['GET'])
def get_rateds(user_id):
    return jsonify("ok"), 200

            # Cocinas puntuadas
@api.route('/user/<int:user_id>/rated/kitchens', methods=['GET'])
def get_rated_kitchens(user_id):
    return jsonify("ok"), 200

            # Platos puntuados
@api.route('/user/<int:user_id>/rated/products', methods=['GET'])
def get_rated_products(user_id):
    return jsonify("ok"), 200

    # ------------------ User Seller (usuario que vende, las cocinas o el usuario cocinero) --------- 
                            # Puede usar todo lo que tiene el usuario cliente (normal)

        # Menu

            # Ver su menu
@api.route('/user/menu', methods=['GET'])
@jwt_required() # para proteger datos
def get_user_menu():
    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    menu = Productos.query.filter_by(cocina_id=login_user.id).all()

    results_id = list(map(lambda item: item.id, menu))
    results = list(map(lambda item: item.serialize(), menu))

    aux = []
    num = 0
    while num < len(results_id):
        category = Categorias_Productos.query.filter_by(producto_id=results_id[num]).all()
        results_category = list(map(lambda item: item.serialize(), category))
        aux.append(results_category)
        num+=1

    data = []
    num = 0
    while num < len(aux):
        results[num]['category'] = aux[num]
        data.append(results[num])
        num+=1

    return jsonify(data), 200


            # Añadir un plato
@api.route('/user/menu', methods=['POST'])
@jwt_required() # para proteger datos
def add_dish():
    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    body = json.loads(request.data)

    #Se obtiene el maximo id de la tabla Productos
    id = db.session.query(func.max(Productos.id)).scalar()
    if id is None:
        id = 1
    else:
        id = id + 1

    query_product = Productos.query.filter_by(cocina_id=login_user.id, nombre=body["nombre"]).first()

    if query_product is None:
        #guardar datos recibidos a la tabla Productos
        new_product = Productos(id=id, nombre=body["nombre"], descripcion=body["descripcion"], precio=body["precio"], cantidad=body["cantidad"], foto=body["foto"], cocina_id=login_user.id)
        db.session.add(new_product)
        db.session.commit()

        num = 0
        while num < len(body["categoria"]):
            product = Productos.query.filter_by(id = id).first()
            category = Categorias.query.filter_by(id = body["categoria"][num]).first()
            new_product_category = Categorias_Productos(categoria_id=category.id, producto_id=product.id)
            db.session.add(new_product_category)
            db.session.commit()
            num+=1

        response_body = {
                "msg": "Nuevo producto añadido"
            }

        return jsonify(response_body), 200

    response_body = {
            "msg": "Ya existe un producto con ese nombre"
        }
    return jsonify(response_body), 400


            # Quitar un plato
@api.route('/user/menu/<int:product_id>', methods=['DELETE'])
@jwt_required() # para proteger datos
def remove_dish(product_id):
    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    product = Productos.query.filter_by(id=product_id).first()

    if product is None:
        raise APIException('No se encuentra un producto con esa ID', status_code=404)

    if product.cocina_id != login_user.id:
        raise APIException('Este producto no pertenece a tu menú', status_code=404)

    category = Categorias_Productos.query.filter_by(producto_id = product_id).all()

    num = 0
    while num < len(category):
        db.session.delete(category[num])
        db.session.commit()
        num += 1

    db.session.delete(product)
    db.session.commit()
    response_body = {"msg": "El producto ha sido eliminado"}
    return jsonify(response_body), 200


            # Editar un plato
# Ejemplo Body JSON PUT:
# {"producto_id": "2","nombre": "cupcake","descripcion": "chocolate","precio": 50,"cantidad": "10","foto": "" }
@api.route('/user/menu', methods=['PUT'])
@jwt_required()
def edit_dish():
    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()

    if login_user is None:
        return jsonify({"status": False}), 404

    body = json.loads(request.data)

    menu = Productos.query.filter_by(cocina_id=login_user.id, id=body["producto_id"]).first()
    
    if menu is not None:
        if "nombre" in body:
                menu.nombre = body["nombre"]
        if "descripcion" in body:
            menu.descripcion = body["descripcion"]
        if "precio" in body:
            menu.precio = body["precio"]
        if "cantidad" in body:
            menu.cantidad = body["cantidad"]
        if "foto" in body:
            menu.foto = body["foto"]
        if "categoria" in body:
            category = Categorias_Productos.query.filter_by(producto_id = body["producto_id"]).all()
            num = 0
            while num < len(category):
                db.session.delete(category[num])
                db.session.commit()
                num += 1
            num = 0
            while num < len(body["categoria"]):
                product = Productos.query.filter_by(id = body["producto_id"]).first()
                category = Categorias.query.filter_by(id = body["categoria"][num]).first()
                new_product_category = Categorias_Productos(categoria_id=category.id, producto_id=product.id)
                db.session.add(new_product_category)
                db.session.commit()
                num+=1
        db.session.commit()
        response_body = {
            "msg": "update product"
        }

        return jsonify(response_body), 200

    response_body = {
            "msg": "Not exist"
        }
    return jsonify(response_body), 400

# ----------                                Others rutes                              ----------

    # ------------------ Contacto ---------------------

        # Guardar el contacto enviado por el formulario en la base de datos

@api.route('/contact', methods=['POST'])
def add_user_contact():

    body = request.get_json()

    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    elif 'nombre' not in body:
        raise APIException("You need to specify the 'nombre'", status_code=400)
    elif 'departamento' not in body:
        raise APIException("You need to specify the 'departamento'", status_code=400)
    elif 'telefono' not in body:
        raise APIException("You need to specify the 'telefono'", status_code=400)
    elif 'mail' not in body:
        raise APIException("You need to specify the 'mail'", status_code=400)
    elif 'opcion' not in body:
        raise APIException("You need to specify the 'opcion'", status_code=400)
    elif 'mensaje' not in body:
        raise APIException("You need to specify the 'mensaje'", status_code=400)

    contact = Contactos.query.filter_by(mail=body["mail"]).first()

    if contact is None:
        contact_id = db.session.query(func.max(Contactos.id)).scalar()
        if contact_id is None:
            contact_id = 1
        else:
            contact_id = contact_id + 1

        new_contact = Contactos(id=contact_id, nombre=body["nombre"], departamento=body["departamento"], telefono=body["telefono"], mail=body["mail"], opcion=body["opcion"], mensaje=body["mensaje"])
        db.session.add(new_contact)
        db.session.commit()
        return jsonify({"message": "Saved contact"}), 200
        


    raise APIException("This email address is already registered", status_code=400)