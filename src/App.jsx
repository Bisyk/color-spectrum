import { useState } from "react";

import "./App.scss";
import { CardsSection } from "./components/CardsSection";
import { SettingsSection } from "./components/SettingsSection";
import { Palette } from "./components/Palette";
import { PalleteNames } from "./components/PalleteNames";
import { CustomColors } from "./components/CustomColors";
import { InfoModal } from "./components/InfoModal";

import getContrastRatio from "./utils/getContrastRatio";
import * as pallete from "./data/pallete";

export default function App() {
  const [backgroundButtonState, setBackgroundButtonState] = useState("active");
  const [iconButtonState, setIconButtonState] = useState("inactive");
  const [primaryColor, setPrimaryColor] = useState("#000000");
  const [secondaryColor, setSecondaryColor] = useState("#ffffff");
  const [themeColor, setThemeColor] = useState("white");
  const [modalIsOpen, setModalOpen] = useState(false);

  const contrastRatio = getContrastRatio(primaryColor, secondaryColor);

  const toggleModalOpen = () => {
    setModalOpen((isModalOpen) => !isModalOpen);
  };

  return (
    <div style={{ backgroundColor: themeColor }}>
      <InfoModal modalIsOpen={modalIsOpen} onModalOpen={toggleModalOpen} />
      <CardsSection
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        contrastRatio={contrastRatio}
      />
      <SettingsSection
        themeColor={themeColor}
        backgroundButtonState={backgroundButtonState}
        iconButtonState={iconButtonState}
        setBackgroundButtonState={setBackgroundButtonState}
        setIconButtonState={setIconButtonState}
        setThemeColor={setThemeColor}
        onModalOpen={toggleModalOpen}
      />
      <PalleteNames themeColor={themeColor} />
      <Palette
        pallete={pallete}
        backgroundButtonState={backgroundButtonState}
        setPrimaryColor={setPrimaryColor}
        setSecondaryColor={setSecondaryColor}
      />
      <CustomColors
        themeColor={themeColor}
        setPrimaryColor={setPrimaryColor}
        setSecondaryColor={setSecondaryColor}
      />
    </div>
  );
}
