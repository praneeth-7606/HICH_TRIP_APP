// import React, { useState, useRef, useEffect } from 'react';
// import { SearchOutlined, FilterOutlined, DownOutlined, CloseOutlined } from '@ant-design/icons';

// const SearchHeader = () => {
//   const [activeFilter, setActiveFilter] = useState('All Filters');
//   const [searchValue, setSearchValue] = useState('');
//   const [isSearchFocused, setIsSearchFocused] = useState(false);
//   const searchRef = useRef(null);

//   const filters = ['All Filters', 'Creator', 'Destination', 'Category'];

//   const clearSearch = () => {
//     setSearchValue('');
//     searchRef.current?.focus();
//   };

//   // Auto-focus search on component mount
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchRef.current) {
//         searchRef.current.focus();
//       }
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div style={{
//       background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
//       padding: '60px 16px 20px 16px',
//       borderBottom: '1px solid rgba(255,255,255,0.2)'
//       // Removed position: sticky, top: 0, zIndex: 100
//     }}>
//       {/* Enhanced Search Bar */}
//       <div style={{
//         position: 'relative',
//         marginBottom: '20px'
//       }}>
//         <input
//           ref={searchRef}
//           type="text"
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           onFocus={() => setIsSearchFocused(true)}
//           onBlur={() => setIsSearchFocused(false)}
//           placeholder="Search for a 'Travel Creator' or 'Destination'"
//           style={{
//             width: '100%',
//             padding: '16px 20px 16px 50px',
//             paddingRight: searchValue ? '50px' : '20px',
//             borderRadius: '30px',
//             border: `2px solid ${isSearchFocused ? '#FF5722' : '#FF8A65'}`,
//             background: '#fff',
//             fontSize: '16px',
//             outline: 'none',
//             color: '#333',
//             transition: 'all 0.3s ease',
//             boxShadow: isSearchFocused ? '0 8px 25px rgba(255, 87, 34, 0.15)' : '0 4px 12px rgba(0,0,0,0.1)',
//             transform: isSearchFocused ? 'translateY(-2px)' : 'translateY(0)'
//           }}
//         />
        
//         <SearchOutlined style={{
//           position: 'absolute',
//           left: '20px',
//           top: '50%',
//           transform: 'translateY(-50%)',
//           color: isSearchFocused ? '#FF5722' : '#999',
//           fontSize: '18px',
//           transition: 'color 0.3s ease'
//         }} />

//         {/* Clear Button */}
//         {searchValue && (
//           <button
//             onClick={clearSearch}
//             style={{
//               position: 'absolute',
//               right: '20px',
//               top: '50%',
//               transform: 'translateY(-50%)',
//               background: 'none',
//               border: 'none',
//               color: '#999',
//               fontSize: '16px',
//               cursor: 'pointer',
//               padding: '4px',
//               borderRadius: '50%',
//               transition: 'all 0.2s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = '#f0f0f0';
//               e.target.style.color = '#333';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'none';
//               e.target.style.color = '#999';
//             }}
//           >
//             <CloseOutlined />
//           </button>
//         )}
//       </div>

//       {/* Enhanced Filter Buttons */}
//       <div style={{
//         display: 'flex',
//         gap: '8px',
//         paddingRight:"10px",
//         overflowX: 'auto',
//         paddingBottom: '4px',
//         scrollbarWidth: 'none',
//         msOverflowStyle: 'none'
//       }}>
//         {filters.map((filter, index) => (
//           <button
//             key={filter}
//             onClick={() => setActiveFilter(filter)}
//             style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: index === 0 ? '8px' : '6px',
//               padding: '10px 16px',
//               borderRadius: '25px',
//               border: 'none',
//               background: activeFilter === filter 
//                 ? 'linear-gradient(135deg, #333 0%, #555 100%)' 
//                 : '#fff',
//               color: activeFilter === filter ? '#fff' : '#333',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               whiteSpace: 'nowrap',
//               transition: 'all 0.3s ease',
//               boxShadow: activeFilter === filter 
//                 ? '0 4px 15px rgba(0,0,0,0.2)' 
//                 : '0 2px 8px rgba(0,0,0,0.1)',
//               transform: 'translateY(0)'
//             }}
//             onMouseEnter={(e) => {
//               if (activeFilter !== filter) {
//                 e.target.style.transform = 'translateY(-2px)';
//                 e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
//               }
//             }}
//             onMouseLeave={(e) => {
//               if (activeFilter !== filter) {
//                 e.target.style.transform = 'translateY(0)';
//                 e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
//               }
//             }}
//             onTouchStart={(e) => {
//               e.target.style.transform = 'scale(0.95)';
//             }}
//             onTouchEnd={(e) => {
//               e.target.style.transform = 'scale(1)';
//             }}
//           >
//             {index === 0 && <FilterOutlined style={{ fontSize: '14px' }} />}
//             {filter}
//             {index > 0 && <DownOutlined style={{ fontSize: '12px' }} />}
//           </button>
//         ))}
//       </div>

//       {/* Hide scrollbar */}
//       <style>{`
//         div::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SearchHeader;

import React, { useState, useRef, useEffect } from 'react';
import { SearchOutlined, FilterOutlined, DownOutlined, CloseOutlined } from '@ant-design/icons';

const SearchHeader = () => {
  const [activeFilter, setActiveFilter] = useState('All Filters');
  const [searchValue, setSearchValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef(null);

  const filters = ['All Filters', 'Creator', 'Destination', 'Category'];

  const clearSearch = () => {
    setSearchValue('');
    searchRef.current?.focus();
  };

  // Auto-focus search on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchRef.current) {
        searchRef.current.focus();
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
      padding: '60px 16px 20px 16px',
      borderBottom: '1px solid rgba(255,255,255,0.2)'
    }}>
      {/* Enhanced Search Bar */}
      <div style={{
        position: 'relative',
        marginBottom: '20px'
      }}>
        <input
          ref={searchRef}
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          placeholder="Search for a 'Travel Creator' or 'Destination'"
          style={{
            width: '100%',
            padding: '16px 20px 16px 50px',
            paddingRight: searchValue ? '50px' : '20px',
            borderRadius: '30px',
            border: `2px solid ${isSearchFocused ? '#FF5722' : '#FF8A65'}`,
            background: '#fff',
            fontSize: '16px',
            outline: 'none',
            color: '#333',
            transition: 'all 0.3s ease',
            boxShadow: isSearchFocused ? '0 8px 25px rgba(255, 87, 34, 0.15)' : '0 4px 12px rgba(0,0,0,0.1)',
            transform: isSearchFocused ? 'translateY(-2px)' : 'translateY(0)'
          }}
        />
        
        <SearchOutlined style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          color: isSearchFocused ? '#FF5722' : '#999',
          fontSize: '18px',
          transition: 'color 0.3s ease'
        }} />

        {/* Clear Button */}
        {searchValue && (
          <button
            onClick={clearSearch}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              color: '#999',
              fontSize: '16px',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '50%',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#f0f0f0';
              e.target.style.color = '#333';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'none';
              e.target.style.color = '#999';
            }}
          >
            <CloseOutlined />
          </button>
        )}
      </div>

      {/* Filter Buttons - Exact Layout */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        overflowX: 'auto',
        paddingBottom: '4px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        justifyContent: 'flex-start'
      }}>
        {filters.map((filter, index) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '20px',
              border: '1px solid #ddd',
              background: activeFilter === filter 
                ? 'linear-gradient(135deg, #333 0%, #555 100%)' 
                : '#fff',
              color: activeFilter === filter ? '#fff' : '#333',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.3s ease',
              boxShadow: activeFilter === filter 
                ? '0 4px 15px rgba(0,0,0,0.2)' 
                : '0 2px 8px rgba(0,0,0,0.08)',
              transform: 'translateY(0)',
              minWidth: 'fit-content',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== filter) {
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== filter) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
              }
            }}
            onTouchStart={(e) => {
              e.target.style.transform = 'scale(0.98)';
            }}
            onTouchEnd={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            {/* Icon for first filter (All Filters) */}
            {index === 0 && (
              <FilterOutlined style={{ 
                fontSize: '14px',
                marginRight: '2px'
              }} />
            )}
            
            {/* Filter text */}
            <span>{filter}</span>
            
            {/* Dropdown arrow for other filters */}
            {index > 0 && (
              <DownOutlined style={{ 
                fontSize: '11px',
                marginLeft: '2px',
                opacity: 0.7
              }} />
            )}
          </button>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
        
        /* Ensure proper spacing and alignment */
        .filter-container {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Focus states for accessibility */
        button:focus-visible {
          outline: 2px solid #FF5722;
          outline-offset: 2px;
        }
        
        /* Responsive adjustments */
        @media (max-width: 480px) {
          .filter-button {
            padding: 6px 12px;
            fontSize: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchHeader;