import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  PlayIcon,
  BookmarkIcon,
  ColorSwatchIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: HomeIcon, path: "/" },
    { name: "Saved", icon: BookmarkIcon, path: "/saved" },
    { name: "About", icon: ColorSwatchIcon, path: "/about" },
  ];

  return (
    <nav
      className="
        fixed bottom-4 left-4 right-4
        bg-white/10 backdrop-blur-xl
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        rounded-3xl
        z-50 px-6 py-2
      "
    >
      <div className="flex justify-around">
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="flex flex-col items-center group"
            >
              <motion.div
                animate={active ? { scale: 1.3 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon
                  className={`w-6 h-6 transition-colors duration-300 ${active
                    ? "text-blue-500"
                    : "text-gray-400 group-hover:text-blue-400"
                    }`}
                />
              </motion.div>

              <span
                className={`text-xs mt-1 font-medium transition-colors duration-300 ${active ? "text-blue-500" : "text-gray-400"
                  }`}
              >
                {item.name}
              </span>

              {active && (
                <motion.div
                  className="w-2 h-2 bg-blue-500 rounded-full mt-1"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
