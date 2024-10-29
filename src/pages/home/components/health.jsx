// src/components/HHCare.jsx
import React from "react";
import feminineImg from "../../../assets/images/feminine.webp";
import bathImg from "../../../assets/images/bath.avif";
import personalHygieneImg from "../../../assets/images/personall.webp";
import sexualWellnessImg from "../../../assets/images/sexualWellness.webp";


const HHCareItems = [
  {
    name: "Feminine Hygiene",
    imageSrc: feminineImg,
    bgColor: "bg-blue-100",
  },
  {
    name: "Bath Supplies",
    imageSrc: bathImg,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Personal Hygiene",
    imageSrc: personalHygieneImg,
    bgColor: "bg-green-100",
  },
  {
    name: "Sexual Wellness",
    imageSrc: sexualWellnessImg,
    bgColor: "bg-red-100",
  },
];

const HHCare = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold mb-8">Health & Hygiene</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
        {HHCareItems.map((item, index) => (
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

export default HHCare;

