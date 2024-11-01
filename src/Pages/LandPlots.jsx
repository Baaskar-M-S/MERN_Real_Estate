import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SmallImgCard from '../Components/SmallImgCard';
import LandPlotImgCard from '../Components/ImgCard/LandPlotImgCard';

const LandPlots = () => {
  const [showMore, setShowMore] = useState(false);

  const description = `
    Known as the Gateway to South India, Chennai is one of the fastest-developing metro cities in India. If you are interested in living in a secure and community-based ambience, then living in an apartment is your ideal home. Purchasing a flat in Chennai comes with several advantages that can improve your quality of life. The city offers a comfortable living environment with its well-established infrastructure. Nowadays flats typically come equipped with modern conveniences, ensuring a stress-free living experience. Whether you are looking for an affordable flat or a luxury apartment, there are plenty of housing options available to meet your needs and budget. Overall, buying a flat in this metro city offers the convenience, security, and sense of community that many people find appealing. Do check out flats for sale in Chennai and then find the perfect apartment.
  `;

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="px-32 py-8">
      {/* Breadcrumb */}
      <div className="text-gray-500 mb-4">
        <span>Breadcrumb: </span>
        <Link to="/" className="text-blue-600">Chennai Properties</Link>
        {' / '}
        <Link to="/flats-for-sale" className="text-blue-600">Flats for Sale in Chennai</Link>
      </div>

      <div className="mb-7 flex flex-col border shadow-md w-full max-w-4xl bg-white overflow-hidden">
        <h1 className="text-2xl pl-4 font-semibold text-gray-700">Flats for Sale in Chennai</h1>
        <p className="text-gray-700 pl-4 mt-4">
          {showMore ? description : `${description.substring(0, 150)}... `}
          <span 
            className="font-bold text-blue-600 cursor-pointer" 
            onClick={toggleShowMore}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </span>
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
       
        {/* Apartments List */}
        <div className="w-full md:w-3/4 space-y-4">
          {[...Array(5)].map((_, index) => (
            <LandPlotImgCard key={index} />
          ))}
          <div className='flex justify-center items-center'>  
            <button className='bg-red-500 text-2xl text-white px-6 py-3 rounded-xl'>Show more results</button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full md:w-1/4 space-y-4">
          {/* Top Searches */}
          <div className="p-4 flex flex-col border shadow-lg">
            <Link className="w-full py-3 bg-gray-300 font-semibold text-center">Top Searches in Chennai</Link>    
            <Link className="w-full py-3 text-gray-500">Individual House for sale in Chennai</Link>
            <Link className="w-full py-3 text-gray-500">Plots for sale in Chennai</Link>
            <Link className="w-full py-3 text-gray-500">Ongoing projects in Chennai</Link>
          </div>  
  {/* Top Searches */}
  <div className="p-4 flex flex-col border shadow-lg">
            <Link className="w-full py-3 bg-gray-300 font-semibold text-center">Top Searches in Chennai</Link>    
            <Link className="w-full py-3 text-gray-500">Individual House for sale in Chennai</Link>
            <Link className="w-full py-3 text-gray-500">Plots for sale in Chennai</Link>
            <Link className="w-full py-3 text-gray-500">Ongoing projects in Chennai</Link>
            <Link className="w-full py-3  text-gray-500">Top Searches in Chennai</Link>    
            <Link className="w-full py-3 text-gray-500">Individual House for sale in Chennai</Link>
            <Link className="w-full py-3 text-gray-500">Plots for sale in Chennai</Link>
            <Link className="w-full py-3 text-gray-500">Ongoing projects in Chennai</Link>
         </div>  

          {/* Small Image Cards */}
          <div className="grid grid-cols-1 gap-4">
            <SmallImgCard />
            <SmallImgCard />
            <SmallImgCard />
          </div>
        </div>        
      </div>


     </div>
  );
};

export default LandPlots
