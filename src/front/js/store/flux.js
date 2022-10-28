import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      api_url:
        "https://3001-apa210-deliceli-xcdlom3ykdn.ws-us73.gitpod.io/api/",
      auth: false,
      profile: {
        email: "",
        user_name: "",
        first_name: "",
        last_name: "",
        rol: "",
      },
    },
    actions: {
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
          }
        } catch (error) {
          if (error.code === "ERR_BAD_REQUEST") {
            alert(error.response?.data?.message);
          }
        }
      },
    },
  };
};

export default getState;
