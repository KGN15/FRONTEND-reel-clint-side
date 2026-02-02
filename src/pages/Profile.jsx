import { motion } from "framer-motion";
import BackToHome from "../components/BackToHome";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null); // start as null
  const [loading, setLoading] = useState(true);
  const [vidios,setVidios] = useState([])
  const API_URL = import.meta.env.VITE_API_URL;


  useEffect(() => {
    axios
      .get(`${API_URL}/api/food-partner/${id}`, { withCredentials: true })
      .then((res) => {
        setProfile(res.data.foodPartner || res.data); // backend structure check
        setLoading(false);
        setVidios(res.data.foodPartner.foodIteam)
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Profile Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a1a2f] via-black to-[#020617] px-4 py-10">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-6 md:p-8"
      >
        <div className="m-5">
          <BackToHome />
        </div>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.img
            whileHover={{ scale: 1.05 }}
            className="w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover border border-white/20"
            src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500"
            alt="Restaurant"
          />

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              {profile.name || "Restaurant Name"}
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              📍 {profile.address || "Address not set"}
            </p>

            <div className="mt-4 flex justify-center md:justify-start gap-6">
              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase">Total Meals</p>
                <p className="text-xl font-bold text-white">
                  {profile.totalMeals || 0}
                </p>
              </div>

              <div className="text-center">
                <p className="text-xs text-gray-400 uppercase">Customers</p>
                <p className="text-xl font-bold text-white">
                  {profile.customersServed || 0}
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/10" />

        <h3 className="text-xl font-bold text-white mb-4 text-center">Reels</h3>

        {/* Reels Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {/* Example Reels */}
          {vidios.map((i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.04 }}
              className="aspect-[9/16] overflow-hidden rounded-2xl bg-black border border-white/10"
            >
              <video
                src={i.vidio}
                muted
                loop
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.section>
      </motion.section>
    </main>
  );
};

export default ProfilePage;
