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
function CustomPaddlesImageEditor({ image, getImage }) {
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
    return  new Promise((resolve, reject) => {
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
  const handleSave =  () => {
    if (editorRef.current) {   
      editorRef.current.editor.processImage().then(async (res) => {
        const base64Result = await handleEditorProcess(res);
        setInlineResult(base64Result); 
      });
    }
  };

  return (
    <div className="h-[calc(100vh-236px)] max-h-screen w-full md:h-[calc(95vh-200px)]">
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

      {inlineResult && <img src={inlineResult} alt="" />}
      <button className='' onClick={()=>handleSave()}>SAVE</button>
    </div>
  );
}

export default CustomPaddlesImageEditor;
