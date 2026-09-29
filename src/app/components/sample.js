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
  SwapOutlined,
  CloseOutlined,
  CopyOutlined
} from '@ant-design/icons';

// Import separate components
import SavesIntroduction from '../components/SavesIntroduction';
import SavesBrowse from '../components/SavesBrowse';

const { Title, Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;

// Main Trip Planning App Component
const TripPlanningApp = () => {
  const [currentScreen, setCurrentScreen] = useState('trip-planning'); // 'trip-planning', 'saves-intro', 'saves-browse'
  const [expandedDays, setExpandedDays] = useState({ day01: true });
  const [activeTab, setActiveTab] = useState('itinerary');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState('day01');
  const [editingItem, setEditingItem] = useState(null);
  const [showMoveModal, setShowMoveModal] = useState(false);
  const [itemToMove, setItemToMove] = useState(null);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [form] = Form.useForm();

  const [tripData, setTripData] = useState({
    title: "Weekend in Hawaii",
    location: "Oahu", 
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
    return `${window.location.origin}/trip/${tripId}`;
  };

  const handleCopyLink = () => {
    const tripLink = generateTripLink();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(tripLink).then(() => {
        message.success('Trip link copied to clipboard!');
      }).catch(() => {
        const textArea = document.createElement('textarea');
        textArea.value = tripLink;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        message.success('Trip link copied to clipboard!');
      });
    } else {
      message.error('Copy functionality not supported in this browser');
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
    
    window.open(`mailto:?subject=${subject}&body=${body}`);
    message.success('Invite ready to send!');
    setShowInviteModal(false);
  };

  // Navigation handlers
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
    
    // Add to expanded days
    setExpandedDays(prev => ({
      ...prev,
      [newDayKey]: true
    }));
    
    message.success('New day added successfully!');
  };

  // Enhanced delete day functionality - immediate deletion
  const handleDeleteDay = (dayKey) => {
    const dayCount = Object.keys(tripData.days).length;
    
    if (dayCount <= 1) {
      message.warning('You must have at least one day in your trip!');
      return;
    }

    // Get current days before deletion
    const currentDays = Object.keys(tripData.days);
    const dayIndex = currentDays.indexOf(dayKey);
    
    // Delete the day and reorder immediately
    setTripData(prev => {
      const newDays = { ...prev.days };
      delete newDays[dayKey];
      
      // Reorder remaining days
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
    
    // Update expanded days state
    setExpandedDays(prev => {
      const newExpanded = {};
      
      // Create new expanded state for reordered days
      currentDays.forEach((day, index) => {
        if (day !== dayKey) {
          const newIndex = index > dayIndex ? index - 1 : index;
          const newKey = `day${String(newIndex + 1).padStart(2, '0')}`;
          newExpanded[newKey] = prev[day] || false;
        }
      });
      
      // Ensure at least one day is expanded
      const expandedKeys = Object.keys(newExpanded);
      if (expandedKeys.length > 0 && !Object.values(newExpanded).some(Boolean)) {
        newExpanded[expandedKeys[0]] = true;
      }
      
      return newExpanded;
    });
    
    // Update selectedDay if it was deleted
    if (selectedDay === dayKey) {
      setSelectedDay('day01'); // Always reset to first day
    }
    
    message.success('Day deleted successfully!');
  };

  // Enhanced add item functionality
  const handleAddItem = (values) => {
    const itemId = editingItem ? editingItem.item.id : Date.now();
    const itemWithId = { 
      ...values, 
      id: itemId, 
      tags: values.tags || [],
      image: values.image || `https://images.unsplash.com/photo-${values.type === 'hotel' ? '1571896349842-33c89424de2d' : values.type === 'restaurant' ? '1414235077428-338989a2e8c0' : '1544551763-46a013bb70d5'}?w=400&h=200&fit=crop`
    };
    
    if (editingItem) {
      // Update existing item
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
      // Add new item to selected day
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

    form.resetFields();
    setShowAddModal(false);
    setEditingItem(null);
    message.success(editingItem ? 'Item updated successfully!' : 'Item added successfully!');
  };

  const handleEditItem = (dayKey, item) => {
    setEditingItem({ dayKey, item });
    setSelectedDay(dayKey);
    form.setFieldsValue({
      ...item,
      tags: item.tags || [],
      selectedDay: dayKey
    });
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

  // Render based on current screen
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

  // Trip Planning Screen (default)
  const customStyles = `
    .trip-container {
      max-width: 800px;
      margin: 0 auto;
      background: #f8f9fa;
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .trip-header {
      background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
      border-bottom: 1px solid #e8e8e8;
      position: sticky;
      top: 0;
      z-index: 100;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    }

    .header-content {
      padding: 16px 20px;
    }

    .header-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    .header-title {
      font-size: 18px;
      font-weight: 600;
      color: #262626;
      margin: 0;
    }

    .invite-btn {
      border-radius: 20px !important;
      height: 32px !important;
      padding: 0 16px !important;
      font-size: 12px !important;
      border-color: #d9d9d9 !important;
    }

    .save-btn {
      border-radius: 20px !important;
      height: 32px !important;
      padding: 0 16px !important;
      font-size: 12px !important;
      background: #fa8c16 !important;
      border-color: #fa8c16 !important;
      box-shadow: 0 2px 4px rgba(250, 140, 22, 0.3) !important;
    }

    .save-btn:hover {
      background: #d46b08 !important;
      border-color: #d46b08 !important;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(250, 140, 22, 0.4) !important;
    }

    .trip-title {
      font-size: 24px;
      font-weight: 700;
      color: #262626;
      margin: 0 0 8px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .trip-details {
      display: flex;
      align-items: center;
      gap: 16px;
      color: #8c8c8c;
      font-size: 13px;
    }

    .trip-detail-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .day-tabs-container {
      background: #fff;
      border-bottom: 1px solid #e8e8e8;
      padding: 12px 20px;
    }

    .day-tabs {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding: 4px 0;
    }

    .add-day-btn {
      border-radius: 20px !important;
      height: 32px !important;
      padding: 0 16px !important;
      font-size: 12px !important;
      background: #fa8c16 !important;
      border-color: #fa8c16 !important;
      white-space: nowrap;
      flex-shrink: 0;
      box-shadow: 0 2px 4px rgba(250, 140, 22, 0.3) !important;
    }

    .add-day-btn:hover {
      background: #d46b08 !important;
      border-color: #d46b08 !important;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(250, 140, 22, 0.4) !important;
    }

    .day-tab {
      border-radius: 20px !important;
      height: 32px !important;
      padding: 0 16px !important;
      font-size: 12px !important;
      white-space: nowrap;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    .day-tab.active {
      background: #1890ff !important;
      border-color: #1890ff !important;
      color: white !important;
      box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3) !important;
    }

    .content-area {
      background: #f8f9fa;
      min-height: calc(100vh - 200px);
      padding-bottom: 100px;
    }

    .day-section {
      background: #fff;
      border-bottom: 1px solid #f0f0f0;
      transition: all 0.3s ease;
    }

    .day-header {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.3s ease;
    }

    .day-header:hover {
      background: #fafafa;
    }

    .day-header-left {
      display: flex;
      align-items: center;
      gap: 16px;
      cursor: pointer;
      flex: 1;
    }

    .day-header-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .day-number {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #1890ff 0%, #40a9ff 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 14px;
      font-weight: 600;
      box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
    }

    .day-title {
      font-size: 16px;
      font-weight: 600;
      color: #262626;
    }

    .day-delete-btn {
      background: rgba(255, 77, 79, 0.1) !important;
      border: 1px solid rgba(255, 77, 79, 0.2) !important;
      color: #ff4d4f !important;
      border-radius: 50% !important;
      width: 32px !important;
      height: 32px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      transition: all 0.3s ease !important;
      cursor: pointer !important;
      font-size: 14px !important;
    }

    .day-delete-btn:hover {
      background: #ff4d4f !important;
      border-color: #ff4d4f !important;
      color: white !important;
      transform: scale(1.1) !important;
      box-shadow: 0 4px 12px rgba(255, 77, 79, 0.4) !important;
    }

    .day-delete-btn:active {
      transform: scale(0.95) !important;
    }

    .chevron {
      font-size: 16px;
      color: #8c8c8c;
      transition: transform 0.3s ease;
      cursor: pointer;
    }

    .chevron.expanded {
      transform: rotate(180deg);
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: #8c8c8c;
    }

    .empty-state p {
      margin: 0 0 8px 0;
      font-size: 15px;
    }

    .add-items-link {
      color: #1890ff !important;
      font-weight: 500;
      text-decoration: none;
      border: none;
      background: none;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .add-items-link:hover {
      color: #40a9ff !important;
      transform: translateY(-1px);
    }

    .items-container {
      padding: 0 20px 20px 20px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .item-card {
      border-radius: 12px !important;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
      border: 1px solid #f0f0f0 !important;
      transition: all 0.3s ease;
    }

    .item-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
    }

    .item-image-container {
      position: relative;
      overflow: hidden;
    }

    .item-image {
      width: 100%;
      height: 160px;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .item-card:hover .item-image {
      transform: scale(1.05);
    }

    .heart-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(255,255,255,0.9) !important;
      border: none !important;
      border-radius: 50% !important;
      width: 32px !important;
      height: 32px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .heart-btn:hover {
      background: #ff4d4f !important;
      color: white !important;
      transform: scale(1.1);
    }

    .image-badge {
      position: absolute;
      bottom: 12px;
      right: 12px;
      background: rgba(0,0,0,0.7);
      color: white;
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 11px;
      backdrop-filter: blur(10px);
    }

    .item-card-body {
      padding: 16px !important;
    }

    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }

    .item-name {
      font-size: 16px;
      font-weight: 600;
      color: #262626;
      margin: 0;
      line-height: 1.4;
    }

    .item-rating {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
    }

    .rating-text {
      color: #8c8c8c;
      font-size: 13px;
      font-weight: 500;
    }

    .price-section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .item-price {
      color: #fa8c16;
      font-size: 16px;
      font-weight: 700;
    }

    .item-type-tag {
      border-radius: 16px !important;
      font-size: 11px !important;
      padding: 4px 12px !important;
      font-weight: 500 !important;
      border: none !important;
    }

    .item-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 12px;
    }

    .item-tag {
      background: #f5f5f5 !important;
      color: #595959 !important;
      border: none !important;
      border-radius: 12px !important;
      font-size: 11px !important;
      padding: 2px 8px !important;
    }

    .overview-section {
      margin-bottom: 16px;
    }

    .overview-title {
      font-size: 13px;
      font-weight: 600;
      color: #262626;
      margin: 0 0 6px 0;
    }

    .overview-text {
      font-size: 12px;
      color: #8c8c8c;
      line-height: 1.5;
      margin: 0;
    }

    .read-more {
      color: #1890ff;
      text-decoration: none;
      font-weight: 500;
    }

    .add-items-btn {
      width: 100%;
      border-radius: 8px !important;
      height: 36px !important;
      font-size: 13px !important;
      font-weight: 600 !important;
      background: #1890ff !important;
      border-color: #1890ff !important;
      box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3) !important;
    }

    .add-items-btn:hover {
      background: #40a9ff !important;
      border-color: #40a9ff !important;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4) !important;
    }

    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 800px;
      background: rgba(255,255,255,0.95);
      backdrop-filter: blur(20px);
      border-top: 1px solid #f0f0f0;
      padding: 12px 0;
      z-index: 1000;
    }

    .nav-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0 20px;
    }

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px;
      border: none;
      background: none;
      color: #8c8c8c;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 12px;
    }

    .nav-item.active {
      color: #fa8c16;
    }

    .nav-item:hover {
      color: #fa8c16;
      background: rgba(250, 140, 22, 0.08);
    }

    .nav-icon {
      font-size: 18px;
      margin-bottom: 4px;
    }

    .nav-label {
      font-size: 11px;
      font-weight: 500;
    }

    .add-button {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #fa8c16 0%, #d46b08 100%);
      border: none;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(250, 140, 22, 0.4);
    }

    .add-button:hover {
      transform: translateY(-2px) scale(1.05);
      box-shadow: 0 8px 20px rgba(250, 140, 22, 0.5);
    }

    .modal-form .ant-form-item-label > label {
      font-weight: 600;
      color: #262626;
    }

    .modal-form .ant-input,
    .modal-form .ant-select-selector,
    .modal-form .ant-input-number,
    .modal-form textarea {
      border-radius: 8px;
    }

    .modal-form .ant-btn-primary {
      background: #1890ff;
      border-color: #1890ff;
      border-radius: 8px;
      height: 40px;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .trip-container {
        max-width: 100%;
      }
      
      .header-content {
        padding: 12px 16px;
      }
      
      .day-tabs-container {
        padding: 12px 16px;
      }
      
      .items-container {
        padding: 0 16px 16px 16px;
      }
      
      .day-header {
        padding: 16px;
      }
    }
  `;

  return (
    <div className="trip-container">
      <style>{customStyles}</style>
      
      {/* Header */}
      <div className="trip-header">
        <div className="header-content">
          <div className="header-top">
            <Button 
              type="text" 
              icon={<LeftOutlined />} 
              style={{ color: '#8c8c8c' }}
            />
            <h1 className="header-title">Create New Trip</h1>
            <Space size={8}>
              <Button 
                className="invite-btn"
                icon={<UserAddOutlined />}
                onClick={() => setShowInviteModal(true)}
              >
                Invite
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
            <Title level={3} className="trip-title">
              {tripData.title}
              <ShareAltOutlined style={{ fontSize: 16, color: '#8c8c8c' }} />
            </Title>
            <div className="trip-details">
              <span className="trip-detail-item">
                <EnvironmentOutlined /> {tripData.location}
              </span>
              <span className="trip-detail-item">
                <CalendarOutlined /> {tripData.dates}
              </span>
              <span className="trip-detail-item">
                <TeamOutlined /> {tripData.people}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Day Tabs */}
      <div className="day-tabs-container">
        <div className="day-tabs">
          <Button 
            type="primary"
            className="add-day-btn"
            icon={<PlusOutlined />}
            onClick={addDay}
          >
            Add Day
          </Button>
          {Object.keys(tripData.days).map((day, index) => (
            <Button
              key={day}
              className={`day-tab ${expandedDays[day] ? 'active' : ''}`}
              onClick={() => toggleDay(day)}
            >
              Day {String(index + 1).padStart(2, '0')}
            </Button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="content-area">
        {Object.entries(tripData.days).map(([dayKey, dayData]) => (
          <div key={dayKey} className="day-section">
            <div className="day-header">
              <div 
                className="day-header-left"
                onClick={() => toggleDay(dayKey)}
              >
                <div className="day-number">
                  {dayKey.slice(-2)}
                </div>
                <span className="day-title">{dayData.title}</span>
              </div>
              <div className="day-header-right">
                <Button 
                  className="day-delete-btn"
                  icon={<DeleteOutlined />}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteDay(dayKey);
                  }}
                  title={Object.keys(tripData.days).length <= 1 ? "Cannot delete the last day" : "Delete this day"}
                  disabled={Object.keys(tripData.days).length <= 1}
                  style={{
                    opacity: Object.keys(tripData.days).length <= 1 ? 0.5 : 1,
                    cursor: Object.keys(tripData.days).length <= 1 ? 'not-allowed' : 'pointer'
                  }}
                />
                <span 
                  className={`chevron ${expandedDays[dayKey] ? 'expanded' : ''}`}
                  onClick={() => toggleDay(dayKey)}
                >
                  ⌄
                </span>
              </div>
            </div>

            {expandedDays[dayKey] && (
              <div>
                {dayData.items.length === 0 ? (
                  <div className="empty-state">
                    <p>Build your trip by adding items</p>
                    <p>from your saves</p>
                    <button 
                      className="add-items-link"
                      onClick={() => {
                        setSelectedDay(dayKey);
                        setShowAddModal(true);
                      }}
                    >
                      + Add Items
                    </button>
                  </div>
                ) : (
                  <div className="items-container">
                    {dayData.items.map((item, index) => (
                      <Card key={item.id} className="item-card" styles={{ body: { padding: 0 } }}>
                        <div className="item-image-container">
                          <Image
                            className="item-image"
                            src={item.image}
                            alt={item.name}
                            preview={false}
                          />
                          <Button 
                            className="heart-btn"
                            icon={<HeartOutlined />}
                          />
                          <div className="image-badge">
                            {index + 1}/{dayData.items.length}
                          </div>
                        </div>
                        
                        <div className="item-card-body">
                          <div className="item-header">
                            <Title level={5} className="item-name">{item.name}</Title>
                            <Dropdown menu={getItemDropdownMenu(dayKey, item)} trigger={['click']}>
                              <Button 
                                type="text" 
                                icon={<MoreOutlined />}
                                style={{ color: '#8c8c8c' }}
                              />
                            </Dropdown>
                          </div>
                          
                          {item.rating && (
                            <div className="item-rating">
                              <Rate disabled defaultValue={item.rating} style={{ fontSize: 14 }} />
                              <span className="rating-text">{item.rating}</span>
                            </div>
                          )}

                          <div className="price-section">
                            <span className="item-price">
                              ${item.price} {item.priceUnit}
                            </span>
                            <Tag 
                              className="item-type-tag"
                              color={itemTypes[item.type]?.color}
                              style={{ 
                                backgroundColor: itemTypes[item.type]?.bgColor,
                                color: itemTypes[item.type]?.color,
                                border: 'none'
                              }}
                            >
                              {itemTypes[item.type]?.icon} {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </Tag>
                          </div>

                          <div className="item-tags">
                            {item.tags.map((tag, tagIndex) => (
                              <Tag key={tagIndex} className="item-tag">
                                {tag}
                              </Tag>
                            ))}
                          </div>

                          <div className="overview-section">
                            <p className="overview-title">Overview</p>
                            <p className="overview-text">
                              {item.description}
                              <a href="#" className="read-more"> Read More</a>
                            </p>
                          </div>

                          <Button 
                            type="primary"
                            className="add-items-btn"
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
      <div className="bottom-nav">
        <div className="nav-container">
          <button className={`nav-item ${activeTab === 'itinerary' ? 'active' : ''}`}>
            <div className="nav-icon">📋</div>
            <span className="nav-label">Tabs</span>
          </button>
          <button className="nav-item">
            <div className="nav-icon">🔍</div>
            <span className="nav-label">Search</span>
          </button>
          <button 
            className="add-button"
            onClick={() => setShowAddModal(true)}
          >
            +
          </button>
          <button 
            className="nav-item"
            onClick={() => setCurrentScreen('saves-intro')}
          >
            <div className="nav-icon">📁</div>
            <span className="nav-label">Saves</span>
          </button>
          <button className="nav-item">
            <div className="nav-icon">👤</div>
            <span className="nav-label">Account</span>
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
          form.resetFields();
        }}
        footer={null}
        width={600}
        style={{ top: 20 }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddItem}
          className="modal-form"
          initialValues={{
            type: 'hotel',
            priceUnit: 'per person',
            rating: 5,
            selectedDay: selectedDay
          }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Type"
                name="type"
                rules={[{ required: true, message: 'Please select item type!' }]}
              >
                <Select placeholder="Select item type">
                  {Object.entries(itemTypes).map(([key, value]) => (
                    <Option key={key} value={key}>
                      {value.icon} {key.charAt(0).toUpperCase() + key.slice(1)}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Day"
                name="selectedDay"
              >
                <Select value={selectedDay} onChange={setSelectedDay}>
                  {Object.entries(tripData.days).map(([dayKey, dayData]) => (
                    <Option key={dayKey} value={dayKey}>
                      {dayData.title}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter item name!' }]}
          >
            <Input placeholder="Enter item name" />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Price" name="price">
                <Input placeholder="e.g., 400" addonBefore="$" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Price Unit" name="priceUnit">
                <Input placeholder="e.g., per person" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Rating" name="rating">
                <Rate allowHalf />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Location" name="location">
                <Input placeholder="Enter location" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Image URL" name="image">
            <Input placeholder="Enter image URL (optional)" />
          </Form.Item>

          <Form.Item label="Tags" name="tags">
            <Select
              mode="tags"
              placeholder="Add tags (press Enter to add)"
              style={{ width: '100%' }}
            />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea 
              rows={4}
              placeholder="Enter description"
              showCount
              maxLength={500}
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, marginTop: 24 }}>
            <Space style={{ width: '100%', justifyContent: 'flex-end' }}>
              <Button onClick={() => setShowAddModal(false)}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                {editingItem ? 'Update Item' : 'Add Item'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
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

export default TripPlanningApp;