// src/components/events.jsx

import React from 'react';
import fileIcon from '../assets/file-type-icon.png';

const Events = () => {
  return (
    <div className="events-wrapper">
      {/* Header with Title and Horizontal Line */}
      <h2 className="section-title">
        Events
      </h2>
      <hr className="divider" />

      {/* Manuscript Results */}
      <h3 className="results-header">
        Manuscript Results
      </h3>
      <div className="results-box">
        <div className="results-table">
          <div className="row header">
            <div className="header-cell">No</div>
            <div className="header-cell">Team</div>
            <div className="header-cell">Title</div>
            <div className="header-cell">Due Date</div>
            <div className="header-cell">Time</div>
            <div className="header-cell">Plagiarism</div>
            <div className="header-cell">AI</div>
            <div className="header-cell">File Uploaded</div>
            <div className="header-cell">Status</div>
          </div>
          <div className="row">
            <div className="cell">1.</div>
            <div className="cell">Mendoza, Et Al</div>
            <div className="cell">TaskSphere IT</div>
            <div className="cell">Mar 25, 2025</div>
            <div className="cell">8:00 AM</div>
            <div className="cell" style={{ color: '#3B0304' }}>6%</div>
            <div className="cell" style={{ color: '#3B0304' }}>6%</div>
            <div className="cell">
              <img src={fileIcon} alt="File Icon" style={{ width: '20px', height: '20px' }} />
              Mendoza.pdf
            </div>
            <div className="cell">
              <span className="status-passed">Passed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Oral Defense */}
      <h3 className="defense-header">
        Oral Defense
      </h3>
      <div className="defense-card">
        {/* Top Section */}
        <div className="defense-content">
          {/* Team */}
          <div className="defense-item team">
            <span className="emoji">👥</span>
            <div className="value">Mendoza, Et Al</div>
          </div>

          {/* Title */}
          <div className="defense-item">
            <div className="label">Title</div>
            <div className="value">TaskSphere IT</div>
          </div>

          {/* Date */}
          <div className="defense-item">
            <div className="label">Date</div>
            <div className="value link">March 31, 2025</div>
          </div>

          {/* Time */}
          <div className="defense-item">
            <div className="label">Time</div>
            <div className="value">1:00 PM - 3:00 PM</div>
          </div>

          {/* Panelists */}
          <div className="defense-item">
            <div className="label">Panelists</div>
            <div className="panelist"><span className="emoji">👤</span> Anderson F Dashiell</div>
            <div className="panelist"><span className="emoji">👤</span> Adam B Apostol</div>
            <div className="panelist"><span className="emoji">👤</span> Von Jacob P Yu</div>
          </div>
        </div>

        {/* Status */}
        <div className="status">
          <span className="status-pending">Pending</span>
        </div>
      </div>

      {/* Inline Styles for the component */}
      <style>{`
        .events-wrapper {
          width: 100%;
          padding: 40px 20px;
        }

        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #3B0304;
          margin-bottom: 10px;
        }

        .divider {
          border: none;
          border-top: 2px solid #3B0304;
          margin-bottom: 20px;
        }

        .results-header, .defense-header {
          font-weight: bold;
          color: #3B0304;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .results-box, .defense-card {
          background: #fff;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border: 1px solid #ddd;
        }

        .results-table {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(9, 1fr);
          gap: 10px;
          font-size: 14px;
        }

        .row {
          display: contents;
        }

        .header {
          background-color: #fafafa;
          border-radius: 12px;
          padding: 2px;
          grid-column: span 9;
          display: flex;
          justify-content: space-between;
        }

        .header-cell {
          text-align: center;
          font-weight: bold;
          padding: 12px;
          flex: 1;
        }

        .cell {
          text-align: center;
          padding: 10px;
        }

        .status-passed {
          color: #ffffff;
          background-color: #809D3C;
          padding: 5px 15px;
          border-radius: 5px;
          font-weight: bold;
        }

        /* Oral Defense Card */
        .defense-card {
          width: 420px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .defense-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .defense-item {
          display: flex;
          flex-direction: column;
        }

        .defense-item.team {
          flex-direction: row;
          align-items: center;
          gap: 6px;
          font-weight: bold;
        }

        .label {
          font-weight: bold;
          color: #000;
          margin-bottom: 2px;
        }

        .value {
          color: #000;
        }

        .value.link {
          color: #0645AD;
          text-decoration: underline;
          cursor: pointer;
        }

        .panelist {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 2px;
        }

        .emoji {
          margin-right: 4px;
        }

        .status {
          margin-top: 15px;
          text-align: left;
        }

        .status-pending {
          display: inline-block;
          padding: 5px 15px;
          color: #3B0304;
          border: 2px solid #3B0304;
          border-radius: 5px;
          font-weight: bold;
          background-color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Events;
