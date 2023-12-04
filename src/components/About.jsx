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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
          quis deleniti voluptates quo commodi ab repudiandae dignissimos
          voluptatum facilis reiciendis quidem possimus quam sed, asperiores
          modi magnam blanditiis qui! Illo, veritatis atque, fuga libero
          asperiores, ratione officiis esse corrupti ipsam vel tempore quidem
          cupiditate gvoluptate optio sapiente quia unde ut!
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          repellendus ut eligendi veniam, itaque ea reprehenderit necessitatibus
          velit consectetur distinctio doloremque ex obcaecati nam iure eos
          dolor sequi maxime nulla minus? Nobis consectetur doloribus ea laborum
          ipsum impedit eius inventore et, maiores excepturi eligendi fugit
          voluptate ab placeat, nihil saepe?{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
