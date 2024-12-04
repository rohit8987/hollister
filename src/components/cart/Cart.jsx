import { useState } from "react";
import { SlPaypal } from "react-icons/sl";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Cart = () => {
  const [activeTab, setActiveTab] = useState("inBag"); // State to track active tab

  // Sample Data
  const inBagItems = [
    {
      id: 1,
      name: "Baggy Sweatpants",
      sku: "659111067",
      size: "S",
      color: "Dark Gray",
      price: "INR3,703.20",
    },
  ];

  const savedForLaterItems = [];

  return (
    <div className="w-full flex justify-center py-10 min-h-screen">
      {/* Main Container */}
      <div className="w-[80%] bg-gray-50 shadow-md py-10  flex">
        {/* Left Section */}
        <div className="w-full  gap-5 flex flex-col">
          {/* Header Tabs */}
          <div className="bg-white flex flex-col p-5">
            <div className="w-full flex flex-col">
              <div className="px-20 w-full border-b flex justify-between items-center p-2">
                <button
                  onClick={() => setActiveTab("inBag")}
                  className={`text-xl font-bold ${
                    activeTab === "inBag" ? "text-black underline" : "text-gray-500"
                  }`}
                >
                  IN BAG ({inBagItems.length})
                </button>
                <button
                  onClick={() => setActiveTab("savedForLater")}
                  className={`text-xl font-bold ${
                    activeTab === "savedForLater"
                      ? "text-black underline"
                      : "text-gray-500"
                  }`}
                >
                  Saved for Later ({savedForLaterItems.length})
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-4">
                {activeTab === "inBag" && (
                  <div>
                    {inBagItems.length > 0 ? (
                      inBagItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex w-full items-start border-b pb-4 mb-4"
                        >
                          {/* Product Image */}
                          <div className="bg-gray-50">
                            <img
                              src="https://img.abercrombie.com/is/image/anf/KIC_334-4099-00026-120_prod1?policy=product-small"
                              alt={item.name}
                              className="w-40"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="w-full flex flex-col ml-10">
                            <div className="flex flex-col">
                              <div className="flex justify-between py-1">
                                <p className="font-semibold text-lg">{item.name}</p>
                                <button className="flex justify-end cursor-pointer">
                                  <CloseOutlinedIcon />
                                </button>
                              </div>
                              <p className="text-gray-500 text-xs mb-5">
                                Men's: {item.sku}
                              </p>
                              <p className="text-sm text-gray-600 mt-1">
                                {item.size}, {item.color}
                              </p>
                              <p className="text-lg font-semibold">{item.price}</p>
                              <ul className="flex gap-9 mt-6">
                                <li className="underline text-xs text-gray-500 cursor-pointer">
                                  Save For Later
                                </li>
                                <li className="underline text-xs text-gray-500 cursor-pointer">
                                  Edit
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500">Your bag is empty.</p>
                    )}
                  </div>
                )}

                {activeTab === "savedForLater" && (
                  <div>
                    {savedForLaterItems.length > 0 ? (
                      savedForLaterItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center border-b pb-4 mb-4"
                        >
                          {/* Saved Item Info */}
                          <div>
                            <p className="font-semibold text-lg">{item.name}</p>
                            <p className="text-gray-500">SKU: {item.sku}</p>
                            <p className="text-sm text-gray-600 mt-1">
                              {item.size}, {item.color}
                            </p>
                          </div>
                          {/* Saved Item Price */}
                          <p className="text-lg font-semibold">{item.price}</p>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500">
                        No items saved for later.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[30%] bg-gray-50 py-10">
          <div className="w-full py-10 px-5">
            {/* Checkout Section */}
            <div className="flex flex-col gap-4 mb-6">
              <button className="w-full bg-blue-500 rounded-full text-white py-3 text-center hover:bg-gray-900">
                Checkout
              </button>
              <p className="text-center">-or-</p>
              <button className="w-full border text-black py-3 rounded-md text-center">
                <p className="text-xl font-bold text-blue-700">
                  Pay<span className="text-xl font-bold text-blue-500">Pal</span>
                </p>
              </button>
            </div>

            {/* Price Summary */}
            <div className="border-t pt-4 text-gray-700">
              <ul className="flex w-full justify-between text-xl font-semibold px-5 border-b mb-5 mt-5">
                <li>Promotions</li>
                <li>+</li>
              </ul>
              <ul className="flex w-full justify-between text-xl font-semibold px-5 border-b mb-5 mt-5">
                <li>Promotions</li>
                <li>+</li>
              </ul>
              <div className="flex justify-between mt-2 px-5 text-xl font-bold">
                <p>Subtotal</p>
                <p>INR3,703.20</p>
              </div>
            </div>

            {/* Notification */}
            <p className="text-xs mt-3 text-gray-500">
              Don’t Miss Out!{" "}
              <span className="text-red-500">
                Items in the bag are not held and may sell out.
              </span>
            </p>

            {/* Help Section */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Need Some Help?</h2>
              <p className="text-sm">
                Customer Service:{" "}
                <span className="text-gray-600 cursor-pointer underline">
                  +1-925-359-2568
                </span>{" "}
                or{" "}
                <span className="text-gray-600 cursor-pointer underline">
                  +1-925-359-2568
                </span>
              </p>
            </div>

            {/* Order Details */}
            <div className="mt-6 text-sm text-gray-500 flex gap-5 items-center">
              <input type="checkbox" />
              <p>Order #21137201644</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
