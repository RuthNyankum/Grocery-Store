// src/components/Babycare.jsx
import React from "react";
import diaperImg from "../../../assets/images/diaper.webp";
import bbyfoodImg from "../../../assets/images/cerelac.avif";
import bbygroomImg from "../../../assets/images/bbygroom.webp";
import bbycareImg from "../../../assets/images/bbyskin.webp";

const BabycareItems = [
  {
    name: "Diaper",
    imageSrc: diaperImg, 
    bgColor: "bg-blue-100",
  },
  {
    name: "Baby Food",
    imageSrc: bbyfoodImg,
    bgColor: "bg-green-100",
  },
  {
    name: "Baby Grooming",
    imageSrc: bbygroomImg,
    bgColor: "bg-red-100",
  },
  {
    name: "Skin Care",
    imageSrc: bbycareImg,
    bgColor: "bg-yellow-100",
  },
];

const Babycare = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold mb-8">Baby Care</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
        {BabycareItems.map((item, index) => (
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

export default Babycare;

