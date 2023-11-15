import { useState } from "react"

export const CustomColors = ( {setPrimaryColor, setSecondaryColor} ) => {
  const [firstColor, setFirstColor] = useState('#000000')
  const [secondColor, setSecondColor] = useState('#000000')

  
  return (
    <div className="customcolorssection">
      <h2>CustomColors</h2>
      <div className="colorinputs">
        <div className="customcolor customcolor_one">
          <p>background</p>
          <input type="color" id="head" name="head" onChange={e=>setFirstColor(e.target.value)}/>
          <button onClick={()=>setPrimaryColor(firstColor)}>Apply</button>
        </div>
        <div className="customcolor customcolor_two">
          <p>icon & text</p>
          <input type="color" id="body" name="body" onChange={e=>setSecondColor(e.target.value)}/>
          <button onClick={()=>setSecondaryColor(secondColor)}>Apply</button>
        </div>
      </div>
    </div>
  )
}
