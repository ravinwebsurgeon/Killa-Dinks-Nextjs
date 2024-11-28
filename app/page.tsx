
export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};
import OurWork from 'components/homepage/OurWork';
import HomePageBanner from '../components/homepage/HomePageBanner'
import Testimonials from 'components/homepage/Testimonials';
import ShopBanner from 'components/homepage/ShopBanner';
import CapturedMoments from 'components/homepage/CapturedMoments';
import NewsLetter from 'components/homepage/NewsLetter';
import Footerx from 'components/homepage/Footerx';
import CustomizePaddle from 'components/homepage/CustomizePaddle';
export default function HomePage() {
  return (
    <>
      <div className="bg-[#FAF7EB]  w-full overflow-hidden  ">
                <HomePageBanner />
                 <OurWork />
                 <CustomizePaddle/>
                <Testimonials />
                <ShopBanner />
                <div className="">
                    <CapturedMoments />
                </div>
               <NewsLetter />            
            <div className="overflow-hidden">
            <Footerx />  
                </div>
            </div>
    </>
  );
}
