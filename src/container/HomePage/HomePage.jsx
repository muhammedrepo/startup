import React from "react";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
import Pricing from "../Pricing/Pricing";
import Support from "../Support/Support";
import Testimonials from "../Testimonials/Testimonials";
import VidSection from "../VidSection/VidSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <VidSection />
      <About />
      <Testimonials />
      <Pricing />
      <Blog />
      <Support />
    </>
  );
};

export default HomePage;
