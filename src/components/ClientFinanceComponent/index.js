import React, { useState } from 'react';
import './index.css'

const ClientFinanceComponent = () => {
    const [income, setIncome] = useState('');
    const [expenses, setExpenses] = useState('');
    const [debts, setDebts] = useState('');
    const [advice, setAdvice] = useState('');

    const handleAssessment = () => {
        // Convert input strings to numbers
        const totalIncome = parseFloat(income);
        const totalExpenses = parseFloat(expenses);
        const totalDebts = parseFloat(debts);

        // Calculate debt-to-income ratio
        const debtToIncomeRatio = totalDebts / totalIncome;

        // Provide advice based on the assessment
        if (debtToIncomeRatio > 0.5) {
            setAdvice('Your debt-to-income ratio is high. Consider consolidating your debts to lower your monthly payments.');
        } else if (totalExpenses > totalIncome) {
            setAdvice('Your expenses exceed your income. Create a budget to control your spending.');
        } else {
            setAdvice('Your financial situation seems manageable. Consider saving or investing any available income.');
        }
    };

    return (
        <div className="financial-advice-container">
            <h2>Financial Advice</h2>
            <div className="input-group">
                <label htmlFor="income" >Total Income:</label>
                <input type="number" id="income" value={income} onChange={(e) => setIncome(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="expenses" className='my-label'>Total Expenses:</label>
                <input type="number" id="expenses" value={expenses} onChange={(e) => setExpenses(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="debts" className='my-label'>Total Debts:</label>
                <input type="number" id="debts" value={debts} onChange={(e) => setDebts(e.target.value)} />
            </div>
            <div className='button-card'>
            <button onClick={handleAssessment} className='btn btn-danger assess-button'>Assess</button>
            </div>
            
            <div className="advice">
                <h3>Advice:</h3>
                <p>{advice}</p>
            </div>
        </div>
    );
};

export default ClientFinanceComponent;
