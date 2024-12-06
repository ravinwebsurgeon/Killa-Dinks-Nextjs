import CapturedMoments from 'components/homepage/CapturedMoments';
import NewsLetter from 'components/homepage/NewsLetter';

import { getMenu } from 'lib/shopify';
import img1 from '../../../public/assets/ourWorkImg4.webp';

const OurStory = async () => {

    const menu = await getMenu('main-menu');
    const sidemenu = await getMenu('main-menu-1');
    const footerData = await getMenu('footer');

    return (
        <div className="mx-auto flex w-full flex-col bg-[#FAF7EB] lg:pt-[47px]">
           
            <div className="justify-center md:mx-[20px] mx-4 flex xl:mx-[43px]">
                <div className="flex w-full max-w-[1920px] flex-wrap justify-evenly gap-[30px] xl:flex-nowrap">
                    <div className="flex w-full max-w-[800px] flex-col gap-[20px] pt-4 lg:pt-24">
                        <div className="text-[64px] font-[600] text-[#BBA887]"> Our Story</div>
                        <div className="w-full max-w-[700px]  text-[22px] font-[400] text-[#BBA887]">
                            Welcome to Killa Dinks, a brand that embodies the spirit of creativity,
                            entrepreneurship, and the prioritization of mindfulness.
                        </div>
                    </div>
                    <div className="z-30 flex">
                        <div className="relative xl:top-32 w-full xl:max-w-[450px] mb-3 xl:mb-0 rounded-xl bg-[#bba887] p-8  sm:text-[20px] text-[white]">
                            Our journey began as a family who embraced a healthy and active lifestyle that rather
                            quickly began revolving around pickleball. As a family brand, our foundation rests on
                            the principles of unity and togetherness. We understand the importance of fostering
                            strong bonds and the positive impact it has on our physical and mental well-being.
                            Killa Dinks is built on the belief that a healthy and active lifestyle is an essential
                            piece to reaching a fulfilling life.
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative overflow-hidden bg-black">
                <img className="inset-0 w-full opacity-70" src={img1.src} />
            </div>
            <div className="flex justify-center bg-[#bba887]">
                <div className="max-w-[1440px] p-8 lg:p-16 lg:py-20 text-center text-[18px] lg:text-[24px]  lg:leading-loose text-white">
                    Our brand's uniqueness stems from our partnership with Umbrella Games, now known as
                    Killaverse Productions, a leading mobile gaming and software development studio. Through
                    this collaboration, we bring together the world of pickleball and the innovative realm of
                    technology. This partnership allows us to continue developing the Killabears IP while
                    bringing value to their community. At Killa Dinks, we strive to inspire and empower
                    individuals to unleash their full potential, both on and off the pickleball court.
                    Together, we will redefine the pickleball experience, embrace the power of human
                    connection, and unleash the true joy that comes from being part of the Killa Family.
                </div>
            </div>
            <CapturedMoments />
            <NewsLetter />
        </div>
    );
};

export default OurStory;











