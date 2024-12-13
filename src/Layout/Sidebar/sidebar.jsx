import React from 'react'
import {
   HomeOutlined,
  ToolOutlined,
  UserOutlined,
  LeftSquareOutlined,
  ClockCircleOutlined,
  FolderOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Routes, Route, useNavigate, Router } from 'react-router-dom';
import Dashboard from '../Screens/Dashboard/dashboard';
import Jobdesk from '../Screens/Job Desk/jobdesk';
import Employee from '../Screens/Employee/employee';
import Leave from '../Screens/Leave/leave';
import Atttendancet from '../Screens/Attendance/atttendancet';
import Administration from '../Screens/Administration/administration';
// import Settings from '../Screens/Settings/settings';




const { Sider,Content } = Layout;
const Sidebar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    switch(item.key) {
      case '1':
        navigate('/dashboard');
        break;
      case '2':
        navigate('/jobdesk');
        break;
      case '3':
        navigate('/employee');
        break;
      case '4':
        navigate('/leave');
        break;
      case '5':
        navigate('/attendance');
        break;
      case '6':
        navigate('/administration');
        break;
      // case '7':
      //   navigate('/settings');
      //   break;
      // Add cases for other menu items if needed
      default:
        break;
    }
  }
  
  return (
    // Sidebar
    <Layout>
      <Sider style={{
        height:650,
        paddingTop:1,
      }}>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['1']}
          onClick={handleMenuClick}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <ToolOutlined />,
              label: 'Job Desk',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: 'Employee',
            },
            {
              key: '4',
              icon: <LeftSquareOutlined />,
              label: 'Leave',
            },
            {
              key: '5',
              icon: <ClockCircleOutlined />,
              label: 'Attendance',
            },
            {
              key: '6',
              icon: <FolderOutlined />,
              label: 'Administration',
            },
            // {
            //   key: '7',
            //   icon: <SettingOutlined />,
            //   label: 'Settings',
            // },
          ]}/>
      </Sider>
      {/* Content */}
      <Content
          style={{
            backgroundColor: '',
            padding: 24,
            minHeight: 280,
          }}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobdesk" element={<Jobdesk />} />
          <Route path="/employee" element={<Employee/>}/>
          <Route path="/leave" element={<Leave/>}/>
          <Route path="/attendance" element={<Atttendancet/>}/>
          <Route path="/administration" element={<Administration/>}/>
          {/* <Route path="/settings" element={<Settings/>}/> */}
        </Routes>
        </Content>
      </Layout>
  );
  <Router>
    <Sidebar />
  </Router>
};



export default Sidebar;
