import React from 'react';
import { Card } from 'antd';

const DestinationCard = ({ destination, onClick, size = 'default' }) => {
  const cardHeight = size === 'small' ? '80px' : '100px';
  
  return (
    <Card
      cover={
        <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => onClick(destination)}>
          <img 
            src={destination.image} 
            alt={destination.name}
            style={{ height: cardHeight, objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            top: '8px',
            left: '8px',
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '10px',
            fontSize: '10px'
          }}>
            {destination.clips || '10K+ clips'}
          </div>
        </div>
      }
      style={{ 
        borderRadius: '15px', 
        overflow: 'hidden', 
        border: 'none',
        cursor: 'pointer'
      }}
      bodyStyle={{ padding: '10px', textAlign: 'center' }}
      className="destination-card"
      onClick={() => onClick(destination)}
    >
      <h6 style={{ margin: '0', fontWeight: 'bold', fontSize: '14px' }}>
        {destination.name}
      </h6>
      {destination.country && (
        <p style={{ margin: '0', fontSize: '10px', color: '#666' }}>
          {destination.country}
        </p>
      )}
    </Card>
  );
};

export default DestinationCard;