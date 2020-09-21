import React, { useState } from "react";

ColorBox.propTypes = {};
function getRandomColor() {
  const Color_list = ["black", "blue", "green", "yellow", "deeppink"];
  const RandomIndex = Math.trunc(Math.random() * 5);
  return Color_list[RandomIndex];
}

function ColorBox(props) {
  const [color, setColor] = useState("green");
  function HandeColorBox() {
    // get randome color ->setColor
    const newColor = getRandomColor();
    setColor(newColor);
  }
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onclick={HandeColorBox}
    >
      ColorBox
    </div>
  );
}

export default ColorBox;
