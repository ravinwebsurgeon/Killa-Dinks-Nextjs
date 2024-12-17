'use client';
import {
  colorStringToColorArray,
  createDefaultColorOptions,
  createDefaultImageReader,
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
import { useEffect, useState } from 'react';
import CustomButton from './CustomButton';
function CustomPaddlesImageEditor({ image, getImage }: any) {
  const [inlineResult, setInlineResult] = useState('');
  const editorConfig = {
    imageReader: createDefaultImageReader(),
    imageWriter: createDefaultImageWriter(),
    ...markup_editor_defaults,
    ...plugin_finetune_defaults,
    imageCropAspectRatio: 1,   
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


  return (
    <div className="h-[calc(100vh-236px)] max-h-screen w-full md:h-[calc(95vh-200px)]">
          

      <PinturaEditor      
        util="crop,fill,annotate"
        {...editorConfig}
        src={image}        
     
        fillOptions={[
          [0, 0, 0, 1],
          [255, 255, 255, 1],
          ...Object.values(createDefaultColorOptions()),
          colorStringToColorArray('rgba(0, 0, 255, .5)')
        ]}
        markupEditorToolbar={[['text', 'text', { disabled: false }]]}
        imageCropAspectRatio={0.674}
        imageFrame={{
          id: 'myFrame',
          frameStyle: 'my-custom-frame',
          frameColor: [255, 255, 255]
        }}
        frameOptions={[['myFrame', 'My Frame']]}
        frameStyles={{
          myFrame: {
            shape: {
              frameStyle: 'my-custom-frame',
              frameColor: [255, 255, 255]
            },
            thumb:
              '<div style="top:.5em;left:.5em;right:.5em;bottom:.5em;box-shadow:inset 0 0 0 1px currentColor"></div>'
          }
        }}
        cropInteractionFocus="image"
        cropEnableZoomMatchImageAspectRatio={false}
        cropEnableRotateMatchImageAspectRatio={'always'}
        
        shapePreprocessor={(shape: {
          frameStyle: string;
          width: number;
          height: number;
          frameColor: any;
        }, options:any) => {     
          if (shape.frameStyle !== 'my-custom-frame') return;

          return [
            {
              x: 0,
              y: 0,
              width: shape.width,
              height: shape.height,              
              backgroundImage: '/assets/picklepaddle.png'
            }
          ];
        }}
        onProcess={(res) => setInlineResult(URL.createObjectURL(res.dest))}
      />

      {inlineResult && <img src={inlineResult} alt="" />}
    </div>
  );
}

export default CustomPaddlesImageEditor;
