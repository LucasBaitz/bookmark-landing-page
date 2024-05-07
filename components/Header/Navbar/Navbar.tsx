import ContactInfo from "@/components/ContactInfo/ContactInfo";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, Linkedin, Mail } from "lucide-react";
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
          <Dialog>
            <DialogTrigger className={variants[variant]}>CONTACT</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Hey there! 👋</DialogTitle>
                <DialogDescription>
                  <ContactInfo />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
