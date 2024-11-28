import React from "react";
import Image from "next/image";
import chill from "@/assets/images/Oranges.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const ProductDetail = () => {
  return (
    <div className="grid grid-cols-1 gap-5 p-5 bg-[#eee] min-h-[100vh]">
      <div className="w-full text-sm text-gray-600">
        <p className="text-xl">
          <span>Trang Chủ</span> &gt; <span>Sản Phẩm</span> &gt;{" "}
          <span>Gạo Thơm Vua Gạo</span>
        </p>
      </div>
      <h1 className="w-full text-center text-2xl font-bold text-green-700 mt-5">
        GẠO THƠM VUA GẠO
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full justify-items-center items-center">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="card h-full flex flex-col justify-center items-center"
            >
              <div className="p-5 text-center text-base">
                <h1>Apps</h1>
                <p>
                  Gạo ST25 Premium, một bước đột phá mới, không chỉ về chất
                  lượng mà còn ở sự sáng tạo trong cách tiếp cận thị trường.
                  Điểm nhấn đặc biệt của dòng sản phẩm này chính là sự kết hợp
                  độc đáo với hai nhân vật nổi tiếng và được đông đảo công chúng
                  yêu mến – Quang Linh Vlog và Hằng Du Mục
                </p>
                <Button>
                  <Link href="/product/1">Read More</Link>
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
                          src={chill}
                          alt="ST25 Premium Rice"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                        GẠO ST25 PREMIUM PHIÊN BẢN CER
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
