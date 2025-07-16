import { SCREEN_ORDER, ONBOARDING_SCREENS } from './constants';

export const getNextScreen = (currentScreen) => {
  const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
  return currentIndex < SCREEN_ORDER.length - 1 ? SCREEN_ORDER[currentIndex + 1] : null;
};

export const getPreviousScreen = (currentScreen) => {
  const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
  return currentIndex > 1 ? SCREEN_ORDER[currentIndex - 1] : null; // Skip splash screen
};

export const getProgressPercentage = (currentScreen) => {
  const currentIndex = SCREEN_ORDER.indexOf(currentScreen);
  return ((currentIndex) / (SCREEN_ORDER.length - 1)) * 100;
};

export const isPersonalizationScreen = (screen) => {
  return [
    ONBOARDING_SCREENS.TRAVEL_VIBE,
    ONBOARDING_SCREENS.TRAVEL_WITH,
    ONBOARDING_SCREENS.DISCOVER,
    ONBOARDING_SCREENS.PURPOSE
  ].includes(screen);
};

export const validatePreferences = (preferences) => {
  const requiredFields = ['travelVibe', 'travelWith', 'discover', 'purpose'];
  
  for (const field of requiredFields) {
    if (!preferences[field] || preferences[field].length === 0) {
      return { valid: false, missingField: field };
    }
  }
  
  return { valid: true };
};