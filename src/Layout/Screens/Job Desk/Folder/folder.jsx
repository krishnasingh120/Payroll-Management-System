import React, { useState } from 'react'
import './folder.css'
import { FileAddOutlined, LeftOutlined } from '@ant-design/icons';
import Addfolder from './addfolder';

const Folder = () => {
  const [isAddFolderVisible, setAddFolderVisible] = useState(false);
    const folderData = [
        {
          name: 'PAN Card',
          attachments: 'dealsheet_mckee.jpg',
          addedby:'Kunal'
        },
        {
            name: 'Aadhar Card',
            attachments: 'dealsheet_ckee.jpg',
            addedby:'Krishna'
        },
      ];
      const handleAddFolderClick = () => {
        setAddFolderVisible(true); // Show the Addfolder component
    };
  return (
      <div className="folder">
      <div className="folder-summary">
        <div className='folder-head'>
          <h2>Folder</h2>
          <button className='add-btn' onClick={handleAddFolderClick} ><FileAddOutlined />Add New Document</button>
        </div>
        {isAddFolderVisible && <Addfolder />} {/* Conditionally render Addfolder */}
        <div >
          <table className="folder-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Attachments</th>
                <th>Added By</th>
              </tr>
            </thead>
            <tbody>
              {folderData.map((folder, index) => (
                <tr key={index}>
                  <td>{folder.name}</td>
                  <td>{folder.attachments}</td>
                  <td>{folder.addedby}</td> 
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

export default Folder;
