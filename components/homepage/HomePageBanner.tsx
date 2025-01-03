'use client';
import CartModal from 'components/cart/modal';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
// import logo from '../../public/assets/logo.png';
import user from '../../public/assets/user.png';
import client from '../../sanity/lib/client';
import { urlFor } from '../../sanity/lib/image';

export default function HomePageBanner({ menu }: any) {

  // State to manage the visibility of the mobile drawer
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const drawerRef = useRef<any| null>(null); // Reference for the mobile drawer
  const drawerButtonRef = useRef<any | null>(null);
  const [heroImage,setHeroImage] =useState(null);
  const [logo,setLogo] =useState(null)

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const router = usePathname()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "header"]`);
        if (result?.length > 0) {
         
          setLogo(result[0]?.logo?.asset)
        }
      } catch (error) {
        console.error('Error fetching :', error);
      }
    };

    fetchData();
  }, []);


  const getbannerClass  = ()=>{
    if(router ==='/'  || router ==='/pages/ambassador'){
      return 'absolute w-full bg-black/70'
    }
  }
  const getConatinerClass = ()=>{
    if (router === '/'|| router === '/pages/ambassador') {
      return ' lg:rounded-[50px] overflow-hidden lg:bg-black/70 '; // Apply class if the condition is true
    }
    return '';
  }
  const containerClass = getConatinerClass()

  const bannerClass = getbannerClass()

  const getImageSrc = (router:any)=>{
      if(router==='/' || router ==='/pages/ambassador'){
         return  heroImage?urlFor(heroImage)?.width(1200)?.url() :null
      }
  }
 
  const imageSrc = getImageSrc(router) || '';
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // If the click is outside the drawer or the hamburger button, close the drawer
      if (
        drawerRef.current &&
        !drawerRef.current?.contains(event.target as Node ) &&
        drawerButtonRef.current &&
        !drawerButtonRef.current?.contains(event.target as Node)
      ) {
        setDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "animationHero"]`);
        
        if (result.length > 0) {    
                setHeroImage(result[0]?.Image.asset)               
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <header className={`bigger-navbar z-50 flex !w-full  justify-center  bg-[#FAF7EB] lg:pt-[47px] ${router.includes('/sanity') ? 'hidden' : ''}`}>
        {/* Main Banner */}
        <div className={` banner bg-black w-full  relative  gap-[30px]   lg:mx-[20px] lg:rounded-t-[50px] xl:mx-[43px]  ${containerClass}`}>
          <div className={`z-50 flex flex-col  h-full max-h-[800px] w-full rounded-[50px] `}>
            <div className={`  py-[13px] lg:flex  ${bannerClass}`}>
              <div className="mx-auto flex items-center justify-around lg:justify-center gap-[30px] text-white xl:w-full xl:max-w-[1440px] xl:justify-between xl:px-5">
                <Link href={'/'} className="h-[40px]  opacity-100 lg:h-[63px] "
 >
                {
                  logo? <img
                  height={40}
                  src={urlFor(logo)?.width(200)?.url()}
                  className='object-cover w-full h-full'
                  alt="Logo"
                />:null
                }
                </Link>
                <div className="lg:flex items-center hidden gap-[30px]  xl:text-[18px]">
                  {menu.map((item: any, index: any) => {
                    let url: string = new URL(item.path).pathname;

                    if (item.title == 'Shop') {
                      url = '/collections'; // Change the URL for 'Shop'
                    }


                    // if (item.children.length > 0) {
                    //   return <Dropdown key={index} title={item.title} options={item.children} />;
                    // }
                    return (
                      <Link  key={index} className="" href={url}>
                        {item.title == 'Custom Paddles' ? 'Custom Paddle Builder' : item.title}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex items-center gap-5">
                  <Link href={'https://dourdinks.myshopify.com//customer_authentication/redirect?locale=en&region_country=US'}>
                  <img
                    src={user.src}
                    alt="User"
                    className="h-[30px] w-[30px] lg:h-[35px] lg:w-[35px]"
                    />
                    </Link>
                  <CartModal   />
                </div>
                <div className="lg:hidden" onClick={toggleDrawer}>
              <div ref={drawerButtonRef} className="cursor-pointer space-y-2">
                <div className="h-[2px] w-8 rounded bg-white"></div>
                <div className="h-[2px] w-8 rounded bg-white"></div>
                <div className="h-[2px] w-8 rounded bg-white"></div>
              </div>
            </div>
              </div>
            </div>
            {/* {/* <img src={image.src} alt="Banner" className="  w-full object-cover lg:h-auto" />  */}
            {
             imageSrc ?  
             <div className='  flex items-center justify-center w-full' >
               <img
              height={800}
              width={1820}
              src={imageSrc}
              className=" min-h-[400px]  object-cover  w-full"
              alt=""
            />
              </div>:null
            }
          </div>

          {/* Main Navigation (visible on large screens) */}

          {/* Mobile Drawer (Hamburger Menu) */}
          <div
           ref={drawerRef}
            className={`!z-1000 fixed right-0 top-0 z-50 h-full w-full max-w-[320px] transform bg-[#faf7eb] text-black transition-transform duration-300 ease-in-out lg:hidden ${
              isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col gap-6 px-4 py-6 pt-8">
              <div className="mb-1 flex items-center justify-between">
              <div>
              {
                  logo? <img
                  src={urlFor(logo)?.width(1200)?.url()}
                  alt="Logo"
                  className="h-[40px]  opacity-100 lg:h-[63px] "
                />:null
                }
                </div>
                <button onClick={toggleDrawer} className="text-4xl text-black">
                  &times; {/* Close icon */}
                </button>
              </div>

              <div className="flex flex-col gap-6 text-lg">
                {/* <div>Home</div>

                <div>Our Story</div>
                <div>Custom Paddles</div>
                <div>Join the Team!</div> */}
                {menu.map((item: any, index: any) => {
                  let url: string = new URL(item.path).pathname;

                  if (item.title == 'Shop') {
                    url = '/collections'; // Change the URL for 'Shop'
                  }
                  return (
                    <Link key={index} onClick={toggleDrawer} className="text-xl font-[500] tracking-[1px]" href={url}>
                      {item.title}
                    </Link>
                  );
                })}

                
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
