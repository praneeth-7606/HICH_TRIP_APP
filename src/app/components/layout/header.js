import React from 'react';
import { Input, Avatar, Button } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';

const Header = ({ onMenuClick }) => {
  return (
    <div className="d-flex align-items-center justify-content-between p-3" 
         style={{ backgroundColor: '#FDF2E9' }}>
      <Button 
        icon={<MenuOutlined />} 
        type="text" 
        onClick={onMenuClick}
        style={{ fontSize: '18px' }}
      />
      
      <div style={{ flex: 1, margin: '0 15px' }}>
        <Input
          placeholder="Search destinations, creators..."
          prefix={<SearchOutlined style={{ color: '#999' }} />}
          style={{
            borderRadius: '25px',
            border: '2px solid #FF8A65',
            backgroundColor: 'white',
            height: '40px'
          }}
        />
      </div>
      
      <Avatar 
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
        size={35}
      />
    </div>
  );
};

export default Header;