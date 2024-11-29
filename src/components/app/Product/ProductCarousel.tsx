"use client"; // Đảm bảo đây là một client component

import React, { useState, useEffect } from "react";
import Image from "next/image";

const ImageSlider = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setMainImage(images[nextIndex]);
        return nextIndex;
      });
    }, 3000); // Chuyển đổi mỗi 2 giây

    // Dọn dẹp interval khi component unmount
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="container mx-auto p-4">
      <div className="relative">
        <Image
          src={mainImage}
          width={400}
          height={400}
          alt="Main Product"
          className="main-image w-full h-auto transition-opacity duration-500"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 w-full max-w-[300px] sm:max-w-xs md:max-w-md mt-4">
        {images?.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={100}
            height={100}
            alt={`product-${index}`}
            className="object-cover w-full cursor-pointer border-gray-400 border transition-colors duration-300 hover:border-green-500"
            onClick={() => setMainImage(image)} // Thay đổi hình ảnh chính khi nhấp
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
