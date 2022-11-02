"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import random
import json
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuarios, Productos, Categorias_Productos, Carritos
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from sqlalchemy import func, text

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
    results = list(map(lambda item: item.serialize(), productos))

    return jsonify(results), 200

    # Ver todos los productos segun su categoria
    # SELECT Productos.* 
    # FROM Productos INNER_JOIN Categorias_Productos ON Productos.id = Categorias_Productos.producto_id
    # WHERE Categorias_Productos.categoria_id = cat_id
@api.route('/productsCategory/<int:cat_id>', methods=['GET'])
def get_all_products_category(cat_id):
    productos = db.session.query(Productos).join(Categorias_Productos).filter_by(categoria_id=cat_id)
    results = list(map(lambda item: item.serialize(), productos))
    return jsonify(results), 200


        # Ver un producto - GET
@api.route('/product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    producto = Productos.query.filter_by(id=product_id).first()

    if producto is None:
        return jsonify("vacio"), 200
    return jsonify(producto.serialize()), 200





# ------------------- Carrito de compras -----------------

@api.route('/cart/deleted/<int:user_id>', methods=['DELETE'])
def delete_cart_user(user_id):
    body = json.loads(request.data)

    query_carritos = Carritos.query.filter_by(usuario_id=user_id, confirmado=False).first()
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


        # Crear un carrito - POST
# Ejemplo POST:
# {"usuario_id":"2","producto_id": "1","cocina_id": "1","fecha": "2/11/2022 15:36","cantidad": "2","precio_unitario": "200","total": "400"}
@api.route('/cart/addProduct', methods=['POST'])
def add_product_to_cart():
    body = json.loads(request.data)

    #Se obtiene el maximo id
    id = db.session.query(func.max(Carritos.id)).scalar()
    if id is None:
        id = 1
    else:
        id = id + 1

    # Si existe un carrito activo para el usuario
    query_cart = Carritos.query.filter_by(usuario_id=body["usuario_id"],confirmado=False).first()

    if query_cart is None: # Nuevo carrito
        cart_id = db.session.query(func.max(Carritos.id_carrito)).scalar()
        if cart_id is None:
            cart_id = 1
        else:
            cart_id = cart_id + 1

    else: # Tiene un carrito activo
        cart_aux = query_cart.serialize()
        cart_id = cart_aux["id_carrito"]
    
    cart = Carritos(id=id, id_carrito=cart_id, usuario_id=body["usuario_id"], producto_id=body["producto_id"], cocina_id=body["cocina_id"], fecha=body["fecha"], cantidad=body["cantidad"], precio_unitario=body["precio_unitario"], total=body["total"], confirmado=False )

    db.session.add(cart)
    db.session.commit()
    response_body = {
            "msg": cart.serialize()
        }
    return jsonify(response_body), 200


        # Ver todos los productos de un carrito de un usuario
@api.route('/cart/productsCart/<int:user_id>', methods=['GET'])
def get_all_products_cart_to_user(user_id):

    productos = db.session.query(Productos).join(Carritos).filter_by(usuario_id=user_id, confirmado=False)

    if productos is None:
        response_body = {
                    "msg": "El carrito no tiene productos"
                }
        return jsonify(response_body), 400

    results = list(map(lambda item: item.serialize(), productos))
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

    # comprueba si el usuario existe, en caso de que no exista le devuelve un error
    if user is None:
        raise APIException('The user does not exist', status_code=404)
    # comprueba que el email y la contraseña concuerden con las del usuario, devuelve error en el caso que no conincida alguno
    elif body["email"] != user.email or body["password"] != user.password:
        raise APIException('Bad email or password', status_code=401)

    # si el codigo no fue interrumpido hasta ahora,
    # retorna un token y el email, id del usuario (para ingresar a las rutas protegidas del usuario)
    access_token = create_access_token(identity=user.email)
    return jsonify({"user": {
            "id":str(user.id), 
            # "email": str(user.email),
            # "user_name": str(user.user_name),
            # "first_name": str(user.first_name),
            # "last_name": str(user.last_name),
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
        new_user = Usuarios(id=new_id, user_name=body["user_name"], first_name=body["first_name"], last_name=body["last_name"], password=body["password"], email=body["email"], telefono=body["phone"], rol="cliente")
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "Created user"}), 200
    
    # si el email ya esta registrado en la tabla, devuelve un error
    raise APIException("This email address is already registered", status_code=400)

 
    # ------------------ User Client (ususario promedio o para todos los usuarios) -------------

        # Favorites

            # Ver todos los favoritos
@api.route('/favorites', methods=['GET'])
def get_all_favorite():
    return jsonify("ok"), 200
        
            # Agregar un favorito - POST

@api.route('/favorite', methods=['POST'])
def add_favorite():
    return jsonify("ok"), 200

            # Eliminar un favorito - DELETE
@api.route('/favorite', methods=['DELETE'])
def add_remove():
    return jsonify("ok"), 200



# ------------------------ Profile ------------------------

    # Ver el perfil
@api.route('/user/profile', methods=['GET'])
@jwt_required() # para proteger datos - se encarga de valida por el email si existe en la BD
def get_profile():

    current_user = get_jwt_identity() #puede ir o no
    login_user = Usuarios.query.filter_by(email=current_user).first()
    return jsonify(login_user.serialize()), 200



    # Editar perfil
@api.route('/user/<int:user_id>', methods=['PUT'])
def edit_username(user_id):
        # Crear condicional para deternimar que se está editando o que se editara:
            # Editar username
            # Editar email
            # Editar first name
            # Editar last name
            # Editar phone
            # Editar password
    return jsonify("ok"), 200

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
@api.route('/user/<int:user_id>/menu', methods=['GET'])
def get_user_menu(user_id):
    return jsonify("ok"), 200

            # Añadir un plato
@api.route('/user/<int:user_id>/menu', methods=['POST'])
def add_dish(user_id):
    return jsonify("ok"), 200

            # Quitar un plato
@api.route('/user/<int:user_id>/menu', methods=['DELETE'])
def remove_dish(user_id):
    return jsonify("ok"), 200

            # Editar un plato
@api.route('/user/<int:user_id>/menu', methods=['PUT'])
def edit_dish(user_id):
    return jsonify("ok"), 200

# ----------                                Others rutes                              ----------

    # ------------------ Contacto ---------------------

        # Guardar el contacto enviado por el formulario en la base de datos

@api.route('/contact', methods=['POST'])
def add_user_contact():
    return jsonify("ok"), 200