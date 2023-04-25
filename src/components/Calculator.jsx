import React, { useState } from "react";
import Keyboard from "./Keyboard";
import Screen from "./Screen";
import buttonClickSound from "../assets/button.wav";
import "./Calculator.css";

const audio = new Audio(buttonClickSound);

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    handleAudio()
    switch (value) {
      case "C":
        setInput("");
        setOutput("");
        break;
      case "+/-":
        setInput((prevInput) =>
          prevInput.startsWith("-")
            ? prevInput.slice(1)
            : `-${prevInput}`
        );
        break;
      case "%":
        try {
          const result = eval(`${input} * 0.01`);
          setInput(result.toString());
        } catch (error) {
          setOutput("Error");
        }
        break;
      case "=":
        try {
          const result = eval(input);
          setOutput(result.toString());
        } catch (error) {
          setOutput("Error");
        }
        break;
      default:
        setInput((prevInput) => prevInput + value);
    }
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleEquals = () => {
    try {
      const result = eval(input);
      setOutput(result.toString());
    } catch (error) {
      setOutput("Error");
    }
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleKeyPress = (event) => {
    const { key } = event;

    // Allow numbers, operators, parentheses, and decimal point
    const validKeys = /[0-9\+\-\*\/\(\)\.%]/;

    if (key.match(validKeys)) {
      setInput((prevInput) => prevInput + key);
    } else if (key === "Enter") {
      handleEquals();
    } else if (key === "Backspace") {
      handleBackspace();
    }
  };

  const handleAudio = () => {
    audio.currentTime = 0;
    audio.play();
  };


  const handleKeyDown = (event) => {
    const { key } = event;

    // Prevent browser back navigation on backspace key
    if (key === "Backspace") {
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    const { key } = event;
    console.log(event);
    // Play button click sound on valid key press
    const validKeys = /[0-9\+\-\*\/\(\)\.%]/;
    if (key.match(validKeys)) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <div className="calculator" tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <Screen input={input} output={output} />
      <Keyboard onButtonPress={handleButtonClick} onClear={handleClear} onEquals={handleEquals} onBackspace={handleBackspace} />
    </div>
  );
};

export default Calculator;
