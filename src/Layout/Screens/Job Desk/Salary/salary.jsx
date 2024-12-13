import React from 'react'
import './salary.css'

const Salary = () => {
    const salaries = [
        {
          amount: '$8,865.00',
          to: 'Sebastian Vettel',
          date: '6/19/14',
          paymentCode: 'B-8640',
        },
        {
          amount: '$3,173.00',
          to: 'Kristin Watson',
          date: '26/1/24',
          paymentCode: 'A-1230',
        },
        {
          amount: '$3,542.00',
          to: 'Darlene Robertson',
          date: '16/9/24',
          paymentCode: 'C-1880',
        },
        {
          amount: '$4,665.00',
          to: 'Leslie Johnson',
          date: '6/10/24',
          paymentCode: 'B-7540',
        },
      ];
  return (
    <div className="salary-container">
      <h2>Salary</h2>
      {salaries.map((salary, index) => (
        <div key={index} className="salary-item">
          <p>Amount: <span className='amount'>{salary.amount}</span></p>
          <p>To: {salary.to}</p>
          <div className="salary-details">
            <p>Date: {salary.date}</p>
            <p>Payment Code: {salary.paymentCode}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Salary;
