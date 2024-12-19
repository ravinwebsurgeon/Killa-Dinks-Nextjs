'use client';
import CapturedMoments from 'components/homepage/CapturedMoments';
import NewsLetter from 'components/homepage/NewsLetter';
import { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import { urlFor } from '../../../sanity/lib/image';
import img1 from 'public/assets/ourWorkImg3.webp';
import img2 from 'public/assets/sliderImage.jpeg';
import img3 from 'public/assets/Popup.jpg'

const OurStory = () => {
  const [story, setOurStory] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "ourStory"]`);

        if (result.length > 0) {
          setOurStory(result);
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto flex w-full flex-col bg-[#FAF7EB]">
      <div className=" flex flex-col  items-center justify-center lg:mx-[20px] xl:mx-[43px]">
        <div className="flex w-full  flex-wrap justify-evenly gap-[30px] xl:flex-nowrap">
          <div className="relative max-h-[800px] lg:rounded-b-[50px] w-full overflow-hidden ">
            {story && (
              <img className="inset-0  w-full" src={urlFor(story[0]?.Image)?.width(1200)?.url()} />
            )}
            <div className="absolute left-[30%] sm:left-[40%] lg:left-16 top-[45%] text-4xl font-[500] text-[#FAF7EB] lg:text-[64px]">
              {' '}
              {story && story[0]?.text}
            </div>
          </div>
          {/* <div className="flex w-full max-w-[800px] flex-col gap-[20px] pt-4 lg:pt-24 ">
                        <div className=" text-4xl lg:text-[64px] font-[600] text-[#BBA887]"> {story&& story[0]?.text}</div>
                        <div className="w-full max-w-[700px]  text-[22px] font-[400] text-[#BBA887]">
                        {story&& story[0]?.subHeading}
                        </div>
                    </div>
                    <div className="z-30 flex">
                        <div className="relative xl:top-32 w-full xl:max-w-[450px] mb-3 xl:mb-0 rounded-xl bg-[#bba887] p-8  sm:text-[20px] text-[white]">
                        {story&& story[0]?.description}
                        </div>
                    </div> */}
        </div>
        <div className="z-30 flex">
          <div className="relative mb-3 w-full max-w-[600px] rounded-xl p-4 sm:p-8 text-center text-[#bba887] sm:text-[20px] xl:mb-0">
            {story && story[0]?.subHeading}
          </div>
        </div>
      </div>
      <div className="mx-auto  sm:mt-6 flex w-full max-w-[1200px] flex-col gap-4 sm:gap-16">
        <div className="flex  flex-col lg:flex-row justify-center  gap-8 p-4">
          <div className="flex max-w-[600px] flex-col gap-4 text-left  sm:text-xl text-[#bba887]">
            <div className=" text-2xl sm:text-4xl font-[500] text-[#bba887]"> Who We are </div>
            {story && story[0]?.otherDescription}
          </div>
          <div className="h-full w-full  overflow-hidden rounded-2xl">
            <img className="h-full w-full" src={img1.src} />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-center gap-8 p-4">
          <div className="h-full w-full overflow-hidden rounded-2xl">
            <img className="h-full w-full" src={img2.src} />
          </div>
          <div className="flex max-w-[600px] flex-col gap-4 text-left  sm:text-xl text-[#bba887]">
            <div className="text-2xl sm:text-4xl font-[500] text-[#bba887]"> Why Killa Dinks </div>
            {story && story[0]?.otherDescription}
          </div>
        </div>
        <div className="flex items-center flex-col lg:flex-row justify-center gap-8 p-4">
          <div className="flex max-w-[600px] flex-col gap-4 text-left  sm:text-xl text-[#bba887]">
            <div className="text-2xl sm:text-4xl font-[500] text-[#bba887]"> Whats Next? </div>
            {story && story[0]?.otherDescription}
          </div>
          <div className="h-full w-full  overflow-hidden rounded-2xl">
            <img className="h-full w-full" src={img3.src} />
          </div>
        </div>
      </div>

      <CapturedMoments />
      <NewsLetter />
    </div>
  );
};

export default OurStory;
