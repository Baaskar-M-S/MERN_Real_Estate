import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const fakeData = {
  sales: [500, 800, 600, 900, 1200, 1500, 1800],
  income: [400, 700, 500, 1000, 1100, 1300, 1700],
  growth: [2, 3, 5, 8, 12, 15, 20],
  customers: [20, 30, 25, 35, 45, 50, 60]
};

const Dashboard = () => {
  const [activeAnalytics, setActiveAnalytics] = useState('sales');

  const handleToggle = (analyticsType) => {
    setActiveAnalytics(analyticsType);
  };

  // Chart Data and Configs
  const lineChartData = (label, data, color) => ({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label,
        data,
        borderColor: color,
        backgroundColor: `${color}20`, // with opacity for background fill
        fill: true
      }
    ]
  });

  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Customer Reports',
        data: fakeData.customers,
        backgroundColor: '#4B5563'
      }
    ]
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Topbar */}
      <div className="flex space-x-4 mb-6 bg-white p-3 rounded-lg shadow-md">
        {['sales', 'income', 'growth', 'customers'].map((item) => (
          <button
            key={item}
            onClick={() => handleToggle(item)}
            className={`px-4 py-2 rounded ${activeAnalytics === item ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)} Analytics
          </button>
        ))}
      </div>

      {/* Analytics Content */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">
          {activeAnalytics.charAt(0).toUpperCase() + activeAnalytics.slice(1)} Analytics
        </h2>
        
        {/* Render analytics based on the active button */}
        {activeAnalytics === 'sales' && (
          <Line data={lineChartData('Monthly Sales ($)', fakeData.sales, '#3B82F6')} />
        )}
        {activeAnalytics === 'income' && (
          <Line data={lineChartData('Monthly Income ($)', fakeData.income, '#10B981')} />
        )}
        {activeAnalytics === 'growth' && (
          <Line data={lineChartData('Growth Rate (%)', fakeData.growth, '#F59E0B')} />
        )}
        {activeAnalytics === 'customers' && (
          <Bar data={barChartData} options={{ responsive: true }} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
