import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const carouselItems = [
  {
    title: "We are the suppliers of quality products",
    subtitle: "we believe Future of Food is here",
    image: "/assets/images/Agriculture.jpg",
  },
  {
    title: "Fresh and Organic Products",
    subtitle: "Straight from our farms to your table",
    image: "/assets/images/Nong-San-2.jpg",
  },
  {
    title: "Sustainable Farming Practices",
    subtitle: "Leading the way in modern agriculture",
    image: "/assets/images/hqdefault.jpg",
  },
];
const Banner = () => {
  return (
    <>
      {/* Main Content with Carousel */}
      <div className="relative w-full bg-[#fff8f0] p-10 overflow-x-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col lg:flex-row items-center gap-8 px-4">
                  {/* Left Section */}
                  <div className="flex-1 space-y-8">
                    <div className="relative">
                      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        {item.title}
                      </h1>
                      <div className="absolute -top-8 right-4 text-yellow-400">
                        <svg
                          className="w-8 h-8"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0L15.708 8.292L24 12L15.708 15.708L12 24L8.292 15.708L0 12L8.292 8.292L12 0Z" />
                        </svg>
                      </div>
                    </div>

                    <p className="text-xl text-gray-600">{item.subtitle}</p>

                    {/* Search Bar */}
                    <div className="relative max-w-md">
                      <input
                        type="text"
                        placeholder="What are you looking for?"
                        className="w-full px-6 py-3 rounded-full bg-white shadow-sm focus:outline-none"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">
                        Search
                      </button>
                    </div>

                    {/* Community Section */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="text-green-500">
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0L15.708 8.292L24 12L15.708 15.708L12 24L8.292 15.708L0 12L8.292 8.292L12 0Z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Join our community</div>
                          <div className="text-sm text-gray-500">
                            we are waiting for you
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Section - Image */}
                  <div className="flex-1 relative">
                    <div className="relative rounded-[2rem] overflow-hidden">
                      <img
                        src={item.image}
                        alt="Agriculture"
                        className="w-full lg:h-[600px] h-full object-cover"
                      />
                      {/* Badge */}
                      <div className="absolute bottom-8 -left-4 bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center transform rotate-12">
                        <div className="text-center">
                          <div className="text-3xl font-bold">1#</div>
                          <div className="text-xs">BEST MODERN FARM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-[70%] -translate-y-1/2 lg:-left-[2%] lg:-right-[2%] hidden md:block md:-left-[3%] md:-right-[3%] ">
            <CarouselPrevious className="absolute left-4" />
            <CarouselNext className="absolute right-4" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Banner;
