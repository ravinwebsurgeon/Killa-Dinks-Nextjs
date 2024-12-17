'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link from next
import { usePathname } from 'next/navigation';
import client from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';
import b1 from '../../public/assets/Badge1.png';
import b2 from '../../public/assets/Badge2.png';
import b3 from '../../public/assets/Badge3.png';
import b4 from '../../public/assets/Badge4.png';
import b5 from '../../public/assets/Badge5.png';
import facebook from '../../public/assets/facebook.png';
import instagram from '../../public/assets/instagram.png';
import logo from '../../public/assets/logo.png';
import twitter from '../../public/assets/twitter.png';

const Footerx = () => {
  const [footerData, setFooterData] = useState<any>({});

  //name: 'footer',
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == 'footer']`);
        if (result.length > 0) {
          setFooterData(result);
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);

  const router = usePathname();
  return (
    <footer className={`${router.includes('/sanity') ? 'hidden' : ''}`}>
      <section className="footer-container w-full flex-col items-center">
        <div className="w-full flex-col bg-[#BBA887] px-4 text-white">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col lg:flex lg:flex-row lg:pt-[40px]">
            <div className="w-full">
              {
                footerData[0]?.logo && <img src={urlFor(footerData[0]?.logo)?.width(100)?.url()} alt="" className="mx-auto py-[10px] lg:mx-0 lg:py-0" />
              }
              <div className="w-full py-[10px] pr-[10px] text-center lg:max-w-[320px] lg:text-left">
                {footerData ? footerData[0]?.description : ''}
              </div>
            </div>

            <div className="flex w-full flex-row justify-between">
              <div className="flex w-full justify-between gap-4 py-[20px] pb-[30px] md:pb-[20px]">
                <div className="text-start">
                  <span className="uppercase">
                    {footerData && footerData[0]?.primaryMenu?.heading}
                  </span>
                  <div className="mt-2 flex flex-col gap-[5px] lg:mt-[26px]">
                    {footerData &&
                      footerData[0]?.primaryMenu?.links?.map((item: any,index:number) => (
                        <Link key={index} href={item?.url||'#'}>
                          <div className="cursor-pointer text-start">{item?.title}</div>
                        </Link>
                      ))}
                  </div>
                </div>

                <div className="text-start">
                  <span className="uppercase"> {footerData && footerData[0]?.secondaryMenu?.heading}</span>
                  <div className="mt-2 flex flex-col gap-[5px] lg:mt-[26px]">

                    {
                      footerData && footerData[0]?.secondaryMenu?.links?.map((item:any,index:number)=>(
                        <Link key={index} href={item?.url||'#'}>
                        <div className="cursor-pointer text-start">{item?.title}</div>
                      </Link>
                      ))
                    }
                    
                    
                  </div>
                </div>

                <div className="flex flex-col justify-between text-start">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <span className="uppercase">{footerData && footerData[0]?.tertiaryMenu?.heading}</span>
                      <div className="flex flex-col justify-between">
                        
                        <div className="mt-2 flex flex-col gap-[5px] lg:mt-[26px]">
                        {
                          footerData && footerData[0]?.tertiaryMenu?.links?.map((item:any,index:number)=>(
                            <Link key={index} href={item?.url||'#'}>
                        <div className="cursor-pointer text-start">{item?.title}</div>
                      </Link>
                          ))
                        }
                         
                        </div>
                      </div>
                    </div>
                    <div className="hidden justify-between gap-3 lg:flex">
                      {
                        footerData[0]?.socialMedia && footerData[0]?.socialMedia?.map((item:any,index:number)=>(
                          <Link
                          href={item?.url}
                          key={index}
                          target="_blank"
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white md:h-[28px] md:w-[28px]"
                        >
                          <img src={urlFor(item.logo)?.width(200)?.url()}  alt="" className="w-full h-full" />
                        </Link>
                        ))

                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 lg:hidden">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white md:h-[28px] md:w-[28px]">
                <img src={twitter.src} width={13} height={13} alt="" className="h-4 w-4" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white md:h-[28px] md:w-[28px]">
                <img src={facebook.src} alt="" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white md:h-[28px] md:w-[28px]">
                <img src={instagram.src} alt="" />
              </div>
            </div>
          </div>

          <div className="mx-auto my-[40px] flex h-[3px] w-full max-w-[1440px] justify-between bg-white"></div>

          <div className="mx-auto flex w-full max-w-[1440px] flex-wrap justify-between gap-3 sm:flex-nowrap">
            <div className="w-full text-center flex items-center md:text-start">Copy Right 2024</div>
            <div className="flex w-full flex-wrap justify-center gap-[5px] sm:flex-nowrap sm:justify-end">
              <img src={b1.src} alt="" />
              <img src={b2.src} alt="" />
              <img src={b3.src} alt="" />
              <img src={b4.src} alt="" />
              <img src={b5.src} alt="" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footerx;
