'use client';
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import img1 from 'public/assets/Popup.jpg';

export default function Popup() {
  let [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  const getPopup = () => {
    // Check if the cookie for the popup has already been set
    const popupShown = getCookie('popup_shown');
    
    if (!popupShown && router === '/') {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Set a cookie to prevent the popup from showing again
    setCookie('popup_shown', 'true', 7); // expires in 7 days
  };

  useEffect(() => {
    setTimeout(() => {
      getPopup();
    }, 3000);  // Trigger the popup after 3 seconds
  }, [router]);

  // Function to get the cookie value by its name
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  // Function to set a cookie with a specified name, value, and expiration days
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // days to milliseconds
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  };

  return (
    <>
      <Dialog open={isOpen} onClose={handleClose} className="relative z-50">
        {/* The backdrop */}
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex w-screen items-center justify-center p-2 lg:p-4">
          {/* The actual dialog panel */}
          <DialogPanel className="relative lg:h-full flex justify-center items-center lg:max-h-[70vh] xl:max-h-[600px] max-w-[90vw] xl:max-w-[1000px] space-y-4 rounded-3xl border-2 border-[#bba887] bg-[#faf7eb] p-4 lg:p-12">
            <div className="absolute right-5 top-4">
              <button className="w-min text-4xl hover:scale-[1.05]" onClick={handleClose}>
                &times;
              </button>
            </div>
            <DialogTitle className="font-bold"></DialogTitle>

            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="flex h-full w-full rounded md:rounded-2xl overflow-hidden mt-4 lg:mt-0 lg:max-w-[50%] p-2">
                <Image
                  alt=""
                  src={img1}
                  height={800}
                  width={800}
                  className="h-full lg:min-h-[400px] w-full lg:min-w-[400px] object-cover"
                />
              </div>
              <div className="flex w-full flex-col justify-center gap-6 lg:max-w-[50%]">
                <div className="text-3xl lg:text-5xl font-medium text-[#a78e64]">Make it Yours Today</div>
                <div className="text-sm lg:text-lg max-w-[600px] text-[#555] mt-4">
                  Personalize your paddles with your unique design. Whether for an event or your brand, let us help you create something special!
                </div>
                <div className="text-sm text-black/80">
                  * 10 Paddle Minimum Order
                </div>
                <Link href={''} className="flex bg-[#bba887] lg:text-xl hover:scale-[1.01] cursor-pointer text-white font-medium p-3 w-full justify-center tracking-[1px] rounded-lg border-white border-2">
                  Start Your Custom Order Now
                </Link>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
