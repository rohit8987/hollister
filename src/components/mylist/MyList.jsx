import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { useEffect } from "react";
import { useWishlist } from "./WishlistContext";

const MyList = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { wishlist, removeFromWishlist } = useWishlist();

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
                        {wishlist.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {wishlist.map((item, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={item.img}
                                            alt={`Item ${index + 1}`}
                                            className="w-80 h-96 cursor-pointer"
                                            onClick={() => navigate(`/product/${item.id}`)}
                                            onError={(e) => {
                                                e.target.onerror = null; // Prevent infinite loop
                                                e.target.src = "/fallback-image.jpg"; // Replace with fallback image path
                                                console.log(wishlist);

                                            }}
                                        />
                                        <p className="text-sm p-2 font-semibold text-gray-800 w-full">{item.name}</p>
                                        <p className="text-lg p-2 font-semibold text-gray-800">{item.price}</p>

                                        <div className="w-full px-4 absolute -inset-2 flex justify-center items-center mt-56 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                className="w-full text-xs bg-transparent border border-gray-200 flex items-center justify-center gap-1 text-black font-semibold px-3 py-2 rounded hover:bg-gray-100"
                                                onClick={() => removeFromWishlist(item.id)}
                                            >
                                                <FaHeart className="font-bold" /> Remove from List
                                            </button>
                                            <button
                                                className="w-full text-xs bg-transparent border border-gray-200 flex items-center justify-center gap-1 text-black font-semibold px-3 py-1 rounded hover:bg-gray-100"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    alert("Quick View");
                                                }}
                                            >
                                                <ZoomInOutlinedIcon /> Quick View
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-lg text-gray-600">Your list is empty!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyList;
