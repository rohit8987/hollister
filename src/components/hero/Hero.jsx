
import Slider from "react-slick";
import hollister from "../../assets/Hollister.png"
import ollister from "../../assets/ollister.png"
import { useNavigate } from "react-router-dom";

const Hero = () => {

const navigate =useNavigate ()

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "linear",

    appendDots: (dots) => (
      <div style={{ display: "none" }}><ul >{dots}</ul></div>
    ),

  };
  return (
    <div className="w-full bg-[#fcfcfa] flex justify-center">
      <div className=" flex flex-col justify-center">
        <div className="w-[1500px] ml-20 relative  ">
          {/* Slider Component */}
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="relative">
              <img
                className="w-full h-[80%] object-cover"
                src="https://img.hollisterco.com/is/image/anf/hco-2023-JulyWk2-D-Jeans-LP-R_02.jpg"
                alt="bannerOne"
              />
            </div>

            {/* Slide 2 */}
            <div className="relative">
              <img
                className="w-full h-[80%] object-cover"
                src="https://corporate.abercrombie.com/wp-content/uploads/2023/07/HCO-page-Q2-1-2.png?w=1360"
                alt="bannerTwo"
              />
            </div>
          </Slider>

          {/* Consistent Text and Button Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-wrap pointer-events-none mt-52">
            <a className="font-serif text-white text-xl font-bold">Cozy Girl Season</a>
            <span className="text-white text-3xl font-serif font-semibold bg-opacity-30">
              Sweaters Over Everything
              <ul className="text-sm flex justify-center flex-col items-center  p-2 font-sans font-normal">
                <li className="  w-full flex justify-center">The weather is begging</li>
                <li>you to wear these.</li>
              </ul>
            </span>
            <button onClick={() => navigate("/productwomen")} className=" border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black pointer-events-auto cursor-pointer">
              Shop Women's
            </button>
          </div>
        </div>

        <div className="w-full flex justify-center mt-20 py-5">
          <div className="w-[90%] flex justify-center flex-col">
            <div className="flex justify-center w-full flex-col">
              <span className="flex justify-center w-full items-center ">
                <h1 className="flex justify-center text-6xl font-bold py-2">New </h1>
                <span className="text-6xl "> Arrivals</span>
              </span>
              <p className="flex justify-center w-full text-xl text-gray-800 mb-8">The season's most versatile looks are ready for anything.</p>
            </div>

            <div className="w-full flex ">
              <div className=" flex w-full gap-12">
                <div className=" flex flex-col justify-center py-2 gap-5">
                  <img src="https://img.hollisterco.com/is/image/anf/KIC_355-4545-00404-977_life1.jpg?policy=product-large" alt="" />
                  <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-4xl">Here for the Holidays</h1>
                    <span className="flex justify-center  flex-col">
                      <p className="text-xl flex justify-center w-full flex-col text-gray-700 mb-3">Mini skirts that pair well with 
                        <span className="flex justify-center">every holiday party.</span>
                         </p>
                      <a className="text-sm flex justify-center  text-gray-600 underline hover:text-gray-800 cursor-pointer "> Women's New Arrivals</a>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-2 gap-5">
                  <img src="https://img.hollisterco.com/is/image/anf/KIC_332-4086-00053-100_model1.jpg?policy=product-large " alt="" />
                  <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-4xl">Outfits on Autopilot </h1>
                    <span className="flex justify-center  flex-col">
                      <p className="text-xl flex flex-col justify-center items-center text-gray-700 mb-3">Effortless style starts with 
                        <span className="flex justify-center">officially-licensed hoodies, tees and more. </span>
                         </p>
                      <a className="text-sm flex justify-center  text-gray-600 underline hover:text-gray-800 cursor-pointer ">Men's New Arrivals </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-col">
            <div className="w-[1500px]  relative  ">
            <div className="relative">
              <img
                className="w-full h-[80%] object-cover py-5"
                src="https://img.hollisterco.com/is/image/anf/hco-20241003-D-HP-GillyNewArrivals.png"
                alt="bannerOne"
              />
            </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-wrap pointer-events-none mt-52">
            <a className="font-serif text-white text-xl font-bold uppercase">gilly hicks</a>
            <span className="text-white text-3xl font-serif font-semibold bg-opacity-30">
           New Active Looks
              <ul className="text-sm flex justify-center flex-col items-center  p-2 font-sans font-normal">
                <li className="  w-full flex justify-center">Get set for fall with active styles</li>
                <li>that do it all.</li>
              </ul>
            </span>
            <button  onClick={() => navigate("/activewear")} className=" border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black pointer-events-auto cursor-pointer">
             All Activewear
            </button>
          </div>
        </div>

        <div className="w-[1500px]  relative  ">
            <div className="relative">
              <img
                className="w-full h-[80%] object-cover py-5"
                src="https://img.hollisterco.com/is/image/anf/hco-20241113-D-HP-Mens-Boxy-Puffers.png"
                alt="bannerOne"
              />
            </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-wrap pointer-events-none mt-52">
            <a className="font-serif text-white text-xl font-bold uppercase">fall fit check</a>
            <span className="text-white text-3xl font-serif font-semibold bg-opacity-30 ">
              <p className="w-full justify-center flex text-5xl"> Boxy Puffers</p>
              <ul className="text-sm flex justify-center flex-col items-center  p-2 font-sans font-normal">
                <li className="  w-full flex justify-center">Water-resistant fabric with adjustable bungees.</li>
                <li>These versatile puffers finish the look.</li>
              </ul>
            </span>
            <button  onClick={() => navigate("/productmen")} className=" border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black pointer-events-auto cursor-pointer">
          Shop Men's
            </button>
          </div>
        </div>
            </div>

            <div className="w-full flex ">
              <div className=" flex w-full re">
                <div className=" flex flex-col justify-center py-2 gap-5">
                  <img src={ollister} alt="" />
                  
                </div>
                <div className="flex flex-col justify-center py-2 gap-5">
                  <img src={hollister} alt="" />
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  )
}

export default Hero
