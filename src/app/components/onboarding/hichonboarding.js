import React, { useState, useEffect } from 'react';
import { 
  Card, 
  Button, 
  Modal, 
  Input, 
  Rate, 
  Tag, 
  Dropdown, 
  Space,
  Typography,
  Image,
  message,
  Progress
} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  HeartOutlined,
  ShareAltOutlined,
  LeftOutlined,
  UserAddOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
  MoreOutlined,
  SwapOutlined,
  CloseOutlined,
  CopyOutlined,
  ReloadOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

// Updated theme to match HICH branding
const theme = {
  token: {
    colorPrimary: '#FA8C16', // HICH orange color
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
    Progress: {
      strokeColor: '#FA8C16',
    },
    Modal: {
      borderRadius: 15,
    },
  },
};

// Onboarding Flow Component
const HichOnboardingFlow = ({ onComplete }) => {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [selectedPreferences, setSelectedPreferences] = useState({
    travelVibe: [],
    travelWith: [],
    discover: [],
    purpose: []
  });

  // Auto-navigate from splash screen after 6 seconds
  useEffect(() => {
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('welcome');
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleNext = () => {
    const screens = [
      'splash', 'welcome', 'reels-to-reality', 'share-trips', 
      'live-it', 'travel-vibe', 'travel-with', 'discover', 'purpose'
    ];
    const currentIndex = screens.indexOf(currentScreen);
    if (currentIndex < screens.length - 1) {
      setCurrentScreen(screens[currentIndex + 1]);
    } else {
      // Complete onboarding
      onComplete && onComplete(selectedPreferences);
    }
  };

  const handleBack = () => {
    const screens = [
      'splash', 'welcome', 'reels-to-reality', 'share-trips', 
      'live-it', 'travel-vibe', 'travel-with', 'discover', 'purpose'
    ];
    const currentIndex = screens.indexOf(currentScreen);
    if (currentIndex > 1) { // Don't go back to splash
      setCurrentScreen(screens[currentIndex - 1]);
    }
  };

  const handleSelection = (category, value) => {
    setSelectedPreferences(prev => ({
      ...prev,
      [category]: prev[category].includes(value) 
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const getProgress = () => {
    const screens = [
      'splash', 'welcome', 'reels-to-reality', 'share-trips', 
      'live-it', 'travel-vibe', 'travel-with', 'discover', 'purpose'
    ];
    const currentIndex = screens.indexOf(currentScreen);
    return ((currentIndex) / (screens.length - 1)) * 100;
  };

  const commonStyles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative'
    },
    header: {
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    backButton: {
      background: 'none',
      border: 'none',
      fontSize: '18px',
      color: '#262626',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '50%',
      transition: 'all 0.3s ease'
    },
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center'
    },
    title: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#262626',
      marginBottom: '12px',
      lineHeight: '1.3'
    },
    subtitle: {
      fontSize: '16px',
      color: '#595959',
      marginBottom: '32px',
      lineHeight: '1.5'
    },
    button: {
      background: '#FA8C16',
      border: 'none',
      borderRadius: '25px',
      height: '50px',
      padding: '0 32px',
      fontSize: '16px',
      fontWeight: '600',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 16px rgba(250, 140, 22, 0.3)',
      minWidth: '200px'
    },
    logo: {
      fontSize: '48px',
      fontWeight: '900',
      color: '#FA8C16',
      marginBottom: '20px',
      letterSpacing: '2px'
    }
  };

  // Splash Screen
  if (currentScreen === 'splash') {
    return (
      <div style={commonStyles.container}>
        <div style={commonStyles.content}>
          <div style={commonStyles.logo}>HICH</div>
          <p style={commonStyles.subtitle}>
            Travel Like Your Favourite Creators. Book the viral trips you love on Instagram.
          </p>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #FA8C16',
            borderTop: '3px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginTop: '20px'
          }}></div>
        </div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Welcome Screen
  if (currentScreen === 'welcome') {
    return (
      <div style={commonStyles.container}>
        <div style={commonStyles.content}>
          <div style={commonStyles.logo}>HICH</div>
          <p style={commonStyles.subtitle}>
            Travel Like Your Favourite Creators. Book the viral trips you love on Instagram.
          </p>
          <button 
            style={commonStyles.button}
            onClick={handleNext}
            onMouseEnter={(e) => {
              e.target.style.background = '#d46b08';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#FA8C16';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  // From Reels to Reality
  if (currentScreen === 'reels-to-reality') {
    return (
      <div style={commonStyles.container}>
        <div style={commonStyles.header}>
          <Progress 
            percent={getProgress()} 
            showInfo={false} 
            strokeColor="#FA8C16"
            style={{ width: '100%' }}
          />
        </div>
        <div style={commonStyles.content}>
          <h2 style={commonStyles.title}>From Reels to Reality</h2>
          <p style={commonStyles.subtitle}>
            Watch, swipe, and book the same journeys in one tap.
          </p>
          
          <div style={{ 
            position: 'relative', 
            marginBottom: '40px',
            width: '200px',
            height: '350px'
          }}>
            <div style={{
              width: '200px',
              height: '350px',
              background: '#000',
              borderRadius: '25px',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=350&fit=crop"
                alt="Travel destination"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <div style={{
              position: 'absolute',
              right: '-60px',
              top: '80px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div style={{
                background: '#FA8C16',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                🏨 Stays
              </div>
              <div style={{
                background: '#FA8C16',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                🍽️ Food
              </div>
              <div style={{
                background: '#FA8C16',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                🎯 Activities
              </div>
            </div>
          </div>
          
          <button style={commonStyles.button} onClick={handleNext}>
            Get Started
          </button>
        </div>
      </div>
    );
  }

  // Share Trips Screen
  if (currentScreen === 'share-trips') {
    return (
      <div style={commonStyles.container}>
        <div style={commonStyles.header}>
          <Progress 
            percent={getProgress()} 
            showInfo={false} 
            strokeColor="#FA8C16"
            style={{ width: '100%' }}
          />
        </div>
        <div style={commonStyles.content}>
          <h2 style={commonStyles.title}>Share trips, Not Just reels</h2>
          <p style={commonStyles.subtitle}>
            Send ready-to-book itineraries and plan epic adventures with friends.
          </p>
          
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <div style={{
                background: '#FA8C16',
                color: 'white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '600',
                marginRight: '10px'
              }}>
                You
              </div>
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'url("https://images.unsplash.com/photo-1494790108755-2616b612b131?w=35&h=35&fit=crop&crop=face")',
                backgroundSize: 'cover',
                marginRight: '10px'
              }}></div>
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=35&h=35&fit=crop&crop=face")',
                backgroundSize: 'cover',
                marginRight: '10px'
              }}></div>
              <div style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                background: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=35&h=35&fit=crop&crop=face")',
                backgroundSize: 'cover'
              }}></div>
            </div>
            
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=60&h=60&fit=crop"
                alt="Trip"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '10px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ flex: 1, textAlign: 'left' }}>
                <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Weekend Plan</h4>
                <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>3 members</p>
              </div>
              <div style={{ fontSize: '18px', color: '#ccc' }}>›</div>
            </div>
            
            <div style={{
              width: '120px',
              height: '200px',
              background: '#000',
              borderRadius: '20px',
              margin: '0 auto',
              overflow: 'hidden'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&h=200&fit=crop"
                alt="Phone mockup"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          
          <button style={commonStyles.button} onClick={handleNext}>
            Get Started
          </button>
        </div>
      </div>
    );
  }

  // Live It Screen
  if (currentScreen === 'live-it') {
    return (
      <div style={commonStyles.container}>
        <div style={commonStyles.header}>
          <Progress 
            percent={getProgress()} 
            showInfo={false} 
            strokeColor="#FA8C16"
            style={{ width: '100%' }}
          />
        </div>
        <div style={commonStyles.content}>
          <h2 style={commonStyles.title}>Don't Just Wish It-Live It</h2>
          <p style={commonStyles.subtitle}>
            Your dream trips, unlocked. Let's go!
          </p>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
            marginBottom: '40px',
            width: '100%',
            maxWidth: '300px'
          }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '120px'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=120&fit=crop"
                alt="Travel 1"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '120px'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=150&h=120&fit=crop"
                alt="Travel 2"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '120px'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=150&h=120&fit=crop"
                alt="Travel 3"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              height: '120px'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=150&h=120&fit=crop"
                alt="Travel 4"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          
          <button style={commonStyles.button} onClick={handleNext}>
            Get Started
          </button>
        </div>
      </div>
    );
  }

  // Travel Vibe Selection
  if (currentScreen === 'travel-vibe') {
    const options = [
      { id: 'beach', label: 'I am a Beach person', icon: '🏖️' },
      { id: 'mountains', label: 'I love Mountains', icon: '⛰️' },
      { id: 'offbeat', label: 'Something offbeats', icon: '🧭' },
      { id: 'spiritual', label: 'Spiritual Travel', icon: '🏛️' },
      { id: 'surprise', label: 'Surprise Me', icon: '✨' }
    ];

    return (
      <div style={commonStyles.container}>
        <div style={commonStyles.header}>
          <button 
            style={commonStyles.backButton} 
            onClick={handleBack}
            onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.05)'}
            onMouseLeave={(e) => e.target.style.background = 'none'}
          >
            <LeftOutlined />
          </button>
          <Progress 
            percent={getProgress()} 
            showInfo={false} 
            strokeColor="#FA8C16"
            style={{ width: '80%' }}
          />
        </div>
        <div style={commonStyles.content}>
          <h2 style={commonStyles.title}>Let's Personalize ahead for you</h2>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
            What's your travel vibe?
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>
            (Select one or multiple)
          </p>
          
          <div style={{ width: '100%', marginBottom: '40px' }}>
            {options.map(option => (
              <button
                key={option.id}
                onClick={() => handleSelection('travelVibe', option.id)}
                style={{
                  width: '100%',
                  padding: '16px',
                  margin: '8px 0',
                  border: selectedPreferences.travelVibe.includes(option.id) 
                    ? '2px solid #FA8C16' 
                    : '1px solid #ddd',
                  borderRadius: '12px',
                  background: selectedPreferences.travelVibe.includes(option.id) 
                    ? 'rgba(250, 140, 22, 0.1)' 
                    : 'white',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '20px' }}>{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
          
          <button style={commonStyles.button} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    );
  }

  // Travel With Selection
  if (currentScreen === 'travel-with') {
    const options = [
      { id: 'solo', label: 'Solo', icon: '👤' },
      { id: 'friends', label: 'Friends', icon: '👥' },
      { id: 'partner', label: 'Partner', icon: '👫' },
      { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' }
    ];

    return (
      <div style={commonStyles.container}>
        <div style={commonStyles.header}>
          <button style={commonStyles.backButton} onClick={handleBack}>
            <LeftOutlined />
          </button>
          <Progress 
            percent={getProgress()} 
            showInfo={false} 
            strokeColor="#FA8C16"
            style={{ width: '80%' }}
          />
        </div>
        <div style={commonStyles.content}>
          <h2 style={commonStyles.title}>Let's Personalize ahead for you</h2>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
            Who do you usually travel with?
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>
            (Select one or multiple)
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            width: '100%',
            marginBottom: '40px'
          }}>
            {options.map(option => (
              <button
                key={option.id}
                onClick={() => handleSelection('travelWith', option.id)}
                style={{
                  padding: '24px 16px',
                  border: selectedPreferences.travelWith.includes(option.id) 
                    ? '2px solid #FA8C16' 
                    : '1px solid #ddd',
                  borderRadius: '12px',
                  background: selectedPreferences.travelWith.includes(option.id) 
                    ? 'rgba(250, 140, 22, 0.1)' 
                    : 'white',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '24px' }}>{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
          
          <button style={commonStyles.button} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    );
  }

  // Discover Selection
  if (currentScreen === 'discover') {
    const options = [
      { id: 'places', label: 'Unique places to stay', icon: '🏨' },
      { id: 'food', label: 'Local food and must-try eats', icon: '🍽️' },
      { id: 'activities', label: 'Activities & events during your trip', icon: '🎯' },
      { id: 'culture', label: 'Culture, history & hidden gems', icon: '🏛️' },
      { id: 'essentials', label: 'Travel essentials & accessories', icon: '🎒' }
    ];

    return (
      <div style={commonStyles.container}>
        <div style={commonStyles.header}>
          <button style={commonStyles.backButton} onClick={handleBack}>
            <LeftOutlined />
          </button>
          <Progress 
            percent={getProgress()} 
            showInfo={false} 
            strokeColor="#FA8C16"
            style={{ width: '80%' }}
          />
        </div>
        <div style={commonStyles.content}>
          <h2 style={commonStyles.title}>Let's Personalize ahead for you</h2>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
            What do you want to discover here?
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>
            (Select one or multiple)
          </p>
          
          <div style={{ width: '100%', marginBottom: '40px' }}>
            {options.map(option => (
              <button
                key={option.id}
                onClick={() => handleSelection('discover', option.id)}
                style={{
                  width: '100%',
                  padding: '16px',
                  margin: '8px 0',
                  border: selectedPreferences.discover.includes(option.id) 
                    ? '2px solid #FA8C16' 
                    : '1px solid #ddd',
                  borderRadius: '12px',
                  background: selectedPreferences.discover.includes(option.id) 
                    ? 'rgba(250, 140, 22, 0.1)' 
                    : 'white',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '20px' }}>{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
          
          <button style={commonStyles.button} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    );
  }

  // Purpose Selection
  if (currentScreen === 'purpose') {
    const options = [
      { id: 'planning', label: "I'm planning my next trip", icon: '✈️' },
      { id: 'exploring', label: 'Just exploring for travel inspiration', icon: '🔍' },
      { id: 'saving', label: 'I want to save places & build my itinerary', icon: '📝' }
    ];

    return (
      <div style={commonStyles.container}>
        <div style={commonStyles.header}>
          <button style={commonStyles.backButton} onClick={handleBack}>
            <LeftOutlined />
          </button>
          <Progress 
            percent={getProgress()} 
            showInfo={false} 
            strokeColor="#FA8C16"
            style={{ width: '80%' }}
          />
        </div>
        <div style={commonStyles.content}>
          <h2 style={commonStyles.title}>Let's Personalize ahead for you</h2>
          <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>
            What brings you to Hich today
          </h3>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px' }}>
            (Select one or multiple)
          </p>
          
          <div style={{ width: '100%', marginBottom: '40px' }}>
            {options.map(option => (
              <button
                key={option.id}
                onClick={() => handleSelection('purpose', option.id)}
                style={{
                  width: '100%',
                  padding: '16px',
                  margin: '8px 0',
                  border: selectedPreferences.purpose.includes(option.id) 
                    ? '2px solid #FA8C16' 
                    : '1px solid #ddd',
                  borderRadius: '12px',
                  background: selectedPreferences.purpose.includes(option.id) 
                    ? 'rgba(250, 140, 22, 0.1)' 
                    : 'white',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ fontSize: '20px' }}>{option.icon}</span>
                {option.label}
              </button>
            ))}
          </div>
          
          <button style={commonStyles.button} onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default HichOnboardingFlow