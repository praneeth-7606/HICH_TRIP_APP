import React from 'react';
import { Card, Button, Avatar } from 'antd';
import { HeartOutlined, HeartFilled, SoundOutlined, PlusOutlined } from '@ant-design/icons';

const ExperienceCard = ({ 
  experience, 
  onSave, 
  onAddToTrip, 
  isSaved = false,
  showCreator = true,
  size = 'default' // 'small', 'default', 'large'
}) => {
  const cardHeight = size === 'small' ? '180px' : size === 'large' ? '300px' : '250px';
  
  return (
    <Card
      style={{
        borderRadius: '15px',
        overflow: 'hidden',
        border: 'none',
        position: 'relative',
        marginBottom: '15px'
      }}
      bodyStyle={{ padding: '0' }}
      className="experience-card"
    >
      <div style={{ position: 'relative' }}>
        <img
          src={experience.image}
          alt={experience.title}
          style={{ 
            width: '100%', 
            height: cardHeight, 
            objectFit: 'cover' 
          }}
        />
        
        {/* Sound buttons */}
        {showCreator && (
          <>
            <Button
              icon={<SoundOutlined />}
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none'
              }}
            />
            <Button
              icon={<SoundOutlined />}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none'
              }}
            />
          </>
        )}
        
        {/* Creator info */}
        {showCreator && experience.creator && (
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '20px',
            padding: '5px 15px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Avatar
              src={experience.creator.avatar}
              size={25}
              style={{ marginRight: '8px' }}
            />
            <span style={{ fontSize: '12px', fontWeight: '500' }}>
              {experience.creator.username}
            </span>
          </div>
        )}
        
        {/* Discount badge */}
        {experience.discount && (
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            backgroundColor: '#FF5722',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '15px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            {experience.discount}% Off
          </div>
        )}
        
        {/* Rating */}
        {experience.rating && (
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderRadius: '15px',
            padding: '3px 8px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{ fontSize: '11px', fontWeight: '500', marginRight: '3px' }}>⭐</span>
            <span style={{ fontSize: '11px', fontWeight: '500' }}>{experience.rating}</span>
          </div>
        )}
        
        {/* Additional visual elements */}
        {experience.visualElement && (
          <img
            src={experience.visualElement}
            alt="Visual element"
            style={{
              position: 'absolute',
              bottom: '60px',
              right: '30px',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '3px solid white'
            }}
          />
        )}
      </div>
      
      <div style={{ padding: '15px' }}>
        {experience.price && (
          <p style={{ fontSize: '12px', margin: '0 0 8px 0', color: '#666' }}>
            Live this experience for ₹{experience.price}
          </p>
        )}
        
        <div className="d-flex justify-content-between align-items-center">
          <div style={{ flex: 1 }}>
            <h6 style={{ fontWeight: 'bold', margin: '0', fontSize: '14px' }}>
              {experience.title}
            </h6>
            <p style={{ fontSize: '12px', color: '#666', margin: '2px 0' }}>
              📍 {experience.location}
            </p>
            {experience.bookings && (
              <p style={{ fontSize: '11px', color: '#FF5722', margin: '5px 0 0 0' }}>
                👥 {experience.bookings} people booked
              </p>
            )}
          </div>
          
          <div className="d-flex align-items-center">
            <Button
              icon={isSaved ? <HeartFilled /> : <HeartOutlined />}
              onClick={() => onSave(experience.id)}
              style={{
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                marginRight: '10px',
                border: '1px solid #ddd',
                color: isSaved ? '#FF5722' : '#666'
              }}
            />
            {onAddToTrip && (
              <Button
                icon={<PlusOutlined />}
                onClick={() => onAddToTrip(experience)}
                style={{
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  backgroundColor: '#FF5722',
                  border: 'none',
                  color: 'white'
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ExperienceCard;