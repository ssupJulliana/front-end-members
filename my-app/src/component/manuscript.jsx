import React from 'react';

const Manuscript = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '40px',
      backgroundColor: '#f9f9f9',
      height: '100vh',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '1150px',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        {/* Events Header */}
        <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>📅</span>
          Events
        </div>

        {/* Manuscript Results */}
        <div style={{ fontWeight: '600', marginBottom: '10px', display: 'flex', alignItems: 'center', color: '#800000' }}>
          <span style={{ marginRight: '8px' }}>🧾</span>
          Manuscript Results
        </div>
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '25px'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead style={{ backgroundColor: '#f5f5f5', textAlign: 'left' }}>
              <tr>
                <th style={{ padding: '12px' }}>NO</th>
                <th>Team</th>
                <th>Title</th>
                <th>Due Date</th>
                <th>Time</th>
                <th>Plagiarism</th>
                <th>AI</th>
                <th>File Uploaded</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: '#fff' }}>
                <td style={{ padding: '12px' }}>1.</td>
                <td>Mendoza, Et Al</td>
                <td>TaskSphere IT</td>
                <td>Mar 25, 2025</td>
                <td>8:00 AM</td>
                <td style={{ color: '#a00' }}>6%</td>
                <td style={{ color: '#a00' }}>6%</td>
                <td>📁</td>
                <td>
                  <span style={{
                    backgroundColor: '#82a060',
                    color: '#fff',
                    fontSize: '13px',
                    padding: '5px 15px',
                    borderRadius: '6px'
                  }}>
                    Passed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Oral Defense */}
        <div style={{ fontWeight: '600', marginBottom: '10px', display: 'flex', alignItems: 'center', color: '#800000' }}>
          <span style={{ marginRight: '8px' }}>📄</span>
          Oral Defense
        </div>
        <div style={{
          display: 'flex',
          gap: '30px',
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '18px',
          marginBottom: '30px',
          width: '420px'
        }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: '500', marginBottom: '5px' }}>👥 Mendoza, Et Al</div>
            <div style={{ fontSize: '13px', marginBottom: '5px' }}>
              <strong>Title</strong><br />
              TaskSphere IT
            </div>
            <div style={{ fontSize: '13px', marginBottom: '5px' }}>
              <strong>Date</strong><br />
              March 31, 2025
            </div>
            <div style={{ fontSize: '13px' }}>
              <strong>Time</strong><br />
              1:00 PM - 3:00 PM
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', marginBottom: '5px' }}>
              <strong>Panelists</strong><br />
              👤 Anderson F Dashiell<br />
              👤 Adam B Apostol<br />
              👤 Von Jacob P Yu
            </div>
            <div style={{ fontSize: '13px' }}>
              <strong>Status</strong><br />
              <span style={{
                display: 'inline-block',
                padding: '5px 12px',
                border: '1px solid #800000',
                borderRadius: '5px',
                color: '#800000',
                backgroundColor: '#fff'
              }}>
                Pending
              </span>
            </div>
          </div>
        </div>

        {/* Final Defense */}
        <div style={{ fontWeight: '600', display: 'flex', alignItems: 'center', color: '#800000' }}>
          <span style={{ marginRight: '8px' }}>📄</span>
          Final Defense
        </div>
      </div>
    </div>
  );
};

export default Manuscript;
