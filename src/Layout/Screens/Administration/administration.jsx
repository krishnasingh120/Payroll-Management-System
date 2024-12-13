import { Tabs } from 'antd'
import React from 'react'
import Role from './Role/role'
import Shift from './Shift/shift'
import Department from './Department/department'
import Holiday from './Holiday/holiday'
import Announcement from './Announcement/announcement'

const Administration = () => {
    const tabsData = [
        {
          label: 'Role',
          content: <Role/>,
        },
        {
          label: 'Shift',
          content: <Shift/>,
        },
        {
          label: 'Department',
          content: <Department/>,
        },
        {
          label: 'Holiday',
          content: <Holiday/>,
        },
        {
            label: 'Announcement',
            content: <Announcement/>,
        }
    ]
  return (
    <div>
      <h2 style={{fontSize:'large', marginBottom:'1rem', fontWeight:'bold'}}>Administration</h2> 
              <div className='administration'>
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

export default Administration;
