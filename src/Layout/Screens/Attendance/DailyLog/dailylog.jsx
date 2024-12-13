import React, { useState } from 'react'
import './dailylog.css'
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';

const employees = [
  {
    profile: <Avatar size={20} style={{backgroundColor:'pink'}}>J</Avatar>,
    name: 'Jeremy Neigh',
    date: '9/23/16',
    duration: '15h 40m',
    department: 'Design',
    attachment: 'DebitNoteMcKee.jpg',
    status: 'Busy',
  },
  {
    profile: <Avatar size={20} style={{backgroundColor:'tomato'}}>A</Avatar>,
    name: 'Annette Black',
    date: '9/23/16',
    duration: '2h 40m',
    department: 'HR',
    attachment: 'CreditNoteMcafe.jpg',
    status: 'Free',
  },
  {
    profile: <Avatar size={20} style={{backgroundColor:'orange'}}>T</Avatar>,
    name: 'Theresa Webb',
    date: '19/2/16',
    duration: '20h 56m',
    department: 'Deployment',
    attachment: 'CreditNoKee.jpg',
    status: 'Busy',
  },
  // ... other employees
];

const Dailylog = () => {
  const [position, setPosition] = useState('');
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
    <div className="dailylog">
    <div className="dailylog-table">
    <div className="dailylog-header">
        <input className='search-bar-dailylog' type="text" placeholder= " Search"/>
        <Button type="primary" icon={<SearchOutlined />} iconPosition={position} style={{marginTop:'9px'}}>
            Search
          </Button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Profile</th>
          <th>Punch In</th>
          <th>Geolocation</th>
          <th>Punched Out</th>
          <th>Behavior</th>
          <th>Total hours</th>
          <th>Action</th>
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
            <td>{employee.attachment}</td>
            <td>{employee.status}</td>
            <td>
              <div className="action-dropdown">
                <button>...</button>
                <ul>
                  <li>Edit</li>
                  <li>Approve</li>
                </ul>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div className="pagination">
    <button className='btn'><LeftOutlined /></button>
      <button className='btn' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
        Prev 
      </button>
      <button className='btn-next' onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem >= employees.length}>
        Next
      </button>
      <span>Page: {currentPage} of {Math.ceil(employees.length / itemsPerPage)}</span>
      <select className='option' value={itemsPerPage} onChange={handleItemsPerPageChange}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>  

      </select>
    </div> 

  </div>
  </div>
);
};


export default Dailylog;
