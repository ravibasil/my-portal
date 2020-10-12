import React, { useState, useEffect } from 'react';
import { DatePicker, Space } from 'antd';
import PieChart from "../../components/pie-chart";
import 'antd/dist/antd.css';
import { getDailyInterview } from '../../api/dashboard';
import moment from 'moment';

export default function DailyInterviewSchedule() {
    const [pieChartData, setPieChartData] = useState({});
    const [dataSelected, setDateSelected] = useState(moment())

    useEffect(() => {
        const data = getDailyInterview(moment().format('dd'), moment().format('MM'), moment().format('YYYY'));
        if (data) {
            createPieChart(data)
        }
    }, [])

    const createPieChart = (monthlyData) => {
        if (!monthlyData) {
            return;
        }
        let data = {
            labels: monthlyData.map(item => item.timename),
            datasets: [
                {
                    label: "Daily Interview",
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
                        render: function (args) {
                            return `${args.label}-${args.value}`;
                        },
                    }
                }
            }

        }

        console.log('---', data)

        setPieChartData(data);
    }

    function onChange(date, dateString) {
        const data = getDailyInterview(date.format('dd'), date.format('MM'), date.format('YYYY'));
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
                    <DatePicker onChange={onChange} value={dataSelected} />
                </Space>
            </div>
            <div className="InterviewSchedule_Chart">
                <PieChart pieChartData={pieChartData} />
            </div>
        </div>
    )
}
