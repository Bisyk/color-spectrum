import React from 'react';

const ColorButton = ({ color, backgroundButtonState, setPrimaryColor, setSecondaryColor }) => {
  const handleClick = () => {
    if (backgroundButtonState === 'active') {
      setPrimaryColor(color);
    } else {
      setSecondaryColor(color);
    }
  };

  return (
    <button
      style={{ backgroundColor: color, cursor: 'pointer' }}
      onClick={handleClick}
    ></button>
  );
};

export default ColorButton;
