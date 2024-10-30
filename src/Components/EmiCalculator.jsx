// EMICalculator.js
import React, { useState } from 'react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(28); // in Lakhs
  const [interestRate, setInterestRate] = useState(7.3); // %
  const [loanTenure, setLoanTenure] = useState(5); // in Years

  const calculateEMI = (principal, rate, tenure) => {
    const monthlyRate = rate / 12 / 100;
    const tenureMonths = tenure * 12;
    const emi =
      (principal * 100000 * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
      (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    return emi.toFixed(2);
  };

  const monthlyEMI = calculateEMI(loanAmount, interestRate, loanTenure);
  const totalInterest = (monthlyEMI * loanTenure * 12 - loanAmount * 100000).toFixed(2);
  const totalAmount = (parseFloat(monthlyEMI) * loanTenure * 12).toFixed(2);

  return (
    <div className="h-[400px] w-[500px] flex flex-col md:flex-row gap-8 p-6 border border-spacing-4  bg-white">
      <div className="flex flex-col text-left p-6 justify-center">
       
        
        <div>
          <label className="block mb-1 font-medium">Plot Loan Amount (in Lakhs)</label>
          <input
            type="range"
            min="0"
            max="200"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            className="w-full"
          />
          <p className="text-gray-700">₹ {loanAmount} Lakhs</p>
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Rate of Interest</label>
          <input
            type="range"
            min="5"
            max="22.5"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="w-full"
          />
          <p className="text-gray-700">{interestRate}% per annum</p>
        </div>
        
        <div>
          <label className="block mb-1 font-medium">Loan Tenure (Years)</label>
          <input
            type="range"
            min="1"
            max="35"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            className="w-full"
          />
          <p className="text-gray-700">{loanTenure} Years</p>
        </div>
      </div>

      <div className="flex flex-col text-left p-6 justify-center ">
        <h3 className="text-lg font-semibold mb-4">EMI Details</h3>
        <p><strong>Cost of Plot:</strong> ₹75 L</p>
        <p><strong>Loan Amount:</strong> ₹{loanAmount} L</p>
        <p><strong>Monthly EMI:</strong> ₹{monthlyEMI}</p>
        <p><strong>Total Interest Payable:</strong> ₹{totalInterest}</p>
        <p className="text-red-600 font-semibold"><strong>Total Amount Payable:</strong> ₹{totalAmount}</p>
      </div>
    </div>
  );
};

export default EMICalculator;
