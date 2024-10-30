import React from 'react';

const SmallImgCard = () => {
  return (
    <div className="flex w-[270px] h-[310px] flex-col items-start p-4 shadow-md border ">
      <image className="object-cover h-[180px] w-full rounded-md mb-4" src="https://www.chennaiproperties.in/property/20046/gallery/693-Sqft-2-BHK-House-for-sale-in-Guduvanchery-20046-1.jpeg" alt="property image"/>
      <h1 className="text-lg font-semibold text-gray-700 mb-1">Pinnacle Jem</h1>
      <p className="text-sm text-gray-500 mb-1">Mogappair, Chennai</p>
      <p className="text-sm font-light mb-2">3 BHK Flats</p>
      <p className="text-lg font-semibold text-gray-800">3.25 Cr*</p>
    </div>
  );
}

export default SmallImgCard;
