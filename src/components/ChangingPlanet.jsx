import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import changingPlanetImg from '../assets/changingworld.jpg'; // Adjust the path if necessary

const ChangingPlanet = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="flex flex-col md:flex-row items-center justify-between p-8 bg-white border-t-2 border border-gray-100">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-sm font-bold text-gray-600">EARTH INFORMATION CENTER</h2>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">Explore our changing planet</h1>
        <p className="text-gray-600 mt-4">
          Earth is our home, shared with millions of species. Rapid changes like rising
          temperatures and more frequent extreme weather are transforming our planet.
          For over 50 years, observations from space and ground have monitored these
          changes, guiding critical decisions in areas like agriculture and air quality.
          By understanding how our actions affect Earth's systems, we can help mitigate
          these impacts. Discover more about how you can make a difference in
          safeguarding our planet.
        </p>
        <a
          href="#"
          className="mt-4 inline-block text-gray-800 font-bold hover:underline"
        >
          Visit the Earth Information Center →
        </a>
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img
          src={changingPlanetImg}
          alt="Changing Planet"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
};

export default ChangingPlanet;
