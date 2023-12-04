import React from "react";
import heropic from "../Assets/personal.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black 
       to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
        <div className="flex  flex-col justify-center h-full ">
          <h2 className="text-4xl sm:text-7xl font-bold  text-white">
            I'm a Frontend developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            "I'm not just a frontend developer , I'm a storyteller in code. Let's
            collaborate to tell your brand's unique story through immersive and
            engaging digital experiences."
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500  cursor-pointer 
             "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={heropic}
            alt="my profiles"
            className="object-cover rounded-2xl mx-auto pb-20 w-[37%] md:w-[50%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
