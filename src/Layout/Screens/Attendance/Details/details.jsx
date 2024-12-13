import React, { useState } from 'react'
import './details.css'
import { LeftOutlined, SearchOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
const employees = [
  {
    profile: <Avatar size={20} style={{backgroundColor:'violet'}}>J</Avatar>,
    name: 'Jeremy Neigh',
    time1: '16.00',
    time2: '15.30',
    time3: '00.00',
    time4: '20.30',
    time5: '21.30',
    time6: '23.30',
    time7: '10.30',
    time8: '6.30',
    time9: '7.30',
    time10: '4.30',
    time11: '14.30',
    time12: '22.30',
  },
  {
    profile: <Avatar size={20} style={{backgroundColor:'pink'}}>A</Avatar>,
    name: 'Annette Black',
    time1: '16.00',
    time2: '15.30',
    time3: '00.00',
    time4: '20.30',
    time5: '21.30',
    time6: '23.30',
    time7: '10.30',
    time8: '6.30',
    time9: '7.30',
    time10: '4.30',
    time11: '14.30',
    time12: '22.30',
  },
  {
    profile: <Avatar size={20} style={{backgroundColor:'yellow'}}>T</Avatar>,
    name: 'Theresa Webb',
    time1: '16.00',
    time2: '15.30',
    time3: '00.00',
    time4: '20.30',
    time5: '21.30',
    time6: '23.30',
    time7: '10.30',
    time8: '6.30',
    time9: '7.30',
    time10: '4.30',
    time11: '14.30',
    time12: '22.30',
  },
]
const Details = () => {
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
    <div className="details-a">
    <div className="details-table">
    <div className="details-header">
        <input className='search-bar-details' type="text" placeholder= " Search"/>
        <Button type="primary" icon={<SearchOutlined />} iconPosition={position}>
            Search
          </Button>
    </div>

    <table>
      <thead>
        <tr>
          <th>Profile</th>
          <th>January</th>
          <th>February</th>
          <th>March</th>
          <th>April</th>
          <th>May</th>
          <th>June</th>
          <th>July</th>
          <th>August</th>
          <th>September</th>
          <th>October</th>
          <th>November</th>
          <th>December</th>
        </tr>
      </thead>
      <tbody>
        {currentEmployees.map((employee, index) => (
          <tr key={index}>
            <td>
              {employee.profile} {employee.name} 
            </td>
            <td>{employee.time1}</td>
            <td>{employee.time2}</td>
            <td>{employee.time3}</td>
            <td>{employee.time4}</td>
            <td>{employee.time5}</td>
            <td>{employee.time6}</td>
            <td>{employee.time7}</td>
            <td>{employee.time8}</td>
            <td>{employee.time9}</td>
            <td>{employee.time10}</td>
            <td>{employee.time11}</td>
            <td>{employee.time12}</td>
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

export default Details;
