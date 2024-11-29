"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/Logo.png";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <div className=" bg-[#fff8f0] p-3 md:p-8 overflow-x-hidden">
        {/* Navigation */}
        <nav className="flex justify-between items-center  relative">
          <div className="text-xl font-bold">
            <Link href="/" className="hover:text-gray-600">
              <Image
                src={Logo}
                alt="logo"
                width={100}
                height={100}
                className="object-cover rounded-xl"
              />
            </Link>
          </div>

          {/* Desktop Menu - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="hover:text-gray-600">
              Trang chủ
            </Link>
            <Link href="/product" className="hover:text-gray-600">
              Sản phẩm
            </Link>
            <Link href="#" className="hover:text-gray-600">
              Tuyển dụng
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                Về chúng tôi
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/organize" className="hover:text-gray-600">
                    Cơ cấu tổ chức
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/history" className="hover:text-gray-600">
                    Lịch sử hình thành
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/contact" className="hover:text-gray-600">
                    Thông tin liên hệ
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors">
              <Link href={"/contact"}>Liên hệ</Link>
            </button>
          </div>

          {/* Mobile/Tablet Menu Button - Visible only on mobile/tablet */}
          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile/Tablet Menu - Slides in from the right */}
          <div
            className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            } lg:hidden`}
          >
            <div className="flex flex-col p-4">
              <button className="self-end p-2 mb-4" onClick={toggleMobileMenu}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link
                href="/"
                className="py-2 px-4 hover:bg-gray-100 rounded"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/product"
                className="py-2 px-4 hover:bg-gray-100 rounded"
                onClick={toggleMobileMenu}
              >
                Product
              </Link>
              <Link
                href="#"
                className="py-2 px-4 hover:bg-gray-100 rounded"
                onClick={toggleMobileMenu}
              >
                Shop
              </Link>
              <Link
                href="#"
                className="py-2 px-4 hover:bg-gray-100 rounded"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
              <button
                className="mt-4 px-6 py-2 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
                onClick={toggleMobileMenu}
              >
                <Link href={"/contact"}>Liên hệ</Link>
              </button>
            </div>
          </div>

          {/* Overlay when mobile menu is open */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleMobileMenu}
            ></div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Header;
