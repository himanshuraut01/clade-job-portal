import React from 'react';
import { MdOutlinePeopleAlt, MdOutlinePersonAddAlt, MdOutlineRemoveRedEye } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { LuPencil } from 'react-icons/lu';

const SidebarStats = () => {
  return (
    <div className="flex flex-col lg:w-full lg:max-w-xs">
      <div className="flex flex-col lg:flex-row justify-center mt-6 space-y-4 lg:space-y-0 lg:space-x-4">
        <button className="flex items-center bg-red-500 text-white py-2 px-6 rounded-lg lg:rounded-lg">
          <RiDeleteBin6Line className="mr-2" />
          <span className="hidden lg:inline-block">Delete job</span>
        </button>
        <button className="flex items-center bg-orange-500 text-white py-2 px-8 rounded-lg lg:rounded-lg">
          <LuPencil className="mr-2" />
          <span className="hidden lg:inline-block">Edit job</span>
        </button>
      </div>
      <div className="pt-4 mt-4 space-y-4 text-center">
        <div className="flex justify-between border-b pb-2">
          <div className="flex items-center text-gray-600">
            <MdOutlinePeopleAlt className="mr-2" />
            <span className="hidden lg:inline-block">Applicants</span>
          </div>
          <p className="text-xl font-semibold">400</p>
        </div>
        <div className="flex justify-between border-b pb-2 pt-2">
          <div className="flex items-center text-gray-600">
            <MdOutlinePersonAddAlt className="mr-2" />
            <span className="hidden lg:inline-block">Matches</span>
          </div>
          <p className="text-xl font-semibold">100</p>
        </div>
        <div className="flex justify-between border-b pb-2 pt-2">
          <div className="flex items-center text-gray-600">
            <FiMessageSquare className="mr-2" />
            <span className="hidden lg:inline-block">Messages</span>
          </div>
          <p className="text-xl font-semibold">147</p>
        </div>
        <div className="flex justify-between pt-2">
          <div className="flex items-center text-gray-600">
            <MdOutlineRemoveRedEye className="mr-2" />
            <span className="hidden lg:inline-block">Views</span>
          </div>
          <p className="text-xl font-semibold">800</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarStats;
