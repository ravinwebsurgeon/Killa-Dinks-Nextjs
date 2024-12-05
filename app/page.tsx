
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

import CapturedMoments from 'components/homepage/CapturedMoments';
import CustomizePaddle from 'components/homepage/CustomizePaddle';
import Footerx from 'components/homepage/Footerx';
import NewsLetter from 'components/homepage/NewsLetter';
import OurWork from 'components/homepage/OurWork';
import ShopBanner from 'components/homepage/ShopBanner';
import Testimonials from 'components/homepage/Testimonials';
import { getCollectionProducts, getMenu } from 'lib/shopify';
import banner from '../public/assets/rect.png'
import HomePageBanner from '../components/homepage/HomePageBanner';
export default async function HomePage() {

  const FrontProducts = await getCollectionProducts({ collection: "front-page" });
  const menu = await getMenu('main-menu');
  const sidemenu = await getMenu('main-menu-1');
  const footerData = await getMenu('footer');
 

  return (
    <>
      <div className="bg-[#FAF7EB]  w-full overflow-hidden  ">
        {/* <HomePageBanner className='left-0 right-0 top-0  lg:absolute w-full lg:left-0 lg:top-[0px]' image={banner} menu={sidemenu} /> */}
        <OurWork />
        <CustomizePaddle />
        <Testimonials />
        <ShopBanner products={FrontProducts} />
        <CapturedMoments />
        <NewsLetter />
        <div className="overflow-hidden">
         
        </div>
      </div>
    </>
  );
}
