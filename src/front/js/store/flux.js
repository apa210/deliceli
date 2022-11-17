import axios from "axios";

// funcion relacionada con el appContext.js... "guarda" variables y funciones que se "utilizan" en "muchos" y "diversos" componentes
// de la web y que necesitan mantenerse "sincronizados". Aqui es donde se sincronizan.
const getState = ({ getStore, getActions, setStore }) => {
  return {
    // lugar especifico donde se almacenan "datos" en estado bruto o para tratar a traves de funciones
    store: {
      // la url-base de la API, utilizada en las llamadas de la api, completada en la misma llamada
      api_url: process.env.BACKEND_URL,
      // validaciones; variables que sirven para indicar "estados" dentro de la web
      auth: false,
      val: false,
      val_contact: false,
      val_category: false,
      val_edit: false,
      val_cartAdd: false,
      // objetos; objetos que contienen datos obtenidos de las llamadas a la api para mostrar dichos datos en distintas partes de la web
      //    -> objetos; relacionadas al funcionamiento interno e independiente de la web:
      AllProducts: [],
      AllKitchens: [],
      product: {},
      kitchen: {},
      AllProductsOfKitchen: [],
      categories: [],
      AllProductsOfCategory: [],
      searchResults: [],
      //    -> objetos; relacionados con el Usuario
      profile: {},
      cart: [],
      menuKitchen: [],
      editProduct: {},
      allFavorites: [],	
      // auxiliares; variables que son sirven de forma auxiliar
      total: "0", // relacionada al carrito, muestra el total a pagar por parte del Usuario
      auxBuy: undefined, // relacionada al carrito, sirve como auxiliar para el funcionamiento interno de algunas funciones.
      search: "", // relacionada al buscador
      historyNav: "",
    },
    //
    //

    //
    //

    //
    actions: {
      // lugar especifico donde se almacenan "funciones" que "modifican" los datos de la store o hacen "llamadas" a la API
      //
      // ESTRUCTURA GENERAL DEL INDICE DE ESTA SECCION (ordenamiento de las funciones segun un indice):
      //
      // -<->- Funciones que se ejecutan al INICIO de la web     -<->- nombre clave corto: INICIO
      //    - Conseguir "todos" los productos                      0
      //    - Conseguir "todas" las cocinas                        1
      //    - Conseguir "todas" las categorias registradas         2
      //    - "VALIDAR" si el usuario esta logeado                 3
      //          - en caso "positivo", se seguiran realizando funciones al INICIO de la web
      //            - Conseguir el "perfil" del usuario            4
      //            - Conseguir el "carrito" actual del usuario    5
      //
      // -<->- Funciones que se ejecutan al usuario INTERACTUAR con la web       -<->- nombre clave corto: RESPUESTAS
      //    - Conseguir "un" producto                                              6
      //    - Conseguir "un" usuario vendedor                                      7
      //    - Conseguir los productos "filtrados" segun la categoria               8
      //    - Conseguir los productos segun lo "ingresado" en el "buscador"        9
      //    - Conseguir los productos que pertenecen a "un" usuario cocina         10
      //    - Registrar el "contacto" en la base de datos                          11
      //    - Registrar un "USUARIO" en la web                                     12
      //    - Logearse en la web                                                   13
      //    - Cerrar secion en el dispositivo                                      14

      //
      // -<->- Funciones que llaman a la API -<->-
      //

      //
      // las "actions" (funciones) almacenadas y ordenadas segun el INDICE
      //
      // -<0>- INICIO -<0>- Conseguir "todos" los productos
      //
      // esta funcion realiza una peticion a la API para conseguir todos los productos registrados
      // y los almacena en "store.AllProducts"
      //
      getAllProducts: async () => {
        let store = getStore();

        try {
          const response = await axios.get(
            store.api_url + process.env.GET_ALL_PRODUCTS
          );
          setStore({ AllProducts: response.data });
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<1>- INICIO -<1>- Conseguir "todas" las cocinas
      //
      // esta funcion realiza una peticion a la API para conseguir todos los "vendedores" (usuarios que venden) registrados
      // y los almacena en "store.AllKitchens"
      getAllKitchens: async () => {
        let store = getStore();

        try {
          const response = await axios.get(
            store.api_url + process.env.GET_ALL_KITCHENS
          );
          setStore({ AllKitchens: response.data });
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<2>- INICIO -<2>- Conseguir "todas" las categorias registradas
      //
      // esta funcion realiza una peticion a la API para conseguir "las categorias" registradas
      // las almacena en "store.categories"
      getCategories: async () => {
        let store = getStore();
        try {
          const response = await axios.get(
            store.api_url + process.env.GET_ALL_CATEGORIES
          );
          setStore({ categories: response?.data });
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<3>- INICIO -<3>- "VALIDAR" si el usuario esta logeado
      //
      // esta funcion realiza una peticion a la API para verificar si el token almacenado en el "localStorage" del usuario es valido.
      // en caso "negativo", cambia el estado "store.auth" a false (valor por defecto del estado)
      // en caso "positivo", cambia el estado "store.auth" a true (valor que espera de el status devuelto por la API)
      //    -> "store.auth" = true desencadena varias acciones en distintas partes de la web.
      //
      validateToken: async () => {
        const userToken = localStorage.getItem("token");
        const store = getStore();
        try {
          const response = await axios.get(
            store.api_url + process.env.VALIDATE_TOKEN,
            {
              headers: {
                Authorization: "Bearer " + userToken,
              },
            }
          );
          setStore({
            auth: response.data.status,
          });
        } catch (error) {
          if (error.code === "ERR_BAD_REQUEST") {
            setStore({
              auth: false,
            });
          }
        }
      },
      //

      // -<4>- INICIO -<4>- Conseguir el "perfil" del usuario
      //
      // esta funcion realiza una peticion a la API en la que manda el "token" esperando recibir los
      // datos del usuario al que corresponde dicho "token"
      // los almacena en "store.profile"
      //
      getProfile: async () => {
        const userToken = localStorage.getItem("token");
        const store = getStore();
        const actions = getActions();
        // valida si el "token sigue vigente", si "store.auth" sigue siendo true, hace la petición a la API
        await actions.validateToken();
        try {
          if (store.auth == true) {
            const response = await axios.get(
              store.api_url + process.env.GET_PROFILE,
              {
                headers: {
                  Authorization: "Bearer " + userToken,
                },
              }
            );
            let data = response?.data;

            data.user_name == null ? (data.user_name = "") : data.user_name;
            data.first_name == null ? (data.first_name = "") : data.first_name;
            data.last_name == null ? (data.last_name = "") : data.last_name;
            data.email == null ? (data.email = "") : data.email;
            data.telefono == null ? (data.telefono = "") : data.telefono;
            data.foto_usuario == null
              ? (data.foto_usuario = "")
              : data.foto_usuario;
            data.dirreccion == null ? (data.dirreccion = "") : data.dirreccion;
            data.direccion == null ? (data.direccion = "") : data.direccion;
            data.facebook == null ? (data.facebook = "") : data.facebook;
            data.twitter == null ? (data.twitter = "") : data.twitter;
            data.linkedin == null ? (data.linkedin = "") : data.linkedin;
            data.instagram == null ? (data.instagram = "") : data.instagram;
            data.dribble == null ? (data.dribble = "") : data.dribble;
            data.pinterest == null ? (data.pinterest = "") : data.pinterest;
            data.descripcion == null
              ? (data.descripcion = "")
              : data.descripcion;

            setStore({
              profile: data,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<5>- INICIO -<5>- Conseguir el "carrito" actual del usuario
      //
      // esta funcion realiza una peticion a la API para conseguir los productos del carrito actual del usuario logeado
      //
      getCart: async (user_id) => {
        const userToken = localStorage.getItem("token");
        const store = getStore();
        const actions = getActions();
        await actions.validateToken();
        try {
          if (store.auth == true) {
            const response = await axios.get(
              store.api_url + process.env.GET_CART,
              {
                headers: {
                  Authorization: "Bearer " + userToken,
                },
              }
            );
            setStore({
              cart: response?.data,
            });
            actions.update_total("initial");
          }
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<6>- RESPUESTAS -<6>- Conseguir "un" producto
      //
      // realiza una llamada a la API para conseguir los datos de un producto en particular - segun la ID
      // guarda lo que responde la API en "store.product"
      //
      getProduct: async (id) => {
        let store = getStore();

        try {
          const response = await axios.get(
            store.api_url + process.env.GET_PRODUCT + id
          );
          setStore({ product: response.data });
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<7>- RESPUESTAS -<7>- Conseguir "un" usuario vendedor
      //
      // los usuarios vendedores son "visibles" en nuestra web, para que al usuario cliente pueda visualizar
      // el perfil de a quien le esta comprando.
      // Esta funcion realiza una llamanda a la API para obtener los datos de "un" solo usuario vendedor
      // y almacenarlos en "store.kitchen"
      //
      getKitchen: async (id) => {
        let store = getStore();

        try {
          const response = await axios.get(
            store.api_url + process.env.GET_KITCHEN + id
          );
          setStore({ kitchen: response.data });
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<8>- RESPUESTAS -<8>- Conseguir los productos "filtrados" segun la categoria
      //
      // Esta funcion realiza una llamada a la API para conseguir una lista de los productos
      // que tengan "vinculado" en la base una determinada categoria
      // ya que las categorias propiamente dichas estan declaradas en la Base de Datos y tienen un
      // ID asignado con el que se vincula a los productos, la llamada pasa una ID determinada
      // y la APi devuelve los productos que contengan dicha relacion.
      // los almacena en "store.AllProductsCategory"
      //
      // A su vez, esto sucede en la misma vista que se imprimen los productos obtenidos de otra
      // llamada a la API, por lo que modifica el valor de un "estado" segun corresponda para
      // determinar que objeto mostrar en dicha vista
      //
      getProductsOfCategory: async (category_id) => {
        let store = getStore();

        if (category_id === 0) {
          setStore({ val_category: false });
        } else {
          try {
            const response = await axios.get(
              store.api_url + process.env.GET_PRODUCTS_CATEGORY + category_id
            );
            setStore({ AllProductsOfCategory: response?.data });
            setStore({ val_category: true });
          } catch (error) {
            console.log(error);
            setStore({ val_category: false });
          }
        }
      },
      //

      // -<9>- RESPUESTAS -<9>- Conseguir los productos segun lo "ingresado" en el "buscador"
      //
      // Esta funcion realiza una llamada a la API donde espera obtener los "productos" que haya
      // obtenido segun lo que se le pasa (texto); tambien se hace uso del auxiliar "store.texto"
      // para que dicho valor (ingresado por el usuario) se imprima en la pantalla individual del
      // buscador.
      //
      search: async (texto) => {
        let store = getStore();
        try {
          const response = await axios.get(
            store.api_url + process.env.SEARCH + texto
          );
          setStore({ searchResults: response.data });
          setStore({ search: texto });
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<10>- RESPUESTAS -<10>- Conseguir los productos que pertenecen a "un" usuario cocina
      //
      // Esta funcion realiza una peticion para conseguir "todos" los productos, y filtra
      // segun corresponda los ID's tanto que se le pasa como el ID que devuelve el producto
      // (esta ID es la ID a quien pertenece el producto)
      //
      getAllProductsOfKitchen: async (kitchen_id) => {
        let store = getStore();
        try {
          const response = await axios.get(
            store.api_url + process.env.GET_ALL_PRODUCTS
          );
          const aux = response.data.map((item) => {
            if (item.cocina_id == kitchen_id) {
              return item;
            }
          });
          let result = aux.filter((item) => {
            if (item != undefined) {
              return item;
            }
          });
          setStore({ AllProductsOfKitchen: result });
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<11>- RESPUESTAS -<11>- Registrar el "contacto" en la base de datos
      //
      // esta funcion recibe los "datos" ingresados por el usuario y los registra en la Base de Datos.
      // la Base de Datos no recibe un contacto que contenga un correo que ya haya enviado alguna vez un contacto.
      // se hace uso de un estado "store.val_contact" para determinar que "mensaje" se le mostrara al usuario.
      //
      savedContact: async (
        nombre,
        departamento,
        telefono,
        mail,
        opcion,
        mensaje
      ) => {
        let store = getStore();
        try {
          const response = await axios.post(
            store.api_url + process.env.CONTACT,
            {
              nombre: nombre,
              departamento: departamento,
              telefono: telefono,
              mail: mail,
              opcion: opcion,
              mensaje: mensaje,
            }
          );
          if (response.status === 200) {
            setStore({
              val_contact: true,
            });
          } else {
            setStore({
              val_contact: false,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      //

      // -<12>- RESPUESTAS -<12>- Registrar un "USUARIO" en la web
      //
      // Esta funcion envia los datos del usuario a la API para ser registrado en la Base de Datos.
      // recibe un estado, "store.val", que cambia para determinar que mensaje mostrar al usuario, este puede cambiar segun
      // varios factores que estan determinados en "login.js"
      //
      signup: async (
        first_name,
        last_name,
        email,
        user_name,
        phone,
        password
      ) => {
        let store = getStore();
        try {
          const response = await axios.post(store.api_url + process.env.SIGN, {
            first_name: first_name,
            last_name: last_name,
            email: email,
            user_name: user_name,
            phone: phone,
            password: password,
          });

          if (response.status === 200) {
            setStore({
              val: true,
            });
          } else {
            setStore({
              auth: false,
            });
            setStore({
              val: false,
            });
          }
        } catch (error) {
          if (error.code === "ERR_BAD_REQUEST") {
            setStore({
              auth: false,
            });
          }
        }
      },
      //

      // -<13>- RESPUESTAS -<13>- Logearse en la web
      //
      // Funcion que realiza una peticion a la API para "logear" al usuario en la web. Guarda un "token" en el localStorage.
      //
      login: async (email, password) => {
        let store = getStore();

        try {
          const response = await axios.post(store.api_url + process.env.ENTER, {
            email: email,
            password: password,
          });
          if (response.status === 200) {
            localStorage.setItem("token", response.data.access_token);

            setStore({ auth: true });
            setStore({
              profile: {
                email: response?.data?.user?.email,
                user_name: response?.data?.user?.user_name,
                first_name: response?.data?.user?.first_name,
                last_name: response?.data?.user?.last_name,
                rol: response?.data?.user?.rol,
              },
            });
          } else {
            setStore({
              auth: false,
            });
          }
        } catch (error) {
          if (error.code === "ERR_BAD_REQUEST") {
            setStore({
              auth: false,
            });
            setStore({
              profile: {
                email: "",
                user_name: "",
                first_name: "",
                last_name: "",
                rol: "",
              },
            });
          }
        }
      },
      //

      // -<14>- RESPUESTAS -<14>- Cerrar secion en el dispositivo
      //
      // elimina el "token" del localStorage, cambia el estado "store.auth" para dar a entender a la web que ya no esta logeado el usuario
      // y elimina los datos almacenados en "store.profile"
      logout: () => {
        localStorage.removeItem("token");
        setStore({ auth: false });
        setStore({ profile: {} });
      },
      //

      changeAlerts: (operation) => {
        if (operation === "buy_repit") {
          setStore({ val_cartAdd: false });
        } else if (operation === "buy_new") {
          setStore({ val_cartAdd: true });
        }
      },

      // FUNCIONES PARA DOCUMENTAR
      buy_product: async (producto_id, cocina_id, precio_unitario) => {
        let store = getStore();
        let actions = getActions();
        await actions.validateToken().then(async () => {
          if (store.auth == true) {
            if (store.cart !== [] && store.cart.length != 0) {
              store.cart.filter((item) => {
                if (producto_id == item?.producto_id) {
                  setStore({ auxBuy: [item] });
                }
              });

              if (
                producto_id ===
                (store.auxBuy == undefined
                  ? store.auxBuy
                  : store.auxBuy[0]?.producto_id)
              ) {
                // si el producto ya existe en el carrito
                await actions.changeAlerts("buy_repit");
              } else {
                try {
                  let reqInstance = axios.create({
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  });
                  const response = await reqInstance
                    .post(store.api_url + process.env.ADD_CART, {
                      usuario_id: store?.profile?.id,
                      producto_id: producto_id,
                      cocina_id: cocina_id,
                      cantidad: 1,
                      precio_unitario: precio_unitario,
                      total: precio_unitario,
                    })
                    .then(() => actions.getCart(store.profile?.id));
                  await actions.changeAlerts("buy_new");
                } catch (error) {
                  console.log(error);
                }
              }
            } else {
              try {
                let reqInstance = axios.create({
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                });
                const response = await reqInstance
                  .post(store.api_url + process.env.ADD_CART, {
                    usuario_id: store?.profile?.id,
                    producto_id: producto_id,
                    cocina_id: cocina_id,
                    cantidad: 1,
                    precio_unitario: precio_unitario,
                    total: precio_unitario,
                  })
                  .then(() => actions.getCart(store.profile?.id));
                await actions.changeAlerts("buy_new");
              } catch (error) {
                console.log(error);
              }
            }
          } 
        });
      },
      update_total: (operation, value) => {
        let store = getStore();
        let actions = getActions();
        actions.validateToken();
        if (store.auth == true) {
          operation == "update" ? setStore({ total: value }) : null;
          if (operation == "initial") {
            let aux = () => {
              let map_ = store.cart.map((item) => {
                return item.cantidad_carrito * item.precio;
              });
              let total_aux = 0;
              for (let i of map_) {
                total_aux += i;
              }
              return total_aux;
            };

            setStore({ total: aux() });
          }
        }
      },
      update_cart: async (
        prod_id,
        quantity,
        price,
        unit_price,
        operation,
        value
      ) => {
        let store = getStore();
        const actions = getActions();
        actions.validateToken().then(async () => {
          if (operation == "update") {
            try {
              if (store.auth == true) {
                let reqInstance = axios.create({
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                });
                const response = await reqInstance.put(
                  store.api_url + process.env.UPDATE_CART,
                  {
                    usuario_id: store?.profile?.id,
                    producto_id: prod_id,
                    cantidad: quantity,
                    total: price,
                    precio_unitario: unit_price,
                  }
                );
                actions.getCart(store.profile?.id);
              }
            } catch (error) {
              console.log(error);
            }
          }
          if (operation == "initial") {
            if (store.auth == true) {
              if (value != []) {
                setStore({ cart: value });
              }
            }
          }
          if (operation == "update_flux") {
            if (store.auth == true) {
              setStore({ cart: value });
            }
          }
        });
      },

      quit_product: async (prod, prod_id) => {
        let store = getStore();
        let actions = getActions();
        const userToken = localStorage.getItem("token");
        try {
          const response = await fetch(
            store.api_url + process.env.QUIT_CART + prod_id,
            {
              method: "DELETE",
              body: JSON.stringify({
                prod_id: prod_id,
              }),
              headers: {
                Authorization: "Bearer " + userToken,
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 200) {
            store.cart.splice(prod, 1);
            setStore({
              cart: store.cart,
            });
            actions.getCart(store.profile?.id);
          } else {
            window.location.reload();
          }
        } catch (err) {
          console.log(err);
        }
      },

      getMenu: async () => {
        const userToken = localStorage.getItem("token");
        let store = getStore();
        let actions = getActions();
        actions.validateToken();
        try {
          if (store.auth == true) {
            const response = await axios.get(store.api_url + process.env.MENU, {
              headers: {
                Authorization: "Bearer " + userToken,
              },
            });
            setStore({ menuKitchen: response?.data });
            if (response?.status != 200) {
              window.location.reload();
            }
          } else {
            window.location.reload();
          }
        } catch (error) {
          console.log(error);
        }
      },
      // POINT
      editProduct: async (prod_id, kit_id, value, operation) => {
        let store = getStore();
        let actions = getActions();
        actions.validateToken();
        if (store.auth == true) {
          if (operation == "edit") {
            if (
              store.profile?.id === kit_id &&
              store.profile?.rol === "cocina"
            ) {
              setStore({ editProduct: value });
              setStore({ val_edit: true });
            } else {
              setStore({ editProduct: {} });
              setStore({ val_edit: false });
              window.location.reload();
            }
          }
          if (operation == "add") {
            setStore({
              editProduct: {
                nombre: "",
                cantidad_producto: "-10000",
                precio: "",
                descripcion: "",
                foto_producto: "",
                category: [],
              },
            });
            setStore({ val_edit: true });
          }
        } else {
          setStore({ editProduct: {} });
          setStore({ val_edit: false });
          window.location.reload();
        }
      },

      modHistoryNav: (value) => {
        setStore({ historyNav: value });
      },

      uploadProduct: async (
        name,
        description,
        price,
        quantity,
        img,
        category
      ) => {
        let store = getStore();
        let actions = getActions();
        await actions.validateToken();

        if (store.auth == true) {
          let reqInstance = axios.create({
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const response = await reqInstance.post(
            store.api_url + process.env.MENU,
            {
              nombre: name,
              descripcion: description,
              precio: price,
              cantidad: quantity,
              foto: img,
              categoria: category,
            }
          );
          await actions.getMenu();
        }
      },
      removeProduct: async (prod_id) => {
        let store = getStore();
        let actions = getActions();
        await actions.validateToken();

        if (store.auth == true) {
          let reqInstance = axios.create({
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const response = await reqInstance.delete(
            store.api_url + process.env.QUIT_MENU_PRODUCT + prod_id
          );
          actions.getMenu();
        }
      },

      uploadProfile: async (
        user_name,
        first_name,
        last_name,
        email,
        telefono,
        foto,
        direccion,
        facebook,
        twitter,
        linkedin,
        instagram,
        dribble,
        pinterest,
        descripcion
      ) => {
        let store = getStore();
        let actions = getActions();
        await actions.validateToken();

        if (store.auth == true) {
          let reqInstance = axios.create({
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const response = await reqInstance.put(
            store.api_url + process.env.EDIT_PROFILE,
            {
              user_name: user_name,
              first_name: first_name,
              last_name: last_name,
              email: email,
              telefono: telefono,
              foto: foto,
              direccion: direccion,
              facebook: facebook,
              twitter: twitter,
              linkedin: linkedin,
              instagram: instagram,
              dribble: dribble,
              pinterest: pinterest,
              descripcion: descripcion,
            }
          );
          await actions.getProfile();
        }
      },

      updateProduct: async (
        prod_id,
        name,
        description,
        price,
        quantity,
        img,
        category
      ) => {
        let store = getStore();
        let actions = getActions();
        await actions.validateToken();

        if (store.auth == true) {
          let reqInstance = axios.create({
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const response = await reqInstance.put(
            store.api_url + process.env.MENU,
            {
              producto_id: prod_id,
              nombre: name,
              descripcion: description,
              precio: price,
              cantidad: quantity,
              foto: img,
              categoria: category,
            }
          );
          await actions.getMenu();
        }
      },

      changePassword: async (old_password, new_password, repit_password) => {
        let store = getStore();
        let actions = getActions();
        await actions.validateToken();
        if (new_password === repit_password) {
          if (store.auth == true) {
            let reqInstance = axios.create({
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            });
            const response = await reqInstance.put(
              store.api_url + process.env.CHANGE_PASSWORD,
              {
                old_password: old_password,
                new_password: new_password,
              }
            );
            setTimeout(() => {
              window.location.reload;
            }, 2000);
          }
        }
      },

      getAllFavorites: async () => {
        const userToken = localStorage.getItem("token");
        let store = getStore();
        let actions = getActions();
        await actions.validateToken();
        try {
          if (store.auth == true) {
            const response = await axios.get(store.api_url + process.env.GET_FAVORITES, {
              headers: {
              Authorization: "Bearer " + userToken,
              },
            });
            setStore({allFavorites: response?.data });
            if (response?.status != 200) {
              window.location.reload();
            }
          } else {
          window.location.reload();
          }
        } catch (error) {
          console.log(error);
        }
      },

      //
    },
  };
};

export default getState;
