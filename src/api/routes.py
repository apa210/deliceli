"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

# ----------                                Web app rutes                           ----------

    # ------------- Cocinas --------------------
        # Ver todas las cocinas - GET
@api.route('/kitchens', methods=['GET'])
def get_all_kitchens():
    return jsonify("All kitchens"), 200

    # Ver todas las cocinas segun su categoria
@api.route('/kitchen/<int:kitchen_category>', methods=['GET'])
def get_filter_kitchens(kitchen_category):
    return jsonify("Filter kitchens"), 200

        # Ver una cocina - GET
@api.route('/kitchen/<int:kitchen_id>', methods=['GET'])
def get_kitchen(kitchen_id):
    return jsonify("One kitchen"), 200

    # ---------------- Productos ------------------
        # Ver todas los productos - GET
@api.route('/products', methods=['GET'])
def get_all_products():
    return jsonify("All products"), 200

    # Ver todos los productos segun su categoria
@api.route('/product/<string:product_category>', methods=['GET'])
def get_filter_products(product_category):
    return jsonify("Filter products"), 200

        # Ver un producto - GET
@api.route('/product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    return jsonify("One product"), 200

    # ------------------- Carrito de compras -----------------

        # a completar !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        #!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

# ----------                                User rutes                              ----------

    # ------------- login validation (conmprueba si el usuario esta logeado) ----------- 

@api.route("/valid-token", methods=["GET"])
@jwt_required()
def valid_token():  
    
    current_user = get_jwt_identity()
    login_user = User.query.filter_by(email=current_user).first()
    if login_user is None:
        return jsonify({"status": False}), 404
    response_body={
        "status": True,
        "user":{
            # "name": str(login_user.name),
            # "email": str(login_user.email),
            # "id": str(login_user.id)
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
    user = User.query.filter_by(email=body["email"]).first()

    # comprueba si el usuario existe, en caso de que no exista le devuelve un error
    if user is None:
        raise APIException('The user does not exist', status_code=404)
    # comprueba que el email y la contraseña concuerden con las del usuario, devuelve error en el caso que no conincida alguno
    elif body["email"] != user.email or body["password"] != user.password:
        raise APIException('Bad email or password', status_code=401)

    # si el codigo no fue interrumpido hasta ahora,
    # retorna un token y el email, id del usuario (para ingresar a las rutas protegidas del usuario)
    access_token = create_access_token(identity=user.email)
    return jsonify({"user": {"id":str(user.id), "email": str(user.email)}, "access_token":access_token}), 200

        # Registrarse (añadir una cuenta a la base de datos)
@api.route('/signup', methods=['POST'])
def signup():
    return jsonify("ok"), 200
 
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

        # Profile

            # Ver el perfil
@api.route('/user/<int:user_id>', methods=['GET'])
def get_profile(user_id):
    return jsonify("ok"), 200

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

            # Cocinas putuadas
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