import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import oceanImage from '../assets/ocean.jpg';

const FeaturedStory = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="relative h-screen">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${oceanImage})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </motion.div>
      <motion.div
        className="container mx-auto relative z-10 flex flex-col justify-center h-full p-8"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-lg">
          <h2 className="text-lg font-semibold uppercase text-white">Featured Story</h2>
          <h3 className="text-5xl font-bold mt-2">Slowdown of the Motion of the Ocean</h3>
          <p className="mt-4 text-xl text-white">
            In Brief: As the ocean warms and land ice melts, ocean circulation — the movement of heat around the planet...
          </p>
          <a href="#" className="mt-4 text-xl font-semibold text-white flex items-center">
            Read the Story <span className="ml-2 text-white">&rarr;</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedStory;
