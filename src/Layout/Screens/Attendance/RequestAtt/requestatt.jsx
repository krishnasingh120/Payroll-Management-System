import React, { useState } from 'react'
import './requestatt.css'
import { Avatar, Button } from 'antd';
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';


const employees = [
  {
    profile: <Avatar size={20} style={{backgroundColor:'olive'}}>J</Avatar>,
    name: 'Jeremy Neigh',
    date: '9/23/16',
    department: 'Design',
    attachment: 'DebitNoteMcKee.jpg',
    status: 'Busy',
  },
  {
    profile: <Avatar size={20} style={{backgroundColor:'light gray'}}>A</Avatar>,
    name: 'Ana Armas',
    date: '9/23/16',
    department: 'Design',
    attachment: 'DebitNoteMcKee.jpg',
    status: 'Busy',
  },
  {
    profile: <Avatar size={20} style={{backgroundColor:'pink'}}>L</Avatar>,
    name: 'Lucas Black',
    date: '9/23/16',
    department: 'Design',
    attachment: 'DebitNoteMcKee.jpg',
    status: 'Busy',
  },
  // ... other employees
];
const Requestatt = () => {
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
    <div className="requestatt">
    <div className="requestatt-table">
    <div className="requestatt-header">
        <input className='search-bar-requestatt' type="text" placeholder= " Search"/>
        <Button type="primary" icon={<SearchOutlined />} iconPosition={position} style={{marginTop:'9px'}}>
            Search
          </Button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Profile</th>
          <th>Punch In</th>
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
            <td>{employee.department}</td>
            <td>{employee.attachment}</td>
            <td>{employee.status}</td>
            <td>
              <div className="action-dropdown">
                <button>...</button>
                <ul>
                  <li>Change Log</li>
                  <li>Approve</li>
                  <li>Reject</li>
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
  )
}

export default Requestatt;
