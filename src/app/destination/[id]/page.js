// // app/destination/[id]/page.js - Complete Enhanced Version
'use client'


import React, { useState, useRef, useEffect } from 'react'
import { Button, Avatar, Rate, Pagination } from 'antd'
import EnhancedTravelFilter from '../enhancedtraveller'
import { 
  ArrowLeftOutlined, 
  FilterOutlined, 
  HeartOutlined, 
  HeartFilled, 
  SoundOutlined, 
  StarFilled,
  LeftOutlined,
  RightOutlined,
  PlayCircleOutlined,
  PlusOutlined,
  EyeOutlined,
  ShareAltOutlined
} from '@ant-design/icons'
import { useRouter, useParams } from 'next/navigation'

const EnhancedDestinationPage = () => {
  const router = useRouter()
  const params = useParams()
  const [destinationData, setDestinationData] = useState(null)
  const [activeFilter, setActiveFilter] = useState('stays')
  const [savedItems, setSavedItems] = useState(new Set())
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSavedSlide, setCurrentSavedSlide] = useState(0)
  const [topRatedPage, setTopRatedPage] = useState(1)
  const [showAllCreators, setShowAllCreators] = useState(false)
  const [autoPlay, setAutoPlay] = useState(true)
  const popularStaysRef = useRef(null)
  const mostSavedRef = useRef(null)

  // Enhanced Destination Data with more content
  const destinationsData = {
    'goa': {
      name: 'Goa',
      country: 'India',
      description: 'Beautiful beaches and vibrant culture',
      totalPlaces: 2847,
      popularStays: [
        {
          id: 1,
          title: 'Greek Island Getaway',
          location: 'Goa',
          price: 2999,
          originalPrice: 4500,
          rating: 4.8,
          reviews: 1247,
          image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&h=800&q=90&auto=format&fit=crop',
          creator: {
            username: '@travelwithemma',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b131?w=100&h=100&fit=crop&crop=face',
            verified: true
          },
          bookings: '3K+ people booked',
          category: 'Luxury Resort',
          amenities: ['Pool', 'Beach Access', 'Spa', 'Restaurant'],
          visualElement: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop'
        },
        {
          id: 2,
          title: 'Luxury Beach Resort',
          location: 'Goa',
          price: 4500,
          originalPrice: 6000,
          rating: 4.9,
          reviews: 2156,
          image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&q=90&auto=format&fit=crop',
          creator: {
            username: '@travelwithriya',
            avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
            verified: true
          },
          bookings: '2K+ people booked',
          category: 'Beach Villa',
          amenities: ['Private Beach', 'Infinity Pool', 'Butler Service', 'Yacht'],
          visualElement: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop'
        },
        {
          id: 3,
          title: 'Hillside Villa Paradise',
          location: 'Goa',
          price: 3200,
          originalPrice: 4800,
          rating: 4.7,
          reviews: 892,
          image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&q=90&auto=format&fit=crop',
          creator: {
            username: '@wanderlust_soul',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
            verified: true
          },
          bookings: '1.5K+ people booked',
          category: 'Mountain Retreat',
          amenities: ['Mountain View', 'Garden', 'Fireplace', 'Terrace']
        },
        {
          id: 4,
          title: 'Boutique Coastal Stay',
          location: 'Goa',
          price: 2200,
          originalPrice: 3300,
          rating: 4.6,
          reviews: 654,
          image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&q=90&auto=format&fit=crop',
          creator: {
            username: '@coastal_vibes',
            avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face',
            verified: false
          },
          bookings: '800+ people booked',
          category: 'Boutique Hotel',
          amenities: ['Rooftop Bar', 'Coworking', 'Gym', 'Cafe']
        },
        {
          id: 5,
          title: 'Beachfront Paradise',
          location: 'Goa',
          price: 5200,
          originalPrice: 7800,
          rating: 4.9,
          reviews: 1534,
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&q=90&auto=format&fit=crop',
          creator: {
            username: '@luxury_escapes',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            verified: true
          },
          bookings: '4K+ people booked',
          category: 'Ultra Luxury',
          amenities: ['Private Jet', 'Helicopter', 'Michelin Chef', 'Concierge']
        }
      ]
    }
  }

  // Enhanced Most Saved Data (6 items for slider)
  const mostSavedPlaces = [
    {
      id: 1,
      title: 'Villa Corelina Premium',
      location: 'North Goa',
      discount: 40,
      rating: 4.5,
      reviews: 1203,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&q=90&auto=format&fit=crop',
      saves: 2847,
      category: 'Luxury Villa'
    },
    {
      id: 2,
      title: 'Sunset Beach House',
      location: 'South Goa',
      discount: 35,
      rating: 4.7,
      reviews: 856,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&q=90&auto=format&fit=crop',
      saves: 2156,
      category: 'Beach House'
    },
    {
      id: 3,
      title: 'Ocean View Resort',
      location: 'Calangute',
      discount: 25,
      rating: 4.6,
      reviews: 1456,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=800&q=90&auto=format&fit=crop',
      saves: 1923,
      category: 'Resort'
    },
    {
      id: 4,
      title: 'Heritage Palace',
      location: 'Old Goa',
      discount: 30,
      rating: 4.8,
      reviews: 743,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&q=90&auto=format&fit=crop',
      saves: 1634,
      category: 'Heritage Hotel'
    },
    {
      id: 5,
      title: 'Riverside Retreat',
      location: 'Panjim',
      discount: 45,
      rating: 4.4,
      reviews: 592,
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&h=800&q=90&auto=format&fit=crop',
      saves: 1387,
      category: 'Boutique Stay'
    },
    {
      id: 6,
      title: 'Tropical Paradise',
      location: 'Anjuna',
      discount: 50,
      rating: 4.9,
      reviews: 1821,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&q=90&auto=format&fit=crop',
      saves: 3245,
      category: 'Eco Resort'
    }
  ]

  // Enhanced Top Rated Data (12 items with pagination)
  const topRatedPlaces = [
    {
      id: 1,
      title: 'Royal Beach Palace',
      location: 'Candolim',
      rating: 4.9,
      reviews: 2847,
      price: 6500,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Ultra Luxury'
    },
    {
      id: 2,
      title: 'Serene Backwaters',
      location: 'Mandovi River',
      rating: 4.8,
      reviews: 1923,
      price: 4200,
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Nature Resort'
    },
    {
      id: 3,
      title: 'Clifftop Villa',
      location: 'Arambol',
      rating: 4.8,
      reviews: 1654,
      price: 5800,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Cliff Villa'
    },
    {
      id: 4,
      title: 'Portuguese Manor',
      location: 'Fontainhas',
      rating: 4.7,
      reviews: 1287,
      price: 3800,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Heritage'
    },
    {
      id: 5,
      title: 'Beachside Cabana',
      location: 'Palolem',
      rating: 4.7,
      reviews: 1156,
      price: 2800,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Beach Hut'
    },
    {
      id: 6,
      title: 'Luxury Yacht Stay',
      location: 'Miramar',
      rating: 4.9,
      reviews: 892,
      price: 12000,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Yacht'
    },
    {
      id: 7,
      title: 'Jungle Treehouse',
      location: 'Cotigao',
      rating: 4.6,
      reviews: 743,
      price: 3200,
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Eco Stay'
    },
    {
      id: 8,
      title: 'Spice Plantation Villa',
      location: 'Ponda',
      rating: 4.6,
      reviews: 654,
      price: 2900,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Plantation'
    },
    {
      id: 9,
      title: 'Sunset Point Resort',
      location: 'Chapora',
      rating: 4.8,
      reviews: 1423,
      price: 4800,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Resort'
    },
    {
      id: 10,
      title: 'Fisherman Village Stay',
      location: 'Betalbatim',
      rating: 4.5,
      reviews: 567,
      price: 2200,
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Local Stay'
    },
    {
      id: 11,
      title: 'Casino Resort',
      location: 'Panaji',
      rating: 4.7,
      reviews: 1834,
      price: 7500,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Casino Hotel'
    },
    {
      id: 12,
      title: 'Ayurveda Wellness Center',
      location: 'Ashwem',
      rating: 4.8,
      reviews: 976,
      price: 5200,
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&q=90&auto=format&fit=crop',
      category: 'Wellness'
    }
  ]

  // Enhanced Popular Creators Data (9 creators)
  const popularCreators = [
    {
      id: 1,
      username: '@travelwithriya',
      name: 'Riya Sharma',
      experiences: '200+ experiences',
      rating: 4.9,
      followers: '156K',
      posts: 1247,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      verified: true,
      specialty: 'Luxury Travel',
      location: 'Mumbai, India'
    },
    {
      id: 2,
      username: '@travelwithemma',
      name: 'Emma Johnson',
      experiences: '185+ experiences',
      rating: 4.8,
      followers: '143K',
      posts: 1156,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
      verified: true,
      specialty: 'Beach Destinations',
      location: 'California, USA'
    },
    {
      id: 3,
      username: '@wanderlust_soul',
      name: 'Alex Chen',
      experiences: '167+ experiences',
      rating: 4.7,
      followers: '98K',
      posts: 892,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      verified: true,
      specialty: 'Adventure Travel',
      location: 'Singapore'
    },
    {
      id: 4,
      username: '@coastal_vibes',
      name: 'Maria Santos',
      experiences: '145+ experiences',
      rating: 4.6,
      followers: '87K',
      posts: 743,
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face',
      verified: false,
      specialty: 'Coastal Life',
      location: 'Barcelona, Spain'
    },
    {
      id: 5,
      username: '@luxury_escapes',
      name: 'David Wilson',
      experiences: '234+ experiences',
      rating: 4.9,
      followers: '234K',
      posts: 1534,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      verified: true,
      specialty: 'Ultra Luxury',
      location: 'London, UK'
    },
    {
      id: 6,
      username: '@goa_insider',
      name: 'Priya Nair',
      experiences: '89+ experiences',
      rating: 4.8,
      followers: '67K',
      posts: 456,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face',
      verified: true,
      specialty: 'Local Goa',
      location: 'Goa, India'
    },
    {
      id: 7,
      username: '@beach_nomad',
      name: 'Jake Morrison',
      experiences: '123+ experiences',
      rating: 4.5,
      followers: '45K',
      posts: 623,
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face',
      verified: false,
      specialty: 'Budget Travel',
      location: 'Australia'
    },
    {
      id: 8,
      username: '@foodie_traveler',
      name: 'Sophie Martin',
      experiences: '178+ experiences',
      rating: 4.7,
      followers: '112K',
      posts: 934,
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=200&h=200&fit=crop&crop=face',
      verified: true,
      specialty: 'Food & Travel',
      location: 'Paris, France'
    },
    {
      id: 9,
      username: '@digital_nomad_life',
      name: 'Carlos Rodriguez',
      experiences: '156+ experiences',
      rating: 4.6,
      followers: '78K',
      posts: 678,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      verified: false,
      specialty: 'Remote Work',
      location: 'Mexico City'
    }
  ]

  const [continuousSlideOffset, setContinuousSlideOffset] = useState(0)

  useEffect(() => {
    const destinationId = params.id?.toLowerCase() || 'goa'
    const data = destinationsData[destinationId] || destinationsData['goa']
    setDestinationData(data)
  }, [params.id])

  useEffect(() => {
    // Auto-play functionality for Popular Stays carousel
    if (autoPlay && destinationData?.popularStays) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => 
          prev >= destinationData.popularStays.length - 1 ? 0 : prev + 1
        )
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [autoPlay, destinationData?.popularStays])

  const filterCategories = [
    { key: 'stays', label: 'Stays' },
    { key: 'food', label: 'Food & Drinks' },
    { key: 'activities', label: 'Activities' }
  ]

  const toggleSave = (id) => {
    const newSaved = new Set(savedItems)
    if (newSaved.has(id)) {
      newSaved.delete(id)
    } else {
      newSaved.add(id)
    }
    setSavedItems(newSaved)
  }

  const nextSlide = () => {
    if (destinationData?.popularStays) {
      setCurrentSlide(prev => 
        prev >= destinationData.popularStays.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevSlide = () => {
    if (destinationData?.popularStays) {
      setCurrentSlide(prev => 
        prev <= 0 ? destinationData.popularStays.length - 1 : prev - 1
      )
    }
  }

  const nextSavedSlide = () => {
    setCurrentSavedSlide(prev => 
      prev >= mostSavedPlaces.length - 2 ? 0 : prev + 1
    )
  }

  const prevSavedSlide = () => {
    setCurrentSavedSlide(prev => 
      prev <= 0 ? mostSavedPlaces.length - 2 : prev - 1
    )
  }

  if (!destinationData) {
    return (
      <div style={{ 
        backgroundColor: '#FDF2E9', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div className="text-center">
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🌍</div>
          <h5>Loading destination...</h5>
        </div>
      </div>
    )
  }

  const currentTopRatedItems = topRatedPlaces.slice((topRatedPage - 1) * 4, topRatedPage * 4)

  return (
    <div style={{ backgroundColor: '#FEFBF7', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Enhanced Header */}
      <div 
        style={{ 
          padding: '20px',
          backgroundColor: '#FEFBF7',
          borderBottom: '1px solid #f0f0f0'
        }}
      >
        {/* Background Pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF8A65' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5
        }} />
        
        <div className="container-fluid px-4 py-4" style={{ position: 'relative', zIndex: 1 }}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <button
                onClick={() => router.back()}
                style={{
                  background: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  marginRight: '20px',
                  fontSize: '18px',
                  color: '#333',
                  cursor: 'pointer',
                  padding: '12px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#FF5722'
                  e.target.style.color = 'white'
                  e.target.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(255,255,255,0.9)'
                  e.target.style.color = '#333'
                  e.target.style.transform = 'scale(1)'
                }}
              >
                <ArrowLeftOutlined />
              </button>
              
              <div className="d-flex align-items-center">
                <div>
                  <h3 style={{ 
                    margin: 0, 
                    fontWeight: 'bold', 
                    fontSize: '28px',
                    color: '#333',
                    letterSpacing: '-1px',
                    textShadow: '0 1px 2px rgba(255,255,255,0.8)'
                  }}>
                    {destinationData.name}
                  </h3>
                  <div className="d-flex align-items-center mt-1">
                    <span style={{ 
                      fontSize: '15px', 
                      color: '#666',
                      marginRight: '12px'
                    }}>
                      📍 {destinationData.country}
                    </span>
                    <div style={{
                      backgroundColor: 'rgba(255, 87, 34, 0.1)',
                      color: '#FF5722',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      border: '1px solid rgba(255, 87, 34, 0.2)'
                    }}>
                      {destinationData.totalPlaces}+ places
                    </div>
                  </div>
                </div>
                
                {/* Destination Stats */}
                <div className="d-flex align-items-center ml-4" style={{ marginLeft: '30px' }}>
                  <div className="d-flex flex-column align-items-center mx-3">
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="d-flex align-items-center gap-3">
              <Button
                icon={<ShareAltOutlined />}
                style={{
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  color: '#666',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              />
              <Button
                icon={<HeartOutlined />}
                style={{
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  border: 'none',
                  color: '#666',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Filter Tabs */}


      <EnhancedTravelFilter 
  activeFilter={activeFilter}
  setActiveFilter={setActiveFilter}
/>
      {/* <div className="px-3 py-3">
        <div className="d-flex align-items-center" style={{ gap: '12px', overflowX: 'auto', paddingBottom: '5px' }}>
          <Button
            icon={<FilterOutlined />}
            style={{
              borderRadius: '25px',
              border: '1px solid #ddd',
              backgroundColor: 'white',
              color: '#666',
              padding: '8px 16px',
              height: 'auto',
              fontWeight: '500',
              minWidth: 'fit-content'
            }}
          >
            Filters
          </Button>

          {filterCategories.map((category) => (
            <button
              key={category.key}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: 'none',
                background: activeFilter === category.key 
                  ? 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)' 
                  : 'white',
                color: activeFilter === category.key ? 'white' : '#666',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontSize: '14px',
                fontWeight: '600',
                boxShadow: activeFilter === category.key 
                  ? '0 4px 15px rgba(255, 87, 34, 0.3)' 
                  : '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                minWidth: 'fit-content'
              }}
              onClick={() => setActiveFilter(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div> */}

      {/* 1. POPULAR STAYS - Single Card Responsive Carousel */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center px-3 mb-4">
          <div>
            <h5 style={{ 
              fontWeight: 'bold', 
              margin: 0, 
              fontSize: '22px',
              color: '#333'
            }}>
              Popular Stays
            </h5>
            <p style={{ 
              margin: 0, 
              fontSize: '14px', 
              color: '#666'
            }}>
              Hand-picked by our travel experts
            </p>
          </div>
          
          <div className="d-flex align-items-center gap-1">
            <button
              onClick={() => setAutoPlay(!autoPlay)}
              style={{
                background: autoPlay ? '#FF5722' : 'white',
                color: autoPlay ? 'white' : '#666',
                border: '1px solid #ddd',
                borderRadius: '20px',
                padding: '6px 12px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              {autoPlay ? 'Pause' : 'Play'}
            </button>
            
            <div className="d-flex gap-2">
              <button
                onClick={prevSlide}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #ddd',
                  background: 'white',
                  color: '#666',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#FF5722'
                  e.target.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white'
                  e.target.style.color = '#666'
                }}
              >
                <LeftOutlined />
              </button>
              <button
                onClick={nextSlide}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid #ddd',
                  background: 'white',
                  color: '#666',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#FF5722'
                  e.target.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white'
                  e.target.style.color = '#666'
                }}
              >
                <RightOutlined />
              </button>
            </div>
          </div>
        </div>

        {/* Single Card Responsive Carousel Container */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div 
            style={{
              display: 'flex',
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              gap: '0px'
            }}
          >
            {destinationData.popularStays.map((stay, index) => (
              <div
                key={stay.id}
                style={{
                  minWidth: '100%',
                  padding: '0 20px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <div
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    position: 'relative',
                    background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                    width: '100%',
                    maxWidth: '500px', // Large size for desktop
                    '@media (max-width: 992px)': {
                      maxWidth: '450px' // Medium size for tablets
                    },
                    '@media (max-width: 768px)': {
                      maxWidth: '400px' // Medium size for mobile
                    }
                  }}
                  className="responsive-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)'
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)'
                  }}
                >
                  {/* Image Section */}
                  <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }} className="card-image-container">
                    <img
                      src={stay.image}
                      alt={stay.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.8s ease'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)',
                      opacity: 0.5
                    }} />

                    {/* Creator Info */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      borderRadius: '20px',
                      padding: '6px 12px',
                      display: 'flex',
                      alignItems: 'center',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                      <Avatar
                        src={stay.creator.avatar}
                        size={24}
                        style={{ marginRight: '8px' }}
                      />
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#333' }}>
                        {stay.creator.username}
                      </span>
                      {stay.creator.verified && (
                        <div style={{
                          marginLeft: '4px',
                          width: '14px',
                          height: '14px',
                          borderRadius: '50%',
                          backgroundColor: '#1890ff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <span style={{ color: 'white', fontSize: '8px' }}>✓</span>
                        </div>
                      )}
                    </div>

                    {/* Rating Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      borderRadius: '15px',
                      padding: '6px 10px',
                      display: 'flex',
                      alignItems: 'center',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                      <StarFilled style={{ color: '#FFB300', fontSize: '12px', marginRight: '3px' }} />
                      <span style={{ fontSize: '12px', fontWeight: '600', color: '#333' }}>
                        {stay.rating}
                      </span>
                    </div>

                    {/* Sound Button */}
                    <Button
                      icon={<SoundOutlined />}
                      style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        border: 'none',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        fontSize: '12px'
                      }}
                    />

                    {/* Category Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '15px',
                      left: '15px',
                      backgroundColor: '#FF5722',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: '15px',
                      fontSize: '11px',
                      fontWeight: '600',
                      boxShadow: '0 3px 10px rgba(255, 87, 34, 0.4)'
                    }}>
                      {stay.category}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div style={{ padding: '20px' }}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div style={{ flex: 1 }}>
                        <h5 style={{ 
                          fontWeight: 'bold', 
                          margin: '0 0 6px 0', 
                          fontSize: '16px',
                          color: '#333',
                          letterSpacing: '-0.3px'
                        }}>
                          {stay.title}
                        </h5>
                        <p style={{ 
                          fontSize: '13px', 
                          color: '#666', 
                          margin: '0 0 8px 0',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          📍 {stay.location}
                        </p>
                        
                        {/* Price Section */}
                        <div className="d-flex align-items-center mb-2">
                          <span style={{ 
                            fontSize: '18px', 
                            fontWeight: 'bold',
                            color: '#FF5722'
                          }}>
                            ₹{stay.price.toLocaleString()}
                          </span>
                          {stay.originalPrice && (
                            <span style={{ 
                              fontSize: '12px', 
                              color: '#999',
                              textDecoration: 'line-through',
                              marginLeft: '6px'
                            }}>
                              ₹{stay.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        
                        <p style={{ 
                          fontSize: '11px', 
                          color: '#FF5722', 
                          margin: 0,
                          fontWeight: '500'
                        }}>
                          👥 {stay.bookings}
                        </p>
                      </div>
                      
                      <div className="d-flex align-items-center gap-2">
                        <Button
                          icon={savedItems.has(stay.id) ? <HeartFilled /> : <HeartOutlined />}
                          onClick={() => toggleSave(stay.id)}
                          style={{
                            borderRadius: '50%',
                            width: '36px',
                            height: '36px',
                            border: '1px solid #FF5722',
                            color: savedItems.has(stay.id) ? '#FF5722' : '#666',
                            backgroundColor: savedItems.has(stay.id) ? 'rgba(255, 87, 34, 0.1)' : 'white',
                            fontSize: '14px'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="d-flex justify-content-center align-items-center mt-4" style={{ gap: '12px' }}>
          {destinationData.popularStays.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? '32px' : '12px',
                height: '12px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: currentSlide === index ? '#FF5722' : '#ddd',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. MOST SAVED - Continuous Slider */}
      <div className="mb-5">
        <div className="d-flex justify-content-between align-items-center px-3 mb-4">
          <div>
            <h5 style={{ 
              fontWeight: 'bold', 
              margin: 0, 
              fontSize: '20px',
              color: '#333'
            }}>
              Most Saved
            </h5>
            <p style={{ 
              margin: 0, 
              fontSize: '14px', 
              color: '#666'
            }}>
              Travelers' favorites • Continuously updated
            </p>
          </div>
        </div>

        {/* Continuous Slider Container */}
        <div style={{ 
          overflow: 'hidden',
          width: '100%',
          position: 'relative'
        }}>
          <div 
            style={{
              display: 'flex',
              gap: '20px',
              width: 'calc(300px * 12)', // Width for 2 sets of cards
              animation: 'continuousSlide 60s linear infinite'
            }}
          >
            {/* Duplicate the array for seamless loop */}
            {[...mostSavedPlaces, ...mostSavedPlaces].map((place, index) => (
              <div
                key={`${place.id}-${index}`}
                style={{
                  minWidth: '280px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  backgroundColor: 'white',
                  boxShadow: '0 6px 25px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  transform: 'translateZ(0)', // Enable hardware acceleration
                  backfaceVisibility: 'hidden'
                }}
                className="continuous-slide-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05) translateZ(0)'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)'
                  e.currentTarget.style.zIndex = '10'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1) translateZ(0)'
                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.1)'
                  e.currentTarget.style.zIndex = '1'
                }}
              >
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img
                    src={place.image}
                    alt={place.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)'
                    }}
                  />
                  
                  {/* Floating Discount Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 87, 34, 0.4)',
                    animation: 'float 3s ease-in-out infinite'
                  }}>
                    {place.discount}% OFF
                  </div>

                  {/* Enhanced Rating with Animation */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                    borderRadius: '18px',
                    padding: '6px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                  }}>
                    <StarFilled style={{ 
                      color: '#FFB300', 
                      fontSize: '11px', 
                      marginRight: '3px',
                      animation: 'sparkle 2s ease-in-out infinite'
                    }} />
                    <span style={{ fontSize: '11px', fontWeight: '600', color: '#333' }}>
                      {place.rating}
                    </span>
                  </div>

                  {/* Save Count with Icon */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '10px',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    backdropFilter: 'blur(5px)'
                  }}>
                    <span style={{ marginRight: '4px' }}>💾</span>
                    {place.saves} saves
                  </div>

                  {/* Animated Save Button */}
                  <Button
                    icon={savedItems.has(place.id) ? <HeartFilled /> : <HeartOutlined />}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSave(place.id)
                    }}
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      borderRadius: '50%',
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'white',
                      border: 'none',
                      color: savedItems.has(place.id) ? '#FF5722' : '#666',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                      fontSize: '14px',
                      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.2) rotate(15deg)'
                      e.target.style.boxShadow = '0 6px 20px rgba(255, 87, 34, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1) rotate(0deg)'
                      e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)'
                    }}
                  />
                </div>
                
                <div style={{ padding: '16px' }}>
                  <h6 style={{ 
                    fontWeight: 'bold', 
                    margin: '0 0 6px 0', 
                    fontSize: '15px',
                    color: '#333',
                    lineHeight: '1.3'
                  }}>
                    {place.title}
                  </h6>
                  <p style={{ 
                    fontSize: '12px', 
                    color: '#666', 
                    margin: '0 0 8px 0',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    📍 {place.location} • {place.reviews} reviews
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={{
                      backgroundColor: '#f0f8ff',
                      color: '#FF5722',
                      padding: '3px 8px',
                      borderRadius: '10px',
                      fontSize: '10px',
                      fontWeight: '600',
                      border: '1px solid rgba(255, 87, 34, 0.2)'
                    }}>
                      {place.category}
                    </span>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '3px'
                    }}>
                      <StarFilled style={{ color: '#FFB300', fontSize: '10px' }} />
                      <span style={{ fontSize: '11px', fontWeight: '500', color: '#333' }}>
                        {place.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. TOP RATED - Enhanced with Pagination */}
      <div className="mb-5">
        <div className="px-3 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h5 style={{ 
                fontWeight: 'bold', 
                margin: 0, 
                fontSize: '20px',
                color: '#333'
              }}>
                Top Rated
              </h5>
              <p style={{ 
                margin: 0, 
                fontSize: '14px', 
                color: '#666'
              }}>
                Highest rated accommodations
              </p>
            </div>
            
            <Button
              type="primary"
              style={{
                borderRadius: '20px',
                backgroundColor: '#FF5722',
                borderColor: '#FF5722'
              }}
            >
              View All
            </Button>
          </div>
          
          <div className="row g-4">
            {currentTopRatedItems.map((place) => (
              <div key={place.id} className="col-12 col-md-6 col-lg-3">
                <div
                  style={{
                    borderRadius: '18px',
                    overflow: 'hidden',
                    backgroundColor: 'white',
                    boxShadow: '0 6px 25px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)'
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{ position: 'relative', height: '180px' }}>
                    <img
                      src={place.image}
                      alt={place.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    
                    {/* Enhanced Rating Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)',
                      color: 'white',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: '0 4px 15px rgba(76, 175, 80, 0.4)'
                    }}>
                      <StarFilled style={{ fontSize: '10px', marginRight: '4px' }} />
                      {place.rating}
                    </div>

                    {/* Category Badge */}
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '10px',
                      fontWeight: '600'
                    }}>
                      {place.category}
                    </div>

                    {/* Save Button */}
                    <Button
                      icon={savedItems.has(place.id) ? <HeartFilled /> : <HeartOutlined />}
                      onClick={() => toggleSave(place.id)}
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        backgroundColor: 'white',
                        border: 'none',
                        color: savedItems.has(place.id) ? '#FF5722' : '#666',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        fontSize: '14px'
                      }}
                    />
                  </div>
                  
                  <div style={{ padding: '16px' }}>
                    <h6 style={{ 
                      fontWeight: 'bold', 
                      margin: '0 0 6px 0', 
                      fontSize: '15px',
                      lineHeight: '1.3'
                    }}>
                      {place.title}
                    </h6>
                    <p style={{ 
                      fontSize: '12px', 
                      color: '#666', 
                      margin: '0 0 8px 0',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      📍 {place.location}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span style={{ 
                        fontSize: '16px', 
                        fontWeight: 'bold',
                        color: '#FF5722'
                      }}>
                        ₹{place.price.toLocaleString()}
                      </span>
                      <span style={{ 
                        fontSize: '11px', 
                        color: '#666'
                      }}>
                        {place.reviews} reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Pagination */}
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              current={topRatedPage}
              total={topRatedPlaces.length}
              pageSize={4}
              onChange={setTopRatedPage}
              showSizeChanger={false}
              style={{
                '& .ant-pagination-item': {
                  borderRadius: '8px'
                },
                '& .ant-pagination-item-active': {
                  backgroundColor: '#FF5722',
                  borderColor: '#FF5722'
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* 4. POPULAR CREATORS - Fixed View More Functionality */}
      <div className="mb-5">
        <div className="px-3 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="text-center" style={{ flex: 1 }}>
              <h5 style={{ 
                fontWeight: 'bold', 
                margin: 0, 
                fontSize: '20px',
                color: '#333'
              }}>
                Popular Creators
              </h5>
              <p style={{ 
                margin: '4px 0 0 0', 
                fontSize: '14px', 
                color: '#666'
              }}>
                Follow the best travel creators for insider tips
              </p>
            </div>
          </div>
          
          <div className="row g-3">
            {popularCreators.slice(0, showAllCreators ? popularCreators.length : 4).map((creator, index) => (
              <div key={creator.id} className="col-6 col-md-6 col-lg-3">
                <div
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '16px',
                    padding: '16px',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 87, 34, 0.1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  className="creator-card-compact"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.03)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)'
                    e.currentTarget.style.borderColor = '#FF5722'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(255, 87, 34, 0.1)'
                  }}
                >
                  {/* Subtle Background Animation */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '30px',
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? '#FF5722' : '#FF8A65'} 0%, ${index % 2 === 0 ? '#FF8A65' : '#FFB74D'} 100%)`,
                    borderRadius: '16px 16px 0 0',
                    opacity: 0.8
                  }} />
                  
                  {/* Compact Avatar */}
                  <div style={{ 
                    position: 'relative', 
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '8px',
                    zIndex: 1
                  }}>
                    <Avatar
                      src={creator.avatar}
                      size={50}
                      style={{
                        border: '3px solid white',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease'
                      }}
                      className="creator-avatar"
                    />
                    {creator.verified && (
                      <div style={{
                        position: 'absolute',
                        bottom: '2px',
                        right: '2px',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: '#1890ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid white',
                        fontSize: '8px',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>
                        ✓
                      </div>
                    )}
                  </div>
                  
                  {/* Compact Creator Info */}
                  <div style={{ flex: 1 }}>
                    <h6 style={{ 
                      fontSize: '13px', 
                      margin: '0 0 2px 0', 
                      fontWeight: '700',
                      color: '#333',
                      lineHeight: '1.2'
                    }}>
                      {creator.name}
                    </h6>
                    
                    <p style={{ 
                      fontSize: '11px', 
                      margin: '0 0 6px 0', 
                      fontWeight: '500',
                      color: '#FF5722'
                    }}>
                      {creator.username}
                    </p>

                    {/* Compact Stats */}
                    <div style={{ marginBottom: '8px' }}>
                      <div style={{ 
                        fontSize: '11px', 
                        fontWeight: 'bold', 
                        color: '#333',
                        marginBottom: '2px'
                      }}>
                        {creator.followers}
                      </div>
                      <div style={{ fontSize: '9px', color: '#666' }}>followers</div>
                    </div>
                    
                    {/* Compact Rating */}
                    <div className="d-flex align-items-center justify-content-center mb-2">
                      <Rate 
                        disabled 
                        defaultValue={Math.floor(creator.rating)} 
                        style={{ fontSize: '9px' }} 
                      />
                      <span style={{ fontSize: '10px', marginLeft: '4px', color: '#333', fontWeight: '500' }}>
                        {creator.rating}
                      </span>
                    </div>

                    {/* Compact Specialty */}
                    <div style={{
                      backgroundColor: '#f0f8ff',
                      color: '#FF5722',
                      padding: '2px 6px',
                      borderRadius: '8px',
                      fontSize: '9px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      border: '1px solid rgba(255, 87, 34, 0.2)'
                    }}>
                      {creator.specialty}
                    </div>
                  </div>

                  {/* Compact Follow Button */}
                  <Button
                    type="primary"
                    size="small"
                    icon={<PlusOutlined />}
                    style={{
                      borderRadius: '12px',
                      backgroundColor: '#FF5722',
                      borderColor: '#FF5722',
                      padding: '4px 12px',
                      height: 'auto',
                      fontWeight: '600',
                      fontSize: '10px',
                      width: '100%'
                    }}
                  >
                    Follow
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fixed Show More Creators Button */}
          <div className="text-center mt-4">
            <Button
              onClick={() => setShowAllCreators(!showAllCreators)}
              style={{
                borderRadius: '25px',
                border: '2px solid #FF5722',
                color: '#FF5722',
                backgroundColor: 'transparent',
                padding: '8px 30px',
                height: 'auto',
                fontWeight: '600',
                fontSize: '14px'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FF5722'
                e.target.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent'
                e.target.style.color = '#FF5722'
              }}
            >
              {showAllCreators ? 'Show Less' : 'Show More Creators'}
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles with Animations */}
      <style jsx>{`
        /* Hide scrollbar */
        div::-webkit-scrollbar {
          display: none;
        }
        
        /* Continuous slider animation */
        @keyframes continuousSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Floating animation for discount badges */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        /* Sparkle animation for stars */
        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
        }
        
        /* Enhanced slide-in animations */
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Fade in animation for sections */
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Continuous slide cards */
        .continuous-slide-card {
          animation: fadeInScale 0.6s ease forwards;
        }
        
        /* Creator cards compact animation */
        .creator-card-compact {
          animation: slideInUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .creator-card-compact:nth-child(1) { animation-delay: 0.1s; }
        .creator-card-compact:nth-child(2) { animation-delay: 0.2s; }
        .creator-card-compact:nth-child(3) { animation-delay: 0.3s; }
        .creator-card-compact:nth-child(4) { animation-delay: 0.4s; }
        .creator-card-compact:nth-child(5) { animation-delay: 0.5s; }
        .creator-card-compact:nth-child(6) { animation-delay: 0.6s; }
        .creator-card-compact:nth-child(7) { animation-delay: 0.7s; }
        .creator-card-compact:nth-child(8) { animation-delay: 0.8s; }
        .creator-card-compact:nth-child(9) { animation-delay: 0.9s; }
        
        /* Avatar hover effect */
        .creator-avatar:hover {
          transform: scale(1.1) rotate(5deg);
        }
        
        /* Section animations */
        .mb-5 {
          animation: fadeInScale 0.8s ease forwards;
        }
        
        .mb-5:nth-child(1) { animation-delay: 0.1s; }
        .mb-5:nth-child(2) { animation-delay: 0.2s; }
        .mb-5:nth-child(3) { animation-delay: 0.3s; }
        .mb-5:nth-child(4) { animation-delay: 0.4s; }
        
        /* Responsive card sizing */
        .responsive-card {
          max-width: 500px;
        }
        
        .card-image-container {
          height: 280px;
        }
        
        @media (max-width: 992px) {
          .responsive-card {
            max-width: 450px !important;
          }
          .card-image-container {
            height: 260px !important;
          }
        }
        
        @media (max-width: 768px) {
          .responsive-card {
            max-width: 400px !important;
          }
          .card-image-container {
            height: 240px !important;
          }
        }
        
        @media (max-width: 576px) {
          .responsive-card {
            max-width: 350px !important;
          }
          .card-image-container {
            height: 220px !important;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .continuous-slide-card {
            min-width: 250px !important;
          }
          
          .creator-card-compact {
            padding: 12px !important;
          }
          
          .creator-avatar {
            width: 40px !important;
            height: 40px !important;
          }
        }
        
        @media (max-width: 576px) {
          .col-lg-2 {
            flex: 0 0 50%;
            max-width: 50%;
          }
          
          .continuous-slide-card {
            min-width: 220px !important;
          }
        }
        
        /* Enhanced button hover animations */
        button:hover {
          transform: translateY(-2px);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        /* Card entrance animations */
        .stay-card {
          animation: slideInUp 0.8s ease forwards;
          opacity: 0;
        }
        
        /* Background pattern animation */
        @keyframes backgroundPulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        /* Apply background animation to header */
        .header-pattern {
          animation: backgroundPulse 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default EnhancedDestinationPage
