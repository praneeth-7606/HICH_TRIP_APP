'use client';
// app/components/ClientLayout.js

// import { useState, useEffect } from 'react';
// import { Container, Navbar, Nav, Button, Offcanvas } from 'react-bootstrap';
// import { MenuOutlined, HomeOutlined, CalendarOutlined, HeartOutlined, UserOutlined, PlayCircleOutlined } from '@ant-design/icons';
// import { Badge } from 'antd';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function ClientLayout({ children }) {
//   const [show, setShow] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const pathname = usePathname();

//   // Handle hydration by only showing router-dependent content after mount
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const navItems = [
//     { href: '/', icon: <HomeOutlined />, label: 'Home', badge: null },
//     { href: '/my-trips', icon: <CalendarOutlined />, label: 'My Trips', badge: 3 },
//     { href: '/reels', icon: <PlayCircleOutlined />, label: 'Reels', badge: null },
//     { href: '/collections', icon: <HeartOutlined />, label: 'Collections', badge: 12 },
//     { href: '/profile', icon: <UserOutlined />, label: 'Profile', badge: null },
//   ];

//   // Function to check if route is active
//   const isActive = (href) => {
//     if (!mounted) return false;
//     return pathname === href;
//   };

//   return (
//     <>
//       {/* Mobile Navigation */}
//       <div className="d-md-none">
//         <Navbar bg="white" className="shadow-sm border-bottom">
//           <Container>
//             <Navbar.Brand>
//               <Button variant="link" onClick={handleShow} className="p-0">
//                 <MenuOutlined style={{ fontSize: '24px', color: '#ff6b6b' }} />
//               </Button>
//             </Navbar.Brand>
//             <Navbar.Brand className="mx-auto">
//               <h5 className="mb-0 fw-bold text-primary">Hich Trip</h5>
//             </Navbar.Brand>
//             <Navbar.Brand>
//               <Button variant="outline-primary" size="sm">
//                 <UserOutlined />
//               </Button>
//             </Navbar.Brand>
//           </Container>
//         </Navbar>

//         <Offcanvas show={show} onHide={handleClose} placement="start">
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>
//               <h4 className="text-primary fw-bold">Hich Trip</h4>
//             </Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className="flex-column">
//               {navItems.map((item) => (
//                 <Nav.Link
//                   key={item.href}
//                   as={Link}
//                   href={item.href}
//                   className={`d-flex align-items-center py-3 ${isActive(item.href) ? 'active' : ''}`}
//                   onClick={handleClose}
//                 >
//                   <span className="me-3" style={{ fontSize: '20px' }}>
//                     {item.icon}
//                   </span>
//                   <span className="flex-grow-1">{item.label}</span>
//                   {item.badge && mounted && (
//                     <Badge count={item.badge} size="small" />
//                   )}
//                 </Nav.Link>
//               ))}
//             </Nav>
//           </Offcanvas.Body>
//         </Offcanvas>
//       </div>

//       {/* Desktop Sidebar */}
//       <div className="d-none d-md-flex">
//         <div className="sidebar bg-white shadow-sm border-end position-fixed" style={{ width: '250px', height: '100vh', zIndex: 1000 }}>
//           <div className="p-4">
//             <h4 className="text-primary fw-bold mb-4">Hich Trip</h4>
//             <Nav className="flex-column">
//               {navItems.map((item) => (
//                 <Nav.Link
//                   key={item.href}
//                   as={Link}
//                   href={item.href}
//                   className={`d-flex align-items-center py-3 rounded ${isActive(item.href) ? 'active bg-primary text-white' : ''}`}
//                 >
//                   <span className="me-3" style={{ fontSize: '20px' }}>
//                     {item.icon}
//                   </span>
//                   <span className="flex-grow-1">{item.label}</span>
//                   {item.badge && mounted && (
//                     <Badge count={item.badge} size="small" />
//                   )}
//                 </Nav.Link>
//               ))}
//             </Nav>
//           </div>
//         </div>
//         <div className="content" style={{ marginLeft: '250px', width: 'calc(100% - 250px)' }}>
//           {children}
//         </div>
//       </div>

//       {/* Mobile Content */}
//       <div className="d-md-none">
//         {children}
//       </div>

//       {/* Bottom Navigation for Mobile */}
//       <div className="d-md-none fixed-bottom bg-white border-top">
//         <Container>
//           <Nav className="justify-content-around py-2">
//             {navItems.slice(0, 4).map((item) => (
//               <Nav.Link
//                 key={item.href}
//                 as={Link}
//                 href={item.href}
//                 className={`text-center ${isActive(item.href) ? 'text-primary' : 'text-muted'}`}
//               >
//                 <div style={{ fontSize: '20px' }}>
//                   {item.badge && mounted ? (
//                     <Badge count={item.badge} size="small">
//                       {item.icon}
//                     </Badge>
//                   ) : (
//                     item.icon
//                   )}
//                 </div>
//                 <small className="d-block mt-1">{item.label}</small>
//               </Nav.Link>
//             ))}
//           </Nav>
//         </Container>
//       </div>
//     </>
//   );
// }

