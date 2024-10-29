import React from "react";
import cookiesImg from "../../../assets/images/cookies.webp";
import chocolatesImg from "../../../assets/images/chocolate.jpg";
import namkeensImg from "../../../assets/images/namkeens.webp";
import teaImg from "../../../assets/images/tea.webp";
import coffeeImg from "../../../assets/images/coffee.jpg";
import healthDrinksImg from "../../../assets/images/health-d.jpeg";

const beverageItems = [
  {
    name: "Cookies",
    imageSrc: cookiesImg,
    bgColor: "bg-pink-100",
  },
  {
    name: "Chocolates",
    imageSrc: chocolatesImg,
    bgColor: "bg-blue-100",
  },
  {
    name: "Namkeens",
    imageSrc: namkeensImg,
    bgColor: "bg-purple-100",
  },
  {
    name: "Tea",
    imageSrc: teaImg,
    bgColor: "bg-yellow-100",
  },
  {
    name: "Coffee",
    imageSrc: coffeeImg,
    bgColor: "bg-red-100",
  },
  {
    name: "Health Drinks",
    imageSrc: healthDrinksImg,
    bgColor: "bg-green-100",
  },
];

const Beverages = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-semibold mb-8">Food & Beverages Store</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 justify-items-center">
        {beverageItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-80 h-80 rounded-full ${item.bgColor} flex justify-center items-center shadow-md`}
              >
              <img
                src={item.imageSrc}
                alt={`${item.name} product`}
                className="object-contain w-56 h-56"
              />
            </div>
            <p className="mt-4 text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beverages;