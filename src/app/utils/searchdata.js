export const searchData = {
  creators: [
    {
      id: 1,
      username: '@travelwithemma',
      name: 'Emma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b131?w=100&h=100&fit=crop&crop=face',
      followers: '150K',
      experiences: '200+'
    },
    // ... more creators
  ],
  
  destinations: [
    {
      id: 1,
      name: 'Bali',
      country: 'Indonesia',
      clips: '10K+ clips',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop'
    },
    // ... more destinations
  ],
  
  places: [
    {
      id: 'goa-1',
      title: 'Taj Cidade de Goa Heritage, Goa',
      subtitle: 'Dona Paula, Goa',
      type: 'hotel',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=80&h=80&fit=crop'
    },
    // ... more places
  ]
}


// Add these items to your existing allSearchData array:
export const allSearchData = [
  // Your existing Goa results...
  {
    id: 'goa-1',
    title: 'Taj Cidade de Goa Heritage, Goa',
    subtitle: 'Dona Paula, Goa',
    type: 'hotel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=80&h=80&fit=crop'
  },
  // ... your other existing Goa items

  // ADD THESE NEW ITEMS:
  {
    id: 'bali-1',
    title: 'Bali',
    subtitle: 'Indonesia',
    type: 'destination',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=80&h=80&fit=crop'
  },
  {
    id: 'bali-2',
    title: 'Bali Beach Resort',
    subtitle: 'Seminyak, Bali',
    type: 'hotel',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=80&h=80&fit=crop'
  },
  {
    id: 'dubai-1',
    title: 'Dubai',
    subtitle: 'UAE',
    type: 'destination',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=80&h=80&fit=crop'
  },
  {
    id: 'paris-1',
    title: 'Paris',
    subtitle: 'France',
    type: 'destination',
    image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=80&h=80&fit=crop'
  },
  {
    id: 'miami-1',
    title: 'Miami',
    subtitle: 'Florida, USA',
    type: 'destination',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=80&h=80&fit=crop'
  },
  {
    id: 'himachal-1',
    title: 'Himachal',
    subtitle: 'India',
    type: 'destination',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=80&h=80&fit=crop'
  }
]