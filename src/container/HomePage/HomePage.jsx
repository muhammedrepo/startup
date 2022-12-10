import Hero from "./Hero";
import Features from "./Features";
import VidSection from "./VidSection";
import About from "../AboutPage/About";
import HomeBlog from "./HomeBlog";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Support from "./Support";
import { PartnerBrands } from "../../components";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <VidSection />
      <PartnerBrands />
      <About />
      <Testimonials />
      <Pricing />
      <HomeBlog />
      <Support />
    </>
  );
};
