import { USERS_LIST_INIT, USERS_LIST_SUCCESS, USERS_LIST_ERROR  } from "./types";
const initialStore = {
  data: [],
  error: null,
  success: null,
  loading: false,
};

export const usersReducer = (prevState = initialStore, action) => {
  switch (action.type) {
    case USERS_LIST_INIT:
      return {...prevState,
        loading: true,
      };
    case USERS_LIST_SUCCESS:
      return {...prevState, 
        data: action.payload,
        error: false,
        success: true,
        loading: false,
      };
    case USERS_LIST_ERROR:
      return {...prevState,
        error: action.payload,
        success: false,
        loading: false,
      };
    default:
      return prevState;
  }
};
