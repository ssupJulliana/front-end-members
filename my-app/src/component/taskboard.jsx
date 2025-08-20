import React from 'react';

const tasks = {
  "To Do": [
    {
      name: "Mendoza, Et Al",
      task: "Chapter 4",
      revision: "No Revision",
      dueDate: "Feb 25, 2025"
    },
    {
      name: "Addrialene M.",
      task: "Chapter 3 - Implementation",
      revision: "No Revision",
      dueDate: "Feb 15, 2025"
    },
    {
      name: "Justine P.",
      task: "Chapter 3",
      revision: "No Revision",
      dueDate: "Feb 13, 2025"
    }
  ],
  "In Progress": [
    {
      name: "Mendoza, Et Al",
      task: "Chapter 3",
      revision: "No Revision",
      dueDate: "Feb 20, 2025"
    },
    {
      name: "Alejandro F.",
      task: "Chapter 3 - Development",
      revision: "No Revision",
      dueDate: "Feb 9, 2025"
    },
    {
      name: "John Reagan S.",
      task: "Chapter 3",
      revision: "No Revision",
      dueDate: "Feb 11, 2025"
    }
  ],
  "To Review": [
    {
      name: "Julliana C.",
      task: "Chapter 3 - Implementation",
      revision: "No Revision",
      dueDate: "Feb 7, 2025"
    }
  ],
  "Missed Task": []
};

const statusColors = {
  "To Do": "#F4B400",
  "In Progress": "#4CAF50",
  "To Review": "#4285F4",
  "Missed Task": "#DB4437"
};

const TaskBoard = () => {
  return (
    <div className="board-wrapper">
      <h2 className="board-title">Tasks Board</h2>
      <div className="search-wrapper">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="columns">
        {Object.entries(tasks).map(([status, items]) => (
          <div className="column" key={status}>
            <h3 className="column-title" style={{ backgroundColor: statusColors[status] }}>
              {status}
            </h3>
            {items.map((task, index) => (
              <div className="task-card" key={index}>
                <div
                  className="status-line"
                  style={{ backgroundColor: statusColors[status] }}
                ></div>
                <div className="card-content">
                  <strong>{task.name}</strong>
                  <p>{task.task}</p>
                  <p>{task.revision}</p>
                  <p className="due-date">📅 {task.dueDate}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .board-wrapper {
          max-width: 1200px;
          margin: 30px auto;
          padding: 0 16px;
          font-family: sans-serif;
        }

        .board-title {
          font-size: 22px;
          font-weight: bold;
          color: #5B0017;
          border-bottom: 4px solid #5B0017;
          padding-bottom: 4px;
        }

        .search-wrapper {
          margin: 12px 0 24px;
        }

        .search-input {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 4px;
          width: 240px;
        }

        .columns {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .column {
          background: #f9f9f9;
          border-radius: 8px;
          padding: 12px;
          box-shadow: 0 1px 4px rgba(0,0,0,0.1);
        }

        .column-title {
          padding: 10px;
          color: white;
          text-align: center;
          border-radius: 6px;
          font-size: 15px;
          margin-bottom: 12px;
        }

        .task-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          display: flex;
          margin-bottom: 12px;
          overflow: hidden;
        }

        .status-line {
          width: 12px;
        }

        .card-content {
          padding: 10px;
          flex: 1;
          font-size: 13px;
        }

        .due-date {
          margin-top: 4px;
          font-size: 12px;
          color: #a00;
        }
      `}</style>
    </div>
  );
};

export default TaskBoard;
