import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';

const Header = ({ title, onBack }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '16px 20px',
      background: '#fff',
      borderBottom: '1px solid #f0f0f0',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <button
        onClick={onBack}
        style={{
          background: 'none',
          border: 'none',
          fontSize: '18px',
          color: '#333',
          cursor: 'pointer',
          marginRight: '16px',
          padding: '8px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <ArrowLeftOutlined />
      </button>
      
      <h2 style={{
        margin: 0,
        fontSize: '22px',
        fontWeight: '600',
        color: '#333'
      }}>
        {title}
      </h2>
    </div>
  );
};

export default Header;