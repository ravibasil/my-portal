import React from 'react';
import DeclaredPosition from './containers/dashboard/DeclaredPosition';
import VideoInterviewScheduled from './containers/dashboard/VideoInterviewScheduled';
import InterviewSchedule from './containers/dashboard/InterviewSchedule';
import ApplicantStatus from './containers/dashboard/ApplicantsStatus';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="right-content-das">
        <div className="content-main-wrap">
          <div className="top-heading">
            <h3>Dashboard</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: "flex", flexDirection: 'column' }}>
              <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around' }}>
                <DeclaredPosition />
                <VideoInterviewScheduled />
              </div>
              <InterviewSchedule />
            </div>
            <ApplicantStatus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
