// Create this file: app/trip-details/[id]/page.js

'use client'

import React, { useState, useEffect } from 'react'
import { Button, Avatar, Progress, Tabs, Card, Badge, Modal, Input, message } from 'antd'
import { 
  ArrowLeftOutlined, 
  ShareAltOutlined,
  HeartOutlined,
  HeartFilled,
  CalendarOutlined,
  EnvironmentOutlined,
  UserOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  DollarOutlined
} from '@ant-design/icons'
import { useRouter, useParams } from 'next/navigation'
import dayjs from 'dayjs'

const { TabPane } = Tabs

const TripDetailsPage = () => {
  const router = useRouter()
  const params = useParams()
  const [trip, setTrip] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false)
  const [newItem, setNewItem] = useState({ title: '', type: 'activity', day: 1, cost: '' })

  // Sample trip data - replace with actual data fetching
  const sampleTrip = {
    id: parseInt(params.id),
    title: 'Weekend Plan',
    destination: 'Goa, India',
    dates: 'August 13-16, 2024',
    startDate: '2024-08-13',
    endDate: '2024-08-16',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
    isBookmarked: true,
    status: 'upcoming',
    groupSize: 4,
    budget: 25000,
    spent: 15000,
    category: 'Beach',
    progress: 75,
    collaborators: [
      { id: 1, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b131?w=40&h=40&fit=crop&crop=face' },
      { id: 2, name: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face' },
    ],
    days: [
      {
        day: 1,
        date: '2024-08-13',
        items: [
          { id: 1, title: 'Beach Resort Check-in', type: 'accommodation', time: '14:00', cost: 5000, completed: true },
          { id: 2, title: 'Sunset Beach Walk', type: 'activity', time: '18:00', cost: 0, completed: true },
          { id: 3, title: 'Beachside Dinner', type: 'restaurant', time: '20:00', cost: 2000, completed: false }
        ]
      },
      {
        day: 2,
        date: '2024-08-14',
        items: [
          { id: 4, title: 'Water Sports', type: 'activity', time: '10:00', cost: 3000, completed: false },
          { id: 5, title: 'Local Market Visit', type: 'activity', time: '16:00', cost: 1000, completed: false },
          { id: 6, title: 'Seafood Restaurant', type: 'restaurant', time: '19:30', cost: 2500, completed: false }
        ]
      },
      {
        day: 3,
        date: '2024-08-15',
        items: [
          { id: 7, title: 'Scuba Diving', type: 'activity', time: '09:00', cost: 4000, completed: false },
          { id: 8, title: 'Beach Club', type: 'activity', time: '15:00', cost: 1500, completed: false }
        ]
      }
    ]
  }

  useEffect(() => {
    // In a real app, fetch trip data based on params.id
    setTrip(sampleTrip)
  }, [params.id])

  const toggleBookmark = () => {
    setTrip(prev => ({ ...prev, isBookmarked: !prev.isBookmarked }))
  }

  const toggleItemComplete = (dayIndex, itemId) => {
    setTrip(prev => ({
      ...prev,
      days: prev.days.map((day, index) => 
        index === dayIndex 
          ? {
              ...day,
              items: day.items.map(item => 
                item.id === itemId 
                  ? { ...item, completed: !item.completed }
                  : item
              )
            }
          : day
      )
    }))
  }

  const addNewItem = () => {
    if (!newItem.title) {
      message.error('Please enter item title')
      return
    }

    const item = {
      id: Date.now(),
      title: newItem.title,
      type: newItem.type,
      time: '10:00',
      cost: parseInt(newItem.cost) || 0,
      completed: false
    }

    setTrip(prev => ({
      ...prev,
      days: prev.days.map((day, index) => 
        index === newItem.day - 1 
          ? { ...day, items: [...day.items, item] }
          : day
      )
    }))

    setIsAddItemModalOpen(false)
    setNewItem({ title: '', type: 'activity', day: 1, cost: '' })
    message.success('Item added successfully!')
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'accommodation': return '🏨'
      case 'restaurant': return '🍽️'
      case 'activity': return '🎯'
      case 'transport': return '🚗'
      default: return '📍'
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

  if (!trip) {
    return (
      <div style={{ 
        backgroundColor: '#FDF2E9', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>Loading...</div>
      </div>
    )
  }

  const completedItems = trip.days.flatMap(day => day.items).filter(item => item.completed).length
  const totalItems = trip.days.flatMap(day => day.items).length
  const completionPercentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0

  return (
    <div style={{ backgroundColor: '#FDF2E9', minHeight: '100vh', paddingBottom: '20px' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
        <img
          src={trip.image}
          alt={trip.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)'
        }} />

        {/* Header Actions */}
        <div style={{
          position: 'absolute',
          top: '50px',
          left: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => router.back()}
            style={{
              borderRadius: '50%',
              width: '44px',
              height: '44px',
              backgroundColor: 'rgba(255,255,255,0.9)',
              border: 'none',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          />
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button
              icon={trip.isBookmarked ? <HeartFilled /> : <HeartOutlined />}
              onClick={toggleBookmark}
              style={{
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none',
                color: trip.isBookmarked ? '#FF5722' : '#666',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            />
            <Button
              icon={<ShareAltOutlined />}
              style={{
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>

        {/* Trip Info */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          right: '20px',
          color: 'white'
        }}>
          <div style={{
            backgroundColor: getStatusColor(trip.status),
            color: 'white',
            padding: '6px 16px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            display: 'inline-block',
            marginBottom: '12px'
          }}>
            {trip.status.toUpperCase()}
          </div>
          
          <h2 style={{ 
            margin: '0 0 8px 0', 
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            {trip.title}
          </h2>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px',
            fontSize: '14px',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <EnvironmentOutlined />
              {trip.destination}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CalendarOutlined />
              {trip.dates}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <UserOutlined />
              {trip.groupSize} people
            </span>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ padding: '20px' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Trip Progress</h4>
            <span style={{ fontSize: '14px', color: '#666' }}>
              {completedItems} of {totalItems} items completed
            </span>
          </div>
          
          <Progress 
            percent={completionPercentage} 
            strokeColor="#FF5722"
            trailColor="#f0f0f0"
            style={{ marginBottom: '16px' }}
          />
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF5722' }}>
                ₹{trip.budget?.toLocaleString()}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Total Budget</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#52c41a' }}>
                ₹{trip.spent?.toLocaleString()}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Spent</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1890ff' }}>
                ₹{(trip.budget - trip.spent)?.toLocaleString()}
              </div>
              <div style={{ fontSize: '12px', color: '#666' }}>Remaining</div>
            </div>
          </div>
        </div>

        {/* Collaborators */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h4 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '600' }}>Collaborators</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {trip.collaborators.map(collaborator => (
              <div key={collaborator.id} style={{ textAlign: 'center' }}>
                <Avatar 
                  size={48} 
                  src={collaborator.avatar} 
                  style={{ marginBottom: '8px' }}
                />
                <div style={{ fontSize: '12px', color: '#666' }}>{collaborator.name}</div>
              </div>
            ))}
            <Button
              icon={<PlusOutlined />}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#f0f0f0',
                border: '2px dashed #d0d0d0',
                color: '#999'
              }}
            />
          </div>
        </div>

        {/* Daily Itinerary */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600' }}>Daily Itinerary</h4>
            <Button
              icon={<PlusOutlined />}
              onClick={() => setIsAddItemModalOpen(true)}
              style={{
                backgroundColor: '#FF5722',
                borderColor: '#FF5722',
                color: 'white',
                borderRadius: '20px'
              }}
            >
              Add Item
            </Button>
          </div>

          {trip.days.map((day, dayIndex) => (
            <div key={dayIndex} style={{ marginBottom: '24px' }}>
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '12px 16px',
                borderRadius: '12px',
                marginBottom: '12px'
              }}>
                <h5 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>
                  Day {day.day} - {dayjs(day.date).format('MMMM D')}
                </h5>
              </div>
              
              {day.items.map(item => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    backgroundColor: item.completed ? '#f6ffed' : 'white',
                    border: `1px solid ${item.completed ? '#b7eb8f' : '#f0f0f0'}`,
                    borderRadius: '12px',
                    marginBottom: '8px',
                    cursor: 'pointer'
                  }}
                  onClick={() => toggleItemComplete(dayIndex, item.id)}
                >
                  <div style={{ marginRight: '12px', fontSize: '20px' }}>
                    {getTypeIcon(item.type)}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      fontSize: '14px', 
                      fontWeight: '600',
                      color: item.completed ? '#52c41a' : '#333',
                      textDecoration: item.completed ? 'line-through' : 'none'
                    }}>
                      {item.title}
                    </div>
                    <div style={{ 
                      fontSize: '12px', 
                      color: '#666',
                      marginTop: '2px'
                    }}>
                      {item.time} • ₹{item.cost?.toLocaleString()}
                    </div>
                  </div>
                  
                  <div style={{ marginLeft: '12px' }}>
                    {item.completed ? (
                      <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '18px' }} />
                    ) : (
                      <ClockCircleOutlined style={{ color: '#999', fontSize: '18px' }} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Add Item Modal */}
      <Modal
        title="Add New Item"
        open={isAddItemModalOpen}
        onOk={addNewItem}
        onCancel={() => setIsAddItemModalOpen(false)}
        okText="Add Item"
        okButtonProps={{
          style: {
            backgroundColor: '#FF5722',
            borderColor: '#FF5722',
            borderRadius: '20px'
          }
        }}
      >
        <div style={{ padding: '10px 0' }}>
          <div className="mb-3">
            <label>Item Title</label>
            <Input
              value={newItem.title}
              onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
              placeholder="e.g., Beach Resort Check-in"
            />
          </div>
          
          <div className="mb-3">
            <label>Type</label>
            <select
              value={newItem.type}
              onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
              style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d0d0d0' }}
            >
              <option value="activity">Activity</option>
              <option value="accommodation">Accommodation</option>
              <option value="restaurant">Restaurant</option>
              <option value="transport">Transport</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label>Day</label>
            <select
              value={newItem.day}
              onChange={(e) => setNewItem({ ...newItem, day: parseInt(e.target.value) })}
              style={{ width: '100%', padding: '8px', borderRadius: '6px', border: '1px solid #d0d0d0' }}
            >
              {trip.days.map((day, index) => (
                <option key={index} value={day.day}>Day {day.day}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-3">
            <label>Cost (₹)</label>
            <Input
              type="number"
              value={newItem.cost}
              onChange={(e) => setNewItem({ ...newItem, cost: e.target.value })}
              placeholder="0"
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default TripDetailsPage