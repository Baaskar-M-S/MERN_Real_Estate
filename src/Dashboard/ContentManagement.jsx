import React from "react";

const ContentManagement = () => {
  return (
    <div className="w-full p-4">
      <h1 className="text-2xl font-bold mb-6">Content Management</h1>

      {/* Apartments Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Apartments</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Sample Apartment Card */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Luxury Apartment</h3>
            <p className="text-gray-600">Location: Downtown</p>
            <p className="text-green-600 font-semibold">$250,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Luxury Apartment</h3>
            <p className="text-gray-600">Location: Downtown</p>
            <p className="text-green-600 font-semibold">$250,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
          {/* Repeat for more apartments */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Modern Apartment</h3>
            <p className="text-gray-600">Location: Suburbs</p>
            <p className="text-green-600 font-semibold">$180,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
        </div>
      </section>

      {/* Individual Houses Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Individual Houses</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Sample House Card */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Cozy Family House</h3>
            <p className="text-gray-600">Location: Green Valley</p>
            <p className="text-green-600 font-semibold">$320,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
          {/* Repeat for more individual houses */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Spacious Bungalow</h3>
            <p className="text-gray-600">Location: Lakeside</p>
            <p className="text-green-600 font-semibold">$400,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
        </div>
      </section>

      {/* Land/Plots Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Land/Plots</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Sample Land/Plot Card */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Residential Plot</h3>
            <p className="text-gray-600">Location: Hilltop</p>
            <p className="text-green-600 font-semibold">$150,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
          {/* Repeat for more plots */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Commercial Land</h3>
            <p className="text-gray-600">Location: Business District</p>
            <p className="text-green-600 font-semibold">$500,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ongoing Projects</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Sample Ongoing Project Card */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Skyline Towers</h3>
            <p className="text-gray-600">Expected Completion: Dec 2024</p>
            <p className="text-green-600 font-semibold">$1,200,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
          {/* Repeat for more ongoing projects */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Green Valley Residences</h3>
            <p className="text-gray-600">Expected Completion: Jun 2025</p>
            <p className="text-green-600 font-semibold">$950,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
        </div>
      </section>

      {/* Commercial Properties Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Commercial Properties</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Sample Commercial Property Card */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Downtown Office Space</h3>
            <p className="text-gray-600">Location: Downtown</p>
            <p className="text-green-600 font-semibold">$750,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
          {/* Repeat for more commercial properties */}
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-bold">Retail Storefront</h3>
            <p className="text-gray-600">Location: City Center</p>
            <p className="text-green-600 font-semibold">$600,000</p>
            <button className="mt-2 px-4 py-2 bg-amber-500 text-white rounded-md">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentManagement;
