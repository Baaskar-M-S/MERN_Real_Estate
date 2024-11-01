import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import EMICalculator from "../Components/EmiCalculator";
import LocationMap from "../Components/MapChennai";

const SingleLandPlots = () => {
  return (
    <div className="px-24 py-3 bg-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <div className="text-gray-700 mb-4">
        <p>Chennai Properties / Flats for sale in Chennai / 882 Sq.ft 2BHK</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-col ">
          <div className="flex-1 mb-5 bg-white p-6 border border-spacing-1  shadow-lg rounded">
            <img
              src="https://www.chennaiproperties.in/property/20057/gallery/1200-Sq-Ft-Residential-Land-in-Madambakkam-20057-1.jpg"
              alt="Property"
              className="w-full h-[600px] object-cover rounded mb-4"
            />
          </div>
          <div className="flex-1 mb-5 bg-white p-6 border border-spacing-1  shadow-lg rounded">
            <h2 className="text-2xl font-semibold mb-2">
              <FaMapMarkerAlt className="inline-block items-center" /> 818
              Sq.Ft, 2BHK Flats For Sale In Madipakkam
            </h2>
            <p className="text-gray-600 mb-2">Madipakkam, Chennai</p>
            <p className="text-lg font-semibold text-blue-600 mb-4">
              <TbCoinRupeeFilled className="inline-block items-center" /> 61 L*
            </p>
          </div>
          <div className="text-gray-600 mb-5 flex-1 bg-white p-6 border border-spacing-1  shadow-lg rounded">
            <h3 className="font-semibold text-lg mb-2">Description</h3>
            <p>
              Check out this property located in Madipakkam, Ram Nagar South.
              It’s a perfect choice for you, with amenities like a modular
              kitchen, tiled flooring, fully interior-designed home, pooja unit,
              wardrobe, false ceiling, car parking, and more.
            </p>
          </div>{" "}
        </div>
<div className="flex flex-col gap-8">
 {/* Right Column - Contact and Quick Links */}
 <div className="w-full h-full  bg-white  p-6 shadow-lg rounded ">
          <div className="h-[200px] w-[200px]  ">
            <h3 className="font-semibold text-center text-green-600 text-2xl mb-4">
              Contact Owner
            </h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full">
                <img
                  src="https://www.chennaiproperties.in/images/developer.png"
                  alt=""
                />
              </div>
              <div>
                <p className="font-semibold">Sundarapandian</p>
                <p className="text-gray-500">Owner</p>
                <p className="text-blue-600 font-semibold">+91-XXXXXXXXXX</p>
                <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
                  Contact Owner Now
                </button>
              </div>
            </div>
          </div>
</div>
       
<div className="w-full h-full bg-white flex flex-col  border shadow-lg">
              <h3 className="font-semibold text-center bg-gray-200 border border-spacing-1 text-xl mb-4">
                Quick Links
              </h3>
              <Link className="bg-gray-50 text-gray-800 px-6 py-3 border border-spacing-1 text-lg ">
                Flats For Sale In Madipakkam
              </Link>
              <Link className="bg-gray-50 text-gray-800 px-6 py-3 border border-spacing-1 text-lg ">
                Individual House For Sale In Madipakkam
              </Link>
              <Link className="bg-gray-50 text-gray-800 px-6 py-3 border border-spacing-1 text-lg ">
                Plots For Sale In Madipakkam
              </Link>
           
          </div>
      
      </div>
          </div>
            

      {/* Essentials Information */}
      <div className="bg-white p-6 mt-8 shadow-lg rounded">
        <h3 className="text-2xl text-center font-semibold mb-4">Essentials Information</h3>

        {/* Tab Section */}
        <div className="flex text-xl justify-center space-x-4 mb-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Properties
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            Apartments
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            Facing
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">
            South
          </button>
        </div>

        {/* Essentials Table */}
        <div className="grid grid-cols-1 text-2xl  gap-4  text-gray-700 justify-center items-center ">
          <div>
            <strong>Location:</strong> Madipakkam, Chennai
          </div>
          <div>
            <strong>Furnishing:</strong> Semi Furnished
          </div>
          <div>
            <strong>Area:</strong> 818 Sq.Ft
          </div>
          <div>
            <strong>Property on Floor:</strong> 1
          </div>
          <div>
            <strong>Total Price:</strong> ₹61 L*
          </div>
          <div>
            <strong>Total Floors:</strong> 5
          </div>
          <div>
            <strong>Bedroom(s):</strong> 2
          </div>
          <div>
            <strong>Transaction:</strong> Resale
          </div>
        </div>

     
      </div>
<div className="w-10 h-10">

</div>
      <div className="pt-10 flex bg-white flex-row gap-20 justify-center items-center">
       <div className="flex flex-col gap-4"><h2 className="text-3xl text-center font-semibold">EMI Calculator</h2>{" "}
        <EMICalculator /></div> 
       <div className="flex flex-col gap-4"><h2 className="text-3xl text-center font-semibold">Chennai Map</h2>{" "}
        <LocationMap /></div> 
      </div>
    </div>
  );
};

export default SingleLandPlots
