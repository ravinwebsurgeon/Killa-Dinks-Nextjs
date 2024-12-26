import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const ShopBanner = ({ products }: any) => {
  const router = useRouter();
  const handleClick = (item: any) => {
    router.push(`/product/${item}`);
  };
  return (
    <div>
      <section className="shop-our-brand mx-auto flex justify-center px-5 xl:px-[100px]">
        <div className="h-auto w-full rounded-[9px] bg-[#BBA887] px-2 sm:px-8 md:px-[20px] lg:rounded-[50px] xl:px-[43px]">
          <div className="flex w-full items-center justify-center pt-4 text-[24px] font-[500] leading-[48px] text-white sm:text-[40px] sm:leading-[60px] md:text-[32px] xl:pt-[80px]">
            Shop Our Brand
          </div>

          <div className="flex shopbanner-slider w-full pb-[40px] pt-[20px]  max-w-[1440px] justify-center">
            <Swiper 
            slidesPerView={'auto'}
            
             spaceBetween={30} 
             modules={[Pagination,Navigation]} 
             pagination={{ clickable: true }}
             className=''
               >
              {products &&
                products.map((item: any, index: any) => {
                  return (
                    <SwiperSlide key={index} className="w-full pb-[40px] max-w-[330px]">
                      <Link href={`/product/${item.handle}`} className="w-full">
                        <div className="h-auto min-h-[336px] w-full min-w-[333px] flex-col overflow-hidden rounded-[20px] border-[1px] text-white lg:mx-0">
                          <div className="group flex h-full max-h-[302px] items-center justify-center overflow-hidden rounded-t-[20px] bg-[#FAF7EB] xl:h-[302px]">
                            <img
                              src={item.images[0].url}
                              alt=""
                              className="max-h-[302px] object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                          </div>
                          <div className="flex flex-col gap-1 px-5 pb-[20px] pt-[10px]">
                            <div className="] w-full truncate text-[16px]">{item.title}</div>
                            <div className="text-[18px] sm:text-[20px]">
                              ${item.priceRange.maxVariantPrice.amount} USD
                            </div>
                            <div
                              onClick={() => handleClick(item?.handle)}
                              className="my-[10px] max-w-[200px] rounded-[20px] bg-white px-6 py-[6px] text-[16px] text-[#BBA887] sm:text-[18px]"
                            >
                              Choose Options
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div
            className="shopbanner-card mx-auto grid w-full max-w-[1440px] place-items-center gap-4 gap-y-8 pb-[80px] pt-[20px]  xl:pt-[40px]"
            style={{}}
          >
            {products &&
              products.map((item: any, index: any) => {
                return (
                  <Link href={`/product/${item.handle}`} key={index} className="w-full">
                    <div className="h-auto min-h-[336px] w-full min-w-[333px] flex-col overflow-hidden rounded-[20px] border-[1px] text-white lg:mx-0">
                      <div className="group flex h-full max-h-[302px] items-center justify-center overflow-hidden rounded-t-[20px] bg-[#FAF7EB] xl:h-[302px]">
                        <img
                          src={item.images[0].url}
                          alt=""
                          className="max-h-[302px] object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col gap-1 px-5 pb-[20px] pt-[10px]">
                        <div className="] w-full truncate text-[16px]">{item.title}</div>
                        <div className="text-[18px] sm:text-[20px]">
                          ${item.priceRange.maxVariantPrice.amount} USD
                        </div>
                        <div
                          onClick={() => handleClick(item?.handle)}
                          className="my-[10px] max-w-[200px] rounded-[20px] bg-white px-6 py-[6px] text-[16px] text-[#BBA887] sm:text-[18px]"
                        >
                          Choose Options
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopBanner;
