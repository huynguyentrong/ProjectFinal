import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/images/Logo.png";
const Footer = () => {
  return (
    <footer className="w-full absolute bg-[#fff8f0]  pt-24 pb-7 border rounded-tl-[125px] text-base mt-20 ">
      <div className="w-[85%] mx-auto flex flex-wrap items-start justify-between">
        <div className="basis-1/4 p-2 mb-4">
          <h3 className="w-fit mb-4 relative">
            Giới thiệu{" "}
            <div className="w-full h-1 bg-white rounded-lg absolute top-6 left-0 overflow-hidden">
              <span
                className="w-4 h-full bg-red-500 rounded-lg absolute top-0 left-3 animate-[moving_2s_linear_infinite]"
                style={{
                  animation: "moving 2s linear infinite",
                }}
              ></span>
            </div>{" "}
          </h3>
          <p className="py-2 ">312 Trần hưng đạo </p>
          <p className="py-2 ">Điện thoại: (000) 000-0000</p>
          <p className="py-2 ">Email: info@gmail.com</p>
        </div>
        <div className="basis-1/4 p-2 mb-4">
          <h3 className="w-fit mb-4 relative">
            Sản phẩm{" "}
            <div className="w-full h-1 bg-white rounded-lg absolute top-6 left-0 overflow-hidden">
              <span
                className="w-4 h-full bg-red-500 rounded-lg absolute top-0 left-3 animate-[moving_2s_linear_infinite]"
                style={{
                  animation: "moving 2s linear infinite",
                }}
              ></span>
            </div>{" "}
          </h3>
          <p className="py-2 uppercase">Nước ép nguyên chất</p>
          <p className="py-2 uppercase">Gạo sạch,Gạo thơm</p>
          <p className="py-2 uppercase">Thực phẩm Đa Dạng</p>
        </div>
        <div className="basis-1/4 p-2">
          <h3 className="w-fit mb-4 relative">
            Công ty{" "}
            <div className="w-full h-1 bg-white rounded-lg absolute top-6 left-0 overflow-hidden">
              <span
                className="w-4 h-full bg-red-500 rounded-lg absolute top-0 left-3 animate-[moving_2s_linear_infinite]"
                style={{
                  animation: "moving 2s linear infinite",
                }}
              ></span>
            </div>{" "}
          </h3>
          <ul>
            <li className="mb-3">
              <Link href={"/"} className="">
                Tuyển dụng
              </Link>
            </li>
            <li className="mb-3">
              <Link href={"/organize"} className="">
                Cơ cấu tổ chức
              </Link>
            </li>
            <li className="mb-3">
              <Link href={"/"} className="">
                Lịch sử hình thành
              </Link>
            </li>
            <li className="mb-3">
              <Link href={"/contact"} className="">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div className="basic-1/4 p-2">
          <h3 className="w-fit mb-10 relative">Office</h3>
          <form className="flex items-center pb-4 justify-between border-b-2 solid mb-12">
            <Mail className="text-base mr-3" />
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full bg-transparent text-[#ccc] border-0 outline-none"
            />
            <Button
              type="submit"
              className="bg-transparent border-0 outline-none curor-pointer "
            >
              <Send className="text-base text-[#ccc]" />
            </Button>
          </form>
          <div className="flex items-center gap-4">
            <Facebook className="text-base" />
            <Twitter className="text-base" />
            <Linkedin className="text-base" />
            <Youtube className="text-base" />
            <Instagram className="text-base" />
          </div>
        </div>
        <div className="basis-1/4 p-2">
          <Image width={80} height={80} src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
