// "use client"

// import React, { useState, useEffect } from 'react';
// import { ConfigProvider } from 'antd';
// import TravelDiscoveryPage from './components/travel-discovery/traveldiscoverypage';
// import DestinationPage from './components/destination/destinationpage';
// // import DestinationCard from './components/cards/destinationcard';
// import HichOnboardingFlow from './components/onboarding/hichonboarding';
// import TripPlanningApp from './components/tripplanninginterface';
// import ReelsPage from './components/reels/reelspage';
// import 'antd/dist/reset.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/globals.css';

// // Updated theme to match HICH branding
// const theme = {
//   token: {
//     colorPrimary: '#FA8C16', // HICH orange color
//     colorBgContainer: '#FFFFFF',
//     borderRadius: 15,
//     fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
//   },
//   components: {
//     Button: {
//       borderRadius: 20,
//       fontWeight: 500,
//     },
//     Card: {
//       borderRadius: 15,
//       boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     },
//     Input: {
//       borderRadius: 25,
//       fontSize: 14,
//     },
//     Progress: {
//       strokeColor: '#FA8C16',
//     },
//     Modal: {
//       borderRadius: 15,
//     },
//   },
// };

// // Storage utility functions
// const STORAGE_KEYS = {
//   ONBOARDING_COMPLETED: 'hich_onboarding_completed',
//   USER_PREFERENCES: 'hich_user_preferences',
//   LAST_VISIT: 'hich_last_visit'
// };

// const storePreferences = (preferences) => {
//   try {
//     localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
//     localStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETED, 'true');
//     localStorage.setItem(STORAGE_KEYS.LAST_VISIT, new Date().toISOString());
//     return true;
//   } catch (error) {
//     console.error('Error storing preferences:', error);
//     return false;
//   }
// };

// const getStoredPreferences = () => {
//   try {
//     const preferences = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
//     return preferences ? JSON.parse(preferences) : null;
//   } catch (error) {
//     console.error('Error getting stored preferences:', error);
//     return null;
//   }
// };

// const hasCompletedOnboarding = () => {
//   return localStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETED) === 'true';
// };

// const clearAllData = () => {
//   Object.values(STORAGE_KEYS).forEach(key => {
//     localStorage.removeItem(key);
//   });
// };

// function App() {
//   const [showReels, setShowReels] = useState(false);
//   const [showOnboarding, setShowOnboarding] = useState(true);
//   const [userPreferences, setUserPreferences] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);



//   useEffect(() => {
//   // Check if user has completed onboarding (client-side only)
//   const checkOnboardingStatus = () => {
//     try {
//       const completed = localStorage.getItem('hich_onboarding_completed');
//       const preferences = localStorage.getItem('hich_user_preferences');
      
//       if (completed === 'true' && preferences) {
//         setShowOnboarding(false);
//         setUserPreferences(JSON.parse(preferences));
//       }
//     } catch (error) {
//       console.error('Error checking onboarding status:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   checkOnboardingStatus();
// }, []);
//   const handleOnboardingComplete = (preferences) => {
//   try {
//     setUserPreferences(preferences);
//     setShowOnboarding(false);
//     setShowReels(true); // Show reels after onboarding
    
//     console.log('User completed onboarding with preferences:', preferences);
//   } catch (error) {
//     console.error('Error saving preferences:', error);
//   }
// };
// const handleReelsClose = () => {
//   setShowReels(false);
//   setShowOnboarding(true);
// };
// const handleBack = () => {
//     console.log('Navigate back');
//     // Add your navigation logic here
//   };

// const handleContinueToTrips = () => {
//   setShowReels(false);
// };


//   const resetOnboarding = () => {
//   try {
//     localStorage.removeItem('hich_onboarding_completed');
//     localStorage.removeItem('hich_user_preferences');
//   } catch (error) {
//     console.error('Error clearing data:', error);
//   }
//   setShowOnboarding(true);
//   setUserPreferences(null);
// };

//   // Loading screen while checking onboarding status
//   if (isLoading) {
//     return (
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
//         flexDirection: 'column'
//       }}>
//         <div style={{
//           fontSize: '48px',
//           fontWeight: '900',
//           color: '#FA8C16',
//           letterSpacing: '2px',
//           marginBottom: '20px'
//         }}>
//           HICH
//         </div>
//         <div style={{
//           width: '40px',
//           height: '40px',
//           border: '3px solid #FA8C16',
//           borderTop: '3px solid transparent',
//           borderRadius: '50%',
//           animation: 'spin 1s linear infinite'
//         }}></div>
//         <style>{`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
//         `}</style>
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//     {showOnboarding ? (
//       <HichOnboardingFlow onComplete={handleOnboardingComplete} />
//     ) : showReels ? (
//       <ReelsPage 
//         onClose={handleReelsClose}
//         onContinueToTrips={handleContinueToTrips}
//       />
//     ) : (
//        <TravelDiscoveryPage />
//     )}
//   </div>
//   );
// }

// export default App;



"use client"

import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import TravelDiscoveryPage from './components/travel-discovery/traveldiscoverypage';
import DestinationPage from './components/destination/destinationpage';
// import DestinationCard from './components/cards/destinationcard';
import HichOnboardingFlow from './components/onboarding/hichonboarding';
import TripPlanningApp from './components/tripplanninginterface';
import ReelsPage from './components/reels/reelspage';
// import TaggedItemsPage from './components/reels/TaggedItemsPage';
import TaggedItemsPage from './components/reels/taggeditems';
import ItemDetails from './components/itemdetails';
// import ItemDetails from './components/ItemDetails'; // Adjust path as needed
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.css';

// Updated theme to match HICH branding
const theme = {
  token: {
    colorPrimary: '#FF973D', // Updated to your color
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

// Storage utility functions
const STORAGE_KEYS = {
  ONBOARDING_COMPLETED: 'hich_onboarding_completed',
  USER_PREFERENCES: 'hich_user_preferences',
  LAST_VISIT: 'hich_last_visit',
  APP_STATE: 'hich_app_state' // Added for development persistence
};

const storePreferences = (preferences) => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
    localStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETED, 'true');
    localStorage.setItem(STORAGE_KEYS.LAST_VISIT, new Date().toISOString());
    return true;
  } catch (error) {
    console.error('Error storing preferences:', error);
    return false;
  }
};

const getStoredPreferences = () => {
  try {
    const preferences = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    return preferences ? JSON.parse(preferences) : null;
  } catch (error) {
    console.error('Error getting stored preferences:', error);
    return null;
  }
};

const hasCompletedOnboarding = () => {
  return localStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETED) === 'true';
};

const clearAllData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};

// Store app state for development persistence
const storeAppState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEYS.APP_STATE, JSON.stringify(state));
  } catch (error) {
    console.error('Error storing app state:', error);
  }
};

const getStoredAppState = () => {
  try {
    const state = localStorage.getItem(STORAGE_KEYS.APP_STATE);
    return state ? JSON.parse(state) : null;
  } catch (error) {
    console.error('Error getting stored app state:', error);
    return null;
  }
};

function App() {
  // Initialize state from localStorage to prevent restart issues
  const [appState, setAppState] = useState(() => {
    const storedState = getStoredAppState();
    if (storedState) {
      return storedState;
    }
    return {
      showReels: false,
      showOnboarding: true,
      userPreferences: null,
      currentView: 'onboarding',
      isLoading: true
    };
  });

  const [selectedItem, setSelectedItem] = useState(null);
  const [taggedItems, setTaggedItems] = useState([]);

  // Save app state whenever it changes (for development persistence)
  useEffect(() => {
    storeAppState(appState);
  }, [appState]);

  useEffect(() => {
    // Check if user has completed onboarding (client-side only)
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
            isLoading: false
          }));
        } else {
          setAppState(prev => ({
            ...prev,
            currentView: 'onboarding',
            isLoading: false
          }));
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setAppState(prev => ({
          ...prev,
          currentView: 'onboarding',
          isLoading: false
        }));
      }
    };

    // Only check if we haven't already determined the state
    if (appState.isLoading) {
      checkOnboardingStatus();
    }
  }, [appState.isLoading]);

  const handleOnboardingComplete = (preferences) => {
    try {
      // FIXED: Actually store the preferences
      const stored = storePreferences(preferences);
      
      if (stored) {
        setAppState(prev => ({
          ...prev,
          userPreferences: preferences,
          showOnboarding: false,
          showReels: true,
          currentView: 'reels'
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

  const handleBack = () => {
    console.log('Navigate back');
    // Add your navigation logic here
  };

  const handleContinueToTrips = () => {
    setAppState(prev => ({
      ...prev,
      showReels: false,
      currentView: 'discovery'
    }));
  };

  // New handlers for reels navigation
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
    setAppState(prev => ({
      ...prev,
      currentView: 'reels',
      showReels: true
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
      currentView: 'onboarding',
      isLoading: false
    });
    setSelectedItem(null);
    setTaggedItems([]);
  };

  // Loading screen while checking onboarding status
  if (appState.isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
        flexDirection: 'column'
      }}>
        {/* Replace this with your logo image */}
        <div style={{
          width: '120px',
          height: '120px',
          background: '#FF973D',
          borderRadius: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '30px',
          position: 'relative',
          animation: 'logoFloat 2s ease-in-out infinite alternate',
          boxShadow: '0 10px 30px rgba(255, 151, 61, 0.3)'
        }}>
          {/* Replace this div with: <img src="/path/to/your/logo.png" alt="HICH" style={{width: '100%', height: '100%', borderRadius: '20px'}} /> */}
          <div style={{
            color: 'white',
            fontSize: '24px',
            fontWeight: '900',
            textAlign: 'center',
            lineHeight: '1'
          }}>
            HICH<br/>
            <span style={{ color: '#FFD700' }}>HICH</span><br/>
            HICH
          </div>
          {/* Speech bubble tail */}
          <div style={{
            position: 'absolute',
            bottom: '-12px',
            right: '15px',
            width: '0',
            height: '0',
            borderLeft: '20px solid #FF973D',
            borderBottom: '20px solid transparent'
          }} />
        </div>

        <div style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#FF973D',
          marginBottom: '20px',
          animation: 'textFade 1.5s ease-in-out infinite alternate'
        }}>
          Welcome to HICH
        </div>

        <div style={{
          width: '40px',
          height: '40px',
          border: '3px solid #FF973D',
          borderTop: '3px solid transparent',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes logoFloat {
            0% { transform: translateY(0px) scale(1); }
            100% { transform: translateY(-10px) scale(1.05); }
          }
          @keyframes textFade {
            0% { opacity: 0.7; }
            100% { opacity: 1; }
          }
        `}</style>
      </div>
    );
  }

  // Enhanced ReelsPage with navigation support
  const EnhancedReelsPage = () => (
    <ReelsPage 
      onClose={handleReelsClose}
      onContinueToTrips={handleContinueToTrips}
      onViewAllTagged={handleViewAllTagged}
      onItemClick={handleItemClick}
    />
  );

  // Enhanced TravelDiscoveryPage with reels button
  const EnhancedTravelDiscoveryPage = () => (
    <TravelDiscoveryPage 
      onShowReels={handleShowReelsFromDiscovery}
      userPreferences={appState.userPreferences}
    />
  );

  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        {/* Debug panel for development */}
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'rgba(0,0,0,0.8)',
          color: 'white',
          padding: '8px',
          borderRadius: '6px',
          fontSize: '11px',
          zIndex: 9999
        }}>
          
        </div>

        {appState.currentView === 'onboarding' && (
          <HichOnboardingFlow onComplete={handleOnboardingComplete} />
        )}
        
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
      </div>
    </ConfigProvider>
  );
}

export default App;
// import { useState } from 'react';
// import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
// import { SearchOutlined, HeartOutlined, ShareAltOutlined, StarFilled, UserOutlined, CalendarOutlined, DollarCircleOutlined } from '@ant-design/icons';
// import { Avatar, Tag, Rate, Badge } from 'antd';
// import styles from './page.module.css';

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState('');

//   // Sample data
//   const popularCreators = [
//     { id: 1, name: 'Emma Travel', username: '@travelwithemma', avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=120&h=120&fit=crop&crop=face', followers: '12K', isVerified: true },
//     { id: 2, name: 'Riya Adventures', username: '@travelwithriya', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face', followers: '8.5K', isVerified: true },
//     { id: 3, name: 'Wanderlust Jay', username: '@jaywanderlust', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face', followers: '15K', isVerified: false },
//     { id: 4, name: 'Solo Traveler', username: '@solotraveler', avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=120&h=120&fit=crop&crop=face', followers: '9.2K', isVerified: true },
//   ];

//   const trendingTrips = [
//     { id: 1, title: 'Goa Beach Vibes', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&h=360&fit=crop', creator: 'Emma Travel', days: 3, budget: '₹8,000', rating: 4.8, saves: 245 },
//     { id: 2, title: 'Himachal Adventure', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=360&fit=crop', creator: 'Riya Adventures', days: 5, budget: '₹15,000', rating: 4.9, saves: 189 },
//   ];

//   const trendingExperiences = [
//     { id: 1, title: 'Beach Sunset Cafe', image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=360&fit=crop', location: 'Goa', price: '₹600', rating: 4.7, category: 'Food & Cafe' },
//     { id: 2, title: 'Mountain Trekking', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=360&fit=crop', location: 'Himachal', price: '₹1,200', rating: 4.8, category: 'Adventure' },
//   ];

//   const categories = [
//     { id: 1, name: 'Stay', icon: '🏨', color: '#ff6b6b' },
//     { id: 2, name: 'Food', icon: '🍽️', color: '#4ecdc4' },
//     { id: 3, name: 'Activities', icon: '🎯', color: '#45b7d1' },
//     { id: 4, name: 'Culture', icon: '🏛️', color: '#f9ca24' },
//     { id: 5, name: 'Adventure', icon: '🏔️', color: '#6c5ce7' },
//     { id: 6, name: 'Wellness', icon: '🧘‍♀️', color: '#fd79a8' },
//   ];

//   const popularDestinations = [
//     { id: 1, name: 'Goa', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=300&fit=crop', trips: 234, avgBudget: '₹8K' },
//     { id: 2, name: 'Kerala', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=300&fit=crop', trips: 156, avgBudget: '₹12K' },
//     { id: 3, name: 'Rajasthan', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=300&fit=crop', trips: 189, avgBudget: '₹15K' },
//     { id: 4, name: 'Himachal', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', trips: 167, avgBudget: '₹10K' },
//     { id: 5, name: 'Karnataka', image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop', trips: 134, avgBudget: '₹9K' },
//     { id: 6, name: 'Maharashtra', image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=400&h=300&fit=crop', trips: 98, avgBudget: '₹11K' },
//   ];

//   const quickTours = [
//     { id: 1, title: 'Weekend Getaway Package', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop', duration: '2 Days', price: '₹5,999', discount: '20% OFF' },
//     { id: 2, title: 'Cultural Heritage Tour', image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=400&fit=crop', duration: '4 Days', price: '₹12,999', discount: '15% OFF' },
//   ];

//   return (
//     <div className={styles.homeContainer}>
//       {/* Header */}
//       <div className={styles.header}>
//         <Container>
//           <Row className="align-items-center py-3">
//             <Col xs={6}>
//               <div className={styles.logo}>
//                 <h2 className="mb-0 fw-bold">Hich Trip</h2>
//                 <small className="text-muted">Discover. Plan. Travel.</small>
//               </div>
//             </Col>
//             <Col xs={6} className="text-end">
//               <Button variant="outline-primary" size="sm" className={`me-2 ${styles.secondaryButton}`}>
//                 <UserOutlined /> Profile
//               </Button>
//               <Button variant="primary" size="sm" className={styles.primaryButton}>
//                 Create Trip
//               </Button>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Search Bar */}
//       <Container className="mb-4">
//         <InputGroup size="lg" className={styles.searchBar}>
//           <FormControl
//             placeholder="Search destinations, creators, experiences..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className={styles.searchInput}
//           />
//           <Button variant="primary" className={styles.searchButton}>
//             <SearchOutlined />
//           </Button>
//         </InputGroup>
//       </Container>

//       {/* Popular Creators */}
//       <Container className="mb-5">
//         <Row className="mb-3">
//           <Col>
//             <h4 className={`${styles.sectionTitle} fw-bold mb-3`}>Popular Creators</h4>
//           </Col>
//         </Row>
//         <Row>
//           {popularCreators.map((creator, index) => (
//             <Col xs={6} md={3} key={creator.id} className="mb-3">
//               <Card className={`${styles.creatorCard} ${styles.floatingCard} ${styles.fadeInUp}`} style={{ animationDelay: `${index * 0.1}s` }}>
//                 <Card.Body className="text-center p-3">
//                   <div className="position-relative mb-2">
//                     <Avatar size={60} src={creator.avatar} className="mb-2" />
//                     {creator.isVerified && (
//                       <Badge 
//                         count="✓" 
//                         style={{ backgroundColor: '#1890ff' }}
//                         className="position-absolute top-0 end-0"
//                       />
//                     )}
//                   </div>
//                   <h6 className="mb-1">{creator.name}</h6>
//                   <small className="text-muted d-block mb-1">{creator.username}</small>
//                   <small className="text-primary fw-bold">{creator.followers} followers</small>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Trending Trips */}
//       <Container className="mb-5">
//         <Row className="mb-3">
//           <Col>
//             <h4 className={`${styles.sectionTitle} fw-bold mb-3`}>Trending Trips</h4>
//           </Col>
//         </Row>
//         <Row>
//           {trendingTrips.map((trip, index) => (
//             <Col xs={12} md={6} key={trip.id} className="mb-3">
//               <Card className={`${styles.tripCard} ${styles.glowCard} ${styles.fadeInUp}`} style={{ animationDelay: `${index * 0.2}s` }}>
//                 <Card.Img variant="top" src={trip.image} className={styles.cardImage} />
//                 <Card.Body>
//                   <div className="d-flex justify-content-between align-items-start mb-2">
//                     <h5 className="card-title mb-0">{trip.title}</h5>
//                     <Button variant="link" size="sm" className={`p-0 text-danger ${styles.heartButton}`}>
//                       <HeartOutlined />
//                     </Button>
//                   </div>
//                   <p className="text-muted mb-2">by {trip.creator}</p>
//                   <div className="d-flex justify-content-between align-items-center mb-2">
//                     <div className="d-flex align-items-center">
//                       <CalendarOutlined className="me-1" />
//                       <small>{trip.days} days</small>
//                     </div>
//                     <div className="d-flex align-items-center">
//                       <DollarCircleOutlined className="me-1" />
//                       <small>{trip.budget}</small>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div className={`d-flex align-items-center ${styles.ratingStars}`}>
//                       <Rate disabled defaultValue={trip.rating} size="small" />
//                       <small className="ms-1 text-muted">{trip.rating}</small>
//                     </div>
//                     <small className="text-muted">{trip.saves} saves</small>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Trending Experiences */}
//       <Container className="mb-5">
//         <Row className="mb-3">
//           <Col>
//             <h4 className={`${styles.sectionTitle} fw-bold mb-3`}>Trending Experiences</h4>
//           </Col>
//         </Row>
//         <Row>
//           {trendingExperiences.map((experience, index) => (
//             <Col xs={12} md={6} key={experience.id} className="mb-3">
//               <Card className={`${styles.experienceCard} ${styles.pulseCard} ${styles.fadeInUp}`} style={{ animationDelay: `${index * 0.3}s` }}>
//                 <Card.Img variant="top" src={experience.image} className={styles.cardImage} />
//                 <Card.Body>
//                   <div className="d-flex justify-content-between align-items-start mb-2">
//                     <h5 className="card-title mb-0">{experience.title}</h5>
//                     <Button variant="link" size="sm" className={`p-0 text-danger ${styles.heartButton}`}>
//                       <HeartOutlined />
//                     </Button>
//                   </div>
//                   <p className="text-muted mb-2">{experience.location}</p>
//                   <div className="d-flex justify-content-between align-items-center mb-2">
//                     <Tag color="blue">{experience.category}</Tag>
//                     <span className="fw-bold text-primary">{experience.price}</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div className={`d-flex align-items-center ${styles.ratingStars}`}>
//                       <Rate disabled defaultValue={experience.rating} size="small" />
//                       <small className="ms-1 text-muted">{experience.rating}</small>
//                     </div>
//                     <div>
//                       <Button variant="outline-primary" size="sm" className={`me-2 ${styles.secondaryButton}`}>
//                         Add to Trip
//                       </Button>
//                       <Button variant="primary" size="sm" className={styles.primaryButton}>
//                         Book Now
//                       </Button>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Explore by Categories */}
//       <Container className="mb-5">
//         <Row className="mb-3">
//           <Col>
//             <h4 className={`${styles.sectionTitle} fw-bold mb-3`}>Explore by Categories</h4>
//           </Col>
//         </Row>
//         <Row>
//           {categories.map((category, index) => (
//             <Col xs={4} md={2} key={category.id} className="mb-3">
//               <Card className={`${styles.categoryCard} ${styles.fadeInUp}`} style={{ borderColor: category.color, animationDelay: `${index * 0.1}s` }}>
//                 <Card.Body className="text-center p-3">
//                   <div className="fs-2 mb-2">{category.icon}</div>
//                   <h6 className="mb-0" style={{ color: category.color }}>{category.name}</h6>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Popular Destinations */}
//       <Container className="mb-5">
//         <Row className="mb-3">
//           <Col>
//             <h4 className={`${styles.sectionTitle} fw-bold mb-3`}>Popular Destinations</h4>
//           </Col>
//         </Row>
//         <Row>
//           {popularDestinations.map((destination, index) => (
//             <Col xs={6} md={4} key={destination.id} className="mb-3">
//               <Card className={`${styles.destinationCard} ${styles.fadeInUp}`} style={{ animationDelay: `${index * 0.1}s` }}>
//                 <Card.Img variant="top" src={destination.image} className={styles.cardImage} />
//                 <Card.Body className="p-3">
//                   <h5 className="card-title mb-1">{destination.name}</h5>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <small className="text-muted">{destination.trips} trips</small>
//                     <small className="text-primary fw-bold">{destination.avgBudget}</small>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Quick Tours */}
//       <Container className="mb-5">
//         <Row className="mb-3">
//           <Col>
//             <h4 className={`${styles.sectionTitle} fw-bold mb-3`}>Quick Tours</h4>
//           </Col>
//         </Row>
//         <Row>
//           {quickTours.map((tour, index) => (
//             <Col xs={12} md={6} key={tour.id} className="mb-3">
//               <Card className={`${styles.tourCard} ${styles.fadeInUp}`} style={{ animationDelay: `${index * 0.2}s` }}>
//                 <Card.Img variant="top" src={tour.image} className={styles.cardImage} />
//                 <Card.Body>
//                   <div className="d-flex justify-content-between align-items-start mb-2">
//                     <h5 className="card-title mb-0">{tour.title}</h5>
//                     <Tag color="red">{tour.discount}</Tag>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div>
//                       <p className="text-muted mb-1">{tour.duration}</p>
//                       <h5 className="text-primary mb-0">{tour.price}</h5>
//                     </div>
//                     <div>
//                       <Button variant="outline-primary" size="sm" className={`me-2 ${styles.shareButton}`}>
//                         <ShareAltOutlined />
//                       </Button>
//                       <Button variant="primary" size="sm" className={styles.primaryButton}>
//                         Book Now
//                       </Button>
//                     </div>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// }