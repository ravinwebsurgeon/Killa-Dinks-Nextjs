import { getMenu } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

async function Ambassador() {
  const sidemenu = await getMenu('main-menu-1');
  return (
    <div className="mx-auto flex w-full flex-col pt-8 lg:pt-16 pb-8 lg:pb-16 gap-8 lg:gap-16 bg-[#FAF7EB] ">
      
      <div className="text-center text-2xl tracking-[1px] font-[600] lg:text-5xl text-[#bba887]">Become an Ambassador!</div>
      <div className="flex justify-center flex-col gap-5 items-center bg-[#bba887] py-10 lg:py-20">
        <div className="max-w-[1400px]  px-3  text-[16px] text-center text-white lg:text-[24px] lg:leading-loose">
          Introducing the Killa Dinks Affiliate Program! Are you passionate about pickleball and
          want to be a part of a unique pickleball community? Join us in spreading the love for the
          sport by becoming a Killa Dinks Ambassador. Our affiliate program is your opportunity to
          be a brand advocate and earn while doing what you love. Simply fill out our application
          form to become an ambassador, and once accepted, you'll receive a unique discount code to
          share with your friends, family, and fellow pickleball enthusiasts. Not only will they
          enjoy exclusive discounts on Killa Dinks gear and apparel, but you'll also earn a share
          for every purchase made using your code. You get to represent Killa Dinks, help fellow
          players look their best on the court, and earn rewards along the way. Apply now and let's
          dink it up together!
        </div>

        <div className='bg-white cursor-pointer text-[#bba887]  font-medium rounded-lg  p-3 text-2xl'>
          Apply Now
        </div>

        <div className='flex flex-col gap-3' >
          <Link href={''} className='text-white hover:underline underline-offset-1 text-sm'>Already a member</Link>
          <Link href={''} className='text-white underline text-center' >Log in</Link>
        </div>
      </div>
      <div className=' place-content-center ambassador-card  gap-4' >
    <div className=' overflow-hidden rounded-lg min-h-[250px] max-h-[250px]' >
      <Image alt='' className='w-full object-cover h-full'  height={400} width={400} src='/assets/ourWorkImg4.webp' />
    </div>
    <div className=' overflow-hidden rounded-lg min-h-[250px] max-h-[250px]' >
      <Image alt='' className='w-full  object-cover h-full'  height={400} width={400} src='/assets/ambassedor2.jpg' />
    </div>
    <div className=' overflow-hidden rounded-lg min-h-[250px] max-h-[250px]' >
      <Image alt='' className='w-full  object-cover h-full'  height={400} width={400} src='/assets/ambassedor3.jpg' />
    </div>
    <div className=' overflow-hidden rounded-lg min-h-[250px] max-h-[250px]' >
      <Image alt='' className='w-full  object-cover h-full'  height={400} width={400} src='/assets/ambassedor4.jpg' />
    </div>
   
      </div>
    </div>
  );
}

export default Ambassador;
