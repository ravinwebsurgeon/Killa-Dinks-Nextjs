import img2 from 'public/assets/ambassedor3.jpg';
import img5 from 'public/assets/badmitionPlayImg.png';
import img1 from 'public/assets/ourwork1.png';
import img3 from 'public/assets/ourwork2.png';
import img6 from 'public/assets/ourwork3.png';
import img4 from 'public/assets/videoImg1.jpeg';

const Collage = () => {
  return (
    <div className="flex w-full  justify-center bg-[#faf7eb]">
      <div className="mx-4 md:mx-5 flex w-full my-4 sm:my-8 flex-col gap-16 rounded-[30px] bg-[#BBA887] p-4 pb-8 sm:p-10 xl:mx-[43px]">
        <div className="flex flex-col items-center pt-8 gap-2 justify-center">
          <div className=" text-3xl md:text-[40px]  text-white"> Custom Paddles</div>
          <div className="  md:text-2xl text-white">Products that Speak For Themselves</div>
        </div>

        <div className="mx-auto grid w-full max-w-[1440px] justify-items-center  sm:grid-cols-3  gap-5 md:gap-8">
          <div className=" flex flex-col gap-5 md:gap-8">
            <div className="max-w-[300px] sm:max-w-full overflow-hidden rounded-2xl">
              <img src={img2.src} className="h-full w-full object-cover" />
            </div>
            <div className="max-w-[300px] sm:max-w-full overflow-hidden rounded-2xl">
              <img src={img4.src} className="h-full w-full object-cover" />
            </div>
          </div>
          <div  className=" flex flex-col gap-5 md:gap-8" >
            <div className="max-w-[300px] sm:max-w-full overflow-hidden rounded-2xl">
              <img src={img1.src} className="h-full w-full object-cover" />
            </div>
            <div className="max-w-[300px] sm:max-w-full overflow-hidden rounded-2xl">
              <img src={img5.src} className="h-full w-full object-cover" />
            </div>
          </div>
          <div  className=" flex flex-col gap-5 md:gap-8" >
          <div className="max-w-[300px] sm:max-w-full overflow-hidden rounded-2xl">
              <img src={img3.src} className="h-full w-full object-cover" />
            </div>
            <div className="max-w-[300px] sm:max-w-full overflow-hidden rounded-2xl">
              <img src={img6.src} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
