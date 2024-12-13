'use client';
import { useEffect } from "react";
import client from '../../sanity/lib/client';
import CapturedMoments from "./CapturedMoments";
import CustomizePaddle from "./CustomizePaddle";
import NewsLetter from "./NewsLetter";
import OurWork from "./OurWork";
import ShopBanner from "./ShopBanner";
import Testimonials from "./Testimonials";
const Index = ({FrontProducts}:any) => {
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const result = await client.fetch(`*[_type == "animationHero"]`);
    //         if (result.length > 0) {
    //                 console.log(result);                    
    //         }
    //       } catch (error) {
    //         console.error('Error fetching social gallery cards:', error);
    //       }
    //     };
    
    //     fetchData();
    //   }, []);
  return (
    <>
    <OurWork />
    <CustomizePaddle />
    <Testimonials />
    <ShopBanner products={FrontProducts} />
    <CapturedMoments />
    <NewsLetter /> 
    </>
  )
}

export default Index
