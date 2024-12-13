import React from 'react'
import './allowance.css'

import EmployeeDetail from '../Employee Detail/EmployeeDetail';
import { WarningOutlined } from '@ant-design/icons';

const Allowance = () => {
 

  const allowancePolicy = [
    '1. Leave will start from the month of January',
    '2. Any type of change will be effective on the next day',
  ];

  const leaveTypes = [
    {
      title: 'Paid Casual',
      data: [
        { label: 'Type', value: 'Paid' },
        { label: 'Allowance', value: '07:00' },
        { label: 'Earned', value: '$21,000' },
        { label: 'Taken', value: '$33' },
        { label: 'Availability', value: '$55' },
      ],
    },
    {
      title: 'Paid Sick',
      data: [
        { label: 'Type', value: 'Paid' },
        { label: 'Allowance', value: '07:00' },
        { label: 'Earned', value: '$21,000' },
        { label: 'Taken', value: '$33' },
        { label: 'Availability', value: '$55' },
      ],
    },
    {
      title: 'Unpaid Casual',
      data: [
        { label: 'Type', value: 'Paid' },
        { label: 'Allowance', value: '07:00' },
        { label: 'Earned', value: '$21,000' },
        { label: 'Taken', value: '$33' },
        { label: 'Availability', value: '$55' },
      ],
    },
    {
      title: 'Unpaid Sick',
      data: [
        { label: 'Type', value: 'Paid' },
        { label: 'Allowance', value: '07:00' },
        { label: 'Earned', value: '$21,000' },
        { label: 'Taken', value: '$33' },
        { label: 'Availability', value: '$55' },
      ],
    },
  ];

  return (
    <div className="allowance">
      <div className="main-content">
        <div className="allowance-policy">
          <table>
            <tr>
              <td><WarningOutlined className='icon-2' /></td>
              <p>Allowance Policy</p>
              <ul>
                {allowancePolicy.map((policy, index) => (
                  <li key={index}>{policy}</li>
                ))}
              </ul>
            </tr>

          </table>
        </div>

        <div className="leave-types">
          {leaveTypes.map((leaveType, index) => (
            <div className="leave-type" key={index}>
              <h3>{leaveType.title}</h3>
              <table>
              <td>
                {leaveType.data.map((item, index) => (
                  <tr key={index}>
                    <span className='leave-value'>{item.value}</span>
                    <p className='leave-label'>{item.label}</p> 
                  </tr>
                ))}
              </td>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allowance;
