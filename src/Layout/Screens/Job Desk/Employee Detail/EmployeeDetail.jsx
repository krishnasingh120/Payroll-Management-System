import React from 'react'
import { BlockOutlined, CalendarOutlined, ClockCircleOutlined, GlobalOutlined, MailOutlined, MobileOutlined, UserOutlined, WalletOutlined, WarningOutlined } from '@ant-design/icons';
import './EmployeeDetail.css'

const EmployeeDetail = () => {
  const employeeInfo = {
    name: 'Kimi Räikkönen',
    department: 'UX Designer',
    salary: '$40,000',
    joiningDate: '12 February 2023',
    email: 'alwissuryatmaja@gmail.com',
    phone: '+6282283386756',
    website: 'https://bit.ly/3u0JF79',
  };
  return (
    <div className="sidebar">
    <div className="employee-info">
      <table>
        <tr>
          <td><UserOutlined className='icon-1' /></td>
          <span className='heading'>{employeeInfo.name}</span>
          <p className='sub-head'>{employeeInfo.department}</p>
        </tr>
      </table>
    </div>
    <div className="employee-details">

      <h2 className='column-head'>Info</h2>

      <table>
        <tr>
          <td><BlockOutlined className='icon' /></td>
          <span className='heading'>Admin HRM</span>
          <p className='sub-head'>Department</p>
        </tr>
        <tr>
          <td><WalletOutlined className='icon' /></td>
          <span className='salary-head'>{employeeInfo.salary}</span>
          <p className='sub-head'>Salary</p>
        </tr>
        <tr>
          <td><ClockCircleOutlined className='icon' /></td>
          <span className='heading'>Regular</span>
          <p className='sub-head'>Work Shift</p>
        </tr>
        <tr>
          <td><CalendarOutlined className='icon' /></td>
          <span className='heading'>{employeeInfo.joiningDate}</span>
          <p className='sub-head'>Joining Date</p>
        </tr>
      </table>

      <h2 className='column-head'>Contact</h2>

      <table>
        <tr>
          <td><MailOutlined className='icon' /></td>
          <p className='sub-head'>Email</p>
          <span className='heading'>{employeeInfo.email}</span>
        </tr>
        <tr>
          <td><MobileOutlined className='icon' /></td>
          <p className='sub-head'>Phone</p>
          <span className='heading'>{employeeInfo.phone}</span>
        </tr>
        <tr>
          <td><GlobalOutlined className='icon' /></td>
          <p className='sub-head'>Website</p>
          <span className='heading'>{employeeInfo.website}</span>
        </tr>
      </table>
    </div>
  </div>
  )
}

export default EmployeeDetail;
