import React from 'react'
import { Link } from 'react-router-dom'
import PricingTable from '../Components/SponsarAd'

const UserSponsorYourAd = () => {
  const userId = localStorage.getItem("userId");




  return (
    <div>

<div className="flex justify-between items-center shadow-lg p-4">
        <div>
          <h1 className="font-bold text-3xl">Sponser Your Ad</h1>
        </div>

        <div className="flex items-center gap-3 text-gray-700">
          <Link to={"/"}>Home</Link>
          <span>{"/"}</span>
          <Link to={"/user/dashboard"}>Dashboard</Link>

          <button className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700">
            + Submit Property
          </button>
        </div>
      </div>
<PricingTable/>
    </div>
  )
}

export default UserSponsorYourAd