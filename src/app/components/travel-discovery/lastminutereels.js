import React from 'react';
import { StarFilled, BookOutlined } from '@ant-design/icons';

const LastMinuteReels = ({ reels }) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{
        margin: '0 0 20px 0',
        fontSize: '24px',
        fontWeight: '600',
        color: '#333',
        padding: '0 20px'
      }}>
        Last-Minute Steals
      </h3>

      <div style={{
        display: 'flex',
        gap: '16px',
        overflowX: 'auto',
        padding: '0 20px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {reels.map((reel) => (
          <div
            key={reel.id}
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
              height: '240px',
              overflow: 'hidden'
            }}>
              <img
                src={reel.image}
                alt={reel.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {/* Creator Avatar and Rating Top */}
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid white'
                }}>
                  <img
                    src={reel.creator.avatar}
                    alt={reel.creator.username}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                
                <div style={{
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: '16px',
                  padding: '6px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  backdropFilter: 'blur(10px)'
                }}>
                  <StarFilled style={{ color: '#FFB300', fontSize: '12px' }} />
                  <span style={{ fontSize: '14px', fontWeight: '600', color: '#333' }}>
                    4.5
                  </span>
                </div>
              </div>

              {/* Discount Badge */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '16px',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.8)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '16px',
                fontWeight: '600',
                backdropFilter: 'blur(10px)'
              }}>
                Get this for 40% off
              </div>

              {/* Bottom Dark Overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))',
                padding: '20px 16px 16px 16px',
                color: '#fff'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <h4 style={{
                      margin: '0 0 6px 0',
                      fontSize: '24px',
                      fontWeight: '600'
                    }}>
                      {reel.title}
                    </h4>
                    
                    <p style={{
                      margin: 0,
                      fontSize: '16px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      📍 {reel.location}
                    </p>
                  </div>
                  
                  {/* Bookmark Icon */}
                  <button style={{
                    background: 'rgba(255,255,255,0.2)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '12px',
                    width: '48px',
                    height: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '18px',
                    cursor: 'pointer'
                  }}>
                    <BookOutlined />
                  </button>
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

export default LastMinuteReels;