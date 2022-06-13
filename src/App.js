import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components";
import {
  BlogGrid,
  Error,
  Register,
  Contact,
  BlogSingle,
  Services,
  AboutPage,
} from "./container";

import BlogSidebar from "./container/BlogSidebar/BlogSidebar";
import HomePage from "./container/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
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
