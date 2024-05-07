import React from "react";
import Image from "next/image";

interface FeatureInfoProps {
  image: string;
  title: string;
  description: string;
}

const FeatureInfo: React.FC<FeatureInfoProps> = ({
  image,
  description,
  title,
}) => {
  return (
    <div className="constainer-none md:container flex flex-col md:flex-row justify-between items-center py-20 px-5">
      <div className="constainer-none md:container">
        <Image
          src={`/images/${image}`}
          alt="Image"
          className="w-full"
          width={100}
          height={100}
        />
      </div>
      <div className="constainer-none mt-10 md:mt-0 md:container gap-x-5 p-5">
        <h2 className="text-2xl md:text-4xl text-center md:text-start font-medium text-gray-800 mb-4 w-full">{title}</h2>
        <p className="text-lg text-gray-400 mb-6 text-center md:text-start">{description}</p>
        <div className="space-x-4 flex justify-center md:justify-start">
          <button className="px-6 py-3 bookmark-bg text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureInfo;
