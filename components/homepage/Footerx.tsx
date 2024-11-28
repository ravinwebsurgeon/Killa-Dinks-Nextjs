import React from 'react';
import Link from 'next/link'; // Import Link from next
import b1 from '../../public/assets/Badge1.png';
import b2 from '../../public/assets/Badge2.png';
import b3 from '../../public/assets/Badge3.png';
import b4 from '../../public/assets/Badge4.png';
import b5 from '../../public/assets/Badge5.png';
import logo from '../../public/assets/logo.png';
import twitter from '../../public/assets/twitter.png';
import facebook from '../../public/assets/facebook.png';
import instagram from '../../public/assets/instagram.png';

const Footerx = () => {
  return (
    <div>
      <section className="footer-container w-full flex-col items-center">
        <div className="w-full flex-col bg-[#BBA887] px-4 text-white">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col lg:flex lg:flex-row lg:pt-[40px]">
            <div className="w-full">
              <img src={logo.src} alt="" className="mx-auto py-[10px] lg:mx-0 lg:py-0" />
              <div className="w-full px-[10px] py-[10px] text-center lg:max-w-[320px] lg:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry standard dummy text ever since.
              </div>
            </div>

            <div className="flex w-full flex-row justify-between">
              <div className="flex w-full justify-between gap-4 py-[20px] pb-[30px] md:pb-[20px]">
                <div className="text-start">
                  <span className="uppercase">Company</span>
                  <div className="mt-2 flex flex-col gap-[5px]">
                    <Link href="">
                      <div className="cursor-pointer text-start">Home</div>
                    </Link>
                    <Link href="">
                      <div className="cursor-pointer text-start">Shop</div>
                    </Link>
                    <Link href="">
                      <div className="cursor-pointer text-start">Our Story</div>
                    </Link>
                    <Link href="">
                      <div className="cursor-pointer text-start">Custom Paddles</div>
                    </Link>
                    <Link href="">
                      <div className="cursor-pointer text-start">Join the team</div>
                    </Link>
                  </div>
                </div>

                <div className="text-start">
                  <span className="uppercase">Shop</span>
                  <div className="mt-2 flex flex-col gap-[5px]">
                    <Link href="">
                      <div className="cursor-pointer text-start">Paddles</div>
                    </Link>
                    <Link href="">
                      <div className="cursor-pointer text-start">Paddle Bundles</div>
                    </Link>
                    <Link href="">
                      <div className="cursor-pointer text-start">Apparel</div>
                    </Link>
                    <Link href="">
                      <div className="cursor-pointer text-start">Accessories</div>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col justify-between text-start">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                    <span className="uppercase">Help</span>
                    <div className="flex flex-col justify-between">
                      <div className="mt-2 flex flex-col gap-[5px]">
                        <Link href="">
                          <div className="cursor-pointer text-start">Returns</div>
                        </Link>
                        <Link href="">
                          <div className="cursor-pointer text-start">Contact Us</div>
                        </Link>
                        <Link href="">
                          <div className="cursor-pointer text-start">Accessibility</div>
                        </Link>
                      </div>
                        </div>
                    </div>
                    <div className=" hidden lg:flex  justify-between gap-3">
                      <div className="flex h-6 w-6 md:h-[28px] md:w-[28px] items-center justify-center rounded-full bg-white">
                        <img src={twitter.src}  width={13} height={13} alt="" className='w-4 h-4' />
                      </div>
                      <div className="flex  h-6 w-6 md:h-[28px] md:w-[28px] items-center justify-center rounded-full bg-white">
                        <img src={facebook.src} alt="" />
                      </div>
                      <div className="flex  h-6 w-6 md:h-[28px] md:w-[28px] items-center justify-center rounded-full bg-white">
                        <img src={instagram.src} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" lg:hidden flex   justify-center gap-3">
                      <div className="flex h-6 w-6 md:h-[28px] md:w-[28px] items-center justify-center rounded-full bg-white">
                        <img src={twitter.src}  width={13} height={13} alt="" className='w-4 h-4' />
                      </div>
                      <div className="flex  h-6 w-6 md:h-[28px] md:w-[28px] items-center justify-center rounded-full bg-white">
                        <img src={facebook.src} alt="" />
                      </div>
                      <div className="flex  h-6 w-6 md:h-[28px] md:w-[28px] items-center justify-center rounded-full bg-white">
                        <img src={instagram.src} alt="" />
                      </div>
                    </div>

          </div>

          <div className="mx-auto my-[40px] flex h-[3px] w-full max-w-[1440px] justify-between bg-white"></div>

          <div className="mx-auto flex w-full max-w-[1440px] flex-wrap justify-between gap-3 sm:flex-nowrap">
            <div className="w-full text-center md:text-start">Copy Right 2024</div>
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
    </div>
  );
};

export default Footerx;
