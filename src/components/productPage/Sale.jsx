import { useNavigate } from "react-router-dom"

const Sale = () => {
    const navigate = useNavigate ()
  return (
   <div className="w-full flex  bg-white py-10 px-96 ">
    <div className=" w-[578px] h-[578px] bg-gray-50 flex justify-center  items-center">
        <div className="">
            <div className="flex w-full justify-center flex-col items-center p-4 ">
                <h1 className="uppercase text-4xl text-gray-900 flex items-center">Clearance</h1>
                <div className=" w-full flex gap-5 p-7 justify-center">
                    <button onClick={()=>navigate('/productwomen')} className="border-black border-2 rounded-full text-gray-900 p-3 hover:bg-gray-800 hover:text-gray-200">Shop Women's</button>
                    <button onClick={()=>navigate('/productmen')} className="border-black border-2 rounded-full text-gray-900 p-3 hover:bg-gray-800 hover:text-gray-200 ">Shop Men's</button>
                </div>
            </div>
            </div>
    </div>
   </div>
  )
}

export default Sale