const PrimaryButton = ({ children }) => {
  return (
    <button
      className="
        w-full
        bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900
        text-white font-semibold
        py-3 px-6
        rounded-2xl
        shadow-lg shadow-blue-900/40
        transition-all duration-300
        transform
        hover:scale-105
        hover:shadow-xl hover:shadow-purple-900/60
        active:scale-95
        relative
        overflow-hidden
      "
    >
      {/* Glow overlay for premium effect */}
      <span
        className="
          absolute inset-0
          bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500
          opacity-20
          blur-xl
          rounded-2xl
          animate-pulse
          pointer-events-none
        "
      />
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default PrimaryButton;
