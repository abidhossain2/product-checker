import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import UseData from '../../Hooks/UseData';
import './Dashboard.css'
const Dashboard = () => {
    const [data] = UseData()
    return (
        <div className='dashboard-container'>
            <div>
                <h4>Sell (Month)</h4>
                <LineChart className='line-chart' width={300} height={300} data={data}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <h4>Investment vs Revenue (Month)</h4>
                <BarChart width={300} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#82ca9d" />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;