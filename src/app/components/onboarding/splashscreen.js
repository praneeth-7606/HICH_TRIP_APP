
import React, { useEffect } from 'react';
import { SPLASH_SCREEN_DURATION } from '../../utils/constants';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, SPLASH_SCREEN_DURATION || 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#FFFFFF', // Pure white as specified
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      padding: '40px 20px'
    }}>
      {/* HICH Logo Container - Space for your logo image */}
      <div style={{
        width: '120px',
        height: '120px',
        background: '#FA8C16',
        borderRadius: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '30px',
        position: 'relative',
        boxShadow: '0 10px 30px rgba(250, 140, 22, 0.3)',
        overflow: 'hidden'
      }}>
        {/* Replace this div with your logo image */}
        {/* <img 
          src="/path-to-your-logo.png" 
          alt="HICH Logo"
          style={{
            width: '80px',
            height: '80px',
            objectFit: 'contain'
          }}
        /> */}
        
        {/* Temporary text logo - replace with image above */}
        <div style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: '900',
          textAlign: 'center',
          lineHeight: '1'
        }}>
          HICH<br/>
          <span style={{ color: '#FFD700' }}>HICH</span><br/>
          HICH
        </div>
        
        {/* Speech bubble tail */}
        <div style={{
          position: 'absolute',
          bottom: '-12px',
          right: '15px',
          width: '0',
          height: '0',
          borderLeft: '20px solid #FA8C16',
          borderBottom: '20px solid transparent'
        }} />
      </div>

      <p style={{
        fontSize: '16px',
        color: '#8C8C8C',
        marginBottom: '32px',
        lineHeight: '1.5',
        textAlign: 'center',
        maxWidth: '280px',
        fontWeight: '400'
      }}>
        Travel Like Your Favourite Creators. Book the viral trips you love on Instagram.
      </p>

      {/* Loading spinner */}
      <div style={{
        width: '24px',
        height: '24px',
        border: '2px solid rgba(250, 140, 22, 0.3)',
        borderTop: '2px solid #FA8C16',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;