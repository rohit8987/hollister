
import Slider from "react-slick";
import { AiOutlineHeart } from "react-icons/ai";


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const ProductMen = () => {

  const products = [
    {
      id: 1,
      images: [
        "/images/product1-1.jpg",
        "/images/product1-2.jpg",
        "/images/product1-3.jpg",
        "/images/product1-4.jpg",
      ],
      name: "Product Name 1",
      price: "$49.99",
      colors: ["#000000", "#FF5733", "#DAF7A6"],
    },
    {
      id: 2,
      images: [
        "/images/product2-1.jpg",
        "/images/product2-2.jpg",
        "/images/product2-3.jpg",
        "/images/product2-4.jpg",
      ],
      name: "Product Name 2",
      price: "$59.99",
      colors: ["#000000", "#FFC300", "#C70039"],
    },
    {
      id: 3,
      images: [
        "/images/product3-1.jpg",
        "/images/product3-2.jpg",
        "/images/product3-3.jpg",
        "/images/product3-4.jpg",
      ],
      name: "Product Name 3",
      price: "$69.99",
      colors: ["#000000", "#581845", "#900C3F"],
    },
  ];


  return (
    <div className="w-full justify-center flex bg-white p-1">
      <div className="w-[80%] h-full bg-white">
        {/* Women's Section - Fixed */}
        <div className="w-full  justify-start text-xs text-gray-400 sticky top-16 z-50 p-2 ">
          Women's
        </div>

        <div className="w-full flex">
          {/* Left Sidebar - Scrollable */}
          <div
            className="w-[15%] mt-20 bg-white h-screen overflow-y-auto"
            style={{ paddingTop: "40px" }} // Offset for the fixed "Women's" div
          >
            <div>
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

          {/* Main Content */}
          <div className="w-[85%]">
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              {/* Heart Icon */}
              <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md">
                <AiOutlineHeart className="text-xl text-gray-700" />
              </button>

              {/* Product Image Slider */}
              <div className="relative">
                <Slider {...settings}>
                  {product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  ))}
                </Slider>

                {/* Hover Popup */}
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <button className="bg-white text-gray-800 px-4 py-2 rounded shadow-md">
                    View Details
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Colors */}
                <div className="flex gap-2 mb-2">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="w-5 h-5 rounded-full"
                      style={{ backgroundColor: color }}
                    ></span>
                  ))}
                </div>

                {/* Product Name */}
                <p className="text-gray-800 font-semibold text-sm">
                  {product.name}
                </p>

                {/* Price */}
                <p className="text-gray-600 text-sm">{product.price}</p>
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

export default ProductMen;
