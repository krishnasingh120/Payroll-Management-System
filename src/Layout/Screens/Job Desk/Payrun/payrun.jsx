import React, { useState } from 'react'
import './payrun.css'
import { WarningOutlined } from '@ant-design/icons';

const Payrun = () => {
    const [payrunPeriod, setPayrunPeriod] = useState('Monthly');
  const [bonus, setBonus] = useState(10);
  const [tax, setTax] = useState(1.5);

  const handlePayrunPeriodChange = (event) => {
    setPayrunPeriod(event.target.value);
  };

  const handleBonusChange = (event) => {
    setBonus(event.target.value);
  };

  const handleTaxChange = (event) => {
    setTax(event.target.value);
  };
  return (
    <div className="payrun-container">
      <h2>Payrun</h2>
      <div className="warning-message">
      <table>
            <tr>
              <td><WarningOutlined className='icon-1' /></td>
              <p>Payrun</p>
              <p>
          1. By default all payrun and beneficiary badges is set from default
          setting.
          <br />
          2. You can individually update or change these values from the edit
          option.
        </p>
        </tr>
          </table>
      </div>

      <div className="payrun-form">
        <div className="form-group">
          <label>Payrun Period:</label>
          <select value={payrunPeriod} onChange={handlePayrunPeriodChange}>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-Weekly">Bi-Weekly</option>
          </select>
        </div>  


        <div className="form-group">
          <label>Bonus (Allowance):</label>
          <input
            type="number"
            value={bonus}
            onChange={handleBonusChange}
            placeholder="Enter bonus percentage"
          />
          <span>%</span>
        </div>

        <div className="form-group">
          <label>Tax (Deduction):</label>
          <input
            type="number"
            value={tax}
            onChange={handleTaxChange}
            placeholder="Enter tax percentage"
          />
          <span>%</span>
        </div>
      </div>
    </div>
  )
}

export default Payrun;
