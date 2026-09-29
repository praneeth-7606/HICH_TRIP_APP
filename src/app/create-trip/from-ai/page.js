// pages/create-trip/from-ai/index.js

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
  LinkOutlined,
  RobotOutlined
} from '@ant-design/icons'
import { useRouter } from 'next/navigation'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker
const { Option } = Select

const CreateTripFromAI = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    tripName: '',
    destination: '',
    dateRange: null,
    groupSize: 1,
    budget: '',
    category: 'Leisure',
    aiLink: ''
  })

  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [aiAnalysisComplete, setAiAnalysisComplete] = useState(false)

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

  const handleAnalyzeLink = async () => {
    if (!formData.aiLink) {
      message.error('Please enter a YouTube or Instagram link')
      return
    }

    // Validate URL format
    const urlPattern = /(youtube\.com|youtu\.be|instagram\.com|instagr\.am)/i
    if (!urlPattern.test(formData.aiLink)) {
      message.error('Please enter a valid YouTube or Instagram link')
      return
    }

    setIsAnalyzing(true)
    
    try {
      // Simulate AI analysis
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Mock AI extracted data
      const aiData = {
        tripName: 'Bali Adventure Trip',
        destination: 'Bali, Indonesia',
        category: 'Adventure',
        groupSize: 2
      }
      
      setFormData(prev => ({
        ...prev,
        ...aiData
      }))
      
      setAiAnalysisComplete(true)
      message.success('AI analysis complete! Trip details have been extracted.')
    } catch (error) {
      message.error('Failed to analyze the link. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleSubmit = async () => {
    if (!formData.tripName || !formData.destination || !formData.dateRange) {
      message.error('Please fill in all required fields')
      return
    }

    if (!formData.aiLink) {
      message.error('Please provide a YouTube or Instagram link')
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
        mode: 'ai'
      }

      message.success('AI-powered trip created successfully!')
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
              <RobotOutlined style={{ color: '#FF973D' }} />
              Using AI Analysis
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
          {/* AI Link Input */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#333'
            }}>
              YouTube or Instagram Link *
            </label>
            <div style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'flex-end'
            }}>
              <Input
                placeholder="https://www.youtube.com/watch?v=... or https://instagram.com/p/..."
                value={formData.aiLink}
                onChange={(e) => handleInputChange('aiLink', e.target.value)}
                style={{
                  flex: 1,
                  borderRadius: '12px',
                  padding: '12px 16px',
                  fontSize: '16px',
                  border: '2px solid #E5E5E5'
                }}
                prefix={<LinkOutlined style={{ color: '#999' }} />}
              />
              <Button
                type="primary"
                onClick={handleAnalyzeLink}
                loading={isAnalyzing}
                style={{
                  backgroundColor: '#FF973D',
                  borderColor: '#FF973D',
                  borderRadius: '12px',
                  height: '48px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  fontWeight: '600'
                }}
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze'}
              </Button>
            </div>
            {aiAnalysisComplete && (
              <div style={{
                marginTop: '12px',
                padding: '12px 16px',
                backgroundColor: '#F0F8FF',
                borderRadius: '8px',
                border: '1px solid #E6F3FF',
                color: '#1890ff',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <RobotOutlined />
                AI has analyzed your link and extracted trip details below!
              </div>
            )}
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
                border: '2px solid #E5E5E5',
                backgroundColor: aiAnalysisComplete ? '#F8FFE6' : 'white'
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
                border: '2px solid #E5E5E5',
                backgroundColor: aiAnalysisComplete ? '#F8FFE6' : 'white'
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
              backgroundColor: aiAnalysisComplete ? '#F8FFE6' : 'white'
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
          {isLoading ? 'Creating AI Trip...' : 'Create Trip with AI'}
        </Button>
      </div>
    </div>
  )
}

export default CreateTripFromAI