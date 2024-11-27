'i'
import React from 'react'
import rect from '../../app/assets/rect.png'
import logo from '../../app/assets/logo.png'
import user from '../../app/assets/user.png'
import cart from '../../app/assets/cart.png'
import Dropdown from './Dropdown'

export default function HomePageBanner() {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
    return (
        <div>
              <header className='bigger-navbar bg-[#FAF7EB]'>
        <div className="banner lg:mx-[43px] relative">
          <div className="w-full h-full">
              <img src={rect.src} alt="" className="w-full lg:pt-[47px]  h-[400px]  lg:h-auto  object-cover pt-[20px] " />
          </div>
          <div className="lg:absolute lg:top-[47px] lg:left-0 absolute top-0 left-0 rounded-t-[50px]  right-0 h-[90px] bannerx  lg:block hidden " >
            <div className="text-white flex justify-between  px-[200px] items-center pt-[10px]">
              <div>
                <img src={logo.src} alt="" className='opacity-100' />
              </div>
              <div className="flex gap-[30px] text-[18px] font-[500] items-center">
                {/* <HeaderMenu
                  menu={menu}
                  viewport="desktop"
                  primaryDomainUrl={header.shop.primaryDomain.url}
                  publicStoreDomain={publicStoreDomain}
                /> */}
                <div>Home</div>
                <Dropdown title={'Shop'} options={options}/>
                <div>Our Story</div>
                <div>Custom Paddles</div>
                <div>Join the Team!</div>

                <div></div>
              </div>
              <div className="flex gap-5">
                {/* <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} /> */}
                <img src={user.src} alt="" className="lg:w-[35px] lg:h-[35px] w-[30px] h-[30px]" />
                <img src={cart.src} alt="" className="lg:w-[35x] lg:h-[35px] w-[30px] h-[30px]" />

              </div>
            </div>
          </div>
        </div>
      </header>
        </div>
    )
}
