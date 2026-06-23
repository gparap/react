/* Copyright (c) 2026 gparap | SPDX-License-Identifier: MIT */

import logo from './logo.png';
import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width={64} height={64}/>
        <br />
        <p>
          Weather app with React
        </p>
      </header>
      <Weather />
    </div>
  );
}

export default App;
