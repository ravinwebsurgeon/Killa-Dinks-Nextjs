'use client'
import React, { useRef } from 'react'
import img1 from "../../app/assets/ourwork1.png";
import img2 from "../../app/assets/ourwork2.png";
import img3 from "../../app/assets/ourwork3.png";
import arrowImg1 from '../../app/assets/Arrow1.png';
import arrowImg2 from '../../app/assets/Arrow2.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper'; 
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; 
import videoImg1 from "../../app/assets/videoImg1.jpeg";
import videoImg2 from "../../app/assets/videoImg2.jpeg";
import videoImg3 from "../../app/assets/videoImg3.jpeg";

const MobileCapturedMoments = () => {
    const ourWorkRef = useRef<SwiperClass | any>(null);
  return (
    <div>
    <div className="mobile-captured-moments">
        <div className="text-center mt-[70px] mb-12">
            <div>
                <div className="flex justify-center pt-[80px] text-[40px] font-medium">
                    Captured Moments
                </div>
                <div className="flex justify-center">Real Users, Real Stories</div>
            </div>
        </div>
        <div className="relative flex justify-center">

            <Swiper
                spaceBetween={42}
                slidesPerView={'auto'}
                loop={true}
                ref={ourWorkRef}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                    ourWorkRef.current = swiper;
                }}
                breakpoints={{
                    // When the width is 640px or less (mobile devices)
                    640: {
                        slidesPerView: 1, // Show 1 slide
                        spaceBetween: 20, // Space between slides
                    },
                    // When the width is 768px or more (tablet and above)
                    768: {
                        slidesPerView: 1, // Show 2 slides
                        spaceBetween: 42, // Space between slides
                    },
                    // When the width is 1024px or more (desktop and above)
                    1024: {
                        slidesPerView: 3, // Show 3 slides
                        spaceBetween: 42, // Space between slides
                    },
                }}
                className="max-w-[1440px] w-full mx-auto flex justify-center"
            >
                <SwiperSlide>
                    <div className="border-2 w-full max-w-[452px] flex flex-col rounded-[20px]">
                        <div className="w-full h-auto">
                            <img src={videoImg1.src} alt="" className="w-full h-auto object-cover rounded-[20px] min-h-[300px] circle" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 w-full max-w-[452px] flex flex-col rounded-[20px] m">
                        <div className="w-full h-auto">
                            <img src={videoImg2.src} alt="" className="w-full h-auto object-cover rounded-[20px] min-h-[300px] circle" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 w-full max-w-[452px] flex flex-col rounded-[20px]">
                        <div className="w-full h-auto">
                            <img src={videoImg3.src} alt="" className="w-full h-auto object-cover rounded-[20px] min-h-[300px] circle" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="border-2 w-full max-w-[452px] flex flex-col rounded-[20px]">
                        <div className="w-full h-auto">
                            <img src={videoImg1.src} alt="" className="w-full h-auto object-cover rounded-[20px] min-h-[300px] circle " />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className="absolute max-w-[1660px] w-full lg:flex hidden justify-between items-center top-[44%]">
                <div
                    className="py-6 px-4 top-1/2 -translate-y-1/2 left-4 flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
                    onClick={() => ourWorkRef.current?.slidePrev()}
                >
                    <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
                </div>

                <div
                    className="py-6 px-4 top-1/2 -translate-y-1/2 right-4 flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
                    onClick={() => ourWorkRef.current?.slideNext()}
                >
                    <img src={arrowImg1.src} className="w-[30px]" alt="Next" />
                </div>
            </div>
        </div>

        <div className="lg:hidden block">
            <div className="flex justify-center gap-2 py-[20px] lg:p-[10px]">
                <div
                    className="py-4 px-2 flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
                    onClick={() => ourWorkRef.current?.slidePrev()}
                >
                    <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
                </div>

                <div
                    className="py-4 px-2 flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
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

export default MobileCapturedMoments