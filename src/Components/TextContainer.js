import React from "react";
import Logo from "../Utils/Img/Primary_logo.png";
const TextContainer = ({ content }) => {
  return (
    <div className="bg-gray-900 p-16 border-t-4 border-b-4 border-gray-800">
      <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {content.title}
      </div>
      <p className="mt-4 opacity-75 sm:text-sm lg:text-xl">
        {content.description}
      </p>
    </div>
  );
};

export default TextContainer;
