import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import styled from 'styled-components';

const Wrapper = styled.div`
  position:relative;
`
const Title = styled.h4`
  margin-bottom: 1rem;
  color: #FFFFFF;
`;

const ColorWindow = styled.div`
  background-color: ${(props) => props.color};
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

const PopOver = styled.div`
  position: absolute;
  z-index: 2;
  top: -80px;
  left: 90px;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ColorPicker = (props) => {
  const [color, setColor] = useState(props.value ? props.value : `rgba(255,255,255,1)`)
  const [showPicker, setShowPicker] = useState(false)

  function handleChangeComplete(color) {

    const rgbToString = convertToString(color.rgb)

    setColor(rgbToString)
    updateColorValue(rgbToString)
  }

  const updateColorValue = (colorValue) => {
    props.onChange({ target: { name: 'baseColor', value: colorValue } });
  }

  function convertToString(rgbaObj) {
    const { r, g, b, a = 1 } = rgbaObj;
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }

  function toggleColorPicker() {
    setShowPicker(!showPicker )
  }

  return (
    <Wrapper>
      <Title>Base Color</Title>
      <ColorWindow 
        color={color} 
        onClick={ () => toggleColorPicker() } 
      />

      {
        showPicker && (
          <PopOver>
            <Cover onClick={ () => toggleColorPicker() } />
            <ChromePicker
              color={color}
              onChangeComplete={handleChangeComplete}
              onclick={toggleColorPicker}
              disableAlpha={true}
            />
          </PopOver>
        )
      }
    </Wrapper>
  );
};

export default ColorPicker;
