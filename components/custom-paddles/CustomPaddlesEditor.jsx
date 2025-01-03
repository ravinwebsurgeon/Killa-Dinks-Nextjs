'use client';
import { AddToCartBuilder } from 'components/cart/add-to-cart';
import { toPng } from 'html-to-image';

// import { useRef, useState } from 'react';
import { AddToCart } from 'components/cart/add-to-cart';
import { useEffect, useRef, useState } from 'react';
import CustomPaddleBottomSvg from './CustomPaddleBottomSvg';
import CustomPaddleSvg from './CustomPaddleSvg';
import CustomPaddlesEditorPopup from './CustomPaddlesEditorPopup';
import UploadWithLoader from 'components/common/LoaderModal';
import restartIcon from 'public/assets/restart.png';
import ContactCreativeTeam from './ContactCreativeTeam';

const CustomPaddlesEditor = ({ getProductData }) => {
  const capture = useRef();
  const [selectedSide, setSelectedSide] = useState('front');
  const [openModal, setOpenModal] = useState(false);
  const [uploadingImages, setUploadingImages] = useState(false);
  const [imagesError, setImagesError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [contactWithTeam, setContactWithTeam] = useState(false);

  const [paddlesData, setPaddlesData] = useState({
    type: 'fiberglass',
    frontImage: '',
    paddleEdge: '#000',
    paddleBand: '#000',
    paddleGrip: '#000',
    bottomPiece: '#000',
    front: '',
    back: '',
    cropedFront: '',
    cropedBack: ''
  });

  // { frontImage: paddlesData?.frontImage },
  // { paddleEdge: paddlesData?.paddleEdge },
  // { paddleBand: paddlesData?.paddleBand },
  // { paddleGrip:paddlesData?.paddleGrip },
  // { bottomPiece: paddlesData?.bottomPiece},
  // { front: paddlesData?.front},
  // { back:paddlesData?.back},
  // { cropedFront:paddlesData?.cropedFront},
  // { cropedBack: paddlesData?.cropedBack }

  const attributesArr = [
    paddlesData?.type ? { key: 'Type', value: paddlesData.type } : null,
    paddlesData?.frontImage ? { key: 'Front Image', value: paddlesData.frontImage } : null,
    paddlesData?.paddleEdge ? { key: 'Edge', value: paddlesData.paddleEdge } : null,
    paddlesData?.paddleBand ? { key: 'Paddle Band', value: paddlesData.paddleBand } : null,
    paddlesData?.paddleGrip ? { key: 'Grip', value: paddlesData.paddleGrip } : null,
    paddlesData?.bottomPiece ? { key: 'Bottom Piece', value: paddlesData.bottomPiece } : null
  ].filter((attr) => attr !== null); // Filter out null values
  const onCapture = () => {
    toPng(capture.current, { cacheBust: true })
      .then((dataUrl) => {
        setPaddlesData((prev) => ({
          ...prev,
          preview: dataUrl
        }));
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const getImages = (e, field) => {
    const file = e.target.files[0];
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = () => {
        setPaddlesData((prev) => ({
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
  const submitButton = async () => {
    if (
      !paddlesData.front ||
      !paddlesData.back ||
      !paddlesData?.cropedFront ||
      !paddlesData?.cropedBack
    ) {
      setUploadingImages(true);
      setImagesError(true);
      setErrorMessage('Please Upload the Both Images');
      return;
    }

    try {
      setUploadingImages(true);
      setImagesError(false);

      const imagesToUpload = [
        { data: paddlesData?.front, name: `front/${Date.now()}`, type: 'image/png', key: 'front' },
        { data: paddlesData?.back, name: `back/${Date.now()}`, type: 'image/png', key: 'back' },
        {
          data: paddlesData?.cropedFront,
          name: `cropped-front/${Date.now()}`,
          type: 'image/png',
          key: 'croppedFront'
        },
        {
          data: paddlesData?.cropedBack,
          name: `cropped-back/${Date.now()}`,
          type: 'image/png',
          key: 'croppedBack'
        },
        {
          data: paddlesData?.preview,
          name: `preview/${Date.now()}`,
          type: 'image/png',
          key: 'preview'
        }
      ];

      const convertBase64ToBinary = (base64String) => {
        const strippedBase64 = base64String.replace(/^data:image\/\w+;base64,/, '');
        const binaryString = atob(strippedBase64);
        const binaryData = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          binaryData[i] = binaryString.charCodeAt(i);
        }
        return binaryData;
      };

      const uploadResults = {}; // To store successful uploads as { key: url }
      const failedUploads = []; // To track failed upload indices

      for (const [index, { data, name, type, key }] of imagesToUpload.entries()) {
        if (!data) {
          failedUploads.push(key);
          continue;
        }

        try {
          const response = await fetch('/api/imageUpload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              fileName: name,
              fileType: type
            })
          });

          if (!response.ok) {
            throw new Error(`Failed to get presigned URL for ${name}`);
          }

          const { uploadUrl } = await response.json();
          const binaryData = convertBase64ToBinary(data);

          const uploadResponse = await fetch(uploadUrl, {
            method: 'PUT',
            headers: {
              'Content-Type': type
            },
            body: binaryData
          });

          if (!uploadResponse.ok) {
            throw new Error(`File upload failed for ${name}`);
          }

          const fileUrl = uploadUrl.split('?')[0];
          uploadResults[key] = fileUrl;
        } catch (uploadError) {
          failedUploads.push(key); // Track failed key
        }
      }

      const allUploaded = failedUploads.length === 0;

      if (allUploaded) {
        setUploadingImages(false);
      } else {
        setUploadingImages(true);
        setImagesError(true);
        setErrorMessage('Uploading Failed! Please Try again ');
      }

      return { allUploaded, uploadResults, failedUploads };
    } catch (error) {
      return { allUploaded: false, uploadResults: {}, failedUploads: [] };
    }
  };

  useEffect(() => {}, [paddlesData]);
  const selectColors = [
    {
      heading: 'Edgeguard',
      field: 'paddleEdge',
      colors: [
        {
          label: 'Black',
          code: '#000'
        },
        {
          label: 'White',
          code: '#fff'
        },
        {
          label: 'Red',
          code: '#cb2436'
        },
        {
          label: 'Pink',
          code: '#f761c2'
        },
        {
          label: 'Blue',
          code: '#1a35a8'
        }
      ]
    },
    {
      heading: 'Grip',
      field: 'paddleGrip',
      colors: [
        {
          label: 'Black',
          code: '#000'
        },
        {
          label: 'White',
          code: '#fff'
        },
        {
          labe: 'Pink',
          code: '#eb65ad'
        },
        {
          label: 'Blue',
          code: '#1d3783'
        },
        {
          label: 'Red',
          code: '#c03935'
        },
        {
          label: 'Brown',
          code: '#a04a25'
        }
      ]
    },
    {
      heading: 'Band',
      field: 'paddleBand',
      colors: [
        {
          label: 'Black',
          code: '#000'
        },
        {
          label: 'White',
          code: '#fff'
        }
      ]
    },

    {
      heading: 'Bottom Piece',
      field: 'bottomPiece',
      colors: [
        {
          label: 'Black',
          code: '#000'
        },
        {
          label: 'White',
          code: '#fff'
        }
      ]
    }
  ];
  const closePopup = () => {
    setOpenModal(false);
    onCapture();
  };

  const handleRestart = () => {
    setPaddlesData({
      type: 'fiberglass',
      frontImage: '',
      paddleEdge: '#000',
      paddleBand: '#000',
      paddleGrip: '#000',
      bottomPiece: '#000',
      front: '',
      back: '',
      cropedFront: '',
      cropedBack: ''
    });
  };
  
  const [isModified, setIsModified] = useState(false);

  // Track changes to paddlesData to show the restart button
  useEffect(() => {
    const initialData = {
      type: 'fiberglass',
      frontImage: '',
      paddleEdge: '#000',
      paddleBand: '#000',
      paddleGrip: '#000',
      bottomPiece: '#000',
      front: '',
      back: '',
      cropedFront: '',
      cropedBack: ''
    };

    const isDifferent = JSON.stringify(paddlesData) !== JSON.stringify(initialData);
    setIsModified(isDifferent);
  }, [paddlesData]);

  return (
    <div id="custom-paddle-builder" className="bg-[#FAF7EB]">
      <div className="both-sides fixed left-0 top-0 z-[-1] flex gap-6">
        <div className="flex gap-6" ref={capture}>
          <div className="flex-1">
            <div className="my-6 block text-center text-2xl font-[500] uppercase text-[#bba887]">
              Front Side
            </div>
            <CustomPaddleSvg
              image={paddlesData?.cropedFront}
              paddleInner={paddlesData?.type === 'raw-carbon-fiber' ? '#000' : '#f2f2f2'}
              paddleEdge={paddlesData?.paddleEdge}
              paddleGrip={paddlesData?.paddleGrip}
              paddleBand={paddlesData?.paddleBand}
              paddleText={
                // paddlesData?.type === 'raw-carbon-fiber'
                //   ? '#fff'
                //   :
                paddlesData?.paddleBand === '#fff' ? '#000' : '#fff'
              }
              paddleGripStroke={
                // paddlesData?.type === 'raw-carbon-fiber'
                //   ? '#fff'
                //   :
                paddlesData?.paddleGrip === '#fff' ? '#000' : '#fff'
              }
            />
          </div>
          <div className="flex-1">
            <div className="my-6 block text-center text-2xl font-[500] uppercase text-[#bba887]">
              Back Side
            </div>
            <CustomPaddleSvg
              paddleInner={paddlesData?.type === 'raw-carbon-fiber' ? '#000' : '#f2f2f2'}
              image={paddlesData?.cropedBack}
              paddleEdge={paddlesData?.paddleEdge}
              paddleGrip={paddlesData?.paddleGrip}
              paddleBand={paddlesData?.paddleBand}
              paddleText={
                // paddlesData?.type === 'raw-carbon-fiber'
                //   ? '#fff'
                //   :
                paddlesData?.paddleBand === '#fff' ? '#000' : '#fff'
              }
              paddleGripStroke={
                // paddlesData?.type === 'raw-carbon-fiber'
                //   ? '#fff'
                //   :
                paddlesData?.paddleGrip === '#fff' ? '#000' : '#fff'
              }
            />
          </div>
        </div>
      </div>
      {/* <div id="custom-paddle-builder" className="bg-[#FAF7EB]"> */}
      <div className="mx-4 flex max-w-[1440px] flex-col gap-6 py-10 md:mx-5 lg:flex-row xl:mx-auto xl:pl-[43px]">
        <div className="flex-1">
          <div className="sticky top-0 flex gap-4">
            <div className="thumbnail-images hidden w-full max-w-[100px] lg:block">
              <div className="rounded-lg border border-gray-200 p-3">
                <CustomPaddleSvg
                  image={
                    selectedSide === 'front' ? paddlesData?.cropedFront : paddlesData?.cropedBack
                  }
                  paddleInner={paddlesData?.type === 'raw-carbon-fiber' ? '#000' : '#f2f2f2'}
                  paddleEdge={paddlesData?.paddleEdge}
                  paddleGrip={paddlesData?.paddleGrip}
                  paddleBand={paddlesData?.paddleBand}
                  paddleText={
                    // paddlesData?.type === 'raw-carbon-fiber'
                    //   ? '#fff'
                    //   :
                    paddlesData?.paddleBand === '#fff' ? '#000' : '#fff'
                  }
                  paddleGripStroke={
                    // paddlesData?.type === 'raw-carbon-fiber'
                    //   ? '#fff'
                    //   :
                    paddlesData?.paddleGrip === '#fff' ? '#000' : '#fff'
                  }
                  clipPathId={'paddleClip1'}
                />
              </div>
            </div>
            <div className="main-gallery-images w-full">
              <div className="relative mx-auto w-full max-w-[400px] lg:max-w-full">
                {selectedSide === 'front' && (
                  <CustomPaddleSvg
                    image={paddlesData?.cropedFront}
                    paddleInner={paddlesData?.type === 'raw-carbon-fiber' ? '#000' : '#f2f2f2'}
                    paddleEdge={
                      // paddlesData?.type === 'raw-carbon-fiber' ? '#000' :
                      paddlesData?.paddleEdge
                    }
                    paddleGrip={
                      // paddlesData?.type === 'raw-carbon-fiber' ? '#000' :
                      paddlesData?.paddleGrip
                    }
                    paddleBand={
                      // paddlesData?.type === 'raw-carbon-fiber' ? '#000' :
                      paddlesData?.paddleBand
                    }
                    paddleText={
                      // paddlesData?.type === 'raw-carbon-fiber'
                      //   ? '#fff'
                      //   :
                      paddlesData?.paddleBand === '#fff' ? '#000' : '#fff'
                    }
                    paddleGripStroke={
                      // paddlesData?.type === 'raw-carbon-fiber'
                      //   ? '#fff'
                      //   :
                      paddlesData?.paddleGrip === '#fff' ? '#000' : '#fff'
                    }
                    paddleClip={'paddleClip2'}
                  />
                )}
                <div className="absolute bottom-0 right-0">
                  <CustomPaddleBottomSvg bottomPiece={paddlesData?.bottomPiece} />
                  <div className="px-6 py-4 text-center text-sm font-[500] uppercase tracking-wide text-[#bba887]">
                    Bottom Piece
                  </div>
                </div>

                {selectedSide === 'back' && (
                  <CustomPaddleSvg
                    paddleInner={paddlesData?.type === 'raw-carbon-fiber' ? '#000' : '#f2f2f2'}
                    image={paddlesData?.cropedBack}
                    paddleEdge={paddlesData?.paddleEdge}
                    paddleGrip={paddlesData?.paddleGrip}
                    paddleBand={paddlesData?.paddleBand}
                    paddleText={
                      // paddlesData?.type === 'raw-carbon-fiber'
                      //   ? '#fff'
                      //   :
                      paddlesData?.paddleBand === '#fff' ? '#000' : '#fff'
                    }
                    paddleGripStroke={
                      // paddlesData?.type === 'raw-carbon-fiber'
                      //   ? '#fff'
                      //   :
                      paddlesData?.paddleGrip === '#fff' ? '#000' : '#fff'
                    }
                  />
                )}
              </div>
              <div className="mt-4 flex items-center justify-center gap-3">
                <div className="flex items-center justify-center rounded-full bg-white p-2">
                  <button
                    onClick={() => setSelectedSide('front')}
                    className={` ${selectedSide === 'front' ? 'bg-[#bba887] text-[#fff]' : ''} block cursor-pointer rounded-full px-4 py-3 text-center text-sm font-[500] uppercase`}
                  >
                    Front Side
                  </button>
                  <button
                    onClick={() => setSelectedSide('back')}
                    className={`${selectedSide === 'back' ? 'bg-[#bba887] text-[#fff]' : ''} block cursor-pointer rounded-full px-4 py-3 text-center text-sm font-[500] uppercase`}
                  >
                    Back Side
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mx-auto w-full max-w-[550px]">
            <div>
              <div className="mb-2 flex gap-3 text-base font-[500] uppercase tracking-wide text-[#bba887]">
                1. Select Paddle Type
              </div>
              <div className="flex gap-2">
                <label
                  htmlFor="fiberglass"
                  className={`block cursor-pointer rounded-full border border-[#bba887] px-4 py-3 text-center text-sm font-[500] uppercase ${paddlesData?.type === 'fiberglass' ? 'bg-[#bba887] text-[#fff]' : 'bg-white text-[#bba887]'}`}
                >
                  Fiber glass
                </label>
                <input
                  onChange={() => setPaddlesData((prev) => ({ ...prev, type: 'fiberglass' }))}
                  type="radio"
                  value="fiberglass"
                  id="fiberglass"
                  name="paddleType"
                  className="hidden"
                />
                <label
                  htmlFor="raw-carbon-fiber"
                  className={`block cursor-pointer rounded-full border border-[#bba887] px-4 py-3 text-center text-sm font-[500] uppercase text-[#bba887] ${paddlesData?.type === 'raw-carbon-fiber' ? 'bg-[#bba887] text-[#fff]' : 'bg-white text-[#bba887]'} `}
                >
                  Raw Carbon Fiber
                </label>
                <input
                  onChange={() => setPaddlesData((prev) => ({ ...prev, type: 'raw-carbon-fiber' }))}
                  type="radio"
                  value="raw-carbon-fiber"
                  id="raw-carbon-fiber"
                  name="paddleType"
                  className="hidden"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="mb-2 flex justify-between gap-3 text-base font-[500] uppercase tracking-wide text-[#bba887]">
                2. Upload your Logos{' '}
                {isModified &&<button
                  onClick={handleRestart}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg tracking-wide text-[#BBA887] underline"
                >
                  Restart <img className="h-5" src={restartIcon.src} />
                </button>}
              </div>
              <div>
                <button
                  className="relative flex w-full items-center justify-center rounded-lg border border-[#BBA887] p-4 tracking-wide text-[#BBA887] hover:bg-[#BBA887] hover:text-[#fff]"
                  onClick={() => setOpenModal(true)}
                >
                  Start Design
                </button>

                <CustomPaddlesEditorPopup
                  open={openModal}
                  closePopup={closePopup}
                  formData={paddlesData}
                  setFormData={setPaddlesData}
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="mb-2 flex gap-3 text-base font-[500] uppercase tracking-wide text-[#bba887]">
                3. Select Colors
              </div>
              <div className="grid grid-cols-2 border border-b-0 border-black">
                {selectColors &&
                  selectColors.map((item, i) => (
                    <div className={`${i % 2 == 1 ? 'border-l border-black' : ''}`} key={i}>
                      <div className="border-b border-black px-6 py-4 text-center text-sm font-[500] uppercase tracking-wide text-[#bba887]">
                        {item?.heading}
                      </div>
                      <div className="flex flex-wrap justify-center gap-5 border-b border-black px-5 py-4">
                        {item?.colors &&
                          item?.colors.map((childItem, i) => (
                            <button
                              key={i}
                              onClick={() =>
                                setPaddlesData((prev) => ({
                                  ...prev,
                                  [item?.field]: childItem.code
                                }))
                              }
                              className={`flex h-14 w-14 items-center justify-center rounded-full shadow-10xl ${paddlesData[item?.field] == childItem.code ? 'border-4 border-[#bba887]' : ''}`}
                            >
                              <span
                                className="block h-[40px] w-[40px] rounded-full"
                                style={{ backgroundColor: childItem.code }}
                              ></span>
                            </button>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            {/* <button className=' mt-5 flex w-full items-center justify-center rounded-lg  bg-[#BBA887]  hover:text-[#BBA887] hover:bg-white border border-[#BBA887] p-4 tracking-wide text-white' >Add to Cart</button> */}

            {getProductData && (
              <div className="mt-5">
                <AddToCartBuilder
                  product={getProductData}
                  productQuantity={1}
                  submitButton={submitButton}
                  attributes={attributesArr}
                />
              </div>
            )}
            <div className="relative mt-5 flex items-center">
              <button
                onClick={() => setContactWithTeam(true)}
                className="flex w-full cursor-pointer items-center justify-center rounded-lg tracking-wide text-[#BBA887] underline"
              >
                Contact Killa Dinks Creative Team
              </button>
              {contactWithTeam && (
                <div
                  className="absolute right-0 cursor-pointer text-3xl text-[#BBA887]"
                  onClick={() => setContactWithTeam(false)}
                >
                  &times;{' '}
                </div>
              )}
            </div>
            <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          contactWithTeam ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        } w-full`}
      >
        <div className="mt-4">
          <ContactCreativeTeam />
        </div>
      </div>
          </div>
        </div>
      </div>
      <UploadWithLoader
        error={imagesError}
        errorMessage={errorMessage}
        uploadImages={uploadingImages}
        setUploadingImages={setUploadingImages}
        success={success}
      />
    </div>
  );
};

export default CustomPaddlesEditor;
