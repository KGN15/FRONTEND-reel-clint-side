import React, { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import BottomNav from "../components/BottomNav";
import axios from "axios";

const Saved = () => {
  const [videos, setVideos] = useState([]);

  // Fetch saved videos
  useEffect(() => {
    const fetchSavedVideos = async () => {
      try {
        const res = await axios.get(
          "https://backend-reel-app-server.onrender.com/api/food/save",
          { withCredentials: true }
        );

        // 🔥 backend response অনুযায়ী
        const savedVideos = res.data.saveFood.map(item => item.food);
        setVideos(savedVideos);
      } catch (err) {
        console.error("Failed to fetch saved videos", err);
      }
    };

    fetchSavedVideos();
  }, []);

  // Remove saved video
  const removeSaved = async (foodId) => {
    try {
      await axios.post(
        "https://backend-reel-app-server.onrender.com/api/food/save",
        { foodID: foodId },
        { withCredentials: true }
      );

      // UI update
      setVideos(prev => prev.filter(v => v._id !== foodId));
    } catch (err) {
      console.error("Failed to remove saved video", err);
    }
  };

  return (
    <PageContainer>
      <div className="min-h-screen pb-24 px-4 bg-gradient-to-br from-[#0a1a2f] via-black to-[#020617] text-white">

        {/* Header */}
        <div className="pt-6 mb-6 text-center">
          <h1 className="text-3xl font-extrabold">Saved Videos</h1>
          <p className="text-sm text-gray-400 mt-1">
            Your saved reels 🎬
          </p>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5">
          {videos.length === 0 ? (
            <p className="text-center text-gray-400 py-10">
              No saved videos yet 😔
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map(video => (
                <div
                  key={video._id}
                  className="rounded-2xl overflow-hidden bg-black/60 border border-white/10"
                >
                  <video
                    src={video.vidio}
                    controls
                    controlsList="nodownload noplaybackrate"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full aspect-[9/16] object-cover"
                  />


                  <div className="p-3">
                    <p className="text-sm text-gray-200 line-clamp-2">
                      {video.description || "No description"}
                    </p>

                    <div className="flex justify-between items-center mt-3 text-xs">
                      <span className="text-gray-400">
                        Saved: {video.savedCount ?? 0}
                      </span>

                      <button
                        onClick={() => removeSaved(video._id)}
                        className="text-red-400 hover:text-red-500 font-semibold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </PageContainer>
  );
};

export default Saved;
