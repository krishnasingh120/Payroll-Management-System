import React, { useState } from 'react'
import './appointment.css'
import { LeftOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Appointment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; 
  const employees = [
    {
      profile: <Avatar style={{backgroundColor:'red'}}>J</Avatar>,
      name: 'Jeremy Neigh',
      id: 'A0B1C028',
      status: 'Part-time',
      department: 'Support',
      shift: '8h-17h',
      joiningDate: '9/23/16',
      role: 'Tax Officer',
    },
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
    <div className="appointment">
    <div className="appointment-table">
      <h2>Designations</h2>
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
                {employee.profile}
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

export default Appointment;
