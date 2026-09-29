

import React from 'react';

const ExploreByCategory = ({ categories }) => {
  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{
        margin: '0 0 16px 0',
        fontSize: '20px',
        fontWeight: '600',
        color: '#333',
        padding: '0 20px'
      }}>
        Explore by Category
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '12px',
        padding: '0 20px'
      }}>
        {categories.map((category) => (
          <div
            key={category.id}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              aspectRatio: '1',
              cursor: 'pointer'
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              padding: '20px 12px 12px 12px'
            }}>
              <h5 style={{
                margin: 0,
                color: '#fff',
                fontSize: '16px',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                {category.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreByCategory;