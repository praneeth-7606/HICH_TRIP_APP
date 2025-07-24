

// // =====================================================
// // FILE 3: liveitscreen.js - Don't Just Wish It-Live It
// // =====================================================
// import React from 'react';

// const LiveItScreen = ({ onNext, progress = 75 }) => {
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

//       {/* Progress Bar */}
//       <div style={{
//         padding: '0 20px 20px 20px',
//         background: 'transparent'
//       }}>
//         <div style={{
//           width: '100%',
//           height: '4px',
//           background: '#E5E5E5',
//           borderRadius: '2px',
//           overflow: 'hidden'
//         }}>
//           <div style={{
//             width: `${progress}%`,
//             height: '100%',
//             background: '#FF6B35',
//             borderRadius: '2px',
//             transition: 'width 0.3s ease'
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
//           fontSize: '24px',
//           fontWeight: '700',
//           color: '#000000',
//           marginBottom: '8px',
//           lineHeight: '1.2'
//         }}>
//           Don't Just Wish it-Live it
//         </h2>

//         {/* Subtitle */}
//         <p style={{
//           fontSize: '16px',
//           color: '#666666',
//           marginBottom: '40px',
//           lineHeight: '1.4',
//           maxWidth: '280px'
//         }}>
//           Your dream trips, unlocked. Let's go!
//         </p>

//         {/* Image Collage - Exact Layout from Image */}
//         <div style={{
//           position: 'relative',
//           width: '280px',
//           height: '300px',
//           marginBottom: '40px'
//         }}>
//           {/* Top Right - Circular hiking image */}
//           <div style={{
//             position: 'absolute',
//             top: '0',
//             right: '0',
//             width: '120px',
//             height: '120px',
//             borderRadius: '50%',
//             overflow: 'hidden',
//             boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
//           }}>
//             <img 
//               src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=120&h=120&fit=crop"
//               alt="Hiking adventure"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover'
//               }}
//             />
//           </div>

//           {/* Left side - Oval mountain landscape */}
//           <div style={{
//             position: 'absolute',
//             left: '0',
//             top: '40px',
//             width: '100px',
//             height: '140px',
//             borderRadius: '50px',
//             overflow: 'hidden',
//             boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
//           }}>
//             <img 
//               src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=140&fit=crop"
//               alt="Mountain landscape"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover'
//               }}
//             />
//           </div>

//           {/* Right side - Tall oval nature */}
//           <div style={{
//             position: 'absolute',
//             right: '20px',
//             top: '140px',
//             width: '90px',
//             height: '140px',
//             borderRadius: '45px',
//             overflow: 'hidden',
//             boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
//           }}>
//             <img 
//               src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=90&h=140&fit=crop"
//               alt="Nature landscape"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover'
//               }}
//             />
//           </div>

//           {/* Bottom left - Small circular */}
//           <div style={{
//             position: 'absolute',
//             left: '40px',
//             bottom: '0',
//             width: '80px',
//             height: '80px',
//             borderRadius: '50%',
//             overflow: 'hidden',
//             boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
//           }}>
//             <img 
//               src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=80&h=80&fit=crop"
//               alt="Beach destination"
//               style={{
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover'
//               }}
//             />
//           </div>
//         </div>

//         {/* Progress Dots */}
//         <div style={{
//           display: 'flex',
//           gap: '8px',
//           marginBottom: '40px'
//         }}>
//           <div style={{
//             width: '8px',
//             height: '8px',
//             borderRadius: '50%',
//             background: '#FF6B35'
//           }}></div>
//           <div style={{
//             width: '8px',
//             height: '8px',
//             borderRadius: '50%',
//             background: '#E5E5E5'
//           }}></div>
//           <div style={{
//             width: '8px',
//             height: '8px',
//             borderRadius: '50%',
//             background: '#E5E5E5'
//           }}></div>
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
//             height: '50px',
//             width: '100%',
//             fontSize: '16px',
//             fontWeight: '600',
//             color: 'white',
//             cursor: 'pointer',
//             transition: 'all 0.3s ease',
//             boxShadow: '0 4px 16px rgba(255, 107, 53, 0.3)'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 6px 20px rgba(255, 107, 53, 0.4)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.transform = 'translateY(0)';
//             e.target.style.boxShadow = '0 4px 16px rgba(255, 107, 53, 0.3)';
//           }}
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LiveItScreen;


import React, { useState, useEffect } from 'react';

const LiveItScreen = ({ onNext, progress = 75 }) => {
  const [mounted, setMounted] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const imageData = [
    {
      id: 'hiking',
      src: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=240&h=240&fit=crop&auto=format&q=80',
      alt: 'Hiking adventure',
      style: {
        position: 'absolute',
        top: '0',
        right: '0',
        width: '120px',
        height: '120px',
        borderRadius: '50%'
      }
    },
    {
      id: 'mountain',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=280&fit=crop&auto=format&q=80',
      alt: 'Mountain landscape',
      style: {
        position: 'absolute',
        left: '0',
        top: '40px',
        width: '100px',
        height: '140px',
        borderRadius: '50px'
      }
    },
    {
      id: 'nature',
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=180&h=280&fit=crop&auto=format&q=80',
      alt: 'Nature landscape',
      style: {
        position: 'absolute',
        right: '20px',
        top: '140px',
        width: '90px',
        height: '140px',
        borderRadius: '45px'
      }
    },
    {
      id: 'beach',
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=160&h=160&fit=crop&auto=format&q=80',
      alt: 'Beach destination',
      style: {
        position: 'absolute',
        left: '40px',
        bottom: '0',
        width: '80px',
        height: '80px',
        borderRadius: '50%'
      }
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
      {/* Animated background particles */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${8 + i * 4}px`,
              height: `${8 + i * 4}px`,
              borderRadius: '50%',
              background: `rgba(255, 107, 53, ${0.1 - i * 0.015})`,
              left: `${10 + i * 15}%`,
              top: `${20 + i * 12}%`,
              animation: `float${i} ${6 + i * 2}s ease-in-out infinite`,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: `transform ${1 + i * 0.2}s ease-out`
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float0 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(180deg); } }
        @keyframes float1 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(-180deg); } }
        @keyframes float2 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-25px) rotate(90deg); } }
        @keyframes float3 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(-90deg); } }
        @keyframes float4 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-18px) rotate(270deg); } }
        @keyframes float5 { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-12px) rotate(-270deg); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
      `}</style>

      {/* Status Bar Space */}
      <div style={{ height: '50px', position: 'relative', zIndex: 1 }}></div>

      {/* Enhanced Progress Bar */}
      <div style={{
        padding: '0 20px 20px 20px',
        background: 'transparent',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          width: '100%',
          height: '6px',
          background: 'rgba(229, 229, 229, 0.5)',
          borderRadius: '3px',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: `
              linear-gradient(90deg, #FF6B35 0%, #FF8A5B 50%, #FF6B35 100%),
              linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)
            `,
            backgroundSize: '100% 100%, 200% 100%',
            animation: 'shimmer 2s ease-in-out infinite',
            borderRadius: '3px',
            transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 10px rgba(255, 107, 53, 0.5)'
          }} />
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Enhanced Title with Gradient Text */}
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #FF6B35 0%, #FF8A5B 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '12px',
          lineHeight: '1.2',
          textShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
          animation: 'pulse 4s ease-in-out infinite'
        }}>
          Don't Just Wish it-Live it
        </h2>

        {/* Enhanced Subtitle */}
        <p style={{
          fontSize: '17px',
          color: '#666666',
          marginBottom: '50px',
          lineHeight: '1.5',
          maxWidth: '300px',
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
          fontWeight: '400',
          letterSpacing: '0.2px'
        }}>
          Your dream trips, unlocked. Let's go!
        </p>

        {/* Enhanced Image Collage with Advanced Effects */}
        <div style={{
          position: 'relative',
          width: '280px',
          height: '300px',
          marginBottom: '50px',
          transform: mounted ? 'scale(1)' : 'scale(0.9)',
          transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          {imageData.map((image, index) => (
            <div
              key={image.id}
              style={{
                ...image.style,
                overflow: 'hidden',
                boxShadow: hoveredImage === image.id 
                  ? '0 20px 40px rgba(0,0,0,0.25), 0 0 20px rgba(255, 107, 53, 0.3)' 
                  : '0 8px 32px rgba(0,0,0,0.15)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `
                  ${mounted ? 'scale(1)' : 'scale(0.8)'} 
                  ${hoveredImage === image.id ? 'scale(1.05) translateY(-4px)' : 'scale(1)'}
                `,
                cursor: 'pointer',
                background: 'linear-gradient(45deg, rgba(255,107,53,0.1), rgba(255,138,91,0.1))',
                border: hoveredImage === image.id ? '2px solid rgba(255, 107, 53, 0.3)' : '2px solid transparent'
              }}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <img 
                src={image.src}
                alt={image.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: hoveredImage === image.id ? 'scale(1.1)' : 'scale(1)',
                  filter: hoveredImage === image.id 
                    ? 'brightness(1.1) contrast(1.1) saturate(1.2)' 
                    : 'brightness(1) contrast(1) saturate(1)'
                }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: hoveredImage === image.id 
                  ? 'linear-gradient(45deg, rgba(255,107,53,0.1), transparent)' 
                  : 'transparent',
                transition: 'background 0.4s ease'
              }} />
            </div>
          ))}

          {/* Floating elements around images */}
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '50%',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: 'rgba(255, 107, 53, 0.4)',
            animation: 'float0 4s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '30px',
            right: '10px',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'rgba(255, 138, 91, 0.6)',
            animation: 'float2 5s ease-in-out infinite'
          }} />
        </div>

        {/* Enhanced Progress Dots */}
        <div style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '50px',
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 1.1s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF6B35, #FF8A5B)',
            boxShadow: '0 2px 8px rgba(255, 107, 53, 0.4)',
            animation: 'pulse 2s ease-in-out infinite'
          }}></div>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'rgba(229, 229, 229, 0.7)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}></div>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'rgba(229, 229, 229, 0.7)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
          }}></div>
        </div>
      </div>

      {/* Premium Enhanced Button */}
      <div style={{
        padding: '20px',
        paddingBottom: '40px',
        position: 'relative',
        zIndex: 1
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
            letterSpacing: '0.5px',
            position: 'relative',
            overflow: 'hidden',
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            backdropFilter: 'blur(10px)'
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
          <span style={{
            position: 'relative',
            zIndex: 2
          }}>
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
};

export default LiveItScreen;