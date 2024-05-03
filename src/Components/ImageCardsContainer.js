import React from "react";

const ImageCardsContainer = ({ servicesData }) => {
  const { title, imageData } = servicesData;

  return (
    <div>
      <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold">
        {title}
      </div>
      <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {imageData.map((imageUrl, index) => (
          <div key={index} className="w-full h-[250px] rounded-md bg-blue-500">
            <img
              src={imageUrl}
              alt={`image-${index}`}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCardsContainer;
