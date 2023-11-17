import './App.scss'
import React, { useState } from 'react'
import { CardsSection } from './components/CardsSection'
import { SettingsSection } from './components/SettingsSection'
import { Palette } from './components/Palette'
import getContrastRatio from './utils/getContrastRatio'
import * as pallete from './data/pallete'
import { PalleteNames } from './components/PalleteNames'
import { CustomColors } from './components/CustomColors'

export default function App() {
  const [backgroundButtonState, setBackgroundButtonState] = useState('active')
  const [iconButtonState, setIconButtonState] = useState('inactive')
  const [primaryColor, setPrimaryColor] = useState('#000000')
  const [secondaryColor, setSecondaryColor] = useState('#ffffff')
  const [themeColor, setThemeColor] = useState('white')

  const contrastRatio = getContrastRatio(primaryColor, secondaryColor)

  return (
    <div style={{backgroundColor: themeColor}}>
        <CardsSection primaryColor={primaryColor} secondaryColor={secondaryColor} 
                      contrastRatio={contrastRatio}/>
        <CustomColors themeColor={themeColor} setPrimaryColor={setPrimaryColor} 
                      setSecondaryColor={setSecondaryColor}/>
        <SettingsSection themeColor={themeColor} backgroundButtonState={backgroundButtonState} 
                         iconButtonState={iconButtonState} setBackgroundButtonState={setBackgroundButtonState} 
                         setIconButtonState={setIconButtonState} setThemeColor={setThemeColor}/>
        <PalleteNames themeColor={themeColor}/>
        <Palette pallete={pallete} backgroundButtonState={backgroundButtonState} 
                 setPrimaryColor={setPrimaryColor} setSecondaryColor={setSecondaryColor}/>
    </div>
  )
}