// pages/create-trip/edit/[id].js

'use client'

import React, { useState, useEffect } from 'react'
import { Button, Input, DatePicker, Select, Card, message, Spin } from 'antd'
import { 
  ArrowLeftOutlined, 
  CalendarOutlined, 
  EnvironmentOutlined, 
  UserOutlined,
  DollarOutlined,
  PlusOutlined,
  MinusOutlined,
  EditOutlined,
  LoadingOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker
const { Option } = Select

const EditTrip = () => {
  const router = useRouter()
  const params = useParams()
  const tripId = params?.id

  const [formData, setFormData] = useState({
    tripName: '',
    destination: '',
    dateRange: null,
    groupSize: 1,
    budget: '',
    category: 'Leisure'
  })

  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingData, setIsLoadingData] = useState(true)
  const [tripData, setTripData] = useState(null)

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

  // Mock trip data - in real app, this would come from your API
  const mockTripData = {
    1: {
      id: 1,
      title: 'Weekend Plan',
      destination: 'Goa',
      startDate: '2024-08-13',
      endDate: '2024-08-16',
      groupSize: 4,
      budget: 25000,
      category: 'Beach'
    },
    2: {
      id: 2,
      title: 'Goa Adventure',
      destination: 'Goa',
      startDate: '2024-12-15',
      endDate: '2024-12-20',
      groupSize: 6,
      budget: 45000,
      category: 'Adventure'
    },
    3: {
      id: 3,
      title: 'Summer Trip',
      destination: 'Kerala',
      startDate: '2024-12-25',
      endDate: '2024-12-31',
      groupSize: 2,
      budget: 35000,
      category: 'Nature'
    }
  }

  // Load trip data on component mount
  useEffect(() => {
    const loadTripData = async () => {
      if (!tripId) return

      setIsLoadingData(true)
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        const trip = mockTripData[tripId]
        if (!trip) {
          message.error('Trip not found')
          router.push('/my-trips')
          return
        }

        setTripData(trip)
        setFormData({
          tripName: trip.title,
          destination: trip.destination,
          dateRange: [dayjs(trip.startDate), dayjs(trip.endDate)],
          groupSize: trip.groupSize,
          budget: trip.budget.toString(),
          category: trip.category
        })
      } catch (error) {
        message.error('Failed to load trip data')
        router.push('/my-trips')
      } finally {
        setIsLoadingData(false)
      }
    }

    loadTripData()
  }, [tripId, router])

  const handleSubmit = async () => {
    if (!formData.tripName || !formData.destination || !formData.dateRange) {
      message.error('Please fill in all required fields')
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      const updatedTripData = {
        ...tripData,
        title: formData.tripName,
        destination: formData.destination,
        startDate: formData.dateRange[0].format('YYYY-MM-DD'),
        endDate: formData.dateRange[1].format('YYYY-MM-DD'),
        groupSize: formData.groupSize,
        budget: parseInt(formData.budget) || 0,
        category: formData.category,
        dates: `${dayjs(formData.dateRange[0]).format('MMMM D')}-${dayjs(formData.dateRange[1]).format('D')}`
      }

      // Here you would typically make an API call to update the trip
      console.log('Updated trip data:', updatedTripData)

      message.success('Trip updated successfully!')
      router.push('/my-trips')
    } catch (error) {
      message.error('Failed to update trip. Please try again.')
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

  const handleDelete = () => {
    // You can implement delete functionality here
    message.info('Delete functionality can be implemented here')
  }

  // Loading state
  if (isLoadingData) {
    return (
      <div style={{ 
        backgroundColor: '#FDF2E9', 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}>
        <Spin 
          indicator={<LoadingOutlined style={{ fontSize: 32, color: '#FF973D' }} spin />} 
          size="large" 
        />
        <p style={{ marginTop: '20px', color: '#666', fontSize: '16px' }}>
          Loading trip details...
        </p>
      </div>
    )
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
              Edit Trip
            </h3>
            <p style={{
              margin: 0,
              fontSize: '14px',
              color: '#666',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <EditOutlined style={{ color: '#FF973D' }} />
              {tripData?.title}
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

          {/* Delete Button */}
          <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid #f0f0f0' }}>
            <Button
              danger
              onClick={handleDelete}
              style={{
                borderRadius: '12px',
                height: '44px',
                fontWeight: '600'
              }}
            >
              Delete Trip
            </Button>
          </div>
        </Card>
      </div>

      {/* Update Button */}
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
          {isLoading ? 'Updating Trip...' : 'Update Trip'}
        </Button>
      </div>
    </div>
  )
}

export default EditTrip