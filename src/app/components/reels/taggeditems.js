// TaggedItemsPage.js
import React, { useState } from 'react';
import { Button } from 'antd';
import { 
  LeftOutlined, 
  CloseOutlined, 
  StarFilled,
  BookOutlined
} from '@ant-design/icons';

const TaggedItemsPage = ({ taggedItems, onBack, onClose, onItemClick }) => {
  const [likedItems, setLikedItems] = useState({});

  const toggleLike = (itemId) => {
    setLikedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      background: '#f8f9fa',
      maxWidth: '400px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 20px',
        background: 'rgba(248, 249, 250, 0.95)',
        maxWidth: '400px',
        margin: '0 auto',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Button 
            type="text" 
            icon={<LeftOutlined />} 
            onClick={onBack}
            style={{ 
              color: '#333',
              fontSize: '18px',
              padding: '8px',
              border: 'none'
            }}
          />
          <div style={{
            color: '#333',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            Tagged Items
          </div>
          <Button 
            type="text" 
            icon={<CloseOutlined />} 
            onClick={onClose}
            style={{ 
              color: '#333',
              fontSize: '18px',
              padding: '8px',
              border: 'none'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div style={{
        paddingTop: '80px',
        height: '100vh',
        overflowY: 'auto',
        paddingBottom: '20px'
      }}>
        <div style={{
          padding: '20px'
        }}>
          {/* Items List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {taggedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onItemClick(item)}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
                }}
              >
                {/* Image */}
                <div style={{
                  position: 'relative',
                  height: '200px',
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}>
                  {/* Rating Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '12px',
                    padding: '6px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    backdropFilter: 'blur(5px)'
                  }}>
                    <StarFilled style={{ color: '#FFD700', fontSize: '12px' }} />
                    <span style={{ 
                      fontSize: '12px', 
                      fontWeight: '600',
                      color: '#333'
                    }}>
                      {item.rating}
                    </span>
                  </div>

                  {/* Bookmark Icon */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: '8px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)',
                    cursor: 'pointer'
                  }}>
                    <BookOutlined style={{ 
                      fontSize: '16px',
                      color: '#333'
                    }} />
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: '16px',
                  background: 'rgba(0,0,0,0.8)',
                  color: 'white',
                  marginTop: '-60px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'white'
                  }}>
                    {item.title}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginBottom: '8px'
                  }}>
                    <span style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.8)'
                    }}>
                      📍 {item.location}
                    </span>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: '#FFD700'
                    }}>
                      {item.price}
                    </span>
                    
                    <div style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.7)',
                      textTransform: 'capitalize'
                    }}>
                      {item.type}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {taggedItems.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#666'
            }}>
              <div style={{
                fontSize: '48px',
                marginBottom: '16px',
                opacity: 0.7
              }}>
                🔖
              </div>
              <h3 style={{
                margin: '0 0 8px 0',
                fontSize: '20px',
                fontWeight: '600',
                color: '#333'
              }}>
                No Tagged Items
              </h3>
              <p style={{
                margin: 0,
                fontSize: '16px',
                opacity: 0.8
              }}>
                Start saving items from reels to see them here!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaggedItemsPage;