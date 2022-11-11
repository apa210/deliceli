from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    #Esto es un comentario de prueba

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

class Usuarios(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(250), nullable=False)
    first_name = db.Column(db.String(250), nullable=False)
    last_name = db.Column(db.String(250), nullable=False)
    password = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(250), nullable=False)
    telefono = db.Column(db.String(250), nullable=True)
    rol = db.Column(db.String(250), nullable=False)
    foto = db.Column(db.String(250), nullable=True)
    direccion = db.Column(db.String(250), nullable=True)
    facebook = db.Column(db.String(250), nullable=True)
    twitter = db.Column(db.String(250), nullable=True)
    linkedin = db.Column(db.String(250), nullable=True)
    instragram = db.Column(db.String(250), nullable=True)
    dribble = db.Column(db.String(250), nullable=True)
    pinterest = db.Column(db.String(250), nullable=True)
    descripcion = db.Column(db.String(1000), nullable=True)
    
    def __repr__(self):
        return '<Usuarios %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "user_name": self.user_name,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "telefono": self.telefono,
            "rol": self.rol,
            "foto_usuario": self.foto,
            "direccion": self.direccion,
            "facebook": self.facebook,
            "twitter": self.twitter,
            "linkedin": self.linkedin,
            "instagram": self.instragram,
            "dribble": self.dribble,
            "pinterest": self.pinterest,
            "descripcion": self.descripcion,
            # do not serialize the password, its a security breach
        }
    def serialize_producto_usuario(self):
        return {
            "id_usuario": self.id,
            "user_name": self.user_name,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "telefono": self.telefono,
            "rol": self.rol,
            "foto_usuario": self.foto,
            "direccion": self.direccion,
            "facebook": self.facebook,
            "twitter": self.twitter,
            "linkedin": self.linkedin,
            "instagram": self.instragram,
            "dribble": self.dribble,
            "pinterest": self.pinterest,
            "descripcion_usuario": self.descripcion,
            # do not serialize the password, its a security breach
        }
        

class Productos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    descripcion = db.Column(db.String(250), nullable=True)
    precio = db.Column(db.Float, nullable=False)
    cantidad = db.Column(db.Integer, nullable=False)
    foto = db.Column(db.String(250), nullable=True)
    cocina_id = db.Column(db.Integer, db.ForeignKey("usuarios.id"))
    usuarios = db.relationship('Usuarios', foreign_keys='Productos.cocina_id')
    
    def __repr__(self):
        return '<Productos %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            "precio": self.precio,
            "cantidad_producto": self.cantidad,
            "foto_producto": self.foto,
            "cocina_id": self.cocina_id,
            # do not serialize the password, its a security breach
        }
    def serialize_cocinero(self):
        cocina = Usuarios.query.filter_by(id=self.cocina_id).first()
        return cocina.serialize_producto_usuario()

class Favoritos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey("usuarios.id"))
    producto_id = db.Column(db.Integer, db.ForeignKey("productos.id"))
    cocina_id = db.Column(db.Integer, db.ForeignKey("usuarios.id"))
    usuarios = db.relationship('Usuarios', foreign_keys='Favoritos.usuario_id')
    cocinas = db.relationship('Usuarios', foreign_keys='Favoritos.cocina_id')
    productos = db.relationship('Productos', foreign_keys='Favoritos.producto_id')

    def __repr__(self):
        return '<Favoritos %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "producto_id": self.producto_id,
            "cocina_id": self.cocina_id,
            # do not serialize the password, its a security breach
        }
    def serialize_cocinero(self):
        cocina = Usuarios.query.filter_by(id=self.cocina_id).first()
        return cocina.serialize()
    def serialize_producto(self):
        producto = Productos.query.filter_by(id=self.producto_id).first()
        return producto.serialize()

class Carritos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_carrito = db.Column(db.Integer, nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey("usuarios.id"))
    producto_id = db.Column(db.Integer, db.ForeignKey("productos.id"))
    cocina_id = db.Column(db.Integer, db.ForeignKey("usuarios.id"))
    fecha = db.Column(db.DateTime, nullable=False)
    cantidad = db.Column(db.Integer, nullable=False)
    precio_unitario = db.Column(db.Float, nullable=False)
    total = db.Column(db.Float, nullable=False)
    confirmado = db.Column(db.Boolean, nullable=False)
    usuarios = db.relationship('Usuarios', foreign_keys='Carritos.usuario_id')
    cocinas = db.relationship('Usuarios', foreign_keys='Carritos.cocina_id')
    productos = db.relationship('Productos', foreign_keys='Carritos.producto_id')

    def __repr__(self):
        return '<Carritos %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "id_carrito": self.id_carrito,
            "usuario_id": self.usuario_id,
            "producto_id": self.producto_id,
            "cocina_id": self.cocina_id,
            "fecha": self.fecha,
            "cantidad_carrito": self.cantidad,
            "precio_unitario": self.precio_unitario,
            "total": self.total,
            "confirmado": self.confirmado,
            # do not serialize the password, its a security breach
        }
    def serialize_cocinero(self):
        cocina = Usuarios.query.filter_by(id=self.cocina_id).first()
        return cocina.serialize()
    def serialize_producto(self):
        producto = Productos.query.filter_by(id=self.producto_id).first()
        return producto.serialize()

class Puntuaciones(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey("usuarios.id"))
    cocina_id = db.Column(db.Integer, db.ForeignKey("usuarios.id"))
    puntuacion = db.Column(db.Integer, nullable=False)
    usuarios = db.relationship('Usuarios', foreign_keys='Puntuaciones.usuario_id')
    cocinas = db.relationship('Usuarios', foreign_keys='Puntuaciones.cocina_id')

    def __repr__(self):
        return '<Puntuaciones %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "usuario_id": self.usuario_id,
            "cocina_id": self.cocina_id,
            "puntuacion": self.puntuacion,
            # do not serialize the password, its a security breach
        }

class Categorias(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return '<Categorias %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            # do not serialize the password, its a security breach
        }

class Categorias_Productos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    categoria_id = db.Column(db.Integer, db.ForeignKey("categorias.id"))
    producto_id = db.Column(db.Integer, db.ForeignKey("productos.id"))
    categorias = db.relationship('Categorias', foreign_keys='Categorias_Productos.categoria_id')
    productos = db.relationship('Productos', foreign_keys='Categorias_Productos.producto_id')

    def __repr__(self):
        return '<Categorias_Productos %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "categoria_id": self.categoria_id,
            "producto_id": self.producto_id,
            # do not serialize the password, its a security breach
        }

class Contactos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(250), nullable=False)
    departamento = db.Column(db.String(250), nullable=True)
    telefono = db.Column(db.String(250), nullable=True)
    mail = db.Column(db.String(250), nullable=True)
    foto = db.Column(db.String(250), nullable=True)
    opcion = db.Column(db.String(250), nullable=False)
    mensaje = db.Column(db.String(250), nullable=True)
    
    def __repr__(self):
        return '<Contactos %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "departamento": self.departamento,
            "telefono": self.telefono,
            "mail": self.mail,
            "foto": self.foto,
            "opcion": self.opcion,
            "mensaje": self.mensaje,
            # do not serialize the password, its a security breach
        }