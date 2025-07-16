export const COLORS = {
  primary: '#FF5722',
  primaryLight: '#FF8A65',
  secondary: '#FDF2E9',
  accent: '#FFE0B2',
  text: '#333333',
  textLight: '#666666',
  white: '#FFFFFF',
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336'
};

export const DESTINATIONS = [
  { id: 1, name: 'Bali', country: 'Indonesia', image: 'bali.jpg' },
  { id: 2, name: 'Dubai', country: 'UAE', image: 'dubai.jpg' },
  { id: 3, name: 'Goa', country: 'India', image: 'goa.jpg' },
  { id: 4, name: 'Paris', country: 'France', image: 'paris.jpg' },
  { id: 5, name: 'Miami', country: 'USA', image: 'miami.jpg' },
  { id: 6, name: 'Himachal', country: 'India', image: 'himachal.jpg' }
];

export const CATEGORIES = [
  { id: 1, name: 'Stays', icon: '🏨' },
  { id: 2, name: 'Food', icon: '🍽️' },
  { id: 3, name: 'Wellness', icon: '🧘' },
  { id: 4, name: 'Local', icon: '🏛️' },
  { id: 5, name: 'Activities', icon: '🎯' },
  { id: 6, name: 'Culture', icon: '🎭' }
];


export const ONBOARDING_SCREENS = {
  SPLASH: 'splash',
  WELCOME: 'welcome',
  REELS_TO_REALITY: 'reels-to-reality',
  SHARE_TRIPS: 'share-trips',
  LIVE_IT: 'live-it',
  TRAVEL_VIBE: 'travel-vibe',
  TRAVEL_WITH: 'travel-with',
  DISCOVER: 'discover',
  PURPOSE: 'purpose'
};

export const SCREEN_ORDER = [
  ONBOARDING_SCREENS.SPLASH,
  ONBOARDING_SCREENS.WELCOME,
  ONBOARDING_SCREENS.REELS_TO_REALITY,
  ONBOARDING_SCREENS.SHARE_TRIPS,
  ONBOARDING_SCREENS.LIVE_IT,
  ONBOARDING_SCREENS.TRAVEL_VIBE,
  ONBOARDING_SCREENS.TRAVEL_WITH,
  ONBOARDING_SCREENS.DISCOVER,
  ONBOARDING_SCREENS.PURPOSE
];

export const PREFERENCE_OPTIONS = {
  TRAVEL_VIBE: [
    { id: 'beach', label: 'I am a Beach person', icon: '🏖️' },
    { id: 'mountains', label: 'I love Mountains', icon: '⛰️' },
    { id: 'offbeat', label: 'Something offbeats', icon: '🧭' },
    { id: 'spiritual', label: 'Spiritual Travel', icon: '🏛️' },
    { id: 'surprise', label: 'Surprise Me', icon: '✨' }
  ],
  TRAVEL_WITH: [
    { id: 'solo', label: 'Solo', icon: '👤' },
    { id: 'friends', label: 'Friends', icon: '👥' },
    { id: 'partner', label: 'Partner', icon: '👫' },
    { id: 'family', label: 'Family', icon: '👨‍👩‍👧‍👦' }
  ],
  DISCOVER: [
    { id: 'places', label: 'Unique places to stay', icon: '🏨' },
    { id: 'food', label: 'Local food and must-try eats', icon: '🍽️' },
    { id: 'activities', label: 'Activities & events during your trip', icon: '🎯' },
    { id: 'culture', label: 'Culture, history & hidden gems', icon: '🏛️' },
    { id: 'essentials', label: 'Travel essentials & accessories', icon: '🎒' }
  ],
  PURPOSE: [
    { id: 'planning', label: "I'm planning my next trip", icon: '✈️' },
    { id: 'exploring', label: 'Just exploring for travel inspiration', icon: '🔍' },
    { id: 'saving', label: 'I want to save places & build my itinerary', icon: '📝' }
  ]
};

export const SPLASH_SCREEN_DURATION = 6000; // 6 seconds