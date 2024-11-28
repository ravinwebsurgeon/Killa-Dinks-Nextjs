"use client"
import { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import manImg from "../../public/assets/man.png";

import StarRating from 'components/StarRatings';
import { Swiper, SwiperSlide } from "swiper/react";
import arrowImg1 from '../../public/assets/Arrow1.png';
import arrowImg2 from '../../public/assets/Arrow2.png';

const Testimonials = () => {
    const swiperRef = useRef(null);
    const ourWorkRef = useRef<SwiperClass | any>(null);

    const [reviews, setReviews] = useState<any>(null);

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

    console.log("data", reviews);

    return (
        <div>
            {
                reviews && <div className="testimonials  max-w-[1440px]  w-full  mx-auto ">
                    <div className="py-[30px] pt-[50px] mx-5  relative">
                        <div className="]  ">
                            <div className="text-[24px] md:text-[40px] font-medium flex justify-center">
                                {" "}
                                Testimonials
                            </div>
                            <div className="text-[16px] md:text-[25px] flex justify-center">
                                See Why They Love Us
                            </div>
                        </div>
                        <div className="slider-container  my-[40px] ">
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
                                        spaceBetween: 20,
                                    },
                                    900: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    // // When the width is 768px or more (tablet and above)
                                    1400: {
                                        slidesPerView: 3, // Show 2 slides
                                        spaceBetween: 20, // Space between slides
                                    },
                                }}
                            >
                                {
                                    reviews.map((item: any, index: any) => {
                                        return (
                                            <SwiperSlide className='w-full' key={index}>
                                                <div className="border-2 rounded-[20px] min-h-[400px] flex flex-col justify-between ">
                                                    <div className='relative '>
                                                        <div className='flex w-full top-[-50px]  justify-center absolute'>
                                                            <img
                                                                src={manImg.src}
                                                                alt=""
                                                                className=" border-2 border-white imgx transform"
                                                            />
                                                        </div>
                                                        <div className=''>
                                                            <div className=" pt-[60px] ] flex justify-center">{item.reviewer.name}</div>
                                                            <div className='flex justify-center py-[10]'>
                                                                <StarRating rating={item.rating}  filled={'#FFE400'}/>
                                                            </div>
                                                            <div className="text-center flex justify-center mx-auto max-w-[300px]">
                                                                {item.body}
                                                            </div>
                                                            
                                                        </div>
                                                       
                                                    </div>
                                                    <button className="text-white my-[20px] test-button  button-read font-medium px-[45px] py-[15px] rounded-[20px] mx-auto flex bg-[#BBA887]">
                                                        Read More
                                                    </button>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })
                                }
                            </Swiper>

                            <div className=''>
                                <div className="flex justify-center gap-2 py-2" >
                                    <div
                                        className="py-6  px-4  flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
                                        onClick={() => ourWorkRef.current?.slidePrev()}
                                    >
                                        <img src={arrowImg2.src} className="w-[30px]" alt="Previous" />
                                    </div>

                                    <div
                                        className="py-6  px-4  flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer bg-white shadow-md"
                                        onClick={() => ourWorkRef.current?.slideNext()}
                                    >
                                        <img src={arrowImg1.src} className="w-[30px]" alt="Next" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

export default Testimonials