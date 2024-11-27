
import { LuUser } from "react-icons/lu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
   <div className="w-full flex bg-gray-100 justify-center">
        <div className="w-[90%] p-3 text-sm flex items-center gap-4 justify-end ">
            <LuUser className="size-5"/>
            <Link className="font-semibold text-gray-800 " > Sign In Or Create Accout</Link>
        </div>
   </div>
  )
}

export default Header
