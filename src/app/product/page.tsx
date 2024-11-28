import { ChevronRight, Home } from "lucide-react";
import React from "react";
import juice from "@/assets/images/BannerJuice.png";
import food from "@/assets/images/food.jpg";
import rice from "@/assets/images/rice.jpg";
import orangeBanner from "@/assets/images/Oranges.jpg";
import chili from "@/assets/images/chillies.jpg";
import ricest25 from "@/assets/images/gao-ST25-hut-chan-khong-5kg.jpg";
import Tomato from "@/assets/images/Tomato.png";
import Lemon from "@/assets/images/Lemon.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const bestProduct = [
  {
    id: 1,
    status: "Còn hàng",
    origin: "Vietnam",
    image: orangeBanner,
  },
  {
    id: 2,
    status: "Còn ít hàng",
    origin: "Thailand",
    image: chili,
  },
  {
    id: 3,
    status: "Không khả dụng",
    origin: "Chinese",
    image: ricest25,
  },
  {
    id: 4,
    status: "Đơn hàng online",
    origin: "Singapore",
    image: juice,
  },
  {
    id: 5,
    status: "Chỉ bán tại cửa hàng",
    origin: "Korea",
    image: Tomato,
  },
  {
    id: 6,
    status: "Còn hàng",
    origin: "USA",
    image: Lemon,
  },
];
const Product = () => {
  return (
    <div className="container min-h-screen py-14 mx-auto">
      <div className="py-4 flex items-center mt-2">
        <a href="" className="text-primary text-base">
          <Home />
        </a>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Sản phẩm</p>
      </div>
      <h1 className="text-2xl text-center text-green-500 uppercase my-5">
        Danh mục sản phẩm
      </h1>
      <div className="grid place-items-center mx-4 md:mx-6 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          <article className="relative overflow-hidden card-article mb-20 shadow-xl">
            <Image
              src={juice}
              alt="juice"
              className="object-contain w-96 h-96 rounded-xl"
            />
            <h2 className="text-2xl text-green-400 font-medium mb-3 text-center uppercase mt-2">
              Nước ép nguyên chất
            </h2>
            <div className="w-[294px] py-6 px-6 bg-white shadow-xl rounded-2xl absolute -bottom-30 left-0 right-0 mx-auto card-data">
              <span className="block text-base mb-1 line-clamp-4 text-ellipsis overflow-hidden">
                Sản phẩm nước ép trái cây chất lượng thơ ngon với 100% thành
                phần từ tự nhiên có chứa nhiều vitamin C rất phù hợp cho cơ thể
                đang bệnh hoặc mới chớm bệnh giúp chống lại bệnh cảm cúm và cảm
                lạnh, tăng cường sức đề kháng. Cam kết chính hãng và an toàn
              </span>
              <Button className="text-base font-medium hover:underline">
                <Link href="/product/productDetail"> Xem chi tiết</Link>
              </Button>
            </div>
          </article>
          <article className="relative overflow-hidden card-article mb-20 shadow-xl">
            <Image
              src={rice}
              alt="juice"
              className="object-contain w-96 h-96 rounded-xl"
            />
            <h2 className="text-2xl text-green-400 font-medium mb-3 text-center uppercase mt-2">
              Gạo Thơm, gạo sạch
            </h2>
            <div className="w-72 py-6 px-6 bg-white shadow-xl rounded-2xl absolute -bottom-30 left-0 right-0 mx-auto card-data">
              <span className="block text-base mb-3">
                Nắm bắt được nhu cầu gạo sạch gia tăng, Tôi cho ra đời các dòng
                Gạo Thơm, Gạo Sạch đóng gói theo quy cách túi 5kg, 10kg
              </span>
              <Button className="text-base font-medium hover:underline">
                <Link href="/product/productDetail"> Xem chi tiết</Link>
              </Button>
            </div>
          </article>
          <article className="relative overflow-hidden card-article mb-20 shadow-xl">
            <Image
              src={food}
              alt="juice"
              className="object-contain w-96 h-96 rounded-xl"
            />
            <h2 className="text-2xl text-green-400 font-medium mb-3 text-center mt-2 uppercase">
              Thực phẩm đa dạng
            </h2>
            <div className="w-72 py-6 px-6 bg-white shadow-xl rounded-2xl absolute -bottom-30 left-0 right-0 mx-auto card-data">
              <span className="block text-base mb-1 ">
                Nắm bắt được nhu cầu gạo sạch gia tăng, Vua Gạo cho ra đời các
                dòng Gạo Thơm, Gạo Sạch đóng gói theo quy cách túi 5kg, 10kg
              </span>

              <Button className="text-base font-medium hover:underline">
                <Link href="/product/productDetail"> Xem chi tiết</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
      <div className="flex justify-center items-center my-10">
        <div className="relative w-full max-w-4xl px-4">
          <div className="flex items-center">
            <div className="flex-grow h-0.5 bg-emerald-600"></div>
            <div className="mx-8">
              <div className="relative">
                <div className="absolute w-8 h-8 rounded-full bg-emerald-600 -top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex-grow h-0.5 bg-emerald-600"></div>
          </div>
          <h2 className="text-3xl font-bold text-emerald-600 uppercase tracking-wider text-center mt-8">
            Sản phẩm nổi bật
          </h2>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-4">
        {bestProduct.map((items, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative product-container">
              <div className="absolute top-2 left-2 z-20">
                <div className="bg-red-600 text-white px-3 py-1 rounded-r-lg font-bold transform -skew-x-12">
                  NEW
                </div>
              </div>
              <Image
                src={items.image}
                alt="juice"
                className="w-96 h-64 object-contain"
              />
              <div className="absolute -bottom-20 top-0 left-0 right-0 overlay-content">
                <div className="bg-black bg-opacity-70 text-white p-4">
                  <div className="space-y-1 mb-2">
                    <div>
                      <span className="font-medium">Tình trạng:</span>
                      {items.status}
                    </div>
                    <div>
                      <span className="font-medium">Xuất xứ:</span>{" "}
                      {items.origin}
                    </div>
                  </div>
                  <p className="text-sm">
                    Thành phần kết hợp 3 loại gạo lứt giúp cơm thơm dẻo, bùi,
                    hương thơm đặc biệt, giàu vitamin và khoáng chất, hỗ trợ
                    giảm giảm cân và giảm nguy cơ bệnh tiểu đường, tốt cho
                    tim...
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-center text-green-700 font-medium text-lg">
                GẠO LỨT TAM SẮC 1KG
              </h2>
            </div>
          </div>
        ))}
      </div> */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {bestProduct.map((items, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/3 lg:basis-1/4"
            >
              <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative product-container">
                  <div className="absolute top-2 left-2 z-20">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-r-lg font-bold transform -skew-x-12">
                      NEW
                    </div>
                  </div>
                  <Image
                    src={items.image}
                    alt="juice"
                    className="w-96 h-64 object-contain"
                  />
                  <div className="absolute -bottom-20 top-0 left-0 right-0 overlay-content">
                    <div className="bg-black bg-opacity-70 text-white p-4">
                      <div className="space-y-1 mb-2">
                        <div>
                          <span className="font-medium">Tình trạng:</span>
                          {items.status}
                        </div>
                        <div>
                          <span className="font-medium">Xuất xứ:</span>{" "}
                          {items.origin}
                        </div>
                      </div>
                      <p className="text-sm">
                        Thành phần kết hợp 3 loại gạo lứt giúp cơm thơm dẻo,
                        bùi, hương thơm đặc biệt, giàu vitamin và khoáng chất,
                        hỗ trợ giảm giảm cân và giảm nguy cơ bệnh tiểu đường,
                        tốt cho tim...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h2 className="text-center text-green-700 font-medium text-lg">
                    GẠO LỨT TAM SẮC 1KG
                  </h2>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 text-green-800 hover:text-green-700 hover:bg-green-50" />
        <CarouselNext className="hidden md:flex -right-12 text-green-800 hover:text-green-700 hover:bg-green-50" />
      </Carousel>
    </div>
  );
};

export default Product;
