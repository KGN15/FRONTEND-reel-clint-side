import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageContainer from "../components/PageContainer";
import Navbar from "../components/Navbar";
import BottomNav from "../components/BottomNav";
import FoodCard from "../components/FoodCard";
import PrimaryButton from "../components/PrimaryButton";

const categories = [
  { name: "Pizza", emoji: "🍕" },
  { name: "Burger", emoji: "🍔" },
  { name: "Chinese", emoji: "🥡" },
  { name: "Italian", emoji: "🍝" },
  { name: "Dessert", emoji: "🍰" },
];

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />

      <div className="flex-1 px-4 pb-24 space-y-8">

        {/* 🔥 Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            rounded-3xl p-6 
            bg-white/10 backdrop-blur-xl
            border border-white/10
            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
            text-white
          "
        >
          <h1 className="text-2xl md:text-3xl font-extrabold mb-1">
            Hungry? 🍽️
          </h1>
          <p className="text-sm opacity-90">
            Order food from your favourite restaurants
          </p>

          {/* Search */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search restaurants or dishes..."
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/20 backdrop-blur-sm
                placeholder-gray-200 text-white
                focus:outline-none focus:ring-2 focus:ring-white/50
              "
            />
          </div>
        </motion.div>

        {/* 🍱 Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Categories
          </h3>

          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <motion.div 
                key={cat.name} 
                whileTap={{ scale: 0.95 }}
                className="
                  flex-shrink-0 w-24 h-24 rounded-2xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/10
                  shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                  flex flex-col items-center justify-center
                  text-white cursor-pointer
                  transition-transform
                "
              >
                <span className="text-2xl">{cat.emoji}</span>
                <span className="text-sm font-medium mt-1">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </div>


        {/* 🍽️ Popular Restaurants */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-white">
              Popular Restaurants
            </h3>
            <span className="text-sm text-orange-400 cursor-pointer">
              See all →
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </div>
        </div>

      </div>

      <BottomNav />
    </PageContainer>
  );
};

export default HomePage;
