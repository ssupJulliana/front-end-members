import React from 'react';

const AdviserTask = () => {
  return (
    <div className="adviser-container">
      <div className="task-box">
        <h2 className="task-title">👨‍🏫 Adviser Tasks</h2>

        <div className="task-controls">
          <input type="text" placeholder="🔍 Search" className="search-input" />
          <button className="filter-btn">⚙ Filter</button>
        </div>

        <div className="table-wrapper">
          <table className="task-table">
            <thead>
              <tr>
                <th>NO</th>
                <th>Team</th>
                <th>Subtask</th>
                <th>Element</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Revision NO</th>
                <th>Status</th>
                <th>Methodology</th>
                <th>Project Phase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="center">1.</td>
                <td>Mendoza, Et Al</td>
                <td>Chapter 3</td>
                <td>Software</td>
                <td>Feb 20, 2025</td>
                <td>8:00 AM</td>
                <td>No Revision</td>
                <td><span className="status in-progress">In Progress</span></td>
                <td>Agile</td>
                <td>Analysis</td>
              </tr>
              <tr>
                <td className="center">2.</td>
                <td>Mendoza, Et Al</td>
                <td>Chapter 4</td>
                <td>System Design</td>
                <td>Feb 25, 2025</td>
                <td>8:00 AM</td>
                <td>No Revision</td>
                <td><span className="status to-do">To Do</span></td>
                <td>Waterfall</td>
                <td>Design</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .adviser-container {
          padding: 40px 20px;
          display: flex;
          justify-content: center;
          background: #ffffff;
          font-family: 'Segoe UI', sans-serif;
        }

        .task-box {
          width: 100%;
          max-width: 1100px;
          background: #fff;
          padding: 24px;
          border-radius: 10px;
          border: 1px solid #dcdcdc;
        }

        .task-title {
          font-size: 18px;
          font-weight: bold;
          color: #5B0017;
          margin-bottom: 20px;
          padding-bottom: 6px;
          border-bottom: 3px solid #5B0017;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .task-controls {
          display: flex;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .search-input {
          flex: 1;
          max-width: 300px;
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 14px;
        }

        .filter-btn {
          padding: 8px 16px;
          background-color: #ffffff;
          color: #5B0017;
          border: 1px solid #5B0017;
          border-radius: 8px;
          font-size: 14px;
          cursor: pointer;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        .task-table {
          width: 100%;
          min-width: 1000px;
          border-collapse: collapse;
        }

        .task-table th,
        .task-table td {
          padding: 12px 10px;
          border-bottom: 1px solid #e0e0e0;
          text-align: left;
          font-size: 14px;
          white-space: nowrap;
        }

        .task-table th {
          background-color: #fafafa;
          font-weight: 600;
        }

        .center {
          text-align: center;
        }

        .status {
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 500;
          color: #fff;
        }

        .status.in-progress {
          background-color: #7BAE4B;
        }

        .status.to-do {
          background-color: #E1B03E;
        }

        .action-btn {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default AdviserTask;
