'use client'
import React, { useState } from 'react'
import createNewsletterCustomer from '../../app/newsletter/mutation'

const NewsLetter = () => {
    const [email, setEmail] = useState<string>(''); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [success, setSuccess] = useState<boolean>(false); 
  const [error, setError] = useState<string>(''); 

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);  
    setError('');  

    try {
      // Call backend function to create the customer and subscribe them
    //   const customerId = await createNewsletterCustomer(email);
      setSuccess(true); // Mark the form as successfully submitted
      setEmail(''); // Clear the email input field
    } catch (err:any) {
      setError(err.message || 'Something went wrong. Please try again later.');
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  return (
    <div>
    <section className="news-letter pb-[72px] mt-[20px] bg-white">
        <div className="text-[30px] text-center text-[#BBA887] flex justify-center pt-[72px]">
            Subscribe to Killa Dinks Newsletter
        </div>
        <div className="flex justify-center max-w-[641px] mt-[20px] lg:w-full w-[90%] overflow-hidden items-center border-[#BBA887] border-[1px]  mx-auto  rounded-[20px] ">
        <input
            className="w-full text-[24px] h-[61px] pl-[35px] py-3 placeholder:text-black/50 font-[400] outline-none border-none"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <button
            className="hover:cursor-pointer flex items-center pr-4 text-black/50 text-[16px] lg:text-[24px] font-[400]"
            onClick={handleSubmit} // Call handleSubmit when clicked
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
           {/* Success or error message */}
        {/* {success && <div className="text-center text-green-500 mt-4">Successfully subscribed!</div>}
        {error && <div className="text-center text-red-500 mt-4">{error}</div>} */}
        </div>
    </section>
</div>
  )
}

export default NewsLetter