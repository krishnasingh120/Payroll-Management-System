import React from 'react'
import './slip.css'
import { CalendarOutlined, LeftOutlined } from '@ant-design/icons';

const Slip = () => {
  const slipData = [
    {
      payrun: 'CH66 2RD',
      period: 'June 13 2014',
      type: 'Offline',
      status: 'Paid',
      salary:'$400000'
    },
    {
      payrun: 'KT17 9NL',
      period: 'June 18-20 2014',
      type: 'Online',
      status: 'Pending',
      salary:'$32000'
    },
    {
      payrun: 'SN10 2RP',
      period: 'July 21 2014',
      type: 'One-Time',
      status: 'Paid',
      salary:'$500000'
    },
    {
      payrun: 'G272 22Q',
      period: 'June 23 2014',
      type: 'Recurring',
      status: 'Paid',
      salary:'$4000'
    },
    {
      payrun: 'G20 6RD',
      period: 'August 13 2014',
      type: 'Full Amount',
      status: 'Paid',
      salary:'$9000'
    },
  ];

  return (
    <div className="slip">
      <div className="slip-summary">
        <div className='slip-head'>
          <h2>Slip</h2>
          <button className='date-btn3'><CalendarOutlined /> Select Date</button>
        </div>
        <div className="summary-details">
          <div className="detail">
            <p>16</p>
            <p>Total Payslip</p>
          </div>
          <div className="detail">
            <p>2</p>
            <p>Payslip Sent</p>
          </div>
          <div className="detail">
            <p>3</p>
            <p>Conflicted Slip</p>
          </div>
        </div>

        <div >
          <table className="slip-table">
            <thead>
              <tr>
                <th>Payrun</th>
                <th>Period</th>
                <th>Payrun Type</th>
                <th>Status</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {slipData.map((slip, index) => (
                <tr key={index}>
                  <td>{slip.payrun}</td>
                  <td>{slip.period}</td>
                  <td>{slip.type}</td>
                  <td>{slip.status}</td>
                  <td>{slip.salary}</td>
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

export default Slip;
