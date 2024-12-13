import { LogoutOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import React from 'react'
import './leave.css'
import Status from './Status/status';
import Request from './Request/request';
import Calendar from './Calendar/calendar';
import Summary from './Summary/summary';


const Leave = () => {
    const tabsData = [
        {
          label: 'Status',
          content: <Status/>,
        },
        {
          label: 'Request',
          content:<Request/>,
        },
        {
            label: 'Calendar',
            content:<Calendar/>,
        },
        {
            label: 'Summary',
            content:<Summary/>,
        }
      ];
  return (
    <div>
    <div className='leave-head'>
    <h2 style={{fontSize:'large', marginBottom:'1rem', fontWeight:'bold'}}>Leave </h2> 
    <button className='leave-btn'> <LogoutOutlined className='icon-leave' />Assign Leave</button>
    </div>
    <div className='leave'>
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

export default Leave;
