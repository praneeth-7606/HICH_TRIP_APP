import React, { useState, useEffect, useRef } from 'react';
import { HeartOutlined, HeartFilled, SoundOutlined, LoadingOutlined } from '@ant-design/icons';

const PickedForYou = ({ experiences }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [savedItems, setSavedItems] = useState(new Set());
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % experiences.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [experiences.length]);

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

    if (isLeftSwipe) {
      setCurrentSlide(prev => (prev + 1) % experiences.length);
    }
    if (isRightSwipe) {
      setCurrentSlide(prev => (prev - 1 + experiences.length) % experiences.length);
    }
  };

  const toggleSave = (id) => {
    const newSaved = new Set(savedItems);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedItems(newSaved);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (isLoading) {
    return (
      <div style={{
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '32px 0'
      }}>
        <LoadingOutlined style={{ fontSize: '32px', color: '#FF5722' }} />
      </div>
    );
  }

  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{
        margin: '0 0 20px 0',
        fontSize: 'clamp(18px, 4.5vw, 22px)',
        fontWeight: '600',
        color: '#333',
        padding: '0 20px'
      }}>
        Picked for you
      </h3>

      <div
        ref={containerRef}
        style={{
          overflow: 'hidden',
          position: 'relative'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Carousel Container - Shows ONE card per slide */}
        <div style={{
          display: 'flex',
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}>
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              style={{
                minWidth: '100%', // Each card takes full width
                flexShrink: 0,
                padding: '0 20px', // 20px gap on sides
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              {/* Card */}
              <div style={{
                borderRadius: 'clamp(16px, 4vw, 20px)',
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '360px', // Maximum card width
                margin: '0 auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
              }}>
                
                {/* Image Container */}
                <div style={{
                  position: 'relative',
                  height: 'clamp(350px, 55vh, 450px)', // Responsive height
                  overflow: 'hidden'
                }}>
                  <img
                    src={experience.image}
                    alt={experience.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/400x300/f0f0f0/999999?text=Image+Not+Found';
                    }}
                  />
                  
                  {/* Sound Button Left */}
                  <button 
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      width: 'clamp(42px, 9vw, 46px)',
                      height: 'clamp(42px, 9vw, 46px)',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.95)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#333',
                      fontSize: 'clamp(18px, 4.5vw, 20px)',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                      backdropFilter: 'blur(10px)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.15)';
                      e.target.style.background = '#FF5722';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.background = 'rgba(255,255,255,0.95)';
                      e.target.style.color = '#333';
                    }}
                    aria-label="Play sound"
                  >
                    <SoundOutlined />
                  </button>

                  {/* Creator Badge Center */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '25px',
                    padding: '10px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 'clamp(14px, 3.5vw, 16px)',
                    fontWeight: '600',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                    backdropFilter: 'blur(10px)',
                    maxWidth: '65%',
                    transition: 'all 0.3s ease'
                  }}>
                    <img
                      src={experience.creator.avatar}
                      alt={experience.creator.username}
                      style={{
                        width: 'clamp(26px, 6.5vw, 30px)',
                        height: 'clamp(26px, 6.5vw, 30px)',
                        borderRadius: '50%',
                        marginRight: '10px',
                        objectFit: 'cover'
                      }}
                      loading="lazy"
                    />
                    <span style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}>
                      {experience.creator.username}
                    </span>
                  </div>

                  {/* Sound Button Right */}
                  <button style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: 'clamp(42px, 9vw, 46px)',
                    height: 'clamp(42px, 9vw, 46px)',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.95)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#333',
                    fontSize: 'clamp(18px, 4.5vw, 20px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.15)';
                    e.target.style.background = '#FF5722';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.background = 'rgba(255,255,255,0.95)';
                    e.target.style.color = '#333';
                  }}
                  aria-label="Audio settings">
                    <SoundOutlined />
                  </button>

                  {/* Bottom Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3) 50%, transparent)',
                    padding: 'clamp(30px, 8vw, 50px) 24px 24px 24px',
                    color: '#fff'
                  }}>
                    
                    
                    <h4 style={{
                      margin: '0 0 16px 0',
                      fontSize: 'clamp(22px, 6.5vw, 28px)',
                      fontWeight: '700',
                      lineHeight: '1.2',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                      {experience.title}
                    </h4>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '16px',
                      gap: '16px'
                    }}>
                      <p style={{
                        margin: 0,
                        fontSize: 'clamp(14px, 3.5vw, 16px)',
                        display: 'flex',
                        alignItems: 'center',
                        flex: 1,
                        fontWeight: '500'
                      }}>
                        📍 {experience.location}
                      </p>
                      
                      {/* Heart Button */}
                      <button 
                        onClick={() => toggleSave(experience.id)}
                        style={{
                          background: savedItems.has(experience.id) 
                            ? 'rgba(255, 87, 34, 0.95)' 
                            : 'rgba(255,255,255,0.25)',
                          border: `2px solid ${savedItems.has(experience.id) ? '#FF5722' : 'rgba(255,255,255,0.4)'}`,
                          borderRadius: '50%',
                          width: 'clamp(48px, 11vw, 52px)',
                          height: 'clamp(48px, 11vw, 52px)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: savedItems.has(experience.id) ? 'white' : '#fff',
                          fontSize: 'clamp(20px, 5vw, 22px)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          flexShrink: 0,
                          backdropFilter: 'blur(10px)'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.15)';
                          e.target.style.boxShadow = '0 8px 25px rgba(255, 87, 34, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                          e.target.style.boxShadow = 'none';
                        }}
                        aria-label={savedItems.has(experience.id) ? 'Remove from saved' : 'Save item'}
                      >
                        {savedItems.has(experience.id) ? <HeartFilled /> : <HeartOutlined />}
                      </button>
                    </div>
                    
                    {/* Profile Pictures and Booking Info */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '2px',
                        marginRight: '10px'
                      }}>
                        {[
                          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face",
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=30&h=30&fit=crop&crop=face",
                          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=30&h=30&fit=crop&crop=face"
                        ].map((src, idx) => (
                          <img
                            key={idx}
                            src={src}
                            alt={`User ${idx + 1}`}
                            style={{
                              width: 'clamp(26px, 6.5vw, 32px)',
                              height: 'clamp(26px, 6.5vw, 32px)',
                              borderRadius: '50%',
                              border: '2px solid white',
                              marginLeft: idx > 0 ? '-8px' : '0',
                              objectFit: 'cover',
                              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                            }}
                            loading="lazy"
                          />
                        ))}
                      </div>
                      <span style={{
                        fontSize: 'clamp(13px, 3.2vw, 15px)',
                        fontWeight: '600',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                      }}>
                        {experience.bookings}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '24px',
        padding: '0 20px'
      }}>
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '28px' : '10px',
              height: '10px',
              borderRadius: '5px',
              border: 'none',
              background: currentSlide === index ? '#FF5722' : '#ddd',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              opacity: currentSlide === index ? 1 : 0.6,
              boxShadow: currentSlide === index ? '0 2px 8px rgba(255, 87, 34, 0.3)' : 'none'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Indicator */}
      <div style={{
        textAlign: 'center',
        marginTop: '12px',
        fontSize: 'clamp(12px, 3vw, 14px)',
        color: '#666',
        fontWeight: '500'
      }}>
        {currentSlide + 1} of {experiences.length}
      </div>

      {/* Swipe Hint for Mobile */}
      <div style={{
        textAlign: 'center',
        marginTop: '8px',
        fontSize: '11px',
        color: '#999',
        display: typeof window !== 'undefined' && window.innerWidth <= 768 ? 'block' : 'none'
      }}>
       
      </div>
    </div>
  );
};

export default PickedForYou;


// import React, { useState, useEffect, useRef } from 'react';
// import { HeartOutlined, HeartFilled, SoundOutlined, LoadingOutlined } from '@ant-design/icons';

// const PickedForYou = ({ experiences }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [savedItems, setSavedItems] = useState(new Set());
//   const [touchStart, setTouchStart] = useState(0);
//   const [touchEnd, setTouchEnd] = useState(0);
//   const containerRef = useRef(null);

//   // Auto-play functionality
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide(prev => (prev + 1) % experiences.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, [experiences.length]);

//   // Touch handlers for swipe gestures
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStart || !touchEnd) return;
    
//     const distance = touchStart - touchEnd;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       setCurrentSlide(prev => (prev + 1) % experiences.length);
//     }
//     if (isRightSwipe) {
//       setCurrentSlide(prev => (prev - 1 + experiences.length) % experiences.length);
//     }
//   };

//   const toggleSave = (id) => {
//     const newSaved = new Set(savedItems);
//     if (newSaved.has(id)) {
//       newSaved.delete(id);
//     } else {
//       newSaved.add(id);
//     }
//     setSavedItems(newSaved);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   if (isLoading) {
//     return (
//       <div style={{
//         height: 'clamp(320px, 60vh, 400px)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         margin: '32px 0'
//       }}>
//         <LoadingOutlined style={{ fontSize: '32px', color: '#FF5722' }} />
//       </div>
//     );
//   }

//   return (
//     <div style={{ marginBottom: '32px' }}>
//       <h3 style={{
//         margin: '0 0 20px 0',
//         fontSize: 'clamp(18px, 4.5vw, 22px)',
//         fontWeight: '600',
//         color: '#333',
//         padding: '0 16px'
//       }}>
//         Picked for you
//       </h3>

//       <div
//         ref={containerRef}
//         style={{
//           overflow: 'hidden',
//           position: 'relative',
//           width: '100%'
//         }}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div style={{
//           display: 'flex',
//           transform: `translateX(-${currentSlide * 100}%)`,
//           transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
//           width: `${experiences.length * 100}%`
//         }}>
//           {experiences.map((experience, index) => (
//             <div
//               key={experience.id}
//               style={{
//                 width: `${100 / experiences.length}%`,
//                 flexShrink: 0,
//                 padding: '0 16px',
//                 boxSizing: 'border-box',
//                 display: 'flex',
//                 justifyContent: 'center'
//               }}
//             >
//               <div style={{
//                 borderRadius: 'clamp(12px, 3vw, 18px)',
//                 overflow: 'hidden',
//                 background: '#fff',
//                 boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
//                 position: 'relative',
//                 transition: 'transform 0.3s ease',
//                 cursor: 'pointer',
//                 width: '100%',
//                 maxWidth: '400px',
//                 margin: '0 auto'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = 'translateY(-2px)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = 'translateY(0)';
//               }}>
//                 <div style={{
//                   position: 'relative',
//                   height: 'clamp(280px, 55vh, 350px)',
//                   overflow: 'hidden'
//                 }}>
//                   <img
//                     src={experience.image}
//                     alt={experience.title}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover',
//                       transition: 'transform 0.3s ease'
//                     }}
//                     loading={index === 0 ? 'eager' : 'lazy'}
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/400x300/f0f0f0/999999?text=Image+Not+Found';
//                     }}
//                   />
                  
//                   {/* Sound Button Left */}
//                   <button 
//                     style={{
//                       position: 'absolute',
//                       top: '12px',
//                       left: '12px',
//                       width: 'clamp(36px, 7vw, 40px)',
//                       height: 'clamp(36px, 7vw, 40px)',
//                       borderRadius: '50%',
//                       background: 'rgba(255,255,255,0.95)',
//                       border: 'none',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: '#333',
//                       fontSize: 'clamp(14px, 3.5vw, 16px)',
//                       boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
//                       backdropFilter: 'blur(10px)',
//                       cursor: 'pointer',
//                       transition: 'all 0.3s ease'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.target.style.transform = 'scale(1.1)';
//                       e.target.style.background = '#FF5722';
//                       e.target.style.color = 'white';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.target.style.transform = 'scale(1)';
//                       e.target.style.background = 'rgba(255,255,255,0.95)';
//                       e.target.style.color = '#333';
//                     }}
//                     aria-label="Play sound"
//                   >
//                     <SoundOutlined />
//                   </button>

//                   {/* Creator Badge Center */}
//                   <div style={{
//                     position: 'absolute',
//                     top: '12px',
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                     background: 'rgba(255,255,255,0.95)',
//                     borderRadius: '20px',
//                     padding: '6px 12px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     fontSize: 'clamp(12px, 3vw, 14px)',
//                     fontWeight: '500',
//                     boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
//                     backdropFilter: 'blur(10px)',
//                     maxWidth: '65%',
//                     transition: 'all 0.3s ease'
//                   }}>
//                     <img
//                       src={experience.creator.avatar}
//                       alt={experience.creator.username}
//                       style={{
//                         width: 'clamp(20px, 5vw, 24px)',
//                         height: 'clamp(20px, 5vw, 24px)',
//                         borderRadius: '50%',
//                         marginRight: '6px',
//                         objectFit: 'cover'
//                       }}
//                       loading="lazy"
//                     />
//                     <span style={{
//                       overflow: 'hidden',
//                       textOverflow: 'ellipsis',
//                       whiteSpace: 'nowrap'
//                     }}>
//                       {experience.creator.username}
//                     </span>
//                   </div>

//                   {/* Sound Button Right */}
//                   <button style={{
//                     position: 'absolute',
//                     top: '12px',
//                     right: '12px',
//                     width: 'clamp(36px, 7vw, 40px)',
//                     height: 'clamp(36px, 7vw, 40px)',
//                     borderRadius: '50%',
//                     background: 'rgba(255,255,255,0.95)',
//                     border: 'none',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: '#333',
//                     fontSize: 'clamp(14px, 3.5vw, 16px)',
//                     boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
//                     backdropFilter: 'blur(10px)',
//                     cursor: 'pointer',
//                     transition: 'all 0.3s ease'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = 'scale(1.1)';
//                     e.target.style.background = '#FF5722';
//                     e.target.style.color = 'white';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = 'scale(1)';
//                     e.target.style.background = 'rgba(255,255,255,0.95)';
//                     e.target.style.color = '#333';
//                   }}
//                   aria-label="Audio settings">
//                     <SoundOutlined />
//                   </button>

//                   {/* Bottom Overlay */}
//                   <div style={{
//                     position: 'absolute',
//                     bottom: 0,
//                     left: 0,
//                     right: 0,
//                     background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
//                     padding: 'clamp(20px, 5vw, 30px) 16px 14px 16px',
//                     color: '#fff'
//                   }}>
//                     <p style={{
//                       margin: '0 0 8px 0',
//                       fontSize: 'clamp(12px, 3vw, 14px)',
//                       fontWeight: '400',
//                       opacity: 0.9
//                     }}>
//                       Live this experience for {experience.currency}{experience.price}
//                     </p>
                    
//                     <h4 style={{
//                       margin: '0 0 8px 0',
//                       fontSize: 'clamp(16px, 4.5vw, 22px)',
//                       fontWeight: '600',
//                       lineHeight: '1.2'
//                     }}>
//                       {experience.title}
//                     </h4>
                    
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'space-between',
//                       marginBottom: '8px',
//                       gap: '12px'
//                     }}>
//                       <p style={{
//                         margin: 0,
//                         fontSize: 'clamp(12px, 3vw, 14px)',
//                         display: 'flex',
//                         alignItems: 'center',
//                         flex: 1
//                       }}>
//                         📍 {experience.location}
//                       </p>
                      
//                       {/* Heart Button */}
//                       <button 
//                         onClick={() => toggleSave(experience.id)}
//                         style={{
//                           background: savedItems.has(experience.id) 
//                             ? 'rgba(255, 87, 34, 0.9)' 
//                             : 'rgba(255,255,255,0.2)',
//                           border: `2px solid ${savedItems.has(experience.id) ? '#FF5722' : 'rgba(255,255,255,0.3)'}`,
//                           borderRadius: '50%',
//                           width: 'clamp(36px, 8vw, 42px)',
//                           height: 'clamp(36px, 8vw, 42px)',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           color: savedItems.has(experience.id) ? 'white' : '#fff',
//                           fontSize: 'clamp(16px, 4vw, 18px)',
//                           cursor: 'pointer',
//                           transition: 'all 0.3s ease',
//                           flexShrink: 0
//                         }}
//                         onMouseEnter={(e) => {
//                           e.target.style.transform = 'scale(1.1)';
//                         }}
//                         onMouseLeave={(e) => {
//                           e.target.style.transform = 'scale(1)';
//                         }}
//                         aria-label={savedItems.has(experience.id) ? 'Remove from saved' : 'Save item'}
//                       >
//                         {savedItems.has(experience.id) ? <HeartFilled /> : <HeartOutlined />}
//                       </button>
//                     </div>
                    
//                     {/* Profile Pictures and Booking Info */}
//                     <div style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '6px'
//                     }}>
//                       <div style={{ 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         gap: '2px',
//                         marginRight: '6px'
//                       }}>
//                         {[
//                           "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//                           "https://images.unsplash.com/photo-1494790108755-2616b612b131?w=30&h=30&fit=crop&crop=face",
//                           "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=30&h=30&fit=crop&crop=face"
//                         ].map((src, idx) => (
//                           <img
//                             key={idx}
//                             src={src}
//                             alt={`User ${idx + 1}`}
//                             style={{
//                               width: 'clamp(20px, 5vw, 26px)',
//                               height: 'clamp(20px, 5vw, 26px)',
//                               borderRadius: '50%',
//                               border: '2px solid white',
//                               marginLeft: idx > 0 ? '-4px' : '0',
//                               objectFit: 'cover'
//                             }}
//                             loading="lazy"
//                           />
//                         ))}
//                       </div>
//                       <span style={{
//                         fontSize: 'clamp(10px, 2.5vw, 12px)',
//                         fontWeight: '500'
//                       }}>
//                         {experience.bookings}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Indicators */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '6px',
//         marginTop: '16px',
//         padding: '0 16px'
//       }}>
//         {experiences.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             style={{
//               width: currentSlide === index ? '24px' : '8px',
//               height: '8px',
//               borderRadius: '4px',
//               border: 'none',
//               background: currentSlide === index ? '#FF5722' : '#ddd',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               opacity: currentSlide === index ? 1 : 0.6
//             }}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Swipe Hint for Mobile */}
//       <div style={{
//         textAlign: 'center',
//         marginTop: '8px',
//         fontSize: '11px',
//         color: '#999',
//         display: typeof window !== 'undefined' && window.innerWidth <= 768 ? 'block' : 'none'
//       }}>
//         ← Swipe to explore more →
//       </div>

//       {/* Progress indicator */}
//       <div style={{
//         textAlign: 'center',
//         marginTop: '8px',
//         fontSize: '12px',
//         color: '#666',
//         fontWeight: '500'
//       }}>
//         {currentSlide + 1} of {experiences.length}
//       </div>
//     </div>
//   );
// };

// export default PickedForYou;