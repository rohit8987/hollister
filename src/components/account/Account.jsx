import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Account = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null; // Hide component if not open

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 "
        onClick={onClose} // Close sidebar when clicking on the backdrop
      ></div>

      {/* Sidebar */}
      <div className="fixed px-5 top-28 right-0 w-[25%] h-full bg-white shadow-lg border-l border-gray-200 z-50">
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 w-full h-full -mt-5">
          <div className="mb-5 flex justify-between">
            <div className="w-full justify-between flex ">
              <h1 className="uppercase text-gray-900 text-2xl font-semibold">
                Your Account
              </h1>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="w-full flex justify-center px-6 py-2">
            <div
              onClick={() => navigate("/signin")}
              className="w-80 justify-center flex hover:bg-[#2c2a27] bg-gray-900 p-2 rounded-3xl cursor-pointer"
            >
              <button className="text-gray-100 text-xl">Sign In</button>
            </div>
          </div>

          {/* Create Account Link */}
          <div className="w-full">
            <div className="w-full flex justify-center">
              <div className="flex w-full justify-center p-4">
                <p className="text-sm text-gray-400">
                  Don't have an Account?
                  <span
                    onClick={() => navigate("/signup")}
                    className="text-sm text-gray-500 cursor-pointer font-medium hover:text-gray-600"
                  >
                    {" "}
                    Create Account
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Links */}
          <div className="w-full flex py-3">
            <div className="w-full flex">
              <ul className="flex flex-col gap-5 text-sm text-gray-600 justify-start font-semibold">
                <li className="hover:text-gray-700 cursor-pointer">
                  Purchase History
                </li>
                <li className="hover:text-gray-700 cursor-pointer">My List</li>
                <li className="hover:text-gray-700 cursor-pointer">
                  Account Settings
                </li>
                <li className="hover:text-gray-700 cursor-pointer">
                  Find My Store
                </li>
                <li className="hover:text-gray-700 cursor-pointer">
                  Customer Service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
