import React from 'react';
import './Button.css';

function Button(props) {
  const {color, content, onButtonPress} = props;

  const topStyle = {
    background: color,
  };

  const buttonStyle = {
    background: darkenColor(color),
  };

  // function to generate a darker version of the color
  function darkenColor(color) {
    // Parse the color components
    const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));

    // Darken each color component by 20%
    const dr = Math.floor(r * 0.8);
    const dg = Math.floor(g * 0.8);
    const db = Math.floor(b * 0.8);

    // Convert the darkened color back to hex
    return '#' + [dr, dg, db].map(x => x.toString(16).padStart(2, '0')).join('');
  }


  return (
    <div className="button" style={buttonStyle}>
      <div className="button__top" style={topStyle} onClick={() => {
        onButtonPress(content)
      } } >
      {content}
        </div>
        </div>
        );
      }

export default Button;
