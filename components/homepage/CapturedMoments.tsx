'use client'
import React  , {useRef} from 'react'
import videoImg1 from "../../app/assets/videoImg1.jpeg";
import videoImg2 from "../../app/assets/videoImg2.jpeg";
import videoImg3 from "../../app/assets/videoImg3.jpeg";
import arrowImg1 from '../../app/assets/Arrow1.png';
import arrowImg2 from '../../app/assets/Arrow2.png';
import sliderImage1 from "../../app/assets/sliderImage.jpeg";
import sliderImage3 from "../../app/assets/sliderImage3.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from 'swiper'; 
import "swiper/css";
import "swiper/css/navigation";

const CapturedMoments = () => {
    const swiperRef = useRef<SwiperClass | any>(null);
  return (
    <div>
          <section className="captured-moments ">
                <div>
                    <div className="flex justify-center pt-[80px] text-[40px] font-medium">
                        Captured Moments
                    </div>
                    <div className="flex justify-center ">Real Users, Real Stories</div>
                </div>
                <div className="max-w-[1440px] relative pt-[40px] pb-[80px] mx-auto overflow-hidden w-full flex justify-center">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        pagination={{ clickable: true }}
                        className="w-full max-w-[14440px]   flex justify-center"
                    >
                        <SwiperSlide className="w-full max-w-[1440px] justify-center flex">
                            <div className="w-full max-w-[1440px] justify-center flex gap-[43px]">
                                <div className="flex w-full flex-col gap-[40px]">
                                    {/* Image 1 */}
                                    <div className="captured-moments-slider-card max-w-[638px] w-full min-h-[576px] overflow-hidden group">
                                        <img
                                            src={videoImg1.src}
                                            className="w-full max-w-[638px] min-h-[576px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            width={638}
                                            height={538}
                                            alt="Video 1"
                                        />
                                    </div>
                                    {/* Image 2 */}
                                    <div className="captured-moments-slider-card max-h-[283px] max-w-[638px] w-full overflow-hidden group">
                                        <img
                                            src={videoImg3.src}
                                            className="w-full max-w-[638px] max-h-[283px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            alt="Video 2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[43px]">
                                    <div className="flex justify-start h-auto gap-[43px]">
                                        {/* Image 3 */}
                                        <div className="captured-moments-slider-card max-w-[358px] min-h-[413px] overflow-hidden group">
                                            <img
                                                src={sliderImage1.src}
                                                className="object-cover w-full max-w-[358px] max-h-[413px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                alt="Slider Image 1"
                                            />
                                        </div>
                                        {/* Image 4 */}
                                        <div className="captured-moments-slider-card max-w-[358px] max-h-[413px] overflow-hidden group">
                                            <img
                                                src={sliderImage3.src}
                                                className="object-cover w-full max-w-[358px] max-h-[413px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                alt="Slider Image 3"
                                            />
                                        </div>
                                    </div>
                                    {/* Image 5 */}
                                    <div className="captured-moments-slider-card max-w-[759px] w-full max-h-[348px] overflow-hidden group">
                                        <img
                                            src={videoImg2.src}
                                            className="w-full min-w-[759px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            alt="Video 3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className="w-full max-w-[1440px] justify-center flex">
                            <div className="w-full max-w-[1440px] justify-center flex gap-[43px]">
                                <div className="flex w-full flex-col gap-[40px]">
                                    {/* Image 1 */}
                                    <div className="captured-moments-slider-card max-w-[638px] w-full min-h-[576px] overflow-hidden group">
                                        <img
                                            src={videoImg1.src}
                                            className="w-full max-w-[638px] min-h-[576px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            width={638}
                                            height={538}
                                            alt="Video 1"
                                        />
                                    </div>
                                    {/* Image 2 */}
                                    <div className="captured-moments-slider-card max-h-[283px] max-w-[638px] w-full overflow-hidden group">
                                        <img
                                            src={videoImg3.src}
                                            className="w-full max-w-[638px] max-h-[283px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            alt="Video 2"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[43px]">
                                    <div className="flex justify-start h-auto gap-[43px]">
                                        {/* Image 3 */}
                                        <div className="captured-moments-slider-card max-w-[358px] min-h-[413px] overflow-hidden group">
                                            <img
                                                src={sliderImage1.src}
                                                className="object-cover w-full max-w-[358px] max-h-[413px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                alt="Slider Image 1"
                                            />
                                        </div>
                                        {/* Image 4 */}
                                        <div className="captured-moments-slider-card max-w-[358px] max-h-[413px] overflow-hidden group">
                                            <img
                                                src={sliderImage3.src}
                                                className="object-cover w-full max-w-[358px] max-h-[413px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                                alt="Slider Image 3"
                                            />
                                        </div>
                                    </div>
                                    {/* Image 5 */}
                                    <div className="captured-moments-slider-card max-w-[759px] w-full max-h-[348px] overflow-hidden group">
                                        <img
                                            src={videoImg2.src}
                                            className="w-full min-w-[759px] h-full transition-transform duration-500 ease-in-out group-hover:scale-110"
                                            alt="Video 3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="w-full absolute bottom-[80px] right-4 z-50 gap-[20px] flex justify-end">
                        {/* Previous Button */}
                        <div
                            className="py-6 px-4 flex rounded-full border-[2px] border-[#BBA887] cursor-pointer"
                            onClick={() => swiperRef.current?.slidePrev()}
                        >
                            <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
                        </div>
                        {/* Next Button */}
                        <div
                            className="py-6 px-4 flex rounded-full border-[2px] border-[#BBA887] cursor-pointer"
                            onClick={() => swiperRef.current?.slideNext()}
                        >
                            <img src={arrowImg1.src} className="w-[30px]" alt="Next" />
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default CapturedMoments