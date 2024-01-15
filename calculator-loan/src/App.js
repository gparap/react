import logo from './logo.png';
import './App.css';
import './Calculator.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
      </header>

      <div className="container text-center col-sm-9">
        <h1>Loan Calculator</h1>

        {/* <!--loan--> */}
        <div className='div-input'>
            <label htmlFor="loan">Loan ($)</label>
            <input id="loan" type="number" />
        </div>

        {/* <!--interest--> */}
        <div className="div-input">
            <label htmlFor="interest">Interest / Year (%)</label>
            <input id="interest" type="number" />
        </div>

        {/* <!--years--> */}
        <div className="div-input">
            <label htmlFor="years">Total Years</label>
            <input id="years" type="number" />
        </div>

        {/* <!--calculate--> */}
        <div>
            <button className="btn btn-dark">Calculate</button>
        </div>

        <div id="results">
          {/* <!--payment--> */}
          <div>
              <label htmlFor="payment-monthly">Payment / Month: ($)</label>
              <h4 id="payment-monthly">0.0</h4>
          </div>

          {/* <!--payment total--> */}
          <div>
              <label htmlFor="payment-total">Payment Total: ($)</label>
              <h4 id="payment-total">0.0</h4>
          </div>

          {/* <!--interest total--> */}
          <div>
              <label htmlFor="interest-total">Interest Total: ($)</label>
              <h4 id="interest-total">0.0</h4>
          </div>
      </div>
  </div>

    </div>
  );
}

export default App;
