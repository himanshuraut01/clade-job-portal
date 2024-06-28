// src/components/CompanyDetails.js
import React from 'react';
import atlassian from '../assets/atlassian.png';

const CompanyDetails = () => {
  return (
    <div className="flex flex-col items-start border-t border-gray-300">
      <div className="flex items-center mb-4 mt-8">
        <img
          className="mr-2 w-[40px] h-[40px] rounded-md"
          src={atlassian}
          alt="Company Logo"
        />
        <h2 className="text-xl font-semibold mb-2">Atlassian</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div >
          <p className="mb-1 text-gray-700">Company size:</p>
          <p>1k - 2k Employees</p>
        </div>
        <div className='ml-10'>
        <p className="mb-1 text-gray-700">Type:</p>
        <p>Private</p>
        </div>
        <div>
        <p className="mb-1 text-gray-700">Sector: </p>
        <p>Information Technology, Infrastructure</p>
        </div>
        <div className='ml-10'>
        <p className="mb-1 text-gray-700">Funding: </p>
        <p>Bootstrapped</p>
        </div>
        <div>
        <p className="mb-1 text-gray-700">Founded In: </p>
        <p>2019</p>
        </div>
        <div className='ml-10'>
        <p className="mb-1 text-gray-700">Founded By: </p>
        <p>Scott Farquhar, Mike Cannon-Brookes</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
