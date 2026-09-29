const STORAGE_KEYS = {
  ONBOARDING_COMPLETED: 'hich_onboarding_completed',
  USER_PREFERENCES: 'hich_user_preferences',
  USER_TRIPS: 'hich_user_trips',
  LAST_VISIT: 'hich_last_visit'
};

export const storePreferences = (preferences) => {
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

export const getStoredPreferences = () => {
  try {
    const preferences = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    return preferences ? JSON.parse(preferences) : null;
  } catch (error) {
    console.error('Error getting stored preferences:', error);
    return null;
  }
};

export const hasCompletedOnboarding = () => {
  return localStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETED) === 'true';
};

export const clearAllData = () => {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
  });
};