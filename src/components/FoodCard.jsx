import { motion } from "framer-motion";

const FoodCard = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="
        bg-white/10 backdrop-blur-xl
        rounded-2xl
        shadow-[0_15px_40px_rgba(0,0,0,0.25)]
        overflow-hidden
        cursor-pointer
        transition-transform duration-300
      "
    >
      {/* Emoji / Image Header */}
      <div className="
        h-36 bg-gradient-to-br from-orange-300 to-pink-300
        flex items-center justify-center
        text-white text-3xl font-bold
      ">
        🍕
      </div>

      {/* Info Section */}
      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-white text-lg">
          Restaurant Name
        </h3>
        <p className="text-sm text-gray-300">Italian • 4.8 ⭐</p>
        <p className="text-sm text-gray-400">30-40 min delivery</p>
      </div>
    </motion.div>
  );
};

export default FoodCard;
