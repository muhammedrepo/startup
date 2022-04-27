import { Navbar } from "./components";
import { Footer } from "./components";
import {
  About,
  Blog,
  Features,
  Hero,
  Pricing,
  Support,
  Testimonials,
  VidSection,
} from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <VidSection />
      <About />
      <Testimonials />
      <Pricing />
      <Blog />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
