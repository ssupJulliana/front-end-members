// src/components/title-tasks-record.jsx
import React, { useState, useEffect, useRef } from "react";
import taskRecordIcon from "../../assets/tasks-record-icon.png"; // Updated icon
import searchIcon from "../../assets/search-icon.png";
import filterIcon from "../../assets/filter-icon.png";
import exitIcon from "../../assets/exit-icon.png";

const TitleTasksRecord = () => {
  const [filterCategory, setFilterCategory] = useState("Filter");
  const [filterValue, setFilterValue] = useState("");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [activeSubFilter, setActiveSubFilter] = useState(null);

  const filterDropdownRef = useRef(null);

  const PROJECT_PHASES = ["Planning", "Design", "Development", "Testing", "Deployment", "Review"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
        setActiveSubFilter(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClearFilter = (e) => {
    e.stopPropagation();
    setFilterCategory("Filter");
    setFilterValue("");
    setShowFilterDropdown(false);
    setActiveSubFilter(null);
  };

  return (
    <div className="page-wrapper">
      <h2 className="section-title">
        <img src={taskRecordIcon} alt="Tasks Record Icon" className="icon-image" /> {/* Updated icon */}
        Tasks Record
      </h2>
      <hr className="divider" />

      <div className="tasks-container">
        <div className="search-filter-wrapper">
          <div className="search-bar">
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
            <input type="text" placeholder="Search" className="search-input" />
          </div>

          <div className="filter-wrapper" ref={filterDropdownRef}>
            <button
              type="button"
              className="filter-button"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              <img src={filterIcon} alt="Filter Icon" className="filter-icon" />
              {filterValue || filterCategory}
              {filterValue && (
                <img
                  src={exitIcon}
                  alt="Clear Filter"
                  className="clear-icon"
                  onClick={handleClearFilter}
                />
              )}
            </button>
            {showFilterDropdown && (
              <div className="dropdown-menu filter-dropdown-menu">
                {!activeSubFilter ? (
                  <>
                    <div
                      className="dropdown-item"
                      onClick={() => setActiveSubFilter("Project Phase")}
                    >
                      Project Phase
                    </div>
                  </>
                ) : (
                  <>
                    <div className="dropdown-title">{activeSubFilter}</div>
                    <hr />
                    {PROJECT_PHASES.map((opt) => (
                      <div
                        key={opt}
                        className="dropdown-item"
                        onClick={() => {
                          setFilterValue(opt);
                          setFilterCategory(activeSubFilter);
                          setShowFilterDropdown(false);
                          setActiveSubFilter(null);
                        }}
                      >
                        {opt}
                      </div>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <table className="tasks-table">
          <thead>
            <tr>
              <th className="center-text">NO</th>
              <th className="center-text">Assigned</th>
              <th className="center-text">Tasks</th>
              <th className="center-text">Date Created</th>
              <th className="center-text">Due Date</th>
              <th className="center-text">Time</th>
              <th className="center-text">Date Completed</th> {/* Added column */}
              <th className="center-text">Revision No.</th>
              <th className="center-text">Status</th>
              <th className="center-text">Methodology</th>
              <th className="center-text">Project Phase</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center-text">1.</td>
              <td className="center-text">Harzwel Zhen B Lacson</td>
              <td className="center-text">Title Proposal Writing</td>
              <td className="center-text">Dec 1, 2024</td>
              <td className="center-text">Dec 5, 2024</td>
              <td className="center-text">9:00 AM</td>
              <td className="center-text">Dec 5, 2024</td> {/* Date Completed */}
              <td className="center-text revision">No Revision</td>
              <td className="center-text status-cell">
                <span className="status-text" style={{ backgroundColor: "#578FCA" }}>
                  Completed
                </span> {/* Status is fixed to "Completed" */}
              </td>
              <td className="center-text">Agile</td>
              <td className="center-text">Planning</td>
            </tr>
          </tbody>
        </table>
      </div>

      <style>{`
        * { box-sizing: border-box; }

        .page-wrapper {
          width: 100%;
          padding: 40px 20px;
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

        .icon-image {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .divider {
          border: none;
          border-top: 2px solid #3B0304;
          margin-bottom: 20px;
        }

        .tasks-container {
          background: #fff;
          border-radius: 20px;
          width: 100%;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          min-height: 500px;
          padding: 20px;
          overflow: visible;
          border: 1px solid #B2B2B2;
        }

        .search-filter-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          gap: 12px;
        }

        .search-bar, .filter-button {
          display: flex;
          align-items: center;
          background: #fff;
          border: 1px solid #3B0304;
          border-radius: 12px;
          padding: 6px 12px;
          color: #3B0304;
          cursor: pointer;
          gap: 6px;
        }

        .search-bar {
          width: 200px;
        }

        .search-icon {
          width: 16px;
          height: 16px;
        }

        .search-input {
          border: none;
          outline: none;
          font-size: 14px;
          color: #3B0304;
          width: 100%;
        }

        .filter-wrapper {
          position: relative;
          width: 160px;
          user-select: none;
        }

        .filter-button {
          font-size: 14px;
          justify-content: left;
          width: 100%;
          font-weight: normal;
        }

        .filter-icon {
          width: 18px;
          height: 18px;
        }

        .clear-icon {
          margin-left: auto;
          width: 16px;
          height: 16px;
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

        .filter-dropdown-menu {
          width: 160px;
        }

        .dropdown-title {
          font-weight: bold;
          padding: 8px 12px;
          font-size: 14px;
        }

        .dropdown-item {
          padding: 10px 12px;
          cursor: pointer;
          font-size: 14px;
        }

        .dropdown-item:hover {
          background-color: #f0f0f0;
        }

        .tasks-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .tasks-table th, .tasks-table td {
          padding: 12px 10px;
          white-space: nowrap;
        }

        .tasks-table th {
          background-color: #fafafa;
          font-weight: bold;
          color: #000;
          text-align: center;
        }

        .tasks-table tbody tr:nth-child(even) {
          background-color: #fafafa;
        }

        .center-text {
          text-align: center;
        }

        .revision {
          color: #3B0304;
          font-weight: bold;
        }

        .status-cell {
          color: #fff;
        }

        .status-text {
          background-color: #578FCA;
          padding: 6px 12px;
          border-radius: 12px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default TitleTasksRecord;
