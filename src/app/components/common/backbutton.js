import React from 'react';
import { LeftOutlined } from '@ant-design/icons';

const BackButton = ({ onClick, style = {} }) => {
  const buttonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '18px',
    color: '#262626',
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...style
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.05)'}
      onMouseLeave={(e) => e.target.style.background = 'none'}
    >
      <LeftOutlined />
    </button>
  );
};

export default BackButton;