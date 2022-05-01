import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./components";
import { BlogGrid, Error, Register, Contact } from "./container";
import HomePage from "./container/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogGrid />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
