import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import worldImage from '../assets/world.jpg';

const BackgroundSection = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="relative h-screen">
      <motion.div
        className="relative h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <img src={worldImage} alt="World" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 select-none">
          <div className="max-w-4xl mx-auto text-center text-white px-4">
            <h1 className="text-5xl font-bold">NASA Science</h1>
            <p className="text-xl mt-4">
              NASA Science seeks to discover the secrets of the universe, search for life elsewhere, and protect and improve life on Earth and in space.
            </p>
            <div className="flex flex-col md:flex-row justify-center w-full mt-10 items-center">
              <div className="text-center mx-4 mb-4 md:mb-0 border border-1 border-gray-400 px-4 py-3 cursor-pointer ">
                <p className="text-sm uppercase">Inclusive, Transparent, Collaborative</p>
                <a href="#" className="text-lg hover:underline flex items-center justify-center">
                  Open Science at NASA <span className="ml-2 text-white">&rarr;</span>
                </a>
              </div>
              <div className="text-center mx-4 mb-4 md:mb-0 border border-1 border-gray-400 px-4 py-3 cursor-pointer">
                <p className="text-sm uppercase">Monitor Earth and Space Weather</p>
                <a href="#" className="text-lg hover:underline flex items-center justify-center ">
                  GOES-U Launch <span className="ml-2 text-white">&rarr;</span>
                </a>
              </div>
              <div className="text-center mx-4 border border-1 border-gray-400 px-8 py-3 cursor-pointer">
                <p className="text-sm uppercase">Explore and Interact in 3D</p>
                <a href="#" className="text-lg hover:underline flex items-center justify-center">
                  NASA's Eyes <span className="ml-2 text-white">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BackgroundSection;
