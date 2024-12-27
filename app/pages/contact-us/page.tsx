'use client'
import React, { useEffect, useState } from 'react';
import sendEmail from 'lib/nodemailer/sendEmail';

const Page = () => {
  // State to hold form values and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | '';
  }>({
    message: '',
    type: '',
  });

  // Handle input change
  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form validation function
  const validate = () => {
    let isValid = true;
    let newErrors = {
      name: '',
      email: '',
      phone: '',
      comment: '',
    };

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Phone number validation
    const phoneRegex = /^[0-9]{10}$/; // Example: requires a 10-digit phone number
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Comment validation
    if (!formData.comment) {
      newErrors.comment = 'Comment is required';
      isValid = false;
    }

    setErrors(newErrors); 
    return isValid;
  };
  
  
  // Handle form submission
  const handleSubmit = async(e: any) => {
    e.preventDefault();
    if (validate()) {
      const emailBody = `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone Number:</strong> ${formData.phone}</p>
          <p><strong>Comment:</strong></p>
          <p>${formData.comment}</p>
        </div>
      `;
  
      // sendEmail(
      //   formData?.email, // Replace with your email address
      //   'New Contact Form Submission'
      //   ,
      //   emailBody // Pass the email body
      // );
      
      const result = await sendEmail(
        // formData?.email, // Replace with your email address
        'New Contact Form Submission',
        emailBody // Pass the email body
      );

      if (result === true) {
        // Success
        setFormStatus({
          message: 'Your message has been sent successfully!',
          type: 'success',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          comment: '',
        });
        setErrors({
          name: '',
          email: '',
          phone: '',
          comment: '',
        });
      } else {
        // Error
        setFormStatus({
          message: 'There was an error sending your message. Please try again later.',
          type: 'error',
        });
      }
    }
  };

  

  return (
    <div className="flex flex-col gap-4 bg-[#FAF7EB]">
      <div className="mx-4 tracking-[1px] lg:mx-[20px] lg:pt-[47px] xl:mx-[43px]">
        <div className="py-24 max-w-[1400px] w-full mx-auto flex flex-col justify-center lg:flex-row lg:justify-between text-center text-2xl font-[600] text-[#bba887] lg:text-5xl">
          <div className="p-6 text-4xl xl:text-6xl">Contact Us</div>

          <div className="flex max-w-[600px]  mx-auto lg:mx-0  w-full my-8">
            <form
              className="text-xl text-black w-full font-[500] flex flex-col gap-4 md:gap-6 lg:gap-8 rounded-lg"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-input">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="placeholder:text-[#bba887]"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name}</span>
                )}
              </div>

              <div className="contact-form-input">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="placeholder:text-[#bba887]"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email}</span>
                )}
              </div>

              <div className="contact-form-input">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="placeholder:text-[#bba887]"
                  placeholder="Phone number"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm">{errors.phone}</span>
                )}
              </div>

              <div className="contact-form-input">
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="resize-none placeholder:text-[#bba887] w-full"
                  rows={4}
                  placeholder="Comment"
                ></textarea>
                {errors.comment && (
                  <span className="text-red-500 text-sm">{errors.comment}</span>
                )}
              </div>

              <button
                className="px-4 py-3 w-min text-[#bba887] hover:bg-[#bba887] hover:text-white bg-[white] hover:text-[#bba887] mx-auto rounded-lg"
                type="submit"
              >
                Send
              </button>
              {formStatus.message && (
            <div
              className={`mt-4 text-center p-3 rounded-lg ${
                formStatus.type === 'success'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {formStatus.message}
            </div>
          )}
            </form>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page;
