import React, { useState } from 'react';
import { Avatar, Layout, Space, theme } from 'antd';
import { DingdingOutlined, GlobalOutlined, BellOutlined, SunOutlined, UserOutlined } from '@ant-design/icons';

const { Header } = Layout;
const Headers = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  return (

    <Layout>
      <Header
        theme='light'
        style={{
          height: '60px',
          padding: 0,
          backgroundColor: 'white'
        }}>
        <DingdingOutlined style={{
          marginTop:'4px',
          fontSize: 50,
          color: 'black',
        }} />
        <Space direction="vertical" size={16}>
    <Space wrap size={15}></Space>
    <Avatar style={{marginLeft:'78rem',marginBottom:'27px'}} size={30} icon={<UserOutlined />} />
    </Space>
      </Header>
    </Layout>
  );
};
export default Headers;
