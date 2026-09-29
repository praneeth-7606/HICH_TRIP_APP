// import React, { useState, useEffect } from 'react';

// const TravelWithScreen = ({ onNext, onBack, selectedPreferences, onSelection, progress = 50 }) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const options = [
//     { id: 'solo', label: 'Solo', icon: '👤' },
//     { id: 'friends', label: 'Friends', icon: '👥' },
//     { id: 'partner', label: 'Partner', icon: '👫' },
//     { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' }
//   ];

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(180deg, #FEFCFA 0%, #FFF8F3 100%)',
//       display: 'flex',
//       flexDirection: 'column',
//       maxWidth: '400px',
//       margin: '0 auto',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Status Bar Space */}
//       <div style={{ height: '50px' }}></div>

//       {/* Enhanced Header */}
//       <div style={{
//         padding: '16px 20px',
//         display: 'flex',
//         alignItems: 'center',
//         gap: '16px',
//         background: 'rgba(255, 255, 255, 0.1)',
//         backdropFilter: 'blur(10px)'
//       }}>
//         <button 
//           onClick={onBack}
//           style={{
//             background: 'rgba(255, 255, 255, 0.9)',
//             border: 'none',
//             fontSize: '18px',
//             color: '#262626',
//             cursor: 'pointer',
//             padding: '12px',
//             borderRadius: '50%',
//             transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.background = 'rgba(255, 255, 255, 1)';
//             e.target.style.transform = 'scale(1.05)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = 'rgba(255, 255, 255, 0.9)';
//             e.target.style.transform = 'scale(1)';
//           }}
//         >
//           ←
//         </button>
//         <div style={{
//           flex: 1,
//           height: '6px',
//           background: 'rgba(255, 151, 61, 0.2)',
//           borderRadius: '3px',
//           overflow: 'hidden'
//         }}>
//           <div style={{
//             width: `${progress}%`,
//             height: '100%',
//             background: 'linear-gradient(90deg, #FF973D 0%, #FFB366 100%)',
//             borderRadius: '3px',
//             transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
//             boxShadow: '0 0 10px rgba(255, 151, 61, 0.5)'
//           }} />
//         </div>
//       </div>

//       {/* Content */}
//       <div style={{
//         flex: 1,
//         padding: '20px',
//         display: 'flex',
//         flexDirection: 'column'
//       }}>
//         {/* Header Text */}
//         <div style={{
//           textAlign: 'center',
//           marginBottom: '40px',
//           transform: mounted ? 'translateY(0)' : 'translateY(20px)',
//           transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
//         }}>
//           <h3 style={{
//             fontSize: '16px',
//             fontWeight: '500',
//   color: '#000000',
//             margin: '0 0 16px 0'
//           }}>
//             Let's Personalize ahead for you
//           </h3>
//           <h2 style={{
//             fontSize: '24px',
//   fontWeight: '500',
//   color: '#000000',
//   margin: '0 0 8px 0',
//   lineHeight: '1.2'
//           }}>
//             Who do you usually travel with?
//           </h2>
//           <p style={{
//             fontWeight: '500',
//   color: '#000000',
//             margin: 0
//           }}>
//             (Select one or multiple)
//           </p>
//         </div>

//         {/* Enhanced Options Grid */}
//         <div style={{
//           flex: 1,
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '20px',
//           marginBottom: '40px'
//         }}>
//           {options.map((option, index) => (
//             <button
//               key={option.id}
//               onClick={() => onSelection('travelWith', option.id)}
//               style={{
//                 padding: '28px 20px',
//                 border: selectedPreferences?.travelVibe?.includes(option.id) 
//   ? '10px solid #FF973D' 
//   : '1px solid rgba(240, 240, 240, 0.8)',
//                 borderRadius: '20px',
//                 background: selectedPreferences?.travelVibe?.includes(option.id) 
//   ? 'linear-gradient(135deg, rgba(255, 151, 61, 0.1) 0%, rgba(255, 179, 102, 0.1) 100%)' 
//   : 'rgba(255, 255, 255, 0.9)',
//                 cursor: 'pointer',
//                 fontSize: '16px',
//                 textAlign: 'center',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 gap: '16px',
//                 transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                 color: '#000000',
//                 fontWeight: '500',
//                 aspectRatio: '1',
//                 justifyContent: 'center',
//                 boxShadow: selectedPreferences?.travelWith?.includes(option.id)
//                   ? '0 12px 28px rgba(255, 151, 61, 0.25)'
//                   : '0 6px 16px rgba(0,0,0,0.08)',
//                 transform: `${mounted ? 'scale(1)' : 'scale(0.9)'} translateY(0)`,
//                 transitionDelay: `${index * 0.1}s`,
//                 backdropFilter: 'blur(10px)',
//                 position: 'relative'
//               }}
//               onMouseEnter={(e) => {
//                 if (!selectedPreferences?.travelWith?.includes(option.id)) {
//                   e.target.style.background = 'rgba(255, 255, 255, 1)';
//                   e.target.style.borderColor = 'rgba(255, 151, 61, 0.3)';
//                   e.target.style.transform = 'scale(1.05) translateY(-4px)';
//                   e.target.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (!selectedPreferences?.travelWith?.includes(option.id)) {
//                   e.target.style.background = 'rgba(255, 255, 255, 0.9)';
//                   e.target.style.borderColor = 'rgba(240, 240, 240, 0.8)';
//                   e.target.style.transform = 'scale(1) translateY(0)';
//                   e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)';
//                 }
//               }}
//             >
//               <span style={{ 
//                 fontSize: '36px',
//                 filter: 'brightness(1.1) saturate(1.2)',
//                 transition: 'transform 0.3s ease'
//               }}>
//                 {option.icon}
//               </span>
//               <span style={{ fontSize: '15px', fontWeight: '600' }}>{option.label}</span>
//               {selectedPreferences?.travelWith?.includes(option.id) && (
//                 <span style={{
//                   position: 'absolute',
//                   top: '12px',
//                   right: '12px',
//                   color: '#FF973D',
//                   fontSize: '16px',
//                   animation: 'pulse 2s ease-in-out infinite'
//                 }}>
//                   ✓
//                 </span>
//               )}
//             </button>
//           ))}
//         </div>

//         {/* Next Button */}
//         <button
//           onClick={onNext}
//           style={{
//             background: 'linear-gradient(135deg, #FF973D 0%, #FFB366 100%)',
//             border: 'none',
//             borderRadius: '28px',
//             height: '56px',
//             padding: '0 40px',
//             fontSize: '17px',
//             fontWeight: '600',
//             color: 'white',
//             cursor: 'pointer',
//             transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//             boxShadow: '0 8px 24px rgba(255, 151, 61, 0.4)',
//             width: '100%',
//             textShadow: '0 1px 2px rgba(0,0,0,0.2)',
//             letterSpacing: '0.5px'
//           }}
//           onMouseEnter={(e) => {
//             e.target.style.background = 'linear-gradient(135deg, #E8840F 0%, #FF973D 100%)';
//             e.target.style.transform = 'translateY(-3px) scale(1.02)';
//             e.target.style.boxShadow = '0 12px 32px rgba(255, 151, 61, 0.5)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = 'linear-gradient(135deg, #FF973D 0%, #FFB366 100%)';
//             e.target.style.transform = 'translateY(0) scale(1)';
//             e.target.style.boxShadow = '0 8px 24px rgba(255, 151, 61, 0.4)';
//           }}
//         >
//           Next
//         </button>
//       </div>

//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); }
//           50% { transform: scale(1.1); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TravelWithScreen;


import React, { useState, useEffect } from 'react';

const TravelWithScreen = ({ onNext, onBack, selectedPreferences, onSelection, progress = 50 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options = [
    { id: 'solo', label: 'Solo', icon: '👤' },
    { id: 'friends', label: 'Friends', icon: '👥' },
    { id: 'partner', label: 'Partner', icon: '👫' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FEFCFA 0%, #FFF8F3 100%)',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Status Bar Space */}
      <div style={{ height: '50px' }}></div>

      {/* Enhanced Header */}
      <div style={{
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        <button 
          onClick={onBack}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            fontSize: '18px',
            color: '#262626',
            cursor: 'pointer',
            padding: '12px',
            borderRadius: '50%',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 1)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.9)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ←
        </button>
        <div style={{
          flex: 1,
          height: '6px',
          background: 'rgba(255, 151, 61, 0.2)',
          borderRadius: '3px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #FF973D 0%, #FFB366 100%)',
            borderRadius: '3px',
            transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 0 10px rgba(255, 151, 61, 0.5)'
          }} />
        </div>
      </div>

      {/* Content */}
      <div style={{
        flex: 1,
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Header Text */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}>
          <h3 style={{
            fontWeight: '500',
  color: '#000000',

            margin: '0 0 16px 0'
          }}>
            Let's Personalize ahead for you
          </h3>
          <h2 style={{
  fontSize: '24px',
  fontWeight: '500',
  color: '#000000',
  margin: '0 0 8px 0',
  lineHeight: '1.2'
}}>
            Who do you usually travel with?
          </h2>
          <p style={{
            fontWeight: '500',
  color: '#000000',
            margin: 0
          }}>
            (Select one or multiple)
          </p>
        </div>

        {/* Enhanced Options Grid */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {options.map((option, index) => (
            <button
              key={option.id}
              onClick={() => onSelection('travelWith', option.id)}
              style={{
                padding: '28px 20px',
                border: selectedPreferences?.travelWith?.includes(option.id) 
                  ? '2px solid #FF973D' 
                  : '1px solid rgba(240, 240, 240, 0.8)',
                borderRadius: '20px',
                background: selectedPreferences?.travelWith?.includes(option.id) 
                  ? 'linear-gradient(135deg, rgba(255, 151, 61, 0.1) 0%, rgba(255, 179, 102, 0.1) 100%)' 
                  : 'rgba(255, 255, 255, 0.9)',
                cursor: 'pointer',
                fontSize: '16px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                color: '#262626',
                fontWeight: '500',
                aspectRatio: '1',
                justifyContent: 'center',
                boxShadow: selectedPreferences?.travelWith?.includes(option.id)
                  ? '0 12px 28px rgba(255, 151, 61, 0.25)'
                  : '0 6px 16px rgba(0,0,0,0.08)',
                transform: `${mounted ? 'scale(1)' : 'scale(0.9)'} translateY(0)`,
                transitionDelay: `${index * 0.1}s`,
                backdropFilter: 'blur(10px)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (!selectedPreferences?.travelWith?.includes(option.id)) {
                  e.target.style.background = 'rgba(255, 255, 255, 1)';
                  e.target.style.borderColor = 'rgba(255, 151, 61, 0.3)';
                  e.target.style.transform = 'scale(1.05) translateY(-4px)';
                  e.target.style.boxShadow = '0 12px 24px rgba(0,0,0,0.12)';
                }
              }}
              onMouseLeave={(e) => {
                if (!selectedPreferences?.travelWith?.includes(option.id)) {
                  e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.borderColor = 'rgba(240, 240, 240, 0.8)';
                  e.target.style.transform = 'scale(1) translateY(0)';
                  e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)';
                }
              }}
            >
              <span style={{ 
                fontSize: '36px',
                filter: 'brightness(1.1) saturate(1.2)',
                transition: 'transform 0.3s ease'
              }}>
                {option.icon}
              </span>
              <span style={{ fontSize: '15px', fontWeight: '600' }}>{option.label}</span>
              {selectedPreferences?.travelWith?.includes(option.id) && (
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  color: '#FF973D',
                  fontSize: '16px',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          style={{
            background: 'linear-gradient(135deg, #FF973D 0%, #FFB366 100%)',
            border: 'none',
            borderRadius: '28px',
            height: '56px',
            padding: '0 40px',
            fontSize: '17px',
            fontWeight: '600',
            color: 'white',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 8px 24px rgba(255, 151, 61, 0.4)',
            width: '100%',
            textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #E8840F 0%, #FF973D 100%)';
            e.target.style.transform = 'translateY(-3px) scale(1.02)';
            e.target.style.boxShadow = '0 12px 32px rgba(255, 151, 61, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #FF973D 0%, #FFB366 100%)';
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 8px 24px rgba(255, 151, 61, 0.4)';
          }}
        >
          Next
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default TravelWithScreen;