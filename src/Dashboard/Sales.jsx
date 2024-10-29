import React from "react";

const Sales = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Management</h1>
      
      {/* Summary Section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Total Sales</h2>
          <p className="text-3xl font-bold text-green-600">$10,000</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Sales This Month</h2>
          <p className="text-3xl font-bold text-blue-600">$2,500</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold">Properties Sold</h2>
          <p className="text-3xl font-bold text-red-600">5</p>
        </div>
      </div>

      {/* Sales Table */}
      <h2 className="text-xl font-bold mb-2">Sales Records</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Property Name</th>
            <th className="py-2 px-4 border-b">Seller Name</th>
            <th className="py-2 px-4 border-b">Sale Price</th>
            <th className="py-2 px-4 border-b">Sale Date</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Sample Data Row */}
          <tr>
            <td className="py-2 px-4 border-b">Luxury Apartment</td>
            <td className="py-2 px-4 border-b">John Doe</td>
            <td className="py-2 px-4 border-b">$250,000</td>
            <td className="py-2 px-4 border-b">2024-10-15</td>
            <td className="py-2 px-4 border-b text-green-500">Sold</td>
          </tr>
          {/* Repeat rows as needed */}
          <tr>
            <td className="py-2 px-4 border-b">Family House</td>
            <td className="py-2 px-4 border-b">Jane Smith</td>
            <td className="py-2 px-4 border-b">$300,000</td>
            <td className="py-2 px-4 border-b">2024-10-10</td>
            <td className="py-2 px-4 border-b text-red-500">Pending</td>
          </tr>
          {/* Add more rows as necessary */}
        </tbody>
      </table>
    </div>
  );
};

export default Sales;
