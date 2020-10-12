import React, { useState } from "react";
import DeclaredPosition from "./containers/dashboard/DeclaredPosition";
import VideoInterviewScheduled from "./containers/dashboard/VideoInterviewScheduled";
import InterviewSchedule from "./containers/dashboard/InterviewSchedule";
import ApplicantStatus from "./containers/dashboard/ApplicantsStatus";
import "./App.css";
import Sidebar from "./components/sidebar";
import PostScreeningVideoInterview from "./containers/dashboard/PostScreeningVideoInterview";

function App() {
  const [isPostScreenVisible, setIsPostScreenVisible] = useState(false);
  return (
    <div className="dashboard-main-container">
      <Sidebar />
      <div className="right-content-das">
        <div className="content-main-wrap">
          <div className="top-heading">
            <h3>Dashboard</h3>
          </div>

          <div className="Dashboard__Navigation">
            <div className={`Dashboard__Navigation__Item ${!isPostScreenVisible && 'Dashboard__Navigation__Item--checked'}`}
              onClick={() => setIsPostScreenVisible(false)}>
              Pre Screening
            </div>

            <div className={`Dashboard__Navigation__Item ${isPostScreenVisible && 'Dashboard__Navigation__Item--checked'}`}
              onClick={() => setIsPostScreenVisible(true)}>
              Post Screening
            </div>
          </div>

          <div className="container-fluid p-0">
            <div className="row">
              {/* <div className="col-sm-12 col-md-6"> */}
              {/* <div className="row">
                  <div className="col-sm-12 col-md-7"> */}
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-fill bd-highlight">
                  <DeclaredPosition />
                </div>
                {/* </div> */}
                {/* <div className="col-sm-12 col-md-5"> */}
                <div className="p-2 flex-fill bd-highlight">
                  <VideoInterviewScheduled />
                </div>
                {/* </div> */}
                {/* </div> */}
                {/* </div>
              <div className="col-sm-12 col-md-6"> */}
                {/* <div className="row"> */}
                {isPostScreenVisible &&
                  // <div className="col-sm-12 col-md-6">
                  <div className="p-2 flex-fill bd-highlight">
                    <PostScreeningVideoInterview />
                  </div>
                  // </div>
                }
                {/* <div className="col-sm-12 col-md-6"> */}
                <div className="p-2 flex-fill bd-highlight">
                  <ApplicantStatus />
                </div>
                {/* </div> */}
                {/* </div> */}
                {/* </div> */}
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
