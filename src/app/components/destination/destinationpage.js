import React, { useState } from 'react';
import { FilterOutlined } from '@ant-design/icons';
// import Header from '../common/Header';
import Header from '../common/header';
// import PopularStays from './PopularStays';
import PopularStays from './popularstays';
// import MostLoved from './MostLoved';
import MostLoved from './mostloved';
// import TopRated from './TopRated';
import TopRated from './toprated';
// import PopularCreators from './PopularCreators';
import PopularCreators from './popularcreators';
// import BottomNavigation from './BottomNavigation';
import BottomNavigation from '../common/bottomnavigation';
import { destinationData } from '../data/traveldiscoverydata.js';
// import { destinationData } from '../../data/destinationData';
// import MostLoved from './mostloved';

const DestinationPage = ({ onBack }) => {
  const [activeFilter, setActiveFilter] = useState('stays');
  const [activeTab, setActiveTab] = useState('tabs');
  const [savedItems, setSavedItems] = useState(new Set());

  const filterCategories = [
    { key: 'stays', label: 'Stays' },
    { key: 'food', label: 'Food & Drinks' },
    { key: 'activities', label: 'Activities' }
  ];

  const handleSave = (id) => {
    const newSaved = new Set(savedItems);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedItems(newSaved);
  };

  return (
    <div style={{
      background: '#f8f9fa',
      minHeight: '100vh',
      maxWidth: '400px',
      margin: '0 auto',
      position: 'relative',
      paddingBottom: '80px'
    }}>
      {/* Header */}
      <Header title={destinationData.name} onBack={onBack} />

      {/* Filter Tabs */}
      <div style={{
        background: '#fff',
        padding: '16px 20px',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          overflowX: 'auto'
        }}>
          <button style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 16px',
            borderRadius: '20px',
            border: '1px solid #ddd',
            background: '#fff',
            color: '#666',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}>
            <FilterOutlined style={{ fontSize: '12px' }} />
            Filters
          </button>

          {filterCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveFilter(category.key)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                background: activeFilter === category.key 
                  ? 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)' 
                  : '#fff',
                color: activeFilter === category.key ? '#fff' : '#666',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: activeFilter === category.key 
                  ? '0 2px 8px rgba(255, 87, 34, 0.3)' 
                  : '0 1px 3px rgba(0,0,0,0.1)',
                transition: 'all 0.2s ease'
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ paddingTop: '20px' }}>
        <PopularStays 
          stays={destinationData.popularStays}
          onSave={handleSave}
          savedItems={savedItems}
        />
        
        <MostLoved 
          items={destinationData.mostLoved}
          onSave={handleSave}
          savedItems={savedItems}
        />
        
        <TopRated 
          items={destinationData.topRated}
          onSave={handleSave}
          savedItems={savedItems}
        />
        
        <PopularCreators 
          creators={destinationData.popularCreators}
        />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
};

export default DestinationPage;