import LogOut from '../components/LogOut'

const Navbar = () => {
  return (
    <nav className="
      sticky top-0 z-50
      bg-white/10 backdrop-blur-xl
      border-b border-white/10
      shadow-[0_10px_40px_rgba(0,0,0,0.3)]
      px-6 py-4
    ">
      <div className="flex items-center justify-between">
        {/* Logo / App Name */}
        <div className="text-2xl font-bold text-white select-none">
        <strong>Reel App </strong>
         new futior 
                  </div>

        {/* User Avatar */}
        <div className="
          w-10 h-10 rounded-full
          bg-gradient-to-br from-pink-500 to-orange-500
          flex items-center justify-center
          text-white font-bold
          shadow-lg
          cursor-pointer
          transition-transform
          hover:scale-105
        ">
          U
        </div>
        <LogOut />
      </div>
    </nav>
  );
};

export default Navbar;
