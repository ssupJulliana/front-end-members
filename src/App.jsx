// src/App.jsx

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import TaskAllocation from './components/task-allocation';
import TasksOralDefense from './components/tasks/tasks-oral-defense';
import TasksTitleDefense from './components/tasks/tasks-title-defense';
import TasksFinalDefense from './components/tasks/tasks-final-defense';
import AdviserTasks from './components/adviser-tasks';
import TasksBoard from './components/tasks board/tasks-board';
import ViewTasksBoard from './components/tasks board/view-tb';
import TasksRecord from './components/tasks record/tasks-record'; // Updated import path

// Corrected paths for the new tasks record components
import TitleTasksRecord from './components/tasks record/title-tasks-record';  // Corrected path
import OralTasksRecord from './components/tasks record/oral-tasks-record';    // Corrected path
import FinalTasksRecord from './components/tasks record/final-tasks-record';  // Corrected path

// Updated Events component path
import Events from './components/events';  // Corrected path for events component

import './App.css';

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav
        style={{
          padding: '10px 20px',
          background: '#3B0304',
          display: 'flex',
          gap: '20px',
        }}
      >
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Task Allocation</Link>
        <Link to="/tasks" style={{ color: '#fff', textDecoration: 'none' }}>Oral Defense</Link>
        <Link to="/title-defense" style={{ color: '#fff', textDecoration: 'none' }}>Title Defense</Link>
        <Link to="/final-defense" style={{ color: '#fff', textDecoration: 'none' }}>Final Defense</Link>
        <Link to="/adviser-tasks" style={{ color: '#fff', textDecoration: 'none' }}>Adviser Tasks</Link>
        <Link to="/tasks-board" style={{ color: '#fff', textDecoration: 'none' }}>Tasks Board</Link>
        <Link to="/tasks-record" style={{ color: '#fff', textDecoration: 'none' }}>Tasks Record</Link>
        <Link to="/events" style={{ color: '#fff', textDecoration: 'none' }}>Events</Link> {/* Link for Events */}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<TaskAllocation />} />
        <Route path="/tasks" element={<TasksOralDefense />} />
        <Route path="/title-defense" element={<TasksTitleDefense />} />
        <Route path="/final-defense" element={<TasksFinalDefense />} />
        <Route path="/adviser-tasks" element={<AdviserTasks />} />
        <Route path="/tasks-board" element={<TasksBoard />} />
        <Route path="/view-tasksboard" element={<ViewTasksBoard />} />
        <Route path="/tasks-record" element={<TasksRecord />} /> {/* Route for TasksRecord */}
        
        {/* Routes for new tasks record pages */}
        <Route path="/title-tasks-record" element={<TitleTasksRecord />} /> {/* Route for Title Tasks Record */}
        <Route path="/oral-tasks-record" element={<OralTasksRecord />} /> {/* Route for Oral Tasks Record */}
        <Route path="/final-tasks-record" element={<FinalTasksRecord />} /> {/* Route for Final Tasks Record */}

        {/* Route for Events */}
        <Route path="/events" element={<Events />} /> {/* Route for Events */}
      </Routes>
    </div>
  );
}

export default App;
