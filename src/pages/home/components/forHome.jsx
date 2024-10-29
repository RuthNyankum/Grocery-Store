// src/components/HomeCare.jsx
import React from "react";
import FloorCleanerImg from "../../../assets/images/floors.jpeg";
import kitchcleanImg from "../../../assets/images/kitchclean.png";
import dtImg from "../../../assets/images/dtergent.jpg";
import freshsImg from "../../../assets/images/freshners.webp";

const HomeCareItems = [
  {
    name: "Floor Cleaners",
    imageSrc: FloorCleanerImg, 
    bgColor: "bg-orange-100",
  },
  {
    name: "Kitchen Cleaners",
    imageSrc: kitchcleanImg,
    bgColor: "bg-teal-100",
  },
  {
    name: "Detergent",
    imageSrc: dtImg,
    bgColor: "bg-purple-100",
  },
  {
    name: "Skin Care",
    imageSrc: freshsImg,
    bgColor: "bg-pink-100",
  },
];

const HomeCare = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold mb-8">For Your Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
        {HomeCareItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-80 h-80 rounded-full ${item.bgColor} flex justify-center items-center shadow-md`}
              >
              <img
                src={item.imageSrc}
                alt={item.name}
                className="object-contain w-56 h-56"
              />
            </div>
            <p className="mt-4 text-lg font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCare;

