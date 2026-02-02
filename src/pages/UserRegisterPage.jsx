import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import BackToHome from "../components/BackToHome";
import PrimaryButton from "../components/PrimaryButton";
const UserRegisterPage = () => {
    const navigate = useNavigate();
const API_URL = import.meta.env.VITE_API_URL;

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if (!fullName || !email || !password || !confirmPassword) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Password and Confirm Password do not match");
            return;
        }

        try {
            await axios.post(
                `${API_URL}/api/auth/user/register`,
                { fullName, email, password },
                { withCredentials: true }
            );

            navigate("/");
        } catch (err) {
            setError("Registration failed");
            console.error(err);
        }
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center 
        bg-gradient-to-br from-[#0a1a2f] via-black to-[#020617] px-4">

                <div className="
        w-full max-w-md 
        rounded-3xl 
        bg-white/90 dark:bg-[#020617]/90 
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        border border-white/10
        p-7
    ">

                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-extrabold tracking-tight 
            text-gray-900 dark:text-white">
                            Create Account
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Join Zomato & start your food journey 🍽️
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-4 rounded-xl bg-red-500/10 text-red-500 text-sm px-4 py-2 text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Full Name */}
                        <div>
                            <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                Full Name
                            </label>
                            <input
                                name="fullName"
                                type="text"
                                placeholder="John Doe"
                                className="
                        mt-1 w-full rounded-xl px-4 py-2.5
                        bg-gray-100 dark:bg-[#020617]
                        border border-gray-300 dark:border-gray-700
                        text-gray-900 dark:text-white
                        placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-blue-500/60
                    "
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="you@email.com"
                                className="
                        mt-1 w-full rounded-xl px-4 py-2.5
                        bg-gray-100 dark:bg-[#020617]
                        border border-gray-300 dark:border-gray-700
                        text-gray-900 dark:text-white
                        placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-blue-500/60
                    "
                            />
                        </div>

                        {/* Password */}
                        <div className="relative">
                            <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                Password
                            </label>
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="
                        mt-1 w-full rounded-xl px-4 py-2.5 pr-14
                        bg-gray-100 dark:bg-[#020617]
                        border border-gray-300 dark:border-gray-700
                        text-gray-900 dark:text-white
                        placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-blue-500/60
                    "
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-9 text-xs font-medium 
                    text-blue-600 dark:text-blue-400"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Confirm Password */}
                        <div className="relative">
                            <label className="text-xs font-medium text-gray-600 dark:text-gray-400">
                                Confirm Password
                            </label>
                            <input
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                className="
                        mt-1 w-full rounded-xl px-4 py-2.5 pr-14
                        bg-gray-100 dark:bg-[#020617]
                        border border-gray-300 dark:border-gray-700
                        text-gray-900 dark:text-white
                        placeholder-gray-400
                        focus:outline-none focus:ring-2 focus:ring-blue-500/60
                    "
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-9 text-xs font-medium 
                    text-blue-600 dark:text-blue-400"
                            >
                                {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <PrimaryButton children={'Registar'}  />
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link to="/login" className="text-blue-600 dark:text-blue-400 font-semibold">
                            Login
                        </Link>
                    </div>

                    <div className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Want to partner with us?{" "}
                        <Link to="/partner/register" className="text-blue-600 dark:text-blue-400 font-semibold">
                            Become a Partner
                        </Link>
                    </div>
                    <BackToHome />
                </div>
            </div>

        </>
    );
};

export default UserRegisterPage;
