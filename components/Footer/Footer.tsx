import React from "react";
import Logo from "../Header/Logo/Logo";
import Navbar from "../Header/Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="footer-bg w-full p-10 flex flex-col md:flex-row align-middle justify-center md:justify-between">
      <div className="flex flex-col md:flex-row gap-10 w-full items-center">
        <Logo textColor="#ffffff" />
        <Navbar variant="footer" />
      </div>
      <div className="flex gap-10 md:items-end justify-center mt-10 md:mt-0 md:justify-end w-full">
        <Link href="https://facebook.com">
          <Image
            src="/images/icon-facebook.svg"
            alt="Facebook logo"
            className="rounded-lg w-6 h-6"
            width={100}
            height={100}
          />
        </Link>
        <Link href="https://twitter.com">
          <Image
            src="/images/icon-twitter.svg"
            alt="Facebook logo"
            className="rounded-lg w-6 h-6"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
