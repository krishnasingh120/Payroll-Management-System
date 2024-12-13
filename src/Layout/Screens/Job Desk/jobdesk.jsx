
import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
import Allowance from './Allowance/allowance';
import Attendance from './Attendance/attendance';
import EmployeeDetail from './Employee Detail/EmployeeDetail';
import './jobdesk.css';
import Leavetab from './Leavetab/leavetab';
import Folder from './Folder/folder';
import Assets from './Assets/assets';
import History from './History/history';
import Salary from './Salary/salary';
import Payrun from './Payrun/payrun';
import Slip from './Slip/slip';
import Address from './Address/address';
import Contact from './Contact/contact';
import Social from './Social/social';

const Jobdesk = () => {
    const tabsData = [
            {
              label: 'Allowance',
              content: <Allowance/>,
            },
            {
              label: 'Attendance',
              content: <Attendance/>,
            },
            {
              label: 'Leave',
              content: <Leavetab/>,
            },
            {
              label: 'Folder',
              content: <Folder/>,
            },
            {
                label: 'Assets',
                content: <Assets/>,
              },
              {
                label: 'History',
                content: <History/>,
              },
              {
                label: 'Salary',
                content: <Salary/>,
              },
              {
                label: 'Pay run',
                content: <Payrun/>,
              },
              {
                label: 'Slip',
                content: <Slip/>,
              },
              {
                label: 'Address',
                content: <Address/>,
              },
              {
                label: 'Contact',
                content: <Contact/>,
              },
              {
                label: 'Social',
                content: <Social/>,
              },
          ];
          return (
            <div>
              <h2 style={{fontSize:'large', marginBottom:'1rem', fontWeight:'bold'}}>Job Desk</h2> 
              <div className='jobdesk'>
              <EmployeeDetail/>
            <Tabs
              defaultActiveKey="0"
              
              style={{ height: 120, backgroundColor:'white',width:'48rem', borderRadius:'3px'}}
              items={tabsData.map((tab, index) => ({
                key: index,
                label: tab.label,
                children: tab.content,
              }))}
            />
          </div>
          </div>
        );
    }
    

export default Jobdesk;
