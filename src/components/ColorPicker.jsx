import React from 'react'
import { GithubPicker, SketchPicker, SliderPicker, HuePicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store';
const customStyles = {
  default: {
    picker: {
      width: 'x', // Adjust the width
      height: '200px', // Adjust the height
    },
  },
};
const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="">
      <HuePicker
        color={snap.color}
        presetColors={[
          "#000000",
          "#353934",
          "#ccc",
          "#80C670",
          "#5F3",
          "#EFBD4E",
        ]}
        onChange={(color) => state.color = color.hex}
      // styles={customStyles}
      />
    </div>
  )
}

export default ColorPicker