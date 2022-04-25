import { Navbar } from "./components";
import {
  About,
  Features,
  Hero,
  Pricing,
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
    </div>
  );
}

export default App;
