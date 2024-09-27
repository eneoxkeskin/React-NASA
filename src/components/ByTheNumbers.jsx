import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import byTheNumbersImage from '../assets/bythenumbers.jpg';

const ByTheNumbers = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-white text-gray-800 py-12">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center"
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
          <h2 className="text-lg font-semibold uppercase text-gray-800">Science</h2>
          <h3 className="text-5xl font-bold mt-2 text-gray-800">By the Numbers</h3>
          <p className="mt-4 text-xl text-gray-800">
            Science is interconnected; no important question stands alone. The Science Mission Directorate (SMD) is an organization where discoveries in one scientific discipline have a direct route to other areas of study. This flow is something extremely valuable and is rare in the scientific world.
          </p>
          <a href="#" className="mt-4 text-xl font-semibold text-gray-800 flex items-center">
            Learn More about NASA Science <span className="ml-2 text-gray-800">&rarr;</span>
          </a>
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={byTheNumbersImage} alt="By the Numbers" className="w-full h-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ByTheNumbers;
