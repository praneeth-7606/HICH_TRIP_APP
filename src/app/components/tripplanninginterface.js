import React, { useState } from 'react';
import { 
  Card, 
  Button, 
  Modal, 
  Form, 
  Input, 
  Select, 
  Rate, 
  Tag, 
  Dropdown, 
  Space,
  Typography,
  Image,
  Row,
  Col,
  message
} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  ReloadOutlined,
    CloseOutlined,
  DeleteOutlined,
  HeartOutlined,
  HeartFilled,
  ShareAltOutlined,
  LeftOutlined,
  UserAddOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  TeamOutlined,
  MoreOutlined,
  SwapOutlined
} from '@ant-design/icons';
import SavesIntroduction from './saveintroduction';
import SavesBrowse from './savebrowse';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

const TripPlanningApp = ({ userPreferences, onResetOnboarding }) => {
    const [currentScreen, setCurrentScreen] = useState('trip-planning'); // 'trip-planning', 'saves-intro', 'saves-browse'
    const [form] = Form.useForm();
  const [expandedDays, setExpandedDays] = useState({ day01: true });
  const [activeTab, setActiveTab] = useState('itinerary');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState('day01');
  const [editingItem, setEditingItem] = useState(null);
  const [showMoveModal, setShowMoveModal] = useState(false);
  const [itemToMove, setItemToMove] = useState(null);
  const [showInviteModal, setShowInviteModal] = useState(false);

  const [tripData, setTripData] = useState({
    title: "Weekend in Hawaii",
    location: "Goa", 
    dates: "August 15-19",
    people: "3 People",
    days: {
      day01: {
        title: "Day 01",
        items: [
          {
            id: 1,
            type: "hotel",
            name: "Hotel Blue Inn",
            price: "400",
            priceUnit: "per person",
            rating: 4.5,
            tags: ["Stay", "Beach", "Romantic"],
            description: "Elit cursus leo urna sodales. Dui venenatis rhoncus non lectus urna. Nunc enim. Duis lorem sapien faucibus Sed cursus urna placerat at, sed leo, tristique...",
            image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop",
            location: "Waikiki Beach"
          }
        ]
      },
      day02: { title: "Day 02", items: [] },
      day03: { title: "Day 03", items: [] },
      day04: { title: "Day 04", items: [] }
    }
  });

  const itemTypes = {
    hotel: { color: "#1890ff", icon: "🏨", bgColor: "#e6f4ff" },
    restaurant: { color: "#fa8c16", icon: "🍽️", bgColor: "#fff2e6" },
    activity: { color: "#52c41a", icon: "🎯", bgColor: "#f6ffed" },
    transport: { color: "#13c2c2", icon: "🚗", bgColor: "#e6fffb" },
    attraction: { color: "#eb2f96", icon: "🗺️", bgColor: "#fff0f6" }
  };

  // Invite functionality
  const generateTripLink = () => {
    const tripId = tripData.title.toLowerCase().replace(/\s+/g, '-') + '-' + Date.now().toString(36);
    return `${typeof window !== 'undefined' ? window.location.origin : 'https://example.com'}/trip/${tripId}`;
  };

  const handleCopyLink = () => {
    const tripLink = generateTripLink();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(tripLink).then(() => {
        message.success('Trip link copied to clipboard!');
      }).catch(() => {
        fallbackCopyText(tripLink);
      });
    } else {
      fallbackCopyText(tripLink);
    }
  };
  

  const fallbackCopyText = (text) => {
    if (typeof document !== 'undefined') {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        message.success('Trip link copied to clipboard!');
      } catch (err) {
        message.error('Copy functionality not supported in this browser');
      }
      document.body.removeChild(textArea);
    } else {
      message.success('Trip link ready to copy: ' + text);
    }
  };

  const handleSendInvite = () => {
    const tripLink = generateTripLink();
    const subject = encodeURIComponent(`Join my trip: ${tripData.title}`);
    const body = encodeURIComponent(
      `Hi!\n\nI'd love for you to join my trip to ${tripData.location}!\n\n` +
      `Trip Details:\n` +
      `📍 Destination: ${tripData.location}\n` +
      `📅 Dates: ${tripData.dates}\n` +
      `👥 Group: ${tripData.people}\n\n` +
      `Click here to view and plan together: ${tripLink}\n\n` +
      `Looking forward to planning this amazing trip with you!`
    );
    
    if (typeof window !== 'undefined') {
      window.open(`mailto:?subject=${subject}&body=${body}`);
    }
    message.success('Invite ready to send!');
    setShowInviteModal(false);
  };



  const handleSaveTrip = () => {
    setCurrentScreen('saves-intro');
  };

  const handleExploreAndSave = () => {
    setCurrentScreen('saves-browse');
  };

  const handleBackToTripPlanning = () => {
    setCurrentScreen('trip-planning');
  };

  const handleBackToSavesIntro = () => {
    setCurrentScreen('saves-intro');
  };

  const handleAddFromSaves = (item) => {
    const itemWithId = { 
      ...item, 
      id: Date.now(),
      tags: item.tags || ['Popular']
    };
    
    setTripData(prev => ({
      ...prev,
      days: {
        ...prev.days,
        day01: {
          ...prev.days.day01,
          items: [...prev.days.day01.items, itemWithId]
        }
      }
    }));
    
    // Navigate back to trip planning
    setCurrentScreen('trip-planning');
  };

  // Trip planning handlers
  const toggleDay = (day) => {
    setExpandedDays(prev => ({
      ...prev,
      [day]: !prev[day]
    }));
  };

  const addDay = () => {
    const dayCount = Object.keys(tripData.days).length;
    const newDayKey = `day${String(dayCount + 1).padStart(2, '0')}`;
    
    setTripData(prev => ({
      ...prev,
      days: {
        ...prev.days,
        [newDayKey]: {
          title: `Day ${String(dayCount + 1).padStart(2, '0')}`,
          items: []
        }
      }
    }));
    
    setExpandedDays(prev => ({
      ...prev,
      [newDayKey]: true
    }));
    
    message.success('New day added successfully!');
  };


  const handleDeleteDay = (dayKey) => {
    const dayCount = Object.keys(tripData.days).length;
    
    if (dayCount <= 1) {
      message.warning('You must have at least one day in your trip!');
      return;
    }

    const currentDays = Object.keys(tripData.days);
    const dayIndex = currentDays.indexOf(dayKey);
    
    setTripData(prev => {
      const newDays = { ...prev.days };
      delete newDays[dayKey];
      
      const dayEntries = Object.entries(newDays);
      const reorderedDays = {};
      dayEntries.forEach(([key, value], index) => {
        const newKey = `day${String(index + 1).padStart(2, '0')}`;
        reorderedDays[newKey] = {
          ...value,
          title: `Day ${String(index + 1).padStart(2, '0')}`
        };
      });

      return {
        ...prev,
        days: reorderedDays
      };
    });
    
    setExpandedDays(prev => {
      const newExpanded = {};
      
      currentDays.forEach((day, index) => {
        if (day !== dayKey) {
          const newIndex = index > dayIndex ? index - 1 : index;
          const newKey = `day${String(newIndex + 1).padStart(2, '0')}`;
          newExpanded[newKey] = prev[day] || false;
        }
      });
      
      const expandedKeys = Object.keys(newExpanded);
      if (expandedKeys.length > 0 && !Object.values(newExpanded).some(Boolean)) {
        newExpanded[expandedKeys[0]] = true;
      }
      
      return newExpanded;
    });
    
    if (selectedDay === dayKey) {
      setSelectedDay('day01');
    }
    
    message.success('Day deleted successfully!');
  };

  const handleAddItem = (values) => {
    // This is a simplified version for demo purposes
    const itemId = editingItem ? editingItem.item.id : Date.now();
    const itemWithId = { 
      id: itemId,
      type: 'hotel',
      name: 'Sample Item',
      price: '100',
      priceUnit: 'per person',
      rating: 4.5,
      tags: ['New', 'Sample'],
      description: 'This is a sample item description.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop',
      location: 'Sample Location'
    };
    
    if (editingItem) {
      setTripData(prev => ({
        ...prev,
        days: {
          ...prev.days,
          [editingItem.dayKey]: {
            ...prev.days[editingItem.dayKey],
            items: prev.days[editingItem.dayKey].items.map(item => 
              item.id === editingItem.item.id ? itemWithId : item
            )
          }
        }
      }));
    } else {
      setTripData(prev => ({
        ...prev,
        days: {
          ...prev.days,
          [selectedDay]: {
            ...prev.days[selectedDay],
            items: [...prev.days[selectedDay].items, itemWithId]
          }
        }
      }));
    }

    setShowAddModal(false);
    setEditingItem(null);
    message.success(editingItem ? 'Item updated successfully!' : 'Item added successfully!');
  };

  const handleEditItem = (dayKey, item) => {
    setEditingItem({ dayKey, item });
    setSelectedDay(dayKey);
    setShowAddModal(true);
  };

  const handleDeleteItem = (dayKey, itemId) => {
    Modal.confirm({
      title: 'Delete Item',
      content: 'Are you sure you want to delete this item?',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        setTripData(prev => ({
          ...prev,
          days: {
            ...prev.days,
            [dayKey]: {
              ...prev.days[dayKey],
              items: prev.days[dayKey].items.filter(item => item.id !== itemId)
            }
          }
        }));
        message.success('Item deleted successfully!');
      }
    });
  };

  const handleMoveItem = (fromDay, item) => {
    setItemToMove({ fromDay, item });
    setShowMoveModal(true);
  };

  const confirmMoveItem = (toDay) => {
    if (itemToMove.fromDay === toDay) {
      setShowMoveModal(false);
      return;
    }

    setTripData(prev => ({
      ...prev,
      days: {
        ...prev.days,
        [itemToMove.fromDay]: {
          ...prev.days[itemToMove.fromDay],
          items: prev.days[itemToMove.fromDay].items.filter(item => item.id !== itemToMove.item.id)
        },
        [toDay]: {
          ...prev.days[toDay],
          items: [...prev.days[toDay].items, itemToMove.item]
        }
      }
    }));

    setShowMoveModal(false);
    setItemToMove(null);
    message.success('Item moved successfully!');
  };

  const getItemDropdownMenu = (dayKey, item) => ({
    items: [
      {
        key: 'edit',
        label: 'Edit Item',
        icon: <EditOutlined />,
        onClick: () => handleEditItem(dayKey, item)
      },
      {
        key: 'move',
        label: 'Move to Another Day',
        icon: <SwapOutlined />,
        onClick: () => handleMoveItem(dayKey, item)
      },
      {
        type: 'divider'
      },
      {
        key: 'delete',
        label: 'Delete Item',
        icon: <DeleteOutlined />,
        danger: true,
        onClick: () => handleDeleteItem(dayKey, item.id)
      }
    ]
  });


   if (currentScreen === 'saves-intro') {
    return (
      <SavesIntroduction 
        onExploreClick={handleExploreAndSave}
        onBackClick={handleBackToTripPlanning}
      />
    );
  }

  if (currentScreen === 'saves-browse') {
    return (
      <SavesBrowse 
        onBackClick={handleBackToSavesIntro}
        onAddToTrip={handleAddFromSaves}
      />
    );
  } 


  

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      background: '#f8f9fa',
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
        borderBottom: '1px solid #e8e8e8',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
      }}>
        <div style={{ padding: '16px 20px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <Button 
              type="text" 
              icon={<LeftOutlined />} 
              style={{ color: '#8c8c8c' }}
            />
            <h1 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#262626',
              margin: 0
            }}>
              Create New Trip
            </h1>
            <Space size={8}>
              <Button 
                style={{
                  borderRadius: '20px',
                  height: '32px',
                  padding: '0 16px',
                  fontSize: '12px',
                  borderColor: '#d9d9d9'
                }}
                icon={<UserAddOutlined />}
                onClick={() => setShowInviteModal(true)}
              >
                Invite
              </Button>
              <Button 
                type="primary" 
                style={{
                  borderRadius: '20px',
                  height: '32px',
                  padding: '0 16px',
                  fontSize: '12px',
                  background: '#fa8c16',
                  borderColor: '#fa8c16',
                  boxShadow: '0 2px 4px rgba(250, 140, 22, 0.3)'
                }}
                icon={<ReloadOutlined />}
                onClick={onResetOnboarding}
              >
                Reset Demo
              </Button>
              <Button 
                type="primary" 
                className="save-btn"
                onClick={handleSaveTrip}
              >
                Save Trip
              </Button>
            </Space>
          </div>
          
          <div>
            <Title level={3} style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#262626',
              margin: '0 0 8px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {tripData.title}
              <ShareAltOutlined style={{ fontSize: 16, color: '#8c8c8c' }} />
            </Title>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              color: '#8c8c8c',
              fontSize: '13px'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <EnvironmentOutlined /> {tripData.location}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <CalendarOutlined /> {tripData.dates}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <TeamOutlined /> {tripData.people}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Day Tabs */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #e8e8e8',
        padding: '12px 20px'
      }}>
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          padding: '4px 0'
        }}>
          <Button 
            type="primary"
            style={{
              borderRadius: '20px',
              height: '32px',
              padding: '0 16px',
              fontSize: '12px',
              background: '#fa8c16',
              borderColor: '#fa8c16',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              boxShadow: '0 2px 4px rgba(250, 140, 22, 0.3)'
            }}
            icon={<PlusOutlined />}
            onClick={addDay}
          >
            Add Day
          </Button>
          {Object.keys(tripData.days).map((day, index) => (
            <Button
              key={day}
              style={{
                borderRadius: '20px',
                height: '32px',
                padding: '0 16px',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                ...(expandedDays[day] ? {
                  background: '#1890ff',
                  borderColor: '#1890ff',
                  color: 'white',
                  boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)'
                } : {})
              }}
              onClick={() => toggleDay(day)}
            >
              Day {String(index + 1).padStart(2, '0')}
            </Button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{
        background: '#f8f9fa',
        minHeight: 'calc(100vh - 200px)',
        paddingBottom: '100px'
      }}>
        {Object.entries(tripData.days).map(([dayKey, dayData]) => (
          <div key={dayKey} style={{
            background: '#fff',
            borderBottom: '1px solid #f0f0f0',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'all 0.3s ease'
            }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  cursor: 'pointer',
                  flex: 1
                }}
                onClick={() => toggleDay(dayKey)}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #1890ff 0%, #40a9ff 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '14px',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)'
                }}>
                  {dayKey.slice(-2)}
                </div>
                <span style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#262626'
                }}>{dayData.title}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Button 
                  style={{
                    background: 'rgba(255, 77, 79, 0.1)',
                    border: '1px solid rgba(255, 77, 79, 0.2)',
                    color: '#ff4d4f',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    fontSize: '14px',
                    opacity: Object.keys(tripData.days).length <= 1 ? 0.5 : 1
                  }}
                  icon={<DeleteOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteDay(dayKey);
                  }}
                  title={Object.keys(tripData.days).length <= 1 ? "Cannot delete the last day" : "Delete this day"}
                  disabled={Object.keys(tripData.days).length <= 1}
                />
                <span 
                  style={{
                    fontSize: '16px',
                    color: '#8c8c8c',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    transform: expandedDays[dayKey] ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                  onClick={() => toggleDay(dayKey)}
                >
                  ⌄
                </span>
              </div>
            </div>

            {expandedDays[dayKey] && (
              <div>
                {dayData.items.length === 0 ? (
                  <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    color: '#8c8c8c'
                  }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '15px' }}>Build your trip by adding items</p>
                    <p style={{ margin: '0 0 8px 0', fontSize: '15px' }}>from your saves</p>
                    <button 
                      style={{
                        color: '#1890ff',
                        fontWeight: '500',
                        textDecoration: 'none',
                        border: 'none',
                        background: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onClick={() => {
                        setSelectedDay(dayKey);
                        setShowAddModal(true);
                      }}
                    >
                      + Add Items
                    </button>
                  </div>
                ) : (
                  <div style={{
                    padding: '0 20px 20px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    {dayData.items.map((item, index) => (
                      <Card key={item.id} style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        border: '1px solid #f0f0f0',
                        transition: 'all 0.3s ease'
                      }} styles={{ body: { padding: 0 } }}>
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                          <Image
                            style={{
                              width: '100%',
                              height: '160px',
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease'
                            }}
                            src={item.image}
                            alt={item.name}
                            preview={false}
                          />
                          <Button 
                            style={{
                              position: 'absolute',
                              top: '12px',
                              right: '12px',
                              background: 'rgba(255,255,255,0.9)',
                              border: 'none',
                              borderRadius: '50%',
                              width: '32px',
                              height: '32px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              backdropFilter: 'blur(10px)',
                              transition: 'all 0.3s ease'
                            }}
                            icon={<HeartOutlined />}
                          />
                          <div style={{
                            position: 'absolute',
                            bottom: '12px',
                            right: '12px',
                            background: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            backdropFilter: 'blur(10px)'
                          }}>
                            {index + 1}/{dayData.items.length}
                          </div>
                        </div>
                        
                        <div style={{ padding: '16px' }}>
                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '12px'
                          }}>
                            <Title level={5} style={{
                              fontSize: '16px',
                              fontWeight: '600',
                              color: '#262626',
                              margin: 0,
                              lineHeight: '1.4'
                            }}>{item.name}</Title>
                            <Dropdown menu={getItemDropdownMenu(dayKey, item)} trigger={['click']}>
                              <Button 
                                type="text" 
                                icon={<MoreOutlined />}
                                style={{ color: '#8c8c8c' }}
                              />
                            </Dropdown>
                          </div>
                          
                          {item.rating && (
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '12px'
                            }}>
                              <Rate disabled defaultValue={item.rating} style={{ fontSize: 14 }} />
                              <span style={{
                                color: '#8c8c8c',
                                fontSize: '13px',
                                fontWeight: '500'
                              }}>{item.rating}</span>
                            </div>
                          )}

                          <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '12px'
                          }}>
                            <span style={{
                              color: '#fa8c16',
                              fontSize: '16px',
                              fontWeight: '700'
                            }}>
                              ${item.price} {item.priceUnit}
                            </span>
                            <Tag 
                              style={{
                                borderRadius: '16px',
                                fontSize: '11px',
                                padding: '4px 12px',
                                fontWeight: '500',
                                border: 'none',
                                backgroundColor: itemTypes[item.type]?.bgColor,
                                color: itemTypes[item.type]?.color
                              }}
                            >
                              {itemTypes[item.type]?.icon} {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </Tag>
                          </div>

                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '6px',
                            marginBottom: '12px'
                          }}>
                            {item.tags.map((tag, tagIndex) => (
                              <Tag key={tagIndex} style={{
                                background: '#f5f5f5',
                                color: '#595959',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '11px',
                                padding: '2px 8px'
                              }}>
                                {tag}
                              </Tag>
                            ))}
                          </div>

                          <div style={{ marginBottom: '16px' }}>
                            <p style={{
                              fontSize: '13px',
                              fontWeight: '600',
                              color: '#262626',
                              margin: '0 0 6px 0'
                            }}>Overview</p>
                            <p style={{
                              fontSize: '12px',
                              color: '#8c8c8c',
                              lineHeight: '1.5',
                              margin: 0
                            }}>
                              {item.description}
                              <a href="#" style={{
                                color: '#1890ff',
                                textDecoration: 'none',
                                fontWeight: '500'
                              }}> Read More</a>
                            </p>
                          </div>

                          <Button 
                            type="primary"
                            style={{
                              width: '100%',
                              borderRadius: '8px',
                              height: '36px',
                              fontSize: '13px',
                              fontWeight: '600',
                              background: '#1890ff',
                              borderColor: '#1890ff',
                              boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)'
                            }}
                            icon={<PlusOutlined />}
                            onClick={() => {
                              setSelectedDay(dayKey);
                              setShowAddModal(true);
                            }}
                          >
                            Add Items
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '800px',
        background: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid #f0f0f0',
        padding: '12px 0',
        zIndex: 1000
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '0 20px'
        }}>
          <button style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '8px',
            border: 'none',
            background: 'none',
            color: activeTab === 'itinerary' ? '#fa8c16' : '#8c8c8c',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '12px'
          }}>
            <div style={{ fontSize: '18px', marginBottom: '4px' }}>📋</div>
            <span style={{ fontSize: '11px', fontWeight: '500' }}>Tabs</span>
          </button>
          <button style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '8px',
            border: 'none',
            background: 'none',
            color: '#8c8c8c',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '12px'
          }}>
            <div style={{ fontSize: '18px', marginBottom: '4px' }}>🔍</div>
            <span style={{ fontSize: '11px', fontWeight: '500' }}>Search</span>
          </button>
          <button 
            style={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(135deg, #fa8c16 0%, #d46b08 100%)',
              border: 'none',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(250, 140, 22, 0.4)'
            }}
            onClick={() => setShowAddModal(true)}
          >
            +
          </button>
          <button style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '8px',
            border: 'none',
            background: 'none',
            color: '#8c8c8c',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '12px'
          }}>
            <div style={{ fontSize: '18px', marginBottom: '4px' }}>📁</div>
            <span style={{ fontSize: '11px', fontWeight: '500' }}>Saves</span>
          </button>
          <button style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '8px',
            border: 'none',
            background: 'none',
            color: '#8c8c8c',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            borderRadius: '12px'
          }}>
            <div style={{ fontSize: '18px', marginBottom: '4px' }}>👤</div>
            <span style={{ fontSize: '11px', fontWeight: '500' }}>Account</span>
          </button>
        </div>
      </div>

      {/* Add/Edit Item Modal */}
      <Modal
        title={
          <Title level={4} style={{ margin: 0 }}>
            {editingItem ? 'Edit Item' : 'Add New Item'}
          </Title>
        }
        open={showAddModal}
        onCancel={() => {
          setShowAddModal(false);
          setEditingItem(null);
        }}
        footer={
          <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
            <Button onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
            <Button type="primary" onClick={() => {
              const newItem = {
                id: editingItem ? editingItem.item.id : Date.now(),
                type: 'hotel',
                name: 'Sample Item',
                price: '100',
                priceUnit: 'per person',
                rating: 4.5,
                tags: ['New', 'Sample'],
                description: 'This is a sample item description.',
                image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop',
                location: 'Sample Location'
              };
              
              if (editingItem) {
                setTripData(prev => ({
                  ...prev,
                  days: {
                    ...prev.days,
                    [editingItem.dayKey]: {
                      ...prev.days[editingItem.dayKey],
                      items: prev.days[editingItem.dayKey].items.map(item => 
                        item.id === editingItem.item.id ? newItem : item
                      )
                    }
                  }
                }));
              } else {
                setTripData(prev => ({
                  ...prev,
                  days: {
                    ...prev.days,
                    [selectedDay]: {
                      ...prev.days[selectedDay],
                      items: [...prev.days[selectedDay].items, newItem]
                    }
                  }
                }));
              }
              
              setShowAddModal(false);
              setEditingItem(null);
              message.success(editingItem ? 'Item updated successfully!' : 'Item added successfully!');
            }}>
              {editingItem ? 'Update Item' : 'Add Item'}
            </Button>
          </Space>
        }
        width={600}
        style={{ top: 20 }}
      >
        <div>
          <p style={{ textAlign: 'center', padding: '40px 20px', color: '#8c8c8c' }}>
            This is a demo modal. In a real app, you would have a form here to add/edit trip items.
          </p>
          <div style={{ 
            background: '#f5f5f5', 
            padding: '16px', 
            borderRadius: '8px',
            marginBottom: '16px'
          }}>
            <p style={{ margin: '0 0 8px 0', fontWeight: '600' }}>Sample Item Preview:</p>
            <p style={{ margin: '0 0 4px 0' }}>🏨 Hotel - Sample Item</p>
            <p style={{ margin: '0 0 4px 0' }}>💰 $100 per person</p>
            <p style={{ margin: 0 }}>⭐ 4.5 stars</p>
          </div>
          <p style={{ fontSize: '12px', color: '#8c8c8c', textAlign: 'center' }}>
            Click "Add Item" to add this sample item to your trip.
          </p>
        </div>
      </Modal>

      {/* Move Item Modal */}
      <Modal
        title="Move Item"
        open={showMoveModal}
        onCancel={() => setShowMoveModal(false)}
        footer={null}
      >
        <p style={{ marginBottom: 16 }}>
          Move <strong>"{itemToMove?.item?.name}"</strong> to which day?
        </p>
        <Space wrap>
          {Object.entries(tripData.days).map(([dayKey, dayData]) => (
            <Button
              key={dayKey}
              type={dayKey === itemToMove?.fromDay ? "default" : "primary"}
              onClick={() => confirmMoveItem(dayKey)}
              disabled={dayKey === itemToMove?.fromDay}
              style={{ marginBottom: 8 }}
            >
              {dayData.title}
            </Button>
          ))}
        </Space>
      </Modal>

      {/* Invite People Modal */}
      <Modal
        open={showInviteModal}
        onCancel={() => setShowInviteModal(false)}
        footer={null}
        closeIcon={<CloseOutlined style={{ color: '#8c8c8c' }} />}
        centered
        width={400}
        styles={{
          body: { padding: '24px 24px 32px 24px' },
          header: { display: 'none' }
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <Title level={4} style={{ 
            margin: '0 0 16px 0', 
            fontSize: '18px', 
            fontWeight: '600',
            color: '#262626'
          }}>
            Invite People
          </Title>
          
          <Text style={{ 
            display: 'block', 
            marginBottom: '32px', 
            color: '#595959',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            Invite your friends or family to view your trip and plan together
          </Text>
          
          <div style={{ marginBottom: '32px', textAlign: 'left' }}>
            <Text style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontWeight: '500',
              color: '#262626',
              fontSize: '13px'
            }}>
              Your trip link
            </Text>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              border: '1px dashed #d9d9d9',
              borderRadius: '6px',
              padding: '12px'
            }}>
              <Input 
                value={generateTripLink()}
                readOnly
                style={{ 
                  border: 'none',
                  padding: '0',
                  fontSize: '12px',
                  color: '#595959',
                  backgroundColor: 'transparent'
                }}
              />
              <Button 
                type="text" 
                size="small"
                onClick={handleCopyLink}
                style={{ 
                  color: '#fa8c16',
                  fontWeight: '500',
                  fontSize: '12px',
                  padding: '4px 8px',
                  height: 'auto'
                }}
              >
                Copy
              </Button>
            </div>
          </div>
          
          <Button 
            type="primary"
            block
            onClick={handleSendInvite}
            style={{
              background: '#fa8c16',
              borderColor: '#fa8c16',
              borderRadius: '8px',
              height: '44px',
              fontSize: '14px',
              fontWeight: '600',
              boxShadow: '0 2px 4px rgba(250, 140, 22, 0.3)'
            }}
          >
            Send an Invite
          </Button>
        </div>
      </Modal>
    </div>
  );
};

// import React, { useState } from 'react';
// import { 
//   Card, 
//   Button, 
//   Modal, 
//   Form, 
//   Input, 
//   Select, 
//   Rate, 
//   Tag, 
//   Dropdown, 
//   Space,
//   Typography,
//   Image,
//   Row,
//   Col,
//   message
// } from 'antd';
// import {
//   PlusOutlined,
//   EditOutlined,
//   DeleteOutlined,
//   HeartOutlined,
//   HeartFilled,
//   ShareAltOutlined,
//   LeftOutlined,
//   UserAddOutlined,
//   EnvironmentOutlined,
//   CalendarOutlined,
//   TeamOutlined,
//   MoreOutlined,
//   SwapOutlined
// } from '@ant-design/icons';

// const { Title, Text } = Typography;
// const { Option } = Select;
// const { TextArea } = Input;

// // Saves Introduction Component
// const SavesIntroduction = ({ onExploreClick, onBackClick }) => {
//   const styles = {
//     container: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f3e8ff 100%)',
//       display: 'flex',
//       flexDirection: 'column',
//       maxWidth: '800px',
//       margin: '0 auto',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//     },
//     header: {
//       padding: '16px 20px',
//       display: 'flex',
//       alignItems: 'center',
//       background: 'rgba(255, 255, 255, 0.8)',
//       backdropFilter: 'blur(20px)',
//       borderBottom: '1px solid rgba(0,0,0,0.05)'
//     },
//     backButton: {
//       border: 'none',
//       background: 'none',
//       fontSize: '18px',
//       color: '#262626',
//       cursor: 'pointer',
//       padding: '8px',
//       borderRadius: '50%',
//       transition: 'all 0.3s ease'
//     },
//     title: {
//       fontSize: '18px',
//       fontWeight: '600',
//       color: '#262626',
//       margin: '0 0 0 16px'
//     },
//     content: {
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: '40px 20px',
//       textAlign: 'center'
//     },
//     illustrationContainer: {
//       marginBottom: '40px',
//       position: 'relative'
//     },
//     cardStack: {
//       position: 'relative',
//       width: '280px',
//       height: '180px',
//       margin: '0 auto'
//     },
//     card: {
//       position: 'absolute',
//       width: '220px',
//       height: '140px',
//       borderRadius: '16px',
//       overflow: 'hidden',
//       boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
//       transition: 'all 0.3s ease'
//     },
//     card1: {
//       top: '0px',
//       left: '0px',
//       transform: 'rotate(-8deg)',
//       zIndex: 1
//     },
//     card2: {
//       top: '20px',
//       left: '30px',
//       transform: 'rotate(5deg)',
//       zIndex: 2
//     },
//     card3: {
//       top: '40px',
//       left: '60px',
//       transform: 'rotate(-2deg)',
//       zIndex: 3
//     },
//     cardImage: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover'
//     },
//     textContent: {
//       maxWidth: '320px',
//       marginBottom: '40px'
//     },
//     mainText: {
//       fontSize: '18px',
//       color: '#262626',
//       lineHeight: '1.6',
//       margin: '0',
//       fontWeight: '400'
//     },
//     exploreButton: {
//       background: '#fa8c16',
//       border: 'none',
//       borderRadius: '25px',
//       height: '50px',
//       padding: '0 32px',
//       fontSize: '16px',
//       fontWeight: '600',
//       color: 'white',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 4px 16px rgba(250, 140, 22, 0.3)',
//       minWidth: '200px'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <button 
//           style={styles.backButton}
//           onClick={onBackClick}
//           onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.05)'}
//           onMouseLeave={(e) => e.target.style.background = 'none'}
//         >
//           <LeftOutlined />
//         </button>
//         <h1 style={styles.title}>Saves</h1>
//       </div>

//       <div style={styles.content}>
//         <div style={styles.illustrationContainer}>
//           <div style={styles.cardStack}>
//             <div style={{...styles.card, ...styles.card1}}>
//               <img 
//                 src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&q=80"
//                 alt="Travel destination"
//                 style={styles.cardImage}
//               />
//             </div>
//             <div style={{...styles.card, ...styles.card2}}>
//               <img 
//                 src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&q=80"
//                 alt="Luxury hotel"
//                 style={styles.cardImage}
//               />
//             </div>
//             <div style={{...styles.card, ...styles.card3}}>
//               <img 
//                 src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80"
//                 alt="Beach resort"
//                 style={styles.cardImage}
//               />
//             </div>
//           </div>
//         </div>

//         <div style={styles.textContent}>
//           <p style={styles.mainText}>
//             Get inspired by your favourite creators, love their recommendations and add to your trip
//           </p>
//         </div>

//         <button 
//           style={styles.exploreButton}
//           onClick={onExploreClick}
//           onMouseEnter={(e) => {
//             e.target.style.background = '#d46b08';
//             e.target.style.transform = 'translateY(-2px)';
//             e.target.style.boxShadow = '0 8px 24px rgba(250, 140, 22, 0.4)';
//           }}
//           onMouseLeave={(e) => {
//             e.target.style.background = '#fa8c16';
//             e.target.style.transform = 'translateY(0px)';
//             e.target.style.boxShadow = '0 4px 16px rgba(250, 140, 22, 0.3)';
//           }}
//         >
//           Explore & Save
//         </button>
//       </div>
//     </div>
//   );
// };

// // Saves Browse Component
// const SavesBrowse = ({ onBackClick, onAddToTrip }) => {
//   const [activeTab, setActiveTab] = useState('Stay');
//   const [savedItems, setSavedItems] = useState(new Set());

//   const tabs = ['Stay', 'Food', 'Activity/Event', 'Local/Culture'];

//   const savesData = {
//     Stay: [
//       {
//         id: 1,
//         name: 'Hotel Hyatt',
//         location: 'Ibiza',
//         rating: 4.5,
//         image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop&q=80',
//         type: 'hotel',
//         price: '450',
//         priceUnit: 'per night'
//       },
//       {
//         id: 2,
//         name: 'Villa Coralina',
//         location: 'Goa',
//         rating: 4.5,
//         image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop&q=80',
//         type: 'hotel',
//         price: '320',
//         priceUnit: 'per night'
//       },
//       {
//         id: 3,
//         name: 'Seaside Resort',
//         location: 'Maldives',
//         rating: 4.5,
//         image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&q=80',
//         type: 'hotel',
//         price: '680',
//         priceUnit: 'per night'
//       }
//     ],
//     Food: [
//       {
//         id: 4,
//         name: 'Ocean View Restaurant',
//         location: 'Santorini',
//         rating: 4.7,
//         image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80',
//         type: 'restaurant',
//         price: '85',
//         priceUnit: 'per person'
//       }
//     ],
//     'Activity/Event': [
//       {
//         id: 5,
//         name: 'Scuba Diving',
//         location: 'Great Barrier Reef',
//         rating: 4.9,
//         image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop&q=80',
//         type: 'activity',
//         price: '120',
//         priceUnit: 'per person'
//       }
//     ],
//     'Local/Culture': [
//       {
//         id: 6,
//         name: 'Traditional Dance Show',
//         location: 'Bali',
//         rating: 4.4,
//         image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&q=80',
//         type: 'activity',
//         price: '40',
//         priceUnit: 'per person'
//       }
//     ]
//   };

//   const toggleSave = (itemId) => {
//     const newSavedItems = new Set(savedItems);
//     if (savedItems.has(itemId)) {
//       newSavedItems.delete(itemId);
//       message.success('Removed from saves');
//     } else {
//       newSavedItems.add(itemId);
//       message.success('Added to saves');
//     }
//     setSavedItems(newSavedItems);
//   };

//   const handleAddToTrip = (item) => {
//     onAddToTrip(item);
//     message.success(`${item.name} added to your trip!`);
//   };

//   const styles = {
//     container: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f3e8ff 100%)',
//       maxWidth: '800px',
//       margin: '0 auto',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
//     },
//     header: {
//       padding: '16px 20px',
//       display: 'flex',
//       alignItems: 'center',
//       background: 'rgba(255, 255, 255, 0.9)',
//       backdropFilter: 'blur(20px)',
//       borderBottom: '1px solid rgba(0,0,0,0.05)',
//       position: 'sticky',
//       top: 0,
//       zIndex: 100
//     },
//     backButton: {
//       border: 'none',
//       background: 'none',
//       fontSize: '18px',
//       color: '#262626',
//       cursor: 'pointer',
//       padding: '8px',
//       borderRadius: '50%',
//       transition: 'all 0.3s ease'
//     },
//     title: {
//       fontSize: '18px',
//       fontWeight: '600',
//       color: '#262626',
//       margin: '0 0 0 16px'
//     },
//     tabsContainer: {
//       background: 'rgba(255, 255, 255, 0.9)',
//       backdropFilter: 'blur(20px)',
//       padding: '12px 20px',
//       borderBottom: '1px solid rgba(0,0,0,0.05)',
//       position: 'sticky',
//       top: '64px',
//       zIndex: 99
//     },
//     tabs: {
//       display: 'flex',
//       gap: '8px',
//       overflowX: 'auto'
//     },
//     tab: {
//       padding: '8px 16px',
//       border: 'none',
//       borderRadius: '20px',
//       fontSize: '14px',
//       fontWeight: '500',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       whiteSpace: 'nowrap',
//       background: 'transparent',
//       color: '#8c8c8c'
//     },
//     activeTab: {
//       background: '#1890ff',
//       color: 'white',
//       boxShadow: '0 2px 8px rgba(24, 144, 255, 0.3)'
//     },
//     content: {
//       padding: '20px',
//       paddingBottom: '100px'
//     },
//     grid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//       gap: '20px'
//     },
//     card: {
//       background: 'white',
//       borderRadius: '16px',
//       overflow: 'hidden',
//       boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//       transition: 'all 0.3s ease',
//       cursor: 'pointer'
//     },
//     imageContainer: {
//       position: 'relative',
//       height: '200px',
//       overflow: 'hidden'
//     },
//     cardImage: {
//       width: '100%',
//       height: '100%',
//       objectFit: 'cover',
//       transition: 'transform 0.3s ease'
//     },
//     heartButton: {
//       position: 'absolute',
//       top: '12px',
//       right: '12px',
//       background: 'rgba(255, 255, 255, 0.9)',
//       border: 'none',
//       borderRadius: '50%',
//       width: '36px',
//       height: '36px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       backdropFilter: 'blur(10px)'
//     },
//     ratingBadge: {
//       position: 'absolute',
//       bottom: '12px',
//       left: '12px',
//       background: 'rgba(0, 0, 0, 0.7)',
//       color: 'white',
//       padding: '4px 8px',
//       borderRadius: '12px',
//       fontSize: '12px',
//       fontWeight: '500',
//       backdropFilter: 'blur(10px)',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '4px'
//     },
//     cardBody: {
//       padding: '16px'
//     },
//     cardTitle: {
//       fontSize: '16px',
//       fontWeight: '600',
//       color: '#262626',
//       margin: '0 0 4px 0',
//       lineHeight: '1.4'
//     },
//     cardLocation: {
//       fontSize: '13px',
//       color: '#8c8c8c',
//       margin: '0 0 12px 0'
//     },
//     priceSection: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center'
//     },
//     price: {
//       fontSize: '16px',
//       fontWeight: '700',
//       color: '#fa8c16'
//     },
//     addButton: {
//       background: '#1890ff',
//       border: 'none',
//       borderRadius: '20px',
//       padding: '6px 16px',
//       color: 'white',
//       fontSize: '12px',
//       fontWeight: '600',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '4px'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <button 
//           style={styles.backButton}
//           onClick={onBackClick}
//           onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.05)'}
//           onMouseLeave={(e) => e.target.style.background = 'none'}
//         >
//           <LeftOutlined />
//         </button>
//         <h1 style={styles.title}>Saves</h1>
//       </div>

//       <div style={styles.tabsContainer}>
//         <div style={styles.tabs}>
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               style={{
//                 ...styles.tab,
//                 ...(activeTab === tab ? styles.activeTab : {})
//               }}
//               onClick={() => setActiveTab(tab)}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div style={styles.content}>
//         <div style={styles.grid}>
//           {savesData[activeTab]?.map((item) => (
//             <div key={item.id} style={styles.card}>
//               <div style={styles.imageContainer}>
//                 <img 
//                   src={item.image} 
//                   alt={item.name}
//                   style={styles.cardImage}
//                 />
//                 <button
//                   style={{
//                     ...styles.heartButton,
//                     color: savedItems.has(item.id) ? '#ff4d4f' : '#8c8c8c'
//                   }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     toggleSave(item.id);
//                   }}
//                 >
//                   {savedItems.has(item.id) ? <HeartFilled /> : <HeartOutlined />}
//                 </button>
//                 <div style={styles.ratingBadge}>
//                   <span style={{ color: '#ffa940' }}>★</span>
//                   {item.rating}
//                 </div>
//               </div>
              
//               <div style={styles.cardBody}>
//                 <h3 style={styles.cardTitle}>{item.name}</h3>
//                 <p style={styles.cardLocation}>📍 {item.location}</p>
                
//                 <div style={styles.priceSection}>
//                   <span style={styles.price}>
//                     ${item.price} {item.priceUnit}
//                   </span>
//                   <button
//                     style={styles.addButton}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleAddToTrip(item);
//                     }}
//                   >
//                     <PlusOutlined style={{ fontSize: '10px' }} />
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main Trip Planning App Component
// const TripPlanningApp = () => {
//   const [currentScreen, setCurrentScreen] = useState('trip-planning'); // 'trip-planning', 'saves-intro', 'saves-browse'
//   const [expandedDays, setExpandedDays] = useState({ day01: true });
//   const [activeTab, setActiveTab] = useState('itinerary');
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [selectedDay, setSelectedDay] = useState('day01');
//   const [editingItem, setEditingItem] = useState(null);
//   const [showMoveModal, setShowMoveModal] = useState(false);
//   const [itemToMove, setItemToMove] = useState(null);
//   const [form] = Form.useForm();

//   const [tripData, setTripData] = useState({
//     title: "Weekend in Hawaii",
//     location: "Oahu", 
//     dates: "August 15-19",
//     people: "3 People",
//     days: {
//       day01: {
//         title: "Day 01",
//         items: [
//           {
//             id: 1,
//             type: "hotel",
//             name: "Hotel Blue Inn",
//             price: "400",
//             priceUnit: "per person",
//             rating: 4.5,
//             tags: ["Stay", "Beach", "Romantic"],
//             description: "Elit cursus leo urna sodales. Dui venenatis rhoncus non lectus urna. Nunc enim. Duis lorem sapien faucibus Sed cursus urna placerat at, sed leo, tristique...",
//             image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop",
//             location: "Waikiki Beach"
//           }
//         ]
//       },
//       day02: { title: "Day 02", items: [] },
//       day03: { title: "Day 03", items: [] },
//       day04: { title: "Day 04", items: [] }
//     }
//   });

//   const itemTypes = {
//     hotel: { color: "#1890ff", icon: "🏨", bgColor: "#e6f4ff" },
//     restaurant: { color: "#fa8c16", icon: "🍽️", bgColor: "#fff2e6" },
//     activity: { color: "#52c41a", icon: "🎯", bgColor: "#f6ffed" },
//     transport: { color: "#13c2c2", icon: "🚗", bgColor: "#e6fffb" },
//     attraction: { color: "#eb2f96", icon: "🗺️", bgColor: "#fff0f6" }
//   };

//   // Navigation handlers
//   const handleSaveTrip = () => {
//     setCurrentScreen('saves-intro');
//   };

//   const handleExploreAndSave = () => {
//     setCurrentScreen('saves-browse');
//   };

//   const handleBackToTripPlanning = () => {
//     setCurrentScreen('trip-planning');
//   };

//   const handleBackToSavesIntro = () => {
//     setCurrentScreen('saves-intro');
//   };

//   const handleAddFromSaves = (item) => {
//     const itemWithId = { 
//       ...item, 
//       id: Date.now(),
//       tags: item.tags || ['Popular']
//     };
    
//     setTripData(prev => ({
//       ...prev,
//       days: {
//         ...prev.days,
//         day01: {
//           ...prev.days.day01,
//           items: [...prev.days.day01.items, itemWithId]
//         }
//       }
//     }));
//   };

//   // Existing trip planning handlers
//   const toggleDay = (day) => {
//     setExpandedDays(prev => ({
//       ...prev,
//       [day]: !prev[day]
//     }));
//   };

//   const addDay = () => {
//     const dayCount = Object.keys(tripData.days).length;
//     const newDayKey = `day${String(dayCount + 1).padStart(2, '0')}`;
//     setTripData(prev => ({
//       ...prev,
//       days: {
//         ...prev.days,
//         [newDayKey]: {
//           title: `Day ${String(dayCount + 1).padStart(2, '0')}`,
//           items: []
//         }
//       }
//     }));
//     message.success('New day added successfully!');
//   };

//   const handleAddItem = (values) => {
//     const itemId = Date.now();
//     const itemWithId = { 
//       ...values, 
//       id: itemId, 
//       tags: values.tags || [],
//       image: values.image || `https://images.unsplash.com/photo-${values.type === 'hotel' ? '1571896349842-33c89424de2d' : values.type === 'restaurant' ? '1414235077428-338989a2e8c0' : '1544551763-46a013bb70d5'}?w=400&h=200&fit=crop`
//     };
    
//     setTripData(prev => ({
//       ...prev,
//       days: {
//         ...prev.days,
//         [selectedDay]: {
//           ...prev.days[selectedDay],
//           items: [...prev.days[selectedDay].items, itemWithId]
//         }
//       }
//     }));

//     form.resetFields();
//     setShowAddModal(false);
//     setEditingItem(null);
//     message.success(editingItem ? 'Item updated successfully!' : 'Item added successfully!');
//   };

//   const handleEditItem = (dayKey, item) => {
//     setEditingItem({ dayKey, item });
//     setSelectedDay(dayKey);
//     form.setFieldsValue({
//       ...item,
//       tags: item.tags || []
//     });
//     setShowAddModal(true);
//   };

//   const handleDeleteItem = (dayKey, itemId) => {
//     Modal.confirm({
//       title: 'Delete Item',
//       content: 'Are you sure you want to delete this item?',
//       okText: 'Delete',
//       okType: 'danger',
//       cancelText: 'Cancel',
//       onOk() {
//         setTripData(prev => ({
//           ...prev,
//           days: {
//             ...prev.days,
//             [dayKey]: {
//               ...prev.days[dayKey],
//               items: prev.days[dayKey].items.filter(item => item.id !== itemId)
//             }
//           }
//         }));
//         message.success('Item deleted successfully!');
//       }
//     });
//   };

//   const handleMoveItem = (fromDay, item) => {
//     setItemToMove({ fromDay, item });
//     setShowMoveModal(true);
//   };

//   const confirmMoveItem = (toDay) => {
//     if (itemToMove.fromDay === toDay) {
//       setShowMoveModal(false);
//       return;
//     }

//     setTripData(prev => ({
//       ...prev,
//       days: {
//         ...prev.days,
//         [itemToMove.fromDay]: {
//           ...prev.days[itemToMove.fromDay],
//           items: prev.days[itemToMove.fromDay].items.filter(item => item.id !== itemToMove.item.id)
//         },
//         [toDay]: {
//           ...prev.days[toDay],
//           items: [...prev.days[toDay].items, itemToMove.item]
//         }
//       }
//     }));

//     setShowMoveModal(false);
//     setItemToMove(null);
//     message.success('Item moved successfully!');
//   };

//   const getItemDropdownMenu = (dayKey, item) => ({
//     items: [
//       {
//         key: 'edit',
//         label: 'Edit Item',
//         icon: <EditOutlined />,
//         onClick: () => handleEditItem(dayKey, item)
//       },
//       {
//         key: 'move',
//         label: 'Move to Another Day',
//         icon: <SwapOutlined />,
//         onClick: () => handleMoveItem(dayKey, item)
//       },
//       {
//         type: 'divider'
//       },
//       {
//         key: 'delete',
//         label: 'Delete Item',
//         icon: <DeleteOutlined />,
//         danger: true,
//         onClick: () => handleDeleteItem(dayKey, item.id)
//       }
//     ]
//   });

//   // Render based on current screen
//   if (currentScreen === 'saves-intro') {
//     return (
//       <SavesIntroduction 
//         onExploreClick={handleExploreAndSave}
//         onBackClick={handleBackToTripPlanning}
//       />
//     );
//   }

//   if (currentScreen === 'saves-browse') {
//     return (
//       <SavesBrowse 
//         onBackClick={handleBackToSavesIntro}
//         onAddToTrip={handleAddFromSaves}
//       />
//     );
//   }

//   // Trip Planning Screen (default)
//   const customStyles = `
//     .trip-container {
//       max-width: 800px;
//       margin: 0 auto;
//       background: #f8f9fa;
//       min-height: 100vh;
//       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//     }

//     .trip-header {
//       background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
//       border-bottom: 1px solid #e8e8e8;
//       position: sticky;
//       top: 0;
//       z-index: 100;
//       box-shadow: 0 2px 8px rgba(0,0,0,0.06);
//     }

//     .header-content {
//       padding: 16px 20px;
//     }

//     .header-top {
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       margin-bottom: 16px;
//     }

//     .header-title {
//       font-size: 18px;
//       font-weight: 600;
//       color: #262626;
//       margin: 0;
//     }

//     .invite-btn {
//       border-radius: 20px !important;
//       height: 32px !important;
//       padding: 0 16px !important;
//       font-size: 12px !important;
//       border-color: #d9d9d9 !important;
//     }

//     .save-btn {
//       border-radius: 20px !important;
//       height: 32px !important;
//       padding: 0 16px !important;
//       font-size: 12px !important;
//       background: #fa8c16 !important;
//       border-color: #fa8c16 !important;
//       box-shadow: 0 2px 4px rgba(250, 140, 22, 0.3) !important;
//     }

//     .save-btn:hover {
//       background: #d46b08 !important;
//       border-color: #d46b08 !important;
//       transform: translateY(-1px);
//       box-shadow: 0 4px 8px rgba(250, 140, 22, 0.4) !important;
//     }

//     .trip-title {
//       font-size: 24px;
//       font-weight: 700;
//       color: #262626;
//       margin: 0 0 8px 0;
//       display: flex;
//       align-items: center;
//       gap: 8px;
//     }

//     .trip-details {
//       display: flex;
//       align-items: center;
//       gap: 16px;
//       color: #8c8c8c;
//       font-size: 13px;
//     }

//     .trip-detail-item {
//       display: flex;
//       align-items: center;
//       gap: 4px;
//     }

//     .day-tabs-container {
//       background: #fff;
//       border-bottom: 1px solid #e8e8e8;
//       padding: 12px 20px;
//     }

//     .day-tabs {
//       display: flex;
//       gap: 8px;
//       overflow-x: auto;
//       padding: 4px 0;
//     }

//     .add-day-btn {
//       border-radius: 20px !important;
//       height: 32px !important;
//       padding: 0 16px !important;
//       font-size: 12px !important;
//       background: #fa8c16 !important;
//       border-color: #fa8c16 !important;
//       white-space: nowrap;
//       flex-shrink: 0;
//       box-shadow: 0 2px 4px rgba(250, 140, 22, 0.3) !important;
//     }

//     .add-day-btn:hover {
//       background: #d46b08 !important;
//       border-color: #d46b08 !important;
//       transform: translateY(-1px);
//       box-shadow: 0 4px 8px rgba(250, 140, 22, 0.4) !important;
//     }

//     .day-tab {
//       border-radius: 20px !important;
//       height: 32px !important;
//       padding: 0 16px !important;
//       font-size: 12px !important;
//       white-space: nowrap;
//       flex-shrink: 0;
//       transition: all 0.3s ease;
//     }

//     .day-tab.active {
//       background: #1890ff !important;
//       border-color: #1890ff !important;
//       color: white !important;
//       box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3) !important;
//     }

//     .content-area {
//       background: #f8f9fa;
//       min-height: calc(100vh - 200px);
//       padding-bottom: 100px;
//     }

//     .day-section {
//       background: #fff;
//       border-bottom: 1px solid #f0f0f0;
//       transition: all 0.3s ease;
//     }

//     .day-header {
//       padding: 20px;
//       cursor: pointer;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       transition: all 0.3s ease;
//     }

//     .day-header:hover {
//       background: #fafafa;
//     }

//     .day-header-left {
//       display: flex;
//       align-items: center;
//       gap: 16px;
//     }

//     .day-number {
//       width: 40px;
//       height: 40px;
//       background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       color: white;
//       font-size: 14px;
//       font-weight: 600;
//       box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
//     }

//     .day-title {
//       font-size: 16px;
//       font-weight: 600;
//       color: #262626;
//     }

//     .chevron {
//       font-size: 16px;
//       color: #8c8c8c;
//       transition: transform 0.3s ease;
//     }

//     .chevron.expanded {
//       transform: rotate(180deg);
//     }

//     .empty-state {
//       text-align: center;
//       padding: 60px 20px;
//       color: #8c8c8c;
//     }

//     .empty-state p {
//       margin: 0 0 8px 0;
//       font-size: 15px;
//     }

//     .add-items-link {
//       color: #1890ff !important;
//       font-weight: 500;
//       text-decoration: none;
//       border: none;
//       background: none;
//       cursor: pointer;
//       transition: all 0.3s ease;
//     }

//     .add-items-link:hover {
//       color: #40a9ff !important;
//       transform: translateY(-1px);
//     }

//     .items-container {
//       padding: 0 20px 20px 20px;
//       display: flex;
//       flex-direction: column;
//       gap: 16px;
//     }

//     .item-card {
//       border-radius: 12px !important;
//       overflow: hidden;
//       box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
//       border: 1px solid #f0f0f0 !important;
//       transition: all 0.3s ease;
//     }

//     .item-card:hover {
//       transform: translateY(-2px);
//       box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
//     }

//     .item-image-container {
//       position: relative;
//       overflow: hidden;
//     }

//     .item-image {
//       width: 100%;
//       height: 160px;
//       object-fit: cover;
//       transition: transform 0.3s ease;
//     }

//     .item-card:hover .item-image {
//       transform: scale(1.05);
//     }

//     .heart-btn {
//       position: absolute;
//       top: 12px;
//       right: 12px;
//       background: rgba(255,255,255,0.9) !important;
//       border: none !important;
//       border-radius: 50% !important;
//       width: 32px !important;
//       height: 32px !important;
//       display: flex !important;
//       align-items: center !important;
//       justify-content: center !important;
//       backdrop-filter: blur(10px);
//       transition: all 0.3s ease;
//     }

//     .heart-btn:hover {
//       background: #ff4d4f !important;
//       color: white !important;
//       transform: scale(1.1);
//     }

//     .image-badge {
//       position: absolute;
//       bottom: 12px;
//       right: 12px;
//       background: rgba(0,0,0,0.7);
//       color: white;
//       padding: 4px 8px;
//       border-radius: 12px;
//       font-size: 11px;
//       backdrop-filter: blur(10px);
//     }

//     .item-card-body {
//       padding: 16px !important;
//     }

//     .item-header {
//       display: flex;
//       justify-content: space-between;
//       align-items: flex-start;
//       margin-bottom: 12px;
//     }

//     .item-name {
//       font-size: 16px;
//       font-weight: 600;
//       color: #262626;
//       margin: 0;
//       line-height: 1.4;
//     }

//     .item-rating {
//       display: flex;
//       align-items: center;
//       gap: 8px;
//       margin-bottom: 12px;
//     }

//     .rating-text {
//       color: #8c8c8c;
//       font-size: 13px;
//       font-weight: 500;
//     }

//     .price-section {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 12px;
//     }

//     .item-price {
//       color: #fa8c16;
//       font-size: 16px;
//       font-weight: 700;
//     }

//     .item-type-tag {
//       border-radius: 16px !important;
//       font-size: 11px !important;
//       padding: 4px 12px !important;
//       font-weight: 500 !important;
//       border: none !important;
//     }

//     .item-tags {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 6px;
//       margin-bottom: 12px;
//     }

//     .item-tag {
//       background: #f5f5f5 !important;
//       color: #595959 !important;
//       border: none !important;
//       border-radius: 12px !important;
//       font-size: 11px !important;
//       padding: 2px 8px !important;
//     }

//     .overview-section {
//       margin-bottom: 16px;
//     }

//     .overview-title {
//       font-size: 13px;
//       font-weight: 600;
//       color: #262626;
//       margin: 0 0 6px 0;
//     }

//     .overview-text {
//       font-size: 12px;
//       color: #8c8c8c;
//       line-height: 1.5;
//       margin: 0;
//     }

//     .read-more {
//       color: #1890ff;
//       text-decoration: none;
//       font-weight: 500;
//     }

//     .add-items-btn {
//       width: 100%;
//       border-radius: 8px !important;
//       height: 36px !important;
//       font-size: 13px !important;
//       font-weight: 600 !important;
//       background: #1890ff !important;
//       border-color: #1890ff !important;
//       box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3) !important;
//     }

//     .add-items-btn:hover {
//       background: #40a9ff !important;
//       border-color: #40a9ff !important;
//       transform: translateY(-1px);
//       box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4) !important;
//     }

//     .bottom-nav {
//       position: fixed;
//       bottom: 0;
//       left: 50%;
//       transform: translateX(-50%);
//       width: 100%;
//       max-width: 800px;
//       background: rgba(255,255,255,0.95);
//       backdrop-filter: blur(20px);
//       border-top: 1px solid #f0f0f0;
//       padding: 12px 0;
//       z-index: 1000;
//     }

//     .nav-container {
//       display: flex;
//       justify-content: space-around;
//       align-items: center;
//       padding: 0 20px;
//     }

//     .nav-item {
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       padding: 8px;
//       border: none;
//       background: none;
//       color: #8c8c8c;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       border-radius: 12px;
//     }

//     .nav-item.active {
//       color: #fa8c16;
//     }

//     .nav-item:hover {
//       color: #fa8c16;
//       background: rgba(250, 140, 22, 0.08);
//     }

//     .nav-icon {
//       font-size: 18px;
//       margin-bottom: 4px;
//     }

//     .nav-label {
//       font-size: 11px;
//       font-weight: 500;
//     }

//     .add-button {
//       width: 48px;
//       height: 48px;
//       background: linear-gradient(135deg, #fa8c16 0%, #d46b08 100%);
//       border: none;
//       border-radius: 50%;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       color: white;
//       font-size: 20px;
//       font-weight: 600;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       box-shadow: 0 4px 12px rgba(250, 140, 22, 0.4);
//     }

//     .add-button:hover {
//       transform: translateY(-2px) scale(1.05);
//       box-shadow: 0 8px 20px rgba(250, 140, 22, 0.5);
//     }

//     .modal-form .ant-form-item-label > label {
//       font-weight: 600;
//       color: #262626;
//     }

//     .modal-form .ant-input,
//     .modal-form .ant-select-selector,
//     .modal-form .ant-input-number,
//     .modal-form textarea {
//       border-radius: 8px;
//     }

//     .modal-form .ant-btn-primary {
//       background: #1890ff;
//       border-color: #1890ff;
//       border-radius: 8px;
//       height: 40px;
//       font-weight: 600;
//     }

//     @media (max-width: 768px) {
//       .trip-container {
//         max-width: 100%;
//       }
      
//       .header-content {
//         padding: 12px 16px;
//       }
      
//       .day-tabs-container {
//         padding: 12px 16px;
//       }
      
//       .items-container {
//         padding: 0 16px 16px 16px;
//       }
      
//       .day-header {
//         padding: 16px;
//       }
//     }
//   `;

//   return (
//     <div className="trip-container">
//       <style>{customStyles}</style>
      
//       {/* Header */}
//       <div className="trip-header">
//         <div className="header-content">
//           <div className="header-top">
//             <Button 
//               type="text" 
//               icon={<LeftOutlined />} 
//               style={{ color: '#8c8c8c' }}
//             />
//             <h1 className="header-title">Create New Trip</h1>
//             <Space size={8}>
//               <Button 
//                 className="invite-btn"
//                 icon={<UserAddOutlined />}
//               >
//                 Invite
//               </Button>
            //   <Button 
            //     type="primary" 
            //     className="save-btn"
            //     onClick={handleSaveTrip}
            //   >
            //     Save Trip
            //   </Button>
//             </Space>
//           </div>
          
//           <div>
//             <Title level={3} className="trip-title">
//               {tripData.title}
//               <ShareAltOutlined style={{ fontSize: 16, color: '#8c8c8c' }} />
//             </Title>
//             <div className="trip-details">
//               <span className="trip-detail-item">
//                 <EnvironmentOutlined /> {tripData.location}
//               </span>
//               <span className="trip-detail-item">
//                 <CalendarOutlined /> {tripData.dates}
//               </span>
//               <span className="trip-detail-item">
//                 <TeamOutlined /> {tripData.people}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Day Tabs */}
//       <div className="day-tabs-container">
//         <div className="day-tabs">
//           <Button 
//             type="primary"
//             className="add-day-btn"
//             icon={<PlusOutlined />}
//             onClick={addDay}
//           >
//             Add Day
//           </Button>
//           {Object.keys(tripData.days).map((day, index) => (
//             <Button
//               key={day}
//               className={`day-tab ${expandedDays[day] ? 'active' : ''}`}
//               onClick={() => toggleDay(day)}
//             >
//               Day {String(index + 1).padStart(2, '0')}
//             </Button>
//           ))}
//         </div>
//       </div>

//       {/* Content */}
//       <div className="content-area">
//         {Object.entries(tripData.days).map(([dayKey, dayData]) => (
//           <div key={dayKey} className="day-section">
//             <div
//               className="day-header"
//               onClick={() => toggleDay(dayKey)}
//             >
//               <div className="day-header-left">
//                 <div className="day-number">
//                   {dayKey.slice(-2)}
//                 </div>
//                 <span className="day-title">{dayData.title}</span>
//               </div>
//               <span className={`chevron ${expandedDays[dayKey] ? 'expanded' : ''}`}>
//                 ⌄
//               </span>
//             </div>

//             {expandedDays[dayKey] && (
//               <div>
//                 {dayData.items.length === 0 ? (
//                   <div className="empty-state">
//                     <p>Build your trip by adding items</p>
//                     <p>from your saves</p>
//                     <button 
//                       className="add-items-link"
//                       onClick={() => {
//                         setSelectedDay(dayKey);
//                         setShowAddModal(true);
//                       }}
//                     >
//                       + Add Items
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="items-container">
//                     {dayData.items.map((item, index) => (
//                       <Card key={item.id} className="item-card" bodyStyle={{ padding: 0 }}>
//                         <div className="item-image-container">
//                           <Image
//                             className="item-image"
//                             src={item.image}
//                             alt={item.name}
//                             preview={false}
//                           />
//                           <Button 
//                             className="heart-btn"
//                             icon={<HeartOutlined />}
//                           />
//                           <div className="image-badge">
//                             {index + 1}/{dayData.items.length}
//                           </div>
//                         </div>
                        
//                         <div className="item-card-body">
//                           <div className="item-header">
//                             <Title level={5} className="item-name">{item.name}</Title>
//                             <Dropdown menu={getItemDropdownMenu(dayKey, item)} trigger={['click']}>
//                               <Button 
//                                 type="text" 
//                                 icon={<MoreOutlined />}
//                                 style={{ color: '#8c8c8c' }}
//                               />
//                             </Dropdown>
//                           </div>
                          
//                           {item.rating && (
//                             <div className="item-rating">
//                               <Rate disabled defaultValue={item.rating} style={{ fontSize: 14 }} />
//                               <span className="rating-text">{item.rating}</span>
//                             </div>
//                           )}

//                           <div className="price-section">
//                             <span className="item-price">
//                               ${item.price} {item.priceUnit}
//                             </span>
//                             <Tag 
//                               className="item-type-tag"
//                               color={itemTypes[item.type]?.color}
//                               style={{ 
//                                 backgroundColor: itemTypes[item.type]?.bgColor,
//                                 color: itemTypes[item.type]?.color,
//                                 border: 'none'
//                               }}
//                             >
//                               {itemTypes[item.type]?.icon} {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
//                             </Tag>
//                           </div>

//                           <div className="item-tags">
//                             {item.tags.map((tag, tagIndex) => (
//                               <Tag key={tagIndex} className="item-tag">
//                                 {tag}
//                               </Tag>
//                             ))}
//                           </div>

//                           <div className="overview-section">
//                             <p className="overview-title">Overview</p>
//                             <p className="overview-text">
//                               {item.description}
//                               <a href="#" className="read-more"> Read More</a>
//                             </p>
//                           </div>

//                           <Button 
//                             type="primary"
//                             className="add-items-btn"
//                             icon={<PlusOutlined />}
//                             onClick={() => {
//                               setSelectedDay(dayKey);
//                               setShowAddModal(true);
//                             }}
//                           >
//                             Add Items
//                           </Button>
//                         </div>
//                       </Card>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Bottom Navigation */}
//       <div className="bottom-nav">
//         <div className="nav-container">
//           <button className={`nav-item ${activeTab === 'itinerary' ? 'active' : ''}`}>
//             <div className="nav-icon">📋</div>
//             <span className="nav-label">Tabs</span>
//           </button>
//           <button className="nav-item">
//             <div className="nav-icon">🔍</div>
//             <span className="nav-label">Search</span>
//           </button>
//           <button 
//             className="add-button"
//             onClick={() => setShowAddModal(true)}
//           >
//             +
//           </button>
//           <button className="nav-item">
//             <div className="nav-icon">📁</div>
//             <span className="nav-label">Saves</span>
//           </button>
//           <button className="nav-item">
//             <div className="nav-icon">👤</div>
//             <span className="nav-label">Account</span>
//           </button>
//         </div>
//       </div>

//       {/* Add/Edit Item Modal */}
//       <Modal
//         title={
//           <Title level={4} style={{ margin: 0 }}>
//             {editingItem ? 'Edit Item' : 'Add New Item'}
//           </Title>
//         }
//         open={showAddModal}
//         onCancel={() => {
//           setShowAddModal(false);
//           setEditingItem(null);
//           form.resetFields();
//         }}
//         footer={null}
//         width={600}
//         style={{ top: 20 }}
//       >
//         <div className="modal-form">
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
//             <div style={{ display: 'flex', gap: '16px' }}>
//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Type</label>
//                 <Select 
//                   placeholder="Select item type" 
//                   style={{ width: '100%' }}
//                   defaultValue="hotel"
//                   onChange={(value) => form.setFieldsValue({ type: value })}
//                 >
//                   {Object.entries(itemTypes).map(([key, value]) => (
//                     <Option key={key} value={key}>
//                       {value.icon} {key.charAt(0).toUpperCase() + key.slice(1)}
//                     </Option>
//                   ))}
//                 </Select>
//               </div>
//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Day</label>
//                 <Select 
//                   value={selectedDay} 
//                   onChange={setSelectedDay}
//                   style={{ width: '100%' }}
//                 >
//                   {Object.entries(tripData.days).map(([dayKey, dayData]) => (
//                     <Option key={dayKey} value={dayKey}>
//                       {dayData.title}
//                     </Option>
//                   ))}
//                 </Select>
//               </div>
//             </div>

//             <div>
//               <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Name *</label>
//               <Input 
//                 placeholder="Enter item name" 
//                 onChange={(e) => form.setFieldsValue({ name: e.target.value })}
//               />
//             </div>

//             <div style={{ display: 'flex', gap: '16px' }}>
//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Price</label>
//                 <Input 
//                   placeholder="e.g., 400" 
//                   addonBefore="$" 
//                   onChange={(e) => form.setFieldsValue({ price: e.target.value })}
//                 />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Price Unit</label>
//                 <Input 
//                   placeholder="e.g., per person" 
//                   defaultValue="per person"
//                   onChange={(e) => form.setFieldsValue({ priceUnit: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div style={{ display: 'flex', gap: '16px' }}>
//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Rating</label>
//                 <Rate 
//                   allowHalf 
//                   defaultValue={5}
//                   onChange={(value) => form.setFieldsValue({ rating: value })}
//                 />
//               </div>
//               <div style={{ flex: 1 }}>
//                 <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Location</label>
//                 <Input 
//                   placeholder="Enter location" 
//                   onChange={(e) => form.setFieldsValue({ location: e.target.value })}
//                 />
//               </div>
//             </div>

//             <div>
//               <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Image URL</label>
//               <Input 
//                 placeholder="Enter image URL (optional)" 
//                 onChange={(e) => form.setFieldsValue({ image: e.target.value })}
//               />
//             </div>

//             <div>
//               <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Tags</label>
//               <Select
//                 mode="tags"
//                 placeholder="Add tags (press Enter to add)"
//                 style={{ width: '100%' }}
//                 onChange={(values) => form.setFieldsValue({ tags: values })}
//               />
//             </div>

//             <div>
//               <label style={{ display: 'block', marginBottom: '4px', fontWeight: 600, color: '#262626' }}>Description</label>
//               <TextArea 
//                 rows={4}
//                 placeholder="Enter description"
//                 showCount
//                 maxLength={500}
//                 onChange={(e) => form.setFieldsValue({ description: e.target.value })}
//               />
//             </div>
//           </div>
//           <div style={{ marginTop: 24 }}>
//             <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
//               <Button onClick={() => setShowAddModal(false)}>
//                 Cancel
//               </Button>
//               <Button 
//                 type="primary" 
//                 onClick={() => {
//                   const formData = form.getFieldsValue();
//                   if (formData.name) {
//                     handleAddItem(formData);
//                   } else {
//                     message.error('Please enter item name!');
//                   }
//                 }}
//               >
//                 {editingItem ? 'Update Item' : 'Add Item'}
//               </Button>
//             </Space>
//           </div>
//         </div>
//       </Modal>

//       {/* Move Item Modal */}
//       <Modal
//         title="Move Item"
//         open={showMoveModal}
//         onCancel={() => setShowMoveModal(false)}
//         footer={null}
//       >
//         <p style={{ marginBottom: 16 }}>
//           Move <strong>"{itemToMove?.item?.name}"</strong> to which day?
//         </p>
//         <Space wrap>
//           {Object.entries(tripData.days).map(([dayKey, dayData]) => (
//             <Button
//               key={dayKey}
//               type={dayKey === itemToMove?.fromDay ? "default" : "primary"}
//               onClick={() => confirmMoveItem(dayKey)}
//               disabled={dayKey === itemToMove?.fromDay}
//               style={{ marginBottom: 8 }}
//             >
//               {dayData.title}
//             </Button>
//           ))}
//         </Space>
//       </Modal>
//     </div>
//   );
// };

export default TripPlanningApp;