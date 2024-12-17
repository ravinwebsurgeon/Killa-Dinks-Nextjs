'use client';
import {
  colorStringToColorArray,
  createDefaultColorOptions,
  createDefaultImageOrienter,
  createDefaultImageReader,
  createDefaultImageScrambler,
  createDefaultImageWriter,
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
import '@pqina/pintura/pintura.css';
import { PinturaEditor } from '@pqina/react-pintura';
import { useEffect, useRef, useState } from 'react';
function CustomPaddlesImageEditor({ image, getImage, side, className, id, getInputImages, field, setReupload, formData, activeTab }) {
  const editorRef = useRef(null);
  const [inlineResult, setInlineResult] = useState('');
  const [frameStyle, setFrameStyle] = useState('my-custom-frame');
  const editorConfig = {
    imageReader: createDefaultImageReader(),
    imageWriter: createDefaultImageWriter(),
    imageOrienter: createDefaultImageOrienter(),
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
  };

  editorConfig.locale.labelButtonExport = 'Save';
  editorConfig.locale.annotateLabel = 'Text';

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
  return (
    <div className={` ${className || ''} left-0 h-full w-full`}>
      <PinturaEditor
        util="crop,fill,annotate"
        {...editorConfig}
        src={image}
        ref={editorRef}
        imageRotationRange={[-1, 1]}
        enableButtonClose={false}
        enableButtonExport={false}
        imageCropLimitToImage={false}
        imageScrambler={createDefaultImageScrambler({
          scrambleAmount: 2,
          blurAmount: 6
        })}
        fillOptions={[
          [0, 0, 0, 1],
          [255, 255, 255, 1],
          ...Object.values(createDefaultColorOptions()),
          colorStringToColorArray('rgba(0, 0, 255, .5)')
        ]}
        willRenderCanvas={willRenderCanvas}
        markupEditorToolbar={[['text', 'text', { disabled: true }]]}
        imageCropAspectRatio={0.674}
        zoomAdjustWheelFactor={5}
        stickersticktoimage={true}
        cropInteractionFocus="selection"
        cropEnableZoomMatchImageAspectRatio={false}
        cropEnableRotateMatchImageAspectRatio={'always'}
        onProcess={handleEditorProcess}
      />

      <label
        htmlFor={id}
        className="absolute right-10 top-6 flex cursor-pointer items-center gap-1 rounded-full border border-black px-3 py-1 text-xs"
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
          onChange={(e) => {setReupload(id); getInputImages(e, field)}}
          type="file"
          accept="image/png, image/jpeg"
          className="hidden"
        />
      </label>

    </div>
  );
}

export default CustomPaddlesImageEditor;
