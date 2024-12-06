import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import brand from "@/assets/images/Tractors-Farming-scaled.jpg";
const contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-[#fff8f0]">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get In Touch With Us
          </h2>
          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-start space-x-4">
              <span className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657A8 8 0 1116.657 15M19.071 19.071A9.953 9.953 0 0021 12c0-5.523-4.477-10-10-10S1 6.477 1 12s4.477 10 10 10a9.953 9.953 0 007.071-2.929z"
                  />
                </svg>
              </span>
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  Headquarter
                </h4>
                <p className="text-gray-600">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-start space-x-4">
              <span className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h11M9 21V3m4 0l7 7-7 7"
                  />
                </svg>
              </span>
              <div>
                <h4 className="text-lg font-medium text-gray-800">
                  Phone Number
                </h4>
                <p className="text-gray-600">(0000) 000-0000</p>
                <p className="text-gray-600">(0000) 222-2222</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4">
              <span className="text-gray-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8c.684-.024 1.341.058 2 .222V5a2 2 0 00-2-2h-6a2 2 0 00-2 2v3.222c.659-.164 1.316-.246 2-.222 4 0 6 1.33 6 4v.778c.684-.024 1.341.058 2 .222V12c0 2.67-2 4-6 4s-6-1.33-6-4v-.778c.659.164 1.316.246 2 .222V12c0 2.67-2 4-6 4z"
                  />
                </svg>
              </span>
              <div>
                <h4 className="text-lg font-medium text-gray-800">Email</h4>
                <p className="text-gray-600">gmail1234@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.045530479298!2d106.61721827586905!3d10.807824858612152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752be5ae3a5367%3A0xa5e6d2008e971100!2zMzQxYSDEkC4gTMOqIFRy4buNbmcgVOG6pW4sIFPGoW4gS-G7sywgVMOibiBQaMO6LCBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1733393511981!5m2!1svi!2s"
              width="100%"
              height="300"
              loading="lazy"
              className="rounded-md shadow-md"
            ></iframe>
            <div className="absolute top-0 left-0 w-12 h-12 bg-gray-50 border rounded-md"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">
              We would love to hear from you.
            </h2>
            <p className="text-gray-600">
              Your email address will not be published.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">First name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Last name</label>
                  <Input
                    type="text"
                    placeholder="Last name"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Email</label>
                <Input type="email" className="w-full p-2 border rounded-md" />
              </div>

              <div>
                <label className="block text-sm mb-1">Phone number</label>
                <div className="flex">
                  <Input
                    type="tel"
                    placeholder="+10 (000) 000-0000"
                    className="w-full p-2 border-y border-r rounded-r-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  placeholder="Type your message"
                  className="w-full p-2 border rounded-md h-32"
                ></textarea>
              </div>

              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 flex items-center">
                Send message
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </form>
          </div>

          <div className="w-full">
            <Image
              src={brand}
              alt="Modern office"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <i className="fas fa-map-marker-alt text-xl"></i>
            <h3 className="text-xl font-bold">Ho Chi minh</h3>
            <p className="text-gray-600">341A lê trọng tấn sơn kỳ tân phú</p>
            <p className="text-gray-600">email123@gmail.com</p>
            <p className="text-gray-600">+00 000 000 0000</p>
            <a
              href="#"
              className="inline-flex items-center text-black hover:underline"
            >
              Get Directions
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>

          <div className="text-center space-y-4">
            <i className="fas fa-map-marker-alt text-xl"></i>
            <h3 className="text-xl font-bold">Hà Nội</h3>
            <p className="text-gray-600">Ngõ 5 hồ hoàn kiếm</p>
            <p className="text-gray-600">email123@gmail.com</p>
            <p className="text-gray-600">+00 000 000 0000</p>
            <a
              href="#"
              className="inline-flex items-center text-black hover:underline"
            >
              Get Directions
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>

          <div className="text-center space-y-4">
            <i className="fas fa-map-marker-alt text-xl"></i>
            <h3 className="text-xl font-bold">Ninh bình</h3>
            <p className="text-gray-600">39 Trần Hưng Đạo</p>
            <p className="text-gray-600">email123@gmail.com</p>
            <p className="text-gray-600">+00 000 000 0000</p>
            <a
              href="#"
              className="inline-flex items-center text-black hover:underline"
            >
              Get Directions
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
