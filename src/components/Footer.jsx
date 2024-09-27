import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';

const Footer = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <footer ref={ref} className="bg-black text-white py-8">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-wrap justify-between space-y-6 md:space-y-0">
          <motion.div
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaGlobe className="text-4xl mb-4" />
            <p>
              The National Aeronautics and Space Administration
            </p>
            <p className="mt-2">
              NASA explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
            </p>
            <a href="#" className="text-white hover:underline mt-2 block">
              About NASA's Mission
            </a>
            <a href="#" className="text-white hover:underline mt-2 block">
              Join Us
            </a>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold mb-4">Sections</h4>
            <ul>
              <li><a href="#" className="text-white hover:underline">Home</a></li>
              <li><a href="#" className="text-white hover:underline">News & Events</a></li>
              <li><a href="#" className="text-white hover:underline">Multimedia</a></li>
              <li><a href="#" className="text-white hover:underline">NASA TV</a></li>
              <li><a href="#" className="text-white hover:underline">Missions</a></li>
            </ul>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4 className="text-lg font-bold mb-4">Topics</h4>
            <ul>
              <li><a href="#" className="text-white hover:underline">Humans in Space</a></li>
              <li><a href="#" className="text-white hover:underline">Earth & Climate</a></li>
              <li><a href="#" className="text-white hover:underline">The Solar System</a></li>
              <li><a href="#" className="text-white hover:underline">The Universe</a></li>
              <li><a href="#" className="text-white hover:underline">Science</a></li>
            </ul>
          </motion.div>
          <motion.div
            className="w-full md:w-1/4"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h4 className="text-lg font-bold mb-4">Follow NASA</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:underline"><FaFacebookF /></a>
              <a href="#" className="text-white hover:underline"><FaTwitter /></a>
              <a href="#" className="text-white hover:underline"><FaInstagram /></a>
              <a href="#" className="text-white hover:underline"><FaYoutube /></a>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-sm">
            For Media | Privacy Policy | FOIA | No FEAR Act | Office of the IG | Budget & Annual Reports | Agency Financial Reports | Contact NASA | Accessibility
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
