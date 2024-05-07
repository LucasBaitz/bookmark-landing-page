import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface BrowserCardProps {
  browserName: string;
  minimumVersion: number;
}

const BrowserCard: React.FC<BrowserCardProps> = ({
  browserName,
  minimumVersion,
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center shadow-xl rounded-2xl gap-3`}
    >
      <div className="p-5 flex flex-col justify-center items-center">
        <Image
          src={`/images/logo-${browserName.toLowerCase()}.svg`}
          alt={`${browserName} browser icon`}
          width={100}
          height={100}
          className="my-5"
        />
        <h2 className="font-bold text-lg">Add to {browserName}</h2>
        <p className="text-sm text-gray-400 mt-2">
          Minimum version {minimumVersion}
        </p>
      </div>

      <Image
        src={"/images/bg-dots.svg"}
        alt="nt"
        width={100}
        height={100}
        className="w-full"
      />
      <div className="w-full p-5">
        <Button variant="bookmark" className="w-full p-6 px-10 text-sm">
          Add & Install Extension
        </Button>
      </div>
    </div>
  );
};

export default BrowserCard;
