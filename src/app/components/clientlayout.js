'use client'

import React, { useState } from 'react'
import { ConfigProvider } from 'antd'
// import BottomNavigation from './BottomNavigation'/
import BottomNavigation from './bottomnavigation'
import 'antd/dist/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const theme = {
  token: {
    colorPrimary: '#FF5722',
    colorBgContainer: '#FFFFFF',
    borderRadius: 15,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Button: {
      borderRadius: 20,
      fontWeight: 500,
    },
    Card: {
      borderRadius: 15,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    Input: {
      borderRadius: 25,
      fontSize: 14,
    },
  },
}

export default function ClientLayout({ children }) {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <ConfigProvider theme={theme}>
      <div style={{ 
        backgroundColor: '#FDF2E9', 
        minHeight: '100vh',
        paddingBottom: '70px' // Space for bottom navigation
      }}>
        {children}
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </ConfigProvider>
  )
}
