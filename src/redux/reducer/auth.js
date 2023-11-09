import { ActionTypes } from '../../constants';

const initialState = {
  isAuthenticated: false,
  loading: false,
  darkmode: false,
  user: null,
  list: [],
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    // Login
    case ActionTypes.LOGIN: {
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
      };
    }
    // Logout
    case ActionTypes.LOGOUT: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }

    // Logout
    case ActionTypes.DARKMODE: {
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    }

    //Get Data
    case ActionTypes.GET_DATA: {
      return {
        ...state,
        list: payload,
      };
    }

    default:
      return state;
  }
};

export default auth;
