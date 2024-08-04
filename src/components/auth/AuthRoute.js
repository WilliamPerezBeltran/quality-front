import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { AuthContext } from "./AuthContext";

export const AuthRouteComponent = ({ children }) => {
  const { userInfo } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const user = Cookies.get("access_token");
    if (!user) {
      navigate("/", { replace: true }); // Redirige si no está autenticado
    }
  }, [navigate, userInfo, location.pathname]);

  return userInfo ? children : null; // Renderiza hijos si está autenticado
};
