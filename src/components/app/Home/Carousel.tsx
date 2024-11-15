import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
export function Carousel() {
  return (
    <div className="bg-[#e6f2eb] min-h-[500px] relative overflow-hidden">
      <div className="container mx-auto px-4 py-12 flex items-center justify-between">
        <div className="w-1/2 pr-8">
          <div className="inline-block px-4 py-1 bg-yellow-400 rounded-full text-sm font-semibold mb-6">
            Open Sale Discount 50%
          </div>
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            Supermarket For Fresh Grocery
          </h1>
          <p className="text-gray-600 mb-8">
            Introduce a new model for online grocery shopping and convenient
            global delivery
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors flex items-center">
            Shop now
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="w-1/2 relative">
          <div className="absolute right-0 w-[450px] h-[450px] bg-green-600 rounded-full"></div>

          <div className="absolute top-4 right-[400px] bg-white p-2 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <Image src={Logo} alt="Kiwi" className="w-8 h-8" />
              <div>
                <div className="font-semibold">Kiwi - 4 pcs</div>
                <div className="text-yellow-400">★ 4.9</div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 right-[380px] bg-white p-2 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>Delivery Done!</span>
            </div>
          </div>

          <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
            <div className="flex items-center gap-2">
              <Image src={Logo} alt="Avocado" className="w-8 h-8" />
              <div>
                <div className="text-yellow-400">★★★★★</div>
                <div className="font-semibold">9.5</div>
              </div>
            </div>
          </div>

          <Image
            src={Logo}
            alt="Broccoli"
            className="absolute top-0 left-0 w-12 h-12"
          />
          <Image
            src={Logo}
            alt="Orange"
            className="absolute top-0 right-0 w-12 h-12"
          />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <button className="w-2 h-2 rounded-full bg-gray-800"></button>
        <button className="w-2 h-2 rounded-full bg-gray-400"></button>
      </div>
    </div>
  );
}

export default Carousel;
