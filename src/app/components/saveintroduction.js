// components/SavesIntroduction.js

import React from 'react';
import { LeftOutlined } from '@ant-design/icons';

const SavesIntroduction = ({ onExploreClick, onBackClick }) => {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f3e8ff 100%)',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      padding: '16px 20px',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,0,0,0.05)'
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
    content: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px 20px',
      textAlign: 'center'
    },
    illustrationContainer: {
      marginBottom: '40px',
      position: 'relative'
    },
    cardStack: {
      position: 'relative',
      width: '280px',
      height: '180px',
      margin: '0 auto'
    },
    card: {
      position: 'absolute',
      width: '220px',
      height: '140px',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      transition: 'all 0.3s ease'
    },
    card1: {
      top: '0px',
      left: '0px',
      transform: 'rotate(-8deg)',
      zIndex: 1
    },
    card2: {
      top: '20px',
      left: '30px',
      transform: 'rotate(5deg)',
      zIndex: 2
    },
    card3: {
      top: '40px',
      left: '60px',
      transform: 'rotate(-2deg)',
      zIndex: 3
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    textContent: {
      maxWidth: '320px',
      marginBottom: '40px'
    },
    mainText: {
      fontSize: '18px',
      color: '#262626',
      lineHeight: '1.6',
      margin: '0',
      fontWeight: '400'
    },
    exploreButton: {
      background: '#fa8c16',
      border: 'none',
      borderRadius: '25px',
      height: '50px',
      padding: '0 32px',
      fontSize: '16px',
      fontWeight: '600',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 16px rgba(250, 140, 22, 0.3)',
      minWidth: '200px'
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
        <h1 style={styles.title}>Saves</h1>
      </div>

      <div style={styles.content}>
        <div style={styles.illustrationContainer}>
          <div style={styles.cardStack}>
            <div style={{...styles.card, ...styles.card1}}>
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&q=80"
                alt="Travel destination"
                style={styles.cardImage}
              />
            </div>
            <div style={{...styles.card, ...styles.card2}}>
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&q=80"
                alt="Luxury hotel"
                style={styles.cardImage}
              />
            </div>
            <div style={{...styles.card, ...styles.card3}}>
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&q=80"
                alt="Beach resort"
                style={styles.cardImage}
              />
            </div>
          </div>
        </div>

        <div style={styles.textContent}>
          <p style={styles.mainText}>
            Get inspired by your favourite creators, love their recommendations and add to your trip
          </p>
        </div>

        <button 
          style={styles.exploreButton}
          onClick={onExploreClick}
          onMouseEnter={(e) => {
            e.target.style.background = '#d46b08';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 24px rgba(250, 140, 22, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#fa8c16';
            e.target.style.transform = 'translateY(0px)';
            e.target.style.boxShadow = '0 4px 16px rgba(250, 140, 22, 0.3)';
          }}
        >
          Explore & Save
        </button>
      </div>
    </div>
  );
};

export default SavesIntroduction;