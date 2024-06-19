import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
const ColorPicker = () => {
  const snap = useSnapshot(state);
  return (
    <div className='absolute left-full ml-3'>
    <SketchPicker color={snap.color} disableAlpha presetColors={[
      '#FF0000', // Red
      '#00FF00', // Green
      '#0000FF', // Blue
      '#FFFF00', // Yellow
      '#FF00FF', // Magenta
      '#00FFFF', // Cyan
      '#000000', // Black
      '#EFBD48', // Default
      '#808000', //olive
      '#556B2F', //darkolivegreen
      '#FF4500', //orangered
      '#FFD700', //gold
      '#FF69B4', //hotpink
      '#FF6347', //tomato
      '#FF1493', //deeppink
      '#FF00FF', //fuchsia
      "#FFA07A", //lightsalmon
      "#FF7F50", //coral
      "#FFFFFF",     //white
    ]} onChange={(color) => state.color = color.hex}/>
    </div>
  )
}

export default ColorPicker