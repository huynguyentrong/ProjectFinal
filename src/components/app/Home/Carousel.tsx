import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";
import BannerImage from "@/assets/images/Kiwi.jpg";
import juice from "@/assets/images/Oranges.jpg";
import Shopping from "@/assets/images/shopping.png";
import sale from "@/assets/images/sale.png";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Banner = () => {
  return (
    <div className="bg-green-50">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="container mx-auto py-6 md:py-12 px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Content */}
                <div className="space-y-4 md:space-y-6 text-center md:text-left">
                  <div className="inline-block px-3 md:px-4 py-1 bg-yellow-400 rounded-full text-xs md:text-sm font-semibold">
                    Open Sale Discount 50%
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Supermarket For Fresh Grocery
                  </h1>
                  <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
                    Introduce a new model for online grocery shopping and
                    convenient global delivery
                  </p>
                  <Button className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all flex items-center gap-2 mx-auto md:mx-0">
                    Shop now
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </div>

                {/* Right Content */}
                <div className="relative mt-8 md:mt-0">
                  {/* Main circular image container */}
                  <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
                    {/* You can replace the next/image with a placeholder for now */}
                    <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-green-600 rounded-full" />
                    <div className="relative w-[280px] h-[330px] md:w-[400px] md:h-[470px] lg:w-[510px] lg:h-[590px]">
                      <Image
                        src={Shopping}
                        alt="Shopping"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm -z-10" />
                  </div>

                  {/* Floating elements - Hidden on mobile */}
                  <div className="hidden md:block absolute top-4 xl:right-[77%] bg-white p-3 rounded-lg shadow-md">
                    <div className="flex items-center gap-2">
                      <Image
                        src={BannerImage}
                        width={200}
                        height={200}
                        alt="avocado"
                        className="w-8 h-8 rounded-md"
                      />
                      <div>
                        <div className="font-semibold">Kiwi - 4 pcs</div>
                        <div className="flex text-yellow-400">★★★★★</div>
                      </div>
                    </div>
                  </div>
                  {/* Avocado rating card */}
                  <div className="hidden xl:block absolute bottom-20 xl:right-[77%] bg-white p-2 rounded-lg shadow-sm h-[10%]">
                    <div className="flex items-center gap-2">
                      <Image
                        src={juice}
                        width={200}
                        height={200}
                        alt="avocado"
                        className="w-8 h-8 rounded-md"
                      />
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★★
                        </div>
                        <span className="text-xs font-medium">9.5</span>
                        <span className="bg-green-500 text-white text-xs px-1 rounded">
                          +1
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block absolute bottom-12 right-0 bg-white p-2 rounded-lg shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span>Delivery Done!</span>
                    </div>
                  </div>

                  {/* Decorative elements on mobile */}
                  <div className="absolute -top-4 left-0 md:hidden bg-white p-1">
                    <div className="flex items-center gap-2">
                      <Image
                        src={juice}
                        width={200}
                        height={200}
                        alt="avocado"
                        className="w-8 h-8 rounded-md"
                      />
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★★
                        </div>
                        <span className="text-xs font-medium">9.5</span>
                        <span className="bg-green-500 text-white text-xs px-1 rounded">
                          +1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 right-10 md:hidden bg-white p-1">
                    <div className="flex items-center gap-2">
                      <Image
                        src={BannerImage}
                        width={200}
                        height={200}
                        alt="avocado"
                        className="w-8 h-8 rounded-md"
                      />
                      <div>
                        <div className="font-semibold">Kiwi - 4 pcs</div>
                        <div className="flex text-yellow-400">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="container mx-auto py-6 md:py-12 px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                {/* Left Content */}
                <div className="space-y-4 md:space-y-6 text-center md:text-left">
                  <div className="inline-block px-3 md:px-4 py-1 bg-yellow-400 rounded-full text-xs md:text-sm font-semibold">
                    Open Sale Discount 50%
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Supermarket For Fresh Grocery
                  </h1>
                  <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto md:mx-0">
                    Introduce a new model for online grocery shopping and
                    convenient global delivery
                  </p>
                  <Button className="px-4 md:px-6 py-2 md:py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-all flex items-center gap-2 mx-auto md:mx-0">
                    Shop now
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </div>

                {/* Right Content */}
                <div className="relative mt-8 md:mt-0">
                  {/* Main circular image container */}
                  <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto">
                    {/* You can replace the next/image with a placeholder for now */}
                    <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-green-600 rounded-full" />
                    <div className="relative w-[280px] h-[330px] md:w-[400px] md:h-[470px] lg:w-[510px] lg:h-[590px]">
                      <Image
                        src={sale}
                        alt="Shopping"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -inset-1 rounded-full bg-white/10 blur-sm -z-10" />
                  </div>

                  {/* Floating elements - Hidden on mobile */}
                  <div className="hidden md:block absolute top-4 xl:right-[77%] bg-white p-3 rounded-lg shadow-md">
                    <div className="flex items-center gap-2">
                      <Image
                        src={BannerImage}
                        width={200}
                        height={200}
                        alt="avocado"
                        className="w-8 h-8 rounded-md"
                      />
                      <div>
                        <div className="font-semibold">Kiwi - 4 pcs</div>
                        <div className="flex text-yellow-400">★★★★★</div>
                      </div>
                    </div>
                  </div>
                  {/* Avocado rating card */}
                  <div className="hidden xl:block absolute bottom-20 xl:right-[77%] bg-white p-2 rounded-lg shadow-sm h-[10%]">
                    <div className="flex items-center gap-2">
                      <Image
                        src={juice}
                        width={200}
                        height={200}
                        alt="avocado"
                        className="w-8 h-8 rounded-md"
                      />
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★★
                        </div>
                        <span className="text-xs font-medium">9.5</span>
                        <span className="bg-green-500 text-white text-xs px-1 rounded">
                          +1
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block absolute bottom-12 right-0 bg-white p-2 rounded-lg shadow-md">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                        ✓
                      </div>
                      <span>Delivery Done!</span>
                    </div>
                  </div>

                  {/* Decorative elements on mobile */}
                  <div className="absolute -top-4 left-0 md:hidden bg-white p-1">
                    <div className="flex items-center gap-2">
                      <Image
                        src={juice}
                        width={200}
                        height={200}
                        alt="avocado"
                        className="w-8 h-8 rounded-md"
                      />
                      <div className="flex items-center gap-1">
                        <div className="flex text-yellow-400 text-xs">
                          ★★★★★
                        </div>
                        <span className="text-xs font-medium">9.5</span>
                        <span className="bg-green-500 text-white text-xs px-1 rounded">
                          +1
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-[55%] md:hidden bg-white rounded-md">
                    <div className="flex items-center gap-2">
                      <Image
                        src={BannerImage}
                        width={200}
                        height={200}
                        alt="avocado"
                        className="w-8 h-8 rounded-md"
                      />
                      <div>
                        <div className="font-semibold">Kiwi - 4 pcs</div>
                        <div className="flex text-yellow-400">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        {/* Hide carousel controls on mobile */}
        <div className="hidden md:block">
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
