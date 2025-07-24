import React, { useState, useEffect } from 'react';

const DiscoverScreen = ({ onNext, onBack, selectedPreferences, onSelection, progress = 75 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options = [
    { id: 'places', label: 'Unique places to stay', icon: '🏨' },
    { id: 'food', label: 'Local food and must-try eats', icon: '🍽️' },
    { id: 'activities', label: 'Activities & events during your trip', icon: '🎯' },
    { id: 'culture', label: 'Culture, history & hidden gems', icon: '🏛️' },
    { id: 'essentials', label: 'Travel essentials & accessories', icon: '🎒' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FEFCFA 0%, #FFF8F3 100%)',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Status Bar Space */}
      <div style={{ height: '50px' }}></div>

      {/* Enhanced Header */}
      <div style={{
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <button 
          onClick={onBack}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            userSelect: 'none',
outline: 'none',
WebkitTapHighlightColor: 'transparent',
            fontSize: '18px',
            color: '#262626',
            cursor: 'pointer',
            padding: '12px',
            borderRadius: '50%',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 1)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ←
        </button>
        <div style={{
          flex: 1,
          height: '6px',
          background: 'rgba(255, 151, 61, 0.2)',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #FF973D 0%, #FFB366 100%)',
            borderRadius: '3px',
            transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 10px rgba(255, 151, 61, 0.5)'
          }} />
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header Text */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '500',
  color: '#000000',
            margin: '0 0 16px 0'
          }}>
            Let's Personalize ahead for you
          </h3>
          <h2 style={{
  fontSize: '24px',
  fontWeight: '500',
  color: '#000000',
  margin: '0 0 8px 0',
  lineHeight: '1.2'
}}>
            What do you want to discover here?
          </h2>
          <p style={{
            fontWeight: '500',
  color: '#000000',
            margin: 0
          }}>
            (Select one or multiple)
          </p>
        </div>

        {/* Options */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {options.map((option, index) => (
            <button
              key={option.id}
              onClick={() => onSelection('discover', option.id)}
              style={{
                width: '100%',
                padding: '20px 24px',
                border: selectedPreferences?.discover?.includes(option.id) 
                  ? '2px solid #FF973D' 
                  : '1px solid rgba(240, 240, 240, 0.8)',
                borderRadius: '16px',
                background: selectedPreferences?.discover?.includes(option.id) 
                  ? 'linear-gradient(135deg, rgba(255, 151, 61, 0.1) 0%, rgba(255, 179, 102, 0.1) 100%)' 
                  : 'rgba(255, 255, 255, 0.9)',
                cursor: 'pointer',
                fontSize: '16px',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                color: '#262626',
                fontWeight: '500',
                boxShadow: selectedPreferences?.discover?.includes(option.id)
                  ? '0 8px 24px rgba(255, 151, 61, 0.2)'
                  : '0 4px 12px rgba(0,0,0,0.08)',
                transform: `${mounted ? 'translateY(0)' : 'translateY(20px)'} scale(1)`,
                transitionDelay: `${index * 0.1}s`,
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                if (!selectedPreferences?.discover?.includes(option.id)) {
                  e.target.style.background = 'rgba(255, 255, 255, 1)';
                  e.target.style.borderColor = 'rgba(255, 151, 61, 0.3)';
                  e.target.style.transform = 'translateY(-2px) scale(1.02)';
                  e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                }
              }}
              onMouseLeave={(e) => {
                if (!selectedPreferences?.discover?.includes(option.id)) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.borderColor = 'rgba(240, 240, 240, 0.8)';
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                }
              }}
            >
              <span style={{ 
                fontSize: '24px',
                filter: 'brightness(1.1) saturate(1.2)'
              }}>
                {option.icon}
              </span>
              <span style={{ flex: 1 }}>{option.label}</span>
              {selectedPreferences?.discover?.includes(option.id) && (
                <span style={{
                  color: '#FF973D',
                  fontSize: '18px',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          style={{
            background: 'linear-gradient(135deg, #FF973D 0%, #FFB366 100%)',
            border: 'none',
            borderRadius: '28px',
            height: '56px',
            padding: '0 40px',
            fontSize: '17px',
            fontWeight: '600',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 8px 24px rgba(255, 151, 61, 0.4)',
            width: '100%',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #E8840F 0%, #FF973D 100%)';
            e.target.style.transform = 'translateY(-3px) scale(1.02)';
            e.target.style.boxShadow = '0 12px 32px rgba(255, 151, 61, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #FF973D 0%, #FFB366 100%)';
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 24px rgba(255, 151, 61, 0.4)';
          }}
        >
          Next
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default DiscoverScreen;