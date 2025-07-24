


"use client"

import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import dynamic from 'next/dynamic';
import TravelDiscoveryPage from './components/travel-discovery/traveldiscoverypage';
import DestinationPage from './components/destination/destinationpage';
import TripPlanningApp from './components/tripplanninginterface';
import ReelsPage from './components/reels/reelspage';
import TaggedItemsPage from './components/reels/taggeditems';
import ItemDetails from './components/itemdetails';

// Import all new onboarding screens
import SplashScreen from './components/onboarding/splashscreen';
import WelcomeScreen from './components/onboarding/welcomescreen';

// import { ReelsToRealityScreen } from './components/onboarding';
import OnboardingCarousel from './components/onboarding/reelstoreailtyscreen';
import ShareTripsScreen from './components/onboarding/sharetripscreens';
import LiveItScreen from './components/onboarding/liveitscreens';
import TravelScreenVibe from './components/onboarding/travelscreenvibe';
import TravelWithScreen from './components/onboarding/travelwithscreens';
import DiscoverScreen from './components/onboarding/discoveryscreen';
import PurposeScreen from './components/onboarding/purposescreen';
// import HICHLOGO from "./Layer_1.png"
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

// Updated theme to match HICH branding
const theme = {
  token: {
    colorPrimary: '#FF973D',
    colorBgContainer: '#FFFFFF',
    borderRadius: 15,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  components: {
    Button: {
      borderRadius: 20,
      fontWeight: 500,
    },
    Card: {
      borderRadius: 15,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    },
    Input: {
      borderRadius: 25,
      fontSize: 14,
    },
    Progress: {
      strokeColor: '#FF973D',
    },
    Modal: {
      borderRadius: 15,
    },
  },
};

// Storage utility functions - FIXED FOR SSR
const STORAGE_KEYS = {
  ONBOARDING_COMPLETED: 'hich_onboarding_completed',
  USER_PREFERENCES: 'hich_user_preferences',
  LAST_VISIT: 'hich_last_visit',
  APP_STATE: 'hich_app_state',
  HAS_REACHED_REELS: 'hich_has_reached_reels'
};

// Safe localStorage functions that work with SSR
const safeLocalStorage = {
  getItem: (key) => {
    if (typeof window === 'undefined') return null;
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  setItem: (key, value) => {
    if (typeof window === 'undefined') return false;
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error('Error writing to localStorage:', error);
      return false;
    }
  },
  removeItem: (key) => {
    if (typeof window === 'undefined') return false;
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  }
};

const storePreferences = (preferences) => {
  const success1 = safeLocalStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
  const success2 = safeLocalStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETED, 'true');
  const success3 = safeLocalStorage.setItem(STORAGE_KEYS.LAST_VISIT, new Date().toISOString());
  return success1 && success2 && success3;
};

const getStoredPreferences = () => {
  try {
    const preferences = safeLocalStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    return preferences ? JSON.parse(preferences) : null;
  } catch (error) {
    console.error('Error getting stored preferences:', error);
    return null;
  }
};

const hasCompletedOnboarding = () => {
  return safeLocalStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETED) === 'true';
};

const hasReachedReels = () => {
  return safeLocalStorage.getItem(STORAGE_KEYS.HAS_REACHED_REELS) === 'true';
};

const setHasReachedReels = () => {
  return safeLocalStorage.setItem(STORAGE_KEYS.HAS_REACHED_REELS, 'true');
};

const clearAllData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    safeLocalStorage.removeItem(key);
  });
};

const storeAppState = (state) => {
  return safeLocalStorage.setItem(STORAGE_KEYS.APP_STATE, JSON.stringify(state));
};

const getStoredAppState = () => {
  try {
    const state = safeLocalStorage.getItem(STORAGE_KEYS.APP_STATE);
    return state ? JSON.parse(state) : null;
  } catch (error) {
    console.error('Error getting stored app state:', error);
    return null;
  }
};

function App() {
  const [appState, setAppState] = useState({
    showReels: false,
    showOnboarding: true,
    userPreferences: null,
    currentView: 'splash',
    onboardingStep: 'splash',
    isLoading: true,
    isClient: false,
    hasReachedReels: false
  });

  // Add selectedPreferences state for onboarding
  const [selectedPreferences, setSelectedPreferences] = useState({
    travelVibe: [],
    travelWith: [],
    discover: [],
    purpose: []
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [taggedItems, setTaggedItems] = useState([]);

  // FIXED: Handle client-side mounting
  useEffect(() => {
    // Mark as client-side mounted
    setAppState(prev => ({ ...prev, isClient: true }));
    
    // Check stored state only after client mount
    const storedState = getStoredAppState();
    if (storedState) {
      setAppState(prev => ({ 
        ...prev, 
        ...storedState, 
        isClient: true,
        hasReachedReels: false
      }));
      return;
    }

    // Check onboarding status
    const checkOnboardingStatus = () => {
      try {
        const completed = hasCompletedOnboarding();
        const preferences = getStoredPreferences();
        
        if (completed && preferences) {
          setAppState(prev => ({
            ...prev,
            showOnboarding: false,
            userPreferences: preferences,
            currentView: 'discovery',
            isLoading: false,
            isClient: true,
            hasReachedReels: false
          }));
        } else {
          setAppState(prev => ({
            ...prev,
            currentView: 'splash',
            onboardingStep: 'splash',
            isLoading: false,
            isClient: true,
            hasReachedReels: false
          }));
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setAppState(prev => ({
          ...prev,
          currentView: 'splash',
          onboardingStep: 'splash',
          isLoading: false,
          isClient: true,
          hasReachedReels: false
        }));
      }
    };

    checkOnboardingStatus();
  }, []);

  // Save app state whenever it changes (only on client)
  useEffect(() => {
    if (appState.isClient) {
      storeAppState(appState);
    }
  }, [appState]);

  // Onboarding navigation functions
  const handleSplashComplete = () => {
    setAppState(prev => ({
      ...prev,
      currentView: 'onboarding',
      onboardingStep: 'welcome'
    }));
  };

  const handleOnboardingNext = () => {
    const steps = [
      'welcome', 'reels-to-reality', 'share-trips', 'live-it', 
      'travel-vibe', 'travel-with', 'discover', 'purpose'
    ];
    const currentIndex = steps.indexOf(appState.onboardingStep);
    
    if (currentIndex < steps.length - 1) {
      setAppState(prev => ({
        ...prev,
        onboardingStep: steps[currentIndex + 1]
      }));
    } else {
      // Complete onboarding
      handleOnboardingComplete(selectedPreferences);
    }
  };

  const handleOnboardingBack = () => {
    const steps = [
      'welcome', 'reels-to-reality', 'share-trips', 'live-it', 
      'travel-vibe', 'travel-with', 'discover', 'purpose'
    ];
    const currentIndex = steps.indexOf(appState.onboardingStep);
    
    if (currentIndex > 0) {
      setAppState(prev => ({
        ...prev,
        onboardingStep: steps[currentIndex - 1]
      }));
    }
  };

  const handlePreferenceSelection = (category, value) => {
    setSelectedPreferences(prev => ({
      ...prev,
      [category]: prev[category].includes(value) 
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const getOnboardingProgress = () => {
    const steps = [
      'welcome', 'reels-to-reality', 'share-trips', 'live-it', 
      'travel-vibe', 'travel-with', 'discover', 'purpose'
    ];
    const currentIndex = steps.indexOf(appState.onboardingStep);
    return ((currentIndex + 1) / steps.length) * 100;
  };

  const handleOnboardingComplete = (preferences) => {
    try {
      const stored = storePreferences(preferences);
      
      if (stored) {
        setHasReachedReels();
        
        setAppState(prev => ({
          ...prev,
          userPreferences: preferences,
          showOnboarding: false,
          showReels: true,
          currentView: 'reels',
          hasReachedReels: true
        }));
        
        console.log('User completed onboarding with preferences:', preferences);
      } else {
        console.error('Failed to store preferences');
      }
    } catch (error) {
      console.error('Error saving preferences:', error);
    }
  };

  const handleReelsClose = () => {
    setAppState(prev => ({
      ...prev,
      showReels: false,
      currentView: 'discovery'
    }));
  };

  const handleContinueToTrips = () => {
    setAppState(prev => ({
      ...prev,
      showReels: false,
      currentView: 'discovery'
    }));
  };

  const handleViewAllTagged = (items) => {
    setTaggedItems(items);
    setAppState(prev => ({
      ...prev,
      currentView: 'tagged'
    }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setAppState(prev => ({
      ...prev,
      currentView: 'details'
    }));
  };

  const handleBackToReels = () => {
    setAppState(prev => ({
      ...prev,
      currentView: 'reels'
    }));
    setSelectedItem(null);
    setTaggedItems([]);
  };

  const handleBackToTagged = () => {
    setAppState(prev => ({
      ...prev,
      currentView: 'tagged'
    }));
    setSelectedItem(null);
  };

  const handleShowReelsFromDiscovery = () => {
    if (!appState.hasReachedReels) {
      setHasReachedReels();
    }
    
    setAppState(prev => ({
      ...prev,
      currentView: 'reels',
      showReels: true,
      hasReachedReels: true
    }));
  };

  const resetOnboarding = () => {
    try {
      clearAllData();
    } catch (error) {
      console.error('Error clearing data:', error);
    }
    setAppState({
      showReels: false,
      showOnboarding: true,
      userPreferences: null,
      currentView: 'splash',
      onboardingStep: 'splash',
      isLoading: false,
      isClient: true,
      hasReachedReels: false
    });
    setSelectedPreferences({
      travelVibe: [],
      travelWith: [],
      discover: [],
      purpose: []
    });
    setSelectedItem(null);
    setTaggedItems([]);
  };

  // Show loading screen - EXACT MATCH TO YOUR IMAGE
  if (!appState.isClient || appState.isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#FFFFFF', // Pure white background
        flexDirection: 'column',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        
          <img 
            src="/Layer_1.png" 
            alt="HICH Logo"
            style={{
              width: '50%',
              height: '50%',
              objectFit: 'contain'
            }}
          />
         
          
          {/* Current text logo - remove when you add image */}
          <div style={{
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: '900',
            textAlign: 'center',
            lineHeight: '1.1',
            letterSpacing: '1px'
          }}>
          
          </div>
          
          {/* Speech bubble tail - exactly like your image */}
          <div style={{
            position: 'absolute',
            bottom: '-16px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0',
            height: '0',
            borderLeft: '16px solid transparent',
            borderRight: '16px solid transparent',
            borderTop: '20px solid #FF6B35'
          }} />
        </div>
      // </div>
    );
  }

  // Enhanced components
  const EnhancedReelsPage = () => (
    <ReelsPage 
      onClose={handleReelsClose}
      onContinueToTrips={handleContinueToTrips}
      onViewAllTagged={handleViewAllTagged}
      onItemClick={handleItemClick}
    />
  );

  const EnhancedTravelDiscoveryPage = () => (
    <TravelDiscoveryPage 
      onShowReels={handleShowReelsFromDiscovery}
      userPreferences={appState.userPreferences}
    />
  );

  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        {/* Splash Screen */}
        {appState.currentView === 'splash' && (
          <SplashScreen onComplete={handleSplashComplete} />
        )}

        {/* Onboarding Screens */}
        {appState.currentView === 'onboarding' && appState.onboardingStep === 'welcome' && (
          <WelcomeScreen onNext={handleOnboardingNext} />
        )}

        {appState.currentView === 'onboarding' && 
 ['reels-to-reality', 'share-trips', 'live-it'].includes(appState.onboardingStep) && (
  <OnboardingCarousel 
    onNext={handleOnboardingNext}
  />
)}
        {appState.currentView === 'onboarding' && appState.onboardingStep === 'travel-vibe' && (
  <TravelScreenVibe 
    onNext={handleOnboardingNext}
    onBack={handleOnboardingBack}
    selectedPreferences={selectedPreferences}
    onSelection={handlePreferenceSelection}
    progress={25}
  />
)}

{appState.currentView === 'onboarding' && appState.onboardingStep === 'travel-with' && (
  <TravelWithScreen 
    onNext={handleOnboardingNext}
    onBack={handleOnboardingBack}
    selectedPreferences={selectedPreferences}
    onSelection={handlePreferenceSelection}
    progress={50}
  />
)}

{appState.currentView === 'onboarding' && appState.onboardingStep === 'discover' && (
  <DiscoverScreen 
    onNext={handleOnboardingNext}
    onBack={handleOnboardingBack}
    selectedPreferences={selectedPreferences}
    onSelection={handlePreferenceSelection}
    progress={75}
  />
)}

{appState.currentView === 'onboarding' && appState.onboardingStep === 'purpose' && (
  <PurposeScreen 
    onNext={handleOnboardingNext}
    onBack={handleOnboardingBack}
    selectedPreferences={selectedPreferences}
    onSelection={handlePreferenceSelection}
    progress={100}
  />
)}
        
        {/* Main App Screens */}
        {appState.currentView === 'reels' && (
          <EnhancedReelsPage />
        )}
        
        {appState.currentView === 'tagged' && (
          <TaggedItemsPage
            taggedItems={taggedItems}
            onBack={handleBackToReels}
            onClose={handleReelsClose}
            onItemClick={handleItemClick}
          />
        )}
        
        {appState.currentView === 'details' && (
          <ItemDetails
            item={selectedItem}
            onBack={handleBackToTagged}
          />
        )}
        
        {appState.currentView === 'discovery' && (
          <EnhancedTravelDiscoveryPage />
        )}

        {/* Footer - only show after user has reached reels */}
        {appState.hasReachedReels && (
          <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'linear-gradient(135deg, #FF973D 0%, #FFB366 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
            zIndex: 1000
          }}>
            <div style={{
              color: 'white',
              fontSize: '16px',
              fontWeight: '600',
              textAlign: 'center'
            }}>
              Welcome to HICH - Your Travel Companion
            </div>
          </div>
        )}

        {/* Debug Reset Button - remove in production */}
        {/* {process.env.NODE_ENV === 'development' && (
          <button
            onClick={resetOnboarding}
            style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              background: '#FF973D',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              fontSize: '12px',
              cursor: 'pointer',
              zIndex: 9999
            }}
          >
            Reset Onboarding
          </button> */}
        {/* )} */}
      </div>
    </ConfigProvider>
  );
}

export default App;