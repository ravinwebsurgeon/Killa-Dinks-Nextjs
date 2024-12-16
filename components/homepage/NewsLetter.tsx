'use client';
import { useEffect, useState } from 'react';
import client from '../../sanity/lib/client';

const NewsLetter = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const createCustomer = async () => {
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      if (data) {
        
        if (data.result.errors.email) {
          setError('Email has been Already Subscribed');
        }
        else{
          setSuccess(true);
        }
      }
    } catch (error) {
    } finally {
      setEmail('');
    }
  };

  const [newsletter, setNewsLetter] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(`*[_type == "newsletter"]`);

        if (result.length > 0) {
          setNewsLetter(result);
        }
      } catch (error) {
        console.error('Error fetching social gallery cards:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <section className="news-letter mt-[20px] bg-white pb-[72px]">
        <div className="flex justify-center pt-[72px] text-center text-[30px] text-[#BBA887]">
          {newsletter ? newsletter[0]?.text : null}
        </div>
        <div className="mx-auto mt-[20px] flex w-[90%] max-w-[641px] items-center justify-center overflow-hidden rounded-[20px] border-[1px] border-[#BBA887] lg:w-full">
          <input
            className="h-[61px] w-full border-none py-3 pl-[35px] text-[24px] font-[400] outline-none placeholder:text-black/50"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <button
            className="flex items-center pr-4 text-[16px] font-[400] text-black/50 hover:cursor-pointer lg:text-[24px]"
            onClick={() => createCustomer()} // Call handleSubmit when clicked
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
          {/* Success or error message */}
        </div>
        {success && <div className="mt-4 text-center text-green-500">Successfully subscribed!</div>}
        {error && <div className="mt-4 text-center text-red-500">{error}</div>}
      </section>
    </div>
  );
};

export default NewsLetter;
