import React from "react";
import netflix from "../Assets/netflix-ui-2022.jpg";
import youtube from "../Assets/Screen Shot 2023-10-14 at 1.28.26 PM.png";
import ecommerce from "../Assets/ecommerce.jpg";
import google from "../Assets/google.png";
import netpage from "../Assets/netpage.jpg";
import online from "../Assets/online.jpg";

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src: netflix,
      demo: "https://netflixgpt-ad.netlify.app",
      code: "https://github.com/ADITYA2777/NetflixGpt.git",
    },
    {
      id: 2,
      src: youtube,
      demo: " https://youtube-lite-ad.netlify.app",
      code: "https://github.com/ADITYA2777/youtube-lite.git",
    },
    {
      id: 3,
      src: google,
      demo: "https://lnkd.in/d2xnUzpj",
      code: "https://lnkd.in/d5F8JMZN)",
    },
    {
      id: 4,
      src: netpage,
      demo: "https://lnkd.in/dkvp8KQF",
      code: "https://lnkd.in/dEniUcfn",
    },
    {
      id: 5,
      src: online,
      demo: "https://kidstoy.netlify.app",
      code: "https://lnkd.in/dksyc2en",
    },
    {
      id: 6,
      src: ecommerce,
      demo: "https://jewllery-ecommerce-html.netlify.app",
      code: "https://github.com/ADITYA2777/jewellery-ecommerice.git",
    },
  ];

   
  const handlerToDemoLinks = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const hanlerToCodelink = (codeLink) => {
    window.open(codeLink, "_blank");
  };

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 px-4 sm:px-0 relative z-10">
          {portfolio.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="overflow-hidden rounded-lg shadow-md "
            >
              <img
                className="object-cover w-full h-48 sm:h-64 md:h-72 transition-transform transform hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex justify-center items-center mt-4 space-x-4">
                <button
                  onClick={() => handlerToDemoLinks(demo)}
                  className="w-1/2 py-3 px-5 bg-blue-500 text-white rounded-md transition-transform transform hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => hanlerToCodelink(code)}
                  className="w-1/2 py-3 px-6 bg-green-500 text-white rounded-md transition-transform transform hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
