import { PhoneOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import './contact.css'
import { Row, Table } from 'antd';
import Column from 'antd/es/table/Column';

const Contact = () => {
    const [contacts, setContacts] = useState([
        { name: 'Product Manager', phone: '+7 (903) 679-96-15' },
        { name: 'Chief Executive Officer', phone: '+7 (903) 679-96-15' },
        { name: 'Human Resource Manager', phone: '+7 (903) 880-93-38' },
        { name: 'Front End Developer', phone: '+6 (903) 941-02-27' },
      ]);
    
      const handlePhoneChange = (index, newPhone) => {
        const updatedContacts = [...contacts];
        updatedContacts[index].phone = newPhone;
        setContacts(updatedContacts);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        console.log('Updated contacts:', contacts);
      };
    
  return (
    <div className="contact-form">

    <h2>Contacts</h2>

    
      <table className="contact-item">
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contact, index) => (
        <tr key={index}>
          <td ><PhoneOutlined/> {contact.name}</td>
          <td style={{color:'blue'}}><input value={contact.phone}></input></td>
        </tr>
        ))}
        </tbody>
      </table>
  
    <div className="button-group">
      <button type="button">Cancel</button>
      <button type="submit" onClick={handleSubmit}>
        Save
      </button>
    </div>

  </div>
  )
}

export default Contact;
