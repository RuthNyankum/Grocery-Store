// src/components/Food.jsx

import React from "react";
import snackImg from "../../../assets/images/snacks.webp";
import cerealImg from "../../../assets/images/cereals.webp";
import seasoningImg from "../../../assets/images/seasoning.png";
import juiceImg from "../../../assets/images/juice.webp";

const foodItems = [
  {
    name: "Snacks",
    imageSrc: snackImg, 
    bgColor: "bg-indigo-100",
  },
  {
    name: "Breakfast Cereals",
    imageSrc: cerealImg,
    bgColor: "bg-amber-100",
  },
  {
    name: "Seasoning",
    imageSrc: seasoningImg,
    bgColor: "bg-teal-100",
  },
  {
    name: "Juices",
    imageSrc: juiceImg,
    bgColor: "bg-pink-100",
  },
];

const Food = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold mb-8">Food Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
        {foodItems.map((item, index) => (
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

export default Food;

