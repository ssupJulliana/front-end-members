import React from 'react';

const Task = () => {
  return (
    <div className="task-wrapper">
      <div className="task-box">
        <h2 className="task-title">📝 Tasks</h2>

        <div className="task-controls">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="filter-btn">Filter</button>
        </div>

        {/* Scrollable table container */}
        <div className="table-scroll-container">
          <table className="task-table">
            <thead>
              <tr>
                <th>NO</th>
                <th>Team</th>
                <th>Task</th>
                <th>Subtask</th>
                <th>Element</th>
                <th>Date Created</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Revision NO</th>
                <th>Status</th>
                <th>Methodology</th>
                <th>Project Phase</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="center">1.</td>
                <td>Harzwel Zhen L</td>
                <td>Chapter 3</td>
                <td>Development</td>
                <td>Software</td>
                <td>Feb 6, 2025</td>
                <td>Feb 10, 2025</td>
                <td>9:00 AM</td>
                <td>1</td>
                <td>Pending</td>
                <td>Agile</td>
                <td>Analysis</td>
                <td><button className="action-btn">View</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <button className="page-btn">« Previous</button>
          <button className="page-btn">Next »</button>
        </div>
      </div>

      <style>{`
        .task-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          min-height: 100vh;
          background-color: #f9f9f9;
          padding: 40px 20px;
          font-family: 'Segoe UI', sans-serif;
        }

        .task-box {
          width: 100%;
          max-width: 1100px;
          background: #fff;
          border-radius: 10px;
          padding: 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }

        .task-title {
          font-size: 18px;
          font-weight: bold;
          color: #5B0017;
          margin-bottom: 20px;
        }

        .task-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .search-input {
          width: 260px;
          padding: 8px 12px;
          border: 1px solid #5B0017;
          border-radius: 6px;
          font-size: 14px;
        }

        .filter-btn {
          padding: 8px 18px;
          background-color: #fff;
          color: #5B0017;
          border: 1px solid #5B0017;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .filter-btn:hover {
          background-color: #f3f3f3;
        }

        .table-scroll-container {
          width: 100%;
          overflow-x: auto;
        }

        .task-table {
          width: 100%;
          min-width: 1200px;
          border-collapse: collapse;
          margin-top: 10px;
        }

        .task-table th,
        .task-table td {
          padding: 12px;
          border-bottom: 1px solid #ddd;
          text-align: left;
          font-size: 14px;
          white-space: nowrap;
        }

        .task-table th {
          background-color: #fafafa;
          font-weight: 600;
          color: #333;
        }

        .center {
          text-align: center;
        }

        .action-btn {
          padding: 5px 10px;
          font-size: 13px;
          background-color: #5B0017;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .action-btn:hover {
          background-color: #730021;
        }

        .pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
          gap: 10px;
        }

        .page-btn {
          padding: 6px 14px;
          background: white;
          color: #5B0017;
          border: 1px solid #5B0017;
          border-radius: 5px;
          font-size: 13px;
          cursor: pointer;
        }

        .page-btn:hover {
          background-color: #f3f3f3;
        }
      `}</style>
    </div>
  );
};

export default Task;
