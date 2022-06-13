import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  About,
  BlogGrid,
  Error,
  Register,
  Contact,
  BlogSingle,
  Features,
} from "./container";
import BlogSidebar from "./container/BlogSidebar/BlogSidebar";
import HomePage from "./container/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Features />} />
        <Route path="/blog" element={<BlogGrid />} />
        <Route path="/blog-detail" element={<BlogSingle />} />
        <Route path="/blog-sidebar" element={<BlogSidebar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
