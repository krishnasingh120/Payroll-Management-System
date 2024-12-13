import React, { useState } from 'react'
import Allemployee from './All Employee/allemployee';
import Appointment from './Appointment/appointment';
import { Tabs } from 'antd';
import './employee.css'
import { MailOutlined } from '@ant-design/icons';
const Employee = () => {
  const [employees, setEmployees] = useState([
    {
      profile: 'https://example.com/jeremy.jpg',
      name: 'Jeremy Neigh',
      id: 'A0B1C028',
      designation: 'Tax Officer',
      joiningDate: '9/23/16',
    },
    // ... other employees
  ]);
  const [inviteEmployees, setInviteEmployees] = useState([]);

  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [newEmployeeName, setNewEmployeeName] = useState('');
  const [newEmployeeDesignation, setNewEmployeeDesignation] = useState('');
  const [isInviteEmployeeModalOpen,setisInviteEmployeeModalOpen] = useState(false);
  const [newInviteEmployeeName, setnewInviteEmployeeName] = useState('');
  const [newInviteEmployeeEmail, setnewInviteEmployeeEmail] = useState('');

  const handleAddEmployee = () => {
    setIsAddEmployeeModalOpen(true);
  };

  const handleInviteEmployee = () => {
      setisInviteEmployeeModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddEmployeeModalOpen(false);
    setisInviteEmployeeModalOpen(false);
    setNewEmployeeName('');
    setNewEmployeeDesignation('');
    setnewInviteEmployeeName('');
    setnewInviteEmployeeEmail('');
  };

  const handleNameChange = (event) => {
    setNewEmployeeName(event.target.value);
  };

  const handleDesignationChange = (event) => {
    setNewEmployeeDesignation(event.target.value);
  };

  const handleInviteNameChange = (event) => {
    setnewInviteEmployeeName(event.target.value);
  };

  const handleInviteEmailChange = (event) => {
    setnewInviteEmployeeEmail(event.target.value);
  };

  const handleSubmit = () => {
    const newEmployee = {
      profile: 'https://example.com/default-avatar.png', // Replace with a default avatar
      name: newEmployeeName,
      id: `EMP-${Date.now()}`, // Generate a unique ID
      designation: newEmployeeDesignation,
      joiningDate: new Date().toLocaleDateString(),
    };

    setEmployees([...employees, newEmployee]);
    handleCloseModal();

    const newInviteEmployee = {
      profile: 'https://example.com/default-avatar.png', // Replace with a default avatar
      name: newInviteEmployeeName,
      id: `EMP-${Date.now()}`, // Generate a unique ID
      mail: newInviteEmployeeEmail,
      joiningDate: new Date().toLocaleDateString(),
    };

    setInviteEmployees([...inviteEmployees, newInviteEmployee]);
    handleCloseModal();
  };
    const tabsData = [
        {
          label: 'All Employee',
          content: <Allemployee/>,
        },
        {
          label: 'Appointment',
          content:<Appointment/>,
        }
      ];
  return (
    <div>
      <div className='employee-head'>
    <h2 style={{fontSize:'large', marginBottom:'1rem', fontWeight:'bold'}}> Employee </h2> 
    <button className="add-employee-btn" onClick={handleAddEmployee}> + Add Employee </button>

      {isAddEmployeeModalOpen && (
        <div className="add-employee-modal">
          <h2>Add Employee</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={newEmployeeName}
              onChange={handleNameChange}
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              value={newEmployeeDesignation}
              onChange={handleDesignationChange}
              placeholder="Enter designation"
            />
          </div>
          <div className="button-group">
            <button onClick={handleSubmit}>Save</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}

    <button className='invite-btn' onClick={handleInviteEmployee}> <MailOutlined/> Invite</button>

    {isInviteEmployeeModalOpen && (
      <div className="invite-employee-modal">
        <h2>Invite</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={newInviteEmployeeName}
              onChange={handleInviteNameChange}
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              value={newInviteEmployeeEmail}
              onChange={handleInviteEmailChange}
              placeholder="Enter Email"
            />
          </div>
          <div className="button-group">
            <button onClick={handleSubmit}>Save</button>
            <button onClick={handleCloseModal}>Cancel</button>
          </div>
      </div>
    )}
    </div>
           <div className='employee'>
         <Tabs
           defaultActiveKey="0"
           
           style={{ height: 120, backgroundColor:'white',width:'1100px', borderRadius:'3px'}}
           items={tabsData.map((tab, index) => ({
             key: index,
             label: tab.label,
             children: tab.content,
           }))}
         />
       </div>
 </div>
  )
}

export default Employee;
