import React from "react";
import PropTypes from "prop-types";

import "./Screen.css";

const Screen = ({ input, output }) => {
  return (
    <div className="screen">
      <div className="input">{input}</div>
      <div className="output">{output}</div>
    </div>
  );
};

Screen.propTypes = {
  input: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
};

export default Screen;
