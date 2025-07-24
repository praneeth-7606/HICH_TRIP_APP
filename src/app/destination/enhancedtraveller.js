import React, { useState } from 'react';
import { FilterOutlined } from '@ant-design/icons';

const ContinuousTravelFilter = ({ activeFilter, setActiveFilter }) => {
  const [hoveredFilter, setHoveredFilter] = useState(null);

  const filterCategories = [
    { key: 'stays', label: 'Stays' },
    { key: 'food', label: 'Food & Drinks' },
    { key: 'activities', label: 'Activities' },
    { key: 'experiences', label: 'Experiences' },
    { key: 'transport', label: 'Transport' },
    { key: 'shopping', label: 'Shopping' },
    { key: 'nightlife', label: 'Nightlife' }
  ];

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
    // Add haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
  };

  return (
    <div style={{ 
      backgroundColor: '#FEFBF7',
      padding: '12px 0 16px 0'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        overflowX: 'auto',
        paddingLeft: '16px',
        paddingRight: '16px',
        scrollbarWidth: 'none', // Firefox
        msOverflowStyle: 'none'  // IE/Edge
      }}>
        {/* Filters Button */}
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            borderRadius: '25px',
            border: '1px solid #E0E0E0',
            backgroundColor: 'white',
            color: '#666',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            minWidth: 'fit-content',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'all 0.2s ease',
            marginRight: '8px', // Small gap only after Filters button
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f8f9fa';
            e.target.style.borderColor = '#d0d0d0';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.borderColor = '#E0E0E0';
          }}
        >
          <FilterOutlined style={{ fontSize: '14px' }} />
          Filters
        </button>

        {/* Continuous Filter Categories Container */}
        <div style={{
          display: 'flex',
          borderRadius: '25px',
          padding: '2px',
          minWidth: 'fit-content',
          flexShrink: 0
        }}>
          {filterCategories.map((category, index) => {
            const isActive = activeFilter === category.key;
            const isHovered = hoveredFilter === category.key;
            
            return (
              <button
                key={category.key}
                onClick={() => handleFilterClick(category.key)}
                onMouseEnter={() => setHoveredFilter(category.key)}
                onMouseLeave={() => setHoveredFilter(null)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '23px', // Slightly smaller to fit within container
                  border: 'none',
                  backgroundColor: isActive ? '#FF5722' : (isHovered ? 'white' : 'transparent'),
                  color: isActive ? 'white' : '#333',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: isActive ? '600' : '500',
                  minWidth: 'fit-content',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: isActive ? 2 : 1,
                  boxShadow: isActive 
                    ? '0 4px 12px rgba(255, 87, 34, 0.3)' 
                    : isHovered ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                  margin: 0, // Remove all margins for continuous effect
                  flexShrink: 0
                }}
              >
                {/* Active state background animation */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, #FF5722 0%, #FF7043 50%, #FF5722 100%)',
                      backgroundSize: '200% 200%',
                      animation: 'gradientShift 3s ease infinite',
                      zIndex: -1,
                      borderRadius: '23px'
                    }}
                  />
                )}
                
                {category.label}
                
                {/* Active indicator dot */}
                {isActive && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '3px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '4px',
                      height: '4px',
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      borderRadius: '50%',
                      animation: 'pulse 2s infinite'
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        /* Hide scrollbar for webkit browsers */
        div::-webkit-scrollbar {
          display: none;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes pulse {
          0% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translateX(-50%) scale(1.2);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1);
          }
        }

        /* Smooth scrolling */
        div[style*="overflowX: auto"] {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }

        /* Enhanced mobile touch scrolling */
        @media (max-width: 768px) {
          div[style*="overflowX: auto"] {
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x proximity;
          }
          
          button {
            scroll-snap-align: start;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 576px) {
          button {
            font-size: 13px !important;
            padding: 8px 16px !important;
          }
        }

        /* Focus states for accessibility */
        button:focus {
          outline: 2px solid #FF5722;
          outline-offset: 2px;
        }

        button:focus:not(:focus-visible) {
          outline: none;
        }

        /* Remove any default button margins */
        button {
          margin: 0 !important;
        }

        /* Ensure continuous layout */
        div[style*="display: flex"] button + button {
          margin-left: 0 !important;
        }
      `}</style>
    </div>
  );
};

// Demo component to show it in action
const FilterDemo = () => {
  const [activeFilter, setActiveFilter] = useState('stays');

  return (
    <div style={{ 
      backgroundColor: '#f5f5f5', 
      minHeight: '10vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <ContinuousTravelFilter 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
      />
      
      {/* Demo content to show continuous layout */}
      <div style={{ 
        padding: '0 16px 20px 16px',
        backgroundColor: '#FEFBF7'
      }}>
        
      
      </div>
      
      
    </div>
  );
};

export default FilterDemo;