import React from 'react';
// import HichButton from '../common/HichButton';
import HichButton from '../common/hichbutton';

const WelcomeScreen = ({ onNext }) => {
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
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        fontSize: '48px',
        fontWeight: '900',
        color: '#FA8C16',
        marginBottom: '20px',
        letterSpacing: '2px'
      }}>
        HICH
      </div>
      <p style={{
        fontSize: '16px',
        color: '#595959',
        marginBottom: '32px',
        lineHeight: '1.5',
        maxWidth: '300px'
      }}>
        Travel Like Your Favourite Creators. Book the viral trips you love on Instagram.
      </p>
      <HichButton onClick={onNext}>
        Next
      </HichButton>
    </div>
  );
};

export default WelcomeScreen;