// import React from 'react';
// // import HichButton from '../common/HichButton';
// import HichButton from '../common/hichbutton';

// const WelcomeScreen = ({ onNext }) => {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       maxWidth: '400px',
//       margin: '0 auto',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//       padding: '20px',
//       textAlign: 'center'
//     }}>
//       <div style={{
//         fontSize: '48px',
//         fontWeight: '900',
//         color: '#FA8C16',
//         marginBottom: '20px',
//         letterSpacing: '2px'
//       }}>
//         HICH
//       </div>
//       <p style={{
//         fontSize: '16px',
//         color: '#595959',
//         marginBottom: '32px',
//         lineHeight: '1.5',
//         maxWidth: '300px'
//       }}>
//         Travel Like Your Favourite Creators. Book the viral trips you love on Instagram.
//       </p>
//       <HichButton onClick={onNext}>
//         Next
//       </HichButton>
//     </div>
//   );
// };

// export default WelcomeScreen;


import React from 'react';
// import demoImage from './Layer_1.png';

const WelcomeScreen = ({ onNext }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FFE4D1 0%, #FFFFFF 100%)', // Exact gradient from image
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      padding: '0 20px',
      position: 'relative'
    }}>
      {/* Status Bar Space */}
      <div style={{ height: '50px' }}></div>

      {/* Main Content Container */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start', // Left aligned as in image
        width: '100%',
        paddingLeft: '20px' // Left padding for text alignment
      }}>
        {/* HICH Logo */}
        <div style={{
          fontSize: '48px',
          fontWeight: '900',
          color: '#FF6B35', // Exact orange color from image
          letterSpacing: '1px',
          marginBottom: '24px',
          lineHeight: '1'
        }}>
          HICH
        </div>

        {/* Tagline - Left aligned and exact styling */}
        <div style={{
          textAlign: 'left',
          maxWidth: '280px'
        }}>
          <div style={{
            fontSize: '20px',
            fontWeight: '600', // Regular weight as in image
            color: '#999999', // Light gray color from image
            marginBottom: '4px',
            lineHeight: '1.3'
          }}>
            Travel Like Your Favourite
          </div>
          <div style={{
            fontSize: '20px',
            fontWeight: '600', // Regular weight
            color: '#999999', // Same gray color
            lineHeight: '1.3'
          }}>
            Creators. Book the viral trips
          </div>
          <div style={{
            fontSize: '20px',
            fontWeight: '600', // Regular weight
            color: '#999999', // Same gray color
            lineHeight: '1.3'
          }}>
            you love on Instagram.
          </div>
        </div>
      </div>

      {/* Next Button - Bottom positioned */}
      <div style={{
        width: '100%',
        paddingBottom: '90px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <button
          onClick={onNext}
          style={{
            background: 'linear-gradient(90deg, #FF6B35 0%, #FF8A5B 100%)', // Gradient button
            border: 'none',
            borderRadius: '25px',
            height: '50px',
            padding: '0 40px',
            fontSize: '16px',
            fontWeight: '600',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 16px rgba(255, 107, 53, 0.3)',
            minWidth: '140px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 16px rgba(255, 107, 53, 0.3)';
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;