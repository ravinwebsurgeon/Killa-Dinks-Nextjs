'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import {urlFor} from '../../../sanity/lib/image'

 function Ambassador() {

  const [ambassadorData,setAmbassadorData] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "ambassador"]`);
        
        if (result.length > 0) {    
               setAmbassadorData(result)           
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mx-auto flex w-full flex-col pt-8 lg:pt-16 pb-8 lg:pb-16 gap-8 lg:gap-16 bg-[#FAF7EB] ">
      
      <div className="text-center text-2xl tracking-[1px] font-[600] lg:text-5xl text-[#bba887]">{ambassadorData && ambassadorData[0]?.text}</div>
      <div className="flex justify-center flex-col gap-5 items-center bg-[#bba887] py-10 lg:py-20">
        <div className="max-w-[1400px]  px-3  text-[16px] text-center text-white lg:text-[24px] lg:leading-loose">
         { ambassadorData && ambassadorData[0]?.description}
        </div>
        {ambassadorData &&
        <Link href={ambassadorData[0]?.buttonLink} className='bg-white cursor-pointer text-[#bba887]  font-medium rounded-lg  p-3 text-2xl'>
          {ambassadorData[0]?.buttonLabel}
        </Link>
      }

      {
        ambassadorData &&
        <div className='flex flex-col gap-3' >
          <div className='text-white  underline-offset-1 text-sm'>{ambassadorData[0]?.textfield}</div>
          <Link href={ambassadorData[0].loginbuttonLink} className='text-white underline text-center' >{ambassadorData[0]?.loginbuttonLabel}</Link>
        </div>
      }
        
      </div>
      <div className=' place-content-center ambassador-card  gap-4' >
      {
        ambassadorData &&
        ambassadorData[0]?.images?.map((item:any)=>(
          <div key={item._key} className=' overflow-hidden rounded-lg min-h-[250px] max-h-[250px]' >
          
           <img alt='' className='w-full object-cover h-full'  height={400} width={400} src={urlFor(item)?.width(800)?.url()} />

        </div>
        )) 
      }

      </div>
    </div>
  );
}

export default Ambassador;
