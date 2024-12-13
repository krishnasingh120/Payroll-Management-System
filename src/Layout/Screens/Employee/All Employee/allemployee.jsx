import React, { useState } from 'react'
import './allemployee.css'
import { LeftOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Allemployee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
  const employees = [
    {
      profile:<Avatar size={20}>J</Avatar>,
      name: 'Jeremy Neigh',
      id: 'A0B1C028',
      status: 'Part-time',
      department: 'Support',
      shift: '8h-17h',
      joiningDate: '9/23/16',
      role: 'Tax Officer',
    },
    {
      profile:<Avatar size={20}>A</Avatar>,
      name: 'Anete Black',
      id: 'A0B1C892',
      status: 'On-Contract',
      department: 'QA',
      shift: '8h-13h',
      joiningDate: '9/13/17',
      role: 'Branch Manager',
    },
    {
      profile:<Avatar size={20}>L</Avatar>,
      name: 'Lucas Black',
      id: 'A0C1H022',
      status: 'Seasonal',
      department: 'People Ops',
      shift: '17h-22h',
      joiningDate: '9/24/24',
      role: 'Regional Manager',
    },
    {
      profile:<Avatar size={20}>M</Avatar>,
      name: 'Merry Meriadoc',
      id: 'N0B1C223',
      status: 'Part-time',
      department: 'IT',
      shift: '8h-17h',
      joiningDate: '10/24/16',
      role: 'Trust Administrator',
    },
    {
      profile:<Avatar size={20}>E</Avatar>,
      name: 'Elijah Mikaelson',
      id: 'P0B1C116',
      status: 'Full-time',
      department: 'Product',
      shift: '8h-12h',
      joiningDate: '1/13/17',
      role: 'Vice President',
    }

    // ... other employees
  ];
  

  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value)); 
  };
  
  
  return (
    <div className="allemployee">
       <div className="announcement">
      <h2>Announcements</h2>
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>ID</th>
            <th>Status</th>
            <th>Department</th>
            <th>Shift</th>
            <th>Joining Date</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((employee, index) => (
            <tr key={index}>
              <td>
                {employee.profile} {employee.name} 
              </td>
              <td>{employee.id}</td>
              <td className={`status-${employee.status.toLowerCase()}`}>{employee.status}</td>
              <td>{employee.department}</td>
              <td>{employee.shift}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
      <button className='btn'><LeftOutlined /></button>
        <button className='btn' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Prev
        </button>
        <button className='btn-next' onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastItem 
 >= employees.length}>
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

export default Allemployee;
