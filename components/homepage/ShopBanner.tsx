import Link from "next/link";

const ShopBanner = ({ products }: any) => {
    return (
        <div>
            <section className="shop-our-brand flex justify-center mx-auto px-4 sm:px-8">
                <div className="w-full max-w-[1720px] h-auto bg-[#BBA887] rounded-[9px] lg:rounded-[50px]">

                    <div className="text-white font-[500] text-[18px] md:text-[32px] sm:text-[40px] leading-[48px] sm:leading-[60px] flex justify-center pt-4 md:pt-[40px] sm:pt-[80px]">
                        Shop Our Brand
                    </div>

                    <div className="grid  gap-[36px] pt-[40px] place-items-center pb-[50px] mx-auto max-w-screen-xl" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>

                        {
                            products && products.map((item: any, index: any) => {
                                return (
                                    <div key={index}>
                                        <div className="w-full min-w-[340px] sm:w-[340px] min-h-[380px] h-auto flex-col  overflow-hidden border-[1px] rounded-[20px] text-white  lg:mx-0">
                                            <div className="max-h-[302px] xl:h-[302px]  overflow-hidden group bg-[#FAF7EB] h-full rounded-t-[20px] flex justify-center items-center">
                                                <img src={item.images[0].url} alt="" className="w-[250px] h-[250px] transition-transform duration-500 ease-in-out group-hover:scale-110" />
                                            </div>
                                            <div className=" flex flex-col gap-1 pl-[18px]">
                                                <div className="pt-[10px] text-[16px] sm:text-[18px]">{item.title}</div>
                                                <div className="text-[18px] sm:text-[20px]">${item.priceRange.maxVariantPrice.amount}{" "} USD</div>
                                                <Link  href={`/product/${item.handle}`}  className="my-[10px] py-[6px] max-w-[200px] text-[16px] sm:text-[18px] text-[#BBA887] bg-[#FAF7EB] px-6 rounded-[20px]">
                                                    Choose Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }



                        {/* <div className="w-full sm:w-[340px] h-[430px] overflow-hidden flex-col border-[1px] rounded-[20px] text-white  mx-[20px] lg:mx-0">
                            <div className="h-[302px] bg-[#FAF7EB]  overflow-hidden group rounded-t-[20px] flex justify-center items-center">
                                <img src={im2.src} alt="" className="w-[250px] transition-transform duration-500 ease-in-out group-hover:scale-110 h-[250px]" />
                            </div>
                            <div className="pl-[18px]">
                                <div className="pt-[10px] text-[16px] sm:text-[18px]">
                                    Kids Killa Dinks x Flow Society Short
                                </div>
                                <div className="text-[18px] sm:text-[20px]">$38.00 USD</div>
                                <button className="my-[10px] py-[6px] text-[16px] sm:text-[18px] text-[#BBA887] bg-[#FAF7EB] px-6 rounded-[20px]">
                                    Choose Options
                                </button>
                            </div>
                        </div>

                        <div className="w-full sm:w-[340px] h-[430px]  overflow-hidden flex-col border-[1px] rounded-[20px] text-white  mx-[20px] lg:mx-0">
                            <div className="h-[302px] bg-[#FAF7EB] rounded-t-[20px] overflow-hidden group flex justify-center items-center">
                                <img src={im3.src} alt="" className="w-[250px] transition-transform duration-500 ease-in-out group-hover:scale-110 h-[250px]" />
                            </div>
                            <div className="pl-[18px]">
                                <div className="pt-[10px] text-[16px] sm:text-[18px]">Killa Dinks - Rush-01</div>
                                <div className="text-[18px] sm:text-[20px]">$89.99 USD</div>
                                <button className="my-[10px] py-[6px] text-[16px] sm:text-[18px] text-[#BBA887] bg-[#FAF7EB] px-6 rounded-[20px]">
                                    Choose Options
                                </button>
                            </div>
                        </div>

                        <div className="w-full sm:w-[340px] h-[430px] flex-col border-[1px]  overflow-hidden rounded-[20px] text-white  mx-[20px] lg:mx-0">
                            <div className="h-[302px] bg-[#FAF7EB] rounded-t-[20px]  overflow-hidden group flex justify-center items-center">
                                <img src={im4.src} alt="" className="w-[250px] transition-transform duration-500 ease-in-out group-hover:scale-110 h-[250px]" />
                            </div>
                            <div className="pl-[18px]">
                                <div className="pt-[10px] text-[16px] sm:text-[18px]">Womenssss Athletic Tank Top</div>
                                <div className="text-[18px] sm:text-[20px]">$29.99 USD</div>
                                <button className="my-[10px] py-[6px] text-[16px] sm:text-[18px] text-[#BBA887] bg-[#FAF7EB] px-6 rounded-[20px]">
                                    Choose Options
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShopBanner