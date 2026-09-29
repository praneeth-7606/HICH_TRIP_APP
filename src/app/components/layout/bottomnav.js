import React from 'react';
import { Button } from 'antd';
import { 
  HomeOutlined, 
  HeartOutlined, 
  PlusCircleOutlined, 
  PlayCircleOutlined,
  UserOutlined 
} from '@ant-design/icons';

const BottomNav = ({ activeTab, onTabChange }) => {
  const tabs = [
    { key: 'home', icon: <HomeOutlined />, label: 'Home' },
    { key: 'saved', icon: <HeartOutlined />, label: 'Saved' },
    { key: 'create', icon: <PlusCircleOutlined />, label: 'Create' },
    { key: 'reels', icon: <PlayCircleOutlined />, label: 'Reels' },
    { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
  ];

  return (
    <div 
      className="d-flex justify-content-around align-items-center"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTop: '1px solid #f0f0f0',
        padding: '10px 0',
        zIndex: 1000
      }}
    >
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          type="text"
          icon={tab.icon}
          onClick={() => onTabChange(tab.key)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto',
            padding: '5px',
            color: activeTab === tab.key ? '#FF5722' : '#999',
            fontSize: activeTab === tab.key ? '20px' : '18px'
          }}
        >
          <span style={{ fontSize: '10px', marginTop: '2px' }}>
            {tab.label}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default BottomNav;
