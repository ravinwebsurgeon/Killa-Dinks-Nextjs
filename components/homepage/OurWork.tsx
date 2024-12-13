'use client';
import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../public/assets/ourwork1.png';
import img2 from '../../public/assets/ourwork2.png';
import img3 from '../../public/assets/ourwork3.png';
import arrowImg1 from '../../public/assets/Arrow1.png';
import arrowImg2 from '../../public/assets/Arrow2.png';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import client from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';

const OurWork = () => {
  // const swiperRef = useRef<SwiperClass | null>(null);
  const ourWorkRef = useRef<SwiperClass | any>(null);

  const [ouWorkData, setOurWorkData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "ourWork"]`);
        if (result.length > 0) {
          setOurWorkData(result);
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="custum-paddles">
        <div className="mb-3 mt-4 text-center md:mb-12 md:mt-[80px]">
          <div className="text-[24px] font-medium text-black md:text-[40px]">
            {ouWorkData ? ouWorkData[0]?.text : null}
          </div>
          <div className="text-[16px] text-gray-700 md:text-[25px]">
            {ouWorkData ? ouWorkData[0]?.subHeading : null}
          </div>
        </div>
        <div className="relative flex justify-center px-4 sm:px-[50px]">
          <Swiper
            spaceBetween={42}
            // slidesPerView={'auto'}
            loop={true}
            ref={ourWorkRef}
            pagination={{ clickable: true }}
            onSwiper={(swiper: SwiperClass) => {
              ourWorkRef.current = swiper;
            }}
            breakpoints={{
              // When the width is 640px or less (mobile devices)
              640: {
                slidesPerView: 2, // Show 1 slide
                spaceBetween: 20 // Space between slides
              },
              // When the width is 768px or more (tablet and above)
              768: {
                slidesPerView: 2, // Show 2 slides
                spaceBetween: 20 // Space between slides
              },
              800: {
                slidesPerView: 2, // Show 3 slides
                spaceBetween: 42
              },
              // When the width is 1024px or more (desktop and above)
              1024: {
                slidesPerView: 2, // Show 3 slides
                spaceBetween: 42 // Space between slides
              },
              1200: {
                slidesPerView: 3, // Show 3 slides
                spaceBetween: 42
              }
            }}
            className="mx-auto flex w-full max-w-[1440px] justify-center"
          >
            {ouWorkData &&
              ouWorkData[0]?.images?.map((item: any, index: any) => (
                <SwiperSlide key={index}>
                  <div className="flex w-full max-w-[452px] flex-col overflow-hidden rounded-[20px] border-2">
                    <div className="group h-full max-h-[429px] overflow-hidden">
                      <img
                        src={urlFor(item.image)?.width(1200)?.url()}
                        alt={item.image.alt}
                        className="w-full bg-[FAF7EB] transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex items-center justify-center border-t py-3 text-[18px] md:py-[30px] md:text-[24px]">
                      {item?.headline || 'Custom Paddle'}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <div className="absolute top-[44%] z-50 hidden w-full max-w-[1660px] items-center justify-between lg:flex">
            <div
              className="left-4 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-[2px] border-[#BBA887] bg-white px-4 py-6 shadow-md"
              onClick={() => ourWorkRef.current?.slidePrev()}
            >
              <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
            </div>

            <div
              className="right-4 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-[2px] border-[#BBA887] bg-white px-4 py-6 shadow-md"
              onClick={() => ourWorkRef.current?.slideNext()}
            >
              <img src={arrowImg1.src} className="w-[30px]" alt="Next" />
            </div>
          </div>
        </div>

        <div className="block lg:hidden">
          <div className="flex justify-center gap-2 py-[20px] lg:p-[10px]">
            <div
              className="flex cursor-pointer items-center justify-center rounded-full border-[2px] border-[#BBA887] px-4 py-6 shadow-md"
              onClick={() => ourWorkRef.current?.slidePrev()}
            >
              <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
            </div>

            <div
              className="flex cursor-pointer items-center justify-center rounded-full border-[2px] border-[#BBA887] px-4 py-6 shadow-md"
              onClick={() => ourWorkRef.current?.slideNext()}
            >
              <img src={arrowImg1.src} className="w-[30px]" alt="Next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
