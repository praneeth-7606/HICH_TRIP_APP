// import React, { useState } from 'react';
// import { StarFilled, HeartOutlined, HeartFilled, SoundOutlined } from '@ant-design/icons';

// const PopularStays = ({ stays, onSave, savedItems }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide(prev => (prev + 1) % stays.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(prev => (prev - 1 + stays.length) % stays.length);
//   };

//   return (
//     <div style={{ marginBottom: '32px' }}>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         padding: '0 20px',
//         marginBottom: '16px'
//       }}>
//         <h3 style={{
//           margin: 0,
//           fontSize: '20px',
//           fontWeight: '600',
//           color: '#333'
//         }}>
//           Popular Stays
//         </h3>
        
//         <div style={{ display: 'flex', gap: '8px' }}>
//           <button
//             onClick={prevSlide}
//             style={{
//               width: '32px',
//               height: '32px',
//               borderRadius: '50%',
//               border: '1px solid #ddd',
//               background: '#fff',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '14px',
//               color: '#666'
//             }}
//           >
//             ‹
//           </button>
//           <button
//             onClick={nextSlide}
//             style={{
//               width: '32px',
//               height: '32px',
//               borderRadius: '50%',
//               border: '1px solid #ddd',
//               background: '#fff',
//               cursor: 'pointer',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '14px',
//               color: '#666'
//             }}
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       <div style={{
//         overflow: 'hidden',
//         padding: '0 20px'
//       }}>
//         <div style={{
//           display: 'flex',
//           transform: `translateX(-${currentSlide * 100}%)`,
//           transition: 'transform 0.5s ease'
//         }}>
//           {stays.map((stay) => (
//             <div
//               key={stay.id}
//               style={{
//                 minWidth: '100%',
//                 paddingRight: '0px'
//               }}
//             >
//               <div style={{
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 background: '#fff',
//                 boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                 position: 'relative'
//               }}>
//                 <div style={{
//                   position: 'relative',
//                   height: '240px',
//                   overflow: 'hidden'
//                 }}>
//                   <img
//                     src={stay.image}
//                     alt={stay.subtitle}
//                     style={{
//                       width: '100%',
//                       height: '100%',
//                       objectFit: 'cover'
//                     }}
//                   />
                  
//                   {/* Sound Button */}
//                   <button style={{
//                     position: 'absolute',
//                     top: '12px',
//                     left: '12px',
//                     width: '32px',
//                     height: '32px',
//                     borderRadius: '50%',
//                     background: 'rgba(255,255,255,0.9)',
//                     border: 'none',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     color: '#666',
//                     fontSize: '14px'
//                   }}>
//                     <SoundOutlined />
//                   </button>

//                   {/* Creator Badge */}
//                   <div style={{
//                     position: 'absolute',
//                     top: '12px',
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                     background: 'rgba(255,255,255,0.95)',
//                     borderRadius: '16px',
//                     padding: '6px 12px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     fontSize: '12px',
//                     fontWeight: '500'
//                   }}>
//                     <img
//                       src={stay.creator.avatar}
//                       alt={stay.creator.username}
//                       style={{
//                         width: '20px',
//                         height: '20px',
//                         borderRadius: '50%',
//                         marginRight: '6px'
//                       }}
//                     />
//                     {stay.creator.username}
//                     {stay.creator.verified && (
//                       <span style={{
//                         marginLeft: '4px',
//                         color: '#1890ff',
//                         fontSize: '10px'
//                       }}>✓</span>
//                     )}
//                   </div>

//                   {/* Rating */}
//                   <div style={{
//                     position: 'absolute',
//                     top: '12px',
//                     right: '12px',
//                     background: 'rgba(255,255,255,0.95)',
//                     borderRadius: '12px',
//                     padding: '4px 8px',
//                     display: 'flex',
//                     alignItems: 'center',
//                     fontSize: '12px',
//                     fontWeight: '600'
//                   }}>
//                     <StarFilled style={{ color: '#FFB300', fontSize: '10px', marginRight: '4px' }} />
//                     {stay.rating}
//                   </div>

//                   {/* Save Button */}
//                   <button
//                     onClick={() => onSave(stay.id)}
//                     style={{
//                       position: 'absolute',
//                       bottom: '12px',
//                       right: '12px',
//                       width: '32px',
//                       height: '32px',
//                       borderRadius: '50%',
//                       background: '#fff',
//                       border: 'none',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: savedItems.has(stay.id) ? '#FF5722' : '#666',
//                       fontSize: '14px',
//                       boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//                     }}
//                   >
//                     {savedItems.has(stay.id) ? <HeartFilled /> : <HeartOutlined />}
//                   </button>
//                 </div>

//                 <div style={{ padding: '16px' }}>
//                   <p style={{
//                     margin: '0 0 8px 0',
//                     fontSize: '14px',
//                     color: '#666'
//                   }}>
//                     {stay.title}
//                   </p>
                  
//                   <h4 style={{
//                     margin: '0 0 8px 0',
//                     fontSize: '18px',
//                     fontWeight: '600',
//                     color: '#333'
//                   }}>
//                     {stay.subtitle}
//                   </h4>
                  
//                   <div style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'space-between'
//                   }}>
//                     <p style={{
//                       margin: 0,
//                       fontSize: '12px',
//                       color: '#666',
//                       display: 'flex',
//                       alignItems: 'center'
//                     }}>
//                       📍 {stay.location}
//                     </p>
                    
//                     <p style={{
//                       margin: 0,
//                       fontSize: '12px',
//                       color: '#FF5722',
//                       fontWeight: '500'
//                     }}>
//                       👥 {stay.bookings}
//                     </p>
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
//         gap: '8px',
//         marginTop: '16px'
//       }}>
//         {stays.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             style={{
//               width: currentSlide === index ? '24px' : '8px',
//               height: '8px',
//               borderRadius: '4px',
//               border: 'none',
//               background: currentSlide === index ? '#FF5722' : '#ddd',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease'
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PopularStays;


import React, { useState } from 'react';
import { StarFilled, HeartOutlined, HeartFilled, SoundOutlined } from '@ant-design/icons';

const PopularStays = ({ stays, onSave, savedItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % stays.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + stays.length) % stays.length);
  };

  return (
    <div style={{ marginBottom: '32px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        marginBottom: '16px'
      }}>
        <h3 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: '600',
          color: '#333'
        }}>
          Popular Stays
        </h3>
        
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={prevSlide}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid #ddd',
              background: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#666'
            }}
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1px solid #ddd',
              background: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#666'
            }}
          >
            ›
          </button>
        </div>
      </div>

      <div style={{
        overflow: 'visible',
        padding: '0 15px'
      }}>
        <div style={{
          display: 'flex',
          transform: `translateX(calc(-${currentSlide * 90}% - ${currentSlide * 16}px + 10%))`,
          transition: 'transform 0.5s ease',
          gap: '16px'
        }}>
          {stays.map((stay) => (
            <div
              key={stay.id}
              style={{
                minWidth: '80%',
                flexShrink: 0
              }}
            >
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'relative',
                  height: '240px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={stay.image}
                    alt={stay.subtitle}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  
                  {/* Sound Button */}
                  <button style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    <SoundOutlined />
                  </button>

                  {/* Creator Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '16px',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    <img
                      src={stay.creator.avatar}
                      alt={stay.creator.username}
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        marginRight: '6px'
                      }}
                    />
                    {stay.creator.username}
                    {stay.creator.verified && (
                      <span style={{
                        marginLeft: '4px',
                        color: '#1890ff',
                        fontSize: '10px'
                      }}>✓</span>
                    )}
                  </div>

                  {/* Rating */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '12px',
                    padding: '4px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    <StarFilled style={{ color: '#FFB300', fontSize: '10px', marginRight: '4px' }} />
                    {stay.rating}
                  </div>

                  {/* Save Button */}
                  <button
                    onClick={() => onSave(stay.id)}
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: '#fff',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: savedItems.has(stay.id) ? '#FF5722' : '#666',
                      fontSize: '14px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    {savedItems.has(stay.id) ? <HeartFilled /> : <HeartOutlined />}
                  </button>
                </div>

                <div style={{ padding: '16px' }}>
                  <p style={{
                    margin: '0 0 8px 0',
                    fontSize: '14px',
                    color: '#666'
                  }}>
                    {stay.title}
                  </p>
                  
                  <h4 style={{
                    margin: '0 0 8px 0',
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    {stay.subtitle}
                  </h4>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <p style={{
                      margin: 0,
                      fontSize: '12px',
                      color: '#666',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      📍 {stay.location}
                    </p>
                    
                    <p style={{
                      margin: 0,
                      fontSize: '12px',
                      color: '#FF5722',
                      fontWeight: '500'
                    }}>
                      👥 {stay.bookings}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '16px'
      }}>
        {stays.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: currentSlide === index ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: 'none',
              background: currentSlide === index ? '#FF5722' : '#ddd',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularStays;