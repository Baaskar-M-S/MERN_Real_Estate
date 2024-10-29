import React from 'react'
import { Link } from 'react-router-dom'

const UserPropertyLeads = () => {
  return (
    <div>
       <div className="flex justify-between items-center shadow-lg p-4">
        <div>
          <h1 className="font-bold text-3xl"> Property Leads</h1>
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
      <div className='px-8 border border-spacing-1 shadow-lg py-8 '>
     
<p className='text-xl font-semibold'>So far you did not get any response.  <br />
Please call us on 96000 27108 to get extra visibility for your   listing or to do other online promotions!!!.</p>
   
      </div>
    </div>
  )
}

export default UserPropertyLeads