import { ChevronRight, Home, Send, Star } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bestProduct from "@/data/Product";

export async function generateStaticParams() {
  return bestProduct.map((product) => ({
    id: product.id.toString(),
  }));
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = bestProduct.find((item) => item.id === parseInt(params.id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container min-h-screen px-4 py-8 sm:py-14 mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center flex-wrap gap-2 py-4 mt-2">
        <a href="" className="text-primary text-base">
          <Home className="w-5 h-5" />
        </a>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <p className="text-gray-600 text-sm sm:text-base font-medium">Shop</p>
        <ChevronRight className="w-4 h-4 text-gray-400" />
        <p className="text-gray-600 text-sm sm:text-base font-medium">
          Sản phẩm
        </p>
      </div>

      <h1 className="text-xl sm:text-2xl  text-green-500 text-center uppercase pb-4 my-4 sm:my-5">
        Thông tin sản phẩm
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-8 sm:pb-16">
        {/* Product Images */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-full flex justify-center">
            <Image
              src={product.image}
              alt="product"
              width={500}
              height={500}
              className="object-cover w-full max-w-[300px] sm:max-w-xs md:max-w-md"
            />
          </div>
          <div className="grid grid-cols-3 gap-2 w-full max-w-[300px] sm:max-w-xs md:max-w-md">
            {product.images?.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={100}
                height={100}
                alt={`product-${index}`}
                className="object-cover w-full cursor-pointer border-gray-400 border"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4 px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase">
            {product.name}
          </h2>

          {/* Rating */}
          <div className="flex items-center">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(product.rating)].map((_, index) => (
                <Star key={index} className="w-4 h-4 sm:w-5 sm:h-5" />
              ))}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 ml-3">
              ({product.reviews})
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-2 text-sm sm:text-base">
            {[
              {
                label: "Availability",
                value: product.availability,
                color: "text-green-600",
              },
              { label: "Brand", value: product.brand },
              { label: "Category", value: product.category },
              { label: "SKU", value: product.sku },
            ].map((item, index) => (
              <p key={index} className="flex items-center space-x-2">
                <span className="text-gray-800 font-semibold">
                  {item.label}:
                </span>
                <span className={item.color || "text-gray-600"}>
                  {item.value}
                </span>
              </p>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-baseline space-x-2">
            <p className="text-lg sm:text-xl text-red-600 font-semibold">
              ${product.price}
            </p>
            <p className="text-sm sm:text-base text-gray-400 line-through">
              ${product.oldPrice}
            </p>
          </div>

          {/* Description */}
          <ul className="text-sm sm:text-base text-gray-600 space-y-1">
            {product.description?.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>

          {/* Quantity Selector */}
          <div>
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                {product.quantity}
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button className="bg-red-500 border text-white py-2 px-4 rounded-md hover:bg-red-600 text-sm sm:text-base">
              Liên hệ ngay <Send className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3 pt-2">
            {product.socialLinks?.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="container mx-auto pb-8 sm:pb-16 px-2 sm:px-0">
        <h3 className="border-b border-gray-200 text-gray-800 pb-3 font-medium">
          Mô tả sản phẩm
        </h3>
        <div className="w-full md:w-3/5 pt-4 sm:pt-6">
          <div className="text-gray-600 space-y-3 text-sm sm:text-base">
            <p>{product.desc}</p>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-green-700 mb-6 sm:mb-8">
          SẢN PHẨM TƯƠNG TỰ
        </h2>
      </div>

      {/* Product Carousel */}
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
                  <div className="absolute -bottom-52 top-0 left-0 right-0 overlay-content">
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
                    {items.name}
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

export default ProductDetail;
