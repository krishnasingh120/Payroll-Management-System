import React, { useState } from 'react'
import './department.css'
import { LeftOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const employees = [
    {
      profile: <Avatar size={20} style={{backgroundColor:'pink'}}>J</Avatar>,
      name: 'Jeremy Neigh',
      manager: 'Alexander',
      desc: 'Design',
      status: 'Active',
      parentdept: 'Maintenence',
      location: 'Germany',
      created: '15/08/24'
    },
    {
      profile: <Avatar size={20} style={{backgroundColor:'pink'}}>C</Avatar>,
        name: 'Courtney Henry',
        manager: 'Ching Li',
      desc: 'Support',
      status: 'Active',
      parentdept: 'Housekeeping',
      location: 'China',
      created: '28/07/24'
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'pink'}}>M</Avatar>,
        name: 'Mark Osimphson',
        manager: 'Alexander',
      desc: 'HR',
      status: 'Inactive',
      parentdept: 'Management',
      location: 'Netherlands',
      created: '02/03/24'
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'pink'}}>A</Avatar>,
        name: 'Annette Black',
        manager: 'Satinder Singh',
        desc: 'Marketing',
        status: 'Active',
        parentdept: 'Finance',
        location: 'India',
        created: '22/10/24'
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'pink'}}>T</Avatar>,
        name: 'Theresa Webb',
        manager: 'Nigrel Nibrescht',
      desc: 'Product',
      status: 'Active',
      parentdept: 'IT',
      location: 'Spain',
      created: '25/09/24'
      },
    // ... other employees
  ];
const Department = () => {
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
    
    <div className='dept'>
    <div className="dept-table">
         <div className="dept-head">
             <button className='add-dept-btn'>+ Add Department</button>
{/* Searchbar */} 
<div className='search-item'>
<input className='search-bar-dept' type="text" placeholder=" Search" />
             </div>
             </div>
   

   <table>
     <thead>
       <tr>
       <th>Profile</th>
          <th>Manager</th>
          <th>Description</th>
          <th>Status</th>
          <th>Parent Department</th>
          <th>Location</th>
          <th>Created</th>
          <th>Action</th>
       </tr>
     </thead>
     <tbody>
       {currentEmployees.map((employee, index) => (
         <tr key={index}>
           <td>
             {employee.profile} {employee.name} 
           </td>
           <td>{employee.manager}</td>
           <td>{employee.desc}</td>
           <td>{employee.status}</td>
           <td>{employee.parentdept}</td>
           <td>{employee.location}</td>
           <td>{employee.created}</td>
           <td> <div className="action-dropdown">
                <button>...</button>
                <ul>
                  <li>Edit</li>
                  <li>Approve</li>
                </ul>
              </div></td>
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

export default Department;
