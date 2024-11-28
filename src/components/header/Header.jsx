import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full flex bg-gray-100 justify-center z-50 shadow-2xl">
      <div className="w-[90%] p-3 text-sm flex items-center gap-4 justify-end">
        <LuUser className="text-xl" />
        <Link className="font-semibold text-gray-800 hover:text-gray-600">
          Sign In Or Create Account
        </Link>
      </div>
    </div>
  );
};

export default Header;
