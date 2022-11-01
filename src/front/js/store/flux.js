import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      api_url:
        "https://3001-apa210-deliceli-cfusbv71ezu.ws-us73.gitpod.io/api/",
      auth: false,
      profile: {},
      AllProducts: [],
    },
    actions: {
      getAllProducts: async () => {
        let store = getStore();

        try {
          const response = await axios.get(store.api_url + "products");
          setStore({ AllProducts: response.data });
          console.log(response);
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
            alert("Registrado con exito");
          } else {
            setStore({
              auth: false,
            });
          }
        } catch (error) {
          if (error.code === "ERR_BAD_REQUEST") {
            alert(error.response?.data?.message);
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
          console.log(response);
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
            // setStore({
            //   profile: {                         // pasarlo a getProfile(), añadir el validate-token
            //     email: "",
            //     user_name: "",
            //     first_name: "",
            //     last_name: "",
            //     rol: "",
            //   },
            // });
          }
        } catch (error) {
          if (error.code === "ERR_BAD_REQUEST") {
            alert(error.response?.data?.message);
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
