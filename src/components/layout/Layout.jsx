import Footer from "../Footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import NavbarBottom from "../navbar/NavbarBottom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
     <div className="sticky top-0 w-full z-50 shadow-md">
      <Navbar  />
     </div>
      <NavbarBottom />
      <div className="">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
