import { useNavigate } from "react-router-dom"

const Jeans = () => {

    const navigate = useNavigate();

    return (
        <div className="w-full flex justify-center ">
            <div className="w-[1500px]  relative justify-center ">
                <div className="relative">
                    <img
                        className="w-full h-[80%] object-cover py-5"
                        src="https://img.hollisterco.com/is/image/anf/hco-2024-JuneWk4-D-LP-Jeans.jpg"
                        alt="bannerOne"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-wrap pointer-events-none mt-52 gap-3">
                    <ul className="text-sm flex justify-center flex-col items-center gap-2 font-sans font-normal">
                        <a className=" text-white text-5xl">Most Requested Jeans</a>
                        <li className=" text-white w-full flex justify-center">The fits everyone's asking about.</li>
                    </ul>
                    <div className=" text-xl w-full justify-center font-sans flex gap-6 ">

                        <button  onClick={() => navigate("/productwomen")} className=" border text-black px-6 py-2 rounded-full pointer-events-auto bg-white  ">
                            Women's Jeans
                        </button>
                        <button onClick={()=> navigate("/productmen")} className=" border text-black px-6 py-2 rounded-full pointer-events-auto bg-white ">
                            Men's Jeans
                        </button>
                   

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jeans