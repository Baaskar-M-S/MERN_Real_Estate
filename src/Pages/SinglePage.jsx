import React from 'react';

const SinglePage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="text-gray-700 mb-4">
        <p>Chennai Properties/Flats for sale in Chennai/882 Sq.ft 2BHK</p>
      </div>
      
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Property Image and Details */}
        <div className="flex-1 bg-white p-6 shadow-lg rounded">
          <img 
            src="https://via.placeholder.com/600x400" 
            alt="Property" 
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">818 Sq.Ft, 2BHK Flats For Sale In Madipakkam</h2>
          <p className="text-gray-600 mb-2">Madipakkam, Chennai</p>
          <p className="text-lg font-semibold text-blue-600 mb-4">₹61 L*</p>
          
          <div className="text-gray-600">
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p>Check out the Property is located in Madipakkam, Ram Nagar South and it’s a perfect property for you. Enjoy excellent living with amenities like Modular Kitchen, Tiled Flooring, Fully Interior Designed Home, Pooja Unit, Cup Board/Wardrobe, Super false ceiling, Car parking, and more.</p>
          </div>
        </div>

        {/* Right Column - Contact and Quick Links */}
        <div className="w-full lg:w-1/3 bg-white p-6 shadow-lg rounded">
          <div className="mb-8">
            <h3 className="font-semibold text-lg mb-4">Contact Owner</h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold">Sundarapandian</p>
                <p className="text-gray-500">Owner</p>
                <p className="text-blue-600 font-semibold">+91-XXXXXXXXXX</p>
                <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">Contact Owner Now</button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-blue-600">
              <li><a href="#">Flats For Sale In Madipakkam</a></li>
              <li><a href="#">Individual House For Sale In Madipakkam</a></li>
              <li><a href="#">Plots For Sale In Madipakkam</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Essentials Information */}
      <div className="bg-white p-6 mt-8 shadow-lg rounded">
        <h3 className="text-lg font-semibold mb-4">Essentials Information</h3>
        
        {/* Tab Section */}
        <div className="flex space-x-4 mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Properties</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Apartments</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Facing</button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">South</button>
        </div>

        {/* Essentials Table */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
          <div><strong>Location:</strong> Madipakkam, Chennai</div>
          <div><strong>Furnishing:</strong> Semi Furnished</div>
          <div><strong>Area:</strong> 818 Sq.Ft</div>
          <div><strong>Property on Floor:</strong> 1</div>
          <div><strong>Total Price:</strong> ₹61 L*</div>
          <div><strong>Total Floors:</strong> 5</div>
          <div><strong>Bedroom(s):</strong> 2</div>
          <div><strong>Transaction:</strong> Resale</div>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700">
        <h1 className='text-3xl'>Description</h1>
        <p>
Check outt this 2 BHK, 693 sqft, villa is located in Nandivaram Guduvancheri. Individual Villa House For Sale Just 43 Lakhs Budget In Chennai-Guduvanchery. Possession is from 22, Oct 2024. The villa is available for INR 4300000/-, negotiable.
     </p></div> </div>
    </div>
  );
};

export default SinglePage;
