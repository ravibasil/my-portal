import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
// import chartData from "../../data/pieChartData.json";
import 'chartjs-plugin-labels';

const PieChart = ({ pieChartData }) => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(pieChartData);
    }, [pieChartData]);

    return (
        <>
            {data ? (
                <Pie
                    data={data}
                    width={300}
                    height={300}
                    options={{ maintainAspectRatio: false }}
                />
            ) : null}
        </>
    );
};

export default PieChart;
