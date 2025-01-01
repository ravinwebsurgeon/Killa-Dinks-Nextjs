'use client';
import { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import manImg from '../../public/assets/man.png';

import StarRating from 'components/StarRatings';
import client from '../../sanity/lib/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrowImg1 from '../../public/assets/Arrow1.png';
import arrowImg2 from '../../public/assets/Arrow2.png';
import { urlFor } from '../../sanity/lib/image';

const Testimonials = ({sliderClass='',containerClass=''}:{ sliderClass:any,containerClass:any}) => {
  const swiperRef = useRef(null);
  const ourWorkRef = useRef<SwiperClass | any>(null);

  const [reviews, setReviews] = useState<any>(null);
  const [testimonial, setTestimonial] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "testimonials"]`);
        if (result?.length > 0) {
        
          setReviews(result[0].reviews)
          setTestimonial(result);
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   const apiUrl = '/api/judgme';
  //   const fetchReviews = async () => {
  //     try {
  //       const response = await fetch(apiUrl);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch reviews');
  //       }

  //       const data = await response.json();
  //       setReviews(data?.reviews);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchReviews();
  // }, []);

  const [description, setDescription] = useState<any>(true);
  const truncateText = (text: string, maxWords: number = 50) => {
    const words = text?.split(' ');
    if (words?.length > maxWords) {
      return words.slice(0, maxWords)?.join(' ') + '...';
    }
    return text;
  };
  const showButton = (text: string, maxWords: number = 50) => {
    const words = text?.split(' ');
    if (words?.length > maxWords) {
      return true;
    }
    return false;
  };

  return (
    <div>
      {reviews && (
        <div className="testimonials mx-auto w-full max-w-[1440px]">
          <div className={`relative mx-5 pt-[40px] md:pt-[80px] ${containerClass}`}>
            <div className="]">
              <div className="flex justify-center text-[24px] font-medium md:text-[40px]">
                
                {testimonial && <>{testimonial[0]?.text && testimonial[0]?.text}</>}
              </div>
              <div className="flex justify-center text-black/50 text-[16px] md:text-[25px]">
                {testimonial &&<>{testimonial[0]?.subHeading && testimonial[0]?.subHeading}</>}
              </div>
            </div>

            <div className={`slider-container my-[40px] mb-[40px] mt-[10px] md:mb-[80px] ${sliderClass}`}>
              {
                reviews && <Swiper
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
                    spaceBetween: 53 // Space between slides
                  }
                }}
              >
                
                {reviews?.map((item: any, index: any) => {
                  return (
                    // <>{item?.Name}</>
                    <SwiperSlide className="w-full" key={index}>
                      <div className="flex min-h-[458px]  flex-col justify-between rounded-[20px] border-2">
                        <div className="relative">
                          <div className="absolute top-[-67px] !h-[146px]  flex w-full justify-center">
                            <img
                              src={urlFor(item?.image.asset)?.width(200).url() }
                              alt=""
                              className="imgx object-cover h-full bg-white transform border-[4px] border-white"
                            />
                          </div>
                          <div className="flex flex-col justify-center gap-[30px] pt-[113px]">
                            <div className="flex flex-col justify-center gap-[10px]">
                              <div className="testimonial-review-name flex justify-center gap-[10px] text-[30px] font-[500]">
                                {item?.Title}
                              </div>
                              <div className="flex justify-center">
                                <StarRating rating={5} filled={'#FFE400'} />
                              </div>
                            </div>
                            <div className='flex flex-col gap-1' >
                            <div className="mx-4 flex  items-center  justify-center px-2 text-center md:mx-auto xl:max-w-[300px]">
                              {/* {item?.description ? <>{truncateText(item?.body, 30)}</> : item?.body} */}
                             { description ? <>{truncateText(item?.Description, 30)}</> : item?.Description} 
                            </div>
                            <div className='flex justify-center' >
                            -  {item?.Reviewer}
                            </div>
                            </div>
                          </div>
                        </div>

                        {showButton(item?.Description, 30) ? (
                          <button
                            onClick={() => setDescription(!description)}
                            className="test-button button-read mx-auto my-[20px] flex sm:text-[20px] rounded-[20px] bg-[#BBA887] px-[45px] py-[15px] font-medium text-white"
                          >
                            {description ? 'Read More' : 'Read Less'}
                          </button>
                        ) : null}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              }

              <div className="">
                <div className="flex justify-center gap-5 py-2">
                  <div
                    className="flex cursor-pointer items-center justify-center rounded-full border-[2px] border-[#BBA887] px-4 py-6 "
                    onClick={() => {
                      ourWorkRef?.current?.slidePrev();
                      setDescription(true);
                    }}
                  >
                    <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
                  </div>

                  <div
                    className="flex cursor-pointer items-center justify-center rounded-full border-[2px] border-[#BBA887] px-4 py-6 "
                    onClick={() => {
                      ourWorkRef.current?.slideNext();
                      setDescription(true);
                    }}
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
