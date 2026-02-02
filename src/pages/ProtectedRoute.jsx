import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

const ProtectedRoute = ({ type }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const url =
      type === "food-partner"
        ? "https://backend-reel-app-server.onrender.com/api/auth/check/food-partner"
        : "https://backend-reel-app-server.onrender.com/api/auth/check/user";

    axios
      .get(url)
      .then(() => {
        setIsAuth(true);
        setLoading(false);
      })
      .catch(() => {
        setIsAuth(false);
        setLoading(false);
      });
  }, [type]);

  if (loading) return <div>Checking auth...</div>;

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
