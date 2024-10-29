// src/components/Staples.jsx

import React from "react";
import riceImg from "../../../assets/images/rice.jpg";
import dalImg from "../../../assets/images/dal.webp";
import attaImg from "../../../assets/images/atta.jpeg";
import dryFruitsImg from "../../../assets/images/dryfruits.webp";

const stapleItems = [
  {
    name: "Rice",
    imageSrc: riceImg,
    bgColor: "bg-rose-100",
  },
  {
    name: "Dal",
    imageSrc: dalImg,
    bgColor: "bg-teal-100",
  },
  {
    name: "Atta",
    imageSrc: attaImg,
    bgColor: "bg-blue-100",
  },
  {
    name: "Dry Fruits",
    imageSrc: dryFruitsImg,
    bgColor: "bg-yellow-100",
  },
];

const Staples = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold mb-8">Staples</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center">
        {stapleItems.map((item, index) => (
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

export default Staples;
