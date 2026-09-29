// // app/saves/page.js - Enhanced Version
// 'use client'
// app/saves/page.js - Enhanced Version with Trips Integration
'use client'

import React, { useState } from 'react'
import { Button, Card } from 'antd'
import { ArrowLeftOutlined, HeartFilled, StarFilled, FilterOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'

const SavesPage = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('saves')
  const [activeFilter, setActiveFilter] = useState('all')
  
  const filters = [
    {
      key: 'all',
      label: 'All',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      key: 'stays',
      label: 'Stays',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      key: 'food',
      label: 'Food & Drinks',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      key: 'activities',
      label: 'Activities',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      key: 'local',
      label: 'Local/Culture',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ]

  const savedItems = [
    {
      id: 1,
      title: 'Hotel Hyatt',
      location: 'Hawaii',
      category: 'stays',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
      isSaved: true,
      description: 'Luxury beachfront resort with stunning ocean views'
    },
    {
      id: 2,
      title: 'Villa Coralina',
      location: 'Goa',
      category: 'stays',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
      isSaved: true,
      description: 'Exclusive hillside villa with panoramic views'
    },
    {
      id: 3,
      title: 'Beach Paradise Resort',
      location: 'Maldives',
      category: 'stays',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
      isSaved: true,
      description: 'Overwater bungalows in crystal clear waters'
    },
    {
      id: 4,
      title: 'The Great Indian Thali',
      location: 'Jaipur, India',
      category: 'food',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D',
      isSaved: true,
      description: 'Authentic Rajasthani cuisine in a traditional setting.'
    },
    {
      id: 5,
      title: 'Mountain Biking Trails',
      location: 'Whistler, Canada',
      category: 'activities',
      rating: 4.6,
      image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQzay6l814TdYPQ3eXmYZUyuhFMq4QaMNWMll96MwtvRY9rFoZnERLKilqYB-G7',
      isSaved: true,
      description: 'Exciting trails for all skill levels with stunning views.'
    },
    {
      id: 6,
      title: 'Kyoto Tea Ceremony',
      location: 'Kyoto, Japan',
      category: 'local',
      rating: 4.9,
      image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWIs6cLFTMgcEmuGbaK-Ci8sw-U3EalDh_mtfq14eB6RL8N7JuH6ru2Me_Ener',
      isSaved: true,
      description: 'Experience traditional Japanese tea culture.'
    },
    {
      id: 7,
      title: 'Historical Walking Tour',
      location: 'Rome, Italy',
      category: 'local',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
      isSaved: true,
      description: 'Discover the ancient wonders of Rome on foot.'
    }
  ]

  // FIXED: Added missing tripItems array
  const tripItems = [
    {
      id: 1,
      title: 'Weekend in Paris',
      dates: 'Dec 15-18, 2024',
      image: 'https://c4.wallpaperflare.com/wallpaper/132/818/377/eiffel-tower-cityscape-city-landmark-wallpaper-preview.jpg',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Tokyo Adventure',
      dates: 'Jan 5-12, 2025',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      status: 'planning'
    },
    {
      id: 3,
      title: 'Bali Getaway',
      dates: 'Nov 20-25, 2024',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      status: 'completed'
    },
    {
      id: 4,
      title: 'New York City',
      dates: 'Oct 10-15, 2024',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop&crop=center&auto=format&q=80',
      status: 'completed'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? savedItems 
    : savedItems.filter(item => item.category === activeFilter)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (tab === 'trips') {
      router.push('/saves')
    }
  }

  return (
    <div style={{ 
      backgroundColor: '#FFFFFF', 
      minHeight: '100vh', 
      paddingBottom: '100px'
    }}>
      {/* Header */}
      <div 
        className="d-flex align-items-center p-3" 
        style={{ 
          paddingTop: '60px',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid rgba(0,0,0,0.05)'
        }}
      >
        <Button
          icon={<ArrowLeftOutlined />}
          type="text"
          onClick={() => router.back()}
          style={{ 
            marginRight: '15px', 
            fontSize: '18px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            color: '#333',
            border: 'none'
          }}
        />
        <h4 style={{ 
          margin: 0, 
          fontWeight: '600', 
          fontSize: '18px',
          color: '#333'
        }}>
          Saves
        </h4>
      </div>

      {/* Tab Toggle */}
      <div className="px-3 py-3">
        <div style={{
          display: 'flex',
          backgroundColor: '#F5F5F5',
          borderRadius: '25px',
          padding: '4px',
          width: 'fit-content'
        }}>
          <button
            style={{
              padding: '8px 24px',
              borderRadius: '20px',
              border: 'none',
              background: activeTab === 'saves' ? '#FF4800' : 'transparent',
              color: activeTab === 'saves' ? '#FFFFFF' : '#666',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleTabChange('saves')}
          >
            Saves
          </button>
          <button
            style={{
              padding: '8px 24px',
              borderRadius: '20px',
              border: 'none',
              background: activeTab === 'trips' ? '#FF4800' : 'transparent',
              color: activeTab === 'trips' ? '#FFFFFF' : '#666',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => handleTabChange('trips')}
          >
            Trips
          </button>
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'saves' ? (
        <>
          {/* Filter Tabs */}
          <div className="px-3 pb-3">
            <div 
              className="d-flex" 
              style={{ 
                overflowX: 'auto', 
                gap: '12px',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: activeFilter === filter.key ? '2px solid #FF4800' : '1px solid #E0E0E0',
                    background: activeFilter === filter.key ? '#FFF5F2' : '#FFFFFF',
                    color: activeFilter === filter.key ? '#FF4800' : '#666',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    fontSize: '14px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.key === 'all' && <FilterOutlined style={{ fontSize: '12px' }} />}
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Saves Grid - IMPROVED: Better image filling */}
          <div className="px-3">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                    background: '#FFFFFF',
                    padding: '0'
                  }}
                  bodyStyle={{ padding: '0' }}
                >
                  <div style={{ 
                    position: 'relative',
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden'
                  }}>
                    {/* IMPROVED: Better image styling to fill card completely */}
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ 
                        width: '100%', 
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.05)'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)'
                      }}
                    />
                    
                    {/* Gradient overlay for better text readability */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)'
                    }} />
                    
                    {/* Rating Badge - IMPROVED: Better styling */}
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      padding: '6px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                    }}>
                      <StarFilled style={{ color: '#FFD700', fontSize: '14px' }} />
                      <span style={{ 
                        fontSize: '13px', 
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        {item.rating}
                      </span>
                    </div>

                    {/* Save Button - IMPROVED: Better styling */}
                    <Button
                      icon={<HeartFilled />}
                      style={{
                        position: 'absolute',
                        top: '16px',
                        left: '16px',
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        background: 'rgba(255, 72, 0, 0.9)',
                        backdropFilter: 'blur(10px)',
                        border: 'none',
                        color: '#FFFFFF',
                        fontSize: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(255, 72, 0, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)'
                        e.target.style.background = '#FF4800'
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)'
                        e.target.style.background = 'rgba(255, 72, 0, 0.9)'
                      }}
                    />

                    {/* Title and Location Overlay - IMPROVED: Better positioning */}
                    <div style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      padding: '20px',
                      color: '#FFFFFF'
                    }}>
                      <h6 style={{ 
                        fontWeight: '700', 
                        margin: '0 0 6px 0', 
                        fontSize: '18px',
                        color: '#FFFFFF',
                        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                      }}>
                        {item.title}
                      </h6>
                      <p style={{ 
                        fontSize: '14px', 
                        color: '#FFFFFF', 
                        margin: '0',
                        display: 'flex',
                        alignItems: 'center',
                        opacity: 0.95,
                        textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                      }}>
                        <span style={{ marginRight: '6px', fontSize: '16px' }}>📍</span>
                        {item.location}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Trips List - FIXED: Now using the defined tripItems */
        <div className="px-3">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {tripItems.map((trip) => (
              <div
                key={trip.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '16px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #F0F0F0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                onClick={() => router.push('/mytrips')}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                <img
                  src={trip.image}
                  alt={trip.title}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                    marginRight: '16px'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h6 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#333',
                    margin: '0 0 4px 0'
                  }}>
                    {trip.title}
                  </h6>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    margin: '0'
                  }}>
                    {trip.dates}
                  </p>
                </div>
                <div style={{
                  fontSize: '18px',
                  color: '#999'
                }}>
                  ›
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default SavesPage
// 'use client'

// import React, { useState } from 'react'
// import { Button, Card } from 'antd'
// import { ArrowLeftOutlined, HeartFilled, StarFilled } from '@ant-design/icons'
// import { useRouter } from 'next/navigation'

// const SavesPage = () => {
//   const router = useRouter()
//   const [activeTab, setActiveTab] = useState('saves') // Added state for tab toggle
//   const [activeFilter, setActiveFilter] = useState('all')

//   const filters = [
//     {
//       key: 'all',
//       label: 'All',
//       gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
//     },
//     {
//       key: 'stay',
//       label: 'Stay',
//       gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
//     },
//     {
//       key: 'food',
//       label: 'Food',
//       gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
//     },
//     {
//       key: 'activity',
//       label: 'Activity/Event',
//       gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
//     },
//     {
//       key: 'local',
//       label: 'Local/Culture',
//       gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
//     }
//   ]

//   const savedItems = [
//     {
//       id: 1,
//       title: 'Hotel Hyatt',
//       location: 'Hawaii',
//       category: 'stay',
//       rating: 4.5,
//       image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Luxury beachfront resort with stunning ocean views'
//     },
//     {
//       id: 2,
//       title: 'Villa Coralina',
//       location: 'Goa',
//       category: 'stay',
//       rating: 4.8,
//       image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Exclusive hillside villa with panoramic views'
//     },
//     {
//       id: 3,
//       title: 'Beach Paradise Resort',
//       location: 'Maldives',
//       category: 'stay',
//       rating: 4.9,
//       image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Overwater bungalows in crystal clear waters'
//     },
//     {
//       id: 4,
//       title: 'The Great Indian Thali',
//       location: 'Jaipur, India',
//       category: 'food',
//       rating: 4.7,
//       image: 'https://images.unsplash.com/photo-1603894576174-8b8a5d3f2c5e?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Authentic Rajasthani cuisine in a traditional setting.'
//     },
//     {
//       id: 5,
//       title: 'Mountain Biking Trails',
//       location: 'Whistler, Canada',
//       category: 'activity',
//       rating: 4.6,
//       image: 'https://images.unsplash.com/photo-1510414842594-ead21f740f04?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Exciting trails for all skill levels with stunning views.'
//     },
//     {
//       id: 6,
//       title: 'Kyoto Tea Ceremony',
//       location: 'Kyoto, Japan',
//       category: 'local',
//       rating: 4.9,
//       image: 'https://images.unsplash.com/photo-1582054238719-7e5d8d0b2e8a?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Experience traditional Japanese tea culture.'
//     },
//     {
//       id: 7,
//       title: 'Amazon River Cruise',
//       location: 'Manaus, Brazil',
//       category: 'activity',
//       rating: 4.4,
//       image: 'https://images.unsplash.com/photo-1507525428034-b723cf961e3e?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Explore the Amazon rainforest from a comfortable cruise.'
//     },
//     {
//       id: 8,
//       title: 'Street Food Tour',
//       location: 'Bangkok, Thailand',
//       category: 'food',
//       rating: 4.8,
//       image: 'https://images.unsplash.com/photo-1504754528070-e6878926dd7c?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Delicious and authentic Thai street food experience.'
//     },
//     {
//       id: 9,
//       title: 'Northern Lights Lodge',
//       location: 'Lapland, Finland',
//       category: 'stay',
//       rating: 4.7,
//       image: 'https://images.unsplash.com/photo-1500382017468-9049cd26cea2?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Cozy lodge perfect for aurora borealis viewing.'
//     },
//     {
//       id: 10,
//       title: 'Historical Walking Tour',
//       location: 'Rome, Italy',
//       category: 'local',
//       rating: 4.6,
//       image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
//       isSaved: true,
//       description: 'Discover the ancient wonders of Rome on foot.'
//     }
//   ]

//   const tripItems = [
//     {
//       id: 1,
//       title: 'Weekend Plan - August',
//       dates: 'August 13-16, 2025',
//       image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
//     },
//     {
//       id: 2,
//       title: 'Goa Getaway',
//       dates: 'December 15-20, 2025',
//       image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
//     },
//     {
//       id: 3,
//       title: 'Summer Europe Trip',
//       dates: 'June 1-30, 2026',
//       image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
//     },
//     {
//       id: 4,
//       title: 'Himalayan Trek',
//       dates: 'September 5-12, 2025',
//       image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
//     }
//   ]

//   const filteredItems = activeFilter === 'all'
//     ? savedItems
//     : savedItems.filter(item => item.category === activeFilter)

//   const handleTabChange = (tab) => {
//     setActiveTab(tab)
//     // Removed the router.push for '/my-trips' as it will be rendered within the same page
//   }

//   return (
//     <div style={{
//       backgroundColor: '#FDF2E9',
//       minHeight: '100vh',
//       paddingBottom: '100px'
//     }}>
//       {/* Enhanced Header */}
//       <div
//         className="d-flex align-items-center p-3"
//         style={{
//           paddingTop: '60px',
//           background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
//           borderBottom: '1px solid rgba(255,255,255,0.2)'
//         }}
//       >
//         <Button
//           icon={<ArrowLeftOutlined />}
//           type="text"
//           onClick={() => router.back()}
//           style={{
//             marginRight: '15px',
//             fontSize: '20px',
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',
//             backgroundColor: 'rgba(255,255,255,0.2)',
//             color: '#333'
//           }}
//         />
//         <h4 style={{
//           margin: 0,
//           fontWeight: 'bold',
//           fontSize: '24px',
//           color: '#333',
//           textShadow: '0 1px 2px rgba(0,0,0,0.1)'
//         }}>
//           Saves
//         </h4>
//       </div>

//       {/* Tab Toggle */}
//       <div className="px-3 py-3">
//         <div style={{
//           display: 'flex',
//           backgroundColor: '#F5F5F5',
//           borderRadius: '25px',
//           padding: '4px',
//           width: 'fit-content',
//           margin: '0 auto' // Center the tab toggle
//         }}>
//           <button
//             style={{
//               padding: '8px 24px',
//               borderRadius: '20px',
//               border: 'none',
//               background: activeTab === 'saves' ? '#FF4800' : 'transparent',
//               color: activeTab === 'saves' ? '#FFFFFF' : '#666',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease'
//             }}
//             onClick={() => handleTabChange('saves')}
//           >
//             Saves
//           </button>
//           <button
//             style={{
//               padding: '8px 24px',
//               borderRadius: '20px',
//               border: 'none',
//               background: activeTab === 'trips' ? '#FF4800' : 'transparent',
//               color: activeTab === 'trips' ? '#FFFFFF' : '#666',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease'
//             }}
//             onClick={() => handleTabChange('trips')}
//           >
//             Trips
//           </button>
//         </div>
//       </div>

//       {/* Content based on active tab */}
//       {activeTab === 'saves' ? (
//         <>
//           {/* Enhanced Filter Tabs */}
//           <div className="px-3 py-4">
//             <div
//               className="d-flex"
//               style={{
//                 overflowX: 'auto',
//                 gap: '12px',
//                 paddingBottom: '10px',
//                 scrollbarWidth: 'none',
//                 msOverflowStyle: 'none'
//               }}
//             >
//               {filters.map((filter) => (
//                 <button
//                   key={filter.key}
//                   style={{
//                     padding: '12px 24px',
//                     borderRadius: '25px',
//                     border: 'none',
//                     background: activeFilter === filter.key
//                       ? filter.gradient
//                       : 'rgba(255,255,255,0.8)',
//                     color: activeFilter === filter.key ? 'white' : '#666',
//                     cursor: 'pointer',
//                     whiteSpace: 'nowrap',
//                     fontSize: '14px',
//                     fontWeight: '600',
//                     margin: 0,
//                     minWidth: 'fit-content',
//                     boxShadow: activeFilter === filter.key
//                       ? '0 4px 15px rgba(0,0,0,0.2)'
//                       : '0 2px 8px rgba(0,0,0,0.1)',
//                     transform: activeFilter === filter.key ? 'translateY(-2px)' : 'none',
//                     transition: 'all 0.3s ease',
//                     backdropFilter: 'blur(10px)'
//                   }}
//                   onClick={() => setActiveFilter(filter.key)}
//                   onMouseEnter={(e) => {
//                     if (activeFilter !== filter.key) {
//                       e.target.style.transform = 'translateY(-1px)'
//                       e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
//                     }
//                   }}
//                   onMouseLeave={(e) => {
//                     if (activeFilter !== filter.key) {
//                       e.target.style.transform = 'none'
//                       e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
//                     }
//                   }}
//                 >
//                   {filter.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Enhanced Grid Layout */}
//           <div className="px-3">
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
//               {filteredItems.map((item, index) => (
//                 <Card
//                   key={item.id}
//                   style={{
//                     borderRadius: '20px',
//                     overflow: 'hidden',
//                     border: 'none',
//                     position: 'relative',
//                     boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
//                     background: 'rgba(255,255,255,0.95)',
//                     backdropFilter: 'blur(10px)',
//                     transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//                     cursor: 'pointer',
//                     animationDelay: `${index * 0.1}s`
//                   }}
//                   bodyStyle={{ padding: '0' }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
//                     e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'translateY(0) scale(1)'
//                     e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'
//                   }}
//                 >
//                   <div style={{ position: 'relative', overflow: 'hidden' }}>
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       style={{
//                         width: '100%',
//                         height: '250px',
//                         objectFit: 'cover',
//                         transition: 'transform 0.6s ease'
//                       }}
//                       onLoad={(e) => {
//                         e.target.style.filter = 'contrast(1.1) saturate(1.2) brightness(1.05)'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.target.style.transform = 'scale(1.1)'
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.transform = 'scale(1)'
//                       }}
//                     />

//                     {/* Gradient Overlay */}
//                     <div style={{
//                       position: 'absolute',
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
//                       opacity: 0.7
//                     }} />

//                     {/* Enhanced Rating Badge */}
//                     <div style={{
//                       position: 'absolute',
//                       top: '20px',
//                       right: '20px',
//                       background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
//                       borderRadius: '20px',
//                       padding: '8px 12px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       backdropFilter: 'blur(10px)',
//                       boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                       border: '1px solid rgba(255,255,255,0.2)'
//                     }}>
//                       <StarFilled style={{
//                         color: '#FFB300',
//                         fontSize: '14px',
//                         marginRight: '4px',
//                         filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))'
//                       }} />
//                       <span style={{
//                         fontSize: '14px',
//                         fontWeight: '700',
//                         color: '#333',
//                         textShadow: '0 1px 2px rgba(255,255,255,0.8)'
//                       }}>
//                         {item.rating}
//                       </span>
//                     </div>

//                     {/* Enhanced Save Button */}
//                     <Button
//                       icon={<HeartFilled />}
//                       style={{
//                         position: 'absolute',
//                         bottom: '20px',
//                         right: '20px',
//                         borderRadius: '50%',
//                         width: '50px',
//                         height: '50px',
//                         background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
//                         border: 'none',
//                         color: 'white',
//                         fontSize: '18px',
//                         boxShadow: '0 6px 20px rgba(255, 87, 34, 0.4)',
//                         transition: 'all 0.3s ease',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.target.style.transform = 'scale(1.1)'
//                         e.target.style.boxShadow = '0 8px 25px rgba(255, 87, 34, 0.6)'
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.transform = 'scale(1)'
//                         e.target.style.boxShadow = '0 6px 20px rgba(255, 87, 34, 0.4)'
//                       }}
//                     />
//                   </div>

//                   {/* Enhanced Content Section */}
//                   <div style={{
//                     padding: '24px',
//                     background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)'
//                   }}>
//                     <h6 style={{
//                       fontWeight: '700',
//                       margin: '0 0 8px 0',
//                       fontSize: '18px',
//                       color: '#333',
//                       letterSpacing: '-0.5px'
//                     }}>
//                       {item.title}
//                     </h6>

//                     <p style={{
//                       fontSize: '14px',
//                       color: '#666',
//                       margin: '0 0 8px 0',
//                       display: 'flex',
//                       alignItems: 'center'
//                     }}>
//                       <span style={{ marginRight: '6px' }}>📍</span>
//                       {item.location}
//                     </p>

//                     {item.description && (
//                       <p style={{
//                         fontSize: '13px',
//                         color: '#888',
//                         margin: '0',
//                         lineHeight: '1.4',
//                         fontStyle: 'italic'
//                       }}>
//                         {item.description}
//                       </p>
//                     )}
//                   </div>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </>
//       ) : (
//         /* Trips List */
//         <div className="px-3">
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             {tripItems.map((trip) => (
//               <div
//                 key={trip.id}
//                 style={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   padding: '16px',
//                   backgroundColor: '#FFFFFF',
//                   borderRadius: '12px',
//                   border: '1px solid #F0F0F0',
//                   cursor: 'pointer',
//                   transition: 'all 0.2s ease',
//                   boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
//                 }}
//                 onClick={() => router.push(`/trips/${trip.id}`)} 
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-2px)'
//                   e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)'
//                   e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'
//                 }}
//               >
//                 <img
//                   src={trip.image}
//                   alt={trip.title}
//                   style={{
//                     width: '60px',
//                     height: '60px',
//                     borderRadius: '8px',
//                     objectFit: 'cover',
//                     marginRight: '16px'
//                   }}
//                 />
//                 <div style={{ flex: 1 }}>
//                   <h6 style={{
//                     fontSize: '16px',
//                     fontWeight: '600',
//                     color: '#333',
//                     margin: '0 0 4px 0'
//                   }}>
//                     {trip.title}
//                   </h6>
//                   <p style={{
//                     fontSize: '14px',
//                     color: '#666',
//                     margin: '0'
//                   }}>
//                     {trip.dates}
//                   </p>
//                 </div>
//                 <div style={{
//                   fontSize: '18px',
//                   color: '#999'
//                 }}>
//                   ›
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default SavesPage


// // import React, { useState } from 'react'
// // import { Button, Card } from 'antd'
// // import { ArrowLeftOutlined, HeartFilled, StarFilled } from '@ant-design/icons'
// // import { useRouter } from 'next/navigation'

// // const SavesPage = () => {
// //   const router = useRouter()
// //   const [activeFilter, setActiveFilter] = useState('all')
  
// //   const filters = [
// //     { 
// //       key: 'all', 
// //       label: 'All',
// //       gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
// //     },
// //     { 
// //       key: 'stay', 
// //       label: 'Stay',
// //       gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
// //     },
// //     { 
// //       key: 'food', 
// //       label: 'Food',
// //       gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
// //     },
// //     { 
// //       key: 'activity', 
// //       label: 'Activity/Event',
// //       gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
// //     },
// //     { 
// //       key: 'local', 
// //       label: 'Local/Culture',
// //       gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
// //     }
// //   ]

// //   const savedItems = [
// //     {
// //       id: 1,
// //       title: 'Hotel Hyatt',
// //       location: 'Home',
// //       category: 'stay',
// //       rating: 4.5,
// //       image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
// //       isSaved: true,
// //       description: 'Luxury beachfront resort with stunning ocean views'
// //     },
// //     {
// //       id: 2,
// //       title: 'Villa Corelina',
// //       location: 'Goa',
// //       category: 'stay',
// //       rating: 4.8,
// //       image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
// //       isSaved: true,
// //       description: 'Exclusive hillside villa with panoramic views'
// //     },
// //     {
// //       id: 3,
// //       title: 'Beach Paradise Resort',
// //       location: 'Maldives',
// //       category: 'stay',
// //       rating: 4.9,
// //       image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
// //       isSaved: true,
// //       description: 'Overwater bungalows in crystal clear waters'
// //     },
// //     {
// //       id: 4,
// //       title: 'Sunset Rooftop Bar',
// //       location: 'Santorini',
// //       category: 'food',
// //       rating: 4.7,
// //       image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
// //       isSaved: true,
// //       description: 'Authentic Greek cuisine with breathtaking sunsets'
// //     },
// //     {
// //       id: 5,
// //       title: 'Adventure Park',
// //       location: 'Costa Rica',
// //       category: 'activity',
// //       rating: 4.6,
// //       image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
// //       isSaved: true,
// //       description: 'Thrilling zip-line and canopy tours'
// //     },
// //     {
// //       id: 6,
// //       title: 'Cultural Heritage Site',
// //       location: 'Kyoto',
// //       category: 'local',
// //       rating: 4.8,
// //       image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
// //       isSaved: true,
// //       description: 'Traditional temples and authentic experiences'
// //     }
// //   ]

// //   const filteredItems = activeFilter === 'all' 
// //     ? savedItems 
// //     : savedItems.filter(item => item.category === activeFilter)

// //   return (
// //     <div style={{ 
// //       backgroundColor: '#FDF2E9', 
// //       minHeight: '100vh', 
// //       paddingBottom: '100px'
// //     }}>
// //       {/* Enhanced Header */}
// //       <div 
// //         className="d-flex align-items-center p-3" 
// //         style={{ 
// //           paddingTop: '60px',
// //           background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
// //           borderBottom: '1px solid rgba(255,255,255,0.2)'
// //         }}
// //       >
// //         <Button
// //           icon={<ArrowLeftOutlined />}
// //           type="text"
// //           onClick={() => router.back()}
// //           style={{ 
// //             marginRight: '15px', 
// //             fontSize: '20px',
// //             width: '40px',
// //             height: '40px',
// //             borderRadius: '50%',
// //             backgroundColor: 'rgba(255,255,255,0.2)',
// //             color: '#333'
// //           }}
// //         />
// //         <h4 style={{ 
// //           margin: 0, 
// //           fontWeight: 'bold', 
// //           fontSize: '24px',
// //           color: '#333',
// //           textShadow: '0 1px 2px rgba(0,0,0,0.1)'
// //         }}>
// //           Saves
// //         </h4>
// //       </div>

// //       {/* Enhanced Filter Tabs */}
// //       <div className="px-3 py-4">
// //         <div 
// //           className="d-flex" 
// //           style={{ 
// //             overflowX: 'auto', 
// //             gap: '12px', 
// //             paddingBottom: '10px',
// //             scrollbarWidth: 'none',
// //             msOverflowStyle: 'none'
// //           }}
// //         >
// //           {filters.map((filter) => (
// //             <button
// //               key={filter.key}
// //               style={{
// //                 padding: '12px 24px',
// //                 borderRadius: '25px',
// //                 border: 'none',
// //                 background: activeFilter === filter.key 
// //                   ? filter.gradient 
// //                   : 'rgba(255,255,255,0.8)',
// //                 color: activeFilter === filter.key ? 'white' : '#666',
// //                 cursor: 'pointer',
// //                 whiteSpace: 'nowrap',
// //                 fontSize: '14px',
// //                 fontWeight: '600',
// //                 margin: 0,
// //                 minWidth: 'fit-content',
// //                 boxShadow: activeFilter === filter.key 
// //                   ? '0 4px 15px rgba(0,0,0,0.2)' 
// //                   : '0 2px 8px rgba(0,0,0,0.1)',
// //                 transform: activeFilter === filter.key ? 'translateY(-2px)' : 'none',
// //                 transition: 'all 0.3s ease',
// //                 backdropFilter: 'blur(10px)'
// //               }}
// //               onClick={() => setActiveFilter(filter.key)}
// //               onMouseEnter={(e) => {
// //                 if (activeFilter !== filter.key) {
// //                   e.target.style.transform = 'translateY(-1px)'
// //                   e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
// //                 }
// //               }}
// //               onMouseLeave={(e) => {
// //                 if (activeFilter !== filter.key) {
// //                   e.target.style.transform = 'none'
// //                   e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
// //                 }
// //               }}
// //             >
// //               {filter.label}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Enhanced Grid Layout */}
// //       <div className="px-3">
// //         <div className="row g-3">
// //           {filteredItems.map((item, index) => (
// //             <div 
// //               key={item.id} 
// //               className="col-12 col-md-6 col-lg-4"
// //             >
// //               <Card
// //                 style={{
// //                   borderRadius: '20px',
// //                   overflow: 'hidden',
// //                   border: 'none',
// //                   position: 'relative',
// //                   boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
// //                   background: 'rgba(255,255,255,0.95)',
// //                   backdropFilter: 'blur(10px)',
// //                   transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// //                   cursor: 'pointer'
// //                 }}
// //                 bodyStyle={{ padding: '0' }}
// //                 className="save-item-card"
// //                 style={{
// //                   animationDelay: `${index * 0.1}s`
// //                 }}
// //                 onMouseEnter={(e) => {
// //                   e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
// //                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
// //                 }}
// //                 onMouseLeave={(e) => {
// //                   e.currentTarget.style.transform = 'translateY(0) scale(1)'
// //                   e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'
// //                 }}
// //               >
// //                 <div style={{ position: 'relative', overflow: 'hidden' }}>
// //                   <img
// //                     src={item.image}
// //                     alt={item.title}
// //                     style={{ 
// //                       width: '100%', 
// //                       height: '250px',
// //                       objectFit: 'cover',
// //                       transition: 'transform 0.6s ease'
// //                     }}
// //                     onLoad={(e) => {
// //                       e.target.style.filter = 'contrast(1.1) saturate(1.2) brightness(1.05)'
// //                     }}
// //                     onMouseEnter={(e) => {
// //                       e.target.style.transform = 'scale(1.1)'
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.target.style.transform = 'scale(1)'
// //                     }}
// //                   />
                  
// //                   {/* Gradient Overlay */}
// //                   <div style={{
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                     right: 0,
// //                     bottom: 0,
// //                     background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
// //                     opacity: 0.7
// //                   }} />

// //                   {/* Enhanced Rating Badge */}
// //                   <div style={{
// //                     position: 'absolute',
// //                     top: '20px',
// //                     right: '20px',
// //                     background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 100%)',
// //                     borderRadius: '20px',
// //                     padding: '8px 12px',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     backdropFilter: 'blur(10px)',
// //                     boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
// //                     border: '1px solid rgba(255,255,255,0.2)'
// //                   }}>
// //                     <StarFilled style={{ 
// //                       color: '#FFB300', 
// //                       fontSize: '14px', 
// //                       marginRight: '4px',
// //                       filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))'
// //                     }} />
// //                     <span style={{ 
// //                       fontSize: '14px', 
// //                       fontWeight: '700',
// //                       color: '#333',
// //                       textShadow: '0 1px 2px rgba(255,255,255,0.8)'
// //                     }}>
// //                       {item.rating}
// //                     </span>
// //                   </div>

// //                   {/* Enhanced Save Button */}
// //                   <Button
// //                     icon={<HeartFilled />}
// //                     style={{
// //                       position: 'absolute',
// //                       bottom: '20px',
// //                       right: '20px',
// //                       borderRadius: '50%',
// //                       width: '50px',
// //                       height: '50px',
// //                       background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
// //                       border: 'none',
// //                       color: 'white',
// //                       fontSize: '18px',
// //                       boxShadow: '0 6px 20px rgba(255, 87, 34, 0.4)',
// //                       transition: 'all 0.3s ease',
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       justifyContent: 'center'
// //                     }}
// //                     onMouseEnter={(e) => {
// //                       e.target.style.transform = 'scale(1.1)'
// //                       e.target.style.boxShadow = '0 8px 25px rgba(255, 87, 34, 0.6)'
// //                     }}
// //                     onMouseLeave={(e) => {
// //                       e.target.style.transform = 'scale(1)'
// //                       e.target.style.boxShadow = '0 6px 20px rgba(255, 87, 34, 0.4)'
// //                     }}
// //                   />
// //                 </div>
                
// //                 {/* Enhanced Content Section */}
// //                 <div style={{ 
// //                   padding: '24px',
// //                   background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)'
// //                 }}>
// //                   <h6 style={{ 
// //                     fontWeight: '700', 
// //                     margin: '0 0 8px 0', 
// //                     fontSize: '18px',
// //                     color: '#333',
// //                     letterSpacing: '-0.5px'
// //                   }}>
// //                     {item.title}
// //                   </h6>
                  
// //                   <p style={{ 
// //                     fontSize: '14px', 
// //                     color: '#666', 
// //                     margin: '0 0 8px 0',
// //                     display: 'flex',
// //                     alignItems: 'center'
// //                   }}>
// //                     <span style={{ marginRight: '6px' }}>📍</span>
// //                     {item.location}
// //                   </p>
                  
// //                   {item.description && (
// //                     <p style={{
// //                       fontSize: '13px',
// //                       color: '#888',
// //                       margin: '0',
// //                       lineHeight: '1.4',
// //                       fontStyle: 'italic'
// //                     }}>
// //                       {item.description}
// //                     </p>
// //                   )}
// //                 </div>
// //               </Card>
// //             </div>
// //           ))}
// //         </div>
// //       </div>


// //     </div>
// //   )
// // }

// // export default SavesPage

// // app/saves/page.js - Enhanced Version with Trips Integration
// // 'use client'

// // import React, { useState } from 'react'
// // import { Button, Card } from 'antd'
// // import { ArrowLeftOutlined, HeartFilled, StarFilled, FilterOutlined } from '@ant-design/icons'
// // import { useRouter } from 'next/navigation'

// // const SavesPage = () => {
// //   const router = useRouter()
// //   const [activeTab, setActiveTab] = useState('saves')
// //   const [activeFilter, setActiveFilter] = useState('all')
  
// //   const filters = [
// //     { key: 'all', label: 'Filters' },
// //     { key: 'stays', label: 'Stays' },
// //     { key: 'food', label: 'Food & Drinks' },
// //     { key: 'activities', label: 'Activities' }
// //   ]

// //   const savedItems = [
// //     {
// //       id: 1,
// //       title: 'Hotel Hyatt',
// //       location: 'Hawaii',
// //       category: 'stays',
// //       rating: 4.5,
// //       image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
// //       isSaved: true,
// //       description: 'Luxury beachfront resort with stunning ocean views'
// //     },
// //     {
// //       id: 2,
// //       title: 'Villa Coralina',
// //       location: 'Goa',
// //       category: 'stays',
// //       rating: 4.5,
// //       image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
// //       isSaved: true,
// //       description: 'Exclusive hillside villa with panoramic views'
// //     },
// //     {
// //       id: 3,
// //       title: 'Beach Paradise Resort',
// //       location: 'Maldives',
// //       category: 'stays',
// //       rating: 4.9,
// //       image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&fit=crop&crop=center&auto=format&q=80',
// //       isSaved: true,
// //       description: 'Overwater bungalows in crystal clear waters'
// //     }
// //   ]

// //   const tripItems = [
// //     {
// //       id: 1,
// //       title: 'Weekend Plan',
// //       dates: 'August 13-16',
// //       image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
// //     },
// //     {
// //       id: 2,
// //       title: 'Goa',
// //       dates: 'December 15-20',
// //       image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
// //     },
// //     {
// //       id: 3,
// //       title: 'Summer Trip',
// //       dates: 'December 25-31',
// //       image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop&crop=center&auto=format&q=80'
// //     }
// //   ]

// //   const filteredItems = activeFilter === 'all' 
// //     ? savedItems 
// //     : savedItems.filter(item => item.category === activeFilter)

// //   const handleTabChange = (tab) => {
// //     setActiveTab(tab)
// //     if (tab === 'trips') {
// //       router.push('/my-trips')
// //     }
// //   }

// //   return (
// //     <div style={{ 
// //       backgroundColor: '#FFFFFF', 
// //       minHeight: '100vh', 
// //       paddingBottom: '100px'
// //     }}>
// //       {/* Header */}
// //       <div 
// //         className="d-flex align-items-center p-3" 
// //         style={{ 
// //           paddingTop: '60px',
// //           backgroundColor: '#FFFFFF',
// //           borderBottom: '1px solid rgba(0,0,0,0.05)'
// //         }}
// //       >
// //         <Button
// //           icon={<ArrowLeftOutlined />}
// //           type="text"
// //           onClick={() => router.back()}
// //           style={{ 
// //             marginRight: '15px', 
// //             fontSize: '18px',
// //             width: '40px',
// //             height: '40px',
// //             borderRadius: '50%',
// //             backgroundColor: 'transparent',
// //             color: '#333',
// //             border: 'none'
// //           }}
// //         />
// //         <h4 style={{ 
// //           margin: 0, 
// //           fontWeight: '600', 
// //           fontSize: '18px',
// //           color: '#333'
// //         }}>
// //           Saves
// //         </h4>
// //       </div>

// //       {/* Tab Toggle */}
// //       <div className="px-3 py-3">
// //         <div style={{
// //           display: 'flex',
// //           backgroundColor: '#F5F5F5',
// //           borderRadius: '25px',
// //           padding: '4px',
// //           width: 'fit-content'
// //         }}>
// //           <button
// //             style={{
// //               padding: '8px 24px',
// //               borderRadius: '20px',
// //               border: 'none',
// //               background: activeTab === 'saves' ? '#FF4800' : 'transparent',
// //               color: activeTab === 'saves' ? '#FFFFFF' : '#666',
// //               fontSize: '14px',
// //               fontWeight: '500',
// //               cursor: 'pointer',
// //               transition: 'all 0.3s ease'
// //             }}
// //             onClick={() => handleTabChange('saves')}
// //           >
// //             Saves
// //           </button>
// //           <button
// //             style={{
// //               padding: '8px 24px',
// //               borderRadius: '20px',
// //               border: 'none',
// //               background: activeTab === 'trips' ? '#FF4800' : 'transparent',
// //               color: activeTab === 'trips' ? '#FFFFFF' : '#666',
// //               fontSize: '14px',
// //               fontWeight: '500',
// //               cursor: 'pointer',
// //               transition: 'all 0.3s ease'
// //             }}
// //             onClick={() => handleTabChange('trips')}
// //           >
// //             Trips
// //           </button>
// //         </div>
// //       </div>

// //       {/* Content based on active tab */}
// //       {activeTab === 'saves' ? (
// //         <>
// //           {/* Filter Tabs */}
// //           <div className="px-3 pb-3">
// //             <div 
// //               className="d-flex" 
// //               style={{ 
// //                 overflowX: 'auto', 
// //                 gap: '12px',
// //                 scrollbarWidth: 'none',
// //                 msOverflowStyle: 'none'
// //               }}
// //             >
// //               {filters.map((filter) => (
// //                 <button
// //                   key={filter.key}
// //                   style={{
// //                     padding: '8px 16px',
// //                     borderRadius: '20px',
// //                     border: activeFilter === filter.key ? '2px solid #FF4800' : '1px solid #E0E0E0',
// //                     background: activeFilter === filter.key ? '#FFF5F2' : '#FFFFFF',
// //                     color: activeFilter === filter.key ? '#FF4800' : '#666',
// //                     cursor: 'pointer',
// //                     whiteSpace: 'nowrap',
// //                     fontSize: '14px',
// //                     fontWeight: '500',
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     gap: '6px'
// //                   }}
// //                   onClick={() => setActiveFilter(filter.key)}
// //                 >
// //                   {filter.key === 'all' && <FilterOutlined style={{ fontSize: '12px' }} />}
// //                   {filter.label}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Saves Grid */}
// //           <div className="px-3">
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
// //               {filteredItems.map((item) => (
// //                 <Card
// //                   key={item.id}
// //                   style={{
// //                     borderRadius: '16px',
// //                     overflow: 'hidden',
// //                     border: 'none',
// //                     boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
// //                     background: '#FFFFFF'
// //                   }}
// //                   bodyStyle={{ padding: '0' }}
// //                 >
// //                   <div style={{ position: 'relative' }}>
// //                     <img
// //                       src={item.image}
// //                       alt={item.title}
// //                       style={{ 
// //                         width: '100%', 
// //                         height: '200px',
// //                         objectFit: 'cover'
// //                       }}
// //                     />
                    
// //                     {/* Rating Badge */}
// //                     <div style={{
// //                       position: 'absolute',
// //                       top: '12px',
// //                       right: '12px',
// //                       background: 'rgba(0,0,0,0.7)',
// //                       borderRadius: '12px',
// //                       padding: '4px 8px',
// //                       display: 'flex',
// //                       alignItems: 'center',
// //                       gap: '4px'
// //                     }}>
// //                       <StarFilled style={{ color: '#FFD700', fontSize: '12px' }} />
// //                       <span style={{ 
// //                         fontSize: '12px', 
// //                         fontWeight: '500',
// //                         color: '#FFFFFF'
// //                       }}>
// //                         {item.rating}
// //                       </span>
// //                     </div>

// //                     {/* Save Button */}
// //                     <Button
// //                       icon={<HeartFilled />}
// //                       style={{
// //                         position: 'absolute',
// //                         bottom: '12px',
// //                         right: '12px',
// //                         borderRadius: '50%',
// //                         width: '40px',
// //                         height: '40px',
// //                         background: '#FF4800',
// //                         border: 'none',
// //                         color: '#FFFFFF',
// //                         fontSize: '16px',
// //                         display: 'flex',
// //                         alignItems: 'center',
// //                         justifyContent: 'center'
// //                       }}
// //                     />

// //                     {/* Title and Location Overlay */}
// //                     <div style={{
// //                       position: 'absolute',
// //                       bottom: '0',
// //                       left: '0',
// //                       right: '0',
// //                       background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
// //                       padding: '40px 16px 16px 16px',
// //                       color: '#FFFFFF'
// //                     }}>
// //                       <h6 style={{ 
// //                         fontWeight: '600', 
// //                         margin: '0 0 4px 0', 
// //                         fontSize: '16px',
// //                         color: '#FFFFFF'
// //                       }}>
// //                         {item.title}
// //                       </h6>
// //                       <p style={{ 
// //                         fontSize: '14px', 
// //                         color: '#FFFFFF', 
// //                         margin: '0',
// //                         display: 'flex',
// //                         alignItems: 'center',
// //                         opacity: 0.9
// //                       }}>
// //                         <span style={{ marginRight: '4px' }}>📍</span>
// //                         {item.location}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </Card>
// //               ))}
// //             </div>
// //           </div>
// //         </>
// //       ) : (
// //         /* Trips List */
// //         <div className="px-3">
// //           <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
// //             {tripItems.map((trip) => (
// //               <div
// //                 key={trip.id}
// //                 style={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   padding: '16px',
// //                   backgroundColor: '#FFFFFF',
// //                   borderRadius: '12px',
// //                   border: '1px solid #F0F0F0',
// //                   cursor: 'pointer',
// //                   transition: 'all 0.2s ease'
// //                 }}
// //                 onClick={() => router.push('/mytrips')}
// //               >
// //                 <img
// //                   src={trip.image}
// //                   alt={trip.title}
// //                   style={{
// //                     width: '60px',
// //                     height: '60px',
// //                     borderRadius: '8px',
// //                     objectFit: 'cover',
// //                     marginRight: '16px'
// //                   }}
// //                 />
// //                 <div style={{ flex: 1 }}>
// //                   <h6 style={{
// //                     fontSize: '16px',
// //                     fontWeight: '600',
// //                     color: '#333',
// //                     margin: '0 0 4px 0'
// //                   }}>
// //                     {trip.title}
// //                   </h6>
// //                   <p style={{
// //                     fontSize: '14px',
// //                     color: '#666',
// //                     margin: '0'
// //                   }}>
// //                     {trip.dates}
// //                   </p>
// //                 </div>
// //                 <div style={{
// //                   fontSize: '18px',
// //                   color: '#999'
// //                 }}>
// //                   ›
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default SavesPage