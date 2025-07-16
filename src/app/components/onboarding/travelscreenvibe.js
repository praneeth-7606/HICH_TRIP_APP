import React from 'react';
import { Progress } from 'antd';
// import BackButton from '../common/BackButton';
import BackButton from '../common/backbutton';
// import HichButton from '../common/HichButton';
import HichButton from '../common/hichbutton';
import { PREFERENCE_OPTIONS } from '../../utils/constants';

const TravelVibeScreen = ({ onNext, onBack, progress, selectedPreferences, onSelection }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <BackButton onClick={onBack} />
        <Progress 
          percent={progress} 
          showInfo={false} 
          strokeColor="#FA8C16"
          style={{ width: '80%' }}
        />
      </div>
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#262626',
          marginBottom: '12px',
          lineHeight: '1.3'
        }}>
          Let's Personalize ahead for you
        </h2>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: '600', 
          marginBottom: '8px',
          color: '#262626'
        }}>
          What's your travel vibe?
        </h3>
        <p style={{ 
          fontSize: '14px', 
          color: '#666', 
          marginBottom: '32px' 
        }}>
          (Select one or multiple)
        </p>
        
        <div style={{ width: '100%', marginBottom: '40px' }}>
          {PREFERENCE_OPTIONS.TRAVEL_VIBE.map(option => (
            <button
              key={option.id}
              onClick={() => onSelection('travelVibe', option.id)}
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
                transition: 'all 0.3s ease',
                boxShadow: selectedPreferences.travelVibe.includes(option.id) 
                  ? '0 4px 12px rgba(250, 140, 22, 0.2)' 
                  : '0 2px 4px rgba(0,0,0,0.1)'
              }}
            >
              <span style={{ fontSize: '20px' }}>{option.icon}</span>
              {option.label}
            </button>
          ))}
        </div>
        
        <HichButton 
          onClick={onNext}
          disabled={selectedPreferences.travelVibe.length === 0}
        >
          Next
        </HichButton>
      </div>
    </div>
  );
};

export default TravelVibeScreen;