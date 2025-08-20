import React from "react";

export default function TitleDefense() {
  const tasks = [
    {
      assigned: "John Doe",
      task: "Brainstorming",
      created: "Dec 10, 2024",
      due: "Dec 12, 2024",
      time: "8:00 AM",
      completed: "Dec 12, 2024",
      phase: "Planning",
      revision: "No Revision",
      status: "Completed",
      methodology: "Agile",
    },
    {
      assigned: "Jane Smith",
      task: "Data Gathering: Internet Research",
      created: "Dec 21, 2024",
      due: "Dec 25, 2024",
      time: "12:00 PM",
      completed: "Dec 25, 2024",
      phase: "Planning",
      revision: "No Revision",
      status: "Completed",
      methodology: "Agile",
    },
    {
      assigned: "Aiden Cruz",
      task: "Title Proposal: Concepts & Layout",
      created: "Jan 3, 2025",
      due: "Jan 8, 2025",
      time: "9:00 AM",
      completed: "Jan 8, 2025",
      phase: "Planning",
      revision: "No Revision",
      status: "Completed",
      methodology: "Agile",
    },
    {
      assigned: "Sophia Reyes",
      task: "Title Defense: Mock Defense",
      created: "Jan 9, 2025",
      due: "Jan 10, 2025",
      time: "8:00 AM",
      completed: "Jan 10, 2025",
      phase: "Planning",
      revision: "No Revision",
      status: "Completed",
      methodology: "Agile",
    },
    {
      assigned: "Liam Santos",
      task: "Title Defense",
      created: "Jan 11, 2025",
      due: "Jan 11, 2025",
      time: "10:00 AM",
      completed: "Jan 11, 2025",
      phase: "Planning",
      revision: "No Revision",
      status: "Completed",
      methodology: "Agile",
    },
    {
      assigned: "Emily Navarro",
      task: "Re-Defense: Title Gathering",
      created: "Jan 13, 2025",
      due: "Jan 13, 2025",
      time: "12:30 PM",
      completed: "Jan 13, 2025",
      phase: "Planning",
      revision: "No Revision",
      status: "Completed",
      methodology: "Agile",
    },
    {
      assigned: "Caleb Garcia",
      task: "Re-Defense: Refining the Selected Title",
      created: "Jan 14, 2025",
      due: "Jan 15, 2025",
      time: "7:00 AM",
      completed: "Jan 15, 2025",
      phase: "Planning",
      revision: "No Revision",
      status: "Completed",
      methodology: "Agile",
    },
    {
      assigned: "Zoe Dela Cruz",
      task: "Re-Defense: Re-Defense Presentation",
      created: "Jan 22, 2025",
      due: "Jan 22, 2025",
      time: "9:30 AM",
      completed: "Jan 22, 2025",
      phase: "Planning",
      revision: "No Revision",
      status: "Completed",
      methodology: "Agile",
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", background: "#f9f9f9", minHeight: "100vh", padding: "50px 0" }}>
      <div style={{ width: "1160px", background: "#fff", borderRadius: "10px", padding: "30px 36px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        
        {/* Breadcrumb Title */}
        <div style={{ display: "flex", alignItems: "center", fontSize: "15px", fontWeight: "bold", marginBottom: "26px" }}>
          <span style={{ marginRight: "8px" }}>🗃</span>
          <span style={{ color: "#48010F" }}>Tasks Record</span>
          <span style={{ margin: "0 10px", color: "#48010F" }}>»</span>
          <span style={{ color: "#48010F" }}>Title Defense</span>
        </div>

        {/* Search and Filter */}
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "18px" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "7px 12px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              width: "210px",
              fontSize: "14px",
            }}
          />
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "7px 14px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              background: "#fff",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            ☰ Filter
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", minWidth: "1500px" }}>
            <thead>
              <tr style={{ backgroundColor: "#f4f4f4", textAlign: "left", color: "#333" }}>
                <th style={{ padding: "10px" }}>NO</th>
                <th style={{ padding: "10px" }}>Assigned</th>
                <th style={{ padding: "10px" }}>Task</th>
                <th style={{ padding: "10px" }}>Date Created</th>
                <th style={{ padding: "10px" }}>Due Date</th>
                <th style={{ padding: "10px" }}>Time</th>
                <th style={{ padding: "10px" }}>Date Completed</th>
                <th style={{ padding: "10px" }}>Revision NO</th>
                <th style={{ padding: "10px" }}>Status</th>
                <th style={{ padding: "10px" }}>Methodology</th>
                <th style={{ padding: "10px" }}>Project Phase</th>
                <th style={{ padding: "10px" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <td style={{ padding: "10px" }}>{index + 1}</td>
                  <td style={{ padding: "10px" }}>{task.assigned}</td>
                  <td style={{ padding: "10px" }}>{task.task}</td>
                  <td style={{ padding: "10px" }}>{task.created}</td>
                  <td style={{ padding: "10px" }}>{task.due}</td>
                  <td style={{ padding: "10px" }}>{task.time}</td>
                  <td style={{ padding: "10px" }}>{task.completed}</td>
                  <td style={{ padding: "10px", color: "#B20000", fontWeight: 600 }}>{task.revision}</td>
                  <td style={{ padding: "10px" }}>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: "14px",
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#fff",
                        background: "#8e44ad",
                      }}
                    >
                      {task.status}
                    </span>
                  </td>
                  <td style={{ padding: "10px" }}>{task.methodology}</td>
                  <td style={{ padding: "10px" }}>{task.phase}</td>
                  <td style={{ padding: "10px" }}>
                    <button
                      style={{
                        padding: "6px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#f2f2f2",
                        cursor: "pointer",
                        fontWeight: "bold",
                      }}
                    >
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
