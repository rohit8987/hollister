
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';





const Navbar = () => {
  return (
   <div className="w-full bg-white flex justify-center ">
    <div className=" w-[90%] flex justify-center">
        <div className="w-full flex justify-between ">
            <div className="flex justify-between  ">
            <img className="flex justify-start cursor-pointer" src="https://img.hollisterco.com/is/image/anf/hco-2024-HOL-logo-desktop-new.svg" alt="" />
                <ul className="flex text-sm font-medium items-center gap-7 justify-start">
                    <li className='cursor-pointer'>Women's</li>
                    <li className='cursor-pointer'>Men's</li>
                    <li className='cursor-pointer'>Jeans</li>
                    <li className='cursor-pointer'>Activewear</li>
                    <li className='cursor-pointer'>Sale</li>
                    <li className='cursor-pointer'>Purpose</li>
                </ul>
                </div>
               <div className="items-center flex justify-end ">
                <ul className="flex items-center mr-4 gap-8  ">
                    <li className="cursor-pointer"><SearchOutlinedIcon className="font-extrabold text-10 "/></li>
                    <li className="size-6 flex items-center cursor-pointer"> <img src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo=" alt="" /></li>
                    <li><FavoriteBorderIcon className="font-black text-20 cursor-pointer  "/></li>
                    <li><ShoppingBagOutlinedIcon  className="font-black text-20 cursor-pointer  "/></li>
                </ul>
                </div>
            
            </div>
        
    </div>
   </div>
  )
}

export default Navbar