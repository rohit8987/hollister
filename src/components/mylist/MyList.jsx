import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { useState } from "react";

const MyList = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([
        {
            id: 1,
            img: "https://img.hollisterco.com/is/image/anf/KIC_334-4099-00026-120_model1?policy=product-medium",
            name: "Baggy Sweatpants",
            price: "INR 5,536.27",
        },
        {
            id: 2,
            img: "https://img.hollisterco.com/is/image/anf/KIC_334-4142-00070-900_model1?policy=product-medium",
            name: "Dodge Hellcat Graphic Baggy Sweatpants",
            price: "INR 8,500.00",
        },
        
    ]);

    const handleRemoveItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[80%] flex p-9 px-5">
                <div className="w-full flex flex-col justify-center">
                    <div className="flex justify-between w-full border-b border-gray-500 py-6">
                        <h1 className="text-4xl font-bold uppercase">My list</h1>
                        <div className="flex">
                            <ul className="flex gap-3">
                                <li className="font-semibold cursor-pointer" onClick={() => navigate("/signin")}>
                                    <a className="underline hover:text-gray-900 text-gray-600">Sign in</a>
                                </li>
                                <li className="font-semibold">
                                    <a className="text-gray-600">to keep your items for up to 60 days.</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 px-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {items.map((item, index) => (
                                <div key={index} className="relative group">
                                    {/* Image with onClick */}
                                    <img
                                        src={item.img}
                                        alt={`Item ${index + 1}`}
                                        className="w-80 h-96 cursor-pointer"
                                        onClick={() => navigate(`/product/${item.id}`)}
                                    />
                                    <p className="text-sm p-2 font-semibold text-gray-800 w-full">{item.name}</p>
                                    <p className="text-lg p-2 font-semibold text-gray-800">{item.price}</p>

                                    {/* Hover Buttons */}
                                    <div className="w-full px-4 absolute inset-0 flex justify-center items-center mt-56 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            className="w-full text-sm bg-transparent border border-gray-200 flex items-center justify-center gap-1 text-black font-semibold px-4 py-2 rounded hover:bg-gray-100"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent navigation
                                                handleRemoveItem(item.id); // Remove item
                                            }}
                                        >
                                            <FaHeart /> Added To List
                                        </button>
                                        <button
                                            className="w-full text-sm bg-transparent border border-gray-200 flex items-center justify-center gap-1 text-black font-semibold px-4 py-2 rounded hover:bg-gray-100"
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevent navigation
                                                alert("Quick View");
                                            }}
                                        >
                                            <ZoomInOutlinedIcon /> Quick View
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyList;
