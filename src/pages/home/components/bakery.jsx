// src/components/Bakery.jsx
import React from "react";
import breadImg from "../../../assets/images/bread.jpeg";
import muffinImg from "../../../assets/images/muffin.png";
import biscuitImg from "../../../assets/images/biscuit.webp";
import ruskImg from "../../../assets/images/rusk.png";



const BakeryItems = [
  {
    name: "Bread",
    imageSrc: breadImg,
    bgColor: "bg-purple-100",
  },
  {
    name: "Muffins",
    imageSrc: muffinImg,
    bgColor: "bg-pink-100",
  },
  {
    name: "Biscuits",
    imageSrc: biscuitImg,
    bgColor: "bg-orange-100",
  },
  {
    name: "Rusk",
    imageSrc: ruskImg,
    bgColor: "bg-teal-100",
  },
];

const Bakery = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold mb-8">Bakery Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
        {BakeryItems.map((item, index) => (
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

export default Bakery;

