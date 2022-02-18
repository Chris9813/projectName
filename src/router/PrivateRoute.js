import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const user = {
    logged: true,
  };
  //const { pathname, search } = useLocation();

  //localStorage.setItem("lastPath", pathname + search);

  return user.logged ? children : <Navigate to="/login" />;
};
