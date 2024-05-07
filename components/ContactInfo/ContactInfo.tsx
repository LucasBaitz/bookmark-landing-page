import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="">
      <p>
        My name is{" "}
        <span className="font-semibold leading-none tracking-tight">Lucas</span>{" "}
        and I&apos;m a developer. 😊
      </p>
      <p className="text-lg text-gray-700 my-6">
        I&apos;m thrilled you want to contact me! Feel free to reach out through
        any of the following ways and let&apos;s chat:
      </p>
      <ul className="flex justify-center flex-ro space-x-6">
        <li className="flex items-center justify-center">
          <Link
            href="https://www.linkedin.com/in/lucasbaitz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-col text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <Linkedin className="text-center" />
            <span>Linkedin</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            href="https://github.com/LucasBaitz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center flex-col text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <Github />
            <span>Github</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link
            href="mailto:lucasbaaitz@gmail.com"
            className="flex items-center flex-col text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <Mail />
            <span>Email</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
