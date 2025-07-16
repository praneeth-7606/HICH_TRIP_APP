'use client'

import React, { useState } from 'react'
import { Button, Card } from 'antd'
import { ArrowLeftOutlined, BookOutlined, RobotOutlined, LinkOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'

const CreateTripSelectionPage = () => {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState(null)

  const tripOptions = [
    {
      id: 'saves',
      title: 'Build from Your Saves',
      description: 'Add your travel details and pick from your saved list to instantly build a personalized itinerary.',
      icon: <BookOutlined style={{ fontSize: '24px', color: '#FF973D' }} />,
      gradient: 'linear-gradient(135deg, #FF973D 0%, #FFB366 100%)',
      route: '/create-trip/from-saves'
    },
    {
      id: 'ai',
      title: 'Try Hich AI',
      description: 'Turn any YouTube video or Instagram Reel into a custom travel plan—just share the link and let AI do the magic.',
      icon: <RobotOutlined style={{ fontSize: '24px', color: '#FF973D' }} />,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      route: '/create-trip/from-ai'
    }
  ]

  const handleOptionClick = (option) => {
    setSelectedOption(option.id)
    // Add a small delay for visual feedback
    setTimeout(() => {
      router.push(option.route)
    }, 200)
  }

  return (
    <div style={{ 
      backgroundColor: '#FDF2E9', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Status Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '44px',
        background: 'rgba(253, 242, 233, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        fontSize: '17px',
        fontWeight: '600',
        zIndex: 1000
      }}>
        <div style={{ color: '#1a1a1a' }}>13:07</div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          color: '#1a1a1a'
        }}>
          <div>•••</div>
          <div style={{ fontSize: '14px' }}>📶</div>
          <div style={{ fontSize: '14px' }}>📶</div>
          <div style={{ fontSize: '14px' }}>🔋</div>
        </div>
      </div>

      {/* Header */}
      <div style={{
        paddingTop: '60px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '30px'
        }}>
          <Button
            icon={<ArrowLeftOutlined />}
            type="text"
            onClick={() => router.back()}
            style={{
              marginRight: '15px',
              fontSize: '18px',
              color: '#333',
              backgroundColor: 'rgba(255,255,255,0.8)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: 'none'
            }}
          />
          <h3 style={{
            margin: 0,
            fontWeight: '600',
            fontSize: '18px',
            color: '#333'
          }}>
            Create New Trip
          </h3>
        </div>

        {/* Main Content */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '12px',
            lineHeight: '1.3'
          }}>
            How would you like to plan your trip?
          </h1>
        </div>
      </div>

      {/* Options */}
      <div style={{
        flex: 1,
        padding: '0 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {tripOptions.map((option) => (
          <Card
            key={option.id}
            style={{
              borderRadius: '20px',
              border: selectedOption === option.id ? '3px solid #FF973D' : '2px solid #E5E5E5',
              boxShadow: selectedOption === option.id 
                ? '0 8px 30px rgba(255, 151, 61, 0.3)' 
                : '0 4px 15px rgba(0,0,0,0.08)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: selectedOption === option.id ? 'scale(1.02)' : 'scale(1)',
              background: 'white'
            }}
            bodyStyle={{ padding: '24px' }}
            onClick={() => handleOptionClick(option)}
            onMouseEnter={(e) => {
              if (selectedOption !== option.id) {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)'
              }
            }}
            onMouseLeave={(e) => {
              if (selectedOption !== option.id) {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)'
              }
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: option.id === 'saves' ? '#FFF5F0' : '#F0F2FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '4px'
              }}>
                {option.icon}
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>
                  {option.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  lineHeight: '1.5',
                  margin: 0
                }}>
                  {option.description}
                </p>
              </div>

              {option.id === 'ai' && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  color: '#999',
                  fontSize: '20px',
                  marginTop: '8px'
                }}>
                  <LinkOutlined style={{ fontSize: '16px' }} />
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom spacing */}
      <div style={{ height: '40px' }} />

      {/* Loading animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        .loading {
          animation: pulse 0.3s ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default CreateTripSelectionPage