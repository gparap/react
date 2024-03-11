// © 2024 gparap
import logo from './brand.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-brand" alt="brand" />
        <h3 className="App-heading">Color Generator</h3>
      </header>
      <div className="App-container">
        <div className="App-color-overlay">
          <p className="App-color-text">#FFFFFF</p>
        </div>
        <button className="btn btn-dark">Generate Color</button>
      </div>
    </div>
  );
}

export default App;
