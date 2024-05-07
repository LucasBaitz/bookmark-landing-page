import Image from "next/image";
import React from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import SocialMidias from "../SocialMidias/SocialMidias";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full py-8 px-5 fixed bg-white shadow-sm z-40">
      <Logo />
      <div className="hidden md:flex items-center">
        <Navbar />
        <Link
          href="/"
          className="bg-red-pastel text-white rounded-md p-2 px-10"
        >
          LOGIN
        </Link>
      </div>
      <div className="flex md:hidden items-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="p-2">
              <AlignJustify />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-full h-screen max-w-[100vh] max-h-[100vh] nav-bg opacity-80">
            <DialogHeader>
              <DialogTitle>
                <Logo textColor="white" />
                <MobileNavbar />
              </DialogTitle>
            </DialogHeader>

            <DialogFooter>
              <SocialMidias />
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
