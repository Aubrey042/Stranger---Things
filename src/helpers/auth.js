export const logOut = (setUser, setIsLoggedIn) => {
  localStorage.removeItem("token");
  setIsLoggedIn(false);
  setUser(null);
};
