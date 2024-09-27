import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const FeaturedVideo = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-black text-white py-12">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center min-h-screen"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="md:w-1/2 mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold uppercase text-gray-400">Featured Video</h2>
          <h3 className="text-3xl font-bold mt-2">June is National Ocean Month</h3>
          <p className="mt-4 text-gray-300">
            NASA's exploration of our oceans from space spans a rich history. Delving into the depths of our oceans unveils the mysteries of our own planet, our home. Therefore, NASA remains steadfast in leading the way in oceanic research.
          </p>
          <p className="mt-4 text-xl font-semibold text-white">
            Ocean Worlds: Water in the Solar System and Beyond <span className="text-red-500">&rarr;</span>
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-96" 
              src="https://www.youtube.com/embed/v3dO7PhYas4" 
              title="Our Oceans from Space" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FeaturedVideo;
