import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState("deeplink");
  return (
    <div className="color-box" style={{ background_color: color }}>
      helo
    </div>
  );
}

export default ColorBox;
