import React, { useState } from 'react'
import './status.css'
import { CalendarOutlined, LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Button, Flex, Segmented } from 'antd';

const employees = [
    {
      profile: <Avatar size={20} style={{backgroundColor:'red'}}>J</Avatar>,
      name: 'Jeremy Neigh',
      date: '9/23/16',
      duration: '15h 40m',
      department: 'Finance',
      type: 'Design',
      attachment: 'DebitNoteMcKee.jpg',
    },
    {
      profile: <Avatar size={20} style={{backgroundColor:'purple'}}>L</Avatar>,
      name: 'Lucas Black',
      date: '9/23/16',
      duration: '15h 40m',
      department: 'Finance',
      type: 'Design',
      attachment: 'DebitNoteMcKee.jpg',
    },
    {
      profile: <Avatar size={20} style={{backgroundColor:'blue'}}>J</Avatar>,
      name: 'Jeremiah Isle',
      date: '9/23/16',
      duration: '15h 40m',
      department: 'Finance',
      type: 'Design',
      attachment: 'DebitNoteMcKee.jpg',
    },
    // ... other employees
  ];

const Status = () => {
    const [position, setPosition] = useState('end');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;   
  
    const currentEmployees = employees.slice(indexOfFirstItem, indexOfLastItem);
  
    const 
   handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleItemsPerPageChange = (event) => {
      setItemsPerPage(parseInt(event.target.value)); 
  
    };

  return (
    <div className='status'>
        <div className="status-table">
            <div className="status-head">
            <button className="date-btn4">
          <CalendarOutlined/> Select Date
        </button>
            </div>
      <div className="table-header">
        <div className="header-item">
          <p>12</p>
          <p>Leave Employees</p>
        </div>
        <div className="header-item">
          <p>23 hr</p>
          <p>Total Leave Hours</p>
        </div>
        <div className="header-item">
          <p>6</p>
          <p>On Leave</p>
        </div>
        
      </div>
{/* Searchbar */}
      <div className='search-item'>
      <input className='search-bar-status' type="text" placeholder=" Search" />
      </div>

      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Date & Time</th>
            <th>Duration</th>
            <th>Department</th>
            <th>Type</th>
            <th>Attachment</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => (
            <tr key={index}>
              <td>
                 {employee.profile} {employee.name} 
              </td>
              <td>{employee.date}</td>
              <td>{employee.duration}</td>
              <td>{employee.department}</td>
              <td>{employee.type}</td>
              <td>{employee.attachment}</td>
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
  )
}

export default Status;