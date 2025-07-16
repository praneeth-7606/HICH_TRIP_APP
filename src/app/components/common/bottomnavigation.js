import React from 'react';
import { PlusOutlined } from '@ant-design/icons';

const BottomNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { key: 'tabs', label: 'Tabs', icon: '📋' },
    { key: 'search', label: 'Search', icon: '🔍' },
    { key: 'add', label: '', icon: '+', special: true },
    { key: 'saves', label: 'Saves', icon: '📁' },
    { key: 'account', label: 'Account', icon: '👤' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#fff',
      borderTop: '1px solid #f0f0f0',
      padding: '8px 0',
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            style={{
              background: tab.special 
                ? 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)'
                : 'none',
              border: 'none',
              borderRadius: tab.special ? '50%' : '8px',
              width: tab.special ? '48px' : 'auto',
              height: tab.special ? '48px' : 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: tab.special ? '0' : '8px',
              cursor: 'pointer',
              color: tab.special 
                ? '#fff' 
                : activeTab === tab.key 
                  ? '#FF5722' 
                  : '#666',
              fontSize: tab.special ? '20px' : '18px',
              fontWeight: tab.special ? '600' : '400',
              boxShadow: tab.special ? '0 4px 12px rgba(255, 87, 34, 0.3)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.special ? (
              <PlusOutlined />
            ) : (
              <>
                <div style={{ fontSize: '18px', marginBottom: '2px' }}>
                  {tab.icon}
                </div>
                <span style={{ fontSize: '10px', fontWeight: '500' }}>
                  {tab.label}
                </span>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNavigation;