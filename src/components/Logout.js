import React from "react";
import { useNavigate } from "react-router";
import { logOut } from "../helpers/auth";

const Logout = ({ setUser, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    logOut(setUser, setIsLoggedIn);
    navigate("/");
  };

  return (
    <button onClick={handleClick}>
      Logout
    </button>
  );
};

export default Logout;
