import React from "react";
import DeclaredPosition from "./containers/dashboard/DeclaredPosition";
import VideoInterviewScheduled from "./containers/dashboard/VideoInterviewScheduled";
import InterviewSchedule from "./containers/dashboard/InterviewSchedule";
import ApplicantStatus from "./containers/dashboard/ApplicantsStatus";
import "./App.css";
import Sidebar from "./components/sidebar";
import PostScreeningVideoInterview from "./containers/dashboard/PostScreeningVideoInterview";

function App() {
  return (
    <div className="dashboard-main-container">
      <Sidebar />
      <div className="right-content-das">
        <div className="content-main-wrap">
          <div className="top-heading">
            <h3>Dashboard</h3>
          </div>
          <div className="container-fluid p-0">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="row">
                  <div className="col-sm-12 col-md-7">
                    <DeclaredPosition />
                  </div>
                  <div className="col-sm-12 col-md-5">
                    <VideoInterviewScheduled />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <PostScreeningVideoInterview />
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <ApplicantStatus />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <InterviewSchedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
