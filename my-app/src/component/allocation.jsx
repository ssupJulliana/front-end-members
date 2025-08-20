import React from 'react';

const Allocation = () => {
  return (
    <div className="page-wrapper">
      <div className="allocation-container">
        <h2 className="section-title">
          <span className="icon">👥</span> Tasks Allocation
        </h2>

        <table className="allocation-table">
          <thead>
            <tr>
              <th className="center-text">NO</th>
              <th>Name</th>
              <th>Role</th>
              <th className="center-text">Assigned Tasks</th>
              <th className="center-text">Completed Tasks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="center-text">1.</td>
              <td>Addiralene G Mendoza</td>
              <td className="role">Project Manager</td>
              <td className="center-text">5</td>
              <td className="center-text">3</td>
            </tr>
            <tr>
              <td className="center-text">2.</td>
              <td>Harzwel Zhen B Lacson</td>
              <td className="role">Programmer</td>
              <td className="center-text">3</td>
              <td className="center-text">2</td>
            </tr>
            <tr>
              <td className="center-text">3.</td>
              <td>Julliana N Castaneda</td>
              <td className="role">Member</td>
              <td className="center-text">2</td>
              <td className="center-text">0</td>
            </tr>
            <tr>
              <td className="center-text">4.</td>
              <td>Alejandro C Faustino</td>
              <td className="role">Member</td>
              <td className="center-text">4</td>
              <td className="center-text">2</td>
            </tr>
            <tr>
              <td className="center-text">5.</td>
              <td>Justine I Pare</td>
              <td className="role">Member</td>
              <td className="center-text">5</td>
              <td className="center-text">1</td>
            </tr>
            <tr>
              <td className="center-text">6.</td>
              <td>John Reagan S Pinpin</td>
              <td className="role">Member</td>
              <td className="center-text">3</td>
              <td className="center-text">2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <style>{`
        .page-wrapper {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 40px 20px;
          width: 100%;
        }

        .allocation-container {
          background: #fff;
          border-radius: 10px;
          padding: 25px 30px;
          width: 100%;
          max-width: 860px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          border-top: 4px solid #800000;
        }

        .section-title {
          font-size: 20px;
          font-weight: bold;
          color: #3B0304;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .allocation-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .allocation-table th,
        .allocation-table td {
          padding: 12px 10px;
          border-bottom: 1px solid #ddd;
        }

        .allocation-table th {
          background-color: #fafafa;
          font-weight: bold;
          color: #333;
        }

        .center-text {
          text-align: center;
        }

        .role {
          color: #3B0304;
        }
      `}</style>
    </div>
  );
};

export default Allocation;
