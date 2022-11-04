import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      api_url:
        "https://3001-apa210-deliceli-cfusbv71ezu.ws-us74.gitpod.io/api/",
      auth: false,
      val: false,
      val_contact: false,
      profile: {},
      AllProducts: [],
      AllKitchens: [],
      product: {},
      kitchen: {},
      cart: [],
      AllProductsOfKitchen: [],
      search: "",
      searchResults: [],
      categories: [],
      AllProductsOfCategory: [],
      val_category: false,
    },
    actions: {
      getProductsOfCategory: async (category_id) => {
        let store = getStore();
        console.log(category_id);

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

      quit_product: (prod) => {
        let store = getStore();
        store.cart.splice(prod, 1);
        setStore({
          cart: store.cart,
        });
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
          console.log(store.AllProductsOfKitchen);
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
