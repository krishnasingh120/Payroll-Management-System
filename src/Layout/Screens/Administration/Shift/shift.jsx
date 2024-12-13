import React, { useState } from 'react'
import './shift.css'
import { LeftOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const employees = [
    {
      profile: <Avatar size={20} style={{backgroundColor:'pink'}}>J</Avatar>,
      name: 'Jeremy Neigh',
      startdate: '8/10/2024',
      enddate: '9/10/2024',
      type: 'Weekend',
      startat: '12:00',
      endat: '3:00'
    },
    {
      profile: <Avatar size={20} style={{backgroundColor:'gray'}}>C</Avatar>,
        name: 'Courtney Henry',
        startdate: '22/10/2024',
        enddate: '24/10/2024',
        type: 'Weekend',
        startat: '3:00',
        endat: '7:00'
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'tomato'}}>M</Avatar>,
        name: 'Mark Osimphson',
        startdate: '28/12/2024',
        enddate: '29/12/2024',
        type: 'Third',
        startat: '12:00',
        endat: '5:00'
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'black'}}>A</Avatar>,
        name: 'Annette Black',
        startdate: '6/02/2024',
        enddate: '9/02/2024',
        type: 'First',
        startat: '8:00',
        endat: '2:00'
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'blue'}}>T</Avatar>,
        name: 'Theresa Webb',
        startdate: '18/11/2024',
        enddate: '19/11/2024',
        type: 'Second',
        startat: '1:00',
        endat: '8:00'
      },
    // ... other employees
  ];
const Shift = () => {
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
    <div className='shift'>
    <div className="shift-table">
         <div className="shift-head">
             <button className='add-work-btn'>+ Add Work Shift</button>
{/* Searchbar */} 
<div className='search-item'>
<input className='search-bar-shift' type="text" placeholder=" Search" />
             </div>
             </div>
   

   <table>
     <thead>
       <tr>
       <th>Profile</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Type</th>
          <th>Start at</th>
          <th>End at</th>
          <th>Action</th>
       </tr>
     </thead>
     <tbody>
       {currentEmployees.map((employee, index) => (
         <tr key={index}>
           <td>
             {employee.profile} {employee.name} 
           </td>
           <td>{employee.startdate}</td>
           <td>{employee.enddate}</td>
           <td>{employee.type}</td>
           <td>{employee.startat}</td>
           <td>{employee.endat}</td>
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

export default Shift;
