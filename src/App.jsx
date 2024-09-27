import React from 'react';
import Header from './components/Header';
import BackgroundSection from './components/BackgroundSection';
import ContentSection from './components/ContentSection';
import FeaturedMissions from './components/FeaturedMissions';
import LatestNews from './components/LatestNews';
import FeaturedVideo from './components/FeaturedVideo';
import FeaturedStory from './components/FeaturedStory';
import ByTheNumbers from './components/ByTheNumbers';
import ChangingPlanet from './components/ChangingPlanet';
import TheSun from './components/TheSun';
import DiveDeeper from './components/DiveDeeper';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <BackgroundSection />
        <ContentSection />
        <FeaturedMissions />
        <LatestNews />
        <FeaturedVideo />
        <FeaturedStory />
        <ByTheNumbers />
        <ChangingPlanet />
        <TheSun />
        <DiveDeeper />
      </main>
      <Footer />
    </div>
  );
};

export default App;
