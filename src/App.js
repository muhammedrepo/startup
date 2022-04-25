import { Navbar } from "./components";
import { About, Features, Hero, Testimonials, VidSection } from "./container";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <VidSection />
      <About />
      <Testimonials />
    </div>
  );
}

export default App;
