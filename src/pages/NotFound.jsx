import { HomeIcon, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4
      bg-gradient-to-br from-[#0a1a2f] via-black to-[#020617]">

      {/* Glass Card */}
      <div className="relative w-full max-w-md rounded-3xl p-8
        bg-white/10 backdrop-blur-2xl
        border border-white/20
        shadow-[0_30px_80px_rgba(0,0,0,0.6)]
        text-center">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-red-500/20">
            <AlertTriangle className="w-10 h-10 text-red-500" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-extrabold text-red-500 tracking-wider">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-2 text-2xl font-bold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-sm text-gray-300 leading-relaxed">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8
          px-6 py-3 rounded-xl
          bg-gradient-to-r from-blue-600 to-cyan-500
          text-white font-semibold
          shadow-lg shadow-blue-500/30
          hover:scale-105 hover:shadow-cyan-500/40
          transition-all duration-300"
        >
          <HomeIcon className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
