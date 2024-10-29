import React, { useState } from 'react';

const BookingManage = () => {
  const [bookings] = useState([
    { id: 1, type: 'Land', property: 'Green Acres Plot', customer: 'John Doe', date: '2024-10-28', amount: 200000, status: 'Confirmed' },
    { id: 2, type: 'Villa', property: 'Sunrise Villa', customer: 'Jane Smith', date: '2024-11-05', amount: 500000, status: 'Pending' },
    // Add more fake bookings as needed
  ]);
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (e) => setFilter(e.target.value);

  const filteredBookings = bookings.filter(b => filter === 'All' || b.type === filter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Booking Management</h1>
      
      {/* Filter */}
      <div className="mb-4">
        <label htmlFor="propertyType" className="mr-2">Filter by Property Type:</label>
        <select 
          id="propertyType"
          value={filter}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        >
          <option value="All">All</option>
          <option value="Land">Land</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
          <option value="Plot">Plot</option>
        </select>
      </div>
      
      {/* Booking Table */}
      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-16 py-2">#</th>
              <th className="py-2">Type</th>
              <th className="py-2">Property</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking, index) => (
                <tr key={booking.id} className="text-center">
                  <td className="py-3 px-2 border-b">{index + 1}</td>
                  <td className="py-3 px-2 border-b">{booking.type}</td>
                  <td className="py-3 px-2 border-b">{booking.property}</td>
                  <td className="py-3 px-2 border-b">{booking.customer}</td>
                  <td className="py-3 px-2 border-b">{booking.date}</td>
                  <td className="py-3 px-2 border-b">${booking.amount.toLocaleString()}</td>
                  <td className="py-3 px-2 border-b">
                    <span className={`px-2 py-1 rounded ${booking.status === 'Confirmed' ? 'bg-green-200' : 'bg-yellow-200'}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="py-3 px-2 border-b">
                    <button className="text-blue-600 mr-2">View</button>
                    <button className="text-green-600 mr-2">Edit</button>
                    <button className="text-red-600">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">No bookings available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingManage;
