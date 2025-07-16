import React from 'react';
import { StarFilled } from '@ant-design/icons';

const PopularCreators = ({ creators }) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '20px',
        fontWeight: '600',
        color: '#333',
        padding: '0 20px'
      }}>
        Popular Creators
      </h3>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0 20px'
      }}>
        {creators.map((creator) => (
          <div
            key={creator.id}
            style={{
              textAlign: 'center',
              cursor: 'pointer'
            }}
          >
            <div style={{
              position: 'relative',
              marginBottom: '8px'
            }}>
              <img
                src={creator.avatar}
                alt={creator.username}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid #fff',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}
              />
              {creator.verified && (
                <div style={{
                  position: 'absolute',
                  bottom: '2px',
                  right: '2px',
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  background: '#1890ff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid white',
                  fontSize: '8px',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  ✓
                </div>
              )}
            </div>
            
            <p style={{
              margin: '0 0 2px 0',
              fontSize: '12px',
              fontWeight: '600',
              color: '#333'
            }}>
              {creator.username}
            </p>
            
            <p style={{
              margin: '0 0 4px 0',
              fontSize: '10px',
              color: '#666'
            }}>
              {creator.experiences}
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px'
            }}>
              <StarFilled style={{ color: '#FFB300', fontSize: '10px' }} />
              <span style={{
                fontSize: '10px',
                color: '#333',
                fontWeight: '500'
              }}>
                {creator.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCreators;