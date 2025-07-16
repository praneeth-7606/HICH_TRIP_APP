import React from 'react';
import { HeartOutlined, SoundOutlined } from '@ant-design/icons';

const BasedOnYourVibe = ({ experiences }) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{
        margin: '0 0 20px 0',
        fontSize: '24px',
        fontWeight: '600',
        color: '#333',
        padding: '0 20px'
      }}>
        Based on your vibe
      </h3>

      <div style={{
        display: 'flex',
        gap: '16px',
        overflowX: 'auto',
        padding: '0 20px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            style={{
              minWidth: '320px',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              position: 'relative',
              height: '320px',
              overflow: 'hidden'
            }}>
              <img
                src={experience.image}
                alt={experience.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {/* Creator Avatar Top Left */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <img
                  src={experience.creator.avatar}
                  alt={experience.creator.username}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Creator Badge Center */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '20px',
                padding: '6px 14px',
                fontSize: '14px',
                fontWeight: '500',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                backdropFilter: 'blur(10px)'
              }}>
                {experience.creator.username}
              </div>

              {/* Sound Button Top Right */}
              <button style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#333',
                fontSize: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <SoundOutlined />
              </button>

              {/* Bottom Overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                padding: '40px 16px 16px 16px',
                color: '#fff'
              }}>
                
                
                <h5 style={{
                  margin: '0 0 8px 0',
                  fontSize: '20px',
                  fontWeight: '600'
                }}>
                  {experience.title}
                </h5>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px'
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    📍 {experience.location}
                  </p>
                  
                  <button style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '16px',
                    cursor: 'pointer'
                  }}>
                    <HeartOutlined />
                  </button>
                </div>
                
                {/* Profile Pictures and Booking Info */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <img
                      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face"
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '2px solid white'
                      }}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face"
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '2px solid white',
                        marginLeft: '-6px'
                      }}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=24&h=24&fit=crop&crop=face"
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '2px solid white',
                        marginLeft: '-6px'
                      }}
                    />
                  </div>
                  <span style={{
                    fontSize: '12px',
                    marginLeft: '6px'
                  }}>
                    {experience.bookings}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default BasedOnYourVibe;