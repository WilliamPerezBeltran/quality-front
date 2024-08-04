import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import { AuthContext } from "../auth/AuthContext.js";


export const AuthRouteComponent = ({ path }) => {
  const { userInfo } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const user = Cookies.get('access_token');
    if (user) {
      navigate(path, { replace: true });
    } else {
      if (!userInfo) {
        navigate("/", { replace: true });
      }
    }
  }, [location.pathname, navigate, path, userInfo]);

  // Render children if authorized
  return <Outlet />;
};