import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe } from 'react-icons/fa';

const Header = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isMultimediaOpen, setIsMultimediaOpen] = useState(false);

  const toggleExplore = () => {
    setIsExploreOpen(!isExploreOpen);
    setIsNewsOpen(false);
    setIsMultimediaOpen(false);
  };

  const toggleNews = () => {
    setIsNewsOpen(!isNewsOpen);
    setIsExploreOpen(false);
    setIsMultimediaOpen(false);
  };

  const toggleMultimedia = () => {
    setIsMultimediaOpen(!isMultimediaOpen);
    setIsExploreOpen(false);
    setIsNewsOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="NasaHeader z-top bg-carbon-black color-spacesuit-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 border-color-carbon-black-important border-t-2">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleExplore}
              className="hover:text-gray-400 flex items-center"
            >
              Explore
              <span className="ml-1">&#x25BC;</span>
            </button>
            <AnimatePresence>
              {isExploreOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="absolute left-0 bg-black mt-2 py-2 w-48 z-50"
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Missions</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Humans in Space</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Earth & Climate</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">The Solar System</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">The Universe</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Science</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Aeronautics</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Technology</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Learning Resources</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">About NASA</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Español</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="bg-black text-white border-b border-gray-500 focus:outline-none"
          />
        </div>
        <div className="flex items-center">
          <FaGlobe className="text-4xl mb-4" />
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={toggleNews}
              className="hover:text-gray-400 flex items-center"
            >
              News & Events
              <span className="ml-1">&#x25BC;</span>
            </button>
            <AnimatePresence>
              {isNewsOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="absolute right-0 bg-black mt-2 py-2 w-48 z-50"
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">All NASA News</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Video Series on NASA+</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Podcasts</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Blogs</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Newsletters</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Social Media</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Media Resources</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Upcoming Launches & Landings</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Virtual Events</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative">
            <button
              onClick={toggleMultimedia}
              className="hover:text-gray-400 flex items-center"
            >
              Multimedia
              <span className="ml-1">&#x25BC;</span>
            </button>
            <AnimatePresence>
              {isMultimediaOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  className="absolute right-0 bg-black mt-2 py-2 w-48 z-50"
                >
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">NASA+</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Images</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">NASA TV</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Sounds and Ringtones</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Interactives</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">NASA Apps</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">Podcasts</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">e-Books</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-700">STEM Multimedia</a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#" className="hover:text-gray-400 flex items-center">
            NASA+ <span className="bg-red-600 text-white text-xs ml-1 px-1 rounded">LIVE</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
