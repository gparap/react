// © 2024 gparap
import logo from './brand.png';
import './App.css';
import { useState } from 'react';

// maximum for rgb color values ie. (255, 255, 255)
const MAX = 255;

function App() {
  //states for colors
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  //states for hex values
  const [redHex, setRedHex] = useState("FF");
  const [greenHex, setGreenHex] = useState("FF");
  const [blueHex, setBlueHex] = useState("FF");

  function generateColor() {
    //get random color
    let color = getRandomRGBColor();

    //update the color states
    setRed(color.red);
    setGreen(color.green);
    setBlue(color.blue);

    //update the color states in hex
    setRedHex(getHexFromRGB(color.red));
    setGreenHex(getHexFromRGB(color.green));
    setBlueHex(getHexFromRGB(color.blue));
  }

  /* Returns a color object with random rgb values. */
  function getRandomRGBColor() {
    let color = { red: 0, green: 0, blue: 0 };
    color.red = Math.floor(Math.random() * MAX);
    color.green = Math.floor(Math.random() * MAX);
    color.blue = Math.floor(Math.random() * MAX);
    return color;
  }

  /* Converts the color value (ie.255) to its hexadecimal representation. */
  function getHexFromRGB(value) {
    let hex = value.toString(16);

    //add "0" if the hex value is only 1 digit
    if (hex.length === 1) {
      hex = "0" + hex.toString();
    }

    return hex.toUpperCase();
  }

  //rbg color string
  let rgbColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-brand" alt="brand" />
        <h3 className="App-heading">Color Generator</h3>
      </header>
      <div className="App-container" style={{ backgroundColor: rgbColor }}>
        <div className="App-color-overlay">
          <p className="App-color-text">#{redHex}{greenHex}{blueHex}</p>
        </div>
        <button className="btn btn-dark" onClick={() => generateColor()}>Generate Color</button>
      </div>
    </div>
  );
}

export default App;
