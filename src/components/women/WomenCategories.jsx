

const WomenCategories = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="w-[90%] flex justify-between items-center p-4">
        {/* Logo */}
        <img
          className="cursor-pointer"
          src="https://img.hollisterco.com/is/image/anf/hco-2024-HOL-logo-desktop-new.svg"
          alt="logo"
        />

        {/* Navigation Links */}
        <ul className="flex gap-8 text-sm font-medium items-center">
          <li className="relative group">
            {/* Category Link */}
            <span className="cursor-pointer">Categories</span>
            {/* Dropdown menu that appears on hover */}
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ul className="p-2">
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Category 1</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Category 2</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">Category 3</li>
              </ul>
            </div>
          </li>

          <li className="cursor-pointer">Men's</li>
          <li className="cursor-pointer">Women's</li>
          <li className="cursor-pointer">Sale</li>
        </ul>

        {/* Right Side Icons */}
        <div className="flex gap-4 items-center">
          {/* Icons or other content */}
        </div>
      </div>
    </div>
  );
};

export default WomenCategories;

