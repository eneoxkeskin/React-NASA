import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';
import image1 from '../assets/dive-deeper1.jpg';
import image2 from '../assets/dive-deeper2.jpg';
import image3 from '../assets/dive-deeper3.jpg';
import image4 from '../assets/dive-deeper4.jpg';

const DiveDeeper = () => {
  const { ref, inView } = useAnimateOnScroll();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear"
  };

  return (
    <section ref={ref} className="py-10 bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-center text-2xl font-bold mb-6">Dive Deeper</h2>
        <Slider {...settings}>
          <motion.div
            className="p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative group overflow-hidden">
              <img src={image1} alt="SMD Community Town Hall Meetings" className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110 group-hover:opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer"></div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">SMD Community Town Hall Meetings</h3>
            <p className="mt-2">View upcoming and past community town hall meetings.</p>
            <a href="#" className="mt-2 text-gray-800">Read More</a>
          </motion.div>
          <motion.div
            className="p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative group overflow-hidden">
              <img src={image2} alt="NASA Science Strategy" className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110 group-hover:opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer"></div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">NASA Science Strategy</h3>
            <p className="mt-2">Our science strategy articulates a forward-thinking vision and presents a comprehensive, cohesive and long-term roadmap for all NASA activities.</p>
            <a href="#" className="mt-2 text-gray-800">Read More</a>
          </motion.div>
          <motion.div
            className="p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="relative group overflow-hidden">
              <img src={image3} alt="People of NASA Science" className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110 group-hover:opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer"></div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">People of NASA Science</h3>
            <p className="mt-2">Meet the individuals who are instrumental in enabling the realization of NASA Science’s extraordinary mission.</p>
            <a href="#" className="mt-2 text-gray-800">Read More</a>
          </motion.div>
          <motion.div
            className="p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="relative group overflow-hidden">
              <img src={image4} alt="NASA Science Strategy" className="w-full h-auto transform transition-transform duration-300 group-hover:scale-110 group-hover:opacity-75" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 cursor-pointer"></div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">NASA Science Strategy</h3>
            <p className="mt-2">Our science strategy articulates a forward-thinking vision and presents a comprehensive, cohesive and long-term roadmap for all NASA activities.</p>
            <a href="#" className="mt-2 text-gray-800">Read More</a>
          </motion.div>
        </Slider>
      </motion.div>
    </section>
  );
};

export default DiveDeeper;
