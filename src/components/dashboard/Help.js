import React from 'react';

const Help = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Help & Documentation</h1>
      
      {/* About Kaksha Drishti */}
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold">Kaksha Drishti</h2>
        <p>Welcome to Kaksha Drishti, an innovative solution designed to revolutionize the way we monitor and enhance classroom training in skill development programs. Our mission is to ensure that every training session meets the highest standards of effectiveness, engagement, and infrastructure adequacy, paving the way for a brighter future for learners and institutions alike.</p>
      </div>
      
      {/* User Guide */}
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold">User Guide</h2>
        {/* User guide content here */}
      </div>
      
      {/* FAQ */}
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold">FAQ</h2>
        {/* FAQ here */}
      </div>
      
      {/* Contact Support */}
      <div className="bg-white p-4 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold">Contact Support</h2>
        {/* Contact support info here */}
      </div>
    </div>
  );
};

export default Help;
