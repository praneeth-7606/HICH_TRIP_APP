import React, { useState, useMemo } from 'react';
import { SearchOutlined } from '@ant-design/icons';

const ExploreByDestinations = ({ destinations }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter categories with icons
  const filterCategories = [
    { 
      key: 'All', 
      label: 'All', 
      icon: '🔍'
    },
    { 
      key: 'Beach', 
      label: 'Beach', 
      icon: '🏖️'
    },
    { 
      key: 'Romantic', 
      label: 'Romantic', 
      icon: '💕'
    },
    { 
      key: 'Staycation', 
      label: 'Staycation', 
      icon: '🏡'
    }
  ];

  // Filter destinations based on active filter
  const filteredDestinations = useMemo(() => {
    if (activeFilter === 'All') {
      return destinations;
    }
    
    return destinations.filter(destination => {
      // Assuming destinations have a category property
      // You can modify this logic based on your data structure
      const category = destination.category || destination.type || '';
      return category.toLowerCase().includes(activeFilter.toLowerCase());
    });
  }, [destinations, activeFilter]);

  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{
        margin: '0 0 20px 0',
        fontSize: 'clamp(18px, 4.5vw, 22px)',
        fontWeight: '600',
        color: '#333',
        padding: '0 20px'
      }}>
        Explore by Destinations
      </h3>

      {/* Filter Tabs */}
      <div style={{
        display: 'flex',
        gap: '12px',
        overflowX: 'auto',
        paddingBottom: '4px',
        marginBottom: '20px',
        padding: '0 20px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {filterCategories.map((category) => (
          <button
            key={category.key}
            onClick={() => setActiveFilter(category.key)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 16px',
              borderRadius: '25px',
              border: 'none',
              background: activeFilter === category.key 
                ? 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)' 
                : '#fff',
              color: activeFilter === category.key ? '#fff' : '#333',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
              boxShadow: activeFilter === category.key 
                ? '0 4px 15px rgba(255, 87, 34, 0.3)' 
                : '0 2px 8px rgba(0,0,0,0.1)',
              transform: 'translateY(0)',
              minWidth: 'fit-content'
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== category.key) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== category.key) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
              }
            }}
            onTouchStart={(e) => {
              e.target.style.transform = 'scale(0.95)';
            }}
            onTouchEnd={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            <span style={{ fontSize: '16px' }}>{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>

      {/* Destinations Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        padding: '0 20px'
      }}>
        {filteredDestinations.map((destination, index) => (
          <div
            key={destination.id}
            style={{
              borderRadius: '16px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '1',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            <img
              src={destination.image}
              alt={destination.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
              loading={index < 6 ? 'eager' : 'lazy'}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x300/f0f0f0/999999?text=Image+Not+Found';
              }}
            />
            
            {/* Clips Count Overlay */}
            <div style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: 'rgba(0,0,0,0.7)',
              color: '#fff',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '600',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              {destination.clipsCount || '10K+ clips'}
            </div>
            
            {/* Bottom Gradient Overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4) 50%, transparent)',
              padding: 'clamp(20px, 5vw, 30px) 12px 12px 12px'
            }}>
              <h5 style={{
                margin: 0,
                color: '#fff',
                fontSize: 'clamp(13px, 3.5vw, 16px)',
                fontWeight: '700',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                lineHeight: '1.2'
              }}>
                {destination.name}
              </h5>
              
              {/* Optional: Add destination info */}
              {destination.country && (
                <p style={{
                  margin: '4px 0 0 0',
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: 'clamp(10px, 2.5vw, 12px)',
                  textAlign: 'center',
                  fontWeight: '400'
                }}>
                  {destination.country}
                </p>
              )}
            </div>

            {/* Hover Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.8), rgba(255, 138, 101, 0.6))',
              opacity: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'opacity 0.3s ease',
              backdropFilter: 'blur(2px)'
            }}
            className="destination-hover-overlay"
            >
              <div style={{
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                transform: 'scale(0.8)',
                transition: 'transform 0.3s ease'
              }}>
                <SearchOutlined style={{ 
                  fontSize: '20px', 
                  color: '#FF5722' 
                }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredDestinations.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#666'
        }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px'
          }}>
            🔍
          </div>
          <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '18px',
            fontWeight: '600',
            color: '#333'
          }}>
            No destinations found
          </h4>
          <p style={{
            margin: 0,
            fontSize: '14px'
          }}>
            Try selecting a different filter or check back later.
          </p>
        </div>
      )}

      {/* Enhanced Styles */}
      <style>{`
        /* Hide scrollbar for filter tabs */
        div::-webkit-scrollbar {
          display: none;
        }
        
        /* Hover effect for destination cards */
        .destination-hover-overlay {
          opacity: 0;
        }
        
        .destination-hover-overlay:hover {
          opacity: 1;
        }
        
        .destination-hover-overlay:hover > div {
          transform: scale(1);
        }
        
        /* Responsive grid adjustments */
        @media (max-width: 320px) {
          .destinations-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        /* Enhanced accessibility */
        button:focus-visible {
          outline: 2px solid #FF5722;
          outline-offset: 2px;
        }
        
        /* Smooth transitions */
        * {
          box-sizing: border-box;
        }
        
        /* Performance optimizations */
        img {
          will-change: transform;
        }
        
        /* Touch feedback */
        @media (hover: none) and (pointer: coarse) {
          .destination-card:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default ExploreByDestinations;