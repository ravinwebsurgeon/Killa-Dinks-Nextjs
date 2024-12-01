'use client';
import React, { useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import { Swiper, SwiperSlide } from 'swiper/react'; // Correct import for React
import arrowImg1 from '../../public/assets/Arrow1.png';
import arrowImg2 from '../../public/assets/Arrow2.png';
import ProductCard from './Card';


interface SliderProps {
  relatedProducts: any[]; // Correctly typed for array of products
}

const Slider: React.FC<SliderProps> = ({ relatedProducts }) => {
    const relatedRef = useRef<SwiperClass | any>(null)
  return (
   <div className='relative' > <Swiper
      spaceBetween={36} // Space between slides
      slidesPerView={'auto'} // Number of slides to show per view (you can make it responsive later)
      
      loop={true} 
      onSwiper={(swiper:SwiperClass) => {
        relatedRef.current = swiper;
    }}
      pagination={{ clickable: true }} // Enable pagination (dots)
      // Enable navigation arrows
      className="mySwiper   "
    >
      {relatedProducts.map((product: any) => (
    <div  > <SwiperSlide className='!w-[320px]' key={product.handle}>
          <ProductCard product={product} />
        </SwiperSlide>
      
          </div>
      ))}
    </Swiper>
    <div className=" absolute top-[50%] z-20 w-full flex  justify-between  items-center  " >
                <div
                    className="py-6  px-4  top-1/2 -translate-y-1/2 left-4 flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
                    onClick={() => relatedRef.current?.slidePrev()}
                >
                    <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
                </div>

                <div
                    className="py-6  px-4 top-1/2 -translate-y-1/2 right-4 flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
                    onClick={() => relatedRef.current?.slideNext()}
                >
                    <img src={arrowImg1.src} className="w-[30px]" alt="Next" />
                </div>
            </div>
</div>
  );
};

export default Slider;