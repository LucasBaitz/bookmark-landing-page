import Link from "next/link";
import React from "react";

interface NavbarProps {
  variant?: "footer" | "header"; // Define the possible values for the variant
}

interface VariantStyles {
  footer: string;
  header: string;
}

const Navbar: React.FC<NavbarProps> = ({ variant = "header" }) => {
  const variants: VariantStyles = { 
    footer: "text-gray-200 text-sm",
    header: "text-gray-600 text-sm",
  };

  return (
    <nav>
      <ul className="container flex flex-col justify-center md:flex-row gap-10">
        <li className="w-full flex justify-center">
          <Link href="#features" className={variants[variant]}>
            FEATURES
          </Link>
        </li>
        <li className="w-full flex justify-center">
          <Link href="#pricing" className={variants[variant]}>
            PRICING
          </Link>
        </li>
        <li className="w-full flex justify-center">
          <Link href="#download" className={variants[variant]}>
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
