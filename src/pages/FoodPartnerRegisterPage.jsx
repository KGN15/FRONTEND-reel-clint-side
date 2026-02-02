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
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const address = e.target.address.value;

        if (!name || !email || !password || !confirmPassword || !address) {
            setError("All fields are required");
            return;
        }

        if (password !== confirmPassword) {
            setError("Password does not match");
            return;
        }

        try {
            const res = await axios.post(
                "https://backend-reel-app-server.onrender.com/api/auth/food-partner/register",
                { name, email, password, address },
                { withCredentials: true }
            );

            console.log(res.data);
            navigate("/partner/dashboard");

        } catch (err) {
            console.log(err.response?.data);
            setError(err.response?.data?.message || "Registration failed");
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
                            Partner Registration
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Join as a partner & grow your restaurant 🍽️
                        </p>
                    </div>

                    {/* Error */}
                    {error && (
                        <div className="mb-4 rounded-xl bg-red-500/10 text-red-500 text-sm px-4 py-2 text-center">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input name="name" label="Restaurant Name" placeholder="Enter restaurant name" className="
                                mt-1 w-full rounded-xl px-4 py-2.5 pr-14
                                bg-gray-100 dark:bg-[#020617]
                                border border-gray-300 dark:border-gray-700
                                text-gray-900 dark:text-white
                                placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500/60
                            " />
                        <input name="email" label="Email" type="email" placeholder="Enter your email" className="
                                mt-1 w-full rounded-xl px-4 py-2.5 pr-14
                                bg-gray-100 dark:bg-[#020617]
                                border border-gray-300 dark:border-gray-700
                                text-gray-900 dark:text-white
                                placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500/60
                            " />
                        <input
                            name="address"
                            label="address"
                            type="text"
                            placeholder="Enter your address"
                            className="
                                mt-1 w-full rounded-xl px-4 py-2.5 pr-14
                                bg-gray-100 dark:bg-[#020617]
                                border border-gray-300 dark:border-gray-700
                                text-gray-900 dark:text-white
                                placeholder-gray-400
                                focus:outline-none focus:ring-2 focus:ring-blue-500/60
                            "
                        />

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

                        {/* Confirm Password */}
                        <div className="relative">
                            <input
                                name="confirmPassword"
                                label="Confirm Password"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm your password"
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
                                className="absolute right-4 top-5 text-xs font-medium text-blue-600 dark:text-blue-400"
                            >
                                {showConfirmPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <PrimaryButton children={'Registar'} />
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                        Already have an account?{" "}
                        <Link to="/partner/login" className="text-blue-600 dark:text-blue-400 font-semibold">
                            Login
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
