import Link from "next/link";
import React from "react";

const MobileNavbar: React.FC = () => {
  return (
    <nav className="w-full mt-10">
      <ul className="flex flex-col justify-center md:flex-row gap-y-5">
        <hr />
        <li className="w-full flex justify-center">
          <Link href="/" className="text-white text-xl font-normal ">
            FEATURES
          </Link>
        </li>
        <hr />
        <li className="w-full flex justify-center">
          <Link href="/" className="text-white text-xl font-normal ">
            PRICING
          </Link>
        </li>
        <hr />
        <li className="w-full flex justify-center">
          <Link href="/" className="text-white text-xl font-normal ">
            CONTACT
          </Link>
        </li>
        <hr />
        <li className="w-full flex justify-center">
          <Link
            href="/"
            className="bg-inherit font-medium text-white outline outline-white outline-3 rounded-sm p-2 px-10 text-xl w-full text-center"
          >
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
