import React from 'react'

const NewsLetter = () => {
  return (
    <div>
    <section className="news-letter pb-[72px] mt-[20px] bg-white">
        <div className="text-[30px] text-center text-[#BBA887] flex justify-center pt-[72px]">
            Subscribe to Killa Dinks Newsletter
        </div>
        <div className="flex justify-center max-w-[641px] mt-[20px] lg:w-full w-[90%] overflow-hidden items-center border-[#BBA887] border-[1px]  mx-auto  rounded-[20px] ">
            <input
                className="w-full in text-[24px]  h-[61px] pl-[35px] py-3 placeholder:text-black/50 font-[400] outline-none  border-none" 
                placeholder="Email"
                type="text"
            />
            <div className=" right-[35%] top-4 bottom-0 flex items-center pr-4 text-black/50 text-[16px] lg:text-[24px] font-[400] ">
                Subscribe
            </div>
        </div>
    </section>
</div>
  )
}

export default NewsLetter