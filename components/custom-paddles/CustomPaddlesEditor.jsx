'use client';
import { useEffect, useState } from 'react';
import CustomPaddleBottomSvg from './CustomPaddleBottomSvg';
import CustomPaddleSvg from './CustomPaddleSvg';
import CustomPaddlesEditorPopup from './CustomPaddlesEditorPopup';
import { AddToCart } from 'components/cart/add-to-cart';
const CustomPaddlesEditor = ({ getProductData }) => {
  const [openModal, setOpenModal] = useState(false);
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
    paddlesData?.bottomPiece ? { key: 'Bottom Piece', value: paddlesData.bottomPiece } : null,
    paddlesData?.front ? { key: 'Front', value: paddlesData.front } : null,
    paddlesData?.back ? { key: 'Back', value: paddlesData.back } : null,
    paddlesData?.cropedFront ? { key: 'Cropped Front', value: paddlesData.cropedFront } : null,
    paddlesData?.cropedBack ? { key: 'Cropped Back', value: paddlesData.cropedBack } : null,

  ].filter(attr => attr !== null); // Filter out null values
  
  
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
  useEffect(() => {
    console.log(paddlesData);
  }, [paddlesData]);
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
  };
  return (
    <div className="bg-[#FAF7EB]">
      <div className="mx-auto flex max-w-[1440px] gap-6 py-10">
        <div className="flex-1">
          <div className="sticky top-0 flex gap-4">
            <div className="thumbnail-images w-full max-w-[100px]">
              <div className="rounded-lg border border-gray-200 p-3">
                <CustomPaddleSvg
                  image={paddlesData?.cropedFront}
                  paddleEdge={
                    paddlesData?.type === 'raw-carbon-fiber' ? '#000' : paddlesData?.paddleEdge
                  }
                  paddleGrip={
                    paddlesData?.type === 'raw-carbon-fiber' ? '#000' : paddlesData?.paddleGrip
                  }
                  paddleBand={
                    paddlesData?.type === 'raw-carbon-fiber' ? '#000' : paddlesData?.paddleBand
                  }
                  paddleText={
                    paddlesData?.type === 'raw-carbon-fiber'
                      ? '#fff'
                      : paddlesData?.paddleBand === '#fff'
                        ? '#000'
                        : '#fff'
                  }
                  paddleGripStroke={
                    paddlesData?.type === 'raw-carbon-fiber'
                      ? '#fff'
                      : paddlesData?.paddleGrip === '#fff'
                        ? '#000'
                        : '#fff'
                  }
                />
              </div>
            </div>
            <div className="main-gallery-images w-full">
              <CustomPaddleSvg
                image={paddlesData?.cropedFront}
                paddleEdge={
                  paddlesData?.type === 'raw-carbon-fiber' ? '#000' : paddlesData?.paddleEdge
                }
                paddleGrip={
                  paddlesData?.type === 'raw-carbon-fiber' ? '#000' : paddlesData?.paddleGrip
                }
                paddleBand={
                  paddlesData?.type === 'raw-carbon-fiber' ? '#000' : paddlesData?.paddleBand
                }
                paddleText={
                  paddlesData?.type === 'raw-carbon-fiber'
                    ? '#fff'
                    : paddlesData?.paddleBand === '#fff'
                      ? '#000'
                      : '#fff'
                }
                paddleGripStroke={
                  paddlesData?.type === 'raw-carbon-fiber'
                    ? '#fff'
                    : paddlesData?.paddleGrip === '#fff'
                      ? '#000'
                      : '#fff'
                }
              />
              <div className="absolute bottom-0 right-0">
                <CustomPaddleBottomSvg bottomPiece={paddlesData?.bottomPiece} />
                <div className="px-6 py-4 text-center text-sm font-[500] uppercase tracking-wide text-[#bba887]">
                  Bottom Piece
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="max-w-[450px]">
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
              <div className="mb-2 flex gap-3 text-base font-[500] uppercase tracking-wide text-[#bba887]">
                2. Upload image for front side
              </div>
              <div>
                <button className="" onClick={() => setOpenModal(true)}>
                  Start Design
                </button>

                {openModal && (
                  <CustomPaddlesEditorPopup
                    open={openModal}
                    closePopup={closePopup}
                    formData={paddlesData}
                    setFormData={setPaddlesData}
                  />
                )}
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
                      <div className="flex justify-center gap-5 border-b border-black px-5 py-4">
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
                <AddToCart product={getProductData} productQuantity={1} attributes={attributesArr} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPaddlesEditor;
