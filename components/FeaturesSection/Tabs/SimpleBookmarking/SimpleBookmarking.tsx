import Image from "next/image";
import React from "react";

const SimpleBookmarking: React.FC = () => {
  return (
    <div className="container flex justify-between items-center py-20 px-4">
      <div className="w-1/2 p-10">
        <Image
          src="/images/illustration-features-tab-1.svg"
          alt="Image"
          className="w-full h-auto rounded-lg"
          width={100}
          height={100}
        />
      </div>
      <div className="w-1/2 container p-16">
        <h2 className="text-4xl font-medium text-gray-800 mb-4">
          Bookmark in one click
        </h2>
        <p className="text-lg text-gray-400 mb-6">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bookmark-bg text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleBookmarking;
