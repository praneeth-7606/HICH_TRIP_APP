import React from 'react';

const HichButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'large',
  disabled = false,
  style = {},
  ...props 
}) => {
  const baseStyles = {
    border: 'none',
    borderRadius: '25px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    opacity: disabled ? 0.6 : 1,
    ...style
  };

  const variants = {
    primary: {
      background: '#FA8C16',
      color: 'white',
      boxShadow: '0 4px 16px rgba(250, 140, 22, 0.3)',
      height: size === 'large' ? '50px' : '40px',
      padding: size === 'large' ? '0 32px' : '0 24px',
      minWidth: size === 'large' ? '200px' : '150px'
    },
    secondary: {
      background: 'white',
      color: '#FA8C16',
      border: '2px solid #FA8C16',
      height: size === 'large' ? '50px' : '40px',
      padding: size === 'large' ? '0 32px' : '0 24px',
      minWidth: size === 'large' ? '200px' : '150px'
    }
  };

  const handleClick = (e) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  const handleMouseEnter = (e) => {
    if (!disabled && variant === 'primary') {
      e.target.style.background = '#d46b08';
      e.target.style.transform = 'translateY(-2px)';
      e.target.style.boxShadow = '0 8px 24px rgba(250, 140, 22, 0.4)';
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled && variant === 'primary') {
      e.target.style.background = '#FA8C16';
      e.target.style.transform = 'translateY(0)';
      e.target.style.boxShadow = '0 4px 16px rgba(250, 140, 22, 0.3)';
    }
  };

  return (
    <button
      style={{ ...baseStyles, ...variants[variant] }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default HichButton;