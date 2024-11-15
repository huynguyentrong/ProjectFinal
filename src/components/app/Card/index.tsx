import React from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
const Card = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-8">Giảm Giá Nhiều Nhất</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4 relative">
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            50%
          </div>
          <Image
            src={Logo}
            alt="Snack rong biển"
            className="w-full h-48 object-contain mb-4"
          />
          <div className="text-gray-500 text-sm">Bánh kẹo</div>
          <div className="text-green-600">Snack rong biển</div>
          <div className="mt-2">
            <span className="font-bold">1.000 đ</span>
            <span className="line-through text-gray-400 text-sm ml-2">
              2.000 đ
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 relative">
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            50%
          </div>
          <Image
            src={Logo}
            alt="Snack rong biển"
            className="w-full h-48 object-contain mb-4"
          />
          <div className="text-gray-500 text-sm">Bánh kẹo</div>
          <div className="text-green-600">Snack rong biển</div>
          <div className="mt-2">
            <span className="font-bold">1.000 đ</span>
            <span className="line-through text-gray-400 text-sm ml-2">
              2.000 đ
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 relative">
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            50%
          </div>
          <Image
            src={Logo}
            alt="Snack rong biển"
            className="w-full h-48 object-contain mb-4"
          />
          <div className="text-gray-500 text-sm">Bánh kẹo</div>
          <div className="text-green-600">Snack rong biển</div>
          <div className="mt-2">
            <span className="font-bold">1.000 đ</span>
            <span className="line-through text-gray-400 text-sm ml-2">
              2.000 đ
            </span>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 relative">
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm">
            30%
          </div>
          <Image
            src={Logo}
            alt="Cà chua"
            className="w-full h-48 object-contain mb-4"
          />
          <div className="text-gray-500 text-sm">Rau củ</div>
          <div className="text-green-600">Cà chua</div>
          <div className="mt-2">
            <span className="font-bold">105.000 đ</span>
            <span className="line-through text-gray-400 text-sm ml-2">
              150.000 đ
            </span>
          </div>
          <div className="flex justify-end gap-2 mt-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <i className="far fa-eye text-gray-600"></i>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <i className="far fa-heart text-gray-600"></i>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <i className="fas fa-shopping-cart text-gray-600"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
