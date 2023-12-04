import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from bg-gray-800   to-black  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl  font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          A passionate Front-end Developer dedicated to translating creative
          ideas into interactive and user-friendly web experiences. With a keen
          eye for design and a knack for cutting-edge technologies, I thrive on
          crafting visually appealing and responsive websites. My commitment to
          clean code, performance optimization, and continuous learning allows
          me to stay at the forefront of web development trends. Let's
          collaborate and turn your vision into a digital reality!
        </p>

        <br />

        <p className="text-xl">
          "As a Frontend Developer, I'm dedicated to bringing digital visions to
          life through clean, responsive, and visually engaging web interfaces.
          With a passion for both design aesthetics and efficient functionality,
          I strive to create seamless user experiences that leave a lasting
          impact."
        </p>
      </div>
    </div>
  );
};

export default About;
