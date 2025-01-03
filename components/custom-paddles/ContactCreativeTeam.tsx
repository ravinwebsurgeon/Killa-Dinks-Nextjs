'use client'
import React, { useEffect, useState } from 'react';
import sendEmail from 'lib/nodemailer/sendEmail';

const ContactCreativeTeam = () => {
  // State to hold form values and errors
  const [formData, setFormData] = useState({
    
    email: '',
   
    comment: '',
  });

  const [errors, setErrors] = useState({
    
    email: '',
  
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
     
      email: '',
     
      comment: '',
    };

  

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
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
          <h2>Form Submission for Killa Dinks Creative Team</h2>
          <p><strong>Email:</strong> ${formData.email}</p>
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
        'Form Submission for Killa Dinks Creative Team ',
        emailBody // Pass the email body
      );

      if (result === true) {
        // Success
        setFormStatus({
          message: 'Your message has been sent successfully!',
          type: 'success',
        });
        setFormData({
          
          email: '',
          
          comment: '',
        });
        setErrors({        
          email: '',
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
    <div className="flex flex-col gap-3 bg-[#FAF7EB]">
      <div className=" tracking-[1px] ">
        <div className=" w-full mx-auto flex flex-col justify-center lg:justify-between text-center text-2xl font-[600] text-[#bba887] lg:text-5xl">

          <div className="flex   mx-auto lg:mx-0  w-full my-8">
            <form
              className="text-xl text-black w-full font-[500] flex flex-col gap-4  rounded-lg"
              onSubmit={handleSubmit}
            >
             

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
                className="px-4 py-3 w-min text-[#bba887] hover:bg-[#bba887] hover:text-white bg-[white] mx-auto rounded-lg"
                type="submit"
              >
                Send
              </button>
              {formStatus.message && (
            <div
              className={` text-center p-1 rounded-lg ${
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

export default ContactCreativeTeam;
