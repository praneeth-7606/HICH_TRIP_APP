// // pages/index.js
// import { useState } from 'react';
// import { Container, Row, Col, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
// import { SearchOutlined, HeartOutlined, ShareAltOutlined, StarFilled, UserOutlined, CalendarOutlined, DollarCircleOutlined } from '@ant-design/icons';
// import { Avatar, Tag, Rate, Badge } from 'antd';
// import Head from 'next/head';
// import styles from '../styles/Home.module.css';

// export default function Home() {
//   const [searchQuery, setSearchQuery] = useState('');

//   // Sample data
//   const popularCreators = [
//     { id: 1, name: 'Emma Travel', username: '@travelwithemma', avatar: '/api/placeholder/60/60', followers: '12K', isVerified: true },
//     { id: 2, name: 'Riya Adventures', username: '@travelwithriya', avatar: '/api/placeholder/60/60', followers: '8.5K', isVerified: true },
//     { id: 3, name: 'Wanderlust Jay', username: '@jaywanderlust', avatar: '/api/placeholder/60/60', followers: '15K', isVerified: false },
//     { id: 4, name: 'Solo Traveler', username: '@solotraveler', avatar: '/api/placeholder/60/60', followers: '9.2K', isVerified: true },
//   ];

//   const trendingTrips = [
//     { id: 1, title: 'Goa Beach Vibes', image: '/api/placeholder/300/180', creator: 'Emma Travel', days: 3, budget: '₹8,000', rating: 4.8, saves: 245 },
//     { id: 2, title: 'Himachal Adventure', image: '/api/placeholder/300/180', creator: 'Riya Adventures', days: 5, budget: '₹15,000', rating: 4.9, saves: 189 },
//   ];

//   const trendingExperiences = [
//     { id: 1, title: 'Beach Sunset Cafe', image: '/api/placeholder/300/180', location: 'Goa', price: '₹600', rating: 4.7, category: 'Food & Cafe' },
//     { id: 2, title: 'Mountain Trekking', image: '/api/placeholder/300/180', location: 'Himachal', price: '₹1,200', rating: 4.8, category: 'Adventure' },
//   ];

//   const categories = [
//     { id: 1, name: 'Stay', icon: '🏨', color: '#FF6B6B' },
//     { id: 2, name: 'Food', icon: '🍽️', color: '#4ECDC4' },
//     { id: 3, name: 'Activities', icon: '🎯', color: '#45B7D1' },
//     { id: 4, name: 'Culture', icon: '🏛️', color: '#96CEB4' },
//     { id: 5, name: 'Adventure', icon: '🏔️', color: '#FFEAA7' },
//     { id: 6, name: 'Wellness', icon: '🧘‍♀️', color: '#DDA0DD' },
//   ];

//   const popularDestinations = [
//     { id: 1, name: 'Goa', image: '/api/placeholder/200/150', trips: 234, avgBudget: '₹8K' },
//     { id: 2, name: 'Kerala', image: '/api/placeholder/200/150', trips: 156, avgBudget: '₹12K' },
//     { id: 3, name: 'Rajasthan', image: '/api/placeholder/200/150', trips: 189, avgBudget: '₹15K' },
//     { id: 4, name: 'Himachal', image: '/api/placeholder/200/150', trips: 167, avgBudget: '₹10K' },
//     { id: 5, name: 'Karnataka', image: '/api/placeholder/200/150', trips: 134, avgBudget: '₹9K' },
//     { id: 6, name: 'Maharashtra', image: '/api/placeholder/200/150', trips: 98, avgBudget: '₹11K' },
//   ];

//   const quickTours = [
//     { id: 1, title: 'Weekend Getaway Package', image: '/api/placeholder/300/200', duration: '2 Days', price: '₹5,999', discount: '20% OFF' },
//     { id: 2, title: 'Cultural Heritage Tour', image: '/api/placeholder/300/200', duration: '4 Days', price: '₹12,999', discount: '15% OFF' },
//   ];

//   return (
//     <>
//       <Head>
//         <title>Hich Trip - Discover Amazing Travel Experiences</title>
//         <meta name="description" content="Plan your perfect trip with curated experiences from top travel creators" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className={styles.homeContainer}>
//         {/* Header */}
//         <div className={styles.header}>
//           <Container>
//             <Row className="align-items-center py-3">
//               <Col xs={6}>
//                 <div className={styles.logo}>
//                   <h2 className="mb-0 fw-bold">Hich Trip</h2>
//                   <small className="text-muted">Discover. Plan. Travel.</small>
//                 </div>
//               </Col>
//               <Col xs={6} className="text-end">
//                 <Button variant="outline-primary" size="sm" className="me-2">
//                   <UserOutlined /> Profile
//                 </Button>
//                 <Button variant="primary" size="sm">
//                   Create Trip
//                 </Button>
//               </Col>
//             </Row>
//           </Container>
//         </div>

//         {/* Search Bar */}
//         <Container className="mb-4">
//           <InputGroup size="lg" className={styles.searchBar}>
//             <FormControl
//               placeholder="Search destinations, creators, experiences..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className={styles.searchInput}
//             />
//             <Button variant="primary" className={styles.searchButton}>
//               <SearchOutlined />
//             </Button>
//           </InputGroup>
//         </Container>

//         {/* Popular Creators */}
//         <Container className="mb-5">
//           <Row className="mb-3">
//             <Col>
//               <h4 className="fw-bold mb-3">Popular Creators</h4>
//             </Col>
//           </Row>
//           <Row>
//             {popularCreators.map((creator) => (
//               <Col xs={6} md={3} key={creator.id} className="mb-3">
//                 <Card className={styles.creatorCard}>
//                   <Card.Body className="text-center p-3">
//                     <div className="position-relative mb-2">
//                       <Avatar size={60} src={creator.avatar} className="mb-2" />
//                       {creator.isVerified && (
//                         <Badge 
//                           count="✓" 
//                           style={{ backgroundColor: '#1890ff' }}
//                           className="position-absolute top-0 end-0"
//                         />
//                       )}
//                     </div>
//                     <h6 className="mb-1">{creator.name}</h6>
//                     <small className="text-muted d-block mb-1">{creator.username}</small>
//                     <small className="text-primary fw-bold">{creator.followers} followers</small>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>

//         {/* Trending Trips */}
//         <Container className="mb-5">
//           <Row className="mb-3">
//             <Col>
//               <h4 className="fw-bold mb-3">Trending Trips</h4>
//             </Col>
//           </Row>
//           <Row>
//             {trendingTrips.map((trip) => (
//               <Col xs={12} md={6} key={trip.id} className="mb-3">
//                 <Card className={styles.tripCard}>
//                   <Card.Img variant="top" src={trip.image} className={styles.cardImage} />
//                   <Card.Body>
//                     <div className="d-flex justify-content-between align-items-start mb-2">
//                       <h5 className="card-title mb-0">{trip.title}</h5>
//                       <Button variant="link" size="sm" className="p-0 text-danger">
//                         <HeartOutlined />
//                       </Button>
//                     </div>
//                     <p className="text-muted mb-2">by {trip.creator}</p>
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <div className="d-flex align-items-center">
//                         <CalendarOutlined className="me-1" />
//                         <small>{trip.days} days</small>
//                       </div>
//                       <div className="d-flex align-items-center">
//                         <DollarCircleOutlined className="me-1" />
//                         <small>{trip.budget}</small>
//                       </div>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="d-flex align-items-center">
//                         <Rate disabled defaultValue={trip.rating} size="small" />
//                         <small className="ms-1 text-muted">{trip.rating}</small>
//                       </div>
//                       <small className="text-muted">{trip.saves} saves</small>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>

//         {/* Trending Experiences */}
//         <Container className="mb-5">
//           <Row className="mb-3">
//             <Col>
//               <h4 className="fw-bold mb-3">Trending Experiences</h4>
//             </Col>
//           </Row>
//           <Row>
//             {trendingExperiences.map((experience) => (
//               <Col xs={12} md={6} key={experience.id} className="mb-3">
//                 <Card className={styles.experienceCard}>
//                   <Card.Img variant="top" src={experience.image} className={styles.cardImage} />
//                   <Card.Body>
//                     <div className="d-flex justify-content-between align-items-start mb-2">
//                       <h5 className="card-title mb-0">{experience.title}</h5>
//                       <Button variant="link" size="sm" className="p-0 text-danger">
//                         <HeartOutlined />
//                       </Button>
//                     </div>
//                     <p className="text-muted mb-2">{experience.location}</p>
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <Tag color="blue">{experience.category}</Tag>
//                       <span className="fw-bold text-primary">{experience.price}</span>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div className="d-flex align-items-center">
//                         <Rate disabled defaultValue={experience.rating} size="small" />
//                         <small className="ms-1 text-muted">{experience.rating}</small>
//                       </div>
//                       <div>
//                         <Button variant="outline-primary" size="sm" className="me-2">
//                           Add to Trip
//                         </Button>
//                         <Button variant="primary" size="sm">
//                           Book Now
//                         </Button>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>

//         {/* Explore by Categories */}
//         <Container className="mb-5">
//           <Row className="mb-3">
//             <Col>
//               <h4 className="fw-bold mb-3">Explore by Categories</h4>
//             </Col>
//           </Row>
//           <Row>
//             {categories.map((category) => (
//               <Col xs={4} md={2} key={category.id} className="mb-3">
//                 <Card className={styles.categoryCard} style={{ borderColor: category.color }}>
//                   <Card.Body className="text-center p-3">
//                     <div className="fs-2 mb-2">{category.icon}</div>
//                     <h6 className="mb-0" style={{ color: category.color }}>{category.name}</h6>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>

//         {/* Popular Destinations */}
//         <Container className="mb-5">
//           <Row className="mb-3">
//             <Col>
//               <h4 className="fw-bold mb-3">Popular Destinations</h4>
//             </Col>
//           </Row>
//           <Row>
//             {popularDestinations.map((destination) => (
//               <Col xs={6} md={4} key={destination.id} className="mb-3">
//                 <Card className={styles.destinationCard}>
//                   <Card.Img variant="top" src={destination.image} className={styles.cardImage} />
//                   <Card.Body className="p-3">
//                     <h5 className="card-title mb-1">{destination.name}</h5>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <small className="text-muted">{destination.trips} trips</small>
//                       <small className="text-primary fw-bold">{destination.avgBudget}</small>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>

//         {/* Quick Tours */}
//         <Container className="mb-5">
//           <Row className="mb-3">
//             <Col>
//               <h4 className="fw-bold mb-3">Quick Tours</h4>
//             </Col>
//           </Row>
//           <Row>
//             {quickTours.map((tour) => (
//               <Col xs={12} md={6} key={tour.id} className="mb-3">
//                 <Card className={styles.tourCard}>
//                   <Card.Img variant="top" src={tour.image} className={styles.cardImage} />
//                   <Card.Body>
//                     <div className="d-flex justify-content-between align-items-start mb-2">
//                       <h5 className="card-title mb-0">{tour.title}</h5>
//                       <Tag color="red">{tour.discount}</Tag>
//                     </div>
//                     <div className="d-flex justify-content-between align-items-center">
//                       <div>
//                         <p className="text-muted mb-1">{tour.duration}</p>
//                         <h5 className="text-primary mb-0">{tour.price}</h5>
//                       </div>
//                       <div>
//                         <Button variant="outline-primary" size="sm" className="me-2">
//                           <ShareAltOutlined />
//                         </Button>
//                         <Button variant="primary" size="sm">
//                           Book Now
//                         </Button>
//                       </div>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// }
// pages/index.js - Home Page


// "use client"
// import React, { useState } from 'react';
// import { Input, Card, Rate, Button, Avatar, Tag } from 'antd';
// // import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';

// import { SearchOutlined, HeartOutlined, HeartFilled, SoundOutlined, PlusOutlined } from '@ant-design/icons';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const HomePage = () => {
//   const [savedItems, setSavedItems] = useState(new Set());
//   const router = useRouter()
  
//   const handleSearchClick = () => {
//     router.push('/search')
//   }

//   const toggleSave = (id) => {
//     const newSaved = new Set(savedItems);
//     if (newSaved.has(id)) {
//       newSaved.delete(id);
//     } else {
//       newSaved.add(id);
//     }
//     setSavedItems(newSaved);
//   };

//   const destinations = [
//     { id: 1, name: 'Bali', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop' },
//     { id: 2, name: 'Dubai', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop' },
//     { id: 3, name: 'Goa', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=300&h=200&fit=crop' },
//     { id: 4, name: 'Paris', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=200&fit=crop' },
//     { id: 5, name: 'Miami', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop' },
//     { id: 6, name: 'Himachal', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=300&h=200&fit=crop' }
//   ];

//   const categories = [
//     { id: 1, name: 'Stays', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop' },
//     { id: 2, name: 'Food', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop' },
//     { id: 3, name: 'Wellness', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=200&fit=crop' },
//     { id: 4, name: 'Local', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=300&h=200&fit=crop' },
//     { id: 5, name: 'Activities', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=300&h=200&fit=crop' },
//     { id: 6, name: 'Culture', clips: '10K+ clips', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop' }
//   ];

//   const creators = [
//     { id: 1, username: '@travelwithemma', experiences: '200+ experiences', rating: 4.9, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b131?w=100&h=100&fit=crop&crop=face' },
//     { id: 2, username: '@travelwithriya', experiences: '200+ experiences', rating: 4.9, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face' },
//     { id: 3, username: '@travelwit...', experiences: '200+ experiences', rating: 4.9, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' }
//   ];

//   return (
//     <div style={{ backgroundColor: '#FDF2E9', minHeight: '100vh' }}>
//       {/* Header */}
//       <div className="container-fluid px-3 py-3">
//         <div className="row align-items-center mb-3">
//           <div className="col-10">
//             <Input
//       placeholder="Search for a 'Travel Creator' or 'Destination'"
//       prefix={<SearchOutlined style={{ color: '#999' }} />}
//       onFocus={handleSearchClick}
//       style={{
//         borderRadius: '25px',
//         border: '2px solid #FF8A65',
//         backgroundColor: 'white',
//         height: '45px',
//         cursor: 'pointer'
//       }}
//       readOnly
//     />
//           </div>
//           <div className="col-2 text-end">
//             <Avatar 
//               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
//               size={40}
//             />
//           </div>
//         </div>

//         {/* Scroll.Save.Book Section */}
//         <Card
//           style={{
//             borderRadius: '20px',
//             border: 'none',
//             background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
//             marginBottom: '20px'
//           }}
//           bodyStyle={{ padding: '20px' }}
//         >
//           <div className="row align-items-center">
//             <div className="col-8">
//               <h5 style={{ fontWeight: 'bold', marginBottom: '8px' }}>Scroll.Save.Book</h5>
//               <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
//                 Get inspired by creators. Save links. Build your itinerary
//               </p>
//               <Button
//                 style={{
//                   backgroundColor: 'white',
//                   border: 'none',
//                   borderRadius: '20px',
//                   fontWeight: '500'
//                 }}
//               >
//                 Explore now
//               </Button>
//             </div>
//             <div className="col-4 text-end">
//               <img 
//                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
//                 alt="Creator"
//                 style={{ width: '80px', height: '80px', borderRadius: '50%' }}
//               />
//               <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
//                 <HeartFilled style={{ color: '#FF5722', fontSize: '16px', marginRight: '5px' }} />
//                 <HeartFilled style={{ color: '#FF5722', fontSize: '12px', marginRight: '3px' }} />
//                 <HeartFilled style={{ color: '#FF5722', fontSize: '8px' }} />
//               </div>
//             </div>
//           </div>
//         </Card>

//         {/* Picked for You Section */}
//         <div className="mb-4">
//           <h5 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Picked for you</h5>
//           <Card
//             style={{
//               borderRadius: '15px',
//               overflow: 'hidden',
//               border: 'none',
//               position: 'relative'
//             }}
//             bodyStyle={{ padding: '0' }}
//           >
//             <div style={{ position: 'relative' }}>
//               <img
//                 src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop"
//                 alt="Greek Island"
//                 style={{ width: '100%', height: '250px', objectFit: 'cover' }}
//               />
//               <Button
//                 icon={<SoundOutlined />}
//                 style={{
//                   position: 'absolute',
//                   top: '15px',
//                   left: '15px',
//                   borderRadius: '50%',
//                   width: '35px',
//                   height: '35px',
//                   backgroundColor: 'rgba(255,255,255,0.9)',
//                   border: 'none'
//                 }}
//               />
//               <Button
//                 icon={<SoundOutlined />}
//                 style={{
//                   position: 'absolute',
//                   top: '15px',
//                   right: '15px',
//                   borderRadius: '50%',
//                   width: '35px',
//                   height: '35px',
//                   backgroundColor: 'rgba(255,255,255,0.9)',
//                   border: 'none'
//                 }}
//               />
//               <div style={{
//                 position: 'absolute',
//                 top: '15px',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 backgroundColor: 'rgba(255,255,255,0.9)',
//                 borderRadius: '20px',
//                 padding: '5px 15px',
//                 display: 'flex',
//                 alignItems: 'center'
//               }}>
//                 <Avatar
//                   src="https://images.unsplash.com/photo-1494790108755-2616b612b131?w=100&h=100&fit=crop&crop=face"
//                   size={25}
//                   style={{ marginRight: '8px' }}
//                 />
//                 <span style={{ fontSize: '12px', fontWeight: '500' }}>@travelwithemma</span>
//               </div>
//               <img
//                 src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop"
//                 alt="Hat"
//                 style={{
//                   position: 'absolute',
//                   bottom: '60px',
//                   right: '30px',
//                   width: '60px',
//                   height: '60px',
//                   borderRadius: '50%',
//                   border: '3px solid white'
//                 }}
//               />
//             </div>
//             <div style={{ padding: '15px' }}>
//               <p style={{ fontSize: '12px', margin: '0 0 8px 0' }}>Live this experience for ₹2,999</p>
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 style={{ fontWeight: 'bold', margin: '0' }}>Greek Island Getaway</h6>
//                   <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>📍 Greece</p>
//                 </div>
//                 <div className="d-flex align-items-center">
//                   <Button
//                     icon={<HeartOutlined />}
//                     style={{
//                       borderRadius: '50%',
//                       width: '35px',
//                       height: '35px',
//                       marginRight: '10px',
//                       border: '1px solid #ddd'
//                     }}
//                   />
//                   <Button
//                     icon={<PlusOutlined />}
//                     style={{
//                       borderRadius: '50%',
//                       width: '35px',
//                       height: '35px',
//                       backgroundColor: '#FF5722',
//                       border: 'none',
//                       color: 'white'
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* Creators You Love Section */}
//         <div className="mb-4">
//           <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Creators you love</h6>
//           <div className="row">
//             {creators.map((creator) => (
//               <div key={creator.id} className="col-4 mb-3">
//                 <div className="text-center">
//                   <Avatar src={creator.avatar} size={60} className="mb-2" />
//                   <p style={{ fontSize: '11px', fontWeight: '500', margin: '0' }}>{creator.username}</p>
//                   <p style={{ fontSize: '10px', color: '#666', margin: '0' }}>{creator.experiences}</p>
//                   <div className="d-flex align-items-center justify-content-center mt-1">
//                     <span style={{ fontSize: '10px', marginRight: '3px' }}>{creator.rating}</span>
//                     <Rate disabled defaultValue={5} style={{ fontSize: '10px' }} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Explore by Destinations */}
//         <div className="mb-4">
//           <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Explore by Destinations</h6>
//           <div className="d-flex mb-3" style={{ overflowX: 'auto', gap: '10px' }}>
//             <Tag style={{ padding: '5px 15px', borderRadius: '20px', border: 'none', backgroundColor: '#333', color: 'white' }}>🌍 All</Tag>
//             <Tag style={{ padding: '5px 15px', borderRadius: '20px', border: '1px solid #ddd', backgroundColor: 'white' }}>🏖️ Beach</Tag>
//             <Tag style={{ padding: '5px 15px', borderRadius: '20px', border: '1px solid #ddd', backgroundColor: 'white' }}>💕 Romantic</Tag>
//             <Tag style={{ padding: '5px 15px', borderRadius: '20px', border: '1px solid #ddd', backgroundColor: 'white' }}>🏨 Staycation</Tag>
//           </div>
//           <div className="row">
//             {destinations.map((destination) => (
//               <div key={destination.id} className="col-4 mb-3">
//                 <Card
//                   cover={
//                     <div style={{ position: 'relative' }}>
//                       <img 
//                         src={destination.image} 
//                         alt={destination.name}
//                         style={{ height: '100px', objectFit: 'cover' }}
//                       />
//                       <div style={{
//                         position: 'absolute',
//                         top: '8px',
//                         left: '8px',
//                         backgroundColor: 'rgba(0,0,0,0.6)',
//                         color: 'white',
//                         padding: '2px 8px',
//                         borderRadius: '10px',
//                         fontSize: '10px'
//                       }}>
//                         {destination.clips}
//                       </div>
//                     </div>
//                   }
//                   style={{ borderRadius: '15px', overflow: 'hidden', border: 'none' }}
//                   bodyStyle={{ padding: '10px', textAlign: 'center' }}
//                 >
//                   <h6 style={{ margin: '0', fontWeight: 'bold', fontSize: '14px' }}>{destination.name}</h6>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Just Dropped by Creators */}
//         <div className="mb-4">
//           <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Just Dropped by Creators</h6>
//           <Card
//             style={{
//               borderRadius: '15px',
//               overflow: 'hidden',
//               border: 'none',
//               position: 'relative'
//             }}
//             bodyStyle={{ padding: '0' }}
//           >
//             <div style={{ position: 'relative' }}>
//               <img
//                 src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=200&fit=crop"
//                 alt="Greek Island"
//                 style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//               />
//               <Button
//                 icon={<SoundOutlined />}
//                 style={{
//                   position: 'absolute',
//                   top: '15px',
//                   left: '15px',
//                   borderRadius: '50%',
//                   width: '35px',
//                   height: '35px',
//                   backgroundColor: 'rgba(255,255,255,0.9)',
//                   border: 'none'
//                 }}
//               />
//               <div style={{
//                 position: 'absolute',
//                 top: '15px',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 backgroundColor: 'rgba(255,255,255,0.9)',
//                 borderRadius: '20px',
//                 padding: '5px 15px',
//                 display: 'flex',
//                 alignItems: 'center'
//               }}>
//                 <Avatar
//                   src="https://images.unsplash.com/photo-1494790108755-2616b612b131?w=100&h=100&fit=crop&crop=face"
//                   size={25}
//                   style={{ marginRight: '8px' }}
//                 />
//                 <span style={{ fontSize: '12px', fontWeight: '500' }}>@travelwithemma</span>
//               </div>
//             </div>
//             <div style={{ padding: '15px' }}>
//               <p style={{ fontSize: '12px', margin: '0 0 8px 0' }}>Live this experience for ₹7,999</p>
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 style={{ fontWeight: 'bold', margin: '0' }}>Greek Island Getaway</h6>
//                   <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>📍 Greece</p>
//                   <p style={{ fontSize: '11px', color: '#FF5722', margin: '5px 0 0 0' }}>👥 30 people booked</p>
//                 </div>
//                 <Button
//                   icon={<HeartOutlined />}
//                   style={{
//                     borderRadius: '50%',
//                     width: '35px',
//                     height: '35px',
//                     border: '1px solid #ddd'
//                   }}
//                 />
//               </div>
//             </div>
//           </Card>
//         </div>

//         {/* Explore by Category */}
//         <div className="mb-4">
//           <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Explore by Category</h6>
//           <div className="row">
//             {categories.map((category) => (
//               <div key={category.id} className="col-4 mb-3">
//                 <Card
//                   cover={
//                     <div style={{ position: 'relative' }}>
//                       <img 
//                         src={category.image} 
//                         alt={category.name}
//                         style={{ height: '100px', objectFit: 'cover' }}
//                       />
//                       <div style={{
//                         position: 'absolute',
//                         top: '8px',
//                         left: '8px',
//                         backgroundColor: 'rgba(0,0,0,0.6)',
//                         color: 'white',
//                         padding: '2px 8px',
//                         borderRadius: '10px',
//                         fontSize: '10px'
//                       }}>
//                         {category.clips}
//                       </div>
//                     </div>
//                   }
//                   style={{ borderRadius: '15px', overflow: 'hidden', border: 'none' }}
//                   bodyStyle={{ padding: '10px', textAlign: 'center' }}
//                 >
//                   <h6 style={{ margin: '0', fontWeight: 'bold', fontSize: '14px' }}>{category.name}</h6>
//                 </Card>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Last-Minute Steals */}
//         <div className="mb-4">
//           <h6 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Last-Minute Steals</h6>
//           <Card
//             style={{
//               borderRadius: '15px',
//               overflow: 'hidden',
//               border: 'none',
//               position: 'relative'
//             }}
//             bodyStyle={{ padding: '0' }}
//           >
//             <div style={{ position: 'relative' }}>
//               <img
//                 src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=200&fit=crop"
//                 alt="Villa Corelina"
//                 style={{ width: '100%', height: '200px', objectFit: 'cover' }}
//               />
//               <div style={{
//                 position: 'absolute',
//                 top: '15px',
//                 left: '15px',
//                 backgroundColor: '#FF5722',
//                 color: 'white',
//                 padding: '5px 10px',
//                 borderRadius: '15px',
//                 fontSize: '12px',
//                 fontWeight: 'bold'
//               }}>
//                 40% Off
//               </div>
//               <div style={{
//                 position: 'absolute',
//                 top: '15px',
//                 right: '15px',
//                 backgroundColor: 'rgba(255,255,255,0.9)',
//                 borderRadius: '15px',
//                 padding: '3px 8px',
//                 display: 'flex',
//                 alignItems: 'center'
//               }}>
//                 <span style={{ fontSize: '11px', fontWeight: '500', marginRight: '3px' }}>⭐</span>
//                 <span style={{ fontSize: '11px', fontWeight: '500' }}>4.5</span>
//               </div>
//             </div>
//             <div style={{ padding: '15px' }}>
//               <div className="d-flex justify-content-between align-items-center">
//                 <div>
//                   <h6 style={{ fontWeight: 'bold', margin: '0' }}>Villa Corelina</h6>
//                   <p style={{ fontSize: '12px', color: '#666', margin: '0' }}>📍 Goa</p>
//                 </div>
//                 <Button
//                   icon={<HeartOutlined />}
//                   style={{
//                     borderRadius: '50%',
//                     width: '35px',
//                     height: '35px',
//                     border: '1px solid #ddd'
//                   }}
//                 />
//               </div>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;