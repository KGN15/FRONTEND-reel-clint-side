import { useRef, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  CloudUploadIcon,
  PencilAltIcon,
  VideoCameraIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import LogOut from "../components/LogOut";

const CreateFood = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const API_URL = import.meta.env.VITE_API_URL;


  const [step, setStep] = useState("create");
  const [videoFile, setVideoFile] = useState(null);
  const [videoURL, setVideoURL] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // ---------- file handlers ----------
  const openFileDialog = () => fileInputRef.current.click();

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type.startsWith("video/")) {
      setError("Only video files allowed");
      return;
    }
    setError("");
    setVideoFile(file);
    setVideoURL(URL.createObjectURL(file));
  };

  // ---------- review ----------
  const handleReview = (e) => {
    e.preventDefault();
    if (!videoFile || !name.trim()) {
      setError("Video & name required");
      return;
    }
    setError("");
    setStep("review");
  };

  // ---------- publish ----------
  const handlePublish = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("vidio", videoFile);
      formData.append("name", name);
      formData.append("description", description);

      await axios.post(
        `${API_URL}/api/food`,
        formData,
        { withCredentials: true }
      );

      setShowSuccess(true);
    } catch (err) {
      setError("Publish failed");
      console.error("Publish failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1a2f] via-black to-[#020617] px-4 py-10 text-white relative">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-3xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6"
      >
        <LogOut role="food-partner" />

        {/* CREATE */}
        {step === "create" && (
          <form onSubmit={handleReview}>
            <h1 className="text-2xl font-bold mb-4">Create Food</h1>

            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              hidden
              onChange={(e) => handleFile(e.target.files[0])}
            />

            <div
              onClick={openFileDialog}
              className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center cursor-pointer"
            >
              <CloudUploadIcon className="w-10 h-10 mx-auto mb-2" />
              Upload Video
            </div>

            {videoURL && (
              <video
                src={videoURL}
                controls
                className="mt-6 rounded-xl w-full aspect-[9/16]"
              />
            )}

            {error && <p className="text-red-400 mt-3">{error}</p>}

            <input
              placeholder="Food name"
              className="mt-5 w-full px-4 py-3 rounded-xl bg-black/40"
              onChange={(e) => setName(e.target.value)}
            />

            <textarea
              placeholder="Description"
              rows="4"
              className="mt-4 w-full px-4 py-3 rounded-xl bg-black/40"
              onChange={(e) => setDescription(e.target.value)}
            />

            <button className="mt-6 px-6 py-3 bg-blue-600 rounded-xl">
              Review
            </button>
          </form>
        )}

        {/* REVIEW */}
        {step === "review" && (
          <form onSubmit={handlePublish}>
            <h1 className="text-2xl font-bold mb-4">Review</h1>

            <video
              src={videoURL}
              controls
              className="rounded-xl w-full aspect-[9/16]"
            />

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => setStep("create")}
                className="px-5 py-3 bg-gray-700 rounded-xl"
              >
                Back
              </button>

              <button
                disabled={loading}
                className="px-6 py-3 bg-green-600 rounded-xl"
              >
                Publish
              </button>
            </div>
          </form>
        )}
      </motion.section>

      {/* 🔄 LOADING SCREEN */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
      )}

      {/* ✅ SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-[#0f172a] p-6 rounded-2xl text-center w-[90%] max-w-sm">
            <CheckCircleIcon className="w-14 h-14 text-green-500 mx-auto mb-3" />
            <h2 className="text-xl font-bold mb-2">Success 🎉</h2>
            <p className="text-gray-400 mb-5">
              Food published successfully
            </p>
            <button
              onClick={() => navigate("/")}
              className="w-full py-3 bg-green-600 rounded-xl"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default CreateFood;
