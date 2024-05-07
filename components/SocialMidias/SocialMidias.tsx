import Link from "next/link";
import Image from "next/image";
import React from "react";

const SocialMidias: React.FC = () => {
  return (
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
  );
};

export default SocialMidias;
