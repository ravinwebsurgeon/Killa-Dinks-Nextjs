import Collage from "components/custom-paddles/Collage"
import HowItWorks from "components/custom-paddles/HowItWorks"
import Testimonials from "components/homepage/Testimonials"

const page = () => {
  return (
    <div className="bg-[#faf7eb] pb-[80px]" >
       <Collage/>
       <HowItWorks/>
       <Testimonials containerClass={'!pt-0'} sliderClass={'!mb-0'} />
    </div>
  )
}

export default page