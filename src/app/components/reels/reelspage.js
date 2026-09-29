// reelspage.js
import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';
import { LeftOutlined, CloseOutlined, StarFilled, ArrowUpOutlined } from '@ant-design/icons';
import ReelItem from './reelitem';
// import TaggedItemsPage from './TaggedItemsPage';
import TaggedItemsPage from './taggeditems';
import ItemDetails from '../itemdetails';
// import ItemDetails from '../ItemDetails'; // Adjust path as needed
import { reelsData } from './reelsdata';

// Sliding Cards Component
const SlidingCards = ({ cards, onViewAll, onCardClick }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const cardsRef = useRef(null);

  // Touch handlers for card swiping
  const handleTouchStart = (e) => {
    e.stopPropagation();
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.stopPropagation();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const threshold = 50;
    
    if (Math.abs(distance) > threshold) {
      if (distance > 0 && currentCardIndex < cards.length - 2) {
        setCurrentCardIndex(prev => prev + 1);
      } else if (distance < 0 && currentCardIndex > 0) {
        setCurrentCardIndex(prev => prev - 1);
      }
    }
  };

  const maxIndex = Math.max(0, cards.length - 2);

  return (
    <div style={{
      position: 'absolute',
      bottom: '120px',
      left: '0',
      right: '0',
      padding: '0 20px',
      zIndex: 10
    }}>
      {/* View All Button */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '12px'
      }}>
        <button
          onClick={onViewAll}
          style={{
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '6px 12px',
            borderRadius: '15px',
            fontSize: '12px',
            fontWeight: '500',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)'
          }}
        >
          View all ({cards.length})
        </button>
      </div>

      {/* Cards Container */}
      <div style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px'
      }}>
        <div 
          ref={cardsRef}
          style={{
            display: 'flex',
            transform: `translateX(-${currentCardIndex * 50}%)`,
            transition: 'transform 0.3s ease',
            gap: '12px'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              onClick={() => onCardClick(card)}
              style={{
                minWidth: 'calc(50% - 6px)',
                flexShrink: 0,
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Card Background */}
              <div style={{
                height: '120px',
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                {/* Dark Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                  borderRadius: '12px'
                }} />
                
                {/* Rating Badge */}
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '12px',
                  padding: '4px 8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <StarFilled style={{ color: '#FFD700', fontSize: '12px' }} />
                  <span style={{ 
                    fontSize: '12px', 
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    {card.rating}
                  </span>
                </div>

                {/* Card Content */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  color: 'white'
                }}>
                  <h4 style={{
                    margin: '0 0 4px 0',
                    fontSize: '16px',
                    fontWeight: '600',
                    textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                  }}>
                    {card.title}
                  </h4>
                  <p style={{
                    margin: 0,
                    fontSize: '12px',
                    opacity: 0.9,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    📍 {card.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '4px',
        marginTop: '12px'
      }}>
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentCardIndex(index);
            }}
            style={{
              width: currentCardIndex === index ? '20px' : '6px',
              height: '6px',
              borderRadius: '3px',
              border: 'none',
              background: currentCardIndex === index ? 'white' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ReelsPage = ({ onClose, onContinueToTrips, onViewAllTagged, onItemClick }) => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const [reelsToShow, setReelsToShow] = useState([]);
  const [showSeeMore, setShowSeeMore] = useState(false);
  const [currentReelSavedItems, setCurrentReelSavedItems] = useState([]);
  
  const containerRef = useRef(null);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  useEffect(() => {
    // Create infinite loop of reels
    const infiniteReels = [];
    for (let i = 0; i < 3; i++) {
      infiniteReels.push(...reelsData);
    }
    setReelsToShow(infiniteReels);
  }, []);

  // Update saved items whenever current reel changes
  useEffect(() => {
    const currentReel = reelsData[currentReelIndex];
    if (currentReel && currentReel.savedItems) {
      setCurrentReelSavedItems(currentReel.savedItems);
    }
  }, [currentReelIndex]);

  useEffect(() => {
    // Show "See more" button after 3 seconds on first reel
    if (currentReelIndex === 0) {
      const timer = setTimeout(() => {
        setShowSeeMore(true);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowSeeMore(false);
    }
  }, [currentReelIndex]);

  useEffect(() => {
    // Auto-advance reels every 15 seconds
    const interval = setInterval(() => {
      handleNextReel();
    }, 15000);
    return () => clearInterval(interval);
  }, [currentReelIndex]);

  const handleNextReel = () => {
    setCurrentReelIndex(prev => {
      const nextIndex = prev + 1;
      if (nextIndex >= reelsData.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const handlePrevReel = () => {
    setCurrentReelIndex(prev => {
      if (prev <= 0) {
        return reelsData.length - 1;
      }
      return prev - 1;
    });
  };

  // Touch handlers for reel swiping
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartY.current - touchEndY.current;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        handleNextReel();
      } else {
        handlePrevReel();
      }
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      handleNextReel();
    } else {
      handlePrevReel();
    }
  };

  const handleViewAllCards = () => {
    // Pass the current reel's saved items to the parent
    if (onViewAllTagged) {
      onViewAllTagged(currentReelSavedItems);
    }
  };

  const handleCardClick = (card) => {
    // Pass the clicked card to the parent
    if (onItemClick) {
      onItemClick(card);
    }
  };

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        background: '#000',
        overflow: 'hidden',
        maxWidth: '400px',
        margin: '0 auto'
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      {/* Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 20px',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Button 
            type="text" 
            icon={<LeftOutlined />} 
            onClick={onClose}
            style={{ 
              color: 'white',
              fontSize: '18px',
              padding: '8px',
              border: 'none'
            }}
          />
          <div style={{
            color: 'white',
            fontSize: '18px',
            fontWeight: '600'
          }}>
            Reels
          </div>
          <Button 
            type="text" 
            icon={<CloseOutlined />} 
            onClick={onContinueToTrips}
            style={{ 
              color: 'white',
              fontSize: '18px',
              padding: '8px',
              border: 'none'
            }}
          />
        </div>
      </div>

      {/* Reels Container */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        transform: `translateY(-${currentReelIndex * 100}vh)`,
        transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}>
        {reelsToShow.slice(0, reelsData.length + 2).map((reel, index) => (
          <div
            key={`${reel.id}-${index}`}
            style={{
              position: 'absolute',
              top: `${index * 100}vh`,
              width: '100%',
              height: '100vh'
            }}
          >
            <ReelItem 
              reel={reel} 
              isActive={index === currentReelIndex}
            />
          </div>
        ))}
      </div>

      {/* See More Button */}
      {showSeeMore && currentReelIndex === 0 && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 15,
          animation: 'fadeInUp 0.5s ease'
        }}>
          <button
            onClick={() => setShowSeeMore(false)}
            style={{
              background: 'rgba(255,255,255,0.9)',
              color: '#333',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
          >
            See more
            <ArrowUpOutlined style={{ fontSize: '12px' }} />
          </button>
        </div>
      )}

      {/* Sliding Cards Component - Now shows current reel's saved items */}
      <SlidingCards 
        cards={currentReelSavedItems}
        onViewAll={handleViewAllCards}
        onCardClick={handleCardClick}
      />

      {/* Side Indicators */}
      <div style={{
        position: 'fixed',
        right: '8px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 50
      }}>
        {reelsData.map((_, index) => (
          <div
            key={index}
            style={{
              width: '3px',
              height: currentReelIndex === index ? '20px' : '8px',
              borderRadius: '2px',
              background: currentReelIndex === index ? '#FA8C16' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onClick={() => setCurrentReelIndex(index)}
          />
        ))}
      </div>

      {/* Bottom Skip Button */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100
      }}>
        <Button
          onClick={onContinueToTrips}
          style={{
            background: 'rgba(250, 140, 22, 0.9)',
            borderColor: '#FA8C16',
            color: 'white',
            borderRadius: '25px',
            padding: '8px 24px',
            height: '44px',
            fontSize: '14px',
            fontWeight: '600',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          Continue to Trip Planning →
        </Button>
      </div>

      {/* Swipe Hint */}
      <div style={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        color: 'rgba(255,255,255,0.6)',
        fontSize: '12px',
        textAlign: 'center',
        zIndex: 50
      }}>
        <div>↕️</div>
        <div>Swipe</div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ReelsPage;


// import React, { useState, useEffect, useRef } from 'react';
// import { Button } from 'antd';
// import { LeftOutlined, CloseOutlined, StarFilled, ArrowUpOutlined } from '@ant-design/icons';
// import ReelItem from './reelitem';
// import { reelsData } from './reelsdata';

// // Sample cards data for the sliding functionality
// const savedReelsData = [
//   {
//     id: 1,
//     title: "Hotel Hyatt",
//     location: "Hawaii",
//     rating: 4.5,
//     image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
//     type: "hotel"
//   },
//   {
//     id: 2,
//     title: "Scuba Diving",
//     location: "Hawaii", 
//     rating: 4.5,
//     image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
//     type: "activity"
//   },
//   {
//     id: 3,
//     title: "Beach Resort",
//     location: "Hawaii",
//     rating: 4.8,
//     image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop",
//     type: "resort"
//   },
//   {
//     id: 4,
//     title: "Sunset Cruise",
//     location: "Hawaii",
//     rating: 4.7,
//     image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=300&h=200&fit=crop",
//     type: "activity"
//   }
// ];

// const SlidingCards = ({ cards, onViewAll }) => {
//   const [currentCardIndex, setCurrentCardIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const cardsRef = useRef(null);

//   // Touch handlers for card swiping
//   const handleTouchStart = (e) => {
//     e.stopPropagation();
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     e.stopPropagation();
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = (e) => {
//     e.stopPropagation();
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const threshold = 50;
    
//     if (Math.abs(distance) > threshold) {
//       if (distance > 0 && currentCardIndex < cards.length - 2) {
//         // Swipe left - next card
//         setCurrentCardIndex(prev => prev + 1);
//       } else if (distance < 0 && currentCardIndex > 0) {
//         // Swipe right - previous card
//         setCurrentCardIndex(prev => prev - 1);
//       }
//     }
//   };

//   const maxIndex = Math.max(0, cards.length - 2); // Show 2 cards at a time

//   return (
//     <div style={{
//       position: 'absolute',
//       bottom: '120px',
//       left: '0',
//       right: '0',
//       padding: '0 20px',
//       zIndex: 10
//     }}>
//       {/* View All Button */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'flex-end',
//         marginBottom: '12px'
//       }}>
//         <button
//           onClick={onViewAll}
//           style={{
//             background: 'rgba(255,255,255,0.2)',
//             color: 'white',
//             border: '1px solid rgba(255,255,255,0.3)',
//             padding: '6px 12px',
//             borderRadius: '15px',
//             fontSize: '12px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             backdropFilter: 'blur(10px)'
//           }}
//         >
//           View all ({cards.length})
//         </button>
//       </div>

//       {/* Cards Container */}
//       <div style={{
//         position: 'relative',
//         overflow: 'hidden',
//         borderRadius: '12px'
//       }}>
//         <div 
//           ref={cardsRef}
//           style={{
//             display: 'flex',
//             transform: `translateX(-${currentCardIndex * 50}%)`,
//             transition: 'transform 0.3s ease',
//             gap: '12px'
//           }}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={card.id}
//               style={{
//                 minWidth: 'calc(50% - 6px)',
//                 flexShrink: 0,
//                 position: 'relative',
//                 borderRadius: '12px',
//                 overflow: 'hidden',
//                 cursor: 'pointer',
//                 transition: 'transform 0.2s ease'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'scale(1.05)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'scale(1)';
//               }}
//             >
//               {/* Card Background */}
//               <div style={{
//                 height: '120px',
//                 backgroundImage: `url(${card.image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 position: 'relative'
//               }}>
//                 {/* Dark Overlay */}
//                 <div style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
//                   borderRadius: '12px'
//                 }} />
                
//                 {/* Rating Badge */}
//                 <div style={{
//                   position: 'absolute',
//                   top: '8px',
//                   right: '8px',
//                   background: 'rgba(255,255,255,0.9)',
//                   borderRadius: '12px',
//                   padding: '4px 8px',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '4px'
//                 }}>
//                   <StarFilled style={{ color: '#FFD700', fontSize: '12px' }} />
//                   <span style={{ 
//                     fontSize: '12px', 
//                     fontWeight: '600',
//                     color: '#333'
//                   }}>
//                     {card.rating}
//                   </span>
//                 </div>

//                 {/* Card Content */}
//                 <div style={{
//                   position: 'absolute',
//                   bottom: '12px',
//                   left: '12px',
//                   right: '12px',
//                   color: 'white'
//                 }}>
//                   <h4 style={{
//                     margin: '0 0 4px 0',
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     textShadow: '0 1px 2px rgba(0,0,0,0.8)'
//                   }}>
//                     {card.title}
//                   </h4>
//                   <p style={{
//                     margin: 0,
//                     fontSize: '12px',
//                     opacity: 0.9,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '4px'
//                   }}>
//                     📍 {card.location}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '4px',
//         marginTop: '12px'
//       }}>
//         {Array.from({ length: maxIndex + 1 }).map((_, index) => (
//           <button
//             key={index}
//             onClick={(e) => {
//               e.stopPropagation();
//               setCurrentCardIndex(index);
//             }}
//             style={{
//               width: currentCardIndex === index ? '20px' : '6px',
//               height: '6px',
//               borderRadius: '3px',
//               border: 'none',
//               background: currentCardIndex === index ? 'white' : 'rgba(255,255,255,0.4)',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease'
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ReelsPage = ({ onClose, onContinueToTrips }) => {
//   const [currentReelIndex, setCurrentReelIndex] = useState(0);
//   const [reelsToShow, setReelsToShow] = useState([]);
//   const [showSeeMore, setShowSeeMore] = useState(false);
//   const containerRef = useRef(null);
//   const touchStartY = useRef(0);
//   const touchEndY = useRef(0);

//   useEffect(() => {
//     // Create infinite loop of reels
//     const infiniteReels = [];
//     for (let i = 0; i < 3; i++) {
//       infiniteReels.push(...reelsData);
//     }
//     setReelsToShow(infiniteReels);
//   }, []);

//   useEffect(() => {
//     // Show "See more" button after 3 seconds on first reel
//     if (currentReelIndex === 0) {
//       const timer = setTimeout(() => {
//         setShowSeeMore(true);
//       }, 3000);
//       return () => clearTimeout(timer);
//     } else {
//       setShowSeeMore(false);
//     }
//   }, [currentReelIndex]);

//   useEffect(() => {
//     // Auto-advance reels every 15 seconds
//     const interval = setInterval(() => {
//       handleNextReel();
//     }, 15000);

//     return () => clearInterval(interval);
//   }, [currentReelIndex]);

//   const handleNextReel = () => {
//     setCurrentReelIndex(prev => {
//       const nextIndex = prev + 1;
//       if (nextIndex >= reelsData.length) {
//         return 0;
//       }
//       return nextIndex;
//     });
//   };

//   const handlePrevReel = () => {
//     setCurrentReelIndex(prev => {
//       if (prev <= 0) {
//         return reelsData.length - 1;
//       }
//       return prev - 1;
//     });
//   };

//   // Touch handlers for reel swiping
//   const handleTouchStart = (e) => {
//     touchStartY.current = e.touches[0].clientY;
//   };

//   const handleTouchMove = (e) => {
//     touchEndY.current = e.touches[0].clientY;
//   };

//   const handleTouchEnd = () => {
//     const swipeDistance = touchStartY.current - touchEndY.current;
//     const minSwipeDistance = 50;

//     if (Math.abs(swipeDistance) > minSwipeDistance) {
//       if (swipeDistance > 0) {
//         handleNextReel();
//       } else {
//         handlePrevReel();
//       }
//     }
//   };

//   const handleWheel = (e) => {
//     e.preventDefault();
//     if (e.deltaY > 0) {
//       handleNextReel();
//     } else {
//       handlePrevReel();
//     }
//   };

//   const handleViewAllCards = () => {
//     console.log('View all cards clicked');
//     // Add your view all functionality here
//   };

//   return (
//     <div 
//       ref={containerRef}
//       style={{
//         position: 'relative',
//         width: '100%',
//         height: '100vh',
//         background: '#000',
//         overflow: 'hidden',
//         maxWidth: '400px',
//         margin: '0 auto'
//       }}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       onWheel={handleWheel}
//     >
//       {/* Header */}
//       <div style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 100,
//         padding: '16px 20px',
//         background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
//         maxWidth: '400px',
//         margin: '0 auto'
//       }}>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center'
//         }}>
//           <Button 
//             type="text" 
//             icon={<LeftOutlined />} 
//             onClick={onClose}
//             style={{ 
//               color: 'white',
//               fontSize: '18px',
//               padding: '8px',
//               border: 'none'
//             }}
//           />
//           <div style={{
//             color: 'white',
//             fontSize: '18px',
//             fontWeight: '600'
//           }}>
//             Reels
//           </div>
//           <Button 
//             type="text" 
//             icon={<CloseOutlined />} 
//             onClick={onContinueToTrips}
//             style={{ 
//               color: 'white',
//               fontSize: '18px',
//               padding: '8px',
//               border: 'none'
//             }}
//           />
//         </div>
//       </div>

//       {/* Reels Container */}
//       <div style={{
//         position: 'relative',
//         width: '100%',
//         height: '100vh',
//         transform: `translateY(-${currentReelIndex * 100}vh)`,
//         transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
//       }}>
//         {reelsToShow.slice(0, reelsData.length + 2).map((reel, index) => (
//           <div
//             key={`${reel.id}-${index}`}
//             style={{
//               position: 'absolute',
//               top: `${index * 100}vh`,
//               width: '100%',
//               height: '100vh'
//             }}
//           >
//             <ReelItem 
//               reel={reel} 
//               isActive={index === currentReelIndex}
//             />
//           </div>
//         ))}
//       </div>

//       {/* See More Button */}
//       {showSeeMore && currentReelIndex === 0 && (
//         <div style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 15,
//           animation: 'fadeInUp 0.5s ease'
//         }}>
//           <button
//             onClick={() => setShowSeeMore(false)}
//             style={{
//               background: 'rgba(255,255,255,0.9)',
//               color: '#333',
//               border: 'none',
//               padding: '12px 20px',
//               borderRadius: '25px',
//               fontSize: '14px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px',
//               backdropFilter: 'blur(10px)',
//               boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
//               transition: 'all 0.3s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'scale(1.05)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'scale(1)';
//             }}
//           >
//             See more
//             <ArrowUpOutlined style={{ fontSize: '12px' }} />
//           </button>
//         </div>
//       )}

//       {/* Sliding Cards Component */}
//       <SlidingCards 
//         cards={savedReelsData}
//         onViewAll={handleViewAllCards}
//       />

//       {/* Side Indicators */}
//       <div style={{
//         position: 'fixed',
//         right: '8px',
//         top: '50%',
//         transform: 'translateY(-50%)',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '8px',
//         zIndex: 50
//       }}>
//         {reelsData.map((_, index) => (
//           <div
//             key={index}
//             style={{
//               width: '3px',
//               height: currentReelIndex === index ? '20px' : '8px',
//               borderRadius: '2px',
//               background: currentReelIndex === index ? '#FA8C16' : 'rgba(255,255,255,0.4)',
//               transition: 'all 0.3s ease',
//               cursor: 'pointer'
//             }}
//             onClick={() => setCurrentReelIndex(index)}
//           />
//         ))}
//       </div>

//       {/* Bottom Skip Button */}
//       <div style={{
//         position: 'fixed',
//         bottom: '30px',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         zIndex: 100
//       }}>
//         <Button
//           onClick={onContinueToTrips}
//           style={{
//             background: 'rgba(250, 140, 22, 0.9)',
//             borderColor: '#FA8C16',
//             color: 'white',
//             borderRadius: '25px',
//             padding: '8px 24px',
//             height: '44px',
//             fontSize: '14px',
//             fontWeight: '600',
//             backdropFilter: 'blur(10px)',
//             border: '1px solid rgba(255,255,255,0.2)'
//           }}
//         >
//           Continue to Trip Planning →
//         </Button>
//       </div>

//       {/* Swipe Hint */}
//       <div style={{
//         position: 'fixed',
//         bottom: '100px',
//         right: '20px',
//         color: 'rgba(255,255,255,0.6)',
//         fontSize: '12px',
//         textAlign: 'center',
//         zIndex: 50
//       }}>
//         <div>↕️</div>
//         <div>Swipe</div>
//       </div>

//       {/* CSS Animations */}
//       <style>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translate(-50%, -40%);
//           }
//           to {
//             opacity: 1;
//             transform: translate(-50%, -50%);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ReelsPage;


// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import { 
//   HeartOutlined, 
//   MessageOutlined, 
//   ShareAltOutlined, 
//   HeartFilled, 
//   MoreOutlined,
//   ArrowLeftOutlined,
//   EyeOutlined
// } from '@ant-design/icons';
// // import BottomNavigation from './BottomNavigation';

// // Enhanced reels data with high-quality images
// const reelsData = [
//   {
//     id: 1,
//     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=700&fit=crop&crop=center",
//     thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
//     title: "Backpacking in Hawaii",
//     location: "Hawaii",
//     likes: "2.1K",
//     comments: "89",
//     shares: "34",
//     views: "15.2K",
//     description: "Discover the hidden gems of Hawaii! 🌺 Crystal clear waters and stunning sunsets await you. #HawaiiVibes #TravelGoals",
//     creator: {
//       name: "@travelwithemma",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b131?w=40&h=40&fit=crop&crop=face"
//     }
//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=700&fit=crop&crop=center",
//     thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop",
//     title: "Swiss Alps Magic",
//     location: "Zermatt, Switzerland",
//     likes: "3.7K",
//     comments: "156", 
//     shares: "67",
//     views: "22.8K",
//     description: "Morning views from the Matterhorn! ⛰️ Nothing beats waking up to this incredible scenery. #SwissAlps #Mountains",
//     creator: {
//       name: "@alpine_explorer",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
//     }
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=700&fit=crop&crop=center",
//     thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop",
//     title: "Tokyo Street Food Tour",
//     location: "Tokyo, Japan",
//     likes: "4.2K",
//     comments: "203",
//     shares: "89",
//     views: "31.5K",
//     description: "Street food heaven in Shibuya! 🍜 Every corner has something amazing to try. #TokyoEats #StreetFood",
//     creator: {
//       name: "@foodie_adventures",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
//     }
//   },
//   {
//     id: 4,
//     image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400&h=700&fit=crop&crop=center",
//     thumbnail: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400&h=600&fit=crop",
//     title: "Santorini Sunset",
//     location: "Santorini, Greece",
//     likes: "5.8K",
//     comments: "287",
//     shares: "142",
//     views: "45.3K",
//     description: "Most beautiful sunset in the world! 🌅 Santorini never fails to amaze. Book your trip now! #Santorini #Greece",
//     creator: {
//       name: "@sunset_chaser",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
//     }
//   },
//   {
//     id: 5,
//     image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=700&fit=crop&crop=center",
//     thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop",
//     title: "Maldives Paradise",
//     location: "Maldives",
//     likes: "6.3K",
//     comments: "198",
//     shares: "234",
//     views: "38.9K",
//     description: "Crystal clear waters and overwater bungalows! 🏝️ Paradise found in the Maldives. #Maldives #Paradise",
//     creator: {
//       name: "@island_hopper",
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
//     }
//   }
// ];

// const ReelItem = ({ reel, isActive, onLike }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [showInteractionHint, setShowInteractionHint] = useState(true);

//   // Show interaction hint for a few seconds when reel becomes active
//   useEffect(() => {
//     if (isActive) {
//       setShowInteractionHint(true);
//       const timer = setTimeout(() => {
//         setShowInteractionHint(false);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [isActive]);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     onLike && onLike(reel.id);
//   };

//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   const handleImageClick = () => {
//     // Add any click interaction here (e.g., show description, zoom, etc.)
//     console.log('Image clicked:', reel.title);
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       width: '100%',
//       height: '100vh',
//       background: '#000',
//       overflow: 'hidden',
//       cursor: 'pointer'
//     }}>
//       {/* Main Image */}
//       <div 
//         style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundImage: `url(${reel.image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           transition: 'transform 0.3s ease'
//         }}
//         onClick={handleImageClick}
//       >
//         {/* Loading overlay */}
//         {!imageLoaded && (
//           <div style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             background: '#111',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'white',
//             fontSize: '24px'
//           }}>
//             Loading...
//           </div>
//         )}
        
//         {/* Hidden image for load detection */}
//         <img
//           src={reel.image}
//           alt={reel.title}
//           style={{ display: 'none' }}
//           onLoad={handleImageLoad}
//           onError={handleImageLoad}
//         />
//       </div>

//       {/* Interaction Hint */}
//       {showInteractionHint && isActive && (
//         <div style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           color: 'white',
//           fontSize: '48px',
//           opacity: 0.6,
//           transition: 'opacity 0.5s ease',
//           zIndex: 2,
//           pointerEvents: 'none',
//           textShadow: '0 0 20px rgba(0,0,0,0.8)',
//           animation: 'pulse 2s infinite'
//         }}>
//           <EyeOutlined />
//         </div>
//       )}

//       {/* Back Button */}
//       <button style={{
//         position: 'absolute',
//         top: '50px',
//         left: '20px',
//         background: 'rgba(0,0,0,0.4)',
//         border: 'none',
//         borderRadius: '50%',
//         width: '44px',
//         height: '44px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: 'white',
//         fontSize: '20px',
//         cursor: 'pointer',
//         zIndex: 10,
//         backdropFilter: 'blur(10px)',
//         transition: 'all 0.3s ease'
//       }}
//       onMouseEnter={(e) => {
//         e.target.style.background = 'rgba(0,0,0,0.6)';
//         e.target.style.transform = 'scale(1.1)';
//       }}
//       onMouseLeave={(e) => {
//         e.target.style.background = 'rgba(0,0,0,0.4)';
//         e.target.style.transform = 'scale(1)';
//       }}>
//         <ArrowLeftOutlined />
//       </button>

//       {/* Views Counter */}
//       <div style={{
//         position: 'absolute',
//         top: '50px',
//         right: '20px',
//         background: 'rgba(0,0,0,0.6)',
//         color: 'white',
//         padding: '8px 12px',
//         borderRadius: '20px',
//         fontSize: '12px',
//         fontWeight: '600',
//         zIndex: 10,
//         backdropFilter: 'blur(10px)',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '4px'
//       }}>
//         <EyeOutlined style={{ fontSize: '14px' }} />
//         {reel.views}
//       </div>

//       {/* Right Side Actions */}
//       <div style={{
//         position: 'absolute',
//         right: '16px',
//         bottom: '180px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '24px',
//         zIndex: 10
//       }}>
//         {/* Creator Avatar */}
//         <div style={{
//           position: 'relative',
//           width: '50px',
//           height: '50px'
//         }}>
//           <img
//             src={reel.creator.avatar}
//             alt={reel.creator.name}
//             style={{
//               width: '100%',
//               height: '100%',
//               borderRadius: '50%',
//               border: '3px solid white',
//               objectFit: 'cover',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
//             }}
//           />
//           <div style={{
//             position: 'absolute',
//             bottom: '-8px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             width: '22px',
//             height: '22px',
//             borderRadius: '50%',
//             background: '#FF6B35',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             border: '2px solid white',
//             fontSize: '14px',
//             color: 'white',
//             fontWeight: '700',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
//             cursor: 'pointer',
//             transition: 'transform 0.2s ease'
//           }}
//           onMouseEnter={(e) => e.target.style.transform = 'translateX(-50%) scale(1.1)'}
//           onMouseLeave={(e) => e.target.style.transform = 'translateX(-50%) scale(1)'}
//           >
//             +
//           </div>
//         </div>

//         {/* Like Button */}
//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '6px'
//         }}>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               handleLike();
//             }}
//             style={{
//               background: 'none',
//               border: 'none',
//               color: isLiked ? '#ff1744' : 'white',
//               fontSize: '32px',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               transform: isLiked ? 'scale(1.2)' : 'scale(1)',
//               filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'
//             }}
//             onMouseEnter={(e) => {
//               if (!isLiked) e.target.style.transform = 'scale(1.1)';
//             }}
//             onMouseLeave={(e) => {
//               if (!isLiked) e.target.style.transform = 'scale(1)';
//             }}
//           >
//             {isLiked ? <HeartFilled /> : <HeartOutlined />}
//           </button>
//           <span style={{
//             color: 'white',
//             fontSize: '13px',
//             fontWeight: '600',
//             textShadow: '0 1px 2px rgba(0,0,0,0.8)'
//           }}>
//             {isLiked ? (parseInt(reel.likes.replace('K', '000').replace('.', '')) + 1).toString().replace('000', 'K') : reel.likes}
//           </span>
//         </div>

//         {/* Comment Button */}
//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '6px'
//         }}>
//           <button 
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: 'none',
//               border: 'none',
//               color: 'white',
//               fontSize: '32px',
//               cursor: 'pointer',
//               filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
//               transition: 'transform 0.2s ease'
//             }}
//             onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
//             onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
//           >
//             <MessageOutlined />
//           </button>
//           <span style={{
//             color: 'white',
//             fontSize: '13px',
//             fontWeight: '600',
//             textShadow: '0 1px 2px rgba(0,0,0,0.8)'
//           }}>
//             {reel.comments}
//           </span>
//         </div>

//         {/* Share Button */}
//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '6px'
//         }}>
//           <button 
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: 'none',
//               border: 'none',
//               color: 'white',
//               fontSize: '32px',
//               cursor: 'pointer',
//               filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
//               transition: 'transform 0.2s ease'
//             }}
//             onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
//             onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
//           >
//             <ShareAltOutlined />
//           </button>
//           <span style={{
//             color: 'white',
//             fontSize: '13px',
//             fontWeight: '600',
//             textShadow: '0 1px 2px rgba(0,0,0,0.8)'
//           }}>
//             {reel.shares}
//           </span>
//         </div>

//         {/* More Button */}
//         <button 
//           onClick={(e) => e.stopPropagation()}
//           style={{
//             background: 'none',
//             border: 'none',
//             color: 'white',
//             fontSize: '28px',
//             cursor: 'pointer',
//             filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
//             transition: 'transform 0.2s ease'
//           }}
//           onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
//           onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
//         >
//           <MoreOutlined />
//         </button>
//       </div>

//       {/* Bottom Content */}
//       <div style={{
//         position: 'absolute',
//         bottom: '100px',
//         left: '0',
//         right: '80px',
//         padding: '20px',
//         zIndex: 10,
//         background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
//       }}>
//         {/* Creator Info */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px',
//           marginBottom: '12px'
//         }}>
//           <span style={{
//             color: 'white',
//             fontSize: '17px',
//             fontWeight: '600',
//             textShadow: '0 1px 2px rgba(0,0,0,0.8)'
//           }}>
//             {reel.creator.name}
//           </span>
//           <button 
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: 'rgba(255,255,255,0.2)',
//               color: 'white',
//               border: '1px solid rgba(255,255,255,0.3)',
//               padding: '6px 14px',
//               borderRadius: '6px',
//               fontSize: '13px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               backdropFilter: 'blur(10px)',
//               transition: 'all 0.2s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255,255,255,0.3)';
//               e.target.style.transform = 'scale(1.05)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255,255,255,0.2)';
//               e.target.style.transform = 'scale(1)';
//             }}
//           >
//             Follow
//           </button>
//         </div>

//         {/* Title */}
//         <h3 style={{
//           color: 'white',
//           fontSize: '22px',
//           fontWeight: '700',
//           margin: '0 0 10px 0',
//           lineHeight: '1.3',
//           textShadow: '0 2px 4px rgba(0,0,0,0.8)'
//         }}>
//           {reel.title}
//         </h3>

//         {/* Location */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           marginBottom: '16px'
//         }}>
//           <span style={{
//             color: 'rgba(255,255,255,0.9)',
//             fontSize: '15px',
//             textShadow: '0 1px 2px rgba(0,0,0,0.8)'
//           }}>
//             📍 {reel.location}
//           </span>
//         </div>

//         {/* Rating Stars */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '4px',
//           marginBottom: '16px'
//         }}>
//           {[1,2,3,4,5].map((star) => (
//             <span key={star} style={{ color: '#FFD700', fontSize: '18px' }}>⭐</span>
//           ))}
//           <span style={{ 
//             color: 'white', 
//             fontSize: '15px', 
//             marginLeft: '8px',
//             textShadow: '0 1px 2px rgba(0,0,0,0.8)'
//           }}>
//             4.5
//           </span>
//         </div>

//         {/* Thumbnail Previews */}
//         <div style={{
//           display: 'flex',
//           gap: '10px',
//           marginBottom: '16px'
//         }}>
//           {reelsData.slice(0, 2).map((item, index) => (
//             <div key={index} style={{
//               position: 'relative',
//               width: '65px',
//               height: '85px',
//               borderRadius: '10px',
//               overflow: 'hidden',
//               border: '2px solid white',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
//               cursor: 'pointer',
//               transition: 'transform 0.2s ease'
//             }}
//             onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//             onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
//             >
//               <img
//                 src={item.thumbnail}
//                 alt={item.title}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover'
//                 }}
//               />
//               <div style={{
//                 position: 'absolute',
//                 bottom: '4px',
//                 right: '4px',
//                 background: 'rgba(0,0,0,0.8)',
//                 color: 'white',
//                 fontSize: '9px',
//                 padding: '2px 4px',
//                 borderRadius: '4px',
//                 fontWeight: '600'
//               }}>
//                 4.5⭐
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Action Buttons */}
//         <div style={{
//           display: 'flex',
//           gap: '12px'
//         }}>
//           <button 
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: 'rgba(255,255,255,0.95)',
//               color: '#333',
//               border: 'none',
//               padding: '10px 18px',
//               borderRadius: '22px',
//               fontSize: '13px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//               transition: 'all 0.2s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'scale(1.05)';
//               e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'scale(1)';
//               e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
//             }}
//           >
//             See more
//           </button>
//           <button 
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: 'rgba(255,255,255,0.2)',
//               color: 'white',
//               border: '1px solid rgba(255,255,255,0.4)',
//               padding: '10px 18px',
//               borderRadius: '22px',
//               fontSize: '13px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               backdropFilter: 'blur(10px)',
//               transition: 'all 0.2s ease'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = 'rgba(255,255,255,0.3)';
//               e.target.style.transform = 'scale(1.05)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = 'rgba(255,255,255,0.2)';
//               e.target.style.transform = 'scale(1)';
//             }}
//           >
//             View all (3)
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ImageReelsPage = () => {
//   const [currentReelIndex, setCurrentReelIndex] = useState(0);
//   const [activeTab, setActiveTab] = useState('discover');
//   const [isTransitioning, setIsTransitioning] = useState(false);
  
//   // Touch handling
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
  
//   const containerRef = useRef(null);
//   const transitionTimeoutRef = useRef(null);

//   const reelCount = reelsData.length;

//   // Touch handlers with better sensitivity
//   const handleTouchStart = useCallback((e) => {
//     setTouchStart(e.targetTouches[0].clientY);
//     setTouchEnd(e.targetTouches[0].clientY);
//     setIsDragging(false);
//   }, []);

//   const handleTouchMove = useCallback((e) => {
//     setTouchEnd(e.targetTouches[0].clientY);
//     setIsDragging(true);
//   }, []);

//   const handleTouchEnd = useCallback(() => {
//     if (!touchStart || !touchEnd || !isDragging) return;
    
//     const distance = touchStart - touchEnd;
//     const threshold = 50; // Minimum swipe distance
    
//     if (Math.abs(distance) < threshold) return;
    
//     if (isTransitioning) return;

//     setIsTransitioning(true);
    
//     if (distance > 0) {
//       // Swipe up - next reel
//       setCurrentReelIndex(prev => (prev + 1) % reelCount);
//     } else {
//       // Swipe down - previous reel
//       setCurrentReelIndex(prev => (prev - 1 + reelCount) % reelCount);
//     }

//     // Reset transition state
//     clearTimeout(transitionTimeoutRef.current);
//     transitionTimeoutRef.current = setTimeout(() => {
//       setIsTransitioning(false);
//     }, 500);
//   }, [touchStart, touchEnd, isDragging, isTransitioning, reelCount]);

//   // Keyboard navigation for testing
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === 'ArrowUp' && !isTransitioning) {
//         setIsTransitioning(true);
//         setCurrentReelIndex(prev => (prev - 1 + reelCount) % reelCount);
//         setTimeout(() => setIsTransitioning(false), 500);
//       } else if (e.key === 'ArrowDown' && !isTransitioning) {
//         setIsTransitioning(true);
//         setCurrentReelIndex(prev => (prev + 1) % reelCount);
//         setTimeout(() => setIsTransitioning(false), 500);
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [isTransitioning, reelCount]);

//   const handleLike = useCallback((reelId) => {
//     console.log('Liked reel:', reelId);
//     // Here you would typically update the like count in your state/database
//   }, []);

//   return (
//     <div style={{
//       position: 'relative',
//       width: '100%',
//       height: '100vh',
//       maxWidth: '400px',
//       margin: '0 auto',
//       overflow: 'hidden',
//       background: '#000',
//       userSelect: 'none'
//     }}>
//       {/* Reels Container */}
//       <div
//         ref={containerRef}
//         style={{
//           position: 'relative',
//           width: '100%',
//           height: '100%',
//           transform: `translateY(-${currentReelIndex * 100}vh)`,
//           transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
//         }}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         {reelsData.map((reel, index) => (
//           <div
//             key={`${reel.id}-${index}`}
//             style={{
//               position: 'absolute',
//               top: `${index * 100}vh`,
//               width: '100%',
//               height: '100vh'
//             }}
//           >
//             <ReelItem 
//               reel={reel} 
//               isActive={index === currentReelIndex}
//               onLike={handleLike}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Scroll Indicators */}
//       <div style={{
//         position: 'absolute',
//         right: '12px',
//         top: '50%',
//         transform: 'translateY(-50%)',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '8px',
//         zIndex: 20
//       }}>
//         {reelsData.map((_, index) => (
//           <div
//             key={index}
//             style={{
//               width: '4px',
//               height: currentReelIndex === index ? '28px' : '12px',
//               borderRadius: '2px',
//               background: currentReelIndex === index ? 'white' : 'rgba(255,255,255,0.5)',
//               transition: 'all 0.3s ease',
//               boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
//             }}
//           />
//         ))}
//       </div>

//       {/* Bottom Navigation */}
      

//       {/* Swipe Hint (only show initially) */}
     
      
//       {/* CSS Animations */}
//       <style>{`
//         @keyframes fadeInOut {
//           0%, 100% { opacity: 0; }
//           50% { opacity: 1; }
//         }
        
//         @keyframes pulse {
//           0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
//           50% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
//         }
        
//         /* Disable text selection */
//         * {
//           -webkit-user-select: none;
//           -moz-user-select: none;
//           -ms-user-select: none;
//           user-select: none;
//         }
        
//         /* Smooth scrolling performance */
//         .reels-container {
//           will-change: transform;
//           backface-visibility: hidden;
//           perspective: 1000px;
//         }
        
//         /* Hover effects */
//         button:hover {
//           transition: all 0.2s ease;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ImageReelsPage;



