import React from "react";
import product from "@/assets/images/Oranges.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
const ProductList = () => {
  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-2xl">
        Our popular products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer transition-all hover:shadow-lg ease-in-out">
          <Image src={product} alt="product" width={500} height={200} />
          <h2 className="font-bold text-lg">Fresh oranges</h2>
          <h2 className="font-bold">$1.99</h2>
          <Button
            variant="outline"
            className="text-green-400 hover:text-white hover:bg-green-400"
          >
            Add to cart
          </Button>
        </div>
        <div className="p-2 md:p-6 flex flex-col items-center justify-center gap-3 border rounded-lg hover:scale-105 cursor-pointer transition-all hover:shadow-lg ease-in-out">
          <Image src={product} alt="product" width={500} height={200} />
          <h2 className="font-bold text-lg">Fresh oranges</h2>
          <h2 className="font-bold">$1.99</h2>
          <Button
            variant="outline"
            className="text-green-400 hover:text-white hover:bg-green-400"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
