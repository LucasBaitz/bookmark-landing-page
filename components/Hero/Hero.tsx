import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="m-auto my-auto flex flex-col-reverse md:flex-row justify-between items-center py-36 px-5">
      <div className="container-none md:container items-center justify-evenly">
        <h1 className="text-2xl md:text-5xl font-medium text-gray-800 mb-4 text-center md:text-start break-words">
          A Simple Bookmark <br /> Manager
        </h1>
        <p className="text-lg text-center md:text-start text-gray-400 mb-6">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <button className="py-4 px-3 font-medium bookmark-bg text-white rounded hover:bg-sky-600 focus:outline-none focus:bg-sky-600 transition duration-300">
            Get it on Chrome
          </button>
          <button className="py-4 px-3 font-medium bg-gray-secondary text-gray-700 shadow-md rounded hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-gray-600 transition duration-300">
            Get it on Firefox
          </button>
        </div>
      </div>
      <div className="container-none md:container">
        <Image
          src="/images/illustration-hero.svg"
          alt="Image"
          className="w-full h-auto rounded-lg"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Hero;
