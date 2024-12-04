import { LuUser } from "react-icons/lu";
import { useState } from "react";
import Account from "../account/Account"; // Import Account Component

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      {/* Header (Sticky Navbar) */}
      

      <div className="w-full flex bg-gray-100 justify-center  sticky z-40 top-0 shadow-2xl">
      {/* Main Page Content */}
      <button onClick={() => setIsCartOpen(true)}  className="w-[90%] p-3 text-sm flex items-center gap-2 justify-end">
         <LuUser className="text-xl" />
          <p className="font-semibold text-gray-800 hover:text-gray-600">
            Sign In Or Create Account
          </p>
      </button>
      {/* Account as a Sidebar */}
      <Account isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>



      {/* Sliding Drawer */}
      <div
        className={`fixed top-28 right-0  rounded-l-xl bg-white shadow-2xl z-50  transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "20%" }} // Adjust width as needed
      >
        <button
          className="absolute top-3 right-3 text-xl "
          onClick={toggleDrawer}
        >
          &times;
        </button>
        <Account /> {/* Render Account Component */}
      </div>

      {/* Overlay for Click Outside to Close */}
      {isDrawerOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleDrawer}
        />
      )}
    </>
  );
};

export default Header;
