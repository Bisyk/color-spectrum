const ColorButton = ({
  color,
  backgroundButtonState,
  setPrimaryColor,
  setSecondaryColor,
}) => {
  const handleClick = () => {
    if (backgroundButtonState === "active") {
      setPrimaryColor(color);
    } else {
      setSecondaryColor(color);
    }
  };

  const handleDoubleClick = () => {
    navigator.clipboard.writeText(color);
  };

  return (
    <button
      style={{ backgroundColor: color, cursor: "pointer" }}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    ></button>
  );
};

export default ColorButton;
