import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 min-w-full min-h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dlyctssmy/video/upload/v1741607146/7048728_Animation_Motion_Graphic_720x1280_g7tyij.mkv"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-white text-center px-6"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Connecting People Across Faiths & Interests
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mt-4"
          >
            Discover meaningful connections and events that bring communities
            together. Join us in creating a more connected and understanding
            world.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/events")}
            className="bg-yellow-400 text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold mt-6 shadow-lg 
                       flex items-center justify-center mx-auto space-x-2 transition-all transform hover:scale-105"
          >
            <Calendar size={24} />
            <span>Explore Events</span>
          </motion.button>
        </div>
      </motion.section>

      {/* Event Categories with Video Background */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6 max-w-6xl"
      >
        {[
          { title: "Religious Events", description: "Connect with your spiritual community through meaningful gatherings." },
          { title: "Social Gatherings", description: "Build lasting friendships through shared interests and activities." },
          { title: "Charity Initiatives", description: "Make a difference by participating in community service events." }
        ].map((event, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg bg-black">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            >
              <source
                src="https://res.cloudinary.com/dlyctssmy/video/upload/v1741607146/7048728_Animation_Motion_Graphic_720x1280_g7tyij.mkv"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Card Content */}
            <div className="relative p-6 text-white">
              <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
              <p className="text-gray-300">{event.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
