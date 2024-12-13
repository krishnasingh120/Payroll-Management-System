import React, { useState } from 'react'
import './address.css'

const Address = () => {
        const [permanentAddress, setPermanentAddress] = useState('');
        const [currentAddress, setCurrentAddress] = useState('');
      
        const handlePermanentAddressChange = (event) => {
          setPermanentAddress(event.target.value);
        };
      
        const handleCurrentAddressChange = (event) => {
          setCurrentAddress(event.target.value);
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
          // Handle form submission logic here (e.g., send data to server)
          console.log('Permanent Address:', permanentAddress);
          console.log('Current Address:', currentAddress);
        };
  return (
    <div className="address-form">
    <h2>Address</h2>

    <div className="form-group">
      <label>Permanent Address</label>
      <input
        className='permanent-address'
        type="text"
        placeholder="Enter your permanent address"
        value={permanentAddress}
        onChange={handlePermanentAddressChange}
      />
    </div>

    <div className="form-group">
      <label>Current Address</label>
      <input
      className='current-address'
        type="text"
        placeholder="Enter your current address"
        value={currentAddress}
        onChange={handleCurrentAddressChange}
      />
    </div>

    <div className="button-group">
      <button type="button">Cancel</button>
      <button type="submit" onClick={handleSubmit}>
        Save
      </button>
    </div>
  </div>
  )
}

export default Address;
