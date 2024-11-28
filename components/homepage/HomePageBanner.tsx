'use client'
import CartModal from 'components/cart/modal';
import { useState } from 'react';
import logo from '../../public/assets/logo.png';
import rect from '../../public/assets/rect.png';
import user from '../../public/assets/user.png';
import Dropdown from './Dropdown';

export default function HomePageBanner() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  // State to manage the visibility of the mobile drawer
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <header className="bigger-navbar z-50 overflow-hidden bg-[#FAF7EB] lg:pt-[47px]">
        {/* Mobile Header */}
        <div className="mb-8  flex overflow-hidden bg-black/90 px-8 lg:hidden">
          <div className="mx-auto flex w-full items-center justify-between gap-[30px] py-4 text-white">
            <div>
              <img
                src={logo.src}
                alt="Logo"
                className="h-[40px] w-[100px] opacity-100 lg:h-[63px] lg:w-[128px]"
              />
            </div>

            <div className="flex items-center gap-5">
              <img src={user.src} alt="User" className="h-[30px] w-[30px] lg:h-[35px] lg:w-[35px]" />
              <CartModal />
            </div>

            {/* Hamburger Menu Icon */}
            <div className="lg:hidden" onClick={toggleDrawer}>
              <div className="space-y-2 cursor-pointer">
                <div className="w-8 h-[2px] bg-white rounded"></div>
                <div className="w-8 h-[2px] bg-white rounded"></div>
                <div className="w-8 h-[2px] bg-white rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Banner */}
        <div className="banner relative mx-2 md:mx-[20px] gap-[30px] overflow-hidden rounded-[12px] lg:rounded-[50px] xl:mx-[43px]">
          <div className="z-50 flex h-full w-full rounded-[50px]">
            <img src={rect.src} alt="Banner" className="h-[400px] w-full object-cover lg:h-auto" />
          </div>

          {/* Main Navigation (visible on large screens) */}
          <div className="bannerx absolute left-0 right-0 top-0 hidden py-[13px] lg:absolute lg:left-0 lg:top-[0px] lg:flex">
            <div className="mx-auto flex items-center justify-center gap-[30px] text-white xl:w-full xl:max-w-[1200px] xl:justify-between xl:px-5">
              <div>
                <img
                  src={logo.src}
                  alt="Logo"
                  className="h-[40px] w-[100px] opacity-100 lg:h-[63px] lg:w-[128px]"
                />
              </div>
              <div className="flex items-center gap-[30px] text-[18px]">
                <div>Home</div>
                <Dropdown title={'Shop'} options={options} />
                <div>Our Story</div>
                <div>Custom Paddles</div>
                <div>Join the Team!</div>
              </div>
              <div className="flex items-center gap-5">
                <img src={user.src} alt="User" className="h-[30px] w-[30px] lg:h-[35px] lg:w-[35px]" />
                <CartModal />
              </div>
            </div>
          </div>

          {/* Mobile Drawer (Hamburger Menu) */}
          <div
            className={`fixed z-50 top-0 right-0 max-w-[320px] w-full h-full !z-1000 bg-white text-black transform transition-transform duration-300 ease-in-out lg:hidden ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="flex flex-col py-6 pt-8 px-4">
              <div className="flex justify-end items-center mb-1">

                <button onClick={toggleDrawer} className="text-4xl text-black">
                  &times; {/* Close icon */}
                </button>
              </div>

              <div className="flex flex-col gap-4 text-lg">
                <div>Home</div>

                <div>Our Story</div>
                <div>Custom Paddles</div>
                <div>Join the Team!</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
