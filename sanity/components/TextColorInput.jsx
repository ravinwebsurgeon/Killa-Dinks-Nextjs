import React, { useEffect } from 'react';
import { useFormValue } from 'sanity';

const TextColorInput = (props) => {
  const { value, onChange } = props;

  // Get the background color value from the form state
  const backgroundColor = useFormValue(['backgroundColor']);

  useEffect(() => {
    // Update the text color based on the background color
    let textColor = 'white'; // Default text color
    if (backgroundColor === 'rgba(180, 255, 76, 1)') {
      textColor = 'black';
    }
    onChange(textColor);
  }, [backgroundColor, onChange]);


  return (
    <div>
      <h4>Text Color</h4>
      <p>{value}</p>
    </div>
  );
};

export default TextColorInput;
