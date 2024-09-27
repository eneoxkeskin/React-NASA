import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import nasa1Image from '../assets/nasa-1.jpg'; // Yüklenen yeni resim

const ContentSection = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-white text-black py-12">
      <motion.div
        className="container mx-auto flex"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="w-1/2 pr-8 select-text"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-700">NASA Science is Delivering</h2>
          <p className="mb-4 text-gray-800">
            NASA Science is delivering: every second of every day, of every week, of every year. 2024 is proving to be yet another year of exceptional scientific discovery and achievement. From soft landing back on the Moon a few months ago, to celebrating the Heliophysics Big Year and a Total Solar Eclipse in the contiguous United States, to receiving stunning imagery from James Webb, NASA Science is as busy as ever. Recently launched earth science missions are also providing us unprecedented views of our planet and incredible insight into the health of our oceans and atmosphere, and helping decision-makers improve lives on Earth and safeguard our future. And we are charting a new, sustainable path for Mars Sample Return.
          </p>
          <p className="mb-4">
            Looking ahead, we have many exciting launches on the horizon. At NASA, we are fortunate that our science and exploration endeavors are inextricably linked and help us discover and innovate for the benefit of humanity. Together, we explore to advance scientific understanding. Ultimately, exploration enables science, and science enables exploration.
          </p>
          <p className='text-gray-800'>
            The NASA Science team is continuing to deliver for the benefit of all.
          </p>
        </motion.div>
        <motion.div
          className="w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img src={nasa1Image} alt="NASA" className="w-full h-auto object-cover" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContentSection;
