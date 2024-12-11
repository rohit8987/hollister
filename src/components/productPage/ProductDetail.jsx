import { useEffect, useState } from "react";
import PageviewOutlinedIcon from "@mui/icons-material/PageviewOutlined";
import { FiHeart } from "react-icons/fi";
import { FaAngleRight } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useWishlist } from "../mylist/WishlistContext";


const ColorSelector = ({ colors = [], onColorSelect }) => {
    const [activeColor, setActiveColor] = useState(null);

    const handleColorClick = (color) => {
        setActiveColor(color);
        onColorSelect(color);
    };

    return (
        <div className="flex flex-col">
            <span className="block mb-2 text-gray-800 font-semibold">Select Color:</span>
            <div className="flex items-center gap-3 ">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        onClick={() => handleColorClick(color)}
                        className={`w-8 h-8 rounded-full cursor-pointer shadow-md border-2 hover:border-black ${activeColor === color ? "border-gray-400" : "border-transparent"
                            }`}
                        style={{ backgroundColor: color }}
                    >
                        {activeColor === color && (
                            <div className="flex items-center justify-center w-full h-full">
                                <span className="text-white font-bold">✓</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {activeColor && <p className="text-sm text-gray-600 mt-2">Selected Color: {activeColor}</p>}
        </div>
    );
};

const SizeSelector = ({ sizes = [], onSizeSelect }) => {
    const [activeSize, setActiveSize] = useState(null);

    const handleSizeClick = (size) => {
        setActiveSize(size);
        onSizeSelect(size);
    };

    return (
        <div className="flex flex-col mt-5">
            <span className="mb-2 text-gray-800 font-semibold flex justify-between items-center">
                Select Size:
                <p className="text-gray-600 cursor-pointer font-semibold underline mr-20">
                    Size Guide
                </p>
            </span>
            <div className="flex items-center gap-4">
                {sizes.map((size, index) => (
                    <div
                        key={index}
                        onClick={() => handleSizeClick(size)}
                        className={`w-10 h-10 flex items-center justify-center rounded-full hover:border-black cursor-pointer shadow-md border-2 text-sm font-semibold ${activeSize === size ? "border-gray-800 bg-gray-200" : "border-transparent"
                            }`}
                    >
                        {size}
                    </div>
                ))}
            </div>
            {activeSize && <p className="text-sm text-gray-600 mt-2">Selected Size: {activeSize}</p>}
        </div>
    );
};

const QuantitySelector = ({ quantities = [], onQuantityChange }) => {
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const navigate = useNavigate()

    const handleQuantityChange = (event) => {
        const qty = parseInt(event.target.value, 10);
        setSelectedQuantity(qty);
        onQuantityChange(qty);
    };

    return (
        <div className="w-full flex justify-between mt-5 bg-white">
            <div className=" w-20 ml-5 ">
                <span className=" mb-2 ml-5 text-gray-600 text-xs">Qty</span>
                <select
                    value={selectedQuantity}
                    onChange={handleQuantityChange}
                    className="w-full bg-transparent  border-b border-b-black px-8 py-2  text-xl font-semibold  shadow-sm text-gray-700 cursor-pointer "
                >
                    {quantities.map((qty, index) => (
                        <option key={index} value={qty} >
                            {qty}
                        </option>
                    ))}
                </select>

            </div>
            <div onClick={()=> navigate("/cart")} className="bg-[#0075c9] w-[22rem] h-16 flex justify-center items-center rounded-full hover:bg-gray-900 cursor-pointer">
                <button className="text-white text-xl font-semibold ">Get It Before It's Gone</button>
            </div>

        </div>
    );
};

const ProductDetail = ({ colors = [], sizes = [], quantities = [], }) => {

 const navigate = useNavigate ()

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleColorSelect = (color) => setSelectedColor(color);
    const handleSizeSelect = (size) => setSelectedSize(size);
    const handleQuantityChange = (quantity) => setSelectedQuantity(quantity);

    const {addToWishlist} = useWishlist();


    const { state } = useLocation()
    const product = state?.product;


    const handleAddToList = () => {
        if (!product) return;

        // Add product along with selected options to wishlist
        addToWishlist({
            ...product,
            selectedColor,
            selectedSize,
            selectedQuantity,
        });

        alert("Product added to your list!");
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return <p>Product not found!</p>;
    }


    return (
        <div className="w-full flex-col flex justify-center items-center">
            <div className="bg-white h-10 w-full flex justify-center sticky z-0 top-[3.8rem] ">
                <div className="w-[80%] flex justify-start items-center">
                    <ul className="  justify-start items-center flex text-gray-500 gap-3 font-semibold text-sm cursor-pointer">
                        <li className="flex items-center "><a className="mr-2">Women's</a><FaAngleRight /></li>
                        <li className="flex items-center"><a className="mr-2">Jackets & Coats</a><FaAngleRight /></li>
                        <li className="flex items-center"><a >Puffer</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-white py-8 w-full flex justify-center">
                <div className="w-[80%] flex justify-center">
                    <div className="grid grid-cols-2 ml-64 gap-">
                        {/* Product Images */}
                        <div className="flex-col grid grid-cols-2 gap-6  content-start cursor-pointer">

                            {product.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Product Image ${index + 1}`}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            ))}

                        </div >

                        {/* Product Details */}
                        <div className="flex justify-center w-full p-10 px-10">
                            <div className="flex flex-col gap-5">
                                <h1 className="uppercase text-3xl font-bold text-black">
                                    {product.name}
                                </h1>
                                <span className="text-gray-700">
                                    <p className="text-gray-900 line-through text-sm font-semibold">
                                        {product.originalPrice}
                                    </p>
                                    <p className="text-sm font-semibold text-blue-900">{product.offerPrice}</p>
                                </span>
                                <p className="text-sm text-gray-600">{product.description}</p>
                                <hr className="mt-10" />

                                {/* Color Selector */}
                                <>
                                    <div className="">
                                        <ColorSelector colors={colors} onColorSelect={handleColorSelect} />
                                        {selectedColor && (
                                            <p className="text-sm text-gray-600 mt-3">
                                                Selected Color: <strong>{selectedColor}</strong>
                                            </p>
                                        )}
                                    </div>
                                    <div className="">
                                        {/* Size Selector */}
                                        <SizeSelector sizes={sizes} onSizeSelect={handleSizeSelect} />
                                        {selectedSize && (
                                            <p className="text-sm text-gray-600 mt-3">
                                                Selected Size: <strong>{selectedSize}</strong>
                                            </p>
                                        )}
                                    </div>
                                    <div className="w-[25rem] p-2">
                                        <div className="bg-gray-50 w-full py-2">
                                            <ul className="flex gap-5 justify-center">
                                                <li><PageviewOutlinedIcon className="text-gray-500" /></li>
                                                <li className="text-gray-500"> Size Sold Out? <a className="underline">Shop Similar Items</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-full gap-10 py-2">
                                        <ul className="flex w-[550px] px-5 py-5 gap-20">
                                            <li className="flex flex-col  w-20 h-20 justify-center ">
                                                <img src="https://img.abercrombie.com/is/image/anf/hco_icon_warmest.svg" alt="" />
                                                <a className="flex justify-center" >Warmest</a>
                                            </li>

                                            <li className="flex flex-col size-24   w-20 h-20 justify-center">
                                                <img src="https://img.abercrombie.com/is/image/anf/hco_icon_wind_and_water_resistant_fabric.svg" alt="" />
                                                <a className="flex justify-center" >Wind & Water Resistant</a>
                                            </li>

                                            <li className="flex flex-col size-24 justify-center">
                                                <img src="https://img.abercrombie.com/is/image/anf/hco_icon_super_soft.svg" className=" w-20 h-20 " />
                                                <a className="flex justify-center" >Cozy-Lined Pockets & Interior</a>
                                            </li>
                                        </ul>
                                        <ul className="px-5 py-5">
                                            <li className="flex flex-col size-24  w-20 h-20 justify-center">
                                                <img src="https://img.abercrombie.com/is/image/anf/hco_icon_removable_hood.svg" alt="" />
                                                <a className="flex justify-center" >Removale Hood</a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="flex w-full items-center">
                                        <QuantitySelector
                                            quantities={quantities}
                                            onQuantityChange={handleQuantityChange}
                                        />
                                    </div>
                                    <div className="w-full flex justify-center mt-10">
                                        <div onClick={handleAddToList} className="flex gap-4 w-[28rem] justify-center items-center cursor-pointer rounded-full border border-[#e7e7e3] p-4 hover:bg-[#e7e7e3]">
                                            <span className="font-semibold text-10"><FiHeart className=" text-gray-900 font-semibold " /></span>
                                            <button  className="text-xl font-semibold">Add To List</button>
                                        </div>
                                    </div>
                                    <hr className="mt-5" />
                                    <div className=" flex justify-center  ">
                                        <div className="w-full flex justify-center py-2 ">
                                            <ul className="flex flex-col w-full justify-between p-5 ">
                                                <li className="p-7 flex w-full px-10  text-gray-800 font-semibold justify-between border-b border-gray-700">
                                                    Size & Fit <a className="text-xl text-gray-600 font-medium">+</a>
                                                </li>
                                                <li className="p-7 flex w-full px-10  text-gray-800 font-semibold justify-between border-b border-gray-700">
                                                    Size & Fit <a className="text-xl text-gray-600 font-medium">+</a>
                                                </li>
                                                <li className="p-7 flex w-full px-10  text-gray-800 font-semibold justify-between border-b border-gray-700">
                                                    Size & Fit <a className="text-xl text-gray-600 font-medium">+</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
