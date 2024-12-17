'use client'
import CapturedMoments from 'components/homepage/CapturedMoments';
import NewsLetter from 'components/homepage/NewsLetter';

// import { getMenu } from 'lib/shopify';
import img1 from '../../../public/assets/ourWorkImg4.webp';
import { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import { urlFor } from '../../../sanity/lib/image';

const OurStory =  () => {

    // const menu = await getMenu('main-menu');
    // const sidemenu = await getMenu('main-menu-1');
    // const footerData = await getMenu('footer');

    // ourStory
    const [story,setOurStory] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await client.fetch(`*[_type == "ourStory"]`);
            
            if (result.length > 0) {    
                    setOurStory(result)               
            }
          } catch (error) {
            console.error('Error fetching social gallery cards:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div className="mx-auto flex w-full flex-col pt-8 bg-[#FAF7EB] lg:pt-[47px]">
           
            <div className="justify-center md:mx-[20px] mx-4 flex xl:mx-[43px]">
                <div className="flex w-full max-w-[1920px] flex-wrap justify-evenly gap-[30px] xl:flex-nowrap">
                    <div className="flex w-full max-w-[800px] flex-col gap-[20px] pt-4 lg:pt-24 ">
                        <div className=" text-4xl lg:text-[64px] font-[600] text-[#BBA887]"> {story&& story[0]?.text}</div>
                        <div className="w-full max-w-[700px]  text-[22px] font-[400] text-[#BBA887]">
                        {story&& story[0]?.subHeading}
                        </div>
                    </div>
                    <div className="z-30 flex">
                        <div className="relative xl:top-32 w-full xl:max-w-[450px] mb-3 xl:mb-0 rounded-xl bg-[#bba887] p-8  sm:text-[20px] text-[white]">
                        {story&& story[0]?.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden bg-black">
                {story && <img className="inset-0 w-full opacity-70" src={urlFor(story[0]?.Image)?.width(1200)?.url()} />}
            </div>
            <div className="flex justify-center bg-[#bba887]">
                <div className="max-w-[1440px] p-8 lg:p-16 lg:py-20 text-center text-[18px] lg:text-[24px]  lg:leading-loose text-white">
                {story&& story[0]?.otherDescription}
                </div>
            </div>
            <CapturedMoments />
            <NewsLetter />
        </div>
    );
};

export default OurStory;











