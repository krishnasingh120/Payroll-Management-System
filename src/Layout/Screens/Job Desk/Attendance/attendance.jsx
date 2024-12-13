import React from 'react'
import './attendance.css'
import {  Legend, RadialBar, RadialBarChart, Tooltip } from 'recharts';
import EmployeeDetail from '../Employee Detail/EmployeeDetail';
import { CalendarOutlined, LeftOutlined } from '@ant-design/icons';
import Chart from 'react-google-charts';

const Attendance = () => {
  const data = [
    {
      "name": "Leave",
      "uv": 10,
      "pv":2000,
      "fill": "#8884d8"
    },
    {
      "name": "Late",
      "uv": 12,
      "pv": 4567,
      "fill": "#83a6ed"
    },
    {
      "name": "Early",
      "uv": 16,
      "pv": 1398,
      "fill": "#8dd1e1"
    },
    {
      "name": "Regular",
      "uv": 28,
      "pv": 9800,
      "fill": "#82ca9d"
    },
  ]
    const attendanceData = {
        totalDays: 23,
        regularDays: 16,
        earlyDays: 12,
        lateDays: 10,
        leaveDays: 10,
      };
    
      const summaryData = {
        totalScheduleHour: 152,
        leaveHour: 0,
        workAvailability: 97.89,
        totalActiveHour: 456,
        balance: -52,
        averageBehavior: 'Early',
      };
    
      const attendanceDetails = [
        {
          date: '16/08/2013',
          punchedIn: '16/08/2013',
          inGeolocation: 'Germany',
          punchedOut: '18/09/2016',
          outGeolocation: 'Vietnam',
          behavior: 'Late',
          type: 'Full Amount',
        },
      ];
      const piedata = [
        ["Task", "Hours per Day"],
        ["Regular", 9],
        ["Early", 2],
        ["Late", 2],
        ["Leave", 3]
      ];
    
  return (
    <div className="attendance">
    <div className="attendance-summary">
      <div className='attendance-head'>
      <h2>Attendance</h2>
      <button className='date-btn1'><CalendarOutlined /> Select Date</button>
      </div>
      <div className="attendance-stats">
      <Chart
      chartType="PieChart"
      data={piedata}
      width={"500px"}
      height={"150px"}
    />
    </div>
      <div className="summary-details">
        <div className="detail">
          <p>Total schedule hour</p>
          <p>{summaryData.totalScheduleHour}</p>
        </div>
        <div className="detail">
          <p>Leave hour</p>
          <p>{summaryData.leaveHour}</p>
        </div>
        <div className="detail">
          <p>Total work availability</p>
          <p>{summaryData.workAvailability}</p>
        </div>
        <div className="detail">
          <p>Total active hour</p>
          <p>{summaryData.totalActiveHour}</p>
        </div>
        <div className="detail">
          <p>Balance</p>
          <p>{summaryData.balance}</p>
        </div>
        <div className="detail">
          <p>Average Behaviour</p>
          <p>{summaryData.averageBehavior}</p>
        </div>
      </div>

      <div >
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Punched In</th>
              <th>In Geolocation</th>
              <th>Punched Out</th>
              <th>Out Geolocation</th>
              <th>Behavior</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {attendanceDetails.map((detail, index) => (
              <tr key={index}>
                <td>{detail.date}</td>
                <td>{detail.punchedIn}</td>
                <td>{detail.inGeolocation}</td>
                <td>{detail.punchedOut}</td>
                <td>{detail.outGeolocation}</td>
                <td>{detail.behavior}</td>
                <td>{detail.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button className='btn'><LeftOutlined /></button>
          <button className='btn'>Prev</button>
          <button className='btn-next'>Next</button>
          {/* <p>Page: 1 of 100</p> */}
          <select className='option'>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Attendance;
