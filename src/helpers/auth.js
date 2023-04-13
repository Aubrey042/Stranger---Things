// src/helpers/auth.js
export const logIn = (token, setUser, setIsLoggedIn) => {
  localStorage.setItem("token", token);
  setIsLoggedIn(true);
  setUser(token);
};

export const logOut = (setUser, setIsLoggedIn) => {
  localStorage.removeItem("token");
  setIsLoggedIn(false);
  setUser(null);
};

export const isLoggedIn = () => {
  return localStorage.getItem("token");
};

export const makeHeaders = () => {
  const token = localStorage.getItem("token");
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  return headers;
};
