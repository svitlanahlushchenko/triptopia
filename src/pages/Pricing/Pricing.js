import React from 'react';
import PricingHeroSection from './PricingHeroSection';
import FaqQuestions from '../Faq/FaqQuestions';
import PricingTarifs from './PricingTarifs';

function Pricing() {
  return (
    <div>
      <PricingHeroSection />
      <FaqQuestions />
      <PricingTarifs />
    </div>
  );
}

export default Pricing;
