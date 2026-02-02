import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LogoutIcon } from "@heroicons/react/outline";

axios.defaults.withCredentials = true;

const LogoutIconBtn = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const url =
        role === "food-partner"
          ? "https://backend-reel-app-server.onrender.com/api/auth/food-partner/logout"
          : "https://backend-reel-app-server.onrender.com/api/auth/user/logout";

      await axios.get(url);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
      navigate("/login");
    }
  };

  return (
    <button onClick={handleLogout} title="Logout">
      <LogoutIcon className="w-7 h-7 text-white" />
    </button>
  );
};

export default LogoutIconBtn;
