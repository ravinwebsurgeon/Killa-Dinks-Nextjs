'use client';

import Link from 'next/link';
import React from 'react';

interface Product {
  title: string;
  priceRange: {
    maxVariantPrice: {
      amount: string;
    };
  };
  images: { url: string }[];
  featuredImage?: { url: string }; // Assuming images is an array of image objects
  handle: string; // The unique identifier for the product
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log(product?.title)
  return (
    <div className="w-full min-w-[333px] sm:w-[340px] min-h-[436px] h-auto flex-col overflow-hidden border-[1px] border-[#BBA887] rounded-[20px] text-black bg-white    lg:mx-0">
      {/* Image Container with Hover Effect */}
      <div className="relative group w-[350px] h-[350px] bg-[#FAF7EB]  rounded-t-[20px] flex justify-center items-center overflow-hidden transition-transform duration-500 ease-in-out">
        <img 
          src={product.featuredImage?.url} 
          alt={product.title} 
          className=" w-full h-full group-hover:scale-105 object-contain transition-all duration-300 ease-in-out" 
        />
        {/* Optional: Add a subtle overlay on image */}
       
      </div>

      {/* Card Content Section */}
      <div className="flex flex-col gap-2 pt-4 pb-6 px-5">
        <div className="text-lg sm:text-xl font-semibold text-gray-800 truncate">{product.title}</div>
        <div className="text-[18px] sm:text-[20px] font-bold text-[#BBA887]">
          ${product.priceRange.maxVariantPrice.amount} USD
        </div>

        {/* Button */}
        <Link 
          href={`/product/${product.handle}`}  
          className="my-[10px] py-[8px] text-[16px] sm:text-[18px] text-[#BBA887] bg-[#FAF7EB] px-6 rounded-[20px] text-center transition-transform duration-300 ease-in-out transform hover:scale-105 border-2 border-[#BBA887] hover:bg-[#BBA887] hover:text-white"
        >
          Choose Options
        </Link>
      </div>
    </div>
  );
};
export default ProductCard