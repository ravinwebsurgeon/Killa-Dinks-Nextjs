'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import client from '../../../sanity/lib/client';
import { urlFor } from '../../../sanity/lib/image';
import img1 from 'public/assets/heart.png';
import img2 from 'public/assets/wallet.png';
import img3 from 'public/assets/gift.png';
import topborder from 'public/assets/topborder.svg';
import bottomborder from 'public/assets/bottomborder.svg';
import program from 'public/assets/affiliate-program.webp';

function Ambassador() {
  const [ambassadorData, setAmbassadorData] = useState<any>();

  const commitmentData = [
    {
      title: 'Age',
      desc: 'You must be 18 or older to join.'
    },
    {
      title: 'Location',
      desc: 'This program is currently open only to U.S. Residents only.'
    },
    {
      title: 'Commitment',
      desc: 'Be genuine in sharing your love for Oceanfoam. Our ideal Ambassadors are those who truly care about a sustainable lifestyle and believe in making choices that positively impact the planet.'
    }
  ];

  const data = [
    {
      img: img1,
      title: 'Join The Killa Dinks Community',
      data: 'Share your passion about Killa DInks and the impact of eco-conscious products in daily life with a unique 15% off Ambassador discount link and code.'
    },
    {
      img: img2,
      title: 'Make Money',
      data: "Earn commission on every sale made through your unique Ambassador link. It's easy to share and your efforts directly support our mission."
    },
    {
      img: img3,
      title: 'Get Exclusive Gear',
      data: 'Unlock rewards as you reach milestones from exclusive discounts to special event invitations, each level of participation opens up fresh opportunities.'
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "ambassador"]`);

        if (result.length > 0) {
          setAmbassadorData(result);
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="relative mx-auto flex w-full flex-col bg-[#FAF7EB] pb-8 pt-8 lg:pb-16 lg:pt-16">
      <div className="absolute -top-12 flex w-full justify-center text-center text-2xl font-[600] tracking-[1px] text-[#FAF7EB] lg:text-5xl xl:-top-[10%]">
        {ambassadorData && ambassadorData[0]?.text}
      </div>

      <div className="mx-4 flex flex-col gap-8 text-center text-xl font-[500] tracking-[1px] text-[#bba887] md:text-4xl">
        <div>Introducing the Killa Dinks Affiliate Program!</div>
        <div className="mx-auto max-w-[800px] text-center text-sm font-normal md:text-base">
          Are you passionate about pickleball and want to be a part of a unique pickleball
          community? Join us in spreading the love for the sport by becoming a Killa Dinks
          Ambassador. Our affiliate program is your opportunity to be a brand advocate and earn
          while doing what you love.
        </div>
      </div>
      <div>
        <div>
          <img src={topborder.src} />
        </div>

        <div className="flex flex-col items-center justify-center gap-5 bg-[#bba887] py-10 lg:py-0">
          <div className="flex max-w-[1200px] flex-col gap-8 px-3 text-center text-[16px] text-white">
            <div className="text-xl font-medium tracking-wide sm:text-3xl">
              What is the Killa Dinks Ambassador Program?
            </div>
            <div className="text-sm sm:text-base">
              {ambassadorData && ambassadorData[0]?.description}
            </div>
          </div>
          <div className="grid w-full max-w-[1440px] sm:grid-cols-3 sm:justify-items-center">
            {data?.map((item: any, index: number) => (
              <div className="p-3 pt-8" key={index}>
                <div className="flex flex-col gap-2">
                  <div className="mx-auto h-12 w-12">
                    <img src={item?.img.src} className="h-full w-full" />
                  </div>
                  <div className="text-center text-xl font-[500] text-white">{item.title}</div>{' '}
                  <div className="text-center text-white/70 sm:max-w-[300px]">{item.data}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={bottomborder.src} />
        </div>
      </div>
      <div className="mx-4 flex flex-col items-center">
        <div className="flex flex-col gap-3 text-center text-4xl font-[500] text-[#bba887]">
          <div className="text text-center text-xl tracking-[1px] sm:text-3xl">
            Levels & Rewards
          </div>
          <div className="mx-auto max-w-[800px] text-center text-sm font-normal sm:text-xl">
            Our Ambassador Program is structured in levels, giving you access to bigger rewards and
            perks as your impact grows. The more you share, the more you can earn and experience:
          </div>
        </div>

        <div className="py-8">
          <img src={program.src} />
        </div>
      </div>

      <div className="mx-4 my-8 flex flex-col gap-4">
        <div className="mx-auto max-w-[800px] text-center text-lg font-normal text-[#bba887]">
          To keep things straightforward, we ask that Ambassadors meet a few basic criteria:
        </div>
        <ul className="mx-auto flex max-w-[660px] flex-col gap-1 px-10 text-black/70">
          {commitmentData?.map((item) => (
            <li className="list-disc text-sm">
              <span className="text-base font-medium text-black">{item.title}</span>: {item.desc}
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col mx-4 gap-4 my-8'>
      <div className="flex w-full justify-center text-[#bba887] font-[500] text-2xl sm:text-4xl"> Ready to Join?</div>
      <div className="flex w-full text-center justify-center text-black/70">
        Click below to apply to be an Oceanfoam Ambassador and let’s start creating a more
        sustainable, beautiful world together.
      </div>

      {ambassadorData && (
        <div className="flex w-full justify-center">
          <Link
            href={ambassadorData[0]?.buttonLink}
            target="_blank"
            className="cursor-pointer rounded-lg bg-[#bba887] p-3 font-medium text-white sm:text-2xl"
          >
            {ambassadorData[0]?.buttonLabel}
          </Link>
        </div>
      )}

      {ambassadorData && (
        <div className="flex flex-col gap-3">
          <div className="text-center text-sm underline-offset-1">
            {ambassadorData[0]?.textfield}
          </div>
          <Link
            target="_blank"
            href={ambassadorData[0].loginbuttonLink}
            className="text-center  underline"
          >
            {ambassadorData[0]?.loginbuttonLabel}
          </Link>
        </div>
      )}
      </div>
      <div className="ambassador-card mt-4 place-content-center gap-4">
        {ambassadorData &&
          ambassadorData[0]?.images?.map((item: any) => (
            <div key={item._key} className="max-h-[250px] min-h-[250px] overflow-hidden rounded-lg">
              <img
                alt=""
                className="h-full w-full object-cover"
                height={400}
                width={400}
                src={urlFor(item)?.width(800)?.url()}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Ambassador;
