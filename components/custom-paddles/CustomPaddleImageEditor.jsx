'use client';
import {
  colorStringToColorArray,
  createDefaultColorOptions,
  createDefaultImageOrienter,
  createDefaultImageReader,
  createDefaultImageScrambler,
  createMarkupEditorToolStyles,
  getEditorDefaults,
  locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_fill,
  plugin_fill_locale_en_gb,
  plugin_finetune_defaults,
  plugin_finetune_locale_en_gb,
  setPlugins
} from '@pqina/pintura';
import { PinturaEditor } from '@pqina/react-pintura';
import { useEffect, useRef, useState } from 'react';

function CustomPaddlesImageEditor({
  image,
  getImage,
  side,
  className,
  id,
  getInputImages,
  field,
  setReupload,
  formData,
  activeTab
}) {
  const editorRef = useRef(null);
  const [inlineResult, setInlineResult] = useState('');
  const [frameStyle, setFrameStyle] = useState('my-custom-frame');

  setPlugins(plugin_crop, plugin_fill, plugin_annotate);
  useEffect(() => {
    if (getImage) {
      getImage(inlineResult);
    }
  }, [inlineResult]);

  const fileToDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  const handleEditorProcess = async (imageState) => {
    return fileToDataURL(imageState.dest).then((dataURL) => {
      // return fileToDataURL(imageState.dest).then((dataURL) => {
      //   console.log(dataURL);

      return dataURL;
    });
  };
  const willRenderCanvas = (shapes, state) => {
    const { utilVisibility, selectionRect } = state;
    if (utilVisibility.crop <= 0) return shapes;
    const { x, y, width, height } = selectionRect;

    return {
      ...shapes,
      interfaceShapes: [
        {
          x: x,
          y: y,
          width: width,
          height: height,
          backgroundImage: '/assets/picklepaddle.png'
        },
        ...shapes.interfaceShapes
      ]
    };
  };
  function HextoRGB(hex) {
    hex = hex.replace(/^#/, '');

    let bigint = parseInt(hex, 16);

    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r, g, b };
  }
  const handleSave = () => {
    if (editorRef.current) {
      editorRef.current.editor.processImage().then(async (res) => {
        const base64Result = await handleEditorProcess(res);
        setInlineResult(base64Result);
      });
    }
  };
  useEffect(() => {
    if (side) {
      handleSave();
    }
  }, [side]);
  const [fillColor, setFillColor] = useState([255, 255, 255]);
  const [fillColorCode, setFillColorCode] = useState('#ffffff');
  const getFillColorCode = (e) => {    
    const color = HextoRGB(e.target.value);
    setFillColor(colorStringToColorArray(`rgba(${color.r}, ${color.g}, ${color.b}, 1)`));
    setFillColorCode(e.target.value);
  };
 
  const editorDefaults = getEditorDefaults({
    imageReader: createDefaultImageReader(),
    imageOrienter: createDefaultImageOrienter(),    
    imageWriter: {
      targetSize: {
        width: 591,
        height: 1146
      },
      mimeType: 'image/png',
      postprocessImageData: (imageData) =>
        new Promise((resolve) => {
          const canvas = document.createElement('canvas');
          canvas.width = imageData.width;
          canvas.height = imageData.height;
          const ctx = canvas.getContext('2d');

          // Draw the image data onto the canvas
          ctx.putImageData(imageData, 0, 0);

          // Define the SVG path
          const svgPath = new Path2D(
            'M250.98,1126.21h81.21v-8.15l3.45-254.07c0.15-7.02,0.59-14.13,1.32-21.11c2.29-22.03,8.12-43.42,17.34-63.57   c6.3-13.77,14.4-26.66,24.08-38.29c14.28-17.16,31.11-31.87,50.03-43.71c8.61-5.39,17.62-10.33,26.78-14.68   c69.98-32.78,115.22-103.89,115.25-181.17V201.09c-0.07-73.69-43.01-141.98-109.4-173.96c-26.38-12.71-55.8-19.45-85.09-19.5h-84.33   c-9.43,0.38-19.01,0.46-28.45,0.23c-14.42-0.34-29.05-0.54-43.5-0.6c-14.45-0.06-29.05,0.91-43.37,2.87   c-12.14,1.66-24.09,4.74-35.52,9.15c-0.01,0-0.02,0.01-0.03,0.01c-24.07,8.82-45.92,22.02-64.94,39.22   c-39.97,36.5-62.96,88.47-63.08,142.59l0,300.32c0.19,77.22,45.48,148.35,115.36,181.2c10.19,4.9,20.16,10.53,29.63,16.71   c9.48,6.2,18.61,13.13,27.12,20.6c18.23,16.21,32.76,35.61,43.18,57.67c12.61,26.85,19.38,56.71,19.6,86.37l3.36,254.07V1126.21z'
          );

          // Apply the mask (destination-in)
          ctx.globalCompositeOperation = 'destination-in';
          ctx.fillStyle = 'black';
          ctx.fill(svgPath);

          // Get the masked image data
          const maskedImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

          // Clear the canvas or create a new one
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.putImageData(maskedImageData, 0, 0);

          // Draw the stroke
          ctx.globalCompositeOperation = 'source-over'; // Ensure normal drawing mode
          ctx.strokeStyle = 'red'; // Stroke color
          ctx.lineWidth = 10; // Stroke width
          ctx.stroke(svgPath);

          // Resolve with the updated masked image data
          const finalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          resolve(finalImageData);
        })
    },
    ...markup_editor_defaults,
    ...plugin_finetune_defaults,
    locale: {
      ...locale_en_gb,
      ...plugin_crop_locale_en_gb,
      ...plugin_fill_locale_en_gb,
      ...plugin_finetune_locale_en_gb,
      ...plugin_annotate_locale_en_gb,
      ...markup_editor_locale_en_gb
    }
  });
  editorDefaults.locale.annotateLabel = 'Text';
  return (
    <div className={` ${className || ''} left-0 h-full w-full`}>
      <div className='absolute  bottom-4 right-4 z-[1]'>
        <label className='text-[#BBA887] text-sm font-medium uppercase block text-center mb-0.5'>Fill</label>
      <input
      className='w-[40px] h-[40px]'
        type="color"
        id="favcolor"
        name="favcolor"
        onChange={(e) => getFillColorCode(e)}
        value={fillColorCode}
      />
      </div>
      <PinturaEditor
        {...editorDefaults}
        src={image}
        ref={editorRef}
        imageRotationRange={[-1, 1]}
        utils={['crop', 'fill', 'annotate']}
        enableButtonClose={false}
        enableButtonExport={false}
        imageCropLimitToImage={false}
        imageScrambler={createDefaultImageScrambler({
          scrambleAmount: 2,
          blurAmount: 6
        })}        
        willRenderCanvas={willRenderCanvas}
        markupEditorToolbar={[['text', 'text', { disabled: true }]]}
        markupEditorToolStyles={createMarkupEditorToolStyles({
          text: {
              fontSize: '10%',  
              color: createDefaultColorOptions().black,
              textAlign:'center',
              fontFamily:'Arial Black'      
          }  
      })}
        imageCropAspectRatio={0.674}
        imageBackgroundColor={fillColor}
        zoomAdjustWheelFactor={5}
        stickersticktoimage={true}
        cropInteractionFocus="selection"
        cropEnableZoomMatchImageAspectRatio={false}
        cropEnableRotateMatchImageAspectRatio={'always'}
        onProcess={handleEditorProcess}
      />

      <label
        htmlFor={id}
        className="absolute right-10 -top-10 sm:top-6 sm:right-[35%]  lg:right-10 flex cursor-pointer items-center gap-1 rounded-full border border-black px-3 py-1 text-xs"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#242424"
        >
          <path d="M450-328.46v-336l-98.61 98.61-42.16-43.38L480-780l170.77 170.77-42.16 43.38L510-664.46v336h-60ZM252.31-180Q222-180 201-201q-21-21-21-51.31v-108.46h60v108.46q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85h455.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-108.46h60v108.46Q780-222 759-201q-21 21-51.31 21H252.31Z" />
        </svg>
        Reupload image
        <input
          id={id}
          onChange={(e) => {
            setReupload(id);
            getInputImages(e, field);
          }}
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
        />
      </label>
    </div>
  );
}

export default CustomPaddlesImageEditor;
