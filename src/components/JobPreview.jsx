import React  from 'react';
import JobDetails from './JobDetails';
import CompanyDetails from './CompanyDetails';
import SidebarStats from './SidebarStats';
import NavigationBar from './NavigationBar';
import { MdOutlineLocationOn } from 'react-icons/md';
import { LiaCoinsSolid } from 'react-icons/lia';
import { SiAdobexd, SiFigma, SiAdobeillustrator } from 'react-icons/si';

const JobPreview = () => {


  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <div className="flex flex-1">
        <main className="w-3/4 p-1 bg-gray-50">
          <div className="bg-white p-6 shadow-md rounded-lg h-full ml-4">
            <header className="border-b pb-4 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center">
                    <h1 className="text-2xl font-semibold my-4">Senior Product Designer</h1>
                    <span className="text-sm text-gray-400 ml-3">• posted 2 days ago</span>
                    <div className="flex items-center bg-green-100 px-3 py-1 rounded-full ml-3">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-sm text-green-600 font-semibold">Open</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 mt-2">
                    <MdOutlineLocationOn className="mr-1" />
                    <span>Delaware, USA</span>
                    <span className="mx-1">•</span>
                    <LiaCoinsSolid className="mr-1" />
                    <span>$300k-$400k</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 my-6"></div>
              <div className="mt-2 flex flex-wrap space-x-4">
                <div className="flex flex-col mr-4">
                  <span className="text-sm text-gray-500 font-semibold">Skills Required:</span>
                  <div className="mt-1 flex flex-col space-y-2">
                    <span className="text-sm border rounded px-2 py-0.5 flex items-center space-x-1">
                      <SiFigma />
                      <span>Figma</span>
                    </span>
                    <span className="text-sm border rounded px-2 py-0.5 flex items-center space-x-1">
                      <SiAdobeillustrator />
                      <span>Adobe Illustrator</span>
                    </span>
                    <span className="text-sm border rounded px-2 py-0.5 flex items-center space-x-1">
                      <SiAdobexd />
                      <span>Adobe XD</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col pl-4">
                  <span className="text-sm text-gray-500 font-semibold">Preferred Language:</span>
                  <span className="text-sm text-gray-600 mt-1">English</span>
                </div>
                <div className="flex flex-col pl-10">
                  <span className="text-sm text-gray-500 font-semibold">Type:</span>
                  <span className="text-sm text-gray-600 mt-1">Full-time</span>
                </div>
                <div className="flex flex-col pl-10">
                  <span className="text-sm text-gray-500 font-semibold">Years of Experience:</span>
                  <span className="text-sm text-gray-600 mt-1">3+ Years</span>
                </div>
              </div>
            </header>
            <section className="mb-6">
              <JobDetails />
            </section>
            <section className="mb-6">
              <CompanyDetails />
            </section>
          </div>
        </main>
        <aside className="w-1/4 bg-gray-50 p-4 border-r">
        <div >
          <SidebarStats />  
          </div>
        </aside>
      </div>
    </div>
  );
};

export default JobPreview;