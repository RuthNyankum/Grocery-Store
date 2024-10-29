import React from "react";
import makeupImg from "../../../assets/images/makeup.webp"; 
import perfumeImg from "../../../assets/images/perfume.jpeg"; 
import skincareImg from "../../../assets/images/skincare.avif"; 
import haircareImg from "../../../assets/images/haircare.webp"; 

const beautyItems = [
  {
    name: "Makeup",
    imageSrc: makeupImg,
    bgColor: "bg-blue-100",
  },
  {
    name: "Perfumes",
    imageSrc: perfumeImg,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Skin Care",
    imageSrc: skincareImg,
    bgColor: "bg-teal-100",
  },
  {
    name: "Hair Care",
    imageSrc: haircareImg,
    bgColor: "bg-red-100",
  },
];

const Beauty = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold mb-8">Beauty Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
        {beautyItems.map((item, index) => (
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

export default Beauty;
