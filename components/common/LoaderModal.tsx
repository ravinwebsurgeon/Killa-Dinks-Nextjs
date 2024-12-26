import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';

const UploadWithLoader = ({
  uploadImages,
  error,
  errorMessage,
  setUploadingImages,
  success
}: {
  uploadImages: any;
  error: any;
  errorMessage: string;
  setUploadingImages:any;
  success:Boolean
}) => {

    

  return (
    <Dialog open={uploadImages} onClose={() => {setUploadingImages(false)}} className="fixed inset-0   z-50">
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col relative items-center justify-center rounded-xl w-[500px] h-[200px] bg-[#BBA887] p-4 shadow-2xl">
        <div className="flex w-full absolute top-0  p-2 justify-end">
              <button className="w-min text-4xl hover:scale-[1.05] text-white " onClick={()=>{setUploadingImages(false)}}>
                &times;
              </button>
            </div>
            {error ? (
            <div className="text-white text-xl">{errorMessage}</div>
          ) : success ? (
            <div className="text-white  text-xl">All images uploaded successfully!</div>
          ) : (
            <>
              <div className="loader h-10 w-10 animate-spin rounded-full border-t-4 border-[#FAF7EB]"></div>
              <p className="mt-4 text-center text-gray-700">Uploading Images...</p>
            </>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default UploadWithLoader;
