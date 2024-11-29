import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import bestProduct from "@/data/Product";
const ProductDetail = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-5 bg-[#eee] min-h-[100vh]">
      <div className="w-full text-sm text-gray-600">
        <p className="text-xl">
          <span>
            <Link href={"/"}>Trang chu</Link>
          </span>{" "}
          &gt;{" "}
          <span>
            <Link href="/product">Sản Phẩm</Link>
          </span>{" "}
          &gt; <span>Nước ép</span>
        </p>
      </div>
      <h1 className="w-full text-center text-2xl font-bold text-green-700 mt-5 uppercase">
        sản phẩm nước ép
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-items-center items-center">
        {bestProduct
          .filter((item) => item.id >= 7 && item.id <= 12)
          .map((item, index) => (
            <div
              key={index}
              className="card h-full flex flex-col justify-center items-center"
            >
              <div className="p-5 text-left text-base">
                <div className="space-y-1 mb-2">
                  <div>
                    <span className="font-medium">Tình trạng:</span>
                    {item.status}
                  </div>
                  <div>
                    <span className="font-medium">Xuất xứ:</span> {item.origin}
                  </div>
                </div>
                <p className="text-sm">
                  <span className="font-medium">Mô tả:</span> {item.desc}
                </p>
                <Button className="mt-5">
                  <Link href={`/product/${item.id}`}>Read More</Link>
                </Button>
              </div>
              <div className="cover">
                <div className="coverFront">
                  <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-r-lg font-bold transform -rotate-12">
                        NEW
                      </div>
                      <div className="p-6">
                        <Image
                          src={item.image}
                          alt="ST25 Premium Rice"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        {item.name}
                      </h2>
                      <div className="mt-4 space-y-2">
                        <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          Premium Quality
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="coverBack"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductDetail;
