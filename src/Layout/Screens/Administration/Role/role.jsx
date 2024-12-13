import { LeftOutlined, UserAddOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import './role.css'
import { Avatar } from 'antd';

const employees = [
    {
      profile: <Avatar size={20} style={{backgroundColor:'pink'}}>J</Avatar>,
      name: 'Jeremy Neigh',
      permission: 'Calendar Book Only',
      users: 'yumihanada',
      manageusers: 'Finance',
    },
    {
      profile: <Avatar size={20} style={{backgroundColor:'blue'}}>A</Avatar>,
      name: 'Annette Black ',
      permission: 'Calendar Provider',
      users: 'momo05',
      manageusers: 'Finance',
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'red'}}>T</Avatar>,
      name: 'Theresa Webb',
      permission: 'Referral Delegate',
      users: 'kumomom',
      manageusers: 'Finance',
      },
    // ... other employees
  ];
const Role = () => {
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
    <div className='role'>
    <div className="role-table">
         <div className="role-head">
            <button className='add-user-btn'>+ Add User</button>
             <button className='invite-user-btn'><UserAddOutlined />Invite User</button>
         <select className='option1'>
         <option value="Mark Osimpson">Mark Osimpson</option>
         <option value="Jeremy Neigh">Jeremy Neigh</option>
         <option value="Annette Black">Annette Black</option>
       </select>
         </div>
{/* Searchbar */}
   <div className='search-item'>
   <input className='search-bar-role' type="text" placeholder=" Search" />
   </div>

   <table>
     <thead>
       <tr>
         <th>Role Name</th>
         <th>Permissions</th>
         <th>Users</th>
         <th>Manage Users</th>
       </tr>
     </thead>
     <tbody>
       {currentEmployees.map((employee, index) => (
         <tr key={index}>
           <td>
            {employee.profile} {employee.name}
           </td>
           <td>{employee.permission}</td>
           <td>{employee.users}</td>
           <td>{employee.manageusers}</td>
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

export default Role;
