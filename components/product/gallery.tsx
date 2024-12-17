'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { GridTileImage } from 'components/grid/tile';
import { useProduct, useUpdateURL } from 'components/product/product-context';
import Image from 'next/image';
import arrowImg1 from '../../public/assets/Arrow1.png';
import arrowImg2 from '../../public/assets/Arrow2.png';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from 'react';

export function Gallery({ images }: { images: { src: string; altText: string }[] }) {
  const { state, updateImage } = useProduct();
  const updateURL = useUpdateURL();
  const imageIndex = state.image ? parseInt(state.image) : 0;
  const galleryRef = useRef<SwiperClass | any>(null);

  const nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0;
  const previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth >= 1280);
    };

    // Initial check
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const buttonClassName =
    'py-6  px-4  top-1/2 -translate-y-1/2 left-4 flex items-center justify-center rounded-full border-[2px] border-[#BBA887] cursor-pointer  shadow-md';

  return (
    <form className="flex flex-col gap-4
   
     ">
      <div className='flex w-full flex-col    xl:flex-row-reverse gap-4' >
      <div className="flex w-full flex-col max-h-[625px] gap-12">
        <div className="relative aspect-square h-full  w-full overflow-hidden rounded-2xl border-[1px] border-[#bba887] bg-white">
          {images[imageIndex] && (
            <Image
              className="h-full w-full rounded-2xl object-contain p-5"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              alt={images[imageIndex]?.altText as string}
              src={images[imageIndex]?.src as string}
              priority={true}
            />
          )}
        </div>
        
      </div>

     
      {images.length > 1 ? (
        <ul className=" flex  max-h-[625px] max-w-full w-full xl:justify-start xl:flex-col  sm:justify-center overflow-x-auto overflow-y-hidden xl:overflow-y-auto  xl:max-w-[170px]  gap-2    lg:mb-0">
          {images.map((image, index) => {
            const isActive = index === imageIndex;

            return (
              <li key={image.src} className="sm:min-h-[150px] h-full max-h-[150px] max-w-[150px] w-full">
                <button
                  formAction={() => {
                    const newState = updateImage(index.toString());
                    updateURL(newState);
                  }}
                  aria-label="Select product image"
                  className="h-full w-full"
                >
                  <GridTileImage
                    alt={image.altText}
                    src={image.src}
                    width={80}
                    height={80}
                    active={isActive}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
      </div>
     <div className=' hidden xl:flex pt-10 xl:pl-[150px]' >
     {images.length > 1 ? (
          <div className="flex w-full  justify-center">
            <div className="flex gap-4">
              <button
                formAction={() => {
                  const newState = updateImage(previousImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Previous product image"
                className={buttonClassName}
              >
                <img src={arrowImg2.src} className="w-[30px] " alt="Previous" />
              </button>

              <button
                formAction={() => {
                  const newState = updateImage(nextImageIndex.toString());
                  updateURL(newState);
                }}
                aria-label="Next product image"
                className={buttonClassName}
              >
                <img src={arrowImg1.src} className="w-[30px]" alt="Previous" />
              </button>
            </div>
          </div>
        ) : null}
     </div>
    </form>
  );
}
