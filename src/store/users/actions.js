import {
  USERS_LIST_INIT,
  USERS_LIST_SUCCESS,
  USERS_LIST_ERROR
} from "./types";

export const userList = () => {
  return (dispatch) => {
    dispatch({ type: USERS_LIST_INIT });

    const userListSuccess = (data) => {
      dispatch({ type: USERS_LIST_SUCCESS, payload: data });
    };
    const userListFail = (error) => {
      dispatch({ type: USERS_LIST_ERROR, payload: error });
    };

    try {
      fetch("http://localhost:4000/users", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.token}`,
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data) {
            userListSuccess(data);
          } else userListFail(data.error);
        });
    } catch (error) {
      userListFail(error);
    }
  };
};
