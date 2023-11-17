import { useState } from "react";

export const CustomColors = ({
  themeColor,
  setPrimaryColor,
  setSecondaryColor,
}) => {
  const [firstColor, setFirstColor] = useState("#000000");
  const [secondColor, setSecondColor] = useState("#ffffff");

  return (
    <div className="customcolorssection">
      <div className="colorinputs">
        <div className="customcolor customcolor_one">
          <p style={{ color: themeColor === "#1E1E20" ? "white" : "black" }}>
            background
          </p>
          <input
            type="color"
            id="head"
            name="head"
            value={firstColor}
            onChange={(e) => setFirstColor(e.target.value)}
          />
          <button
            onClick={() => setPrimaryColor(firstColor)}
            style={{
              color: themeColor === "#1E1E20" ? "white" : "black",
              borderColor: themeColor === "#1E1E20" ? "white" : "black",
            }}
          >
            Apply
          </button>
        </div>
        <div className="customcolor customcolor_two">
          <p style={{ color: themeColor === "#1E1E20" ? "white" : "black" }}>
            icon & text
          </p>
          <input
            type="color"
            id="body"
            name="body"
            value={secondColor}
            onChange={(e) => setSecondColor(e.target.value)}
          />
          <button
            onClick={() => setSecondaryColor(secondColor)}
            style={{
              color: themeColor === "#1E1E20" ? "white" : "black",
              borderColor: themeColor === "#1E1E20" ? "white" : "black",
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
