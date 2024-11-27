import { useState } from 'react';
import logo from '../../assets/log.png';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


const Footer = () => {
    // Toggle button state
    const [isOn, setIsOn] = useState(false);

    return (
        <div className="w-full bg-[#F5F5F5] flex justify-center">
            <div className="w-[90%] flex justify-center flex-col ">
                <div className="text-sm flex justify-center">
                    <a className="underline cursor-pointer p-3 text-gray-700">See All Offer Details</a>
                </div>
                <div className="flex justify-between px-10 mt-10">
                    <div className="flex w-full">
                        <div className="flex justify-evenly w-full">
                            <div className="flex-1 w-full text-center justify-start flex flex-col">
                                <div className="w-full flex mb-10 flex-col">
                                    <img className="w-full size-7 h-14" src={logo} alt="" />
                                </div>
                                <hr className="w-[90%]" />
                                <ul className="w-full justify-start flex flex-col">
                                    <li className="flex py-3 text-gray-400 text-xs">Our Brands</li>
                                </ul>
                                <div className="flex justify-start uppercase w-24 mb-3">
                                    <p className="font-semibold text-gray-500 hover:text-gray-800 cursor-pointer">hollister</p>
                                </div>
                                <div className="flex flex-col font-serif justify-start gap-3">
                                    <a className="font-semibold text-sm text-gray-500 hover:text-gray-800 cursor-pointer float-start flex">
                                        Abercrombie & Fitch
                                    </a>
                                    <a className="font-semibold text-sm text-gray-500 hover:text-gray-800 cursor-pointer float-start flex">
                                        abercrombie kids
                                    </a>
                                </div>
                            </div>

                            <div className="flex-1 text-center flex flex-col">
                                <h2 className="justify-start flex text-xl text-gray-700 mb-4">About Us</h2>
                                <ul className="flex flex-col gap-4 text-xs text-gray-500">
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Brand Protection</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Careers</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">A&F Gives Back</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Accessibility</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Inclusion & Diversity</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Press Room</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Sustainability</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-1 text-center flex flex-col">
                                <h2 className="justify-start flex text-xl text-gray-700 mb-4">Help</h2>
                                <ul className="flex flex-col gap-4 text-xs text-gray-500">
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Customer Help</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Order Help</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Shipping & Handling</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Online Returns</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Track My Order</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Card & E-Cards</a>
                                    </li>
                                    <li className="flex justify-start">
                                        <a className="cursor-pointer hover:text-gray-800">Currency</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex-1 text-center flex flex-col gap-5">
                                <ul className="flex flex-col gap-4 text-xs text-gray-500">
                                    <li className="flex justify-start py-2">
                                        <a className="cursor-pointer hover:text-gray-800 flex gap-2">
                                            <span>
                                                <LocationOnOutlinedIcon />
                                            </span>
                                            <span className="underline flex items-end">Find a Store</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="w-full flex gap-4">
                                    <div className="flex px-1">
                                        <span className="flex gap-4 items-center">
                                            <span className="size-2 w-4">
                                                <img
                                                    className="cursor-pointer"
                                                    src="https://media.istockphoto.com/id/472317739/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=ejlQRX4C_Mb40wz1JQcB5vKYcOKlfRtry2W6UcX6mlo="
                                                    alt=""
                                                />
                                            </span>
                                            <span className="flex text-xs text-gray-700 font-semibold">India</span>
                                        </span>
                                    </div>
                                    <div className="flex w-full items-center">
                                        <span className="flex w-full items-center gap-5">
                                            <a className="font-light flex text-gray-400">|</a>
                                            <a className="underline flex gap-4 text-xs text-gray-500 cursor-pointer hover:text-gray-800">
                                                Change
                                            </a>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex w-full items-center px-1 py-3">
                                    <label className="w-full flex items-center cursor-pointer gap-14">
                                        <span className="flex justify-start text-xs text-gray-500 cursor-pointer hover:text-gray-800">
                                            High Contrast
                                        </span>
                                        <span className="flex justify-end">
                                            <button
                                                onClick={() => setIsOn(!isOn)}
                                                className={`w-14 h-6 rounded-full p-1 flex items-center transition-colors duration-300 ${isOn ? "bg-gray-800" : "bg-gray-300"
                                                    }`}   >

                                                <div className={`h-4 w-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isOn ? "translate-x-8" : "translate-x-0"}`} >
                                                </div>
                                            </button>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <div className="flex-1 text-center">
                                <div className="">
                                    <div className="">
                                        <div className="flex w-full p-3">
                                            <span className='flex justify-start'>
                                                <h3 className='text-gray-900 font-semibold text-xs'>Subscribe</h3>
                                            </span>
                                        </div>
                                        <div className="w-full flex justify-start">
                                        <span className=' border-b-black'>
                                            <a >Email Address</a>
                                        </span>
                                        <button className=' text-white bg-black rounded-md'>Join</button>
                                        </div>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;