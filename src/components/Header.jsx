import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FiBriefcase } from 'react-icons/fi';
import { CiChat1 } from 'react-icons/ci';
import { PiHandCoins, PiBellSimple } from 'react-icons/pi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import atlassian from '../assets/atlassian.png';

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col w-full bg-white shadow-md">
      <div className="flex items-center justify-between py-4 px-8">
        <img src={logo} alt="Logo" className="h-8" />
        <div className="border border-gray-200 rounded-full overflow-hidden">
          <nav className="flex items-center space-x-4 p-2 relative">
            <Link to="/jobs">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`flex items-center text-gray-600 px-3 py-2 ${activeTab === 'jobs' ? 'text-white bg-orange-500 font-semibold' : ''}`}
                style={{ borderRadius: '30px' }}
              >
                <FiBriefcase className={`w-5 h-5 mr-1 ${activeTab === 'jobs' ? 'text-white' : ''}`} /> Jobs
              </button>
            </Link>
            <Link to="/messages">
              <button
                onClick={() => setActiveTab('messages')}
                className={`flex items-center text-gray-600 px-3 py-2 rounded-lg relative ${activeTab === 'messages' ? 'text-white bg-orange-500 font-semibold' : ''}`}
                style={{ borderRadius: '30px' }}
              >
                <CiChat1 className={`w-5 h-5 mr-1 ${activeTab === 'messages' ? 'text-white' : ''} relative`} /> Messages
                <span className="absolute left-7 top-3 right-0 -mt-1 -mr-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </Link>
            <Link to="/payments">
              <button
                onClick={() => setActiveTab('payments')}
                className={`flex items-center text-gray-600 px-3 py-2 rounded-lg ${activeTab === 'payments' ? 'text-white bg-orange-500 font-semibold' : ''}`}
                style={{ borderRadius: '30px' }}
              >
                <PiHandCoins className={`w-5 h-5 mr-1 ${activeTab === 'payments' ? 'text-white' : ''}`} /> Payments
              </button>
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2 relative">
          <PiBellSimple className='w-[30px] h-[30px]'/>
          <span className="absolute right-[68px] top-[3px] w-2 h-2 bg-red-500 rounded-full"></span>
          <img
            src={atlassian}
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
