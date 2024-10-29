import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transaction = () => {
  const [income, setIncome] = useState({ today: 0, week: 0, month: 0 });
  const [sales, setSales] = useState({ today: 0, week: 0, month: 0 });
  const [properties, setProperties] = useState({ sold: 0, purchased: 0, total: 0 });
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Fetch income, sales, properties, and transaction history data from API
    const fetchData = async () => {
      try {
        const incomeResponse = await axios.get('http://localhost:7000/income');
        const salesResponse = await axios.get('http://localhost:7000/sales');
        const propertiesResponse = await axios.get('http://localhost:7000/properties');
        const transactionsResponse = await axios.get('http://localhost:7000/transactions');
        
        setIncome(incomeResponse.data);
        setSales(salesResponse.data);
        setProperties(propertiesResponse.data);
        setTransactions(transactionsResponse.data);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="my-12 h-full">
      <h1 className="mb-8 text-3xl font-bold">Transaction Overview</h1>

      {/* Income Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Income Today</h2>
          <p className="text-2xl text-green-600">${income.today}</p>
          <button className="text-blue-500 hover:underline">More</button>
        </div>
        <div className="bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Income This Week</h2>
          <p className="text-2xl text-green-600">${income.week}</p>
          <button className="text-blue-500 hover:underline">More</button>
        </div>
        <div className="bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Income This Month</h2>
          <p className="text-2xl text-green-600">${income.month}</p>
          <button className="text-blue-500 hover:underline">More</button>
        </div>
      </div>

      {/* Sales Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Sales Today</h2>
          <p className="text-2xl text-blue-600">${sales.today}</p>
          <button className="text-blue-500 hover:underline">More</button>
        </div>
        <div className="bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Sales This Week</h2>
          <p className="text-2xl text-blue-600">${sales.week}</p>
          <button className="text-blue-500 hover:underline">More</button>
        </div>
        <div className="bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Sales This Month</h2>
          <p className="text-2xl text-blue-600">${sales.month}</p>
          <button className="text-blue-500 hover:underline">More</button>
        </div>
      </div>

      {/* Properties Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Properties Sold This Month</h2>
          <p className="text-2xl text-red-600">{properties.sold}</p>
          <button className="text-blue-500 hover:underline">View All</button>
        </div>
        <div className="bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Properties Purchased This Month</h2>
          <p className="text-2xl text-red-600">{properties.purchased}</p>
          <button className="text-blue-500 hover:underline">View All</button>
        </div>
        <div className="bg-white p-4 border rounded shadow">
          <h2 className="text-xl font-semibold">Total Properties</h2>
          <p className="text-2xl text-red-600">{properties.total}</p>
          <button className="text-blue-500 hover:underline">View All</button>
        </div>
      </div>

      {/* Transaction History Table */}
      <div className="overflow-x-auto mt-8">
        <h2 className="text-xl font-bold mb-4">Transaction History</h2>
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-6 text-left">S.No</th>
              <th className="py-3 px-6 text-left">Date</th>
              <th className="py-3 px-6 text-left">Type</th>
              <th className="py-3 px-6 text-left">Buyer</th>
              <th className="py-3 px-6 text-left">Seller</th>
              <th className="py-3 px-6 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={transaction.id} className="border-t">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{transaction.date}</td>
                <td className="py-3 px-6">{transaction.type}</td>
                <td className="py-3 px-6">{transaction.buyer}</td>
                <td className="py-3 px-6">{transaction.seller}</td>
                <td className="py-3 px-6">${transaction.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;
