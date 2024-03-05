// © 2024 gparap
import logo from './logo.png';
import './App.css';
import { useState } from 'react';

function App() {
  //handle quote state
  const [quote, setQuote] = useState('');

  //get quote from API
  function getQuote() {
    fetch('MY_API_KEY')
      .then(response => response.json())
      .then(quote => setQuote(quote))
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ marginTop: "-0.64rem", fontStyle: "italic", fontSize: "calc(0.75rem + 0.75vmin)" }}>(c) gparap 2024</p>
        <p>Random Quote Generator</p>
      </header>

      {/* Quote Container */}
      <div className='App-quote-container'>
        {/* quote details */}
        {quote && (<p>{quote.quote}<br /><br /><i>{quote.author}</i></p>)}
        {/* quote button */}
        <button className='App-quote-button' onClick={() => getQuote()}>Get Quote</button>
      </div>
    </div>
  );
}

export default App;
