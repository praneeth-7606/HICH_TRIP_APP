import React from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const MostLoved = ({ items, onSave, savedItems }) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '20px',
        fontWeight: '600',
        color: '#333',
        padding: '0 20px'
      }}>
        Most Loved
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px',
        padding: '0 20px'
      }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              background: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'relative',
              height: '120px',
              overflow: 'hidden'
            }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              
              {/* Creator Avatar */}
              <div style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid white'
              }}>
                <img
                  src={item.creator.avatar}
                  alt={item.creator.username}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Save Button */}
              <button
                onClick={() => onSave(item.id)}
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: savedItems.has(item.id) ? '#FF5722' : '#666',
                  fontSize: '12px'
                }}
              >
                {savedItems.has(item.id) ? <HeartFilled /> : <HeartOutlined />}
              </button>
            </div>

            <div style={{ padding: '12px' }}>
              <h5 style={{
                margin: '0 0 4px 0',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333'
              }}>
                {item.title}
              </h5>
              
              <p style={{
                margin: 0,
                fontSize: '12px',
                color: '#666'
              }}>
                📍 {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostLoved;