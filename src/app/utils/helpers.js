export const formatPrice = (price) => {
  if (typeof price === 'number') {
    return `₹${price.toLocaleString('en-IN')}`;
  }
  return price;
};

export const formatDuration = (days) => {
  if (days === 1) return '1 day';
  if (days < 7) return `${days} days`;
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;
  if (weeks === 1 && remainingDays === 0) return '1 week';
  if (remainingDays === 0) return `${weeks} weeks`;
  return `${weeks} week${weeks > 1 ? 's' : ''} ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
};

export const formatRating = (rating) => {
  return Math.round(rating * 10) / 10;
};

export const generatePlaceholderImage = (width = 300, height = 200, category = 'travel') => {
  const categories = {
    travel: 'nature,travel,landscape',
    food: 'food,restaurant,cuisine',
    stay: 'hotel,resort,accommodation',
    activity: 'adventure,activity,outdoor',
    culture: 'culture,heritage,monument',
  };
  
  const tags = categories[category] || categories.travel;
  return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}&category=${tags}`;
};

export const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone);
};