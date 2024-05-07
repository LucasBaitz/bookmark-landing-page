import React from "react";
import { Button } from "../ui/button";

const Newsletter: React.FC = () => {
  return (
    <div className="bookmark-bg w-full flex flex-col items-center justify-center p-10">
      <h4 className="text-white mt-10 mb-5 uppercase tracking-widest text-sm">
        35,000+ already joined
      </h4>
      <p className="font-medium text-white text-3xl my-5 text-center">
        {" "}
        Stay up-to-date with what <br /> we’re doing
      </p>
      <form className="flex flex-col md:flex-row gap-5 align-middle mb-10">
        <input
          type="email"
          className="rounded-md w-[300px] p-3"
          placeholder="Enter you email address"
        />
        <Button className="bg-red-pastel text-white h-full py-4 px-6">
          Contact Us
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;
