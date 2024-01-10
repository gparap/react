import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {

  //set the state of the variables
  const [hours ,setHours] = useState(0);
  const [minutes ,setMinutes] = useState(0);
  const [seconds ,setSeconds] = useState(0);

  //handle the timer buttons for adding
  const plus = (value) => {
    if (value === "hours") {
      setHours(hours + 1);
    } 
     if (value === "minutes") {
      setMinutes(minutes + 1);
    }
     if (value === "seconds") {
      setSeconds(seconds + 1);
    }
  }

  //handle the timer buttons for subtracting
  const minus = (value) => {
    if (value === "hours" && hours > 0) {
      setHours(hours - 1);
    } 
    if (value === "minutes" && minutes > 0) {
      setMinutes(minutes - 1);
    }
    if (value === "seconds" && seconds > 0) {
      setSeconds(seconds - 1);
    }
  }

  //handle the zero values for hours
  const displayHours = (value) => {
    if (hours <= 9 ) {
      return "0" + hours;
    }
    return hours;
  }
  
  //handle the zero values for minutes
  const displayMinutes = (value) => {
    if (minutes <= 9 ) {
      return "0" + minutes;
    }
    return minutes;
  }

  //handle the zero values for seconds
  const displaySeconds = (value) => {
    if (seconds <= 9 ) {
      return "0" + seconds;
    }
    return seconds;
  }

  //clear all values from the timer
  const reset = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  //start the timer
  const start = () => {
    //TODO: countdown
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
      </header>
      <div className="container d-flex flex-column align-items-center py-4 py-xl-5">
        <h1>Countdown Timer</h1>
        <br />
        <div className="p-2 d-flex">
            <h2 id="hours">{displayHours(hours)}:&nbsp;</h2>
            <h2 id="minutes">{displayMinutes(minutes)}:&nbsp;</h2>
            <h2 id="seconds">{displaySeconds(seconds)}&nbsp;</h2>
        </div>
        <br />
        <div className="row">
            <div className="col">
                <div>
                    <button className="btn btn-outline-dark p-2 m-1" id="hours-plus" onClick={()=>plus('hours')}>Hours +1</button>
                    <button className="btn btn-outline-dark p-2 m-1" id="minutes-plus" onClick={()=>plus('minutes')}>Minutes +1</button>
                    <button className="btn btn-outline-dark p-2 m-1" id="seconds-plus" onClick={()=>plus('seconds')}>Seconds +1</button>    
                </div>
                <div>
                    <button className="btn btn-outline-dark p-2 m-2" id="hours-minus" onClick={()=>minus('hours')}>Hours -1</button>
                    <button className="btn btn-outline-dark p-2 m-2" id="minutes-minus" onClick={()=>minus('minutes')}>Minutes -1</button>
                    <button className="btn btn-outline-dark p-2 m-2" id="seconds-minus" onClick={()=>minus('seconds')}>Seconds -1</button> 
                </div>
            </div>
        </div>
        <div className="p-0">
            <button className="btn btn-dark m-1" onClick={() => start()}>Start Countdown</button>
            <button className="btn btn-dark m-1" onClick={() => reset()}>Reset Countdown</button>
        </div>
    </div>
    </div>
  );
}

export default App;
