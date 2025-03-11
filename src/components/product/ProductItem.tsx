import React from "react";
import Image from "next/image";
import ImageProduct from "@/assets/img/item-cate.jpg";
import { Package, ShoppingCart } from "lucide-react";

const ProductItem = () => {
  return (
    <div className="group relative overflow-hidden shadow-md transition-all duration-200 hover:shadow-xl">
      <div className="relative h-[370px] w-full overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-black/30 before:z-10 before:opacity-0 group-hover:before:opacity-100 before:transition-all before:duration-400 before:ease-out">
        <Image
          src={ImageProduct}
          alt=""
          fill
          className="object-cover transition-all duration-400 ease-out group-hover:scale-125"
        />
        <ul className="absolute z-20 -bottom-20 left-1/2 -translate-x-1/2 flex justify-center items-center transition-all duration-400 ease-out group-hover:bottom-3">
          <li>
            <button
              className="p-3 cursor-pointer border-r-1 border-gray-200 transition-all duration-200 bg-white hover:bg-black hover:text-white"
              type="button"
            >
              <Package />
            </button>
          </li>
          <li>
            <button className="p-3 cursor-pointer transition-all duration-200 bg-white hover:bg-black hover:text-white" type="button">
              <ShoppingCart />
            </button>
          </li>
        </ul>
      </div>
      <div className="text-center p-4">
        <h3 className="font-semibold group-hover:text-rose-500 transition-all duration-300">
          Cashmere Tank + Bag
        </h3>
        <div className="flex justify-center items-center gap-2">
          <span className="text-gray-400 line-through group-hover:text-black transition-all duration-300">
            1.200.000đ
          </span>
          <span className="text-yellow-600 font-bold">999.000đ</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
