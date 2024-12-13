import React, { useState } from 'react'
import './announcement.css'
import { LeftOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';


const employees = [
    {
      profile: <Avatar size={20} style={{backgroundColor:'pink'}}>J</Avatar>,
      name: 'Jeremy Neigh',
      startdate: '8/10/2024',
      enddate: '9/10/2024',
      desc: 'Ampineoncdewo....',
      createdby: 'Bessie Cooper',
    },
    {
      profile: <Avatar size={20} style={{backgroundColor:'pink'}}>C</Avatar>,
        name: 'Courtney Henry',
        startdate: '22/10/2024',
        enddate: '24/10/2024',
        desc: 'ijisaisasawdaefeao....',
        createdby: 'Brandon Rogers',
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'pink'}}>M</Avatar>,
        name: 'Mark Osimphson',
        startdate: '28/12/2024',
        enddate: '29/12/2024',
        desc: 'oomomdijoseoo....',
      createdby: 'Leslie Johnson',
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'pink'}}>A</Avatar>,
        name: 'Annette Black',
        startdate: '6/02/2024',
        enddate: '9/02/2024',
        desc: 'fefewfwdesfewfewfo....',
        createdby: 'Lola Jensen',
      },
      {
        profile: <Avatar size={20} style={{backgroundColor:'pink'}}>T</Avatar>,
        name: 'Theresa Webb',
        startdate: '18/11/2024',
        enddate: '19/11/2024',
        desc: 'caefefqedwqo....',
        createdby: 'Eleanor Pepper',
      },
    // ... other employees
  ];
const Announcement = () => {
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
    <div className='announce'>
    <div className="announce-table">
         <div className="announce-head">
             <button className='add-announce-btn'>+ Add Announcement</button>
{/* Searchbar */} 
<div className='search-item'>
<input className='search-bar-announce' type="text" placeholder=" Search" />
             </div>
             </div>
   

   <table>
     <thead>
       <tr>
       <th>Profile</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Description</th>
          <th>Created By</th>
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
           <td>{employee.desc}</td>
           <td>{employee.createdby}</td>
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

export default Announcement;
