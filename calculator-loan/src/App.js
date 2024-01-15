/* Created by gparap (c) 2024 */

import logo from './logo.png';
import './App.css';
import './Calculator.css';
import { useState } from 'react';

function App() {
  
  //Declate state vars
  const [loan, setLoan] = useState(0.0);
  const [interest, setInterest] = useState(0.0);
  const [years, setYears] = useState(0.0);
  const [monthlyPayment, setMonthlyPayment] = useState(0.0);
  const [totalPayment, setTotalPayment] = useState(0.0);
  const [totalInterest, setTotalInterest] = useState(0.0);

  //Calculate results using the loan formula
  const calculate = () => {
    //calculate the number of months
    let months = parseInt(years) * 12;

    //calculate the interest rate per month
    let interestPerMonth = parseFloat(interest) / 100 / 12;

    //apply the loan payment formula and update the UI
    const monthlyPaymentAsync = (((parseInt(loan) * interestPerMonth * Math.pow((1 + interestPerMonth), 60)) / (Math.pow((1 + interestPerMonth), 60) - 1)).toFixed(2));
    setMonthlyPayment(monthlyPaymentAsync);
    setTotalPayment((monthlyPaymentAsync * months).toFixed(2));
    setTotalInterest((totalPayment - parseInt(loan)));
  }

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
            <input id="loan" type="number" onChange={(event)=>setLoan(event.target.value)}/>
        </div>

        {/* <!--interest--> */}
        <div className="div-input">
            <label htmlFor="interest">Interest / Year (%)</label>
            <input id="interest" type="number" onChange={(event)=>setInterest(event.target.value)}/>
        </div>

        {/* <!--years--> */}
        <div className="div-input">
            <label htmlFor="years">Total Years</label>
            <input id="years" type="number" onChange={(event)=>setYears(event.target.value)}/>
        </div>

        {/* <!--calculate--> */}
        <div>
            <button className="btn btn-dark" onClick={calculate}>Calculate</button>
        </div>

        <div id="results">
          {/* <!--payment--> */}
          <div>
              <label htmlFor="payment-monthly">Payment / Month: ($)</label>
              <h4 id="payment-monthly">{monthlyPayment}</h4>
          </div>

          {/* <!--payment total--> */}
          <div>
              <label htmlFor="payment-total">Payment Total: ($)</label>
              <h4 id="payment-total">{totalPayment}</h4>
          </div>

          {/* <!--interest total--> */}
          <div>
              <label htmlFor="interest-total">Interest Total: ($)</label>
              <h4 id="interest-total">{totalInterest}</h4>
          </div>
      </div>
  </div>

    </div>
  );
}

export default App;
