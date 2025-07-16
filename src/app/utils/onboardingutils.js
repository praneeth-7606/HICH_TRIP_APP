// import { SCREEN_ORDER, ONBOARDING_SCREENS } from './constants';

// export const getNextScreen = (currentScreen) => {
//   const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
//   return currentIndex < SCREEN_ORDER.length - 1 ? SCREEN_ORDER[currentIndex + 1] : null;
// };

// export const getPreviousScreen = (currentScreen) => {
//   const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
//   return currentIndex > 1 ? SCREEN_ORDER[currentIndex - 1] : null; // Skip splash screen
// };

// export const getProgressPercentage = (currentScreen) => {
//   const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
//   return ((currentIndex) / (SCREEN_ORDER.length - 1)) * 100;
// };

// export const isPersonalizationScreen = (screen) => {
//   return [
//     ONBOARDING_SCREENS.TRAVEL_VIBE,
//     ONBOARDING_SCREENS.TRAVEL_WITH,
//     ONBOARDING_SCREENS.DISCOVER,
//     ONBOARDING_SCREENS.PURPOSE
//   ].includes(screen);
// };

// export const validatePreferences = (preferences) => {
//   const requiredFields = ['travelVibe', 'travelWith', 'discover', 'purpose'];
  
//   for (const field of requiredFields) {
//     if (!preferences[field] || preferences[field].length === 0) {
//       return { valid: false, missingField: field };
//     }
//   }
  
//   return { valid: true };
// };



import React, { useState, useEffect } from 'react';

// HICH Logo Component with image placeholder
const HichLogo = ({ size = 150 }) => (
  <div style={{ 
    position: 'relative', 
    display: 'inline-block',
    animation: 'logoEntrance 1s ease-out'
  }}>
    <div style={{
      width: size,
      height: size,
      borderRadius: '24px',
      position: 'relative',
      boxShadow: '0 8px 32px rgba(255, 151, 61, 0.3)',
      overflow: 'hidden'
    }}>
      {/* Replace this with your logo image */}
      <img 
        src="/assets/images/hich-logo.png" // Replace with your logo path
        alt="HICH Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '20px'
        }}
        onError={(e) => {
          // Fallback if image doesn't load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      
      {/* Fallback logo design (hidden by default) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: '#FF973D',
        borderRadius: '20px',
        display: 'none',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          color: 'white',
          fontSize: size * 0.15,
          fontWeight: '900',
          letterSpacing: '1px',
          lineHeight: '1.1',
          textAlign: 'center'
        }}>
          HICH
        </div>
        <div style={{
          color: '#FFD700',
          fontSize: size * 0.15,
          fontWeight: '900',
          letterSpacing: '1px',
          lineHeight: '1.1',
          textAlign: 'center'
        }}>
          HICH
        </div>
        <div style={{
          color: 'white',
          fontSize: size * 0.15,
          fontWeight: '900',
          letterSpacing: '1px',
          lineHeight: '1.1',
          textAlign: 'center'
        }}>
          HICH
        </div>
      </div>
    </div>
    
    {/* Speech bubble tail */}
    <div style={{
      position: 'absolute',
      bottom: '-12px',
      right: '20px',
      width: '0',
      height: '0',
      borderLeft: '24px solid #FF973D',
      borderBottom: '24px solid transparent',
      animation: 'tailSlide 0.8s ease-out 0.5s both'
    }} />
    
    <style>{`
      @keyframes logoEntrance {
        0% { 
          transform: scale(0.3) rotate(-10deg); 
          opacity: 0; 
        }
        60% { 
          transform: scale(1.1) rotate(2deg); 
          opacity: 1; 
        }
        100% { 
          transform: scale(1) rotate(0deg); 
          opacity: 1; 
        }
      }
      @keyframes tailSlide {
        0% { 
          transform: translateX(20px); 
          opacity: 0; 
        }
        100% { 
          transform: translateX(0); 
          opacity: 1; 
        }
      }
    `}</style>
  </div>
);

// Phone Mockup Component with animations
const PhoneMockup = ({ children, rotation = 0, delay = 0 }) => (
  <div style={{
    transform: `rotate(${rotation}deg)`,
    position: 'relative',
    animation: `phoneSlideIn 0.8s ease-out ${delay}s both`
  }}>
    <div style={{
      width: '180px',
      height: '360px',
      background: '#1a1a1a',
      borderRadius: '36px',
      padding: '8px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
    }}>
      <div style={{
        width: '100%',
        height: '100%',
        background: 'white',
        borderRadius: '30px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {children}
      </div>
    </div>
    
    <style>{`
      @keyframes phoneSlideIn {
        0% { 
          transform: translateY(50px) rotate(${rotation}deg) scale(0.8); 
          opacity: 0; 
        }
        100% { 
          transform: translateY(0) rotate(${rotation}deg) scale(1); 
          opacity: 1; 
        }
      }
    `}</style>
  </div>
);

// Floating Tag Component with animation
const FloatingTag = ({ children, style, delay = 0 }) => (
  <div style={{
    ...style,
    animation: `tagFloat 0.6s ease-out ${delay}s both, tagBounce 2s ease-in-out ${delay + 0.6}s infinite`
  }}>
    {children}
    
    <style>{`
      @keyframes tagFloat {
        0% { 
          transform: translateY(20px); 
          opacity: 0; 
        }
        100% { 
          transform: translateY(0); 
          opacity: 1; 
        }
      }
      @keyframes tagBounce {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
    `}</style>
  </div>
);

// Main Onboarding Component
const HichOnboardingFlow = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [preferences, setPreferences] = useState({
    travelVibe: [],
    travelWith: [],
    discoverInterests: [],
    purpose: []
  });

  // Auto-advance logo screen
  useEffect(() => {
    if (currentStep === 0) {
      const timer = setTimeout(() => {
        setCurrentStep(1);
      }, 3000); // Give more time to see the logo animation
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const onboardingSteps = [
    // Screen 1: Logo Screen
    {
      type: 'logo',
      showLogo: true
    },
    // Screen 2: Welcome
    {
      type: 'welcome',
      title: 'HICH',
      subtitle: 'Travel Like Your Favourite Creators. Book the viral trips you love on Instagram.',
      buttonText: 'Next'
    },
    // Screen 3: From Reels to Reality
    {
      type: 'reels',
      title: 'From Reels to Reality',
      subtitle: 'Watch, swipe, and book the same journeys in one tap.',
      buttonText: 'Get Started'
    },
    // Screen 4: Share trips
    {
      type: 'share',
      title: 'Share trips, Not Just reels',
      subtitle: 'Send ready-to-book itineraries and plan epic adventures with friends.',
      buttonText: 'Get Started'
    },
    // Screen 5: Don't Just Wish
    {
      type: 'wish',
      title: "Don't Just Wish it-Live it",
      subtitle: "Your dream trips, unlocked. Let's go!",
      buttonText: 'Get Started'
    },
    // Screen 6: Travel Vibe
    {
      type: 'selection',
      title: "What's your travel vibe?",
      subtitle: "(Select one or multiple)",
      field: 'travelVibe',
      options: [
        { icon: '🏖️', label: "I am a Beach person" },
        { icon: '⛰️', label: "I love Mountains" },
        { icon: '🌿', label: "Something offbeats" },
        { icon: '🕉️', label: "Spiritual Travel" },
        { icon: '✨', label: "Surprise Me" }
      ],
      buttonText: 'Next'
    },
    // Screen 7: Travel With
    {
      type: 'selection',
      title: "Who do you usually travel with?",
      subtitle: "(Select one or multiple)",
      field: 'travelWith',
      options: [
        { icon: '👤', label: "Solo" },
        { icon: '👥', label: "Friends" },
        { icon: '💕', label: "Partner" },
        { icon: '👨‍👩‍👧‍👦', label: "Family" }
      ],
      buttonText: 'Next'
    },
    // Screen 8: Discover
    {
      type: 'selection',
      title: "What do you want to discover here?",
      subtitle: "(Select one or multiple)",
      field: 'discoverInterests',
      options: [
        { icon: '🏨', label: "Unique places to stay" },
        { icon: '🍽️', label: "Local food and must-try eats" },
        { icon: '🎭', label: "Activities & events during your trip" },
        { icon: '🏛️', label: "Culture, history & hidden gems" },
        { icon: '🎒', label: "Travel essentials & accessories" }
      ],
      buttonText: 'Next'
    },
    // Screen 9: Purpose
    {
      type: 'selection',
      title: "What brings you to Hich today",
      subtitle: "(Select one or multiple)",
      field: 'purpose',
      options: [
        { icon: '✈️', label: "I'm planning my next trip" },
        { icon: '🔍', label: "Just exploring for travel inspiration" },
        { icon: '📝', label: "I want to save places & build my itinerary" }
      ],
      buttonText: 'Complete'
    }
  ];

  const currentStepData = onboardingSteps[currentStep];

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(preferences);
    }
  };

  const handleOptionSelect = (field, option) => {
    setPreferences(prev => ({
      ...prev,
      [field]: prev[field].includes(option.label)
        ? prev[field].filter(item => item !== option.label)
        : [...prev[field], option.label]
    }));
  };

  const progressWidth = ((currentStep + 1) / onboardingSteps.length) * 100;
  const currentTime = "13:07";

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative'
    }}>
      {/* Status Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '44px',
        background: 'rgba(253, 242, 233, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        fontSize: '17px',
        fontWeight: '600',
        zIndex: 1000
      }}>
        <div style={{ color: '#1a1a1a' }}>{currentTime}</div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          color: '#1a1a1a'
        }}>
          <div>•••</div>
          <div style={{ fontSize: '14px' }}>📶</div>
          <div style={{ fontSize: '14px' }}>📶</div>
          <div style={{ fontSize: '14px' }}>🔋</div>
        </div>
      </div>

      {/* Progress Bar */}
      {currentStep > 0 && (
        <div style={{
          position: 'fixed',
          top: '44px',
          left: 0,
          right: 0,
          height: '4px',
          background: 'rgba(255, 151, 61, 0.2)',
          zIndex: 999
        }}>
          <div style={{
            height: '100%',
            background: '#FF973D',
            width: `${progressWidth}%`,
            transition: 'width 0.5s ease',
            animation: 'progressGlow 2s ease-in-out infinite alternate'
          }} />
        </div>
      )}

      {/* Back Button for selection screens */}
      {currentStep > 5 && (
        <button
          onClick={() => setCurrentStep(currentStep - 1)}
          style={{
            position: 'fixed',
            top: '60px',
            left: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 100,
            color: '#1a1a1a',
            animation: 'backButtonSlide 0.3s ease-out'
          }}
        >
          ←
        </button>
      )}

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: currentStep > 5 ? '100px 30px 120px' : '80px 30px 120px',
        textAlign: 'center',
        maxWidth: '400px',
        margin: '0 auto'
      }}>

        {/* Logo Screen */}
        {currentStepData.type === 'logo' && (
          <div style={{ animation: 'contentFadeIn 0.5s ease-out' }}>
            <HichLogo size={150} />
          </div>
        )}

        {/* Welcome Screen */}
        {currentStepData.type === 'welcome' && (
          <div style={{ animation: 'contentSlideUp 0.6s ease-out' }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '900',
              color: '#FF973D',
              marginBottom: '30px',
              letterSpacing: '1px',
              animation: 'titlePulse 1s ease-out'
            }}>
              HICH
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#666',
              lineHeight: '1.5',
              marginBottom: '40px',
              animation: 'textSlideUp 0.8s ease-out 0.3s both'
            }}>
              Travel Like Your Favourite Creators. Book the viral trips you love on Instagram.
            </p>
          </div>
        )}

        {/* From Reels to Reality Screen */}
        {currentStepData.type === 'reels' && (
          <div style={{ animation: 'contentSlideUp 0.6s ease-out' }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '900',
              color: '#1a1a1a',
              marginBottom: '16px',
              lineHeight: '1.2',
              animation: 'titleSlideIn 0.6s ease-out'
            }}>
              From Reels to Reality
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.5',
              marginBottom: '50px',
              animation: 'textSlideUp 0.8s ease-out 0.2s both'
            }}>
              Watch, swipe, and book the same journeys in one tap.
            </p>
            
            <div style={{ position: 'relative', marginBottom: '40px' }}>
              <PhoneMockup rotation={-15} delay={0.4}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #87CEEB 0%, #E0F6FF 100%)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{
                    fontSize: '60px',
                    textAlign: 'center',
                    animation: 'mountainPulse 2s ease-in-out infinite alternate'
                  }}>
                    🏔️
                  </div>
                </div>
              </PhoneMockup>
              
              {/* Floating Tags with staggered animations */}
              <FloatingTag
                delay={0.8}
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '-30px',
                  background: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  border: '2px solid #FF973D',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#FF973D'
                }}
              >
                📍 Stays
              </FloatingTag>
              
              <FloatingTag
                delay={1.0}
                style={{
                  position: 'absolute',
                  top: '120px',
                  right: '-40px',
                  background: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  border: '2px solid #FF973D',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#FF973D'
                }}
              >
                📍 Food
              </FloatingTag>
              
              <FloatingTag
                delay={1.2}
                style={{
                  position: 'absolute',
                  bottom: '60px',
                  right: '-20px',
                  background: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  border: '2px solid #FF973D',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#FF973D'
                }}
              >
                📍 Activities
              </FloatingTag>
            </div>
          </div>
        )}

        {/* Share Trips Screen */}
        {currentStepData.type === 'share' && (
          <div style={{ animation: 'contentSlideUp 0.6s ease-out' }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '900',
              color: '#1a1a1a',
              marginBottom: '16px',
              lineHeight: '1.2',
              animation: 'titleSlideIn 0.6s ease-out'
            }}>
              Share trips, Not Just reels
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.5',
              marginBottom: '50px',
              animation: 'textSlideUp 0.8s ease-out 0.2s both'
            }}>
              Send ready-to-book itineraries and plan epic adventures with friends.
            </p>
            
            <div style={{ position: 'relative', marginBottom: '40px' }}>
              {/* Group avatars with staggered animation */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                justifyContent: 'center'
              }}>
                {['You', '👤', '👤', '👤'].map((avatar, index) => (
                  <div
                    key={index}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: index === 0 ? '#FF973D' : '#E0E0E0',
                      color: index === 0 ? 'white' : '#666',
                      fontSize: index === 0 ? '12px' : '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginLeft: index > 0 ? '-10px' : '0',
                      border: '3px solid white',
                      zIndex: 4 - index,
                      fontWeight: '600',
                      animation: `avatarBounce 0.5s ease-out ${index * 0.1 + 0.4}s both`
                    }}
                  >
                    {index === 0 ? 'You' : avatar}
                  </div>
                ))}
              </div>
              
              <PhoneMockup rotation={10} delay={0.8}>
                <div style={{ padding: '20px', fontSize: '12px' }}>
                  <div style={{ 
                    background: '#FF973D', 
                    color: 'white', 
                    padding: '8px 12px', 
                    borderRadius: '8px',
                    marginBottom: '10px',
                    fontWeight: '600'
                  }}>
                    Weekend Plan
                  </div>
                  <div style={{ color: '#666', fontSize: '10px' }}>3 members</div>
                  <div style={{
                    background: '#F5F5F5',
                    borderRadius: '8px',
                    height: '80px',
                    marginTop: '10px'
                  }} />
                </div>
              </PhoneMockup>
            </div>
          </div>
        )}

        {/* Don't Just Wish Screen */}
        {currentStepData.type === 'wish' && (
          <div style={{ animation: 'contentSlideUp 0.6s ease-out' }}>
            <h1 style={{
              fontSize: '32px',
              fontWeight: '900',
              color: '#1a1a1a',
              marginBottom: '16px',
              lineHeight: '1.2',
              animation: 'titleSlideIn 0.6s ease-out'
            }}>
              Don't Just Wish it-Live it
            </h1>
            <p style={{
              fontSize: '16px',
              color: '#666',
              lineHeight: '1.5',
              marginBottom: '50px',
              animation: 'textSlideUp 0.8s ease-out 0.2s both'
            }}>
              Your dream trips, unlocked. Let's go!
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginBottom: '40px',
              width: '100%',
              maxWidth: '280px'
            }}>
              {[
                { emoji: '🏕️', bg: 'linear-gradient(135deg, #90EE90 0%, #98FB98 100%)' },
                { emoji: '🏔️', bg: 'linear-gradient(135deg, #87CEEB 0%, #B0E0E6 100%)' },
                { emoji: '🏖️', bg: 'linear-gradient(135deg, #FFE4B5 0%, #FFEAA7 100%)' },
                { emoji: '🌴', bg: 'linear-gradient(135deg, #98FB98 0%, #90EE90 100%)' }
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    aspectRatio: '1',
                    background: item.bg,
                    borderRadius: index % 2 === 0 ? '30px' : '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    transform: index === 1 ? 'translateY(20px)' : index === 2 ? 'translateY(-20px)' : 'translateY(0)',
                    animation: `travelCardFloat 0.6s ease-out ${index * 0.1 + 0.4}s both, travelCardHover 3s ease-in-out ${index * 0.5 + 1}s infinite`
                  }}
                >
                  {item.emoji}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selection Screens */}
        {currentStepData.type === 'selection' && (
          <div style={{ animation: 'contentSlideUp 0.6s ease-out' }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '900',
              color: '#1a1a1a',
              marginBottom: '8px',
              lineHeight: '1.2',
              animation: 'titleSlideIn 0.6s ease-out'
            }}>
              {currentStepData.title}
            </h1>
            <p style={{
              fontSize: '14px',
              color: '#666',
              marginBottom: '40px',
              animation: 'textSlideUp 0.8s ease-out 0.2s both'
            }}>
              {currentStepData.subtitle}
            </p>
            
            <div style={{ width: '100%' }}>
              {currentStepData.options.map((option, index) => {
                const isSelected = preferences[currentStepData.field]?.includes(option.label);
                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(currentStepData.field, option)}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      marginBottom: '12px',
                      border: `2px solid ${isSelected ? '#FF973D' : '#E0E0E0'}`,
                      borderRadius: '15px',
                      background: isSelected ? '#FFF5F0' : 'white',
                      color: isSelected ? '#FF973D' : '#333',
                      fontSize: '16px',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      boxShadow: isSelected ? '0 4px 12px rgba(255, 151, 61, 0.2)' : '0 2px 8px rgba(0,0,0,0.05)',
                      animation: `optionSlideIn 0.4s ease-out ${index * 0.1 + 0.3}s both`,
                      transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                    }}
                  >
                    <span style={{ fontSize: '20px' }}>{option.icon}</span>
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Button Area */}
      <div style={{ 
        position: 'fixed', 
        bottom: '30px',
        left: '30px',
        right: '30px',
        maxWidth: '340px',
        margin: '0 auto'
      }}>
        {currentStepData.type === 'logo' ? (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid #FF973D',
              borderTop: '3px solid transparent',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        ) : (
          <button
            onClick={handleNext}
            style={{
              width: '100%',
              padding: '16px',
              background: 'linear-gradient(135deg, #FF973D 0%, #FF8C42 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(255, 151, 61, 0.4)',
              transition: 'all 0.3s ease',
              animation: 'buttonSlideUp 0.6s ease-out 0.5s both'
            }}
            onMouseDown={(e) => e.target.style.transform = 'scale(0.98)'}
            onMouseUp={(e) => e.target.style.transform = 'scale(1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            {currentStepData.buttonText || 'Next'}
          </button>
        )}
      </div>

      {/* All Animations Styles */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes contentFadeIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes contentSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes titleSlideIn {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes titlePulse {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes textSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes mountainPulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes avatarBounce {
          0% { transform: scale(0) rotate(180deg); }
          60% { transform: scale(1.2) rotate(-10deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes travelCardFloat {
          0% { opacity: 0; transform: translateY(40px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes travelCardHover {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes optionSlideIn {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes buttonSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes backButtonSlide {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes progressGlow {
          0% { box-shadow: 0 0 5px rgba(255, 151, 61, 0.5); }
          100% { box-shadow: 0 0 20px rgba(255, 151, 61, 0.8); }
        }
      `}</style>
    </div>
  );
};

export default HichOnboardingFlow;