const VideoReel = () => {
  const videos = [1, 2, 3, 4];
  return (
    <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
      {videos.map((v) => (
        <div
          key={v}
          className="flex-shrink-0 w-64 h-36 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center text-white font-semibold text-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          Video {v}
        </div>
      ))}
    </div>
  );
};

export default VideoReel;
