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
  setUploadingImages: any;
  success: Boolean;
}) => {
  return (
    <Dialog
      open={uploadImages}
      onClose={() => {
        setUploadingImages(false);
      }}
      className="fixed inset-0 z-50"
    >
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex h-[200px] w-[500px] flex-col items-center justify-center mx-2 sm:mx-0 rounded-xl bg-white p-4 shadow-2xl">
        {(error || success) && (
            <div className="absolute top-0 flex w-full justify-end p-2">
              <button
                className="w-min text-4xl text-[#BBA887] hover:scale-[1.05]"
                onClick={() => {
                  setUploadingImages(false);
                }}
              >
                &times;
              </button>
            </div>
          )}
          {error ? (
            <div className="text-xl text-[#BBA887] text-center">{errorMessage}</div>
          ) : success ? (
            <div className="text-xl text-[#BBA887]">All images uploaded successfully!</div>
          ) : (
            <>
              <div className="loader h-10 w-10 animate-spin rounded-full border-t-4 border-[#BBA887]"></div>
              <p className="mt-4 text-center text-gray-700">Uploading Images...</p>
            </>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default UploadWithLoader;
