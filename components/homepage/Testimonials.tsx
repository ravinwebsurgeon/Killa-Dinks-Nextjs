"use client"
import { useRef } from 'react';
import { Swiper as SwiperClass } from 'swiper';
import manImg from "../../public/assets/man.png";

import { Swiper, SwiperSlide } from "swiper/react";
import arrowImg1 from '../../public/assets/Arrow1.png';
import arrowImg2 from '../../public/assets/Arrow2.png';

const Testimonials = () => {
    const swiperRef = useRef(null);
    const ourWorkRef = useRef<SwiperClass | any>(null);
  return (
    <div>
            <div className="testimonials  max-w-[1440px]  w-full  mx-auto ">
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
                    <div className="slider-container   my-[40px] ">
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
                                900:{
                                    slidesPerView: 2, 
                                    spaceBetween: 20, 
                                },
                                // // When the width is 768px or more (tablet and above)
                                1400: {
                                    slidesPerView:3, // Show 2 slides
                                    spaceBetween: 20, // Space between slides
                                },
                                // // When the width is 1024px or more (desktop and above)
                                // 1024: {
                                //     slidesPerView: 3, // Show 3 slides
                                //     spaceBetween: 20, // Space between slides
                                // },
                                // Activates center mode

                            }} 
                            // className='flex justify-start'
                             >

                            <SwiperSlide className='  w-full '>
                            <div className="border-2   rounded-[20px]">
                                    {/* <div className="flex justify-center">
                                       
                                    </div> */}
                                    <div className='relative  '>
                                   <div className='flex w-full top-[-50px]  justify-center absolute'>
                                   <img
                                            src={manImg.src}
                                            alt=""
                                            className="   border-2  border-white imgx transform"
                                        />
                                   </div>
                                   <div className=' ' >
                                   <div className=" pt-[60px] ] flex justify-center">John Smith</div>
                                    <div className="flex justify-center gap-2 py-[10px]">
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-center flex justify-center mx-auto max-w-[300px]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry
                                        standard dummy text ever since.
                                    </div>
                                    <button className="text-white my-[20px] test-button  button-read font-medium px-[45px] py-[15px] rounded-[20px] mx-auto flex bg-[#BBA887]">
                                        Read More
                                    </button>
                                   </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='  w-full '>
                            <div className="border-2   rounded-[20px]">
                                    {/* <div className="flex justify-center">
                                       
                                    </div> */}
                                    <div className='relative  '>
                                   <div className='flex w-full top-[-50px]  justify-center absolute'>
                                   <img
                                            src={manImg.src}
                                            alt=""
                                            className="   border-2  border-white imgx transform"
                                        />
                                   </div>
                                   <div className=' ' >
                                   <div className=" pt-[60px]  flex justify-center">John Smith</div>
                                    <div className="flex justify-center gap-2 py-[10px]">
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-center flex justify-center mx-auto max-w-[300px]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry
                                        standard dummy text ever since.
                                    </div>
                                    <button className="text-white my-[20px] test-button  button-read font-medium px-[45px] py-[15px] rounded-[20px] mx-auto flex bg-[#BBA887]">
                                        Read More
                                    </button>
                                   </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='  w-full '>
                            <div className="border-2   rounded-[20px]">
                                    {/* <div className="flex justify-center">
                                       
                                    </div> */}
                                    <div className='relative  '>
                                   <div className='flex w-full top-[-50px]  justify-center absolute'>
                                   <img
                                            src={manImg.src}
                                            alt=""
                                            className="   border-2  border-white imgx transform"
                                        />
                                   </div>
                                   <div className=' ' >
                                   <div className=" pt-[60px]  flex justify-center">John Smith</div>
                                    <div className="flex justify-center gap-2 py-[10px]">
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-center flex justify-center mx-auto max-w-[300px]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry
                                        standard dummy text ever since.
                                    </div>
                                    <button className="text-white my-[20px] test-button  button-read font-medium px-[45px] py-[15px] rounded-[20px] mx-auto flex bg-[#BBA887]">
                                        Read More
                                    </button>
                                   </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='  w-full '>
                            <div className="border-2   rounded-[20px]">
                                    {/* <div className="flex justify-center">
                                       
                                    </div> */}
                                    <div className='relative  '>
                                   <div className='flex w-full top-[-50px]  justify-center absolute'>
                                   <img
                                            src={manImg.src}
                                            alt=""
                                            className="   border-2  border-white imgx transform"
                                        />
                                   </div>
                                   <div className=' ' >
                                   <div className=" pt-[60px]  flex justify-center">John Smith</div>
                                    <div className="flex justify-center gap-2 py-[10px]">
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-center flex justify-center mx-auto max-w-[300px]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry
                                        standard dummy text ever since.
                                    </div>
                                    <button className="text-white my-[20px] test-button  button-read font-medium px-[45px] py-[15px] rounded-[20px] mx-auto flex bg-[#BBA887]">
                                        Read More
                                    </button>
                                   </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className='  w-full '>
                            <div className="border-2   rounded-[20px]">
                                    {/* <div className="flex justify-center">
                                       
                                    </div> */}
                                    <div className='relative  '>
                                   <div className='flex w-full top-[-50px]  justify-center absolute'>
                                   <img
                                            src={manImg.src}
                                            alt=""
                                            className="   border-2  border-white imgx transform"
                                        />
                                   </div>
                                   <div className=' ' >
                                   <div className=" pt-[60px]  flex justify-center">John Smith</div>
                                    <div className="flex justify-center gap-2 py-[10px]">
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                        <svg
                                            width="23"
                                            height="22"
                                            viewBox="0 0 23 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.5004 0L14.217 8.36089L23.0082 8.3609L15.896 13.5282L18.6126 21.8891L11.5004 16.7218L4.38819 21.8891L7.10481 13.5282L-0.00739288 8.3609L8.78377 8.36089L11.5004 0Z"
                                                fill="#FFE400"
                                            />
                                        </svg>
                                    </div>
                                    <div className="text-center flex justify-center mx-auto max-w-[300px]">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry
                                        standard dummy text ever since.
                                    </div>
                                    <button className="text-white my-[20px] test-button  button-read font-medium px-[45px] py-[15px] rounded-[20px] mx-auto flex bg-[#BBA887]">
                                        Read More
                                    </button>
                                   </div>
                                    </div>
                                </div>
                            </SwiperSlide>
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
        </div>
  )
}

export default Testimonials