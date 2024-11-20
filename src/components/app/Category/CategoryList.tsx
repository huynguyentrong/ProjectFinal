import React from "react";
import Farmer from "@/assets/images/icons8-person-farmer-100.png";
import Image from "next/image";
import Milk from "@/assets/images/icons8-agriculture-100.png";
import tomato from "@/assets/images/tomota.png";
import vegetable from "@/assets/images/icons8-vegetable-100.png";
import Bakery from "@/assets/images/icons8-bakery-100.png";
import Personal from "@/assets/images/icons8-personal-care-100.png";
import chicken from "@/assets/images/icons8-chicken-100.png";
const CategoryList = () => {
  return (
    <div className="mt-5">
      <h2 className="text-green-600 font-bold text-2xl">Shop by Category</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 mt-4">
        {[
          { src: vegetable, label: "Vegetables" },
          { src: tomato, label: "Fruits" },
          { src: Milk, label: "Milk and Juice" },
          { src: Bakery, label: "Bakery" },
          { src: Personal, label: "Personal Care" },
          { src: Farmer, label: "Grains" },
          { src: chicken, label: "Chick & Egg" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-green-50 p-3 rounded-lg group cursor-pointer hover:bg-green-300"
          >
            <Image
              src={item.src}
              alt={item.label}
              width={50}
              height={50}
              className="group-hover:scale-125 transition-all ease-in-out"
            />
            <h2 className="text-green-800 mt-2 group-hover:text-green-600">
              {item.label}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
