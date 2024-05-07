import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return <h2 className="text-3xl font-medium text-gray-800 text-center mb-5">{title}</h2>;
};

export default SectionTitle;
