import {
  ChevronRight,
  Facebook,
  Home,
  Instagram,
  Send,
  Star,
  Twitter,
} from "lucide-react";
import React from "react";
import Image from "next/image";
import second from "@/assets/images/Oranges.jpg";
import { Button } from "@/components/ui/button";
import juice from "@/assets/images/BannerJuice.png";
import orangeBanner from "@/assets/images/Oranges.jpg";
import chili from "@/assets/images/chillies.jpg";
import ricest25 from "@/assets/images/gao-ST25-hut-chan-khong-5kg.jpg";
import Tomato from "@/assets/images/Tomato.png";
import Lemon from "@/assets/images/Lemon.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

const bestProduct = [
  {
    id: 1,
    status: "Còn hàng",
    origin: "Vietnam",
    image: orangeBanner,
    name: "GẠO LỨT TAM SẮC 1KG",
  },
  {
    id: 2,
    status: "Còn ít hàng",
    origin: "Thailand",
    image: chili,
    name: "GẠO LỨT TAM SẮC 1KG",
  },
  {
    id: 3,
    status: "Không khả dụng",
    origin: "Chinese",
    image: ricest25,
    name: "GẠO LỨT TAM SẮC 1KG",
  },
  {
    id: 4,
    status: "Đơn hàng online",
    origin: "Singapore",
    image: juice,
    name: "GẠO LỨT TAM SẮC 1KG",
  },
  {
    id: 5,
    status: "Chỉ bán tại cửa hàng",
    origin: "Korea",
    image: Tomato,
    name: "GẠO LỨT TAM SẮC 1KG",
  },
  {
    id: 6,
    status: "Còn hàng",
    origin: "USA",
    image: Lemon,
    name: "GẠO LỨT TAM SẮC 1KG",
  },
];
const ProductDetail = () => {
  return (
    <>
      <div className="container mx-auto py-4 flex items-center mt-40">
        <a href="" className="text-pink-500 text-base">
          <Link href={"/"}>
            <Home />
          </Link>
        </a>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-pink-500 font-bold">
          <Link href={"/product"}>Shop</Link>
        </p>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-black font-bold">Product Name</p>
      </div>
      <div className="w-full text-center pb-16">
        <h1 className="text-3xl font-bold uppercase">thông tin sản phẩm</h1>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-6 pb-16">
        <div>
          <Image src={second} alt="product" className="object-cover" />
          <div className="grid grid-cols-5 gap-4 mt-4">
            <Image
              src={second}
              alt="product"
              className="object-cover cursor-pointer border-gray-400 border"
            />
            <Image
              src={second}
              alt="product"
              className="object-cover cursor-pointer border-gray-400 border"
            />
            <Image
              src={second}
              alt="product"
              className="object-cover cursor-pointer border-gray-400 border"
            />
            <Image
              src={second}
              alt="product"
              className="object-cover cursor-pointer border-gray-400 border"
            />
            <Image
              src={second}
              alt="product"
              className="object-cover cursor-pointer border-gray-400 border"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">Fresh Orange</h2>
          <div className="flex items-center mb-4">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <Star />
              </span>
              <span>
                <Star />
              </span>
              <span>
                <Star />
              </span>
              <span>
                <Star />
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">(140)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Avilability:</span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand:</span>
              <span className="text-gray-600">USA</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category:</span>
              <span className="text-gray-600">Juice</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU:</span>
              <span className="text-gray-600">BE455VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-red-600 font-semibold">$45.00</p>
            <p className="text-base text-gray-400 line-through">$55.00</p>
          </div>
          <ul className="mt-4 text-gray-600">
            <li>Bảo quản: Để nơi khô ráo và thoáng mát</li>
            <li>HSD: 1 năm kể từ ngày sản xuất.</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center cursor-pointer select-none">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>
          <div className="flex gap-3 pb-5 mt-6">
            <Button className="bg-red-500 border text-white py-2  rounded-md hover:bg-red-500">
              Liên hệ ngay
              <Send />
            </Button>
          </div>
          <div className="flex space-x-3">
            <a
              href=""
              className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <Facebook />
            </a>
            <a
              href=""
              className="text-gray-400 hover:text-gray-500 h-8 w-10 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <Twitter />
            </a>
            <a
              href=""
              className="text-gray-400 hover:text-gray-500 h-8 w-10 rounded-full border border-gray-300 flex items-center justify-center"
            >
              <Instagram />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-16">
        <h3 className="border-b border-gray-200 text-gray-800 pb-3 font-medium">
          Product Details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600 space-y-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quae, id blanditiis facilis vel sed ab. Fuga praesentium nisi
              asperiores quia labore atque molestiae obcaecati quis sunt
              pariatur! Sequi, excepturi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quae, id blanditiis facilis vel sed ab. Fuga praesentium nisi
              asperiores quia labore atque molestiae obcaecati quis sunt
              pariatur! Sequi, excepturi!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              quae, id blanditiis facilis vel sed ab. Fuga praesentium nisi
              asperiores quia labore atque molestiae obcaecati quis sunt
              pariatur! Sequi, excepturi!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-green-700 mb-8">
          SẢN PHẨM TƯƠNG TỰ
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {bestProduct.map((product) => (
              <CarouselItem
                key={product.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative flex flex-col items-center">
                  <div className="absolute -top-2 -left-2 z-10">
                    <div className="bg-red-600 text-white px-4 py-1 rounded-sm">
                      NEW
                    </div>
                  </div>
                  <div className="w-full aspect-square relative mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-center font-medium text-sm md:text-base">
                    {product.name}
                  </h3>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 text-green-800 hover:text-green-700 hover:bg-green-50" />
          <CarouselNext className="hidden md:flex -right-12 text-green-800 hover:text-green-700 hover:bg-green-50" />
        </Carousel>
      </div>
    </>
  );
};

export default ProductDetail;
