// src/components/events.jsx

import React from 'react';
import fileIcon from '../assets/file-type-icon.png';

const Events = () => {
  return (
    <div className="events-wrapper">
      {/* Header */}
      <h2 className="section-title">Events</h2>
      <hr className="divider" />

      {/* Manuscript Results */}
      <h3 className="results-header">Manuscript Results</h3>
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
              <img src={fileIcon} alt="File Icon" style={{ width: '20px', height: '20px' }} /> Mendoza.pdf
            </div>
            <div className="cell">
              <span className="status-passed">Passed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Oral Defense */}
      <h3 className="defense-header">Oral Defense</h3>
      <div className="oral-defense-card">
        <div className="team-name">Mendoza, Et Al</div>

        <div className="defense-row">
          <div className="left-label">Title:</div>
          <div className="right-label">Panelists:</div>
        </div>
        <div className="defense-row">
          <div className="left-value">TaskSphere IT</div>
          <div className="right-value">Anderson F. Dashiell</div>
        </div>
        <div className="defense-row">
          <div className="left-label">Date:</div>
          <div className="right-value">Adam B. Apostol</div>
        </div>
        <div className="defense-row">
          <div className="left-value">March 31, 2025</div>
          <div className="right-value">Von Jacob P. Yu</div>
        </div>
        <div className="defense-row">
          <div className="left-label">Time:</div>
          <div className="right-label">Status:</div>
        </div>
        <div className="defense-row">
          <div className="left-value">1:00 PM - 3:00 PM</div>
          <div className="right-value">
            <span className="status-pending">Pending</span>
          </div>
        </div>
      </div>

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
          margin-bottom: 10px;
        }

        .results-box {
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

        /* ORAL DEFENSE STYLES */
        .oral-defense-card {
          background: #fff;
          border-radius: 10px;
          padding: 14px 16px;
          border: 1px solid #ccc;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          font-size: 13px;
        }

        .team-name {
          font-weight: bold;
          font-size: 14px;
          margin-bottom: 8px;
          color: #3B0304;
          text-align: left;
        }

        .defense-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 2px 0;
        }

        .left-label,
        .right-label {
          font-weight: bold;
          color: #000;
        }

        .left-value,
        .right-value {
          color: #000;
        }

        .status-pending {
          display: inline-block;
          padding: 3px 10px;
          color: #3B0304;
          border: 2px solid #3B0304;
          border-radius: 4px;
          font-weight: bold;
          background-color: #fff;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default Events;
