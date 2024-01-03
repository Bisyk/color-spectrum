import { memo } from "react";

import ColorButton from "../../ui/buttons/ColorButton";
import "./Pallete.scss";
import * as pallete from "../../data/pallete";

const Palette = memo(function Palette ({
  backgroundButtonState,
  setPrimaryColor,
  setSecondaryColor,
}){
  return (
    <div className="colors">
      <div className="bwsection">
        {pallete.colors0.map((x, idx) => (
          <ColorButton
            key={x + idx}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
      <div>
        {pallete.colors1.map((x) => (
          <ColorButton
            key={x}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
      <div>
        {pallete.colors2.map((x) => (
          <ColorButton
            key={x}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
      <div>
        {pallete.colors3.map((x) => (
          <ColorButton
            key={x}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
      <div>
        {pallete.colors4.map((x) => (
          <ColorButton
            key={x}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
      <div>
        {pallete.colors5.map((x) => (
          <ColorButton
            key={x}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
      <div>
        {pallete.colors6.map((x) => (
          <ColorButton
            key={x}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
      <div>
        {pallete.colors7.map((x) => (
          <ColorButton
            key={x}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
      <div>
        {pallete.colors8.map((x) => (
          <ColorButton
            key={x}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
      <div>
        {pallete.colors9.map((x) => (
          <ColorButton
            key={x}
            color={x}
            backgroundButtonState={backgroundButtonState}
            setPrimaryColor={setPrimaryColor}
            setSecondaryColor={setSecondaryColor}
          />
        ))}
      </div>
    </div>
  );
})

export default Palette