"use client"
import React, { useState } from 'react'
import { Button, Modal, Input, DatePicker, Avatar, message, Dropdown, Empty, Card, Badge, Menu, Progress } from 'antd'
import { 
  ArrowLeftOutlined, 
  PlusOutlined, 
  ChevronRightOutlined, 
  SearchOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
  ShareAltOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  UserOutlined,
  HeartOutlined,
  HeartFilled,
  FilterOutlined,
  StarOutlined,
  StarFilled,
  DollarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  BookOutlined,
  RobotOutlined,
  LinkOutlined,
  SaveOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker

const MyTripsPage = () => {
  const router = useRouter()
  const [trips, setTrips] = useState([
    {
      id: 1,
      title: 'Weekend Plan',
      destination: 'Goa',
      dates: 'August 13-16',
      startDate: '2024-08-13',
      endDate: '2024-08-16',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      itemCount: 8,
      isBookmarked: true,
      status: 'upcoming',
      groupSize: 4,
      budget: 25000,
      spent: 15000,
      category: 'Beach',
      progress: 75,
      collaborators: [
        'https://images.unsplash.com/photo-1494790108755-2616b612b131?w=40&h=40&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      ],
      rating: 4.8,
      isCompleted: false
    },
    {
      id: 2,
      title: 'Goa Adventure',
      destination: 'Goa',
      dates: 'December 15-20',
      startDate: '2024-12-15',
      endDate: '2024-12-20',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=400&h=300&fit=crop',
      itemCount: 12,
      isBookmarked: false,
      status: 'planning',
      groupSize: 6,
      budget: 45000,
      spent: 8000,
      category: 'Adventure',
      progress: 45,
      collaborators: [
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=40&h=40&fit=crop&crop=face',
      ],
      rating: 4.5,
      isCompleted: false
    },
    {
      id: 3,
      title: 'Summer Trip',
      destination: 'Kerala',
      dates: 'December 25-31',
      startDate: '2024-12-25',
      endDate: '2024-12-31',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      itemCount: 15,
      isBookmarked: true,
      status: 'completed',
      groupSize: 2,
      budget: 35000,
      spent: 32000,
      category: 'Nature',
      progress: 100,
      collaborators: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=face',
      ],
      rating: 4.9,
      isCompleted: true
    }
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSelectionModalOpen, setIsSelectionModalOpen] = useState(false)
  const [editingTrip, setEditingTrip] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [viewMode, setViewMode] = useState('cards')
  const [sortBy, setSortBy] = useState('date')
  const [newTrip, setNewTrip] = useState({
    title: '',
    destination: '',
    dateRange: null,
    groupSize: 1,
    budget: '',
    category: 'Leisure'
  })

  // Enhanced filtering and sorting
  const filteredTrips = trips.filter(trip => {
    const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         trip.destination.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesFilter = selectedFilter === 'all' || trip.status === selectedFilter
    
    return matchesSearch && matchesFilter
  }).sort((a, b) => {
    switch (sortBy) {
      case 'progress':
        return b.progress - a.progress
      case 'budget':
        return b.budget - a.budget
      case 'date':
      default:
        return new Date(a.startDate) - new Date(b.startDate)
    }
  })

  const handleCreateTrip = () => {
    if (newTrip.title && newTrip.destination && newTrip.dateRange) {
      const [startDate, endDate] = newTrip.dateRange
      const dateRange = `${dayjs(startDate).format('MMMM D')}-${dayjs(endDate).format('D')}`
      
      const trip = {
        id: editingTrip ? editingTrip.id : Date.now(),
        title: newTrip.title,
        destination: newTrip.destination,
        dates: dateRange,
        startDate: startDate.format('YYYY-MM-DD'),
        endDate: endDate.format('YYYY-MM-DD'),
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
        itemCount: 0,
        isBookmarked: false,
        status: 'planning',
        groupSize: newTrip.groupSize,
        budget: parseInt(newTrip.budget) || 0,
        spent: 0,
        category: newTrip.category,
        progress: 0,
        collaborators: [],
        rating: 0,
        isCompleted: false
      }
      
      if (editingTrip) {
        setTrips(trips.map(t => t.id === editingTrip.id ? { ...trip, ...editingTrip } : t))
        message.success('Trip updated successfully!')
      } else {
        setTrips([...trips, trip])
        message.success('Trip created successfully!')
      }
      
      resetModal()
    } else {
      message.error('Please fill in all required fields')
    }
  }

  const resetModal = () => {
    setIsModalOpen(false)
    setIsSelectionModalOpen(false)
    setEditingTrip(null)
    setNewTrip({
      title: '',
      destination: '',
      dateRange: null,
      groupSize: 1,
      budget: '',
      category: 'Leisure'
    })
  }

  const handleEditTrip = (trip) => {
    setEditingTrip(trip)
    setNewTrip({
      title: trip.title,
      destination: trip.destination,
      dateRange: [dayjs(trip.startDate), dayjs(trip.endDate)],
      groupSize: trip.groupSize,
      budget: trip.budget.toString(),
      category: trip.category
    })
    setIsModalOpen(true)
  }

  const handleDeleteTrip = (tripId) => {
    Modal.confirm({
      title: 'Delete Trip',
      content: 'Are you sure you want to delete this trip? This action cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: () => {
        setTrips(trips.filter(t => t.id !== tripId))
        message.success('Trip deleted successfully!')
      }
    })
  }

  const toggleBookmark = (tripId) => {
    setTrips(trips.map(trip => 
      trip.id === tripId ? { ...trip, isBookmarked: !trip.isBookmarked } : trip
    ))
    const trip = trips.find(t => t.id === tripId)
    message.success(`Trip ${trip.isBookmarked ? 'removed from' : 'added to'} bookmarks`)
  }

  const handleTripClick = (trip) => {
    router.push(`/trip-planning/${trip.id}`)
  }

  const handleShare = (trip) => {
    if (navigator.share) {
      navigator.share({
        title: trip.title,
        text: `Check out my ${trip.title} trip to ${trip.destination}!`,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      message.success('Trip link copied to clipboard!')
    }
  }

  const handleNewTripClick = () => {
    setIsSelectionModalOpen(true)
  }

  const handleSelectionOption = (option) => {
    setIsSelectionModalOpen(false)
    if (option === 'form') {
      setIsModalOpen(true)
    } else if (option === 'ai') {
      // Handle AI option - you can add navigation to AI page here
      message.info('AI Trip Planning feature coming soon!')
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return '#52c41a'
      case 'planning': return '#1890ff'
      case 'completed': return '#8c8c8c'
      default: return '#1890ff'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'upcoming': return 'Upcoming'
      case 'planning': return 'Planning'
      case 'completed': return 'Completed'
      default: return 'Planning'
    }
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Beach': return '🏖️'
      case 'Adventure': return '🏔️'
      case 'Nature': return '🌿'
      case 'City': return '🏙️'
      case 'Culture': return '🏛️'
      default: return '✈️'
    }
  }

  const getTripMenu = (trip) => (
    <Menu>
      <Menu.Item key="edit" icon={<EditOutlined />} onClick={() => handleEditTrip(trip)}>
        Edit Trip
      </Menu.Item>
      <Menu.Item key="share" icon={<ShareAltOutlined />} onClick={() => handleShare(trip)}>
        Share Trip
      </Menu.Item>
      <Menu.Item key="duplicate" icon={<PlusOutlined />}>
        Duplicate Trip
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="delete" icon={<DeleteOutlined />} onClick={() => handleDeleteTrip(trip.id)} danger>
        Delete Trip
      </Menu.Item>
    </Menu>
  )

  const filterOptions = [
    { key: 'all', label: 'All Trips', count: trips.length },
    { key: 'upcoming', label: 'Upcoming', count: trips.filter(t => t.status === 'upcoming').length },
    { key: 'planning', label: 'Planning', count: trips.filter(t => t.status === 'planning').length },
    { key: 'completed', label: 'Completed', count: trips.filter(t => t.status === 'completed').length }
  ]

  const sortOptions = [
    { key: 'date', label: 'Sort by Date' },
    { key: 'progress', label: 'Sort by Progress' },
    { key: 'budget', label: 'Sort by Budget' }
  ]

  // Calculate statistics
  const totalBudget = trips.reduce((sum, trip) => sum + trip.budget, 0)
  const totalSpent = trips.reduce((sum, trip) => sum + trip.spent, 0)
  const averageProgress = trips.reduce((sum, trip) => sum + trip.progress, 0) / trips.length

  return (
    <div style={{ backgroundColor: '#FDF2E9', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Enhanced Header with Statistics */}
      <div style={{ 
        background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
        paddingTop: '50px',
        paddingBottom: '20px',
        borderBottom: '1px solid rgba(255,255,255,0.2)'
      }}>
        <div className="d-flex align-items-center justify-content-between px-3 mb-3">
          <div className="d-flex align-items-center">
            <Button
              icon={<ArrowLeftOutlined />}
              type="text"
              onClick={() => router.back()}
              style={{ 
                marginRight: '15px', 
                fontSize: '18px',
                color: '#333',
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
            <div>
              <h3 style={{ margin: 0, fontWeight: 'bold', color: '#333', fontSize: '24px' }}>
                My Trips
              </h3>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                {trips.length} trip{trips.length !== 1 ? 's' : ''} • {Math.round(averageProgress)}% avg progress
              </p>
            </div>
          </div>
          
          <div className="d-flex align-items-center gap-2">
            <Dropdown
              overlay={
                <Menu>
                  {sortOptions.map(option => (
                    <Menu.Item key={option.key} onClick={() => setSortBy(option.key)}>
                      {option.label}
                    </Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomRight"
            >
              <Button
                icon={<FilterOutlined />}
                type="text"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
            </Dropdown>
            <Button
              icon={viewMode === 'cards' ? '☰' : '⊞'}
              type="text"
              onClick={() => setViewMode(viewMode === 'cards' ? 'list' : 'cards')}
              style={{ 
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="d-flex justify-content-between px-3 mb-3">
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '15px',
            padding: '12px 16px',
            flex: 1,
            marginRight: '8px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#FF5722' }}>
              ₹{totalBudget.toLocaleString()}
            </div>
            <div style={{ fontSize: '12px', color: '#666' }}>Total Budget</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '15px',
            padding: '12px 16px',
            flex: 1,
            marginRight: '8px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#52c41a' }}>
              ₹{totalSpent.toLocaleString()}
            </div>
            <div style={{ fontSize: '12px', color: '#666' }}>Total Spent</div>
          </div>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '15px',
            padding: '12px 16px',
            flex: 1,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#1890ff' }}>
              {Math.round(averageProgress)}%
            </div>
            <div style={{ fontSize: '12px', color: '#666' }}>Avg Progress</div>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="px-3 mb-3">
          <Input
            placeholder="Search trips or destinations..."
            prefix={<SearchOutlined style={{ color: '#999' }} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              borderRadius: '25px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              border: '1px solid rgba(255,255,255,0.3)',
              backdropFilter: 'blur(10px)',
              padding: '12px 20px',
              fontSize: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />
        </div>

        {/* Enhanced Filter Tabs */}
        <div className="d-flex gap-2 px-3" style={{ overflowX: 'auto', paddingBottom: '5px' }}>
          {filterOptions.map(option => (
            <button
              key={option.key}
              onClick={() => setSelectedFilter(option.key)}
              style={{
                padding: '10px 18px',
                borderRadius: '25px',
                border: 'none',
                background: selectedFilter === option.key 
                  ? 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)' 
                  : 'rgba(255,255,255,0.8)',
                color: selectedFilter === option.key ? 'white' : '#666',
                fontSize: '14px',
                fontWeight: selectedFilter === option.key ? '600' : '500',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                backdropFilter: 'blur(10px)',
                boxShadow: selectedFilter === option.key 
                  ? '0 6px 20px rgba(255, 87, 34, 0.4)' 
                  : '0 4px 12px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                transform: selectedFilter === option.key ? 'translateY(-2px)' : 'translateY(0)'
              }}
            >
              {option.label} <span style={{ 
                backgroundColor: selectedFilter === option.key ? 'rgba(255,255,255,0.2)' : 'rgba(255,87,34,0.1)',
                padding: '2px 8px',
                borderRadius: '12px',
                marginLeft: '6px',
                fontSize: '12px'
              }}>
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Trips Display */}
      <div className="px-3" style={{ marginTop: '20px' }}>
        {filteredTrips.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '80px 20px',
            backgroundColor: 'white',
            borderRadius: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            margin: '20px 0'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px', opacity: 0.5 }}>
              {searchQuery || selectedFilter !== 'all' ? '🔍' : '✈️'}
            </div>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '22px', fontWeight: 'bold', color: '#333' }}>
              {searchQuery || selectedFilter !== 'all' ? 'No trips found' : 'Ready for your first adventure?'}
            </h3>
            <p style={{ margin: '0 0 30px 0', fontSize: '16px', color: '#666', lineHeight: '1.6' }}>
              {searchQuery || selectedFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria to find what you\'re looking for.' 
                : 'Start planning your dream trip and create unforgettable memories!'
              }
            </p>
            {(!searchQuery && selectedFilter === 'all') && (
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleNewTripClick}
                style={{
                  backgroundColor: '#FF5722',
                  borderColor: '#FF5722',
                  borderRadius: '30px',
                  padding: '12px 30px',
                  height: 'auto',
                  fontSize: '16px',
                  fontWeight: '600',
                  boxShadow: '0 8px 25px rgba(255, 87, 34, 0.3)'
                }}
              >
                Create Your First Trip
              </Button>
            )}
          </div>
        ) : (
          <div 
            className={viewMode === 'cards' ? 'trip-cards-container' : 'trip-list-container'}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px',
              padding: '0 10px'
            }}
          >
            {filteredTrips.map((trip) => (
              <div
                key={trip.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '25px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  marginBottom: '24px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.2)',
                  position: 'relative',
                }}
                className="trip-card"
                onClick={() => handleTripClick(trip)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                {/* Trip Image Header */}
                <div style={{ position: 'relative', height: '180px' }}>
                  <img
                    src={trip.image}
                    alt={trip.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, rgba(255,87,34,0.1) 100%)'
                  }} />

                  {/* Status Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{
                      backgroundColor: getStatusColor(trip.status),
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '25px',
                      fontSize: '12px',
                      fontWeight: '600',
                      boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      {trip.status === 'completed' && <CheckCircleOutlined />}
                      {trip.status === 'upcoming' && <ClockCircleOutlined />}
                      {trip.status === 'planning' && <EditOutlined />}
                      {getStatusText(trip.status)}
                    </div>
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      color: '#FF5722',
                      padding: '8px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }}>
                      {getCategoryIcon(trip.category)} {trip.category}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    display: 'flex',
                    gap: '10px'
                  }}>
                    <Button
                      icon={trip.isBookmarked ? <HeartFilled /> : <HeartOutlined />}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleBookmark(trip.id)
                      }}
                      style={{
                        borderRadius: '50%',
                        width: '44px',
                        height: '44px',
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        border: 'none',
                        color: trip.isBookmarked ? '#FF5722' : '#666',
                        backdropFilter: 'blur(15px)',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                        fontSize: '16px',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    <Dropdown overlay={getTripMenu(trip)} placement="bottomRight">
                      <Button
                        icon={<MoreOutlined />}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          borderRadius: '50%',
                          width: '44px',
                          height: '44px',
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          border: 'none',
                          color: '#666',
                          backdropFilter: 'blur(15px)',
                          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                          fontSize: '16px',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </Dropdown>
                  </div>

                  {/* Progress Bar */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '6px',
                    backgroundColor: 'rgba(255,255,255,0.3)'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${trip.progress}%`,
                      background: 'linear-gradient(90deg, #FF5722 0%, #FF8A65 100%)',
                      transition: 'width 0.8s ease',
                      borderRadius: '0 0 6px 6px'
                    }} />
                  </div>
                </div>

                {/* Trip Content */}
                <div style={{ padding: '24px' }}>
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div style={{ flex: 1 }}>
                      <h4 style={{ 
                        margin: '0 0 8px 0', 
                        fontWeight: 'bold', 
                        fontSize: '20px',
                        color: '#333',
                        lineHeight: '1.3'
                      }}>
                        {trip.title}
                      </h4>
                      <div style={{ 
                        margin: '0 0 12px 0', 
                        color: '#666', 
                        fontSize: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <EnvironmentOutlined style={{ color: '#FF5722', fontSize: '16px' }} />
                        {trip.destination}
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <Badge 
                        count={trip.itemCount} 
                        style={{ 
                          backgroundColor: '#FF5722',
                          fontSize: '12px',
                          fontWeight: '600'
                        }} 
                      />
                      {trip.rating > 0 && (
                        <div style={{ 
                          marginTop: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '12px',
                          color: '#666'
                        }}>
                          <StarFilled style={{ color: '#FFB300' }} />
                          {trip.rating}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center gap-4">
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px',
                        fontSize: '14px',
                        color: '#666'
                      }}>
                        <CalendarOutlined style={{ color: '#FF5722', fontSize: '16px' }} />
                        {trip.dates}
                      </div>
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '6px',
                        fontSize: '14px',
                        color: '#666'
                      }}>
                        <UserOutlined style={{ color: '#FF5722', fontSize: '16px' }} />
                        {trip.groupSize} people
                      </div>
                    </div>
                    <div style={{ 
                      fontSize: '16px', 
                      color: '#333', 
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <DollarOutlined style={{ color: '#FF5722' }} />
                      ₹{trip.budget?.toLocaleString() || '0'}
                    </div>
                  </div>

                  {/* Progress Section */}
                  <div style={{ marginBottom: '16px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>
                        Trip Progress
                      </span>
                      <span style={{ 
                        fontSize: '14px', 
                        color: '#FF5722',
                        fontWeight: '600'
                      }}>
                        {trip.progress}% complete
                      </span>
                    </div>
                    <Progress 
                      percent={trip.progress} 
                      strokeColor={{
                        '0%': '#FF5722',
                        '100%': '#FF8A65'
                      }}
                      trailColor="rgba(255,87,34,0.1)"
                      strokeWidth={8}
                      showInfo={false}
                    />
                  </div>

                  {/* Collaborators */}
                  {trip.collaborators.length > 0 && (
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center gap-2">
                        <span style={{ fontSize: '14px', color: '#666', fontWeight: '500' }}>
                          Team:
                        </span>
                        <div className="d-flex" style={{ marginLeft: '8px' }}>
                          {trip.collaborators.slice(0, 3).map((avatar, index) => (
                            <Avatar
                              key={index}
                              size={32}
                              src={avatar}
                              style={{
                                marginLeft: index > 0 ? '-10px' : '0',
                                border: '3px solid white',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                zIndex: 3 - index
                              }}
                            />
                          ))}
                          {trip.collaborators.length > 3 && (
                            <Avatar
                              size={32}
                              style={{
                                marginLeft: '-10px',
                                backgroundColor: '#FF5722',
                                border: '3px solid white',
                                fontSize: '12px',
                                fontWeight: '600',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                              }}
                            >
                              +{trip.collaborators.length - 3}
                            </Avatar>
                          )}
                        </div>
                      </div>
                      <div style={{ 
                        fontSize: '14px', 
                        color: '#666',
                        backgroundColor: 'rgba(255,87,34,0.1)',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontWeight: '500'
                      }}>
                        ₹{trip.spent?.toLocaleString() || '0'} spent
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Floating Action Button */}
      <div style={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        zIndex: 1000
      }}>
        <Button
          type="primary"
          shape="round"
          icon={<PlusOutlined />}
          onClick={handleNewTripClick}
          style={{
            height: '60px',
            paddingLeft: '24px',
            paddingRight: '24px',
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: '#FF5722',
            borderColor: '#FF5722',
            background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
            boxShadow: '0 10px 30px rgba(255, 87, 34, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-4px) scale(1.05)'
            e.target.style.boxShadow = '0 15px 40px rgba(255, 87, 34, 0.6)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)'
            e.target.style.boxShadow = '0 10px 30px rgba(255, 87, 34, 0.4)'
          }}
        >
          New Trip
        </Button>
      </div>

      {/* Trip Creation Method Selection Modal */}
      <Modal
        title={
          <div style={{ 
            fontSize: '18px', 
            fontWeight: '600',
            color: '#333',
            textAlign: 'center',
            borderBottom: '1px solid #f0f0f0',
            paddingBottom: '16px',
            marginBottom: '24px'
          }}>
            How would you like to plan your trip?
          </div>
        }
        open={isSelectionModalOpen}
        onCancel={() => setIsSelectionModalOpen(false)}
        footer={null}
        width={400}
        centered
        maskClosable={true}
        style={{ borderRadius: '20px' }}
      >
        <div style={{ padding: '20px 0' }}>
          {/* Build from Your Saves Option */}
          <div
            onClick={() => handleSelectionOption('form')}
            style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '20px',
              padding: '20px',
              marginBottom: '16px',
              cursor: 'pointer',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e9ecef'
              e.currentTarget.style.borderColor = '#FF5722'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa'
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#FF5722',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'white',
                flexShrink: 0
              }}>
                <SaveOutlined />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ 
                  margin: '0 0 8px 0', 
                  fontSize: '16px', 
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  Build from Your Saves
                </h4>
                <p style={{ 
                  margin: 0, 
                  fontSize: '14px', 
                  color: '#666',
                  lineHeight: '1.4'
                }}>
                  Add your travel details and pick from your saved list to instantly build a personalized itinerary
                </p>
              </div>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: 'rgba(255, 87, 34, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF5722',
                fontSize: '12px',
                flexShrink: 0
              }}>
                <BookOutlined />
              </div>
            </div>
          </div>

          {/* Try High AI Option */}
          <div
            onClick={() => handleSelectionOption('ai')}
            style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '20px',
              padding: '20px',
              cursor: 'pointer',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e9ecef'
              e.currentTarget.style.borderColor = '#FF5722'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa'
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#1890ff',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: 'white',
                flexShrink: 0
              }}>
                <RobotOutlined />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ 
                  margin: '0 0 8px 0', 
                  fontSize: '16px', 
                  fontWeight: 'bold',
                  color: '#333'
                }}>
                  Try High AI 🚀
                </h4>
                <p style={{ 
                  margin: 0, 
                  fontSize: '14px', 
                  color: '#666',
                  lineHeight: '1.4'
                }}>
                  Turn any YouTube video or Instagram Reel into a custom travel plan - just share the link and let AI do the magic
                </p>
              </div>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: 'rgba(24, 144, 255, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1890ff',
                fontSize: '12px',
                flexShrink: 0
              }}>
                <LinkOutlined />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* Enhanced Create/Edit Trip Modal */}
      <Modal
        title={
          <div style={{ 
            fontSize: '20px', 
            fontWeight: '600',
            color: '#333',
            borderBottom: '1px solid #f0f0f0',
            paddingBottom: '16px',
            marginBottom: '24px'
          }}>
            {editingTrip ? (
              <span>
                <EditOutlined style={{ marginRight: '8px', color: '#FF5722' }} />
                Edit Trip
              </span>
            ) : (
              <span>
                <PlusOutlined style={{ marginRight: '8px', color: '#FF5722' }} />
                Create New Trip
              </span>
            )}
          </div>
        }
        open={isModalOpen}
        onOk={handleCreateTrip}
        onCancel={resetModal}
        okText={editingTrip ? 'Update Trip' : 'Create Trip'}
        width={450}
        centered
        maskClosable={false}
        okButtonProps={{
          style: {
            backgroundColor: '#FF5722',
            borderColor: '#FF5722',
            borderRadius: '25px',
            padding: '8px 30px',
            height: 'auto',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(255, 87, 34, 0.3)'
          }
        }}
        cancelButtonProps={{
          style: { 
            borderRadius: '25px',
            padding: '8px 30px',
            height: 'auto',
            fontSize: '16px'
          }
        }}
      >
        <div style={{ padding: '20px 0' }}>
          <div className="mb-4">
            <label style={{ 
              display: 'block', 
              marginBottom: '10px', 
              fontWeight: '600',
              fontSize: '15px',
              color: '#333'
            }}>
              Trip Name *
            </label>
            <Input
              placeholder="e.g., Weekend in Goa"
              value={newTrip.title}
              onChange={(e) => setNewTrip({ ...newTrip, title: e.target.value })}
              style={{ 
                borderRadius: '15px',
                padding: '14px 18px',
                fontSize: '16px',
                border: '2px solid #f0f0f0',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#FF5722'}
              onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
            />
          </div>
          
          <div className="mb-4">
            <label style={{ 
              display: 'block', 
              marginBottom: '10px', 
              fontWeight: '600',
              fontSize: '15px',
              color: '#333'
            }}>
              Destination *
            </label>
            <Input
              placeholder="e.g., Goa, India"
              value={newTrip.destination}
              onChange={(e) => setNewTrip({ ...newTrip, destination: e.target.value })}
              style={{ 
                borderRadius: '15px',
                padding: '14px 18px',
                fontSize: '16px',
                border: '2px solid #f0f0f0',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#FF5722'}
              onBlur={(e) => e.target.style.borderColor = '#f0f0f0'}
            />
          </div>
          
          <div className="mb-4">
            <label style={{ 
              display: 'block', 
              marginBottom: '10px', 
              fontWeight: '600',
              fontSize: '15px',
              color: '#333'
            }}>
              Travel Dates *
            </label>
            <RangePicker
              style={{ 
                width: '100%', 
                borderRadius: '15px',
                padding: '14px 18px',
                fontSize: '16px',
                border: '2px solid #f0f0f0'
              }}
              value={newTrip.dateRange}
              onChange={(dates) => setNewTrip({ ...newTrip, dateRange: dates })}
              placeholder={['Start Date', 'End Date']}
            />
          </div>

          <div className="row">
            <div className="col-4">
              <label style={{ 
                display: 'block', 
                marginBottom: '10px', 
                fontWeight: '600',
                fontSize: '15px',
                color: '#333'
              }}>
                Group Size
              </label>
              <Input
                type="number"
                min="1"
                value={newTrip.groupSize}
                onChange={(e) => setNewTrip({ ...newTrip, groupSize: parseInt(e.target.value) || 1 })}
                style={{ 
                  borderRadius: '15px',
                  padding: '14px 18px',
                  fontSize: '16px',
                  border: '2px solid #f0f0f0'
                }}
              />
            </div>
            
            <div className="col-4">
              <label style={{ 
                display: 'block', 
                marginBottom: '10px', 
                fontWeight: '600',
                fontSize: '15px',
                color: '#333'
              }}>
                Budget (₹)
              </label>
              <Input
                type="number"
                placeholder="25000"
                value={newTrip.budget}
                onChange={(e) => setNewTrip({ ...newTrip, budget: e.target.value })}
                style={{ 
                  borderRadius: '15px',
                  padding: '14px 18px',
                  fontSize: '16px',
                  border: '2px solid #f0f0f0'
                }}
              />
            </div>
            
            <div className="col-4">
              <label style={{ 
                display: 'block', 
                marginBottom: '10px', 
                fontWeight: '600',
                fontSize: '15px',
                color: '#333'
              }}>
                Category
              </label>
              <select
                value={newTrip.category}
                onChange={(e) => setNewTrip({ ...newTrip, category: e.target.value })}
                style={{ 
                  width: '100%',
                  borderRadius: '15px',
                  padding: '14px 18px',
                  fontSize: '16px',
                  border: '2px solid #f0f0f0',
                  backgroundColor: 'white'
                }}
              >
                <option value="Leisure">Leisure</option>
                <option value="Beach">Beach</option>
                <option value="Adventure">Adventure</option>
                <option value="Nature">Nature</option>
                <option value="City">City</option>
                <option value="Culture">Culture</option>
              </select>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default MyTripsPage