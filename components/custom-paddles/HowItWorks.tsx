'use client'
import React from 'react';
import OurWork from '../homepage/OurWork';
import { useRouter } from 'next/router';
import Link from 'next/link';

const data = ['25 Paddles Minimum', '14+ Day Lead Time', 'Free Paddle Design'];

const workData = [
  {
    title: 'Inquire',
    data: 'Select the quantity of paddles you would like and submit any logo or artwork files you may have.'
  },
  {
    title: 'Design',
    data: 'The Killa Dink Design Team will work with you to create 2-3 digital mockups within 48 hours.'
  },
  {
    title: 'Deliver',
    data: 'Your custom paddles will be shipped straight to your front door, ready to enjoy!'
  }
];

const HowItWorks = () => {
   
    
  return (
    <div className="flex w-full flex-col justify-center gap-8 bg-[#faf7eb]">
      <div className="mb-8 flex w-full">
        <div className="flex w-full flex-col items-center justify-center gap-2 sm:gap-4 border-b border-[#BBA887] py-8 sm:flex-row">
          {data.map((item: any, index) => (
            <div className="flex items-center gap-4" key={index}>
              <div className="text-xl">{item} </div>
              {index < data.length - 1 && (
                <div className="hidden h-2 w-2 rounded-full bg-[#BBA887] sm:flex" />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-4 flex flex-col items-center justify-center gap-8 sm:gap-16 lg:mx-[43px]">
        <div className="flex flex-col items-center justify-center gap-6 sm:pt-8">
          <div className="text-3xl font-[500] md:text-[40px]">How it Works</div>
          <div className="w-full max-w-[1000px] text-center md:text-xl">
            Whether it's a brand collaboration, corporate gift or a fun way to celebrate a
            milestone, we provide a fast and easy custom pickleball paddle experience.
          </div>
        </div>
        <div className="w-full flex flex-col justify-center  max-w-[1440px]">
          <div className="hidden h-[1px] w-full bg-[#BBA887] sm:flex" />
          <div className="grid w-full sm:grid-cols-3">
            {workData?.map((item: any, index: number) => (
              <div className="relative p-3 pt-8" key={index}>
                <div className="flex gap-2">
                  <div className="-left-1 top-0 mt-1 h-min flex  items-center rounded-full border-[#faf7eb] bg-[#BBA887] px-2  text-xl sm:absolute sm:-top-7 sm:border-[10px]">
                    {index + 1}
                  </div>
                  <div>
                    <div className="text-2xl font-[500] text-[#BBA887]">{item.title}</div>{' '}
                    <div className="max-w-[300px] text-black/70">{item.data}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href={'/pages/custom-paddles'} className='bg-[#BBA887]  mt-6  px-6 py-4 text-xl rounded-lg text-white  mx-auto'  >Get Started</Link>
        </div>
      </div>
      <div className="bg-[#faf7eb] pb-16">
        <OurWork />
      </div>
    </div>
  );
};

export default HowItWorks;
