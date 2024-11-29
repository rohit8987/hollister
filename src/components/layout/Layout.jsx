
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import NavbarBottom from "../navbar/NavbarBottom";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* Fixed Navbar */}
      <div className="w-full sticky top-0 left-0 z-50 shadow-md">
        <Navbar />
      </div>
      <NavbarBottom />
      <main style={{ minHeight: "", }}>
        {/* Outlet renders the matched child route */}
        <Outlet />
      </main>
     
      <Footer/>
     
    </div>
  );
};

export default Layout;
