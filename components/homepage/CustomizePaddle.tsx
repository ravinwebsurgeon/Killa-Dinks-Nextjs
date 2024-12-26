'use client'
import React, { useEffect, useState } from 'react';
import play1 from '../../public/assets/badmitionPlayImg.png';
import icon1 from '../../public/assets/icon1.png';
import icon2 from '../../public/assets/icon2.png';
import icon3 from '../../public/assets/icon3.png';
import client from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';
import Link from 'next/link';
;
const CustomizePaddle = () => {

    const [designData,setDesignData] =useState<any>({})

 

    // perfectPaddle
     useEffect(() => {
        const fetchData = async () => {
          try {
            const result = await client.fetch(`*[_type == "perfectPaddle"]`);
            if (result.length > 0) {
                    setDesignData(result)                    
            }
          } catch (error) {
            console.error('Error fetching social gallery cards:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div>
    <div className="perfect-paddle mt-[30px]">
        <div className="text-center mt-4 mb-8 flex flex-col gap-1 md:gap-0 mx-4 md:mt-[70px] md:mb-12">
            <div className=" text-[24px] md:text-[40px] font-medium text-black">
                {designData ? designData[0]?.text :null}
            </div>
            <div className="text-[16px] md:text-[25px] text-black/50">
            {designData ? designData[0]?.subHeading :null}
            </div>
        </div>

        {/* Responsive flex container */}
        <div className="flex flex-col mx-4 md:mx-[20px] xl:flex-row md:gap-8 justify-center items-center space-y-8 md:space-y-0 md:space-x-12">

            {/* Image Section */}
            <div className="flex-shrink-0  ">
              {designData[0]?.image &&   <img
                    src={urlFor(designData[0]?.image)?.width(800)?.url()}
                    alt="Paddle Design"
                    className="w-full md:max-w-[640px] h-auto md:h-[665px] object-cover"
                />}
            </div>

            {/* Vertical Divider for medium screens */}
            <div className="w-[1px] h-auto md:h-[640px] bg-black/50 xl:block hidden"></div>

            {/* Step Sections */}
            <div className="flex flex-col space-y-10 max-w-[640px] mx-auto md:space-y-12">
                {/* Step 1 */}
                {
                    designData[0]?.images &&  designData[0]?.images?.map((item:any,index:any)=>(
                        <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                        <img
                            src={urlFor(item?.image)?.width(100)?.url()}
                            alt="Icon 1"
                            className="w-[77px] h-[77px] hidden md:block"
                        />
                    </div>
                    <div>
                        <div className="font-medium text-[18px] md:text-[26px]">
                            {index+1}. {item?.headline}
                        </div>
                        <div className="text-gray-600 w-full md:w-[380px] text-[16px]  md:text-[20px] font-[400]">
                           {item?.description}
                        </div>
                    </div>
                </div>
                    ))
                }

                {/* Customize Now Button */}
                <Link href={'/pages/custom-paddles'} className="text-white bg-[#BBA887] text-center rounded-[20px] text-[18px] md:text-[24px] font-medium py-2 w-[295px] mx-auto">
                    {designData[0] && designData[0].buttonLabel }
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default CustomizePaddle