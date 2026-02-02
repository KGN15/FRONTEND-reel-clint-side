import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


import {
  HeartIcon as HeartOutline,
  ChatAltIcon,
  BookmarkIcon as BookmarkOutline,
} from "@heroicons/react/outline";

import {
  HeartIcon as HeartSolid,
  BookmarkIcon as BookmarkSolid,
} from "@heroicons/react/solid";

import PageContainer from "../components/PageContainer";
import BottomNav from "../components/BottomNav";
import PrimaryButton from "../components/PrimaryButton";

axios.defaults.withCredentials = true;

const Videos = () => {
  const navigate = useNavigate();
  const videoRefs = useRef([]);
  const lastTap = useRef(0);

  const [videos, setVideos] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const [likes, setLikes] = useState({});
  const [likeCount, setLikeCount] = useState({});

  const [saved, setSaved] = useState({});
  const [saveCount, setSaveCount] = useState({});

  const [comments, setComments] = useState({});
  const [activeCommentVideo, setActiveCommentVideo] = useState(null);

  const [showHeartAnim, setShowHeartAnim] = useState({});
  const [pauseIcon, setPauseIcon] = useState({});

  /* ================= FETCH VIDEOS ================= */
  useEffect(() => {

    const fetchVideos = async () => {
      try {
        const res = await axios.get("https://backend-reel-app-server.onrender.com/api/food");
        const items = res.data.foodIteam || [];
        const lc = {}, sc = {}, cc = {}, lk = {}, sv = {};
        items.forEach(v => {
          lc[v._id] = v.likeCount || 0;
          sc[v._id] = v.savedCount || 0;
          cc[v._id] = [];
          lk[v._id] = false;
          sv[v._id] = false;
        });
        setVideos(items);
        setLikeCount(lc);
        setLikes(lk);
        setSaved(sv);
        setComments(cc);
        setSaveCount(sc);
      }
      catch (err) {
        console.log(err);
        navigate('/login')
      }



    };

    fetchVideos();

  }, []);

  /* ================= AUTO PLAY ================= */
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      i === activeIndex ? v.play().catch(() => { }) : v.pause();
    });
  }, [activeIndex]);

  const handleScroll = e => {
    setActiveIndex(Math.round(e.target.scrollTop / window.innerHeight));
  };

  /* ================= LIKE (UI + API) ================= */
  const toggleLike = async (video) => {
    const id = video._id;
    const alreadyLiked = likes[id];

    // 1 Optimistic UI update
    setLikes(p => ({ ...p, [id]: !alreadyLiked }));
    setLikeCount(p => ({
      ...p,
      [id]: p[id] + (alreadyLiked ? -1 : 1),
    }));

    // 2 Backend API call
    try {
      await axios.post(
        "https://backend-reel-app-server.onrender.com/api/food/like",
        { foodID: id },  // 
        { withCredentials: true }
      );
    } catch (err) {
      console.error("Like failed", err);

      // 3 Rollback UI if API fails
      setLikes(p => ({ ...p, [id]: alreadyLiked }));
      setLikeCount(p => ({
        ...p,
        [id]: p[id] + (alreadyLiked ? 1 : -1),
      }));
    }
  };


  /* ================= DOUBLE TAP ================= */
  const handleDoubleTap = (video, index) => {
    const now = Date.now();
    if (now - lastTap.current < 300) {
      if (!likes[video._id]) toggleLike(video);
      setShowHeartAnim(p => ({ ...p, [video._id]: true }));
      setTimeout(
        () => setShowHeartAnim(p => ({ ...p, [video._id]: false })),
        700
      );
    }
    lastTap.current = now;
    handleVideoClick(video, index);
  };

  /* ================= SAVE ================= */
  const toggleSave = async (video) => {
    const id = video._id;
    const alreadySaved = saved[id];

    setSaved(p => ({ ...p, [id]: !alreadySaved }));
    setSaveCount(p => ({
      ...p,
      [id]: p[id] + (alreadySaved ? -1 : 1),
    }));

    try {
      await axios.post("https://backend-reel-app-server.onrender.com/api/food/save", { foodID: id }, { withCredentials: true });
    } catch (err) {
      console.error("Save failed", err);
      setSaved(p => ({ ...p, [id]: alreadySaved }));
      setSaveCount(p => ({
        ...p,
        [id]: p[id] + (alreadySaved ? 1 : -1),
      }));
    }
  };

  /* ================= COMMENTS ================= */
  const addComment = (id, text) => {
    if (!text.trim()) return;
    setComments(p => ({
      ...p,
      [id]: [...(p[id] || []), text],
    }));
  };

  /* ================= PLAY / PAUSE ================= */
  const handleVideoClick = (video, index) => {
    const v = videoRefs.current[index];
    if (!v) return;

    if (v.paused) v.play();
    else {
      v.pause();
      setPauseIcon(p => ({ ...p, [video._id]: true }));
      setTimeout(
        () => setPauseIcon(p => ({ ...p, [video._id]: false })),
        600
      );
    }
    v.muted = false;
  };

  /* ================= UI ================= */
  return (
    <PageContainer>
      <div
        onScroll={handleScroll}
        className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black"
      >
        {videos.map((video, index) => (
          <div key={video._id} className="h-screen snap-start relative">

            <video
              ref={el => (videoRefs.current[index] = el)}
              src={video.vidio}
              className="w-full h-full object-cover"
              loop
              playsInline
              onClick={() => handleDoubleTap(video, index)}
            />

            {showHeartAnim[video._id] && (
              <div className="absolute inset-0 flex items-center justify-center animate-ping">
                <HeartSolid className="w-24 h-24 text-red-500" />
              </div>
            )}

            <div className="absolute bottom-24 left-4 text-white max-w-[70%]">
              <h3 className="font-bold">{video.name}</h3>
              <p className="text-sm opacity-80">{video.description}</p>
              <Link to={`/food-partner/${video.foodPartner}`}>
                <PrimaryButton className="mt-3">Visit Store</PrimaryButton>
              </Link>
            </div>

            <div className="absolute bottom-24 right-4 flex flex-col items-center gap-6 text-white">

              <button onClick={() => toggleLike(video)}>
                {likes[video._id] ? (
                  <HeartSolid className="w-9 h-9 text-red-500" />
                ) : (
                  <HeartOutline className="w-8 h-8" />
                )}
                <p className="text-xs">{likeCount[video._id]}</p>
              </button>

              <button onClick={() => setActiveCommentVideo(video._id)}>
                <ChatAltIcon className="w-8 h-8" />
                <p className="text-xs">{(comments[video._id] || []).length}</p>
              </button>

              <button onClick={() => toggleSave(video)}>
                {saved[video._id] ? (
                  <BookmarkSolid className="w-8 h-8 text-yellow-400" />
                ) : (
                  <BookmarkOutline className="w-8 h-8" />
                )}
                <p className="text-xs">{saveCount[video._id]}</p>
              </button>
            </div>

            {pauseIcon[video._id] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-6xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white text-6xl">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {activeCommentVideo && (
        <div className="fixed bottom-0 left-0 w-full h-1/2 bg-black text-white rounded-t-xl p-4">
          <button
            className="absolute top-2 right-4"
            onClick={() => setActiveCommentVideo(null)}
          >
            ❌
          </button>

          <div className="h-40 overflow-y-auto mb-3">
            {(comments[activeCommentVideo] || []).map((c, i) => (
              <p key={i}>• {c}</p>
            ))}
          </div>

          <input
            placeholder="Write a comment..."
            className="w-full p-2 rounded text-black"
            onKeyDown={e => {
              if (e.key === "Enter") {
                addComment(activeCommentVideo, e.target.value);
                e.target.value = "";
              }
            }}
          />
        </div>
      )}

      <BottomNav />
    </PageContainer>
  );
};

export default Videos;
