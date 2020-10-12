import React from "react";
import MonthlylntervewSchedule from './MonthlylntervewSchedule';
import DailyInterviewSchedule from './DailyInterviewSchedule';

export default function InterviewSchedule() {
  return (
    <div className="card chart">
      <h4 className="card-title mb-4">Interview Schedules</h4>
      <div className="chart-row mt-4">
        <div className="img-c">
          <MonthlylntervewSchedule />
        </div>
        <div className="img-c">
          <DailyInterviewSchedule />
        </div>
      </div>
    </div>
  );
}
