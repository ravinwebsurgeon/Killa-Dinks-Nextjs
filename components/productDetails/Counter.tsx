'use client'
import { useState } from "react";

export default function Counter( {quantity,increase,decrease}:any) {
  

  return (
    <div className="flex items-center border border-[#bba887]   rounded-lg overflow-hidden w-min   ">
      {/* Decrease button */}
      <button
        onClick={decrease}
        className="flex items-center justify-center  px-6 py-4 hover:text-white bg-[#FAF7EB] text-[#bba887] hover:bg-[#BBA887] "
        disabled={quantity <= 1}
      >
        -
      </button>

      {/* Counter display */}
      <div className="flex items-center justify-center w-16 h-10    text-[#bba887] font-[500] text-[24px]  text-center ">
        {quantity}
      </div>

      {/* Increase button */}
      <button
        onClick={increase}
        className="flex items-center justify-center   px-6 py-4 hover:text-white bg-[#FAF7EB] text-[#bba887] hover:bg-[#BBA887]"
      >
        +
      </button>
    </div>
  );
}