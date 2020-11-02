const KEY = "token";

export const saveUserToken = (token) => {
  return localStorage.setItem(KEY, token);
};

export const getUserToken = (token) => {
  return localStorage.getItem(KEY, token);
};

export const deleteUserToken = (token) => {
  return localStorage.removeItem(KEY, token);
};
