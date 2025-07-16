import React, { useEffect } from 'react';
import { SPLASH_SCREEN_DURATION } from '../../utils/constants';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, SPLASH_SCREEN_DURATION);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        fontSize: '48px',
        fontWeight: '900',
        color: '#FA8C16',
        marginBottom: '20px',
        letterSpacing: '2px',
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        HICH
      </div>
      <p style={{
        fontSize: '16px',
        color: '#595959',
        marginBottom: '32px',
        lineHeight: '1.5',
        textAlign: 'center',
        maxWidth: '300px'
      }}>
        Travel Like Your Favourite Creators. Book the viral trips you love on Instagram.
      </p>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid #FA8C16',
        borderTop: '3px solid transparent',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
    </div>
  );
};

export default SplashScreen;
