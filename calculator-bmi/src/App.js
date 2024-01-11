/* Created by gparap (c) 2024 */

import logo from './logo.png';
import './App.css';
import Bmi from './Bmi';

function App() {

  //deconstruct bmi properties
  const { 
    height, weight, bmi, UpdateHeightState, UpdateWeightState, Calculate, 
  } = Bmi();

  return (
    <div className="App">
      <div className="container text-center">
        {/* Logo */}
        <header className="App-header Glowing-image p-2">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
        </header>

        {/* Calculator */}
        <div className="col-sm-12 p-2">
          <h1>Body Mass Index Calculator</h1>

          {/* height */}
          <div>
            <label htmlFor="height">Enter height (cm)</label>
            <input id="height" type="number" value={height} onChange={UpdateHeightState} />
          </div>

          {/* weight */}
          <div>
            <label htmlFor="weight">Enter weight (kg)</label>
            <input id="weight" type="number" value={weight} onChange={UpdateWeightState} />
          </div>

          {/* calculate */}
          <div>
            <button className="btn btn-dark" onClick={Calculate}>Calculate</button>
          </div>

          {/* result */}
          <div className="p-2">
            <p id="result">Your BMI is: <strong>{bmi.toFixed(1)}</strong></p>
          </div>

          {/* categories */}
          <div id="categories">
            <h5>BMI Categories</h5>
            Underweight = {"<"}18.5<br />
            Normal weight = 18.5–24.9<br />
            Overweight = 25–29.9<br />
            Obesity = {">"}=30
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
