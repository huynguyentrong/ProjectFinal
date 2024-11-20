import {
  ChartBarStacked,
  ChevronDown,
  ChevronRight,
  Heart,
  Home,
  PanelRight,
  Search,
  Star,
} from "lucide-react";
import React from "react";
import juice from "@/assets/images/Oranges.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Product = () => {
  return (
    <>
      <div className="container py-4 flex items-center mt-40">
        <a href="" className="text-primary text-base">
          <Home />
        </a>
        <span className="text-sm text-gray-400">
          <ChevronRight />
        </span>
        <p className="text-gray-600 font-medium">Shop</p>
      </div>
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="divide-y divide-gray-200 space-y-5 ">
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                category
              </h3>
              <div className="space-y-2 ">
                <div className="flex items-center">
                  <Checkbox
                    id="category1"
                    className="focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <Label
                    htmlFor="category1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Vegetable
                  </Label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="category1"
                    className="focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <Label
                    htmlFor="category1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Vegetable
                  </Label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="category1"
                    className="focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <Label
                    htmlFor="category1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Vegetable
                  </Label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <Checkbox
                    id="category1"
                    className="focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <Label
                    htmlFor="category1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Vegetable
                  </Label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className="w-full border-gray-300 border focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-600">-</span>
                <input
                  type="text"
                  className="w-full border-gray-300 border focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                  placeholder="max"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="flex items-center mb-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="w-44 text-sm text-gray-600 px-4 py-3 border border-gray-600 shadow-sm rounded focus:ring-primary focus:border-primary flex items-center justify-between">
                Sắp xếp theo
                <ChevronDown className="w-4 h-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Mặc định</DropdownMenuItem>
                <DropdownMenuItem>Từ cao đến thấp</DropdownMenuItem>
                <DropdownMenuItem>Từ thấp đến cao</DropdownMenuItem>
                <DropdownMenuItem>% Khuyến mãi</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex gap-2 ml-auto">
              <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                <ChartBarStacked />
              </div>
              <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                <PanelRight />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white shadow rounded overflow-hidden group">
              <div className="relative">
                <Image
                  src={juice}
                  alt="trái cây"
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <Search />
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                  >
                    <Heart />
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Cam ngọt{" "}
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$45</p>
                  <p className="text-sm text-gray-400 line-through">$55</p>
                </div>
                <div className="flex items-center ">
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
                    <span>
                      <Star />
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
                <Button className="mt-4">Add to card</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
