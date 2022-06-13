import React from "react";

import { About, Features } from "../../components";
import Hero from "../Hero/Hero";
import HomeBlog from "../HomeBlog/HomeBlog";
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
      <HomeBlog />
      <Support />
    </>
  );
};

export default HomePage;
