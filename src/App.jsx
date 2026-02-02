import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLoginPage from './pages/UserLoginPage';
import UserRegisterPage from './pages/UserRegisterPage';
import FoodPartnerLoginPage from './pages/FoodPartnerLoginPage';
import FoodPartnerRegisterPage from './pages/FoodPartnerRegisterPage';
import HomePage from './pages/HomePage';
import FoodDetailsPage from './pages/FoodDetailsPage';
import FoodPartnerDashboard from './pages/FoodPartnerDashboard';
import Videos from './pages/Videos';
import Profile from './pages/Profile'
import Saved from './pages/Saved';
import NotFound from './pages/NotFound';
import ProtectedRoute from './pages/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/register" element={<UserRegisterPage />} />
        <Route path="/partner/login" element={<FoodPartnerLoginPage />} />
        <Route path="/partner/register" element={<FoodPartnerRegisterPage />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<ProtectedRoute type="food-partner" />}>

          <Route path="/partner/dashboard" element={<FoodPartnerDashboard />} />
        </Route>

        <Route element={<ProtectedRoute type="user" />}>
          <Route path="/food/:id" element={<FoodDetailsPage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/" element={<Videos />} />
          <Route path="/food-partner/:id" element={<Profile />} />
          
          <Route path="/saved" element={<Saved />} />
        </Route >
      </Routes>
    </Router>
  );
};

export default App;
