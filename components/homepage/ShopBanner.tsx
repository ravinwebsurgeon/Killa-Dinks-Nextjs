import Link from "next/link";
import { useRouter } from "next/navigation";

const ShopBanner = ({ products }: any) => {
    const router = useRouter()
    const handleClick = (item:any)=>{
        router.push(`/product/${item}`)
    }
    return (
        <div>
            <section className="shop-our-brand  flex justify-center mx-auto px-5 xl:px-[100px]">
                <div className="w-full px-2 md:px-[20px]   xl:px-[43px] sm:px-8 h-auto bg-[#BBA887] rounded-[9px] lg:rounded-[50px]">

                    <div className="text-white  font-[500] text-[18px] md:text-[32px] sm:text-[40px] leading-[48px] sm:leading-[60px] flex justify-center items-center w-full pt-4 xl:pt-[80px] ">
                        Shop Our Brand
                    </div>

                    <div className="grid  mx-auto max-w-[1440px]  w-full gap-4  pt-[20px] xl:pt-[40px] place-items-center pb-[80px] gap-y-8  shopbanner-card " style={{}}>
                        {
                            products && products.map((item: any, index: any) => {
                                return (
                                    <Link href={`/product/${item.handle}`} key={index}  className="w-full">
                                        <div className="w-full min-w-[333px]  min-h-[336px] h-auto flex-col  overflow-hidden border-[1px] rounded-[20px] text-white  lg:mx-0">
                                            <div className="max-h-[302px] xl:h-[302px]  overflow-hidden group bg-[#FAF7EB] h-full rounded-t-[20px] flex justify-center items-center">
                                                <img src={item.images[0].url} alt="" className="w-[250px] h-[250px] transition-transform duration-500 ease-in-out group-hover:scale-110" />
                                            </div>
                                            <div className=" flex flex-col gap-1 pt-[10px] pb-[20px] px-5">
                                                <div className=" text-[16px] ] w-full truncate ">{item.title}</div>
                                                <div className="text-[18px] sm:text-[20px]">${item.priceRange.maxVariantPrice.amount}{" "} USD</div>
                                                <div onClick={()=>handleClick(item?.handle)} className="my-[10px] py-[6px] max-w-[200px] text-[16px] sm:text-[18px] text-[#BBA887] bg-white px-6 rounded-[20px]">
                                                    Choose Options
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ShopBanner