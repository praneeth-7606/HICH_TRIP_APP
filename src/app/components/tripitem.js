'use client'
import React from 'react'
import { EditOutlined, MoreOutlined } from '@ant-design/icons'

const TripItem = ({ item, onEdit, onDelete }) => {
  return (
    <div style={{
      marginBottom: '24px',
      border: '1px solid #F0F0F0',
      borderRadius: '16px',
      overflow: 'hidden',
      backgroundColor: 'white'
    }}>
      {/* Add Title Section */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid #F5F5F5',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '24px',
          height: '24px',
          backgroundColor: '#FF6B35',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ color: 'white', fontSize: '12px' }}>📍</span>
        </div>
        <span style={{ fontSize: '14px', color: '#999', fontWeight: '500' }}>
          Add Title
        </span>
      </div>

      {/* Image Section */}
      <div style={{ position: 'relative' }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          {item.rating}
        </div>
      </div>

      {/* Content Section */}
      <div style={{ padding: '20px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '12px'
        }}>
          <div>
            <h3 style={{ 
              margin: '0 0 4px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: '#000'
            }}>
              {item.title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '16px', fontWeight: '600', color: '#FF6B35' }}>
                {item.price}
              </span>
              <span style={{ fontSize: '14px', color: '#666' }}>
                {item.priceNote}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => onEdit(item)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <EditOutlined style={{ fontSize: '16px', color: '#666' }} />
            </button>
            <button
              onClick={() => onDelete(item.id)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px'
              }}
            >
              <MoreOutlined style={{ fontSize: '16px', color: '#666' }} />
            </button>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {item.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                backgroundColor: '#F5F3F0',
                color: '#666',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '500',
                border: '1px solid #E8E5E0'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Overview */}
        <div>
          <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '600' }}>
            Overview
          </h4>
          <p style={{ margin: 0, fontSize: '13px', color: '#666', lineHeight: '1.5' }}>
            {item.overview}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TripItem
