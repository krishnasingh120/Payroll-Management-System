import React from 'react'
import './history.css'

const History = () => {
    const workHistory = [
        {
          title: 'Product Designer',
          type: 'Full time',
          location: 'Remote',
          years: '2019-2022',
        },
        {
          title: 'Customer Service Manager',
          type: 'Full time',
          location: 'Remote',
          years: '2019-2022',
        },
        {
          title: 'Human Resource Manager',
          type: 'Full time',
          location: 'Remote',
          years: '2019-2022',
        },
        {
          title: 'Chief Executive Officer',
          type: 'Full time',
          location: 'Remote',
          years: '2019-2022',
        },
      ];
      
  return (
    <div className="history-container">
    <h2>History</h2>
    {workHistory.map((history, index) => (
      <div key={index} className="history-item">
        <h3>{history.title}</h3>
        <div className="history-details">
          <p>{history.type}</p>
          <p>{history.location}</p>
          <p>{history.years}</p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default History;
