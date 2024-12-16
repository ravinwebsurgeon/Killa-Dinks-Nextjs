'use client';
import { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import manImg from '../../public/assets/man.png';

import StarRating from 'components/StarRatings';
import client from '../../sanity/lib/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowImg1 from '../../public/assets/Arrow1.png';
import arrowImg2 from '../../public/assets/Arrow2.png';

const Testimonials = () => {
  const swiperRef = useRef(null);
  const ourWorkRef = useRef<SwiperClass | any>(null);

  const [reviews, setReviews] = useState<any>(null);
  const [testimonial, setTestimonial] = useState<any>();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "testimonials"]`);
        if (result.length > 0) {
          setTestimonial(result);
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const apiUrl = '/api/judgme';
    const fetchReviews = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch reviews');
        }

        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

  
  const truncateText = (text: string, maxWords: number = 50) => {
    const words = text.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  };


  return (
    <div>
      {reviews && (
        <div className="testimonials mx-auto w-full max-w-[1440px]">
          <div className="relative mx-5 pt-[40px] md:pt-[80px]">
            <div className="]">
              <div className="flex justify-center text-[24px] font-medium md:text-[40px]">
                {' '}
                {testimonial[0]?.text && testimonial[0]?.text}
              </div>
              <div className="flex justify-center text-[16px] md:text-[25px]">
              {testimonial[0]?.subHeading && testimonial[0]?.subHeading}
              </div>
            </div>
            <div className="slider-container my-[40px] mb-[40px] mt-[10px] md:mb-[80px]">
              <Swiper
                spaceBetween={0}
                slidesPerView={3}
                loop={true}
                ref={ourWorkRef}
                centeredSlides={true}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => {
                  ourWorkRef.current = swiper;
                }}
                breakpoints={{
                  100: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  900: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  // // When the width is 768px or more (tablet and above)
                  1400: {
                    slidesPerView: 3, // Show 2 slides
                    spaceBetween: 20 // Space between slides
                  }
                }}
              >
                {reviews.map((item: any, index: any) => {
                  return (
                    <SwiperSlide className="w-full" key={index}>
                      <div className="flex min-h-[400px] flex-col justify-between rounded-[20px] border-2">
                        <div className="relative">
                          <div className="absolute top-[-47px] flex w-full justify-center">
                            <img
                              src={manImg.src}
                              alt=""
                              className="imgx transform border-2 border-white"
                            />
                          </div>
                          <div className=" flex flex-col pt-[63px] justify-center gap-[30px]">
                            <div className='flex flex-col gap-[10px] justify-center' >
                              <div className="flex justify-center testimonial-review-name gap-[10px] font-[500] text-[30px]">
                                {item.reviewer.name}
                              </div>
                              <div className="flex justify-center">
                                <StarRating rating={item.rating} filled={'#FFE400'} />
                              </div>
                            </div>
                            <div className="mx-4 flex justify-center text-center md:mx-auto xl:max-w-[300px]">
                            {truncateText(item.body, 30)}
                            </div>
                          </div>
                        </div>
                        <button className="test-button button-read mx-auto my-[20px] flex rounded-[20px] bg-[#BBA887] px-[45px] py-[15px] font-medium text-white">
                          Read More
                        </button>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="">
                <div className="flex justify-center gap-2 py-2">
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
        </div>
      )}
    </div>
  );
};

export default Testimonials;