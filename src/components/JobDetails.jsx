// src/components/JobDetails.js
import React from 'react';

const JobDetails = () => {
  return (
    <div>
      <h2 className="text-gray-700 mb-2">About the Job</h2>
      <ol className="list-decimal list-inside mb-4">
        <li>Handle the UI/UX research design</li>
        <li>Work on researching the latest web applications designs & trends</li>
        <li>Work on conceptualizing and visualizing</li>
        <li>Work on creating graphics content and other graphic-related works</li>
      </ol>
      <h3 className="text-lg font-semibold mb-1">Benefits:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Health insurance</li>
        <li>Provident Fund</li>
      </ul>
      <h3 className="text-lg font-semibold mb-1">Schedule:</h3>
      <ul className="list-disc list-inside mb-4">
        <li className="mb-4">Day shift</li>
      </ul>
      <h3 className="text-lg font-semibold mb-1">Supplemental pay types:</h3>
      <ul className="list-disc list-inside mb-4">
        <li>Performance bonus</li>
        <li>Yearly bonus</li>
      </ul>
      <div className="flex items-center mb-4">
        <h3 className="text-lg font-semibold mr-2">Work Location:</h3>
        <p>In person</p>
      </div>
    </div>
  );
};

export default JobDetails;
