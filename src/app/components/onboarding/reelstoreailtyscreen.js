// import React from 'react';

// const ReelsToRealityScreen = ({ onNext, progress = 25 }) => {
//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(180deg, #FFE4D1 0%, #FFFFFF 100%)',
//       display: 'flex',
//       flexDirection: 'column',
//       maxWidth: '400px',
//       margin: '0 auto',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//     }}>
//       {/* Status Bar Space */}
//       <div style={{ height: '50px' }}></div>

//       {/* Progress Slider */}
//       <div style={{
//         padding: '0 20px 20px 20px',
//         background: 'transparent'
//       }}>
//         <div style={{
//           width: '100%',
//           height: '6px',
//           background: '#E5E5E5',
//           borderRadius: '3px',
//           overflow: 'hidden'
//         }}>
//           <div style={{
//             width: `${progress}%`,
//             height: '100%',
//             background: 'linear-gradient(90deg, #FF6B35 0%, #FF8A5B 100%)',
//             borderRadius: '3px',
//             transition: 'width 0.5s ease',
//             boxShadow: '0 2px 4px rgba(255, 107, 53, 0.3)'
//           }} />
//         </div>
//       </div>

//       {/* Content */}
//       <div style={{
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: '20px',
//         textAlign: 'center'
//       }}>
//         {/* Title */}
//         <h2 style={{
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#000000',
//           marginBottom: '12px',
//           lineHeight: '1.2'
//         }}>
//           From Reels to Reality
//         </h2>

//         {/* Subtitle */}
//         <p style={{
//           fontSize: '16px',
//           color: '#666666',
//           marginBottom: '50px',
//           lineHeight: '1.4',
//           maxWidth: '320px'
//         }}>
//           Watch, swipe, and book the same journeys in one tap.
//         </p>

//         {/* Phone Mockup with Tags */}
//         <div style={{
//           position: 'relative',
//           marginBottom: '60px'
//         }}>
//           {/* Phone */}
//           <div style={{
//             width: '220px',
//             height: '420px',
//             background: '#000',
//             borderRadius: '35px',
//             overflow: 'hidden',
//             position: 'relative',
//             boxShadow: '0 15px 40px rgba(0,0,0,0.25)'
//           }}>
//             <img 
//               src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=220&h=420&fit=crop"
//               alt="Travel destination"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover'
//               }}
//             />
//           </div>

//           {/* Floating Tags with Animation */}
//           {/* Stays Tag - Top Right */}
//           <div style={{
//             position: 'absolute',
//             right: '-70px',
//             top: '60px',
//             background: '#FFFFFF',
//             border: '1px solid #E5E5E5',
//             borderRadius: '12px',
//             padding: '10px 16px',
//             fontSize: '13px',
//             fontWeight: '600',
//             color: '#FF6B35',
//             boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//             animation: 'float 3s ease-in-out infinite'
//           }}>
//             <span style={{ color: '#FF6B35' }}>📍</span>
//             Stays
//           </div>

//           {/* Food Tag - Right Middle */}
//           <div style={{
//             position: 'absolute',
//             right: '-60px',
//             top: '180px',
//             background: '#FFFFFF',
//             border: '1px solid #E5E5E5',
//             borderRadius: '12px',
//             padding: '10px 16px',
//             fontSize: '13px',
//             fontWeight: '600',
//             color: '#FF6B35',
//             boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//             animation: 'float 3s ease-in-out infinite 1s'
//           }}>
//             <span style={{ color: '#FF6B35' }}>📍</span>
//             Food
//           </div>

//           {/* Activities Tag - Bottom Left */}
//           <div style={{
//             position: 'absolute',
//             left: '-80px',
//             bottom: '100px',
//             background: '#FFFFFF',
//             border: '1px solid #E5E5E5',
//             borderRadius: '12px',
//             padding: '10px 16px',
//             fontSize: '13px',
//             fontWeight: '600',
//             color: '#FF6B35',
//             boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//             animation: 'float 3s ease-in-out infinite 2s'
//           }}>
//             <span style={{ color: '#FF6B35' }}>📍</span>
//             Activities
//           </div>
//         </div>
//       </div>

//       {/* Get Started Button - Bottom */}
//       <div style={{
//         padding: '20px',
//         paddingBottom: '40px'
//       }}>
//         <button
//           onClick={onNext}
//           style={{
//             background: 'linear-gradient(90deg, #FF6B35 0%, #FF8A5B 100%)',
//             border: 'none',
//             borderRadius: '25px',
//             height: '55px',
//             width: '100%',
//             fontSize: '16px',
//             fontWeight: '600',
//             color: 'white',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.4)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.3)';
//           }}
//         >
//           Get Started
//         </button>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ReelsToRealityScreen;
import React, { useState, useEffect } from 'react';

const OnboardingCarousel = ({ onNext }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);
  const [progressAnimation, setProgressAnimation] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Progress bar animation
  useEffect(() => {
    setProgressAnimation(0);
    const timer = setTimeout(() => setProgressAnimation(100), 100);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const slides = [
    {
      id: 'reels-to-reality',
      title: 'From Reels to Reality',
      subtitle: 'Watch, swipe, and book the same journeys in one tap.',
      content: (
        <div style={{
          position: 'relative',
          marginBottom: '60px'
        }}>
          {/* Phone Mockup */}
          <div style={{
            width: '220px',
            height: '420px',
            background: '#000',
            borderRadius: '35px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
            margin: '0 auto'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=220&h=420&fit=crop&auto=format&q=80"
              alt="Travel destination"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Floating Tags */}
          <div style={{
            position: 'absolute',
            right: '-70px',
            top: '60px',
            background: '#FFFFFF',
            border: '1px solid #E5E5E5',
            borderRadius: '12px',
            padding: '10px 16px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#FF6B35',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            animation: 'float 3s ease-in-out infinite'
          }}>
            <span style={{ color: '#FF6B35' }}>📍</span>
            Stays
          </div>

          <div style={{
            position: 'absolute',
            right: '-60px',
            top: '180px',
            background: '#FFFFFF',
            border: '1px solid #E5E5E5',
            borderRadius: '12px',
            padding: '10px 16px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#FF6B35',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            animation: 'float 3s ease-in-out infinite 1s'
          }}>
            <span style={{ color: '#FF6B35' }}>📍</span>
            Food
          </div>

          <div style={{
            position: 'absolute',
            left: '-80px',
            bottom: '100px',
            background: '#FFFFFF',
            border: '1px solid #E5E5E5',
            borderRadius: '12px',
            padding: '10px 16px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#FF6B35',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            animation: 'float 3s ease-in-out infinite 2s'
          }}>
            <span style={{ color: '#FF6B35' }}>📍</span>
            Activities
          </div>
        </div>
      )
    },
    {
      id: 'share-trips',
      title: 'Share trips, Not Just reels',
      subtitle: 'Send ready-to-book itineraries and plan epic adventures with friends.',
      content: (
        <div style={{ marginBottom: '40px' }}>
          {/* Large Avatar Group */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '30px',
            gap: '15px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%)',
              color: 'white',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '600',
              marginRight: '8px',
              boxShadow: '0 6px 20px rgba(255, 107, 53, 0.3)'
            }}>
              You
            </div>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'url("https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=50&h=50&fit=crop&crop=face")',
              backgroundSize: 'cover',
              border: '3px solid white',
              marginLeft: '-12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}></div>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face")',
              backgroundSize: 'cover',
              border: '3px solid white',
              marginLeft: '-12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}></div>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face")',
              backgroundSize: 'cover',
              border: '3px solid white',
              marginLeft: '-12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}></div>
          </div>

          {/* Trip Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
            maxWidth: '320px',
            margin: '0 auto 40px auto',
            border: '1px solid rgba(255, 107, 53, 0.1)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=80&h=80&fit=crop&auto=format&q=80"
              alt="Trip"
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                objectFit: 'cover'
              }}
            />
            <div style={{ flex: 1, textAlign: 'left' }}>
              <h4 style={{ 
                margin: 0, 
                fontSize: '16px', 
                fontWeight: '600',
                color: '#000000',
                marginBottom: '4px'
              }}>
                Weekend Plan
              </h4>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#666666'
              }}>
                3 members
              </p>
            </div>
            <div style={{ 
              fontSize: '20px', 
              color: '#FF6B35',
              transform: 'rotate(-45deg)'
            }}>
              ➤
            </div>
          </div>

          {/* Phone Mockup */}
          <div style={{
            width: '160px',
            height: '280px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '25px',
            margin: '0 auto',
            overflow: 'hidden',
            boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
            position: 'relative'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=160&h=280&fit=crop&auto=format&q=80"
              alt="Phone mockup"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <div style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '6px',
              background: '#000',
              borderRadius: '3px'
            }}></div>
          </div>
        </div>
      )
    },
    {
      id: 'live-it',
      title: "Don't Just Wish it-Live it",
      subtitle: 'Your dream trips, unlocked. Let\'s go!',
      content: (
        <div style={{
          position: 'relative',
          width: '280px',
          height: '300px',
          marginBottom: '50px',
          transform: mounted ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)',
          margin: '0 auto 50px auto'
        }}>
          {/* Top Right - Circular hiking image */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              right: '0',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: hoveredImage === 'hiking' 
                ? '0 20px 40px rgba(0,0,0,0.25), 0 0 20px rgba(255, 107, 53, 0.3)' 
                : '0 8px 32px rgba(0,0,0,0.15)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredImage === 'hiking' ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredImage('hiking')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=240&h=240&fit=crop&auto=format&q=80"
              alt="Hiking adventure"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredImage === 'hiking' ? 'scale(1.1)' : 'scale(1)',
                filter: hoveredImage === 'hiking' 
                  ? 'brightness(1.1) contrast(1.1) saturate(1.2)' 
                  : 'brightness(1) contrast(1) saturate(1)'
              }}
            />
          </div>

          {/* Left side - Oval mountain landscape */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '40px',
              width: '100px',
              height: '140px',
              borderRadius: '50px',
              overflow: 'hidden',
              boxShadow: hoveredImage === 'mountain' 
                ? '0 20px 40px rgba(0,0,0,0.25), 0 0 20px rgba(255, 107, 53, 0.3)' 
                : '0 8px 32px rgba(0,0,0,0.15)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredImage === 'mountain' ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredImage('mountain')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=280&fit=crop&auto=format&q=80"
              alt="Mountain landscape"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredImage === 'mountain' ? 'scale(1.1)' : 'scale(1)',
                filter: hoveredImage === 'mountain' 
                  ? 'brightness(1.1) contrast(1.1) saturate(1.2)' 
                  : 'brightness(1) contrast(1) saturate(1)'
              }}
            />
          </div>

          {/* Right side - Tall oval nature */}
          <div
            style={{
              position: 'absolute',
              right: '20px',
              top: '140px',
              width: '90px',
              height: '140px',
              borderRadius: '45px',
              overflow: 'hidden',
              boxShadow: hoveredImage === 'nature' 
                ? '0 20px 40px rgba(0,0,0,0.25), 0 0 20px rgba(255, 107, 53, 0.3)' 
                : '0 8px 32px rgba(0,0,0,0.15)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredImage === 'nature' ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredImage('nature')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=180&h=280&fit=crop&auto=format&q=80"
              alt="Nature landscape"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredImage === 'nature' ? 'scale(1.1)' : 'scale(1)',
                filter: hoveredImage === 'nature' 
                  ? 'brightness(1.1) contrast(1.1) saturate(1.2)' 
                  : 'brightness(1) contrast(1) saturate(1)'
              }}
            />
          </div>

          {/* Bottom left - Small circular */}
          <div
            style={{
              position: 'absolute',
              left: '40px',
              bottom: '0',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: hoveredImage === 'beach' 
                ? '0 20px 40px rgba(0,0,0,0.25), 0 0 20px rgba(255, 107, 53, 0.3)' 
                : '0 8px 32px rgba(0,0,0,0.15)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: hoveredImage === 'beach' ? 'scale(1.05) translateY(-4px)' : 'scale(1)',
              cursor: 'pointer'
            }}
            onMouseEnter={() => setHoveredImage('beach')}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=160&h=160&fit=crop&auto=format&q=80"
              alt="Beach destination"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredImage === 'beach' ? 'scale(1.1)' : 'scale(1)',
                filter: hoveredImage === 'beach' 
                  ? 'brightness(1.1) contrast(1.1) saturate(1.2)' 
                  : 'brightness(1) contrast(1) saturate(1)'
              }}
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: `
        linear-gradient(180deg, #FFE4D1 0%, #FFFFFF 100%),
        radial-gradient(ellipse at top right, rgba(255, 107, 53, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at bottom left, rgba(255, 138, 91, 0.1) 0%, transparent 50%)
      `,
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      {/* Status Bar Space */}
      <div style={{ height: '50px' }}></div>

      {/* Story-style Progress Bars */}
      <div style={{
        padding: '0 20px 20px 20px',
        display: 'flex',
        gap: '4px'
      }}>
        {slides.map((_, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: '4px',
              background: 'rgba(229, 229, 229, 0.5)',
              borderRadius: '2px',
              overflow: 'hidden'
            }}
          >
            <div style={{
              width: index < currentSlide ? '100%' : 
                     index === currentSlide ? `${progressAnimation}%` : '0%',
              height: '100%',
              background: 'linear-gradient(90deg, #FF6B35 0%, #FF8A5B 100%)',
              borderRadius: '2px',
              transition: index === currentSlide ? 'width 4s linear' : 'width 0.3s ease',
              boxShadow: '0 0 8px rgba(255, 107, 53, 0.4)'
            }} />
          </div>
        ))}
      </div>

      {/* Carousel Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Title */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '12px',
          lineHeight: '1.2',
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'pulse 4s ease-in-out infinite'
        }}>
          {slides[currentSlide].title}
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '16px',
          color: '#666666',
          marginBottom: '50px',
          lineHeight: '1.4',
          maxWidth: '320px',
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
          fontWeight: '400'
        }}>
          {slides[currentSlide].subtitle}
        </p>

        {/* Slide Content */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '300px'
        }}>
          {slides[currentSlide].content}
        </div>

        {/* Page Indicators */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '50px'
        }}>
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: index === currentSlide 
                  ? 'linear-gradient(135deg, #FF6B35, #FF8A5B)' 
                  : 'rgba(229, 229, 229, 0.7)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: index === currentSlide 
                  ? '0 2px 8px rgba(255, 107, 53, 0.4)' 
                  : 'none'
              }}
            />
          ))}
        </div>
      </div>

      {/* Get Started Button */}
      <div style={{
        padding: '20px',
        paddingBottom: '20%',
        marginTop:"3%,"
      }}>
        <button
          onClick={onNext}
          style={{
            background: `
              linear-gradient(135deg, #FF6B35 0%, #FF8A5B 50%, #FF6B35 100%),
              linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)
            `,
            backgroundSize: '100% 100%, 200% 100%',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '28px',
            height: '56px',
            width: '100%',
            fontSize: '17px',
            fontWeight: '600',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: `
              0 8px 32px rgba(255, 107, 53, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 1px 0 rgba(255, 107, 53, 0.8)
            `,
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px) scale(1.02)';
            e.target.style.boxShadow = `
              0 16px 40px rgba(255, 107, 53, 0.5),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              0 1px 0 rgba(255, 107, 53, 0.9)
            `;
            e.target.style.animation = 'shimmer 1.5s ease-in-out infinite';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = `
              0 8px 32px rgba(255, 107, 53, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 1px 0 rgba(255, 107, 53, 0.8)
            `;
            e.target.style.animation = 'none';
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingCarousel;