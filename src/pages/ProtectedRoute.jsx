import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

const ProtectedRoute = ({ type }) => {
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const url =
      type === "food-partner"
        ? `${API_URL}/api/auth/check/food-partner`
        : `${API_URL}/api/auth/check/user`;

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
