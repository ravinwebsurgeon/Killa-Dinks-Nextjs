'use client';
import { Description, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import client from '../../sanity//lib/client';
import img1 from 'public/assets/Popup.jpg';
import { urlFor } from '../../sanity/lib/image';

export default function Popup() {
  let [isOpen, setIsOpen] = useState(false);
  const router = usePathname();
  const [popupData, setPopupData] = useState<any>({});
  //popup

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "popup"]`);

        if (result.length > 0) {
          console.log(result[0]);
          setPopupData(result);
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);
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
    }, 3000); // Trigger the popup after 3 seconds
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
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // days to milliseconds
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
          <DialogPanel className="relative flex max-w-[90vw] items-center justify-center space-y-4 rounded-3xl border-2 border-[#bba887] bg-[#faf7eb] p-4 lg:h-full lg:max-h-[70vh] lg:p-12 xl:max-h-[600px] xl:max-w-[1000px]">
            <div className="absolute right-5 top-4">
              <button className="w-min text-4xl hover:scale-[1.05]" onClick={handleClose}>
                &times;
              </button>
            </div>
            <DialogTitle className="font-bold"></DialogTitle>

            <div className="flex w-full flex-col gap-4 lg:flex-row">
              <div className="mt-4 flex h-full w-full overflow-hidden rounded p-2 md:rounded-2xl lg:mt-0 lg:max-w-[50%]">
                {
                  popupData[0]?.image && <Image
                  alt=""
                  src={urlFor(popupData[0]?.image).width(800).url()}
                  height={800}
                  width={800}
                  className="h-full w-full object-cover lg:min-h-[400px] lg:min-w-[400px]"
                />
                }
              </div>
              <div className="flex w-full flex-col justify-center gap-6 lg:max-w-[50%]">
                {
                  popupData[0]?.heading && <div className="text-3xl font-medium text-[#a78e64] lg:text-5xl">{popupData[0]?.heading}</div>
                }
                {
                  popupData[0]?.description && <div className="mt-4 max-w-[600px] text-sm text-[#555] lg:text-lg">
                  {
                    popupData[0]?.description
                  }
                </div>
                }
                {
                  popupData[0]?.additional && <div className="text-sm text-black/80">{popupData[0]?.additional}</div>
                }
                {
                  popupData[0]?.buttonLabel && <Link
                  href={popupData?.[0]?.buttonLink}
                  className="flex w-full cursor-pointer justify-center rounded-lg border-2 border-white bg-[#bba887] p-3 font-medium tracking-[1px] text-white hover:scale-[1.01] lg:text-xl"
                >
                 {popupData[0]?.buttonLabel}
                </Link>
                }
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
