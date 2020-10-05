import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

import chartData from "../../data/pieChartData.json";

const PieChart = () => {
  const [populatioData, setPopulationData] = useState({
    labels: ["Oct Week 1", "Oct Week 2", "Oct Week 3"],
    datasets: [
      {
        label: "Population",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
      },
    ],
  });

  useEffect(() => {
    const newPopulationData = { ...populatioData };
    newPopulationData.datasets[0].data = [...chartData.data];
    setPopulationData(newPopulationData);
  }, []);

  return (
    <>
      {populatioData ? (
        <Pie
          data={populatioData}
          width={300}
          height={300}
          options={{ maintainAspectRatio: false }}
        />
      ) : null}
    </>
  );
};

export default PieChart;
