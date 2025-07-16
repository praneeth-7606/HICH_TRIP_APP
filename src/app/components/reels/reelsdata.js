// export const reelsData = [
//   {
//     id: 1,
//     videoUrl: "https://player.vimeo.com/external/370467553.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6a92d5661e&profile_id=139&oauth2_token_id=57447761",
//     thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop",
//     title: "Bali Paradise Adventure",
//     location: "Bali, Indonesia",
//     likes: "2.1K",
//     comments: "89",
//     shares: "34",
//     description: "Discover the hidden gems of Bali! 🌺 Crystal clear waters and stunning sunsets await you. #BaliVibes #TravelGoals",
//     creator: {
//       name: "@wanderlust_sarah",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b131?w=40&h=40&fit=crop&crop=face"
//     }
//   },
//   {
//     id: 2,
//     videoUrl: "https://player.vimeo.com/external/395804791.sd.mp4?s=0c95bd90b8a8b8b8f2d8f2c9c9f5b2a2d5661e&profile_id=139",
//     thumbnail: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=600&fit=crop",
//     title: "Swiss Alps Magic",
//     location: "Zermatt, Switzerland",
//     likes: "3.7K",
//     comments: "156", 
//     shares: "67",
//     description: "Morning views from the Matterhorn! ⛰️ Nothing beats waking up to this incredible scenery. #SwissAlps #Mountains",
//     creator: {
//       name: "@alpine_explorer",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
//     }
//   },
//   {
//     id: 3,
//     videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=7c99b5d5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5&profile_id=139",
//     thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=600&fit=crop",
//     title: "Tokyo Street Food Tour",
//     location: "Tokyo, Japan",
//     likes: "4.2K",
//     comments: "203",
//     shares: "89",
//     description: "Street food heaven in Shibuya! 🍜 Every corner has something amazing to try. #TokyoEats #StreetFood",
//     creator: {
//       name: "@foodie_adventures",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
//     }
//   },
//   {
//     id: 4,
//     videoUrl: "https://player.vimeo.com/external/381277340.sd.mp4?s=1c29b5d5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5&profile_id=139",
//     thumbnail: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=400&h=600&fit=crop",
//     title: "Santorini Sunset",
//     location: "Santorini, Greece",
//     likes: "5.8K",
//     comments: "287",
//     shares: "142",
//     description: "Most beautiful sunset in the world! 🌅 Santorini never fails to amaze. Book your trip now! #Santorini #Greece",
//     creator: {
//       name: "@sunset_chaser",
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
//     }
//   },
//   {
//     id: 5,
//     videoUrl: "https://player.vimeo.com/external/374078749.sd.mp4?s=2c39b5d5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5&profile_id=139",
//     thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop",
//     title: "Maldives Paradise",
//     location: "Maldives",
//     likes: "6.3K",
//     comments: "198",
//     shares: "234",
//     description: "Crystal clear waters and overwater bungalows! 🏝️ Paradise found in the Maldives. #Maldives #Paradise",
//     creator: {
//       name: "@island_hopper",
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
//     }
//   }
// ];


// reelsdata.js
// reelsdata.js
export const reelsData = [
  {
    id: 1,
    title: "Backpacking in Hawaii",
    location: "Hawaii",
    username: "@travelwithemma",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b131?w=40&h=40&fit=crop&crop=face",
    video: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=700&fit=crop",
    likes: 1200,
    comments: 89,
    shares: 45,
    isLiked: false,
    description: "Amazing backpacking adventure through the beautiful islands of Hawaii! 🌺",
    tags: ["adventure", "hawaii", "backpacking", "nature"],
    savedItems: [
      {
        id: 1,
        title: "Hotel Hyatt",
        location: "Hawaii",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop",
        type: "hotel",
        price: "$150/night"
      },
      {
        id: 2,
        title: "Scuba Diving",
        location: "Hawaii", 
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
        type: "activity",
        price: "$85/person"
      },
      {
        id: 3,
        title: "Tropical Beach Resort",
        location: "Hawaii",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop",
        type: "resort",
        price: "$200/night"
      },
      {
        id: 4,
        title: "Helicopter Tour",
        location: "Hawaii",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=300&h=200&fit=crop",
        type: "activity",
        price: "$120/person"
      }
    ]
  },
  {
    id: 2,
    title: "Sunset at Santorini",
    location: "Santorini, Greece",
    username: "@sunset_lover",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    video: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=700&fit=crop",
    likes: 2300,
    comments: 156,
    shares: 78,
    isLiked: true,
    description: "Incredible sunset views from Santorini! Perfect romantic getaway ❤️",
    tags: ["sunset", "santorini", "romantic", "greece"],
    savedItems: [
      {
        id: 5,
        title: "Sunset Villa",
        location: "Santorini",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=300&h=200&fit=crop",
        type: "villa",
        price: "$220/night"
      },
      {
        id: 6,
        title: "Wine Tasting",
        location: "Santorini",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop",
        type: "activity",
        price: "$45/person"
      },
      {
        id: 7,
        title: "Cliffside Hotel",
        location: "Santorini",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=300&h=200&fit=crop",
        type: "hotel",
        price: "$180/night"
      },
      {
        id: 8,
        title: "Boat Tour",
        location: "Santorini",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
        type: "activity",
        price: "$60/person"
      }
    ]
  },
  {
    id: 3,
    title: "Mountain Adventure",
    location: "Swiss Alps",
    username: "@mountain_explorer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    video: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=700&fit=crop",
    likes: 1800,
    comments: 234,
    shares: 92,
    isLiked: false,
    description: "Breathtaking mountain views and hiking trails in the Swiss Alps! 🏔️",
    tags: ["mountains", "hiking", "alps", "adventure"],
    savedItems: [
      {
        id: 9,
        title: "Alpine Lodge",
        location: "Swiss Alps",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop",
        type: "lodge",
        price: "$180/night"
      },
      {
        id: 10,
        title: "Ski Resort",
        location: "Swiss Alps",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1551524164-6cf2ac8b1a4d?w=300&h=200&fit=crop",
        type: "resort",
        price: "$250/night"
      },
      {
        id: 11,
        title: "Cable Car Ride",
        location: "Swiss Alps",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
        type: "activity",
        price: "$35/person"
      },
      {
        id: 12,
        title: "Mountain Cabin",
        location: "Swiss Alps",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=200&fit=crop",
        type: "cabin",
        price: "$120/night"
      }
    ]
  }
];