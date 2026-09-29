import React from 'react';
import { Avatar, Rate, Button } from 'antd';
import { PlusOutlined, CheckOutlined } from '@ant-design/icons';

const CreatorCard = ({ creator, onFollow, isFollowing = false, size = 'default' }) => {
  const avatarSize = size === 'small' ? 50 : size === 'large' ? 80 : 60;
  
  return (
    <div className="text-center" style={{ padding: '10px' }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <Avatar src={creator.avatar} size={avatarSize} className="mb-2" />
        {onFollow && (
          <Button
            icon={isFollowing ? <CheckOutlined /> : <PlusOutlined />}
            size="small"
            style={{
              position: 'absolute',
              bottom: '5px',
              right: '-5px',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              backgroundColor: isFollowing ? '#4CAF50' : '#FF5722',
              border: 'none',
              color: 'white',
              fontSize: '10px'
            }}
            onClick={() => onFollow(creator.id)}
          />
        )}
      </div>
      
      <p style={{ fontSize: '11px', fontWeight: '500', margin: '5px 0 2px 0' }}>
        {creator.username}
      </p>
      
      {creator.experiences && (
        <p style={{ fontSize: '10px', color: '#666', margin: '0' }}>
          {creator.experiences}
        </p>
      )}
      
      {creator.rating && (
        <div className="d-flex align-items-center justify-content-center mt-1">
          <span style={{ fontSize: '10px', marginRight: '3px' }}>
            {creator.rating}
          </span>
          <Rate 
            disabled 
            defaultValue={Math.floor(creator.rating)} 
            style={{ fontSize: '10px' }} 
          />
        </div>
      )}
      
      {creator.followers && (
        <p style={{ fontSize: '10px', color: '#FF5722', margin: '2px 0 0 0' }}>
          {creator.followers} followers
        </p>
      )}
    </div>
  );
};

export default CreatorCard;
