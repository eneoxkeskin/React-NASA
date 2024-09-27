import React from 'react';
import { motion } from 'framer-motion';
import useAnimateOnScroll from '../hooks/useAnimateOnScroll';
import sunBackground from '../assets/thesun.jpg';
import sun2 from '../assets/thesun2.jpg';
import sun3 from '../assets/thesun3.jpg';
import sun4 from '../assets/thesun4.jpg';
import sun5 from '../assets/thesun5.jpg';

const TheSun = () => {
  const { ref, inView } = useAnimateOnScroll();

  return (
    <section ref={ref} className="relative h-screen">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <img src={sunBackground} alt="The Sun" className="w-full h-full object-cover" />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex flex-col justify-center p-8 bg-black bg-opacity-50"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold">The Sun and Heliophysics</h2>
        <p className="mt-4 mb-8">
          NASA studies the star at the center of our solar system and its influence on space, Earth, and our solar system. This research helps us to not only understand how the universe works, but also protect our technology and astronauts in space.
        </p>
        <a href="#" className="text-blue-500 hover:underline">
          Learn More →
        </a>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-zinc-950 p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold">What's Out There?</h3>
        <div className="flex justify-between mt-4">
          <div className="w-1/5 p-2 cursor-pointer">
            <img src={sun2} alt="Ionosphere" className="w-full h-auto mb-2" />
            <h4 className="font-bold">Ionosphere, Thermosphere, and Mesosphere</h4>
            <p className="mt-2">Studying the regions where Earth's atmosphere transitions into the ionized plasma of space.</p>
          </div>
          <div className="w-1/5 p-2 cursor-pointer">
            <img src={sun3} alt="Heliosphere" className="w-full h-auto mb-2" />
            <h4 className="font-bold">Heliosphere</h4>
            <p className="mt-2">Understanding how the invisible bubble surrounding our solar system is protecting life here on Earth.</p>
          </div>
          <div className="w-1/5 p-2 cursor-pointer">
            <img src={sun4} alt="Space Weather" className="w-full h-auto mb-2" />
            <h4 className="font-bold">Space Weather</h4>
            <p className="mt-2">Researching how environmental conditions in space can impact satellites, communications, and power grids on Earth.</p>
          </div>
          <div className="w-1/5 p-2 cursor-pointer">
            <img src={sun5} alt="Heliophysics Big Year" className="w-full h-auto mb-2" />
            <h4 className="font-bold">Heliophysics Big Year</h4>
            <p className="mt-2">Celebrating solar science and the Sun's influence on Earth and the solar system.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TheSun;
