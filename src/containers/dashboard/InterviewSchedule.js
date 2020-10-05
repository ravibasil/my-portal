import React from "react";
import PieChart from "../../components/pie-chart";

export default function InterviewSchedule() {
  return (
    <div className="card chart">
      <h4 className="card-title mb-4">Interview Schedules</h4>
      <div className="chart-row mt-4">
        <div className="img-c">
          <PieChart />
        </div>
        <div className="img-c">
          <PieChart />
        </div>
      </div>
    </div>
  );
}
