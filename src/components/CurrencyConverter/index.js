import React, { useState, useEffect } from 'react';
import './index.css'

const CurrencyConverter = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [convertedAmount, setConvertedAmount] = useState('');
  
  
    useEffect(() => {
      // Fetch current exchange rates from an API
      const fetchExchangeRates = async () => {
        try {
          const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
          const data = await response.json();
          const rates = data.rates;
          console.log(rates);
        } catch (error) {
          console.error('Error fetching exchange rates:', error);
        }
      };
  
      fetchExchangeRates();
    }, []);
  
    const handleConvert = () => {
      // Replace with actual conversion logic using fetched exchange rates
      const conversionRate = 1.2; // Dummy conversion rate
      const convertedAmount = amount * conversionRate;
      setConvertedAmount(convertedAmount.toFixed(2) + ' ' + toCurrency);
    };
  
    return (
      <div className="converter-container">
        <h2>Currency Converter</h2>
        <div>
          <label>Amount:</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div>
          <label>From:</label>
          <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="BRL">BRL</option>
            <option value="JPY">JPY</option>
            <option value="TRY">TRY</option>
          </select>
        </div>
        <div>
          <label>To:</label>
          <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="BRL">BRL</option>
            <option value="JPY">JPY</option>
            <option value="TRY">TRY</option>
          </select>
        </div>
        <button onClick={handleConvert}>Convert</button>
        {convertedAmount && <div className="result">Converted Amount: {convertedAmount}</div>}
      </div>
    );
  };
  
  export default CurrencyConverter;

