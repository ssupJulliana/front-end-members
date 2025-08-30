// src/components/tasks-record.jsx

import React, { useState, useRef, useEffect } from 'react';
import taskIcon from "../../assets/tasks-record-icon.png";  // Make sure this path is correct
import recordIcon from "../../assets/records-icon.png";  // Path to your new icon

export default function TasksRecord() {
  const [status, setStatus] = useState("To Review");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const statusDropdownRef = useRef(null);

  const STATUS_OPTIONS = ["To Do", "In Progress", "To Review", "Missed"];

  const getStatusColor = (value) => {
    switch (value) {
      case "To Do":
        return "#FABC3F";
      case "In Progress":
        return "#809D3C";
      case "To Review":
        return "#578FCA";
      case "Missed":
        return "#D32F2F";
      default:
        return "#ccc";
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        statusDropdownRef.current &&
        !statusDropdownRef.current.contains(event.target)
      ) {
        setShowStatusDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="tasks-record-wrapper">
      <h2 className="section-title">
        <img 
          src={taskIcon} 
          alt="Tasks Record Icon" 
          className="section-icon" 
        />
        Tasks Record
      </h2>
      <hr className="divider" />

      <div className="tasks-record-container">
        {/* Title Defense Card */}
        <div className="task-card" onClick={() => window.location.href = '/title-defense'}>
          <div className="task-card-icon">
            <img src={recordIcon} alt="Title Defense Icon" className="card-icon" />
          </div>
          <div className="task-card-header">
            <h3 className="task-title">Title<br /> Defense</h3>
          </div>
        </div>

        {/* Oral Defense Card */}
        <div className="task-card" onClick={() => window.location.href = '/tasks'}>
          <div className="task-card-icon">
            <img src={recordIcon} alt="Oral Defense Icon" className="card-icon" />
          </div>
          <div className="task-card-header">
            <h3 className="task-title">Oral<br /> Defense</h3>
          </div>
        </div>

        {/* Final Defense Card */}
        <div className="task-card" onClick={() => window.location.href = '/final-defense'}>
          <div className="task-card-icon">
            <img src={recordIcon} alt="Final Defense Icon" className="card-icon" />
          </div>
          <div className="task-card-header">
            <h3 className="task-title">Final<br /> Defense</h3>
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        * { box-sizing: border-box; }
        .tasks-record-wrapper {
          width: 100%;
          padding: 40px 20px;
          background: #fff;
          border-radius: 10px;
        }

        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #3B0304;
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .section-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .divider {
          border: none;
          border-top: 2px solid #3B0304;
          margin-bottom: 20px;
        }

        .tasks-record-container {
          display: flex;
          gap: 20px;
          justify-content: left;
          flex-wrap: wrap;
        }

        .task-card {
          background: #ffffff;
          border: 1px solid #B2B2B2;
          border-radius: 8px;
          width: 150px;  
          height: 200px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          cursor: pointer;
          position: relative;
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .task-card-icon {
          margin-bottom: 10px;  /* Space between icon and title */
        }

        .card-icon {
          width: 50px;  /* Set the icon size appropriately */
          height: 50px;
          object-fit: contain;
        }

        .task-card-header {
          font-size: 14 px;  /* Adjusted font size for title */
          font-weight: bold;
          color: #3B0304;
        }

        .task-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 22px;
          height: 100%;
          background-color: #3B0304;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        .task-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 22px; 
          background-color: #3B0304; 
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }

        .task-card:hover {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .task-title {
          margin: 0;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          padding: 6px 12px;
          border-radius: 12px;
          color: #fff;
          cursor: pointer;
          font-weight: bold;
          width: 100%;
        }

        .status-text {
          font-size: 14px;
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          background: #fff;
          border: 1px solid #B2B2B2;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
          z-index: 10;
          width: 100%;
          padding: 4px 0;
        }
      `}</style>
    </div>
  );
}
