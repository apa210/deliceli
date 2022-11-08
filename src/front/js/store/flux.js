import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      api_url:
        "https://3001-apa210-deliceli-cfusbv71ezu.ws-us75.gitpod.io/api/",
      auth: false,
      val: false,
      val_contact: false,
      profile: {},
      AllProducts: [],
      AllKitchens: [],
      product: {},
      kitchen: {},
      cart: [],
      total: "0",
      AllProductsOfKitchen: [],
      search: "",
      searchResults: [],
      categories: [],
      AllProductsOfCategory: [],
      val_category: false,
      auxBuy: undefined,
    },
    actions: {
      buy_product: async (producto_id, cocina_id, precio_unitario) => {
        let store = getStore();
        let actions = getActions();
        actions.validateToken();
        if (store.auth == true) {
          if (store.cart !== [] && store.cart.length != 0) {
            console.log(store.cart);
            store.cart.filter((item) => {
              if (producto_id == item?.producto_id) {
                setStore({ auxBuy: [item] });
              }
            });
            // console.log(store.auxBuy);

            if (
              producto_id ===
              (store.auxBuy == undefined
                ? store.auxBuy
                : store.auxBuy[0]?.producto_id)
            ) {
              // si el producto ya existe en el carrito
              console.log("Filtro exitoso");

              console.log(store.auxBuy);
              let auxFunction = () => {
                if (store.auxBuy != undefined) {
                  let aux_aux = store.auxBuy.map((item) => {
                    let aux_quantity = item.cantidad_carrito + 1;
                    item.cantidad_carrito = aux_quantity;
                    return item;
                  });
                  return aux_aux;
                }
              };

              setStore({ auxBuy: auxFunction() });
              actions.update_cart(
                undefined,
                undefined,
                undefined,
                undefined,
                "update_flux",
                store.cart.filter((item, index) => {
                  if (item !== store.auxBuy) {
                    return item;
                  }
                })
              );
              actions.update_total("initial", undefined);
            } else {
              try {
                const response = await axios.post(
                  store.api_url + "cart/addProduct",
                  {
                    usuario_id: store?.profile?.id,
                    producto_id: producto_id,
                    cocina_id: cocina_id,
                    cantidad: 1,
                    precio_unitario: precio_unitario,
                    total: precio_unitario,
                  }
                );
                console.log(response);
                window.location.reload();
              } catch (error) {
                console.log(error);
              }
            }
          } else {
            try {
              const response = await axios.post(
                store.api_url + "cart/addProduct",
                {
                  usuario_id: store?.profile?.id,
                  producto_id: producto_id,
                  cocina_id: cocina_id,
                  cantidad: 1,
                  precio_unitario: precio_unitario,
                  total: precio_unitario,
                }
              );
              console.log(response);
              window.location.reload();
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          alert("Precisas logearte para añadir productos al carrito");
        }
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
        actions.validateToken();
        if (operation == "update") {
          try {
            if (store.auth == true) {
              const response = await axios.put(
                store.api_url + "cart/editProduct",
                {
                  usuario_id: store?.profile?.id,
                  producto_id: prod_id,
                  cantidad: quantity,
                  total: price,
                  precio_unitario: unit_price,
                }
              );
              console.log(response);
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
            console.log("cart modificado");
            console.log(value);
          }
        }
      },
      getProductsOfCategory: async (category_id) => {
        let store = getStore();

        if (category_id === 0) {
          setStore({ val_category: false });
        } else {
          try {
            const response = await axios.get(
              store.api_url + "productsCategory/" + category_id
            );
            setStore({ AllProductsOfCategory: response?.data });
            setStore({ val_category: true });
          } catch (error) {
            console.log(error);
            setStore({ val_category: false });
          }
        }
      },
      getCategories: async () => {
        let store = getStore();
        try {
          const response = await axios.get(store.api_url + "category");
          setStore({ categories: response?.data });
        } catch (error) {
          console.log(error);
        }
      },
      search: async (texto) => {
        let store = getStore();
        try {
          const response = await axios.get(
            store.api_url + "products/find/" + texto
          );
          setStore({ searchResults: response.data });
          setStore({ search: texto });
        } catch (error) {
          console.log(error);
        }
      },

      quit_product: async (prod, prod_id) => {
        let store = getStore();

        try {
          const response = await fetch(
            store.api_url +
              "cart/deletedProduct/" +
              store?.profile?.id +
              "/" +
              prod_id,
            {
              method: "DELETE",
              body: JSON.stringify({
                prod_id: prod_id,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 200) {
            store.cart.splice(prod, 1);
            setStore({
              cart: store.cart,
            });
          } else {
            window.location.reload();
          }
        } catch (err) {
          console.log(err);
        }
      },
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
          const response = await axios.post(store.api_url + "contact", {
            nombre: nombre,
            departamento: departamento,
            telefono: telefono,
            mail: mail,
            opcion: opcion,
            mensaje: mensaje,
          });
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
      getAllProductsOfKitchen: async (kitchen_id) => {
        let store = getStore();
        try {
          const response = await axios.get(store.api_url + "products");
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
      getCart: async (user_id) => {
        const userToken = localStorage.getItem("token");
        const store = getStore();
        const actions = getActions();
        actions.validateToken();
        try {
          if (store.auth == true) {
            const response = await axios.get(
              store.api_url + "cart/productsCart/" + user_id
            );
            setStore({
              cart: response?.data,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      getProfile: async () => {
        const userToken = localStorage.getItem("token");
        const store = getStore();
        const actions = getActions();
        actions.validateToken();
        try {
          if (store.auth == true) {
            const response = await axios.get(store.api_url + "user/profile", {
              headers: {
                Authorization: "Bearer " + userToken,
              },
            });
            setStore({
              profile: response?.data,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      validateToken: async () => {
        const userToken = localStorage.getItem("token");
        const store = getStore();
        try {
          const response = await axios.get(store.api_url + "valid-token", {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          });
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
      getAllKitchens: async () => {
        let store = getStore();

        try {
          const response = await axios.get(store.api_url + "kitchens");
          setStore({ AllKitchens: response.data });
        } catch (error) {
          console.log(error);
        }
      },
      getKitchen: async (id) => {
        let store = getStore();

        try {
          const response = await axios.get(store.api_url + "kitchen/" + id);
          setStore({ kitchen: response.data });
        } catch (error) {
          console.log(error);
        }
      },

      getAllProducts: async () => {
        let store = getStore();

        try {
          const response = await axios.get(store.api_url + "products");
          setStore({ AllProducts: response.data });
        } catch (error) {
          console.log(error);
        }
      },

      getProduct: async (id) => {
        let store = getStore();

        try {
          const response = await axios.get(store.api_url + "product/" + id);
          setStore({ product: response.data });
        } catch (error) {
          console.log(error);
        }
      },

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
          const response = await axios.post(store.api_url + "signup", {
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
      login: async (email, password) => {
        let store = getStore();

        try {
          const response = await axios.post(store.api_url + "login", {
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
            alert("Wrong email or password");
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
      logout: () => {
        localStorage.removeItem("token");
        setStore({ auth: false });
        setStore({ profile: {} });
      },
    },
  };
};

export default getState;
