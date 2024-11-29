import  { useState } from "react";
import { AiOutlineClose, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  return (
    <div className="flex justify-center  min-h-screen bg-gray-100 py-20">
      <div className="w-[580px] h-[620px] bg-white rounded-xl border border-gray-300 shadow-lg flex flex-col items-center py-8">
        {/* Header with Title and Close Button */}
        <div className="w-full flex justify-between px-6 items-center">
          <h2 className="text-2xl font-semibold text-gray-800 uppercase ml-12 ">Sign In</h2>
          <AiOutlineClose className="text-sm text-gray-800 cursor-pointer -mt-6" />
        </div>

        {/* Input Fields */}
        <div className="w-[450px] mt-8 flex flex-col gap-6 border-none">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border-b border-gray-800 text-gray-800 focus:outline-none "
              placeholder="Email"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2 relative">
            
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full  px-4 py-2 text-gray-800 focus:outline-none border-b border-gray-800 "
              placeholder="Password"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-2 cursor-pointer text-xl text-gray-500"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 cursor-pointer py-3 ">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 border border-gray-300 rounded cursor-pointer "
            />
            <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer flex items-center ">
            Keep Me Signed In <span className="ml-2"> <HelpOutlineIcon className="text-2xl text-gray-600 font-thin"/></span>
            </label>
          </div>
        </div>

        {/* Sign In Button */}
        <button className="w-[450px] bg-gray-800 text-white rounded-3xl py-3 mt-8 hover:bg-gray-700">
          Sign In
        </button>

        {/* Create Account Button */}
        <button onClick={() => navigate("/signup")} className="w-[450px] border-gray-800 border text-gray-900 rounded-3xl py-3 mt-4 hover:bg-gray-900 hover:text-gray-100 font-semibold">
          Create Account
        </button>

        {/* Forgot Password */}
        <p className="text-gray-500 text-sm mt-4 cursor-pointer hover:text-gray-600 underline">
          Forgot Password?
        </p>

        {/* OR Separator */}
        <div className="flex items-center gap-4 mt-6 w-[450px]">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <div className="w-full py-5 ">
          <div className="w-full flex flex-col mb-2">
            <span className="flex w-full justify-center text-sm text-gray-600 font-semibold ">Signed Up for Hollister House Rewards in Store?</span>
          </div>
          <p className="flex w-full justify-center underline text-sm text-gray-500 cursor-pointer hover:text-gray-600">Create a Password</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
