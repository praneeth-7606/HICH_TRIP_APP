// ItemDetails.js
import React, { useState } from 'react';
import { Button } from 'antd';
import { 
  LeftOutlined, 
  HeartOutlined, 
  HeartFilled, 
  ShareAltOutlined, 
  StarFilled,
  UserOutlined
} from '@ant-design/icons';

const ItemDetails = ({ item, onBack }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedTags, setSelectedTags] = useState(['Sky']);

  const availableTags = ['Sky', 'Beach', 'Romantic', 'Luxury', 'Adventure', 'Nature'];
  
  const taggedRecommendations = [
    {
      id: 1,
      title: "Hotel Hyatt",
      location: "Hawaii",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Scuba Diving",
      location: "Hawaii",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Beach Resort Villa",
      location: "Maldives",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Sunset Cruise",
      location: "Santorini",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=300&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Mountain Lodge",
      location: "Swiss Alps",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Wine Tasting Tour",
      location: "Tuscany",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&h=200&fit=crop"
    }
  ];

  const similarStays = [
    {
      id: 1,
      title: "Greek Island Getaway",
      subtitle: "3K+ people booked",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=300&h=400&fit=crop",
      creator: {
        name: "@travelwithemma",
        avatar: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=400&fit=crop"
      }
    },
    {
      id: 2,
      title: "Mountain Resort",
      subtitle: "2K+ people booked",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=400&fit=crop",
      creator: {
        name: "@mountain_lover",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 3,
      title: "Beachfront Paradise",
      subtitle: "4.2K+ people booked",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=400&fit=crop",
      creator: {
        name: "@beachvibes",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 4,
      title: "Urban Luxury Suite",
      subtitle: "1.8K+ people booked",
      image: "https://images.unsplash.com/photo-1551524164-6cf2ac8b1a4d?w=300&h=400&fit=crop",
      creator: {
        name: "@cityescapes",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 5,
      title: "Tropical Villa Retreat",
      subtitle: "2.7K+ people booked",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=400&fit=crop",
      creator: {
        name: "@tropicalstay",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 6,
      title: "Historic Castle Stay",
      subtitle: "890+ people booked",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=400&fit=crop",
      creator: {
        name: "@historicplaces",
        avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 7,
      title: "Desert Glamping",
      subtitle: "1.5K+ people booked",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a0e?w=300&h=400&fit=crop",
      creator: {
        name: "@desertlife",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 8,
      title: "Lakeside Cabin",
      subtitle: "1.2K+ people booked",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
      creator: {
        name: "@lakehouse",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 9,
      title: "Ski Lodge Adventure",
      subtitle: "2.1K+ people booked",
      image: "https://images.unsplash.com/photo-1551524164-6cf2ac8b1a4d?w=300&h=400&fit=crop",
      creator: {
        name: "@powderdays",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
      }
    },
    {
      id: 10,
      title: "Safari Lodge",
      subtitle: "750+ people booked",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=300&h=400&fit=crop",
      creator: {
        name: "@wildlifeadventure",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
      }
    }
  ];

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      background: '#f8f9fa',
      maxWidth: '400px',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '16px 20px',
        background: 'rgba(248, 249, 250, 0.95)',
        maxWidth: '400px',
        margin: '0 auto',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.1)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Button 
            type="text" 
            icon={<LeftOutlined />} 
            onClick={onBack}
            style={{ 
              color: '#333',
              fontSize: '18px',
              padding: '8px',
              border: 'none'
            }}
          />
          <div style={{
            color: '#333',
            fontSize: '16px',
            fontWeight: '600'
          }}>
            {item?.location || "Goa"}
          </div>
          <div style={{ width: '40px' }} />
        </div>
      </div>

      {/* Content */}
      <div style={{
        paddingTop: '70px',
        height: '100vh',
        overflowY: 'auto',
        paddingBottom: '100px'
      }}>
        {/* Main Image */}
        <div style={{
          position: 'relative',
          margin: '20px',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#fff'
        }}>
          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '12px',
            padding: '6px 10px',
            fontSize: '12px',
            fontWeight: '600',
            color: '#333'
          }}>
            1 / 7
          </div>
          
          <img
            src={item?.image || "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"}
            alt={item?.title || "Hotel Blue Inn"}
            style={{
              width: '100%',
              height: '250px',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Title and Actions */}
        <div style={{
          padding: '0 20px',
          marginBottom: '20px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '12px'
          }}>
            <h2 style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: '600',
              color: '#333',
              flex: 1
            }}>
              {item?.title || "Hotel Blue Inn"}
            </h2>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              marginLeft: '16px'
            }}>
              <button
                onClick={() => setIsLiked(!isLiked)}
                style={{
                  background: 'none',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: isLiked ? '#FF4757' : '#666'
                }}
              >
                {isLiked ? <HeartFilled /> : <HeartOutlined />}
              </button>
              
              <button
                style={{
                  background: 'none',
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: '#666'
                }}
              >
                <ShareAltOutlined />
              </button>
            </div>
          </div>

          {/* Tags */}
          <div style={{
            display: 'flex',
            gap: '8px',
            marginBottom: '20px'
          }}>
            {availableTags.slice(0, 3).map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '20px',
                  border: 'none',
                  background: selectedTags.includes(tag) ? '#FF5722' : '#f0f0f0',
                  color: selectedTags.includes(tag) ? 'white' : '#666',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Overview Section */}
          <div style={{
            marginBottom: '30px'
          }}>
            <h3 style={{
              margin: '0 0 12px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: '#333'
            }}>
              Overview
            </h3>
            <p style={{
              margin: 0,
              fontSize: '14px',
              lineHeight: '1.5',
              color: '#666'
            }}>
              Elit cursus leo vitae vehicula et venenatis pharetra non lacinia massa consectetur. Nullam tellus ipsum Nullam sed quam sapien. Morbi ut ipsum sit amet nunc vulputate dignissim. Cras nec ante ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ut maximus lacus, vel dignissim risus. Nullam tellus ipsum
            </p>
          </div>

          {/* Tagged Recommendations - Now shows more items in grid */}
          <div style={{
            marginBottom: '30px'
          }}>
            <h3 style={{
              margin: '0 0 16px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: '#333'
            }}>
              Tagged Recommendations
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              maxHeight: '400px',
              overflowY: 'auto',
              paddingRight: '4px'
            }}>
              {taggedRecommendations.map((rec) => (
                <div
                  key={rec.id}
                  style={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{
                    height: '120px',
                    backgroundImage: `url(${rec.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    {/* Dark Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))'
                    }} />
                    
                    {/* Rating Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: '12px',
                      padding: '4px 8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <StarFilled style={{ color: '#FFD700', fontSize: '12px' }} />
                      <span style={{ 
                        fontSize: '12px', 
                        fontWeight: '600',
                        color: '#333'
                      }}>
                        {rec.rating}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '8px',
                      right: '8px',
                      color: 'white'
                    }}>
                      <h4 style={{
                        margin: '0 0 4px 0',
                        fontSize: '14px',
                        fontWeight: '600',
                        textShadow: '0 1px 2px rgba(0,0,0,0.8)'
                      }}>
                        {rec.title}
                      </h4>
                      <p style={{
                        margin: 0,
                        fontSize: '11px',
                        opacity: 0.9,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}>
                        📍 {rec.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Stays - Now shows more items horizontally */}
          <div style={{
            marginBottom: '30px'
          }}>
            <h3 style={{
              margin: '0 0 16px 0',
              fontSize: '18px',
              fontWeight: '600',
              color: '#333'
            }}>
              Similar Stays
            </h3>
            
            <div style={{
              display: 'flex',
              gap: '12px',
              overflowX: 'auto',
              paddingBottom: '8px',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}>
              {similarStays.map((stay) => (
                <div
                  key={stay.id}
                  style={{
                    minWidth: '160px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={{
                    height: '120px',
                    backgroundImage: `url(${stay.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                  }}>
                    {/* Creator Avatar */}
                    <div style={{
                      position: 'absolute',
                      top: '8px',
                      left: '8px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid white'
                    }}>
                      <img
                        src={stay.creator.avatar}
                        alt={stay.creator.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>

                    {/* Like Button */}
                    <button style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      background: 'rgba(255,255,255,0.9)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '24px',
                      height: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontSize: '12px',
                      color: '#666',
                      transition: 'color 0.2s ease'
                    }}>
                      <HeartOutlined />
                    </button>
                  </div>
                  
                  <div style={{
                    padding: '8px',
                    background: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    marginTop: '-40px',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <h4 style={{
                      margin: '0 0 4px 0',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {stay.title}
                    </h4>
                    <p style={{
                      margin: 0,
                      fontSize: '10px',
                      opacity: 0.8
                    }}>
                      {stay.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'white',
        padding: '16px 20px',
        borderTop: '1px solid rgba(0,0,0,0.1)',
        maxWidth: '400px',
        margin: '0 auto',
        display: 'flex',
        gap: '12px'
      }}>
        <Button
          style={{
            flex: 1,
            height: '48px',
            borderRadius: '24px',
            border: '2px solid #FF5722',
            background: 'transparent',
            color: '#FF5722',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Add to Trip
        </Button>
        
        <Button
          style={{
            flex: 1,
            height: '48px',
            borderRadius: '24px',
            border: 'none',
            background: '#FF5722',
            color: 'white',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Book Now
        </Button>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        div::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        
        div::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        
        div::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 2px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: #bbb;
        }
      `}</style>
    </div>
  );
};

export default ItemDetails;