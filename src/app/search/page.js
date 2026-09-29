'use client'

// import React, { useState, useEffect } from 'react'
// import { Input, Avatar, Card } from 'antd'
// import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons'
// import { useRouter } from 'next/navigation'

// const SearchPage = () => {
//   const router = useRouter()
//   const [searchQuery, setSearchQuery] = useState('')
//   const [searchResults, setSearchResults] = useState([])
//   const [isSearching, setIsSearching] = useState(false)

//   // Popular Travel Creators Data
//   const popularCreators = [
//     {
//       id: 1,
//       username: '@travelwithemma',
//       name: 'Emma',
//       avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBmYWNlfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000'
//     },
//     {
//       id: 2,
//       username: '@travelwithriya',
//       name: 'Riya',
//       avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
//     },
//     {
//       id: 3,
//       username: '@travelwithriya',
//       name: 'Riya K',
//       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
//     },
//     {
//       id: 4,
//       username: '@travelwithriya',
//       name: 'Priya',
//       avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face'
//     },
//     {
//       id: 5,
//       username: '@wanderlust',
//       name: 'Alex',
//       avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
//     }
//   ]

//   // Destinations Data
//   const destinations = [
//     {
//       id: 1,
//       name: 'Bali',
//       clips: '10K+ clips',
//       image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=300&h=200&fit=crop'
//     },
//     {
//       id: 2,
//       name: 'Dubai',
//       clips: '10K+ clips',
//       image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop'
//     },
//     {
//       id: 3,
//       name: 'Goa',
//       clips: '10K+ clips',
//       image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=300&h=200&fit=crop'
//     },
//     {
//       id: 4,
//       name: 'Paris',
//       clips: '10K+ clips',
//       image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=300&h=200&fit=crop'
//     },
//     {
//       id: 5,
//       name: 'Miami',
//       clips: '10K+ clips',
//       image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop'
//     },
//     {
//       id: 6,
//       name: 'Himachal',
//       clips: '10K+ clips',
//       image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=300&h=200&fit=crop'
//     }
//   ]

//   // Search Data - All searchable items
//   const allSearchData = [
//     // Goa specific results
//     {
//       id: 'goa-1',
//       title: 'Taj Cidade de Goa Heritage, Goa',
//       subtitle: 'Dona Paula, Goa',
//       type: 'hotel',
//       image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=80&h=80&fit=crop'
//     },
//     {
//       id: 'goa-2',
//       title: 'Pousada by the Beach Goa',
//       subtitle: 'Calangute, Goa',
//       type: 'hotel',
//       image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=80&h=80&fit=crop'
//     },
//     {
//       id: 'goa-3',
//       title: 'Q Hotel Goa Candolim Beach',
//       subtitle: 'Candolim, Goa',
//       type: 'hotel',
//       image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=80&h=80&fit=crop'
//     },
//     {
//       id: 'goa-4',
//       title: 'Museum Of Goa, MOG',
//       subtitle: 'Pilerne, Goa',
//       type: 'attraction',
//       image: 'https://images.unsplash.com/photo-1594736797933-d0b22d4a3e8e?w=80&h=80&fit=crop'
//     },
//     {
//       id: 'goa-5',
//       title: 'Old Goa',
//       subtitle: 'Goa, India',
//       type: 'destination',
//       image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop'
//     },
//     {
//       id: 'goa-6',
//       title: 'Goa',
//       subtitle: 'India',
//       type: 'destination',
//       image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=80&h=80&fit=crop'
//     },
//     // Other destinations
//     {
//       id: 'bali-1',
//       title: 'Bali',
//       subtitle: 'Indonesia',
//       type: 'destination',
//       image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=80&h=80&fit=crop'
//     },
//     {
//       id: 'dubai-1',
//       title: 'Dubai',
//       subtitle: 'UAE',
//       type: 'destination',
//       image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=80&h=80&fit=crop'
//     },
//     {
//       id: 'paris-1',
//       title: 'Paris',
//       subtitle: 'France',
//       type: 'destination',
//       image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=80&h=80&fit=crop'
//     }
//   ]

//   // Search functionality
//   useEffect(() => {
//     if (searchQuery.trim() === '') {
//       setSearchResults([])
//       setIsSearching(false)
//     } else {
//       setIsSearching(true)
//       const filtered = allSearchData.filter(item =>
//         item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//       setSearchResults(filtered)
//     }
//   }, [searchQuery])

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value)
//   }

//   const handleCreatorClick = (creator) => {
//     router.push(`/creator/${creator.id}`)
//   }

//   const handleDestinationClick = (destination) => {
//     router.push(`/destination/${destination.id}`)
//   }

//   const handleSearchResultClick = (result) => {
//     if (result.type === 'destination') {
//       router.push(`/destination/${result.id}`)
//     } else if (result.type === 'hotel') {
//       router.push(`/hotel/${result.id}`)
//     } else if (result.type === 'attraction') {
//       router.push(`/attraction/${result.id}`)
//     }
//   }

//   return (
//     <div style={{ backgroundColor: '#FDF2E9', minHeight: '100vh', paddingBottom: '80px' }}>
//       {/* Header with Search */}
//       <div 
//         className="d-flex align-items-center p-3" 
//         style={{ 
//           paddingTop: '60px',
//           background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)'
//         }}
//       >
//         <button
//           onClick={() => router.back()}
//           style={{
//             background: 'none',
//             border: 'none',
//             marginRight: '15px',
//             fontSize: '20px',
//             color: '#333',
//             cursor: 'pointer',
//             padding: '8px',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}
//         >
//           <ArrowLeftOutlined />
//         </button>
        
//         <div style={{ flex: 1 }}>
//           <Input
//             placeholder="Search for a 'Travel Creator' or 'Destination'"
//             prefix={<SearchOutlined style={{ color: '#999' }} />}
//             value={searchQuery}
//             onChange={handleSearchChange}
//             style={{
//               borderRadius: '25px',
//               border: '2px solid #FF8A65',
//               backgroundColor: 'white',
//               height: '45px',
//               fontSize: '16px'
//             }}
//             autoFocus
//           />
//         </div>
//       </div>

//       {/* Search Results */}
//       {isSearching && searchResults.length > 0 && (
//         <div className="px-3 py-3">
//           {searchResults.map((result) => (
//             <div
//               key={result.id}
//               className="d-flex align-items-center p-3 mb-2"
//               style={{
//                 backgroundColor: 'white',
//                 borderRadius: '12px',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//                 cursor: 'pointer',
//                 transition: 'all 0.2s ease'
//               }}
//               onClick={() => handleSearchResultClick(result)}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = 'translateY(-1px)'
//                 e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'translateY(0)'
//                 e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
//               }}
//             >
//               <img
//                 src={result.image}
//                 alt={result.title}
//                 style={{
//                   width: '50px',
//                   height: '50px',
//                   borderRadius: '8px',
//                   objectFit: 'cover',
//                   marginRight: '15px'
//                 }}
//               />
//               <div style={{ flex: 1 }}>
//                 <h6 style={{ 
//                   margin: '0 0 2px 0', 
//                   fontWeight: '600', 
//                   fontSize: '15px',
//                   color: '#333'
//                 }}>
//                   {result.title}
//                 </h6>
//                 <p style={{ 
//                   margin: 0, 
//                   color: '#666', 
//                   fontSize: '13px'
//                 }}>
//                   {result.subtitle}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* No Results */}
//       {isSearching && searchResults.length === 0 && (
//         <div className="text-center py-5">
//           <p style={{ color: '#666', fontSize: '16px' }}>
//             No results found for "{searchQuery}"
//           </p>
//         </div>
//       )}

//       {/* Default Content - Popular Creators and Destinations */}
//       {!isSearching && (
//         <>
//           {/* Popular Travel Creators */}
//           <div className="px-3 py-3">
//             <h6 style={{ 
//               fontWeight: 'bold', 
//               marginBottom: '20px', 
//               fontSize: '18px',
//               color: '#333'
//             }}>
//               Popular Travel Creators
//             </h6>
            
//             <div className="d-flex" style={{ overflowX: 'auto', gap: '20px', paddingBottom: '10px' }}>
//               {popularCreators.map((creator) => (
//                 <div
//                   key={creator.id}
//                   className="text-center"
//                   style={{ 
//                     minWidth: '80px',
//                     cursor: 'pointer',
//                     transition: 'transform 0.2s ease'
//                   }}
//                   onClick={() => handleCreatorClick(creator)}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.transform = 'scale(1.05)'
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.transform = 'scale(1)'
//                   }}
//                 >
//                   <Avatar
//                     src={creator.avatar}
//                     size={64}
//                     style={{
//                       marginBottom: '8px',
//                       border: '3px solid white',
//                       boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
//                     }}
//                   />
//                   <p style={{ 
//                     fontSize: '11px', 
//                     margin: 0, 
//                     fontWeight: '500',
//                     color: '#333'
//                   }}>
//                     {creator.username}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Explore by Destinations */}
//           <div className="px-3 py-3">
//             <h6 style={{ 
//               fontWeight: 'bold', 
//               marginBottom: '20px', 
//               fontSize: '18px',
//               color: '#333'
//             }}>
//               Explore by Destinations
//             </h6>
            
//             <div className="row g-3">
//               {destinations.map((destination) => (
//                 <div key={destination.id} className="col-4">
//                   <Card
//                     cover={
//                       <div style={{ position: 'relative', cursor: 'pointer' }}>
//                         <img 
//                           src={destination.image} 
//                           alt={destination.name}
//                           style={{ 
//                             height: '100px', 
//                             objectFit: 'cover',
//                             transition: 'transform 0.3s ease'
//                           }}
//                         />
//                         <div style={{
//                           position: 'absolute',
//                           top: '8px',
//                           left: '8px',
//                           backgroundColor: 'rgba(0,0,0,0.7)',
//                           color: 'white',
//                           padding: '4px 8px',
//                           borderRadius: '12px',
//                           fontSize: '10px',
//                           fontWeight: '500'
//                         }}>
//                           {destination.clips}
//                         </div>
//                       </div>
//                     }
//                     style={{ 
//                       borderRadius: '15px', 
//                       overflow: 'hidden', 
//                       border: 'none',
//                       cursor: 'pointer',
//                       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                       transition: 'all 0.3s ease'
//                     }}
//                     bodyStyle={{ 
//                       padding: '12px', 
//                       textAlign: 'center',
//                       backgroundColor: 'white'
//                     }}
//                     onClick={() => handleDestinationClick(destination)}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.transform = 'translateY(-4px)'
//                       e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)'
//                       const img = e.currentTarget.querySelector('img')
//                       if (img) img.style.transform = 'scale(1.1)'
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.transform = 'translateY(0)'
//                       e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)'
//                       const img = e.currentTarget.querySelector('img')
//                       if (img) img.style.transform = 'scale(1)'
//                     }}
//                   >
//                     <h6 style={{ 
//                       margin: '0', 
//                       fontWeight: 'bold', 
//                       fontSize: '14px',
//                       color: '#333'
//                     }}>
//                       {destination.name}
//                     </h6>
//                   </Card>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}

//       {/* Custom Styles */}
//       <style jsx>{`
//         /* Hide scrollbar for creator list */
//         .d-flex::-webkit-scrollbar {
//           display: none;
//         }
        
//         .d-flex {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
        
//         /* Smooth transitions */
//         * {
//           transition: all 0.2s ease;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default SearchPage


// app/search/page.js - Main Search Page
'use client'

import React, { useState, useEffect } from 'react'
import { Input, Avatar, Card } from 'antd'
import { ArrowLeftOutlined, SearchOutlined } from '@ant-design/icons'
import { useRouter } from 'next/navigation'

const SearchPage = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Popular Travel Creators Data
  const popularCreators = [
    {
      id: 1,
      username: '@travelwithemma',
      name: 'Emma',
      avatar: 'https://images.unsplash.com/photo-1604224234481-355caecd7cfb?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      username: '@travelwithriya',
      name: 'Riya',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      username: '@travelwithriya',
      name: 'Riya K',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 4,
      username: '@travelwithriya',
      name: 'Priya',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 5,
      username: '@wanderlust',
      name: 'Alex',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  ]

  // Enhanced Destinations Data with High-Quality Images
  const destinations = [
    {
      id: 1,
      name: 'Bali',
      clips: '10K+ clips',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&h=800&q=90&auto=format&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Dubai',
      clips: '10K+ clips',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=800&q=90&auto=format&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Goa',
      clips: '10K+ clips',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=1200&h=800&q=90&auto=format&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Paris',
      clips: '10K+ clips',
      image: 'https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE='
    },
    {
      id: 5,
      name: 'Miami',
      clips: '10K+ clips',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&q=90&auto=format&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Himachal',
      clips: '10K+ clips',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&h=800&q=90&auto=format&fit=crop&crop=center'
    }
  ]

  // Search Data - All searchable items
  const allSearchData = [
    // Goa specific results
    {
      id: 'goa-1',
      title: 'Taj Cidade de Goa Heritage, Goa',
      subtitle: 'Dona Paula, Goa',
      type: 'hotel',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=80&h=80&fit=crop'
    },
    {
      id: 'goa-2',
      title: 'Pousada by the Beach Goa',
      subtitle: 'Calangute, Goa',
      type: 'hotel',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=80&h=80&fit=crop'
    },
    {
      id: 'goa-3',
      title: 'Q Hotel Goa Candolim Beach',
      subtitle: 'Candolim, Goa',
      type: 'hotel',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=80&h=80&fit=crop'
    },
    {
      id: 'goa-4',
      title: 'Museum Of Goa, MOG',
      subtitle: 'Pilerne, Goa',
      type: 'attraction',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYDafMS2vA6uUHyq9twutiuSFcgOmWiPgAQ&s'
    },
    {
      id: 'goa-5',
      title: 'Old Goa',
      subtitle: 'Goa, India',
      type: 'destination',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT594C49LhE9AFceeMuoi8VDrkKQqNBr8PeGw&s'
    },
    {
      id: 'goa-6',
      title: 'Goa',
      subtitle: 'India',
      type: 'destination',
      image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=80&h=80&fit=crop'
    },
    // Other destinations
    {
      id: 'bali-1',
      title: 'Bali',
      subtitle: 'Indonesia',
      type: 'destination',
      image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=80&h=80&fit=crop'
    },
    {
      id: 'dubai-1',
      title: 'Dubai',
      subtitle: 'UAE',
      type: 'destination',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=80&h=80&fit=crop'
    },
    {
      id: 'paris-1',
      title: 'Paris',
      subtitle: 'France',
      type: 'destination',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=80&h=80&fit=crop'
    }
  ]

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([])
      setIsSearching(false)
    } else {
      setIsSearching(true)
      const filtered = allSearchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(filtered)
    }
  }, [searchQuery])

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleCreatorClick = (creator) => {
    router.push(`/creator/${creator.id}`)
  }

const handleDestinationClick = (destination) => {
  // Navigate to destination detail page with destination name
  router.push(`/destination/${destination.name.toLowerCase()}`)
}


 const handleSearchResultClick = (result) => {
  if (result.type === 'destination') {
    // For search results, extract destination name from title or use id
    const destinationName = result.title.toLowerCase().includes('goa') ? 'goa' : 
                          result.title.toLowerCase().includes('bali') ? 'bali' :
                          result.title.toLowerCase().includes('dubai') ? 'dubai' :
                          result.title.toLowerCase().includes('paris') ? 'paris' :
                          result.title.toLowerCase().includes('miami') ? 'miami' :
                          result.title.toLowerCase().includes('himachal') ? 'himachal' :
                          result.id.replace(/[^a-z]/g, '')
    router.push(`/destination/${destinationName}`)
  } else if (result.type === 'hotel') {
    // For hotels in a destination, navigate to that destination
    const destinationName = result.subtitle.toLowerCase().includes('goa') ? 'goa' :
                          result.subtitle.toLowerCase().includes('bali') ? 'bali' :
                          result.subtitle.toLowerCase().includes('dubai') ? 'dubai' :
                          'goa' // default fallback
    router.push(`/destination/${destinationName}`)
  } else if (result.type === 'attraction') {
    // For attractions in a destination, navigate to that destination  
    const destinationName = result.subtitle.toLowerCase().includes('goa') ? 'goa' :
                          result.subtitle.toLowerCase().includes('bali') ? 'bali' :
                          result.subtitle.toLowerCase().includes('dubai') ? 'dubai' :
                          'goa' // default fallback
    router.push(`/destination/${destinationName}`)
  }
}

  return (
    <div style={{ backgroundColor: '#FDF2E9', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header with Search */}
      <div 
        className="d-flex align-items-center p-3" 
        style={{ 
          paddingTop: '60px',
          background: 'linear-gradient(135deg, #FDF2E9 0%, #FFE0B2 100%)'
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            background: 'none',
            border: 'none',
            marginRight: '15px',
            fontSize: '20px',
            color: '#333',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ArrowLeftOutlined />
        </button>
        
        <div style={{ flex: 1 }}>
          <Input
            placeholder="Search for a 'Travel Creator' or 'Destination'"
            prefix={<SearchOutlined style={{ color: '#999' }} />}
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              borderRadius: '25px',
              border: '2px solid #FF8A65',
              backgroundColor: 'white',
              height: '45px',
              fontSize: '16px'
            }}
            autoFocus
          />
        </div>
      </div>

      {/* Search Results */}
      {isSearching && searchResults.length > 0 && (
        <div className="px-3 py-3">
          {searchResults.map((result) => (
            <div
              key={result.id}
              className="d-flex align-items-center p-3 mb-2"
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => handleSearchResultClick(result)}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-1px)'
                e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <img
                src={result.image}
                alt={result.title}
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  objectFit: 'cover',
                  marginRight: '15px'
                }}
              />
              <div style={{ flex: 1 }}>
                <h6 style={{ 
                  margin: '0 0 2px 0', 
                  fontWeight: '600', 
                  fontSize: '15px',
                  color: '#333'
                }}>
                  {result.title}
                </h6>
                <p style={{ 
                  margin: 0, 
                  color: '#666', 
                  fontSize: '13px'
                }}>
                  {result.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {isSearching && searchResults.length === 0 && (
        <div className="text-center py-5">
          <p style={{ color: '#666', fontSize: '16px' }}>
            No results found for "{searchQuery}"
          </p>
        </div>
      )}

      {/* Default Content - Popular Creators and Destinations */}
      {!isSearching && (
        <>
          {/* Popular Travel Creators */}
          <div className="px-3 py-3">
            <h6 style={{ 
              fontWeight: 'bold', 
              marginBottom: '20px', 
              fontSize: '18px',
              color: '#333'
            }}>
              Popular Travel Creators
            </h6>
            
            <div className="d-flex" style={{ overflowX: 'auto', gap: '20px', paddingBottom: '10px' }}>
              {popularCreators.map((creator) => (
                <div
                  key={creator.id}
                  className="text-center"
                  style={{ 
                    minWidth: '80px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onClick={() => handleCreatorClick(creator)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  <Avatar
                    src={creator.avatar}
                    size={64}
                    style={{
                      marginBottom: '8px',
                      border: '3px solid white',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                  />
                  <p style={{ 
                    fontSize: '11px', 
                    margin: 0, 
                    fontWeight: '500',
                    color: '#333'
                  }}>
                    {creator.username}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Explore by Destinations */}
          <div className="px-3 py-4">
            <h6 style={{ 
              fontWeight: 'bold', 
              marginBottom: '25px', 
              fontSize: '20px',
              color: '#333',
              textAlign: 'center',
              letterSpacing: '-0.5px'
            }}>
              Explore by Destinations
            </h6>
            
            <div className="row g-4">
              {destinations.map((destination, index) => (
                <div key={destination.id} className="col-4">
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      animationDelay: `${index * 0.1}s`
                    }}
                    className="destination-card-enhanced"
                    onClick={() => handleDestinationClick(destination)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)'
                      const img = e.currentTarget.querySelector('.destination-image')
                      const overlay = e.currentTarget.querySelector('.destination-overlay')
                      if (img) {
                        img.style.transform = 'scale(1.15)'
                        img.style.filter = 'contrast(1.2) saturate(1.3) brightness(1.1)'
                      }
                      if (overlay) {
                        overlay.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)'
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)'
                      const img = e.currentTarget.querySelector('.destination-image')
                      const overlay = e.currentTarget.querySelector('.destination-overlay')
                      if (img) {
                        img.style.transform = 'scale(1)'
                        img.style.filter = 'contrast(1.1) saturate(1.2) brightness(1.05)'
                      }
                      if (overlay) {
                        overlay.style.opacity = '0.6'
                      }
                    }}
                  >
                    {/* Enhanced Image Container */}
                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                      <img 
                        src={`${destination.image}&w=800&h=600&q=90&auto=format&fit=crop&crop=center`}
                        alt={destination.name}
                        className="destination-image"
                        style={{ 
                          width: '100%',
                          height: '140px',
                          objectFit: 'cover',
                          transition: 'all 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                          filter: 'contrast(1.1) saturate(1.2) brightness(1.05)'
                        }}
                        onLoad={(e) => {
                          e.target.style.opacity = '1'
                        }}
                        onError={(e) => {
                          e.target.src = destination.image // Fallback to original
                        }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div 
                        className="destination-overlay"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
                          opacity: 0.6,
                          transition: 'opacity 0.3s ease'
                        }}
                      />

                      {/* Enhanced Clips Badge */}
                      <div style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 100%)',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: '600',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                        letterSpacing: '0.5px'
                      }}>
                        {destination.clips}
                      </div>

                      {/* Trending Badge for some destinations */}
                      {(index === 0 || index === 2) && (
                        <div style={{
                          position: 'absolute',
                          top: '12px',
                          right: '12px',
                          background: 'linear-gradient(135deg, #FF5722 0%, #FF8A65 100%)',
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '9px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          boxShadow: '0 4px 15px rgba(255, 87, 34, 0.4)'
                        }}>
                          🔥 Hot
                        </div>
                      )}
                    </div>
                    
                    {/* Enhanced Content Section */}
                    <div style={{ 
                      padding: '16px',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                      textAlign: 'center'
                    }}>
                      <h6 style={{ 
                        margin: '0 0 4px 0', 
                        fontWeight: '700', 
                        fontSize: '16px',
                        color: '#333',
                        letterSpacing: '-0.3px',
                        textShadow: '0 1px 2px rgba(255,255,255,0.8)'
                      }}>
                        {destination.name}
                      </h6>
                      
                      {/* Destination Stats */}
                      <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '6px'
                      }}>
                        <span style={{
                          fontSize: '10px',
                          color: '#FF5722',
                          fontWeight: '600',
                          background: 'rgba(255, 87, 34, 0.1)',
                          padding: '2px 6px',
                          borderRadius: '8px'
                        }}>
                          Popular
                        </span>
                        <span style={{
                          fontSize: '10px',
                          color: '#666',
                          fontWeight: '500'
                        }}>
                          • {Math.floor(Math.random() * 500 + 100)}+ places
                        </span>
                      </div>
                    </div>

                    {/* Subtle Shine Effect */}
                    <div style={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                      transform: 'rotate(45deg)',
                      transition: 'all 0.6s ease',
                      opacity: 0,
                      pointerEvents: 'none'
                    }} 
                    className="shine-effect" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Enhanced Custom Styles */}
      <style jsx>{`
        /* Hide scrollbar for creator list */
        .d-flex::-webkit-scrollbar {
          display: none;
        }
        
        .d-flex {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Enhanced destination cards */
        .destination-card-enhanced {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }
        
        .destination-card-enhanced:nth-child(1) { animation-delay: 0.1s; }
        .destination-card-enhanced:nth-child(2) { animation-delay: 0.2s; }
        .destination-card-enhanced:nth-child(3) { animation-delay: 0.3s; }
        .destination-card-enhanced:nth-child(4) { animation-delay: 0.4s; }
        .destination-card-enhanced:nth-child(5) { animation-delay: 0.5s; }
        .destination-card-enhanced:nth-child(6) { animation-delay: 0.6s; }
        
        .destination-card-enhanced:hover .shine-effect {
          opacity: 1;
          transform: rotate(45deg) translate(50%, 50%);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Image loading animation */
        .destination-image {
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .destination-card-enhanced {
            margin-bottom: 16px;
          }
          
          .destination-image {
            height: 120px !important;
          }
        }
        
        @media (min-width: 768px) {
          .destination-image {
            height: 160px !important;
          }
        }
        
        /* Smooth transitions */
        * {
          transition: all 0.3s ease;
        }
        
        /* Glass morphism effect */
        .destination-card-enhanced::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          border-radius: 20px;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}

export default SearchPage
