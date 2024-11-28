const NavbarBottom = () => {
  return (
    <div className="bg-[#5b85af] w-full flex justify-center  ">
      <div className="w-[90%] p-2 flex gap-7 justify-start text-white text-sm ">
        <div className="flex  items-center ">
          <p className="flex">Free Shipping on Orders Over US$99!</p>
        </div>
        <div className="flex gap-7">
          <a className="cursor-pointer underline hover:text-gray-400">Shop Women's</a>
          <a className="cursor-pointer underline hover:text-gray-400">Shop Men's</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
