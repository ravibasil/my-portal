import React, { useState, useEffect } from 'react';
import { DatePicker, Space } from 'antd';
import PieChart from "../../components/pie-chart";
import 'antd/dist/antd.css';
import { getMonthlyInterview } from '../../api/dashboard';
import moment from 'moment';
import 'chartjs-plugin-labels';

export default function MonthlylntervewSchedule() {
    const [pieChartData, setPieChartData] = useState({});
    const [ dataSelected, setDateSelected ] = useState(moment())

    useEffect(() =>{
        const data = getMonthlyInterview(moment().format('MM'), moment().format('YYYY'));
        if (data) {
            createPieChart(data)
        }
    },[])

    const createPieChart = (monthlyData) => {
        if(!monthlyData){
            return;
        }
        let data = {
            labels: monthlyData.map(item => item.weekname),
            datasets: [
                {
                    label: "Monthly Interview",
                    data: monthlyData.map(item => parseInt(item.noofinterviews)),
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.6)",
                        "rgba(54, 162, 235, 0.6)",
                        "rgba(255, 206, 86, 0.6)",
                        "rgb(167, 185, 179)"
                    ],
                },
            ],
            options: {
                plugins: {
                    labels: {
                      render: 'value'
                    }
                }
            }
        }

        console.log('---',data)

        setPieChartData(data);
    }

    function onChange(date, dateString) {
        const data = getMonthlyInterview(date.format('MM'), date.format('YYYY'));
        if (data) {
            createPieChart(data)
        }
        setDateSelected(date);
        console.log(date, dateString);
    }

    return (
        <div className="InterviewSchedule">
            <div className="InterviewSchedule_Menu">
                <Space>
                    <DatePicker onChange={onChange} picker="month" value={dataSelected}/>
                </Space>
            </div>
            <div className="InterviewSchedule_Chart">
                <PieChart pieChartData={pieChartData} />
            </div>
        </div>
    )
}
