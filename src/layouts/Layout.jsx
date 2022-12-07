import { Outlet } from "react-router-dom";
import { Header, Footer } from ".";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
