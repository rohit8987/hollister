import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate= useNavigate()
    
    return (
        <div className="w-full bg-white flex justify-center">
            <div className="w-[90%] flex justify-center">
                <div className="w-full flex justify-between">

                    <div className="flex justify-between">
                        <img onClick={()=>navigate ("/")}
                            className="flex justify-start cursor-pointer"
                            src="https://img.hollisterco.com/is/image/anf/hco-2024-HOL-logo-desktop-new.svg"
                            alt="Logo"
                        />
                        <ul className="flex w-full gap-8 text-sm font-medium items-center relative">
                            <li className="relative group ">

                                <span onClick={()=>navigate("/productwomen")} className="cursor-pointer ">Women's</span>

                                <div className="absolute flex-col left-0 w-[900px] h-[650px] bg-white shadow-lg hidden group-hover:block transition-opacity duration-300">
                                    <div className="flex flex-col w-full justify-between ">

                                        <div className="flex justify-evenly mt-10 ml-10">
                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Categories</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >New Arrivals</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Tops</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Bottoms</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Jackets & Coots</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sweatshirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sleepwear & Loungewear</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Swimwear</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Underwear & Socks</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Accessories</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Cologne</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Gift Cards</a></li>
                                                        <li><a className='text-sm text-red-700  hover:underline cursor-pointer font-medium' >Clearance</a></li>
                                                    </ul>
                                                </div>
                                            </div>



                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Tops</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >T-shirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Tank Tops</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Graphic Tees</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Hoodies & Sweatshirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sweaters</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Polos</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Shirts & Blouses</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >All Tops</a></li>

                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Bottoms</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Jeans</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Pants</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Shorts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sleep Bottom</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >SweatePants</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Currny Bottom</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Leggings</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >All Bottoms</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Collections</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600  cursor-pointer font-medium' >Artist Style Edit</a></li>
                                                        <img className='py-4 mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAO-u-JBJ6lFWFf7ucQOt8aIdz6TVfBi6-g&s" alt="" />
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Game Day Looks</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Gilly Hicks Collections</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </div>




                                </div>
                            </li>

                            <li className="relative group ">

                                <span onClick={()=>navigate("/productmen")} className="cursor-pointer ">Men's</span>

                                <div className="absolute flex-col left-0 w-[900px] h-[650px] bg-white shadow-lg hidden group-hover:block transition-opacity duration-300">
                                    <div className="flex flex-col w-full justify-between ">

                                        <div className="flex justify-evenly mt-10 ml-10">
                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Categories</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >New Arrivals</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Tops</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Bottoms</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Jackets & Coots</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sweatshirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sleepwear & Loungewear</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Swimwear</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Underwear & Socks</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Accessories</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Cologne</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Gift Cards</a></li>
                                                        <li><a className='text-sm text-red-700  hover:underline cursor-pointer font-medium' >Clearance</a></li>
                                                    </ul>
                                                </div>
                                            </div>



                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Tops</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >T-shirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Tank Tops</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Graphic Tees</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Hoodies & Sweatshirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sweaters</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Polos</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Shirts & Blouses</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >All Tops</a></li>

                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Bottoms</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Jeans</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Pants</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Shorts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sleep Bottom</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >SweatePants</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Currny Bottom</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Leggings</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >All Bottoms</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Collections</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600  cursor-pointer font-medium' >Artist Style Edit</a></li>
                                                        <img className='py-4 mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzwe0ksScORO1QpYp-W9kNNI3Iuhqh4c00nA&s" alt="" />
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Game Day Looks</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Gilly Hicks Collections</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>


                            <li className="relative group ">
                                <span onClick={()=> navigate("/jeans")} className="cursor-pointer ">Jeans</span>
                                <div className="absolute flex-col left-0 w-[600px] h-[550px] bg-white shadow-lg hidden group-hover:block transition-opacity duration-300">
                                    <div className="flex flex-col w-full justify-between ">
                                        <div className="flex justify-evenly mt-10 ml-10">
                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Women's</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >New Arrivals</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Tops</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Bottoms</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Jackets & Coots</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sweatshirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sleepwear & Loungewear</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Swimwear</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Underwear & Socks</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Accessories</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Gift Cards</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >+View All</a></li>

                                                    </ul>
                                                </div>
                                            </div>



                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Men's</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >T-shirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Tank Tops</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Graphic Tees</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Hoodies & Sweatshirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sweaters</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Polos</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Shirts & Blouses</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >All Tops</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >+View All</a></li>
                                                    </ul>
                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li className="relative group ">
                                <span onClick={()=> navigate("/activewear")} className="cursor-pointer ">Activewear</span>
                                <div className="absolute flex-col left-0 w-[300px] h-[400px] bg-white shadow-lg hidden group-hover:block transition-opacity duration-300">
                                    <div className="flex flex-col w-full justify-between ">

                                        <div className="flex justify-evenly mt-10 ml-10">
                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Women's</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >New Arrivals</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Tops</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Bottoms</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Jackets & Coots</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sweatshirts</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Sleepwear & Loungewear</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Swimwear</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Underwear & Socks</a></li>

                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </div>




                                </div>
                            </li>
                            <li className="relative group ">

                                <span onClick={()=>navigate("/sale")} className="cursor-pointer ">Sale</span>

                                <div className="absolute flex-col left-0 w-[500px] h-[250px] bg-white shadow-lg hidden group-hover:block transition-opacity duration-300">
                                    <div className="flex flex-col w-full justify-between ">

                                        <div className="flex justify-evenly mt-10 ml-10">
                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Women's</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Clearance</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >View All</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="flex-1 ">
                                                <div className="">
                                                    <h2 className='text-gray-800 text-sm font-semibold py-4'>Men's</h2>
                                                    <ul className='flex flex-col gap-3'>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >Clearance</a></li>
                                                        <li><a className='text-sm text-gray-500 hover:text-gray-600 hover:underline cursor-pointer font-medium' >View All</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="relative group ">
                                <span className="cursor-pointer ">Purpose</span>
                                <div className="absolute flex-col left-0 w-[290px] h-[320px] bg-white shadow-lg hidden group-hover:block transition-opacity duration-300">
                                    <div className="flex flex-col w-full justify-between p-2 ">
                                        <div className="flex justify-evenly ">
                                            <div className="flex-1 ">
                                                <div className="">
                                                    <ul className='flex flex-col gap-3 relative'>
                                                        <img className='h-[300px]' src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbc4ac592-1460-4a44-bdc1-6973e0358ef8_609x492.png" alt="" />
                                                    </ul>
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-wrap pointer-events-none mt-52">
                                                        <button className=" bg-white  text-gray-900 px-6 py-2 rounded-full hover:bg-gray-200 hover:text-black pointer-events-auto cursor-pointer">
                                                            Learn more
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Search, Flag, Favorites, and Cart Icons */}
                    <div className="items-center flex justify-end">
                        <ul className="flex items-center mr-4 gap-8">
                            <li className="cursor-pointer">
                                <SearchOutlinedIcon className="font-extrabold text-10" />
                            </li>
                            <li className="size-6 flex items-center cursor-pointer">
                                <img
                                    src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo="
                                    alt="Flag"
                                />
                            </li>
                            <li>
                                <FavoriteBorderIcon className="font-black text-20 cursor-pointer" />
                            </li>
                            <li>
                                <ShoppingBagOutlinedIcon className="font-black text-20 cursor-pointer" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
