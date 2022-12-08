import { Outlet } from "react-router-dom";
import { Header, Footer } from ".";
import { ScrollToTop } from "../components/scroll";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
