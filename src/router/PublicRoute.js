import { useContext } from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
  const user = {
    logged: true,
  };

  return user.logged ? <Navigate to="/home" /> : children;
};
