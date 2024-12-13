import React, { useState } from 'react'
import './summaryatt.css'
import { CalendarOutlined, LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { Chart } from 'react-google-charts';
import { Avatar } from 'antd';
const employees = [
  {
    profile: <Avatar style={{backgroundColor:'pink'}}>J</Avatar>,
    name: 'Jeremy Neigh',
    date: '9/23/16',
    department: 'Design',
    attachment: 'DebitNoteMcKee.jpg',
    status: 'Busy',
  },
]
const Summaryatt = () => {
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
  const data = [
    ["Task", "Hours per Day"],
    ["Regular Days", 9],
    ["Early Days", 2],
    ["Late Days", 2],
  ];

  return (
    <div className='summaryatt'>
    <div className="summaryatt-table">
         <div className="summaryatt-head">
         <button className="date-btn7">
       <CalendarOutlined/> Select Date
     </button>
         </div>
         
   <div className="table-header1">
   <Chart
      chartType="PieChart"
      data={data}
      width={"500px"}
      height={"100px"}
    />
     <div className="header-item">
       <p>12 hrs</p>
       <p>Total Scheduled Hour</p>
       </div>
       <div className="header-item">
       <p>23 hrs</p>
       <p>Leave hour</p>
       </div>
   </div>
   <div className="table-header2">
     <div className="header-item">
       <p>890 hrs</p>
       <p>Total Work Hour</p>
     </div>
     <div className="header-item">
       <p>312 days</p>
       <p>Total Active</p>
     </div>
   </div>
{/* Searchbar */}
   <div className='search-item'>
   <input className='search-bar-summaryatt' type="text" placeholder=" Search" />
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

export default Summaryatt;
