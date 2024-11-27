import React from 'react';
import play1 from '../../app/assets/badmitionPlayImg.png';
import icon1 from '../../app/assets/icon1.png';
import icon2 from '../../app/assets/icon2.png';
import icon3 from '../../app/assets/icon3.png';

const CustomizePaddle = () => {
  return (
    <div>
    <div className="perfect-paddle mt-[30px]">
        <div className="text-center my-[50px]">
            <div className="text-[40px] font-medium text-black">
                Design Your Perfect Paddle
            </div>
            <div className="text-[25px] text-gray-700">
                Design a Paddle That Matches Your Game and Personality
            </div>
        </div>

        {/* Responsive flex container */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-12">

            {/* Image Section */}
            <div className="flex-shrink-0">
                <img
                    src={play1.src}
                    alt="Paddle Design"
                    className="w-full md:w-[640px] h-auto md:h-[665px] object-cover"
                />
            </div>

            {/* Vertical Divider for medium screens */}
            <div className="w-[3px] h-auto md:h-[640px] bg-black md:block hidden"></div>

            {/* Step Sections */}
            <div className="flex flex-col space-y-10 md:space-y-12">
                {/* Step 1 */}
                <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                        <img
                            src={icon1.src}
                            alt="Icon 1"
                            className="w-[70px] h-[70px] hidden md:block"
                        />
                    </div>
                    <div>
                        <div className="font-medium text-[26px]">
                            1. Create Your Own Design
                        </div>
                        <div className="text-gray-600 w-full md:w-[380px] text-[20px] font-[400]">
                            Bring your vision to life! Choose colors, patterns, and styles
                            to craft a paddle thats uniquely yours.
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                        <img
                            src={icon2.src}
                            alt="Icon 2"
                            className="w-[70px] h-[70px] hidden md:block"
                        />
                    </div>
                    <div>
                        <div className="font-medium text-[26px]">
                            2. Choose Your Materials
                        </div>
                        <div className="text-gray-600 w-full md:w-[380px] text-[20px]">
                            Select premium materials that ensure durability and
                            performance. We’ve got a paddle that suits your game style.
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                        <img
                            src={icon3.src}
                            alt="Icon 3"
                            className="w-[70px] h-[70px] hidden md:block"
                        />
                    </div>
                    <div>
                        <div className="font-medium text-[26px]">
                            3. Finalize Your Paddle
                        </div>
                        <div className="text-gray-600 w-full md:w-[380px] text-[20px]">
                            Review your design and finalize your paddle. Our team ensures
                            the highest quality in every detail.
                        </div>
                    </div>
                </div>

                {/* Customize Now Button */}
                <button className="text-white bg-[#BBA887] rounded-[20px] text-[24px] font-medium py-2 w-[295px] mx-auto">
                    Customize Now
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default CustomizePaddle