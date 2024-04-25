import React from "react";

// section components
import Banner from "./BannerSection";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import CounterSection from "./CounterSection";
import ProductSection from "./ProductSection";
import IndustriesSection from "./IndustriesSection";
import Testimonial from "./Testimonial";
import BottomBannerSection from "./BottomBannerSection";
import ProductsShow from "../products/ProductsShow";
import Clients from "./ClientsSection";

export default function Index() {
  return (
    <>
      <Banner />
      <ProductsShow />
      <ServiceSection />
      <ProductSection />
      <IndustriesSection />
      <Testimonial />
      <BottomBannerSection />
      <AboutSection />
      <CounterSection />
      <Clients />
    </>
  );
}
