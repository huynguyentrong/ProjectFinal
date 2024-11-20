"use client";
import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/203478060.png";
import { Heart, Search, ShoppingCart } from "lucide-react";
import ThemToggle from "@/components/ThemToggle";
import Link from "next/link";

const Header = () => {
  return (
    <header className={"fixed w-full top-0 z-50 bg-white shadow"}>
      <div className="container mx-auto flex items-center justify-between gap-5 h-24">
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={100}
            className="object-cover rounded-xl"
          />
        </Link>
        <div className={"hidden lg:flex gap-12"}>
          <Link href={"/"}>Trang chủ</Link>
          <Link href={"/product"}>Sản phẩm</Link>
          <Link href={"/about"}>About</Link>
        </div>

        <div className={"flex items-center gap-5"}>
          <div className="flex items-center gap-3 border rounded-full p-2 px-5">
            <Search className="w-5 h-5 ml-2 text-gray-500" />
            <input type="text" placeholder="Tim" className="outline-none" />
          </div>

          <div className="flex items-center ml-4 space-x-4">
            <div className="relative">
              <Heart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-green-500 rounded-full">
                0
              </span>
            </div>

            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs text-white bg-green-500 rounded-full">
                0
              </span>
              {/* <div className="absolute top-[calc(100%+12px)] right-0 w-[400px] bg-white rounded-lg py-6 shadow-[0_1px_3.125rem_0_rgba(0,0,0,0.2)] flex flex-col items-center">
                <Image src={noImage} alt="noImage" className="object-cover" />
                <span className="mt-4">Chưa có sản phẩm</span>
              </div> */}
            </div>

            <div>
              <ThemToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
