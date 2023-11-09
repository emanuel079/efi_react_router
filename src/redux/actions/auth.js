import { ActionTypes } from '../../constants';

/* Login */
export const login = (params = {}) => {
  return {
    type: ActionTypes.LOGIN,
    payload: params,
  };
};

/* Logout */
export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  };
};

/* DarkMode */
export const setDarkMode = () => {
  return {
    type: ActionTypes.DARKMODE,
  };
};