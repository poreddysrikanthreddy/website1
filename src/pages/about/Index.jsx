import React from 'react';

// section components
import Banner from './BannerSection';
import AboutSection from './AboutSection';
import WhyChooseUse from './WhyChooseUs';
import BottomBannerSection from './BottomBannerSection';
import Clients from '../home/ClientsSection';

export default function Index() {
  return (
    <>
      <Banner />
      <AboutSection />
      <WhyChooseUse />
      {/* <BottomBannerSection /> */}
      <Clients />
    </>
  )
}
