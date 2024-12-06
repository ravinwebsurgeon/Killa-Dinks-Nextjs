'use client';
import React, { useRef } from 'react';
import videoImg1 from '../../public/assets/videoImg1.jpeg';
import videoImg2 from '../../public/assets/videoImg2.jpeg';
import videoImg3 from '../../public/assets/videoImg3.jpeg';
import arrowImg1 from '../../public/assets/Arrow1.png';
import arrowImg2 from '../../public/assets/Arrow2.png';
import sliderImage1 from '../../public/assets//sliderImage.jpeg';
import sliderImage3 from '../../public/assets/sliderImage3.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


const CapturedMoments = () => {
  const swiperRef = useRef<SwiperClass | any>(null);
  return (
    <div>
      <section className="captured-moments mx-4">
        <div>
          <div className="flex justify-center pt-[80px] text-[24px] font-medium md:text-[40px]">
            Captured Moments
          </div>
          <div className="flex justify-center text-[16px] md:text-[25px]">
            Real Users, Real Stories
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-[1440px] justify-center overflow-hidden pb-[80px] pt-[40px]">
          <Swiper
            slidesPerView={1}
            loop={true}
            spaceBetween={30}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            pagination={{ clickable: true }}
            className="flex w-full max-w-[1440px] justify-center"
          >
            <SwiperSlide className="flex w-full max-w-[1440px] justify-center">
              <div className="flex w-full max-w-[1440px] flex-wrap justify-center gap-3 lg:gap-[43px] xl:flex-nowrap">
                <div className="flex w-full flex-col items-center gap-3 lg:gap-[40px]">
                  {/* Image 1 */}
                  <div className="captured-moments-slider-card group w-full max-w-[638px] xl:max-w-full overflow-hidden xl:min-h-[576px]">
                    <img
                      src={videoImg1.src}
                      className="h-full w-full object-cover lg:max-w-[638px] xl:max-w-full transition-transform duration-500 ease-in-out group-hover:scale-110 lg:min-h-[576px]"
                      width={638}
                      height={538}
                      alt="Video 1"
                    />
                  </div>
                  {/* Image 2 */}
                  <div className="captured-moments-slider-card group max-h-[283px] w-full max-w-[638px] xl:max-w-full overflow-hidden">
                    <img
                      src={videoImg3.src}
                      className="h-full max-h-[283px] w-full max-w-[638px]  xl:max-w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      alt="Video 2"
                    />
                  </div>
                </div>
                <div className="flex flex-col max-w-[638px] w-full gap-3 lg:gap-[43px]">
                  <div className="flex h-auto justify-start gap-3 lg:gap-[43px]">
                    {/* Image 3 */}
                    <div className="captured-moments-slider-card group max-w-[358px] overflow-hidden xl:min-h-[413px]">
                      <img
                        src={sliderImage1.src}
                        className="h-full max-h-[413px] w-full max-w-[358px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        alt="Slider Image 1"
                      />
                    </div>
                    {/* Image 4 */}
                    <div className="captured-moments-slider-card group max-h-[413px] max-w-[358px] overflow-hidden">
                      <img
                        src={sliderImage3.src}
                        className="h-full max-h-[413px] w-full max-w-[358px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        alt="Slider Image 3"
                      />
                    </div>
                  </div>
                  {/* Image 5 */}
                  <div className="captured-moments-slider-card group max-h-[348px] w-full max-w-[759px] overflow-hidden">
                    <img
                      src={videoImg2.src}
                      className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-110 md:min-w-[759px]"
                      alt="Video 3"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="flex w-full max-w-[1440px] justify-center">
              <div className="flex w-full max-w-[1440px] flex-wrap justify-center gap-3 lg:gap-[43px] xl:flex-nowrap">
                <div className="flex w-full flex-col items-center gap-3 lg:gap-[40px]">
                  {/* Image 1 */}
                  <div className="captured-moments-slider-card group w-full max-w-[638px] xl:max-w-full overflow-hidden xl:min-h-[576px]">
                    <img
                      src={videoImg1.src}
                      className="h-full w-full object-cover lg:max-w-[638px] xl:max-w-full transition-transform duration-500 ease-in-out group-hover:scale-110 lg:min-h-[576px]"
                      width={638}
                      height={538}
                      alt="Video 1"
                    />
                  </div>
                  {/* Image 2 */}
                  <div className="captured-moments-slider-card group max-h-[283px] w-full max-w-[638px] xl:max-w-full overflow-hidden">
                    <img
                      src={videoImg3.src}
                      className="h-full max-h-[283px] w-full max-w-[638px]  xl:max-w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      alt="Video 2"
                    />
                  </div>
                </div>
                <div className="flex flex-col max-w-[638px] w-full gap-3 lg:gap-[43px]">
                  <div className="flex h-auto justify-start gap-3 lg:gap-[43px]">
                    {/* Image 3 */}
                    <div className="captured-moments-slider-card group max-w-[358px] overflow-hidden xl:min-h-[413px]">
                      <img
                        src={sliderImage1.src}
                        className="h-full max-h-[413px] w-full max-w-[358px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        alt="Slider Image 1"
                      />
                    </div>
                    {/* Image 4 */}
                    <div className="captured-moments-slider-card group max-h-[413px] max-w-[358px] overflow-hidden">
                      <img
                        src={sliderImage3.src}
                        className="h-full max-h-[413px] w-full max-w-[358px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        alt="Slider Image 3"
                      />
                    </div>
                  </div>
                  {/* Image 5 */}
                  <div className="captured-moments-slider-card group max-h-[348px] w-full max-w-[759px] overflow-hidden">
                    <img
                      src={videoImg2.src}
                      className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-110 md:min-w-[759px]"
                      alt="Video 3"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="absolute top-[50%] z-50 mx-5 flex w-full justify-between gap-[20px] xl:bottom-[80px] xl:right-4 xl:top-auto xl:justify-end">
            {/* Previous Button */}
            <div
              className="flex cursor-pointer rounded-full border-[2px] border-[#BBA887] bg-white px-4 py-6 xl:bg-transparent"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
            </div>

            {/* Next Button */}
            <div
              className="flex cursor-pointer rounded-full border-[2px] border-[#BBA887] bg-white px-4 py-6 xl:bg-transparent"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={arrowImg1.src} className="w-[30px]" alt="Next" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapturedMoments;
