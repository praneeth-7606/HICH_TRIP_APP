// pages/create-trip/from-saves/index.js

'use client'

import React, { useState } from 'react'
import { Button, Input, DatePicker, Select, Card, message } from 'antd'
import { 
  ArrowLeftOutlined, 
  CalendarOutlined, 
  EnvironmentOutlined, 
  UserOutlined,
  DollarOutlined,
  PlusOutlined,
  MinusOutlined,
  BookOutlined,
  HeartFilled
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker
const { Option } = Select

const CreateTripFromSaves = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    tripName: '',
    destination: '',
    dateRange: null,
    groupSize: 1,
    budget: '',
    category: 'Leisure'
  })

  const [isLoading, setIsLoading] = useState(false)
  const [showSaves, setShowSaves] = useState(false)

  const categories = [
    { value: 'Leisure', label: 'Leisure', icon: '🏖️' },
    { value: 'Beach', label: 'Beach', icon: '🏖️' },
    { value: 'Adventure', label: 'Adventure', icon: '🏔️' },
    { value: 'Nature', label: 'Nature', icon: '🌿' },
    { value: 'City', label: 'City', icon: '🏙️' },
    { value: 'Culture', label: 'Culture', icon: '🏛️' },
    { value: 'Food', label: 'Food', icon: '🍽️' },
    { value: 'Shopping', label: 'Shopping', icon: '🛍️' }
  ]

  // Mock saved items
  const savedItems = [
    {
      id: 1,
      title: 'Hotel Hyatt',
      location: 'Hawaii',
      category: 'stays',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop',
      rating: 4.5
    },
    {
      id: 2,
      title: 'Beach Paradise Resort',
      location: 'Maldives',
      category: 'stays',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=300&h=200&fit=crop',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Mountain Biking Trails',
      location: 'Whistler, Canada',
      category: 'activities',
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=300&h=200&fit=crop',
      rating: 4.6
    }
  ]

  const handleSubmit = async () => {
    if (!formData.tripName || !formData.destination || !formData.dateRange) {
      message.error('Please fill in all required fields')
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const tripData = {
        ...formData,
        dates: formData.dateRange ? 
          `${dayjs(formData.dateRange[0]).format('MMMM D')}-${dayjs(formData.dateRange[1]).format('D')}` : '',
        mode: 'saves'
      }

      message.success('Trip created from saves successfully!')
      router.push('/my-trips')
    } catch (error) {
      message.error('Failed to create trip. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const incrementGroupSize = () => {
    setFormData(prev => ({
      ...prev,
      groupSize: prev.groupSize + 1
    }))
  }

  const decrementGroupSize = () => {
    if (formData.groupSize > 1) {
      setFormData(prev => ({
        ...prev,
        groupSize: prev.groupSize - 1
      }))
    }
  }

  const handleViewSaves = () => {
    setShowSaves(!showSaves)
  }

  return (
    <div style={{ 
      backgroundColor: '#FDF2E9', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Status Bar */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '44px',
        background: 'rgba(253, 242, 233, 0.95)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        fontSize: '17px',
        fontWeight: '600',
        zIndex: 1000
      }}>
        <div style={{ color: '#1a1a1a' }}>13:07</div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          color: '#1a1a1a'
        }}>
          <div>•••</div>
          <div style={{ fontSize: '14px' }}>📶</div>
          <div style={{ fontSize: '14px' }}>📶</div>
          <div style={{ fontSize: '14px' }}>🔋</div>
        </div>
      </div>

      {/* Header */}
      <div style={{
        paddingTop: '60px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '20px'
        }}>
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
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: 'none'
            }}
          />
          <div>
            <h3 style={{
              margin: 0,
              fontWeight: '600',
              fontSize: '18px',
              color: '#333'
            }}>
              Create New Trip
            </h3>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: '#666',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <BookOutlined style={{ color: '#FF973D' }} />
              From Your Saves
            </p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div style={{
        flex: 1,
        padding: '0 20px',
        paddingBottom: '120px'
      }}>
        <Card
          style={{
            borderRadius: '20px',
            border: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            marginBottom: '20px'
          }}
          bodyStyle={{ padding: '30px' }}
        >
          {/* Saves Preview */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <label style={{
                fontWeight: '600',
                fontSize: '14px',
                color: '#333'
              }}>
                Your Saved Items
              </label>
              <Button
                type="link"
                onClick={handleViewSaves}
                style={{
                  color: '#FF973D',
                  fontWeight: '600',
                  padding: 0
                }}
              >
                {showSaves ? 'Hide' : 'View All'}
              </Button>
            </div>
            
            {showSaves && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '12px',
                marginBottom: '16px'
              }}>
                {savedItems.map(item => (
                  <div
                    key={item.id}
                    style={{
                      borderRadius: '12px',
                      overflow: 'hidden',
                      backgroundColor: 'white',
                      border: '1px solid #E5E5E5',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{ position: 'relative' }}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: '100%',
                          height: '80px',
                          objectFit: 'cover'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <HeartFilled style={{ color: '#FF973D', fontSize: '12px' }} />
                      </div>
                    </div>
                    <div style={{ padding: '8px' }}>
                      <div style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '2px'
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        fontSize: '10px',
                        color: '#666'
                      }}>
                        {item.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            <div style={{
              padding: '16px',
              backgroundColor: '#FFF5F0',
              borderRadius: '12px',
              border: '1px solid #FFE0B2',
              fontSize: '14px',
              color: '#666',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <BookOutlined style={{ color: '#FF973D' }} />
              We'll help you build your itinerary using your saved places and activities.
            </div>
          </div>

          {/* Trip Name */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#333'
            }}>
              Trip Name *
            </label>
            <Input
              placeholder="Weekend in Hawaii"
              value={formData.tripName}
              onChange={(e) => handleInputChange('tripName', e.target.value)}
              style={{
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '16px',
                border: '2px solid #E5E5E5'
              }}
            />
          </div>

          {/* Destination */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#333'
            }}>
              Destination *
            </label>
            <Input
              placeholder="Hawaii"
              value={formData.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              prefix={<EnvironmentOutlined style={{ color: '#999' }} />}
              style={{
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '16px',
                border: '2px solid #E5E5E5'
              }}
            />
          </div>

          {/* Travel Dates */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#333'
            }}>
              Travel Dates *
            </label>
            <RangePicker
              style={{
                width: '100%',
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '16px',
                border: '2px solid #E5E5E5'
              }}
              value={formData.dateRange}
              onChange={(dates) => handleInputChange('dateRange', dates)}
              placeholder={['Start Date', 'End Date']}
            />
          </div>

          {/* Group Size */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#333'
            }}>
              Group Size
            </label>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px 16px',
              border: '2px solid #E5E5E5',
              borderRadius: '12px',
              backgroundColor: 'white'
            }}>
              <Button
                icon={<MinusOutlined />}
                onClick={decrementGroupSize}
                disabled={formData.groupSize <= 1}
                style={{
                  borderRadius: '8px',
                  width: '36px',
                  height: '36px',
                  border: '1px solid #E5E5E5'
                }}
              />
              <div style={{
                flex: 1,
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: '600',
                color: '#333'
              }}>
                {formData.groupSize}
              </div>
              <Button
                icon={<PlusOutlined />}
                onClick={incrementGroupSize}
                style={{
                  borderRadius: '8px',
                  width: '36px',
                  height: '36px',
                  border: '1px solid #E5E5E5'
                }}
              />
            </div>
          </div>

          {/* Budget */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#333'
            }}>
              Budget (Optional)
            </label>
            <Input
              placeholder="25000"
              value={formData.budget}
              onChange={(e) => handleInputChange('budget', e.target.value)}
              prefix={<span style={{ color: '#999' }}>₹</span>}
              style={{
                borderRadius: '12px',
                padding: '12px 16px',
                fontSize: '16px',
                border: '2px solid #E5E5E5'
              }}
            />
          </div>

          {/* Category */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#333'
            }}>
              Category
            </label>
            <Select
              value={formData.category}
              onChange={(value) => handleInputChange('category', value)}
              style={{
                width: '100%',
                borderRadius: '12px'
              }}
              size="large"
            >
              {categories.map(cat => (
                <Option key={cat.value} value={cat.value}>
                  <span style={{ marginRight: '8px' }}>{cat.icon}</span>
                  {cat.label}
                </Option>
              ))}
            </Select>
          </div>
        </Card>
      </div>

      {/* Continue Button */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        left: '20px',
        right: '20px',
        zIndex: 1000
      }}>
        <Button
          type="primary"
          onClick={handleSubmit}
          loading={isLoading}
          style={{
            width: '100%',
            height: '56px',
            borderRadius: '28px',
            fontSize: '16px',
            fontWeight: '600',
            backgroundColor: '#FF973D',
            borderColor: '#FF973D',
            boxShadow: '0 8px 24px rgba(255, 151, 61, 0.4)'
          }}
        >
          {isLoading ? 'Creating Trip...' : 'Create Trip from Saves'}
        </Button>
      </div>
    </div>
  )
}

export default CreateTripFromSaves