import { FileAddOutlined, LeftOutlined } from '@ant-design/icons';
import React from 'react'
import './assets.css'


const Assets = () => {
  const assetsData = [
    {
      name: 'Cameron Diaz',
      code: 'D-10',
      serialno: '0204011313',
      working: 'No',
      type: 'DOC',
      date: '4/11/12'
    },
    {
      name: 'Tom Cruise',
      code: 'R-11',
      serialno: '2124011212',
      working: 'No',
      type: 'TXT',
      date: '8/1/12'
    },
    {
      name: 'George Clooney',
      code: 'N-30',
      serialno: '02040114141',
      working: 'Yes',
      type: 'RAR',
      date: '16/10/12'
    },
    {
      name: 'Brad Pitt',
      code: 'M-10',
      serialno: '02040111119',
      working: 'No',
      type: 'PDF',
      date: '4/7/12'
    },

  ];
  return (
    <div className="assets">
      <div className="assets-summary">
        <div className='assets-head'>
          <h2>Assets</h2>
        </div>

        <div >
          <table className="assets-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Code</th>
                <th>Serial No</th>
                <th>Working</th>
                <th>Type</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {assetsData.map((assets, index) => (
                <tr key={index}>
                  <td>{assets.name}</td>
                  <td>{assets.code}</td>
                  <td>{assets.serialno}</td>
                  <td>{assets.working}</td>
                  <td>{assets.type}</td>
                  <td>{assets.date}</td>
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
    </div>
  )
}

export default Assets
