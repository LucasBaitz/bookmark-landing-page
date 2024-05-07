import React, { ReactNode } from "react";

interface SectionDescriptionProps {
  children: ReactNode;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  children,
}) => {
  return (
    <p className="text-md text-gray-400 text-center break-words px-5">{children}</p>
  );
};

export default SectionDescription;
