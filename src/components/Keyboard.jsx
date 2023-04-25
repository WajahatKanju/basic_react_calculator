import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import "./Keyboard.css";


const CalculatorKeyboard = ({onButtonPress}) => {

  return (
    <div className="calculator-keyboard">
      <div className="row">
        <Button content="C" color="#A5A5A5"   onButtonPress={onButtonPress} />
        <Button content="/" color="#F09A36" onButtonPress={onButtonPress} />
        <Button content="*" color="#F09A36" onButtonPress={onButtonPress} />
        <Button content="-" color="#F09A36" onButtonPress={onButtonPress} />
      </div>
      <div className="row">
        <Button content="7" color="#333333" onButtonPress={onButtonPress} />
        <Button content="8" color="#333333" onButtonPress={onButtonPress} />
        <Button content="9" color="#333333" onButtonPress={onButtonPress} />
        <Button content="+" color="#333333" onButtonPress={onButtonPress} />
      </div>
      <div className="row">
        <Button content="4" color="#333333" onButtonPress={onButtonPress} />
        <Button content="5" color="#333333" onButtonPress={onButtonPress} />
        <Button content="6" color="#333333" onButtonPress={onButtonPress} />
        <Button content="0" color="#333333" onButtonPress={onButtonPress} />
      </div>
      <div className="row">
        <Button content="1" color="#333333" onButtonPress={onButtonPress} />
        <Button content="2" color="#333333" onButtonPress={onButtonPress} />
        <Button content="3" color="#333333" onButtonPress={onButtonPress} />
        <Button content="=" color="#F09A36" onButtonPress={onButtonPress} />
      </div>
    </div>
  );
};

CalculatorKeyboard.propTypes = {
  onButtonPress: PropTypes.func.isRequired,
};

export default CalculatorKeyboard;
