
import Slider from "react-slick";
import { AiOutlineHeart, AiFillHeart, AiOutlineDown } from "react-icons/ai";
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import { useState } from "react";
import product from "../productPage/ProductMenItems"
import { useNavigate } from "react-router-dom";



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const ProductMen = () => {

  const navigate = useNavigate ()

  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown state
  };



  const [likedProducts, setLikedProducts] = useState({}); // State to track liked status for each product

  const toggleLike = (productId) => {
    setLikedProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId], // Toggle the like status for this product
    }));
  };

  return (
    <div className="w-full justify-center flex bg-white ">
      <div className="w-[80%] h-full bg-white">
        {/* Women's Section - Fixed */}
        <div className="w-full bg-white justify-start text-sm text-gray-400 sticky z-0 top-[3.8rem] p-2 cursor-pointer ">
          Men's
        </div>

        <div className="w-full flex h-full">
          {/* Left Sidebar - Scrollable */}
          <div
            className="w-[15%] mt-20  bg-white h-screen overflow-y-auto"
            style={{ paddingTop: "40px" }} // Offset for the fixed "Women's" div
          >
            <div className="">
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Tops
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Bottoms
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Jackets & Coats
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Sweatshirts
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Sleepwear & Loungewear
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Swimwear
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Underwear & Socks
                  </a>
                </li>
              </ul>

              <ul className="py-5">
                <li>
                  <a
                    className="text-sm text-gray-800 font-medium uppercase"
                  >
                    Collection
                  </a>
                </li>
              </ul>

              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Game Day Looks
                  </a>
                </li>
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Gilly Hicks Collection
                  </a>
                </li>
              </ul>

              <ul className="py-5">
                <li>
                  <a
                    className="text-xs text-gray-500 hover:text-gray-600 cursor-pointer font-medium"
                  >
                    Clearance
                  </a>
                </li>
              </ul>
            </div>

            {/* Filter Section */}
            <div className="bg-gray-100 w-[90%] rounded-l-sm flex flex-col">
              <div>
                <ul className="flex w-full p-2 text-sm text-gray-900 cursor-pointer justify-between items-center">
                  <li className="flex font-semibold">Category</li>
                  <li className="flex font-semibold text-xl">+</li>
                </ul>
                <ul className="flex w-full p-2 text-sm text-gray-900 cursor-pointer justify-between items-center">
                  <li className="flex font-semibold">Color</li>
                  <li className="flex font-semibold text-xl">+</li>
                </ul>
                <ul className="flex w-full p-2 text-sm text-gray-900 cursor-pointer justify-between items-center">
                  <li className="flex font-semibold">Size</li>
                  <li className="flex font-semibold text-xl">+</li>
                </ul>
                <ul className="flex w-full p-2 text-sm text-gray-900 cursor-pointer justify-between items-center">
                  <li className="flex font-semibold">Length</li>
                  <li className="flex font-semibold text-xl">+</li>
                </ul>
                <ul className="flex w-full p-2 text-sm text-gray-900 cursor-pointer justify-between items-center">
                  <li className="flex font-semibold">Style</li>
                  <li className="flex font-semibold text-xl">+</li>
                </ul>
                <ul className="flex w-full p-2 text-sm text-gray-900 cursor-pointer justify-between items-center">
                  <li className="flex font-semibold">Material</li>
                  <li className="flex font-semibold text-xl">+</li>
                </ul>
                <ul className="flex w-full p-2 text-sm text-gray-900 cursor-pointer justify-between items-center">
                  <li className="flex font-semibold">Length Style</li>
                  <li className="flex font-semibold text-xl">+</li>
                </ul>
                <ul className="flex w-full p-2 text-sm text-gray-900 cursor-pointer justify-between items-center">
                  <li className="flex font-semibold">Details</li>
                  <li className="flex font-semibold text-xl">+</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center bg-white p-5">
            <div className="w-full h-full ml-5">
              <div className="flex justify-between p-5">
                <div className=" uppercase text-xl font-bold w-full flex items-center">
                  Men's clothing
                </div>
                <div className="relative">
                  {/* Dropdown Trigger */}
                  <span className="text-xs px-2 text-gray-600 ">Short By</span>
                  <button
                    className="flex items-center border-b-black border-b justify-between gap-2 p-2  text-gray-800  w-80"
                    onClick={toggleDropdown}
                  >
                   
                    <span className="text-xl font-semibold">Featured</span>
                    <AiOutlineDown className="text-gray-600 " />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute top-full mt-2 w-80 h-40 bg-white shadow-md rounded-md overflow-y-auto z-50">
                      <ul className="flex flex-col px-8 py-2 font-semibold">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                         Newest
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Price:Low to High
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Price:high to Low
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                         Customer Ratings
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                         Best Selling
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {product.map((product) => (
                  <div
                    key={product.id}
                    className="relative group h-[40rem] rounded-lg shadow-md overflow-hidden"
                   
                  >
                    {/* Favorite Icon */}
                    <button
                      onClick={() => toggleLike(product.id)} // Pass product ID to toggle like
                      className="absolute top-2 right-2 p-2 rounded-full shadow-md z-10"
                    >
                      {likedProducts[product.id] ? (
                        <AiFillHeart className="text-xl text-red-600" /> // Red filled heart
                      ) : (
                        <AiOutlineHeart className="text-xl text-gray-600" /> // Gray outlined heart
                      )}
                    </button>

                    {/* Product Image Slider */}
                    <div className="relative w-full h-[22rem]">
                      <Slider {...settings}>
                        {product.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Product ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ))}
                      </Slider>

                      {/* Hover Quick View */}
                      <div  onClick={() => navigate(`/product/${product.id}`)} className="absolute inset-0 opacity-0 p-2 group-hover:opacity-100 flex items-end justify-center transition-opacity w-full">
                        <button className="  text-gray-800 p-2 rounded-full hover:bg-gray-50 w-full justify-center items-center gap-2">
                          <ZoomInOutlinedIcon />
                          Quick View
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="absolute bottom-0 w-full bg-transparent p-4 gap-2 flex flex-col mt-4">
                      {/* Colors */}
                      <div className="flex gap-2 mb-2">
                        {product.colors.map((color, index) => (
                          <span
                            key={index}
                            className="w-5 h-5 rounded-full cursor-pointer"
                            style={{ backgroundColor: color }}
                          ></span>
                        ))}
                      </div>

                      {/* Sizes */}
                      <div className="flex gap-2">
                        {product.sizes.map((size, index) => (
                          <span
                            key={index}
                            className="text-xs text-gray-800 border rounded-md px-2 py-1 cursor-pointer hover:bg-gray-200"
                          >
                            {size}
                          </span>
                        ))}
                      </div>

                      {/* Product Name */}
                      <p className="text-gray-800 font-semibold text-sm">
                        {product.name}
                      </p>

                      {/* Prices */}
                      <div className="flex items-center gap-3">
                        <p className="text-gray-500 line-through text-sm">
                          {product.originalPrice}
                        </p>
                        <p className="text-red-600 font-semibold text-sm">
                          {product.offerPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductMen;
