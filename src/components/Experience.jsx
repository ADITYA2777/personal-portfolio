import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/javascript.png";
import reactImage from "../Assets/react.png";
import node from "../Assets/node.png";
import tailwind from "../Assets/tailwind.png";
import vite from "../Assets/vite.jpg";
import bootstrap from "../Assets/bootstrap.jpg";
import fireBase from "../Assets/fireBase.jpg";
import mySql from "../Assets/mysql.png";
import monogodb from "../Assets/monogodb.jpg";
import github from "../Assets/github.png";

const Experience = () => {
  const experience = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-700",
    },
    {
      id: 5,
      src: node,
      title: "Node",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "TailWind",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-700",
    },
    {
      id: 8,
      src:vite ,
      title: "Vite",
      style: "shadow-orange-700",
    },
    {
      id: 9,
      src: bootstrap,
      title: "BootStrap",
      style: "shadow-purple-700",
    },
    {
      id: 10,
      src: fireBase,
      title: "Firebase",
      style: "shadow-yellow-800",
    },
    {
      id: 11,
      src: mySql,
      title: "MySql",
      style: "shadow-gray-700",
    },
    {
      id: 12,
      src:monogodb,
      title: "MonogoDb",
      style: "shadow-green-700",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black  w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold  border-b-4 inline border-gray-500 p-2">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-8 
        text-center py-8 px-12 sm:px-0"
        >
          {experience.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} className="w-20 mx-auto" alt="" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;



