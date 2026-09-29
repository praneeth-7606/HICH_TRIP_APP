// import React, { useState, useRef, useEffect } from 'react';
// import { HeartOutlined, MessageOutlined, ShareAltOutlined, HeartFilled, MoreOutlined } from '@ant-design/icons';

// const ReelItem = ({ reel, isActive, onVideoLoad }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showPlayButton, setShowPlayButton] = useState(true);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       if (isActive) {
//         videoRef.current.play().catch(() => {
//           // Fallback for autoplay restrictions
//           setShowPlayButton(true);
//         });
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isActive]);

//   const handleVideoClick = () => {
//     if (videoRef.current) {
//       if (videoRef.current.paused) {
//         videoRef.current.play();
//         setShowPlayButton(false);
//       } else {
//         videoRef.current.pause();
//         setShowPlayButton(true);
//       }
//     }
//   };

//   const handleVideoLoad = () => {
//     setShowPlayButton(false);
//     onVideoLoad && onVideoLoad();
//   };

//   return (
//     <div style={{
//       position: 'relative',
//       width: '100%',
//       height: '100vh',
//       background: '#000',
//       overflow: 'hidden'
//     }}>
//       {/* Video */}
//       <video
//         ref={videoRef}
//         style={{
//           width: '100%',
//           height: '100%',
//           objectFit: 'cover'
//         }}
//         loop
//         muted
//         playsInline
//         poster={reel.thumbnail}
//         onLoadedData={handleVideoLoad}
//         onPlay={() => setShowPlayButton(false)}
//         onPause={() => setShowPlayButton(true)}
//         onClick={handleVideoClick}
//       >
//         <source src={reel.videoUrl} type="video/mp4" />
//         {/* Fallback image if video fails */}
//         <div style={{
//           width: '100%',
//           height: '100%',
//           backgroundImage: `url(${reel.thumbnail})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center'
//         }}></div>
//       </video>

//       {/* Play Button Overlay */}
//       {showPlayButton && (
//         <div 
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '80px',
//             height: '80px',
//             borderRadius: '50%',
//             background: 'rgba(255,255,255,0.3)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             cursor: 'pointer',
//             backdropFilter: 'blur(10px)',
//             transition: 'all 0.3s ease'
//           }}
//           onClick={handleVideoClick}
//         >
//           <div style={{
//             width: 0,
//             height: 0,
//             borderLeft: '20px solid white',
//             borderTop: '15px solid transparent',
//             borderBottom: '15px solid transparent',
//             marginLeft: '5px'
//           }}></div>
//         </div>
//       )}

//       {/* Top Header */}
//       <div style={{
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         padding: '60px 20px 20px 20px',
//         background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)',
//         zIndex: 10
//       }}>
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center'
//         }}>
//           <div style={{
//             fontSize: '18px',
//             fontWeight: '600',
//             color: 'white'
//           }}>
//             For You
//           </div>
//           <div style={{
//             fontSize: '16px',
//             color: 'rgba(255,255,255,0.8)'
//           }}>
//             Following
//           </div>
//         </div>
//       </div>

//       {/* Right Side Actions */}
//       <div style={{
//         position: 'absolute',
//         right: '16px',
//         bottom: '120px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '24px',
//         zIndex: 10
//       }}>
//         {/* Creator Avatar */}
//         <div style={{
//           position: 'relative',
//           width: '48px',
//           height: '48px'
//         }}>
//           <img
//             src={reel.creator.avatar}
//             alt={reel.creator.name}
//             style={{
//               width: '100%',
//               height: '100%',
//               borderRadius: '50%',
//               border: '2px solid white',
//               objectFit: 'cover'
//             }}
//           />
//           <div style={{
//             position: 'absolute',
//             bottom: '-6px',
//             left: '50%',
//             transform: 'translateX(-50%)',
//             width: '20px',
//             height: '20px',
//             borderRadius: '50%',
//             background: '#FA8C16',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             border: '2px solid white',
//             fontSize: '12px',
//             color: 'white',
//             fontWeight: '600'
//           }}>
//             +
//           </div>
//         </div>

//         {/* Like Button */}
//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '4px'
//         }}>
//           <button
//             onClick={() => setIsLiked(!isLiked)}
//             style={{
//               background: 'none',
//               border: 'none',
//               color: isLiked ? '#ff1744' : 'white',
//               fontSize: '28px',
//               cursor: 'pointer',
//               transition: 'all 0.3s ease',
//               transform: isLiked ? 'scale(1.2)' : 'scale(1)'
//             }}
//           >
//             {isLiked ? <HeartFilled /> : <HeartOutlined />}
//           </button>
//           <span style={{
//             color: 'white',
//             fontSize: '12px',
//             fontWeight: '600'
//           }}>
//             {reel.likes}
//           </span>
//         </div>

//         {/* Comment Button */}
//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '4px'
//         }}>
//           <button style={{
//             background: 'none',
//             border: 'none',
//             color: 'white',
//             fontSize: '28px',
//             cursor: 'pointer'
//           }}>
//             <MessageOutlined />
//           </button>
//           <span style={{
//             color: 'white',
//             fontSize: '12px',
//             fontWeight: '600'
//           }}>
//             {reel.comments}
//           </span>
//         </div>

//         {/* Share Button */}
//         <div style={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '4px'
//         }}>
//           <button style={{
//             background: 'none',
//             border: 'none',
//             color: 'white',
//             fontSize: '28px',
//             cursor: 'pointer'
//           }}>
//             <ShareAltOutlined />
//           </button>
//           <span style={{
//             color: 'white',
//             fontSize: '12px',
//             fontWeight: '600'
//           }}>
//             {reel.shares}
//           </span>
//         </div>

//         {/* More Button */}
//         <button style={{
//           background: 'none',
//           border: 'none',
//           color: 'white',
//           fontSize: '24px',
//           cursor: 'pointer'
//         }}>
//           <MoreOutlined />
//         </button>
//       </div>

//       {/* Bottom Content */}
//       <div style={{
//         position: 'absolute',
//         bottom: '0',
//         left: '0',
//         right: '80px',
//         padding: '20px',
//         background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
//         zIndex: 10
//       }}>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px',
//           marginBottom: '8px'
//         }}>
//           <span style={{
//             color: 'white',
//             fontSize: '16px',
//             fontWeight: '600'
//           }}>
//             {reel.creator.name}
//           </span>
//           <span style={{
//             background: 'rgba(255,255,255,0.2)',
//             color: 'white',
//             padding: '4px 8px',
//             borderRadius: '4px',
//             fontSize: '12px',
//             fontWeight: '500'
//           }}>
//             Follow
//           </span>
//         </div>

//         <p style={{
//           color: 'white',
//           fontSize: '14px',
//           margin: '0 0 8px 0',
//           lineHeight: '1.4'
//         }}>
//           {reel.description}
//         </p>

//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px'
//         }}>
//           <div style={{
//             width: '12px',
//             height: '12px',
//             borderRadius: '50%',
//             background: '#FA8C16'
//           }}></div>
//           <span style={{
//             color: 'rgba(255,255,255,0.8)',
//             fontSize: '13px'
//           }}>
//             📍 {reel.location}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReelItem;



// reelitem.js
import React, { useState } from 'react';
import { HeartOutlined, HeartFilled, MessageOutlined, ShareAltOutlined } from '@ant-design/icons';

const ReelItem = ({ reel, isActive }) => {
  const [isLiked, setIsLiked] = useState(reel.isLiked);
  const [likesCount, setLikesCount] = useState(reel.likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${reel.video})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'flex-end'
    }}>
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
        zIndex: 1
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        padding: '20px',
        color: 'white',
        width: '100%',
        paddingBottom: '180px'
      }}>
        {/* User Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '12px'
        }}>
          <img
            src={reel.avatar}
            alt={reel.username}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '2px solid white'
            }}
          />
          <div>
            <div style={{
              fontSize: '16px',
              fontWeight: '600'
            }}>
              {reel.username}
            </div>
            <div style={{
              fontSize: '14px',
              opacity: 0.8
            }}>
              📍 {reel.location}
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '8px',
          lineHeight: '1.3'
        }}>
          {reel.title}
        </div>

        <div style={{
          fontSize: '14px',
          opacity: 0.9,
          marginBottom: '16px',
          lineHeight: '1.4'
        }}>
          {reel.description}
        </div>

        {/* Tags */}
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '16px'
        }}>
          {reel.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                padding: '4px 8px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '500'
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right side actions */}
      <div style={{
        position: 'absolute',
        right: '16px',
        bottom: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        zIndex: 2
      }}>
        {/* Like button */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <button
            onClick={handleLike}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '20px',
              color: isLiked ? '#FF4757' : 'white',
              backdropFilter: 'blur(10px)'
            }}
          >
            {isLiked ? <HeartFilled /> : <HeartOutlined />}
          </button>
          <span style={{
            color: 'white',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            {likesCount}
          </span>
        </div>

        {/* Comment button */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <button
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '20px',
              color: 'white',
              backdropFilter: 'blur(10px)'
            }}
          >
            <MessageOutlined />
          </button>
          <span style={{
            color: 'white',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            {reel.comments}
          </span>
        </div>

        {/* Share button */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <button
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '48px',
              height: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '20px',
              color: 'white',
              backdropFilter: 'blur(10px)'
            }}
          >
            <ShareAltOutlined />
          </button>
          <span style={{
            color: 'white',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            {reel.shares}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ReelItem;