import logo from './logo.png';
import './App.css';

function App() {
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
            <h2 id="hours">00:&nbsp;</h2>
            <h2 id="minutes">00:&nbsp;</h2>
            <h2 id="seconds">00&nbsp;</h2>
        </div>
        <br />
        <div className="row">
            <div class="col">
                <div>
                    <button className="btn btn-outline-dark p-2 m-1" id="hours-plus">Hours +1</button>
                    <button className="btn btn-outline-dark p-2 m-1" id="minutes-plus">Minutes +1</button>
                    <button className="btn btn-outline-dark p-2 m-1" id="seconds-plus">Seconds +1</button>    
                </div>
                <div>
                    <button className="btn btn-outline-dark p-2 m-2" id="hours-minus">Hours -1</button>
                    <button className="btn btn-outline-dark p-2 m-2" id="minutes-minus">Minutes -1</button>
                    <button className="btn btn-outline-dark p-2 m-2" id="seconds-minus">Seconds -1</button> 
                </div>
            </div>
        </div>
        <div className="p-0">
            <button className="btn btn-dark m-1">Start Countdown</button>
            <button className="btn btn-dark m-1">Reset Countdown</button>
        </div>
    </div>
    </div>
  );
}

export default App;
