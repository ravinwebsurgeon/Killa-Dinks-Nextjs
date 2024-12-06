"use client"
import React, { useRef } from 'react'
import img1 from "../../public/assets/ourwork1.png";
import img2 from "../../public/assets/ourwork2.png";
import img3 from "../../public/assets/ourwork3.png";
import arrowImg1 from '../../public/assets/Arrow1.png';
import arrowImg2 from '../../public/assets/Arrow2.png';
import { Swiper as SwiperClass } from 'swiper'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';  // Core Swiper styles
import 'swiper/css/navigation';  // Navigation styles

const OurWork = () => {
    // const swiperRef = useRef<SwiperClass | null>(null);
    const ourWorkRef = useRef<SwiperClass | any>(null);
    
  return (
    <div>
    <div className="custum-paddles ">
        <div className="text-center mt-4 mb-3 md:mt-[80px] md:mb-12">
            <div className=" text-[24px] md:text-[40px] font-medium text-black">
                See Our Work
            </div>
            <div className=" text-[16px] md:text-[25px] text-gray-700 ">
                Products that Speak for Themselves
            </div>
        </div>
        <div className="relative flex justify-center sm:px-[50px] px-4">

            <Swiper
                spaceBetween={42}
                // slidesPerView={'auto'}
                loop={true}
                ref={ourWorkRef}
                pagination={{ clickable: true }}
                onSwiper={(swiper:SwiperClass) => {
                    ourWorkRef.current = swiper;
                }}
                breakpoints={{
                    // When the width is 640px or less (mobile devices)
                    640: {
                        slidesPerView: 2, // Show 1 slide
                        spaceBetween: 20, // Space between slides
                    },
                    // When the width is 768px or more (tablet and above)
                    768: {
                        slidesPerView: 2, // Show 2 slides
                        spaceBetween: 20, // Space between slides
                    },
                    800:{
                        slidesPerView: 2, // Show 3 slides
                        spaceBetween: 42,
                    },
                    // When the width is 1024px or more (desktop and above)
                    1024: {
                        slidesPerView: 2, // Show 3 slides
                        spaceBetween: 42, // Space between slides
                    },
                    1200:{
                        slidesPerView: 3, // Show 3 slides
                        spaceBetween: 42,
                    }
                }}
                className="max-w-[1440px]   w-full mx-auto flex justify-center"
            >
                <SwiperSlide>
                    <div className="border-2  w-full max-w-[452px] overflow-hidden flex flex-col rounded-[20px]">
                        <div className=" h-full max-h-[429px] overflow-hidden group">
                            <img src={img1.src} alt="" className=" transition-transform duration-500 ease-in-out group-hover:scale-110 w-full " />
                        </div>
                        <div className="flex justify-center items-center text-[18px] md:text-[24px] py-3 md:py-[30px]">
                            Custom Paddles
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide  >
                    <div className="border-2  w-full max-w-[452px]  overflow-hidden flex flex-col rounded-[20px]">
                        <div className=" h-full max-h-[429px] overflow-hidden group">
                            <img src={img2.src} alt="" className=" transition-transform duration-500 ease-in-out group-hover:scale-110 w-full " />
                        </div>
                        <div className="flex justify-center items-center text-[18px] md:text-[24px] py-3 md:py-[30px]">
                            Custom Paddles
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2  w-full max-w-[452px]  overflow-hidden flex flex-col rounded-[20px]">
                        <div className=" h-full max-h-[429px] overflow-hidden group">
                            <img src={img2.src} alt="" className=" transition-transform duration-500 ease-in-out group-hover:scale-110 w-full" />
                        </div>
                        <div className="flex justify-center items-center text-[18px] md:text-[24px] py-3 md:py-[30px]">
                            Custom Paddles
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2  w-full max-w-[452px]  overflow-hidden flex flex-col rounded-[20px]">
                        <div className=" h-full max-h-[429px] overflow-hidden group">
                            <img src={img3.src} alt="" className=" transition-transform duration-500 ease-in-out group-hover:scale-110 w-full" />
                        </div>
                        <div className="flex justify-center items-center text-[18px] md:text-[24px] py-3 md:py-[30px]">
                            Custom Paddles
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>



            <div className="absolute z-50 max-w-[1660px] w-full lg:flex hidden justify-between  items-center top-[44%]  " >
                <div
                    className="py-6  px-4  top-1/2 -translate-y-1/2 left-4 flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
                    onClick={() => ourWorkRef.current?.slidePrev()}
                >
                    <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
                </div>

                <div
                    className="py-6  px-4 top-1/2 -translate-y-1/2 right-4 flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
                    onClick={() => ourWorkRef.current?.slideNext()}
                >
                    <img src={arrowImg1.src} className="w-[30px]" alt="Next" />
                </div>
            </div>


        </div>

        <div className='lg:hidden block'>
            <div className="flex justify-center gap-2 py-[20px] lg:p-[10px] " >
                <div
                    className="py-6  px-4  flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer  shadow-md"
                    onClick={() => ourWorkRef.current?.slidePrev()}
                >
                    <img src={arrowImg2.src} className="  w-[30px]" alt="Previous" />
                </div>

                <div
                    className="py-6  px-4  flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer  shadow-md"
                    onClick={() => ourWorkRef.current?.slideNext()}
                >
                    <img src={arrowImg1.src} className="w-[30px]" alt="Next" />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default OurWork