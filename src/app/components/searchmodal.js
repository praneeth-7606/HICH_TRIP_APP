'use client'

import React, { useState, useEffect } from 'react'
import { Modal, Input, Avatar, Card } from 'antd'
import { SearchOutlined, CloseOutlined } from '@ant-design/icons'

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Same data as above (can be imported from a constants file)
  const popularCreators = [
    {
      id: 1,
      username: '@travelwithemma',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b131?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      username: '@travelwithriya',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    // ... more creators
  ]

  const destinations = [
    {
      id: 1,
      name: 'Bali',
      clips: '10K+ clips',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Dubai',
      clips: '10K+ clips',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop'
    },
    // ... more destinations
  ]

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width="100%"
      style={{ 
        top: 0,
        maxWidth: '100vw',
        height: '100vh',
        margin: 0
      }}
      bodyStyle={{
        padding: 0,
        height: '100vh',
        backgroundColor: '#FDF2E9'
      }}
      closeIcon={<CloseOutlined style={{ fontSize: '20px', color: '#333' }} />}
    >
      {/* Same content as SearchPage but in modal format */}
      <div style={{ backgroundColor: '#FDF2E9', height: '100%', overflowY: 'auto' }}>
        {/* Header */}
        <div className="p-3" style={{ paddingTop: '60px' }}>
          <Input
            placeholder="Search for a 'Travel Creator' or 'Destination'"
            prefix={<SearchOutlined style={{ color: '#999' }} />}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              borderRadius: '25px',
              border: '2px solid #FF8A65',
              backgroundColor: 'white',
              height: '45px'
            }}
            autoFocus
          />
        </div>

        {/* Rest of the content... */}
      </div>
    </Modal>
  )
}

export default SearchModal
