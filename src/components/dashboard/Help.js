import React from 'react';

const Help = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Help & Documentation</h1>
      {/* User Guide, FAQ, Contact Support */}
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold">User Guide</h2>
        {/* User guide content here */}
      </div>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold">FAQ</h2>
        {/* FAQ here */}
      </div>
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold">Contact Support</h2>
        {/* Contact support info here */}
      </div>
    </div>
  );
};

export default Help;
