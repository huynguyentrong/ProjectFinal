import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Logo.png";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full">
          <div className="w-[33%]">
            <Image
              src={Logo}
              alt="Logo"
              width={150}
              height={100}
              className="rounded-full"
            />
          </div>
          <ul className="w-[33%] flex gap-10 items-center list-none">
            <li>
              <a href="#" className="text-inherit inline-block menu-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-inherit inline-block menu-link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-inherit inline-block menu-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-inherit inline-block menu-link">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="text-inherit inline-block menu-link">
                Help
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-end w-[33%] px-4 py-2">
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
              </div>
              <div>
                <User />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
