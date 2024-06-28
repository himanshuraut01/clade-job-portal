import React from 'react';

const NavigationBar = () => {
  return (
    
    <div className="flex justify-start border-t p-2 mx-10">
      <a href="#job-preview" className="text-orange-500 font-semibold py-2 px-4 border-b-1 relative border-orange-500">Job preview
      <span className="absolute -bottom-3 left-9 w-12 h-1 bg-orange-500 rounded-lg"></span>
      </a>
      
      <a href="#applicants" className="text-gray-600 py-2 px-4">Applicants</a>
      <a href="#match" className="text-gray-600 py-2 px-4">Match</a>
      <a href="#messages" className="text-gray-600 py-2 px-4">Messages</a>
    </div>
  );
};

export default NavigationBar;
