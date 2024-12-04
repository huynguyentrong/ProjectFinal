import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import organized from "@/assets/images/Bai2_Toàn cảnh buổi tọa đàm.jpg";
import lanhdao from "@/assets/images/cong-ty-cp-tap-doan-loc-troi-nhan-trao-them-3-ky-luc-viet-nam-moi-nang-tong-so-len-4-ky-luc.jpg";
import thanhvien from "@/assets/images/map.jpg";
const organize = () => {
  return (
    <div className="container min-h-screen py-14 mx-auto">
      <div className="py-4 flex items-center mt-2">
        <Link href={"/"} className="text-green-400 text-base">
          <Home />
        </Link>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">
          <Link href={"/organize"}>Trang Chủ</Link>
        </p>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Cơ cấu tổ chức</p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-2xl md:text-3xl font-bold text-blue-600 mb-8">
          HỆ THỐNG TỔ CHỨC
        </h1>

        <div className="flex justify-center items-center mb-12">
          <div className="h-1 w-24 bg-yellow-400 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/organize/corporate">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={organized}
                alt="Đảng bộ Tập đoàn"
                className="w-full h-full object-cover box"
              />
              <div className="absolute bottom-0 left-0 right-0">
                <div className="text-overlay py-2 px-4">
                  <h2 className="text-white text-xl font-semibold text-center">
                    Đảng bộ Tập đoàn
                  </h2>
                </div>
              </div>
            </div>
          </Link>

          <Link href={"/organize/member"}>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={lanhdao}
                alt="Lãnh đạo Tập đoàn"
                className="w-full h-full object-cover box"
              />
              <div className="absolute bottom-0 left-0 right-0">
                <div className="text-overlay py-2 px-4">
                  <h2 className="text-white text-xl font-semibold text-center">
                    Lãnh đạo Tập đoàn
                  </h2>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/organize/client">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={thanhvien}
                alt="Các đơn vị thành viên"
                className="w-full h-full object-cover box"
              />
              <div className="absolute bottom-0 left-0 right-0">
                <div className="text-overlay py-2 px-4">
                  <h2 className="text-white text-xl font-semibold text-center">
                    Các đơn vị thành viên
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default organize;
