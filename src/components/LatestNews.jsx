import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import news1 from '../assets/news-1.jpg';
import news2 from '../assets/news-2.jpg';
import news3 from '../assets/news-3.jpg';
import news4 from '../assets/news-4.jpg';
import news5 from '../assets/news-5.jpg';

const LatestNews = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-white text-gray-800 py-12 border-t-2 border-gray-100">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Latest News</h2>
          <a href="#" className="text-blue-500 hover:underline flex items-center">
            More News <span className="ml-2 text-red-500">&rarr;</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <img src={news1} alt="News 1" className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <span className="text-gray-600 text-sm uppercase">Article</span>
              <h3 className="text-xl font-semibold mt-2">Webb Finds Plethora of Carbon Molecules Around Young Star</h3>
              <p className="text-gray-700 mt-2">5 min read</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <img src={news2} alt="News 2" className="w-full h-60 object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <span className="text-gray-600 text-sm uppercase">Article</span>
              <h3 className="text-xl font-semibold mt-2">Mountain Rain or Snow Volunteers Broke Records This Winter</h3>
              <p className="text-gray-700 mt-2">1 min read</p>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative">
              <img src={news3} alt="News 3" className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <span className="text-gray-600 text-sm uppercase">Article</span>
              <h3 className="text-lg font-semibold mt-2">NASA to Change How It Points Hubble Space Telescope</h3>
              <p className="text-gray-700 mt-2">3 min read</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative">
              <img src={news4} alt="News 4" className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <span className="text-gray-600 text-sm uppercase">Article</span>
              <h3 className="text-lg font-semibold mt-2">Solid State Quantum Magnetometers — Seeking out water worlds from the quantum world</h3>
              <p className="text-gray-700 mt-2">4 min read</p>
            </div>
          </motion.div>
          <motion.div
            className="bg-white shadow-md rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="relative">
              <img src={news5} alt="News 5" className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75" />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <span className="text-gray-600 text-sm uppercase">Article</span>
              <h3 className="text-lg font-semibold mt-2">Hubble Views the Lights of a Galactic Bar</h3>
              <p className="text-gray-700 mt-2">2 min read</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default LatestNews;
