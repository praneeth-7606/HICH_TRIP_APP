'use client'

// src/app/components/bottomnavigation.js

import React from 'react';
import { useRouter } from 'next/navigation';

const BottomNavigation = ({ activeTab, onTabChange, onSearch, onViewSaves }) => {
  const router = useRouter();

  const handleTabClick = (key) => {
    // Optional side effects
    if (key === 'discover') onSearch && onSearch();
    if (key === 'saves') onViewSaves && onViewSaves();

    onTabChange && onTabChange(key); // optional callback

    // Route navigation
    switch (key) {
      case 'home':
        router.push('/');
        break;
      case 'discover':
        router.push('/search');
        break;
      case 'create':
        router.push('/my-trips');
        break;
      case 'saves':
        router.push('/saves');
        break;
      case 'account':
        router.push('/');
        break;
      default:
        break;
    }
  };

  // Custom icon components that match your image
  const HomeIcon = ({ isActive }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#FF6B35' : '#333333'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  );

  const SearchIcon = ({ isActive }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#FF6B35' : '#333333'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <path d="m21 21-4.35-4.35"/>
    </svg>
  );

  const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"/>
      <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
  );

  const BookmarkIcon = ({ isActive }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#FF6B35' : '#333333'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  );

  const UserIcon = ({ isActive }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isActive ? '#FF6B35' : '#333333'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );

  const navItems = [
    {
      key: 'home',
      icon: <HomeIcon isActive={activeTab === 'home'} />,
      label: 'Home',
      isActive: activeTab === 'home'
    },
    {
      key: 'discover',
      icon: <SearchIcon isActive={activeTab === 'discover'} />,
      label: 'Discover',
      isActive: activeTab === 'discover'
    },
    {
      key: 'create',
      icon: <PlusIcon />,
      label: '',
      isActive: activeTab === 'create',
      isCreateButton: true
    },
    {
      key: 'saves',
      icon: <BookmarkIcon isActive={activeTab === 'saves'} />,
      label: 'Saves',
      isActive: activeTab === 'saves'
    },
    {
      key: 'account',
      icon: <UserIcon isActive={activeTab === 'account'} />,
      label: 'Account',
      isActive: activeTab === 'account'
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#ffffff',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      padding: '8px 16px 8px 16px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      zIndex: 1000,
      boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
      minHeight: '70px'
    }}>
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => handleTabClick(item.key)}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: '6px 8px',
            transition: 'all 0.2s ease',
            borderRadius: '12px',
            minWidth: '60px',
            flex: 1,
            maxWidth: '80px'
          }}
        >
          {item.isCreateButton ? (
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#FF6B35',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '24px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(255, 107, 53, 0.3)',
              transform: item.isActive ? 'scale(1.05)' : 'scale(1)',
              transition: 'transform 0.2s ease'
            }}>
              {item.icon}
            </div>
          ) : (
            <div style={{
              fontSize: '24px',
              color: item.isActive ? '#FF6B35' : '#333333',
              marginBottom: '4px',
              transition: 'color 0.2s ease',
              position: 'relative'
            }}>
              {item.icon}
            </div>
          )}
          {!item.isCreateButton && (
            <span style={{
              fontSize: '11px',
              fontWeight: '500',
              color: item.isActive ? '#FF6B35' : '#666666',
              transition: 'color 0.2s ease',
              textAlign: 'center'
            }}>
              {item.label}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;
