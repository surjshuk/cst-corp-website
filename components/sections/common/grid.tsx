"use client";

import { useState } from 'react';

const Box = ({ id, expandedId, setExpandedId }) => {
  const isExpanded = expandedId === id;

  const toggleExpand = () => {
    setExpandedId(isExpanded ? null : id);
  };

  const redirectToExternalPage = () => {
    // Yahan external page ka URL daal sakte ho, abhi ke liye dummy URL hai
    window.location.href = 'https://example.com';
  };

  return (
    <div className={`box ${isExpanded ? 'expanded' : ''}`}>
      <div className="image-placeholder">Image Here</div>
      {!isExpanded && (
        <button onClick={toggleExpand}>Explore More</button>
      )}
      {isExpanded && (
        <div className="modal-content">
          <div className="expanded-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
          </div>
          <div className="modal-buttons">
            <button className="close-btn" onClick={toggleExpand}>× Close</button>
            <button className="redirect-btn" onClick={redirectToExternalPage}>Explore More (External)</button>
          </div>
        </div>
      )}
      <style jsx>{`
        .box {
          border: 2px solid #ccc;
          width: 23%;
          margin: 0.2%;
          padding: 10px;
          box-sizing: border-box;
          transition: all 0.3s ease;
          overflow: hidden;
          background: #f9f9f9;
          border-radius: 8px;
          position: relative;
        }
        .image-placeholder {
          width: 100%;
          height: 100px;
          background: #ddd;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        button:hover {
          background-color: #005bb5;
        }
        .expanded {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          max-width: 700px;
          height: auto;
          min-height: 500px; /* Fixed min height for modal to ensure enough space */
          background: #e0f7fa;
          z-index: 1000;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          border-radius: 12px;
          overflow: hidden; /* Hide overflow for rounded corners */
        }
        .expanded .image-placeholder {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 60%; /* Image placeholder consumes 60% of modal height at the top */
          background: #ddd;
          margin-bottom: 0;
          z-index: 1; /* Behind content */
          filter: blur(0px) brightness(1); /* No blur at top */
          background: linear-gradient(to bottom, rgba(221, 221, 221, 1), rgba(221, 221, 221, 0.3)); /* Gradient fade to bottom */
          color: transparent; /* Hide placeholder text in expanded mode */
          display: block; /* Remove flex to avoid centering issues */
        }
        .modal-content {
          position: relative;
          z-index: 2; /* Above blurred image */
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end; /* Push content to bottom */
          height: 100%;
          min-height: 500px; /* Match min-height of .expanded */
        }
        .expanded-content {
          margin-top: 15px;
          font-size: 16px;
          color: #333;
          overflow-y: auto;
          max-height: 200px; /* Limit content height to fit in bottom area */
          background: rgba(255, 255, 255, 0.8); /* Semi-transparent background for readability over faded image */
          padding: 10px;
          border-radius: 8px;
        }
        .modal-buttons {
          display: flex;
          justify-content: flex-end; /* Align buttons to the right */
          gap: 10px; /* Space between buttons */
          margin-top: 20px;
        }
        .close-btn {
          background: #ff4d4d; /* Red for close */
          width: auto;
          height: auto;
          border-radius: 4px; /* Rectangular button */
          font-size: 14px;
          padding: 8px 12px;
          cursor: pointer;
          border: none;
          color: white;
        }
        .close-btn:hover {
          background: #cc0000;
        }
        .redirect-btn {
          background: #00aaff; /* Different blue for redirect */
          border-radius: 4px;
          font-size: 14px;
          padding: 8px 12px;
          cursor: pointer;
          border: none;
          color: white;
        }
        .redirect-btn:hover {
          background: #0088cc;
        }
      `}</style>
    </div>
  );
};

const Grid = () => {
  const [expandedId, setExpandedId] = useState(null);

  // Determine if any box in the first row is expanded
  const isFirstRowExpanded = expandedId !== null && expandedId < 4;

  return (
    <div className="container">
      {expandedId !== null && (
        <div className="blur-overlay" />
      )}
      <div className="row">
        {[0,1,2,3].map(i => (
          <Box key={i} id={i} expandedId={expandedId} setExpandedId={setExpandedId} />
        ))}
      </div>
      <div className={`row second-row ${isFirstRowExpanded ? 'moved-down' : ''}`}>
        {[4,5,6,7].map(i => (
          <Box key={i} id={i} expandedId={expandedId} setExpandedId={setExpandedId} />
        ))}
      </div>
      <style jsx>{`
        .container {
          width: 90%;
          margin: 20px auto;
          position: relative;
        }
        .row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          transition: margin-top 0.3s ease;
        }
        .second-row.moved-down {
          margin-top: 150px;
        }
        .blur-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(5px);
          z-index: 999;
        }
      `}</style>
    </div>
  );
};

export default Grid;

