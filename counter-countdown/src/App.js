/* Created by gparap (c) 2024 */

import logo from './logo.png';
import './App.css';
import Timer from './Timer';

function App() {
  
  //destruct properties from the Timer module
  const {
    hours, minutes, seconds,
    plus, minus,
    displayHours, displayMinutes, displaySeconds,
    reset, start
  } = Timer();  

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
