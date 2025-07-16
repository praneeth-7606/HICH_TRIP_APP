// =====================================
// 2. SavesBrowse.jsx
// =====================================

// components/SavesBrowse.js

import React, { useState } from 'react';
import { message } from 'antd';
import {
  PlusOutlined,
  HeartOutlined,
  HeartFilled,
  LeftOutlined
} from '@ant-design/icons';

const SavesBrowse = ({ onBackClick, onAddToTrip }) => {
  const [activeTab, setActiveTab] = useState('Stay');
  const [savedItems, setSavedItems] = useState(new Set());

  const tabs = ['Stay', 'Food', 'Activity/Event', 'Local/Culture'];

  const savesData = {
    Stay: [
      {
        id: 1,
        name: 'Hotel Hyatt',
        location: 'Ibiza',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&q=80',
        type: 'hotel',
        price: '450',
        priceUnit: 'per night',
        tags: ['Luxury', 'Beach', 'Popular'],
        description: 'A luxurious beachfront hotel with stunning ocean views and world-class amenities.'
      },
      {
        id: 2,
        name: 'Villa Coralina',
        location: 'Goa',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80',
        type: 'hotel',
        price: '320',
        priceUnit: 'per night',
        tags: ['Villa', 'Peaceful', 'Romantic'],
        description: 'A charming villa surrounded by lush gardens and tropical beauty.'
      },
      {
        id: 3,
        name: 'Seaside Resort',
        location: 'Maldives',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80',
        type: 'hotel',
        price: '680',
        priceUnit: 'per night',
        tags: ['Resort', 'Overwater', 'Exclusive'],
        description: 'An exclusive overwater resort with crystal clear lagoons and pristine beaches.'
      }
    ],
    Food: [
      {
        id: 4,
        name: 'Ocean View Restaurant',
        location: 'Santorini',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80',
        type: 'restaurant',
        price: '85',
        priceUnit: 'per person',
        tags: ['Fine Dining', 'Ocean View', 'Mediterranean'],
        description: 'Exquisite Mediterranean cuisine with breathtaking sunset views over the Aegean Sea.'
      },
      {
        id: 7,
        name: 'Street Food Market',
        location: 'Bangkok',
        rating: 4.3,
        image: 'https://images.unsplash.com/photo-1496412705862-e0fed369c8e8?w=800&h=600&fit=crop&q=80',
        type: 'restaurant',
        price: '15',
        priceUnit: 'per person',
        tags: ['Street Food', 'Authentic', 'Local'],
        description: 'Authentic Thai street food experience with local flavors and vibrant atmosphere.'
      }
    ],
    'Activity/Event': [
      {
        id: 5,
        name: 'Scuba Diving',
        location: 'Great Barrier Reef',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80',
        type: 'activity',
        price: '120',
        priceUnit: 'per person',
        tags: ['Adventure', 'Underwater', 'Marine Life'],
        description: 'Explore the vibrant underwater world of the Great Barrier Reef with certified guides.'
      },
      {
        id: 8,
        name: 'Hot Air Balloon',
        location: 'Cappadocia',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1526048598645-62b31f98c7a8?w=800&h=600&fit=crop&q=80',
        type: 'activity',
        price: '200',
        priceUnit: 'per person',
        tags: ['Adventure', 'Sunrise', 'Scenic'],
        description: 'Experience magical sunrise views over the fairy chimneys and valleys of Cappadocia.'
      }
    ],
    'Local/Culture': [
      {
        id: 6,
        name: 'Traditional Dance Show',
        location: 'Bali',
        rating: 4.4,
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&q=80',
        type: 'activity',
        price: '40',
        priceUnit: 'per person',
        tags: ['Cultural', 'Traditional', 'Performance'],
        description: 'Immerse yourself in Balinese culture with traditional Kecak and Legong dance performances.'
      },
      {
        id: 9,
        name: 'Cooking Class',
        location: 'Tuscany',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&q=80',
        type: 'activity',
        price: '95',
        priceUnit: 'per person',
        tags: ['Culinary', 'Hands-on', 'Local'],
        description: 'Learn to cook authentic Italian dishes with local ingredients and family recipes.'
      }
    ]
  };

  const toggleSave = (itemId) => {
    const newSavedItems = new Set(savedItems);
    if (savedItems.has(itemId)) {
      newSavedItems.delete(itemId);
      message.success('Removed from saves');
    } else {
      newSavedItems.add(itemId);
      message.success('Added to saves');
    }
    setSavedItems(newSavedItems);
  };

  const handleAddToTrip = (item) => {
    onAddToTrip(item);
    message.success(`${item.name} added to your trip!`);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f3e8ff 100%)',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    backButton: {
      border: 'none',
      background: 'none',
      fontSize: '18px',
      color: '#262626',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '50%',
      transition: 'all 0.3s ease'
    },
    title: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#262626',
      margin: '0 0 0 16px'
    },
    tabsContainer: {
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(20px)',
      padding: '12px 20px',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      position: 'sticky',
      top: '64px',
      zIndex: 99
    },
    tabs: {
      display: 'flex',
      gap: '8px',
      overflowX: 'auto'
    },
    tab: {
      padding: '8px 16px',
      border: 'none',
      borderRadius: '20px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      whiteSpace: 'nowrap',
      background: 'transparent',
      color: '#8c8c8c'
    },
    activeTab: {
      background: '#1890ff',
      color: 'white',
      boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)'
    },
    content: {
      padding: '20px',
      paddingBottom: '100px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px'
    },
    card: {
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    imageContainer: {
      position: 'relative',
      height: '200px',
      overflow: 'hidden'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    heartButton: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)'
    },
    ratingBadge: {
      position: 'absolute',
      bottom: '12px',
      left: '12px',
      background: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
      fontWeight: '500',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    },
    cardBody: {
      padding: '16px'
    },
    cardTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#262626',
      margin: '0 0 4px 0',
      lineHeight: '1.4'
    },
    cardLocation: {
      fontSize: '13px',
      color: '#8c8c8c',
      margin: '0 0 12px 0'
    },
    priceSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    price: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#fa8c16'
    },
    addButton: {
      background: '#1890ff',
      border: 'none',
      borderRadius: '20px',
      padding: '6px 16px',
      color: 'white',
      fontSize: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button 
          style={styles.backButton}
          onClick={onBackClick}
          onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.05)'}
          onMouseLeave={(e) => e.target.style.background = 'none'}
        >
          <LeftOutlined />
        </button>
        <h1 style={styles.title}>Browse & Save</h1>
      </div>

      <div style={styles.tabsContainer}>
        <div style={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              style={{
                ...styles.tab,
                ...(activeTab === tab ? styles.activeTab : {})
              }}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.grid}>
          {savesData[activeTab]?.map((item) => (
            <div key={item.id} style={styles.card}>
              <div style={styles.imageContainer}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={styles.cardImage}
                />
                <button
                  style={{
                    ...styles.heartButton,
                    color: savedItems.has(item.id) ? '#ff4d4f' : '#8c8c8c'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSave(item.id);
                  }}
                >
                  {savedItems.has(item.id) ? <HeartFilled /> : <HeartOutlined />}
                </button>
                <div style={styles.ratingBadge}>
                  <span style={{ color: '#ffa940' }}>★</span>
                  {item.rating}
                </div>
              </div>
              
              <div style={styles.cardBody}>
                <h3 style={styles.cardTitle}>{item.name}</h3>
                <p style={styles.cardLocation}>📍 {item.location}</p>
                
                <div style={styles.priceSection}>
                  <span style={styles.price}>
                    ${item.price} {item.priceUnit}
                  </span>
                  <button
                    style={styles.addButton}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToTrip(item);
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#40a9ff';
                      e.target.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = '#1890ff';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <PlusOutlined style={{ fontSize: '10px' }} />
                    Add to Trip
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavesBrowse;