import React from 'react'
import './leavetab.css'
import { CalendarOutlined, LeftOutlined } from '@ant-design/icons';

const Leavetab = () => {
  const leaveData = [
    {
      date: '15 May 2020 9:00 am',
      duration: '9d 4h',
      type: 'Other',
      attachments: 'dealsheet_mckee.jpg',
      status: 'Paid',
    },
    {
      date: '15 May 2020 8:30 am',
      duration: '3d 13h',
      type: 'Holiday',
      attachments: 'debitnote_0311.xlsx',
      status: 'Pending',
    },
    // ... other leave data
  ];

  return (
    <div className="leave">
      <div className="leave-summary">
        <div className='leave-head'>
          <h2>Leave</h2>
          <button className='date-btn2'><CalendarOutlined /> Select Date</button>
        </div>
        <div className="summary-details">
          <div className="detail">
            <p>16 Days</p>
            <p>Leave Taken</p>
          </div>
          <div className="detail">
            <p>2 days</p>
            <p>Upcoming Leave</p>
          </div>
          <div className="detail">
            <p>32</p>
            <p>Pending Request</p>
          </div>
        </div>

        <div >
          <table className="leave-table">
            <thead>
              <tr>
                <th>Date & Time</th>
                <th>Leave Duration</th>
                <th>Leave Type</th>
                <th>Attachments</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((leave, index) => (
                <tr key={index}>
                  <td>{leave.date}</td>
                  <td>{leave.duration}</td>
                  <td>{leave.type}</td>
                  <td>{leave.attachments}</td>
                  <td>{leave.status}</td>
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

export default Leavetab;
