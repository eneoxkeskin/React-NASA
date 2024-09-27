import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import mission1Image from '../assets/mission-1.jpg';
import mission2Image from '../assets/mission-2.jpg';
import mission3Image from '../assets/mission-3.jpg';

const FeaturedMissions = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="bg-white border-t-2 border-gray-100 text-gray-800 py-12">
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white text-3xl font-bold mb-4">Featured Missions</h2>
        <p className="text-lg mb-4 text-white">
          Our mission milestones showcase the breadth and depth of NASA science.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src={mission1Image} alt="GOES-U" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">GOES-U</h3>
            <p className="text-gray-600 mb-4">
              Launch is targeted for June 25, 2024. GOES-U will provide advanced detection and monitoring of environmental phenomena that directly affect public safety, protection of property, and the nation’s economic health.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Learn More &rarr;</a>
          </motion.div>
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img src={mission2Image} alt="Europa Clipper" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Europa Clipper</h3>
            <p className="text-gray-600 mb-4">
              Launching in October 2024, Europa Clipper’s main science goal is to determine whether there are places below the surface of Jupiter’s icy moon, Europa, that could support life.
            </p>
            <a href="#" className="text-blue-500 hover:underline">Learn More &rarr;</a>
          </motion.div>
          <motion.div
            className="bg-white p-6 shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src={mission3Image} alt="VIPER" className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">VIPER</h3>
            <p className="text-gray-600 mb-4">
              VIPER launches late 2024 and will be NASA’s first robotic Moon rover to measure the location and concentration of water ice and other resources. These resources could eventually be harvested to sustain human exploration on the Moon, Mars — and beyond!
            </p>
            <a href="#" className="text-blue-500 hover:underline">Learn More &rarr;</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedMissions;
