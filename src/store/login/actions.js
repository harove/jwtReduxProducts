import { LOGIN_USER_ERROR, LOGIN_USER_INIT, LOGIN_USER_SUCCESS } from "./types";

export const userLogin = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_INIT });

    const loginSuccess = (response) => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response });
    };
    const loginFail = (error) => {
      dispatch({ type: LOGIN_USER_ERROR, payload: error });
    };

    try {
      // fetch("http://localhost:4000/auth/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     username: "alex",
      //     password: "123",
      //   }),
        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.token) {
            localStorage.token = data.token;
            loginSuccess(email);
          } else loginFail(data.error);
        });
    } catch (error) {
      loginFail(error);
    }
  };
};
