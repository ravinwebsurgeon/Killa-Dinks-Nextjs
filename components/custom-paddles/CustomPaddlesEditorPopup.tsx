'use client';

import { useEffect, useState } from 'react';
import CustomPaddleImageEditor from './CustomPaddleImageEditor';
import ImageUploader from './ImageUploader';
import CustomButton from './CustomButton';

const CustomPaddlesEditorPopup = ({ open, closePopup, setFormData, formData }: any) => {
  const [activeTab, setActiveTab] = useState('front');
  const [showModal, setShowModal] = useState(false);

  const getImages = (e: any, field: any) => {
    const file = e.target.files[0];
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prev: any) => ({
          ...prev,
          [field]: reader.result
        }));
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
      reader.readAsDataURL(file);
    }
  };
  const getEditedImage = (e: any, field: any) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: e
    }));
  };
  const closeModel = () => {
    setShowModal(false);
    if (closePopup) {
      setTimeout(() => {
        closePopup(false);
      }, 550);
    }
  };
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setShowModal(true);
      }, 100);
    }
  }, [open]);
  useEffect(() => {
    if (formData?.cropedFront && formData?.front) {
      setActiveTab('back');
    }
    if (formData?.cropedFront && formData?.front && formData?.cropedBack && formData?.back) {
      closeModel();
    }
  }, [formData]);

  return (
    <div
      className={`fixed left-0 z-10 top-0 flex h-full w-full items-center justify-center p-8 ${showModal ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}
    >
      <div className="relative w-full max-w-[1560px] overflow-hidden rounded-lg bg-white shadow-2xl">
        <button className="absolute right-4 top-4 z-[99]" onClick={() => closeModel()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000"
          >
            <path d="M256-213.85 213.85-256l224-224-224-224L256-746.15l224 224 224-224L746.15-704l-224 224 224 224L704-213.85l-224-224-224 224Z" />
          </svg>
        </button>
        <div className="flex">
          <div className="w-full max-w-[176px]">
            <div className="flex h-20 items-center justify-center bg-[#BBA887] text-2xl">
              Design Side
            </div>
            <button
              className={`flex items-center gap-2 border-l-2 p-4 ${activeTab === 'front' ? 'border-[#BBA887] text-[#BBA887]' : 'border-transparent'}`}
              onClick={() => setActiveTab('front')}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-sm text-white ${activeTab === 'front' ? 'bg-[#BBA887]' : 'bg-black'}`}
              >
                1
              </span>
              Front Side
            </button>
            <button
              className={`flex items-center gap-2 border-l-2 p-4 ${activeTab === 'back' ? 'border-[#BBA887] text-[#BBA887]' : 'border-transparent'}`}
              onClick={() => setActiveTab('back')}
            >
              <span
                className={`flex h-5 w-5 items-center justify-center rounded-full text-sm text-white ${activeTab === 'back' ? 'bg-[#BBA887]' : 'bg-black'}`}
              >
                2
              </span>
              Back Side
            </button>
          </div>
          <div className="flex-1 border-l border-[#BBA887] pt-6">
            {activeTab === 'front' && formData?.front == '' && (
              <ImageUploader getImages={getImages} field="front" id="front" />
            )}
            {activeTab === 'back' && formData?.back == '' && (
              <ImageUploader getImages={getImages} field="back" id="back" />
            )}
            {activeTab === 'front' && formData?.front != '' && (
              <CustomPaddleImageEditor
                image={formData?.front}
                getImage={(e: any) => getEditedImage(e, 'cropedFront')}
              />
            )}
            {activeTab === 'back' && formData?.back != '' && (
              <CustomPaddleImageEditor
                image={formData?.back}
                getImage={(e: any) => getEditedImage(e, 'cropedBack')}
              />
            )}
          </div>
        </div>
        <div className='w-full flex py-5 justify-center flex-col gap-3 items-center border-t border-[#BBA887]' >
          <div><label> <input type='checkbox'/> Use Same Image For Both</label></div>
          <CustomButton className='bg-[#bba887] text-2xl   flex px-10 py-2 text-white rounded-2xl  max-w-min text-nowrap  ' labelText='Save' />
          </div> 

      </div>
      
    </div>
  );
};

export default CustomPaddlesEditorPopup;
