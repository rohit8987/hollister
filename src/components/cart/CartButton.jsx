import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const CartButton = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null; // Hide component if not open

  return (
    <div>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose} // Close sidebar when clicking on the backdrop
      ></div>

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-[25%] bg-white shadow-lg border-l border-gray-200 z-50">
        {/* Close Button */}
        <div className="flex justify-between p-4 w-full bg-gray-100">
            <h1 className="text-xl text-gray-500 uppercase  ">my shopping bag <span>(0 items)</span> </h1>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <CloseIcon />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 w-full h-full">
          <div className="py-5 flex border-b border-gray-300 ">
            <div className="w-full justify-center flex ">
              <p className="text-gray-600">There are no items in your shopping bag.</p>
            </div>
          </div>

          {/* Sign In Button */}
          <div className="w-full absolute z-0 bottom-0 right-0 flex flex-col justify-center  bg-gray-100 p-5">
            <div className="w-full flex justify-center pb-5">
                <ul className="w-full flex justify-between p-3 border-b border-black ">
                    <li className="font-semibold">Subtotal</li>
                    <li className="font-semibold">F0.00</li>
                </ul>
            </div>
            <div className="justify-center  flex w-full">
            <div onClick={() => navigate("/cart")}
              className="w-80 justify-center  flex hover:bg-[#2c2a27] bg-gray-900 p-2 rounded-3xl cursor-pointer" >
              <button className="text-gray-100 text-xl font-semibold">View Bag</button>
            </div>
            </div>
          </div>

           
        </div>
      </div>
    </div>
  );
};

export default CartButton;
