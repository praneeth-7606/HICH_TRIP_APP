import React, { useRef, useState, useEffect } from 'react';
import { StarFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';

const CreatorsYouLove = ({ creators }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollPosition);
      return () => scrollElement.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 200 : 150;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canScrollRight) {
      scroll('right');
    }
    if (isRightSwipe && canScrollLeft) {
      scroll('left');
    }
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{
        margin: '0 0 24px 0',
        fontSize: 'clamp(20px, 5vw, 24px)',
        fontWeight: '600',
        color: '#333',
        padding: '0 16px'
      }}>
        Creators you Love
      </h3>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Enhanced Left Arrow */}
        <button
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          style={{
            position: 'absolute',
            left: '8px',
            zIndex: 10,
            background: canScrollLeft ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.5)',
            border: 'none',
            borderRadius: '50%',
            width: 'clamp(36px, 8vw, 40px)',
            height: 'clamp(36px, 8vw, 40px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: canScrollLeft ? '0 4px 15px rgba(0,0,0,0.2)' : 'none',
            cursor: canScrollLeft ? 'pointer' : 'not-allowed',
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            color: canScrollLeft ? '#333' : '#999',
            transition: 'all 0.3s ease',
            opacity: canScrollLeft ? 1 : 0.5,
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            if (canScrollLeft) {
              e.target.style.background = '#FF5722';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (canScrollLeft) {
              e.target.style.background = 'rgba(255,255,255,0.95)';
              e.target.style.color = '#333';
              e.target.style.transform = 'scale(1)';
            }
          }}
          aria-label="Scroll left"
        >
          <LeftOutlined />
        </button>

        {/* Enhanced Scrollable Container */}
        <div
          ref={scrollRef}
          style={{
            display: 'flex',
            gap: 'clamp(24px, 6vw, 40px)',
            overflowX: 'auto',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '0 clamp(40px, 12vw, 60px)',
            width: '100%',
            scrollBehavior: 'smooth'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {creators.map((creator, index) => (
            <div
              key={creator.id}
              style={{
                textAlign: 'center',
                cursor: 'pointer',
                minWidth: 'clamp(120px, 25vw, 140px)',
                transition: 'transform 0.3s ease',
                padding: '8px',
                borderRadius: '16px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
              onTouchStart={(e) => {
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                position: 'relative',
                marginBottom: '16px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: 'clamp(70px, 18vw, 90px)',
                  height: 'clamp(70px, 18vw, 90px)',
                  borderRadius: '50%',
                  border: '3px solid #FF8A65',
                  padding: '3px',
                  background: '#fff',
                  boxShadow: '0 8px 25px rgba(255, 138, 101, 0.3)',
                  transition: 'all 0.3s ease'
                }}>
                  <img
                    src={creator.avatar}
                    alt={creator.username}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    loading={index < 3 ? 'eager' : 'lazy'}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/90x90/f0f0f0/999999?text=User';
                    }}
                  />
                </div>
                {creator.verified && (
                  <div style={{
                    position: 'absolute',
                    bottom: '2px',
                    right: '2px',
                    width: 'clamp(20px, 5vw, 24px)',
                    height: 'clamp(20px, 5vw, 24px)',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1890ff 0%, #40a9ff 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid white',
                    fontSize: 'clamp(8px, 2.5vw, 12px)',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(24, 144, 255, 0.4)'
                  }}>
                    ✓
                  </div>
                )}
              </div>
              
              <div style={{
                minHeight: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <p style={{
                    margin: '0 0 6px 0',
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    fontWeight: '600',
                    color: '#333',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}>
                    {creator.username}
                  </p>
                  
                  <p style={{
                    margin: '0 0 8px 0',
                    fontSize: 'clamp(12px, 3vw, 14px)',
                    color: '#666',
                    lineHeight: '1.3'
                  }}>
                    {creator.experiences}
                  </p>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: 'rgba(255, 179, 0, 0.1)',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  margin: '0 auto'
                }}>
                  <span style={{
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    color: '#333',
                    fontWeight: '600'
                  }}>
                    {creator.rating}
                  </span>
                  <StarFilled style={{ 
                    color: '#FFB300', 
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    filter: 'drop-shadow(0 2px 4px rgba(255, 179, 0, 0.3))'
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Right Arrow */}
        <button
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          style={{
            position: 'absolute',
            right: '8px',
            zIndex: 10,
            background: canScrollRight ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.5)',
            border: 'none',
            borderRadius: '50%',
            width: 'clamp(36px, 8vw, 40px)',
            height: 'clamp(36px, 8vw, 40px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: canScrollRight ? '0 4px 15px rgba(0,0,0,0.2)' : 'none',
            cursor: canScrollRight ? 'pointer' : 'not-allowed',
            fontSize: 'clamp(14px, 3.5vw, 16px)',
            color: canScrollRight ? '#333' : '#999',
            transition: 'all 0.3s ease',
            opacity: canScrollRight ? 1 : 0.5,
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => {
            if (canScrollRight) {
              e.target.style.background = '#FF5722';
              e.target.style.color = 'white';
              e.target.style.transform = 'scale(1.1)';
            }
          }}
          onMouseLeave={(e) => {
            if (canScrollRight) {
              e.target.style.background = 'rgba(255,255,255,0.95)';
              e.target.style.color = '#333';
              e.target.style.transform = 'scale(1)';
            }
          }}
          aria-label="Scroll right"
        >
          <RightOutlined />
        </button>
      </div>

      {/* Scroll Hint for Mobile */}
      <div style={{
        textAlign: 'center',
        marginTop: '12px',
        fontSize: '12px',
        color: '#999',
        display: window.innerWidth <= 768 ? 'block' : 'none'
      }}>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
        
        @media (max-width: 480px) {
          .creator-item {
            min-width: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default CreatorsYouLove;