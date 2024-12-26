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
