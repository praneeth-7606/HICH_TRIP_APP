import React, { useState, useEffect, useRef } from 'react';
import { HeartOutlined, HeartFilled, SoundOutlined, LoadingOutlined, StarFilled, LeftOutlined, RightOutlined, PlayCircleOutlined } from '@ant-design/icons';

const PickedForYou = ({ experiences }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [savedItems, setSavedItems] = useState(new Set());
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const containerRef = useRef(null);

  // Auto-play functionality
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (autoPlay && experiences) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % experiences.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, experiences]);

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
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
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

  const nextSlide = () => {
    if (experiences) {
      setCurrentSlide(prev => 
        prev >= experiences.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevSlide = () => {
    if (experiences) {
      setCurrentSlide(prev => 
        prev <= 0 ? experiences.length - 1 : prev - 1
      );
    }
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
      {/* Enhanced Header - Matching Popular Stays */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        marginBottom: '20px'
      }}>
        <div>
          <h3 style={{
            fontWeight: 'bold',
            margin: 0,
            fontSize: '22px',
            color: '#333'
          }}>
            Picked for you
          </h3>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: '#666'
          }}>
            Hand-picked by our travel experts
          </p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            style={{
              background: autoPlay ? '#FF5722' : 'white',
              color: autoPlay ? 'white' : '#666',
              border: '1px solid #ddd',
              borderRadius: '20px',
              padding: '6px 12px',
              fontSize: '12px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {autoPlay ? 'Pause' : 'Play'}
          </button>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={prevSlide}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #ddd',
                background: 'white',
                color: '#666',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#FF5722';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#666';
              }}
            >
              <LeftOutlined />
            </button>
            <button
              onClick={nextSlide}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid #ddd',
                background: 'white',
                color: '#666',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#FF5722';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'white';
                e.target.style.color = '#666';
              }}
            >
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>

      {/* Single Card Responsive Carousel Container - Matching Popular Stays */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div 
          ref={containerRef}
          style={{
            display: 'flex',
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            gap: '0px'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              style={{
                minWidth: '100%',
                padding: '0 20px',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  position: 'relative',
                  background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                  width: '100%',
                  maxWidth: '500px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
                }}
              >
                {/* Image Section */}
                <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                  <img
                    src={experience.image}
                    alt={experience.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s ease'
                    }}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
                    opacity: 0.5
                  }} />

                  {/* Creator Info - Centered at Top */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    borderRadius: '20px',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}>
                    <img
                      src={experience.creator.avatar}
                      alt={experience.creator.username}
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        marginRight: '8px',
                        objectFit: 'cover'
                      }}
                    />
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#333' }}>
                      {experience.creator.username}
                    </span>
                  </div>

                  {/* Rating Badge - Top Right */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    borderRadius: '15px',
                    padding: '6px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}>
                    <StarFilled style={{ color: '#FFB300', fontSize: '12px', marginRight: '3px' }} />
                    <span style={{ fontSize: '12px', fontWeight: '600', color: '#333' }}>
                      4.8
                    </span>
                  </div>

                  {/* Sound Button - Top Left */}
                  <button style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#333',
                    fontSize: '12px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                    e.target.style.background = '#FF5722';
                    e.target.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.background = 'rgba(255,255,255,0.9)';
                    e.target.style.color = '#333';
                  }}>
                    <SoundOutlined />
                  </button>

                  {/* Category Badge - Bottom Left */}
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '15px',
                    backgroundColor: '#FF5722',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '15px',
                    fontSize: '11px',
                    fontWeight: '600',
                    boxShadow: '0 3px 10px rgba(255, 87, 34, 0.4)'
                  }}>
                    Premium Experience
                  </div>
                </div>
                
                {/* Content Section */}
                <div style={{ padding: '20px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start'
                  }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontWeight: 'bold',
                        margin: '0 0 6px 0',
                        fontSize: '16px',
                        color: '#333',
                        letterSpacing: '-0.3px'
                      }}>
                        {experience.title}
                      </h4>
                      <p style={{
                        fontSize: '13px',
                        color: '#666',
                        margin: '0 0 8px 0',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        📍 {experience.location}
                      </p>
                      
                      {/* Price Section */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '8px'
                      }}>
                        <span style={{
                          fontSize: '18px',
                          fontWeight: 'bold',
                          color: '#FF5722'
                        }}>
                          ₹{experience.price}
                        </span>
                      </div>
                      
                      <p style={{
                        fontSize: '11px',
                        color: '#FF5722',
                        margin: 0,
                        fontWeight: '500'
                      }}>
                        👥 {experience.bookings}
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSave(experience.id);
                        }}
                        style={{
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          border: '1px solid #FF5722',
                          color: savedItems.has(experience.id) ? '#FF5722' : '#666',
                          backgroundColor: savedItems.has(experience.id) ? 'rgba(255, 87, 34, 0.1)' : 'white',
                          fontSize: '14px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        {savedItems.has(experience.id) ? <HeartFilled /> : <HeartOutlined />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Indicators - Matching Popular Stays */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        gap: '12px'
      }}>
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '32px' : '12px',
              height: '12px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: currentSlide === index ? '#FF5722' : '#ddd',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress indicator */}
      <div style={{
        textAlign: 'center',
        marginTop: '8px',
        fontSize: '12px',
        color: '#666',
        fontWeight: '500'
      }}>
        {currentSlide + 1} of {experiences.length}
      </div>
    </div>
  );
};

// Demo data - Enhanced to match Popular Stays format
const demoExperiences = [
  {
    id: 1,
    title: "Greek Island Getaway",
    location: "Greece",
    price: "2,999",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&h=800&q=90&auto=format&fit=crop",
    creator: {
      username: "@travelwithemma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b330?w=100&h=100&fit=crop&crop=face"
    },
    users: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    ],
    bookings: "3K+ people booked"
  },
  {
    id: 2,
    title: "Tokyo Night Markets",
    location: "Tokyo, Japan",
    price: "1,850",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&h=800&q=90&auto=format&fit=crop",
    creator: {
      username: "@tokyofoodie",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    users: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop&crop=face"
    ],
    bookings: "1.2K+ people booked"
  },
  {
    id: 3,
    title: "Moroccan Desert Safari",
    location: "Marrakech, Morocco",
    price: "3,200",
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=1200&h=800&q=90&auto=format&fit=crop",
    creator: {
      username: "@desertexplorer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    users: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face"
    ],
    bookings: "890+ people booked"
  },
  {
    id: 4,
    title: "Bali Temple Hopping",
    location: "Bali, Indonesia",
    price: "1,450",
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&h=800&q=90&auto=format&fit=crop",
    creator: {
      username: "@balivibes",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face"
    },
    users: [
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    ],
    bookings: "650+ people booked"
  },
  {
    id: 5,
    title: "Swiss Alps Adventure",
    location: "Interlaken, Switzerland",
    price: "4,500",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&q=90&auto=format&fit=crop",
    creator: {
      username: "@alpineadventures",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    users: [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    ],
    bookings: "2.1K+ people booked"
  }
];

// Export with demo data
const App = () => {
  return (
    <div style={{
      padding: '20px',
      maxWidth: '100%',
      margin: '0 auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: '#FEFBF7',
      minHeight: '100vh'
    }}>
      <PickedForYou experiences={demoExperiences} />
    </div>
  );
};

export default App;

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