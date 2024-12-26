'use client';

import { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
import CustomPaddleImageEditor from './CustomPaddleImageEditor';
import ImageUploader from './ImageUploader';

const CustomPaddlesEditorPopup = ({ open, closePopup, setFormData, formData }: any) => {
  const [activeTab, setActiveTab] = useState('front');
  const [showModal, setShowModal] = useState(false);
  const [reupload, setReupload] = useState('');
  const [side, setSide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [useBothSide, setuseBothSide] = useState(false);
  const [file, setFile] = useState(null);

  const getImages = async (e: any, field: any) => {

    const file = e.target.files[0];
    if (e.target.files) {
      console.log(file);

      const reader = new FileReader();
      reader.onload = async () => {
        console.log(reader.result);
        
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
  const getBothBackImage = (e: any) => {
    setFormData((prev: any) => ({
      ...prev,
      cropedFront: e,
      cropedBack: e,
      front: formData?.back,
      back: formData?.back
    }));
  };
  const getBothFrontImage = (e: any) => {
    console.log(activeTab);

    setFormData((prev: any) => ({
      ...prev,
      cropedFront: e,
      cropedBack: e,
      front: formData?.front,
      back: formData?.front
    }));
  };
  const getEditedFrontImage = (e: any, field: any) => {
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
    // console.log(formData, activeTab);

    if (formData?.cropedFront && formData?.front && activeTab === 'front' && reupload == '') {
      setActiveTab('back');
      setLoading(false);
    }
    if (loading) {
      if (formData?.cropedFront && formData?.front && formData?.back && formData?.cropedBack) {
        closeModel();
        setLoading(false);
      }
    }
  }, [formData]);
  const getSide = () => {
    if (formData?.front || formData?.back) {
      setLoading(true);
      setSide(Math.random());
    }
  };
  return (
    <div
      className={`fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center px-2 py-8 sm:p-8 ${showModal ? 'opacity-100' : 'pointer-events-none invisible opacity-0'} transition-all duration-500`}
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
        <div className="flex flex-col h-[calc(100vh-130px)] sm:h-auto sm:flex-row">
          <div className="w-full sm:max-w-[176px]">
            <div className="flex h-20 items-center justify-center bg-[#BBA887] text-2xl">
              Design Side
            </div>
            {useBothSide && (
              <button
                className={`flex items-center gap-2 border-l-2 p-4 ${activeTab === 'front' ? 'border-[#BBA887] text-[#BBA887]' : 'border-transparent'}`}
                onClick={() => setActiveTab('front')}
              >
                Both Sides
              </button>
            )}
            {!useBothSide && (
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
            )}
            {!useBothSide && (
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
            )}
          </div>
          <div className="relative max-h-screen w-full flex-1 border-[#BBA887] pt-6 h-[calc(100vh-236px)] sm:border-l md:h-[calc(95vh-200px)]">
            {activeTab === 'front' && formData?.front == '' && (
              <ImageUploader getImages={getImages} field="front" id="front" />
            )}
            {activeTab === 'back' && formData?.back == '' && (
              <ImageUploader getImages={getImages} field="back" id="back" />
            )}
            {(formData?.front != '' || formData?.back != '') && (
              <>
                <CustomPaddleImageEditor
                  setReupload={setReupload}
                  side={side}
                  formData={formData}
                  field="front"
                  activeTab={activeTab}
                  id="front-img-69"
                  image={formData?.front}
                  getInputImages={getImages}
                  getImage={(e: any) =>
                    useBothSide && activeTab === 'front'
                      ? getBothFrontImage(e)
                      : getEditedFrontImage(e, 'cropedFront')
                  }
                  className={
                    activeTab === 'front' && formData?.front != ''
                      ? 'absolute top-0 translate-x-0 transition-all duration-500'
                      : 'absolute top-0 translate-x-full transition-all duration-500'
                  }
                />

                <CustomPaddleImageEditor
                  setReupload={setReupload}
                  side={side}
                  formData={formData}
                  activeTab={activeTab}
                  field="back"
                  image={formData?.back}
                  getInputImages={getImages}
                  id="back-img-69"
                  getImage={(e: any) =>
                    useBothSide && activeTab === 'back'
                      ? getBothBackImage(e)
                      : getEditedImage(e, 'cropedBack')
                  }
                  className={
                    activeTab === 'back' && formData?.back != ''
                      ? 'absolute top-0 translate-x-0 transition-all duration-500'
                      : 'absolute top-0 translate-x-full transition-all duration-500'
                  }
                />
              </>
            )}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-3 border-t border-[#BBA887] py-5">
          <div>
            <label className="text-sm sm:text-base">
              <input
                type="checkbox"
                checked={useBothSide}
                onChange={(e) =>
                  formData?.front || formData?.back ? setuseBothSide(e.target.checked) : ''
                }
              />{' '}
              Use Same Image For Both
            </label>
          </div>
          <CustomButton
            onClick={() => getSide()}
            className={`flex max-w-min text-nowrap rounded-2xl bg-[#bba887] px-10 py-2 text-white sm:text-2xl ${loading ? 'pointer-events-none opacity-50' : ''}`}
            labelText="Save"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomPaddlesEditorPopup;
