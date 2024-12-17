import React from 'react';

const page = () => {
  const data = [
    {
      key: 'Returns Accepted for 30 Days',
      value:
        ' You have up to 30 days from the date of purchase to initiate a return. If 30 days have gone by since your purchase, unfortunately, we cannot offer you a refund.'
    },
    {
      key: 'Free Return Shipping ',
      value:
        'We provide free return shipping for all eligible returns within the specified return period. To initiate a return, please contact our customer service team, and they will provide you with a prepaid shipping label.'
    },
    {
      key: 'No Restocking Fee',
      value:
        'We do not charge any restocking fees for returns. You will receive a full refund of the purchase price.'
    },
    {
      key: 'No Final Sale Items',
      value:
        'Please note that final sale items are not eligible for returns or refunds. Final sale items are clearly marked on our website and cannot be exchanged or refunded.'
    }
  ];
  return (
    <div className="mx-auto flex w-full items-center flex-col gap-8 bg-[#FAF7EB] pb-8 pt-8 lg:gap-16 lg:pb-16 lg:pt-16">
      <div className="text-center text-2xl font-[600] tracking-[1px] text-[#bba887] lg:text-5xl">
        Return
      </div>
      <div className=" lg: flex max-w-[1400px] flex-col gap-8 px-3 sm:px-5 text-center text-[16px] lg:text-[24px] lg:leading-loose">
        <div className="flex flex-col gap-8 text-start">
          <div className=" text-sm sm:text-lg text-black/50">
            We want you to be completely satisfied with your purchase from Killa Dinks. If for any
            reason you are not satisfied, we offer a hassle-free refund policy. Please review the
            following guidelines:
          </div>
          <div className="flex flex-col justify-start gap-4">
            {data.map((item, index) => (
            //   <div className="flex w-full items-start justify-between gap-4">
            //     <span className="flex min-w-max text-lg font-[500] text-[#bba887]">
            //       {index + 1}. {item.key}
            //       <div className="flex items-start text-[#bba887]"> &nbsp;:</div>
            //     </span>

            //     <div className="w-full text-start text-base text-black/50">{item.value}</div>
            //   </div>
            <div className='w-full text-start  text-sm sm:text-base text-black/50' >
                <span className="min-w-max text-lg font-[500] text-[#bba887]">{index+1}. {item.key} : &nbsp;</span> {item.value}
                </div>
            ))}
          </div>
          <div className='flex text-sm sm:text-base flex-col gap-3' >
          <div className=" text-black/50">
            To request a return or if you have any questions regarding our refund policy, please
            contact our customer service team at killadinks@gmail.com. Our team will be happy to
            assist you and provide further instructions.
          </div>
          <div className=" text-black/50">
            Please ensure that returned items are in their original condition, unused, and with all
            tags and packaging intact. We reserve the right to refuse returns if the product does
            not meet these conditions.
          </div>
          <div className=" text-black/50">
            Once your return is received and inspected, we will send you an email notification
            regarding the approval or rejection of your refund. If approved, your refund will be
            processed, and a credit will automatically be applied to your original method of payment
            within a certain number of days, depending on your card issuer's policies.
          </div>
          <div className=" text-black/50">
            Please note that it may take some time for the refunded amount to be reflected in your
            account, depending on your bank or credit card company.
          </div>
          <div className=" text-black/50">
            If you have any further questions or concerns about our refund policy, please do not
            hesitate to contact us. Your satisfaction is our top priority, and we will do our best
            to assist you.
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
