import React, { useState } from 'react';
import { FaShareAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LandPlotImgCard = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  const properties = [
    {
      id: 1,
      title: "2 BHK House For Sale In Guduvanchery",
      location: "Near SRM Public School, Guduvanchery, Chennai",
      size: "693 Sq.Ft",
      price: "43 L *",
      saleType: "New",
      description: "Check out this 2 BHK, 693 sqft, villa located in Nandivaram Guduvanchery.Known as the Gateway to South India, Chennai is one of the fastest-developing metro cities in India. If you are interested in living in a secure and community-based ambience, then living in an apartment is your ideal home. Purchasing a flat in Chennai comes with several advantages that can improve your quality of life. The city offers a comfortable living environment with its well-established infrastructure. Nowadays flats typically come equipped with modern conveniences, ensuring a stress-free living experience. Whether you are looking for an affordable flat or a luxury apartment, there are plenty of housing options available to meet your needs and budget. Overall, buying a flat in this metro city offers the convenience, security, and sense of community that many people find appealing. Do check out flats for sale in Chennai and then find the perfect apartment",
      pricePerSqft: "₹6205 / sqft",
      tags: ["Ready to Occupy", "Semi Furnished", "Bike/Car Parking"],
      owner: "Kadhar Hussain",
      imageUrl: "https://www.chennaiproperties.in/property/20046/gallery/693-Sqft-2-BHK-House-for-sale-in-Guduvanchery-20046-1.jpeg",
    }
  ];

  return (
    <div className="w-full flex flex-col items-center pb-4">
      {properties.map((property) => (
        <div key={property.id} className="flex border shadow-md w-full max-w-4xl bg-white overflow-hidden">
          
          {/* Image and Owner Section */}
          <div className="flex-shrink-0 w-1/3 py-3 px-3 ">
          <Link to={`/${property.id}`}> <img src={property.imageUrl} alt={property.title} className="object-center h-[185px] w-[266px]" />
           </Link>  <div className="flex flex-col items-center py-3">
              <p className="text-gray-600 text-sm">Owner</p>
              <h2 className="font-semibold text-gray-800">{property.owner}</h2>
            </div>
          </div>

          
          <div className="flex-grow py-1 px-1 pl-3 pb-3">
            <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
            <p className="text-gray-500 text-sm mb-3">{property.location}</p>
            
            
            <div className="mb-2 text-sm">
  <table className="w-full border border-gray-200 text-left">
    <tbody>
      <tr className="bg-gray-200">
        <th className="font-bold py-1 px-2">Size</th>
        <th className="font-bold py-1 px-2">Price</th>
        <th className="font-bold py-1 px-2">Sale Type</th>
      </tr>
      <tr className="bg-gray-100">
        <td className="py-1 px-2">{property.size}</td>
        <td className="py-1 px-2">{property.price}</td>
        <td className="py-1 px-2">{property.saleType}</td>
      </tr>
    </tbody>
  </table>
</div>

{showMore ? property.description : `${property.description.substring(0, 50)}... `}
          <button
            className="font-sm text-blue-500 text-sm block cursor-pointer" 
            onClick={toggleShowMore}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
            
            

            
            
            <div className='flex gap-3'>
           <p className="text-gray-500 inline text-sm mb-1 ">{property.pricePerSqft}</p> {"   "}
           <span className="block space-x-4 mb-3">
              {property.tags.map((tag, index) => (
                <span
                  key={index}
                  className=" text-xs bg-gray-100 text-gray-700  px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </span>
</div>
           
            <div className="flex pt-3 items-center justify-evenly gap-6">
              <button className="text-gray-500 flex items-center gap-1">
                <FaShareAlt /> Share
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">
                View Phone Number
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Contact Owner</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LandPlotImgCard