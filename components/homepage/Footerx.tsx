import React from 'react'
import b1 from "../../app/assets/Badge1.png";
import b2 from "../../app/assets/Badge2.png";
import b3 from "../../app/assets/Badge3.png";
import b4 from "../../app/assets/Badge4.png";
import b5 from "../../app/assets/Badge5.png";
import logo from "../../app/assets/logo.png";

const Footerx = () => {
  return (
    <div>
    <section className="footer-container flex-col">
        <div className="h-[400px] flex-col  bg-[#BBA887] text-white ">
            <div className="lg:flex lg:flex-row  flex flex-col justify-between lg:mx-[240px] lg:pt-[40px]">
                <div className="lg:max-w-[320px]">
                    <img src={logo.src} alt="" className="mx-auto  lg:mx-0  py-[10px] lg:py-0   " />
                    <div className="text-center lg:text-left py-[10px] px-[10px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard dummy text
                        ever since.
                    </div>
                </div>

                <div className='flex  justify-evenly py-[20px]  lg:hidden'>
                    <div className='text-center'>
                        <p className='uppercase'>Company</p>
                        <p className="h-[26px]"></p>
                        <div className="flex-col flex gap-[5px]">
                            <p>Home</p>
                            <p>Shop</p>
                            <p>Our Story</p>
                            <p>Custom Paddles</p>
                            <p>Join the team</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='uppercase'>Shop</p>
                        <p className="h-[26px]"></p>
                        <div className="flex-col flex gap-[5px]">
                            <p>Paddles</p>
                            <p>Paddle Bundles</p>
                            <p>Apparel</p>
                            <p>Accessories</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='uppercase'>Help</p>
                        <p className="h-[26px]"></p>
                        <div className="flex-col flex gap-[5px]">
                            <p>Returns </p>
                            <p>Contact Us</p>
                            <p>Accessibility</p>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block'>
                        <p className='uppercase'>Company</p>
                        <p className="h-[26px]"></p>
                        <div className="flex-col flex gap-[5px]">
                            <p>Home</p>
                            <p>Shop</p>
                            <p>Our Story</p>
                            <p>Custom Paddles</p>
                            <p>Join the team</p>
                    </div>

                </div>
                <div className='hidden lg:block'>
                    <div className=''>
                        <p className='uppercase'>Shop</p>
                        <p className="h-[26px]"></p>
                        <div className="flex-col flex gap-[5px]">
                            <p>Paddles</p>
                            <p>Paddle Bundles</p>
                            <p>Apparel</p>
                            <p>Accessories</p>
                        </div>
                    </div>

                </div>
                <div className='hidden lg:block'>
                    <p className='uppercase'>Help</p>
                    <p className="h-[26px]"></p>
                    <div className="flex-col flex gap-[5px]">
                        <p>Returns </p>
                        <p>Contact Us</p>
                        <p>Accessibility</p>
                    </div>
                </div>
            </div>

            <div className=" mx-[240px] bg-white h-[3px] my-[40px]"></div>

            <div className="flex justify-between mx-[240px] ">
                <div>Copy Right 2024</div>
                <div className="flex gap-[5px]">
                    <img src={b1.src} alt="" />
                    <img src={b2.src} alt="" />
                    <img src={b3.src} alt="" />
                    <img src={b4.src} alt="" />
                    <img src={b5.src} alt="" />
                </div>
            </div>
        </div>
    </section>
</div>
  )
}

export default Footerx