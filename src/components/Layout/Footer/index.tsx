import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#001524] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <span className="text-2xl font-bold ml-2">tad garden</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CATEGORY</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Tươi sống
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Thức uống
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Trái cây
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Đồ khô
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Bánh kẹo
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">FOR CONSUMER</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shop Checkout
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Product Returns
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-home mr-2"></i>
                Huy nguyễn
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                0376475278
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span className="text-sm">huynguyen@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
