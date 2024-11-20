import React from 'react';
import AboutHeroSection from './AboutHeroSection';
import AboutInfo from './AboutInfo';
import SavingSection from '../Home/SavingSection';
import AboutTeam from './AboutTeam';

function About() {
  return (
    <div>
      <AboutHeroSection />
      <AboutInfo />
      <SavingSection />
      <AboutTeam />
    </div>
  );
}

export default About;
