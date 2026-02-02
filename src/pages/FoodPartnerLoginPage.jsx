import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PageContainer from '../components/PageContainer';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';
import BackToHome from "../components/BackToHome";

const FoodPartnerRegisterPage = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            setError("All fields are required");
            return;
        }



        try {
            await axios.post(
                "https://backend-reel-app-server.onrender.com/api/auth/food-partner/login",
                { email, password },
                { withCredentials: true }
            );

            navigate("/partner/dashboard");
        } catch (err) {
            setError("Login failed. Please try again.");
            console.error(err);
        }
    };

    return (
        <PageContainer>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1a2f] via-black to-[#020617] px-4">
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
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Partner Login
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Wellcome Back to grow your restaurant 🍽️
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-4 rounded-xl bg-red-500/10 text-red-500 text-sm px-4 py-2 text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input name="email" label="Email" type="email" placeholder="Enter your email" className="
                                mt-1 w-full rounded-xl px-4 py-2.5 pr-14
                                bg-gray-100 dark:bg-[#020617]
                                border border-gray-300 dark:border-gray-700
                                text-gray-900 dark:text-white
                                placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500/60
                            " />

                        {/* Password */}
                        <div className="relative">
                            <input
                                name="password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a password"
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
                                className="absolute right-4 top-5 text-xs font-medium text-blue-600 dark:text-blue-400"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <PrimaryButton children={'Login'} />
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link to="/partner/register" className="text-blue-600 dark:text-blue-400 font-semibold">
                            Register
                        </Link>
                    </div>
                    <div className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        User registration?{" "}
                        <Link to="/register" className="text-blue-600 dark:text-blue-400 font-semibold">
                            Register as User
                        </Link>
                    </div>
                    <BackToHome />
                </div>
            </div>
        </PageContainer>
    );
};

export default FoodPartnerRegisterPage;
