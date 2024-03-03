import React, { useState } from 'react';
import './index.css'


const QuoteCalculate = () => {
    const [initialLumpSum, setInitialLumpSum] = useState('');
    const [monthlyAmount, setMonthlyAmount] = useState('');
    const [investmentType, setInvestmentType] = useState('');
    const [quote, setQuote] = useState(null);
  
    const calculateQuote = () => {
     
      const quoteData = {
        oneYear: {
          maxReturn: '$10,000',
          minReturn: '$8,000',
          profit: '$2,000',
          fees: '$500',
          taxes: '$300'
        },
        fiveYears: {
          maxReturn: '$50,000',
          minReturn: '$40,000',
          profit: '$10,000',
          fees: '$2,500',
          taxes: '$1,500'
        },
        tenYears: {
          maxReturn: '$100,000',
          minReturn: '$80,000',
          profit: '$20,000',
          fees: '$5,000',
          taxes: '$3,000'
        }
      };
  
      setQuote(quoteData);
    };
  
    return (
      <div className="savings-investments-container">
        <h2>Savings and Investments</h2>
        <div>
          <label>Initial Lump Sum:</label>
          <input type="number" value={initialLumpSum} onChange={(e) => setInitialLumpSum(e.target.value)} />
        </div>
        <div>
          <label>Monthly Amount:</label>
          <input type="number" value={monthlyAmount} onChange={(e) => setMonthlyAmount(e.target.value)} />
        </div>
        <div>
          <label>Investment Type:</label>
          <select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)}>
            <option value="stocks">Stocks</option>
            <option value="bonds">Bonds</option>
            <option value="mutualFunds">Mutual Funds</option>
          </select>
        </div>
        <button onClick={calculateQuote}>Calculate Quote</button>
        {quote && (
          <div className="quote">
            <h3>Investment Quote</h3>
            <table>
              <thead>
                <tr>
                  <th>Time Frame</th>
                  <th>Max Return</th>
                  <th>Min Return</th>
                  <th>Profit</th>
                  <th>Fees</th>
                  <th>Taxes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 Year</td>
                  <td>{quote.oneYear.maxReturn}</td>
                  <td>{quote.oneYear.minReturn}</td>
                  <td>{quote.oneYear.profit}</td>
                  <td>{quote.oneYear.fees}</td>
                  <td>{quote.oneYear.taxes}</td>
                </tr>
                <tr>
                  <td>5 Years</td>
                  <td>{quote.fiveYears.maxReturn}</td>
                  <td>{quote.fiveYears.minReturn}</td>
                  <td>{quote.fiveYears.profit}</td>
                  <td>{quote.fiveYears.fees}</td>
                  <td>{quote.fiveYears.taxes}</td>
                </tr>
                <tr>
                  <td>10 Years</td>
                  <td>{quote.tenYears.maxReturn}</td>
                  <td>{quote.tenYears.minReturn}</td>
                  <td>{quote.tenYears.profit}</td>
                  <td>{quote.tenYears.fees}</td>
                  <td>{quote.tenYears.taxes}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  };
  
  export default QuoteCalculate;