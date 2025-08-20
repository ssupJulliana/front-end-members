import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Allocation from './component/allocation';
import Task from './component/task1';
import Task2 from './component/task2';
import Advisertask from './component/advisertask';
import Taskboard from './component/taskboard';
import Review from './component/review';
import Taskrecord from './component/taskrecord';
import Titledefense from './component/titledefense';
import OralDefense from './component/oraldefense';
import Manuscript from './component/manuscript';
import Profile from './component/profile';
import FinalDefense from './component/finaldefense';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Allocation/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
