import React from 'react'
import MoonIcon from '../ui/icons/MoonIcon'
import SunIcon from '../ui/icons/SunIcon'
import InfoIcon from '../ui/icons/InfoIcon'

export const SettingsSection = ({themeColor,backgroundButtonState,iconButtonState,setBackgroundButtonState,setIconButtonState,setThemeColor}) => {
  const handleBackgroundButtonStateChange = () =>{
    if (backgroundButtonState !== 'active'){
      setBackgroundButtonState('active')
      setIconButtonState('inactive')
    }
  }

  const handleIconButtonStateChange = () =>{
    if (iconButtonState !== 'active'){
      setIconButtonState('active')
      setBackgroundButtonState('inactive')
    }
  }
  return (
    <div className="buttons">
          <button className='cleanbutton'>{<InfoIcon color={themeColor === "#1E1E20" ? "white" : "black"}/>}</button>
          <div className="settingsbuttons">
            <button className={backgroundButtonState}
                    onClick={
                            handleBackgroundButtonStateChange}
                    style = {{color: themeColor === "#1E1E20"
                                      ? 'white'
                                      : 'black',
                              borderColor: themeColor === "#1E1E20" && backgroundButtonState === 'active'
                                      ? 'white'
                                      : 'black'}}>
                BACKGROUND
              </button>
            <button className={iconButtonState}
                    onClick={
                            handleIconButtonStateChange}
                    style = {{color: themeColor === "#1E1E20"
                                            ? 'white'
                                            : 'black',
                              borderColor: themeColor === "#1E1E20" && iconButtonState === 'active'
                                            ? 'white'
                                            : 'black'}}>
                ICON & TEXT
              </button>
              </div>
            <button className='cleanbutton'
                    onClick={()=>themeColor === '#1E1E20'
                                  ? setThemeColor('white')
                                  : setThemeColor('#1E1E20')}>{themeColor === "#1E1E20" ? <SunIcon/> : <MoonIcon/>}</button>
                    </div>
  )
}
