import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useNavigate } from 'react-router-dom';

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex ">
      <div className="w-[80%] bg-transparent">

      </div>

      <div className="w-full h-[100%] bg-white border-black">
        <div className="p-5 w-full h-full">
          <div className="py-5 flex justify-between">
            <div className="w-full justify-between flex font-thin">
              <h1 className="uppercase text-gray-900 text-2xl font-semibold ">Your Account</h1>
            </div>
            <div className='font-medium text-gray-600 '>
           
            </div>
          </div>

          <div className="w-full flex justify-center px-6 py-2">
            <div  onClick={() => navigate("/signin")} className="w-72 justify-center flex  hover:bg-[#2c2a27] bg-gray-900 p-2 rounded-3xl cursor-pointer">
              <button className=' text-gray-100  text-xl' >Sign In</button>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-center">
              <div className="flex w-full justify-center p-4">
                <p className='text-sm text-gray-400'> Don't have an Account?
                  <span onClick={() => navigate("/signup")} className='text-sm text-gray-500 cursor-pointer font-medium hover:text-gray-600'> Create Account</span>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex py-3">
            <div className="w-full flex ">
              <ul className='flex flex-col gap-5 text-sm text-gray-600 justify-start font-semibold'>
                <li className='hover:text-gray-700 cursor-pointer'>Purchae History</li>
                <li className='hover:text-gray-700 cursor-pointer'>My List</li>
                <li className='hover:text-gray-700 cursor-pointer'>Account Setting</li> 
                <li className='hover:text-gray-700 cursor-pointer'>Find My Store</li>
                 <li className='hover:text-gray-700 cursor-pointer'>Customer Service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account