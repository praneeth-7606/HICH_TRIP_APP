import React from 'react';

const ShareTripsScreen = ({ onNext, progress = 50 }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FFE4D1 0%, #FFFFFF 100%)',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Status Bar Space */}
      <div style={{ height: '50px' }}></div>

      {/* Progress Slider */}
      <div style={{
        padding: '0 20px 20px 20px',
        background: 'transparent'
      }}>
        <div style={{
          width: '100%',
          height: '6px',
          background: '#E5E5E5',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #FF6B35 0%, #FF8A5B 100%)',
            borderRadius: '3px',
            transition: 'width 0.5s ease',
            boxShadow: '0 2px 4px rgba(255, 107, 53, 0.3)'
          }} />
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        {/* Title */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#000000',
          marginBottom: '12px',
          lineHeight: '1.2'
        }}>
          Share trips, Not Just reels
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '16px',
          color: '#666666',
          marginBottom: '50px',
          lineHeight: '1.4',
          maxWidth: '320px'
        }}>
          Send ready-to-book itineraries and plan epic adventures with friends.
        </p>

        {/* Enhanced User Avatars Section */}
        <div style={{
          marginBottom: '40px'
        }}>
          {/* Large Avatar Group */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            gap: '15px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%)',
              color: 'white',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '600',
              marginRight: '8px',
              boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)'
            }}>
              You
            </div>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'url("https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=50&h=50&fit=crop&crop=face")',
              backgroundSize: 'cover',
              border: '3px solid white',
              marginLeft: '-12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}></div>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face")',
              backgroundSize: 'cover',
              border: '3px solid white',
              marginLeft: '-12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}></div>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face")',
              backgroundSize: 'cover',
              border: '3px solid white',
              marginLeft: '-12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}></div>
          </div>

          {/* Enhanced Trip Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
            maxWidth: '320px',
            margin: '0 auto 40px auto',
            border: '1px solid rgba(255, 107, 53, 0.1)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=80&h=80&fit=crop"
              alt="Trip"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                objectFit: 'cover'
              }}
            />
            <div style={{ flex: 1, textAlign: 'left' }}>
              <h4 style={{ 
                margin: 0, 
                fontSize: '16px', 
                fontWeight: '600',
                color: '#000000',
                marginBottom: '4px'
              }}>
                Weekend Plan
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#666666'
              }}>
                3 members
              </p>
            </div>
            <div style={{ 
              fontSize: '20px', 
              color: '#FF6B35',
              transform: 'rotate(-45deg)'
            }}>
              ➤
            </div>
          </div>

          {/* Large Phone Mockup with Enhanced Design */}
          <div style={{
            width: '160px',
            height: '280px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '25px',
            margin: '0 auto',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
            position: 'relative'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=160&h=280&fit=crop"
              alt="Phone mockup"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            {/* Phone Notch */}
            <div style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '6px',
              background: '#000',
              borderRadius: '3px'
            }}></div>
          </div>
        </div>
      </div>

      {/* Get Started Button - Bottom */}
      <div style={{
        padding: '20px',
        paddingBottom: '40px'
      }}>
        <button
          onClick={onNext}
          style={{
            background: 'linear-gradient(90deg, #FF6B35 0%, #FF8A5B 100%)',
            border: 'none',
            borderRadius: '25px',
            height: '55px',
            width: '100%',
            fontSize: '16px',
            fontWeight: '600',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.3)';
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ShareTripsScreen;

