import { Tabs } from 'antd';
import React from 'react'
import './attendancet.css'
import Dailylog from './DailyLog/dailylog';
import Requestatt from './RequestAtt/requestatt';
import Details from './Details/details';
import Summaryatt from './SummaryAtt/summaryatt';
const Atttendancet = () => {
    const tabsData = [
        {
          label: 'Daily Log',
          content: <Dailylog/>,
        },
        {
          label: 'Request',
          content: <Requestatt/>,
        },
        {
          label: 'Details',
          content: <Details/>,
        },
        {
          label: 'Summary',
          content: <Summaryatt/>,
        }
    ]
  return (
    <div>
              <h2 style={{fontSize:'large', marginBottom:'1rem', fontWeight:'bold'}}>Attendance</h2> 
              <div className='attendancet'>
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

export default Atttendancet;
