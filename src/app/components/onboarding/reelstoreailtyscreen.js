import React from 'react';
import { Progress } from 'antd';
// import HichButton from '../common/HichButton';
import HichButton from '../common/hichbutton';
const ReelsToRealityScreen = ({ onNext, progress }) => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)',
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        padding: '16px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Progress 
          percent={progress} 
          showInfo={false} 
          strokeColor="#FA8C16"
          style={{ width: '100%' }}
        />
      </div>
      
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#262626',
          marginBottom: '12px',
          lineHeight: '1.3'
        }}>
          From Reels to Reality
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#595959',
          marginBottom: '32px',
          lineHeight: '1.5'
        }}>
          Watch, swipe, and book the same journeys in one tap.
        </p>
        
        <div style={{ 
          position: 'relative', 
          marginBottom: '40px',
          width: '200px',
          height: '350px'
        }}>
          <div style={{
            width: '200px',
            height: '350px',
            background: '#000',
            borderRadius: '25px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=350&fit=crop"
              alt="Travel destination"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          
          <div style={{
            position: 'absolute',
            right: '-60px',
            top: '80px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div style={{
              background: '#FA8C16',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(250, 140, 22, 0.4)'
            }}>
              🏨 Stays
            </div>
            <div style={{
              background: '#FA8C16',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(250, 140, 22, 0.4)'
            }}>
              🍽️ Food
            </div>
            <div style={{
              background: '#FA8C16',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              boxShadow: '0 4px 12px rgba(250, 140, 22, 0.4)'
            }}>
              🎯 Activities
            </div>
          </div>
        </div>
        
        <HichButton onClick={onNext}>
          Get Started
        </HichButton>
      </div>
    </div>
  );
};

export default ReelsToRealityScreen;