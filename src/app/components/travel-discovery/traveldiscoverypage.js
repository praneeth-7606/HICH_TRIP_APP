// import React, { useState } from 'react';
// import SearchHeader from './searchheader';
// import PickedForYou from './pickedforyou';
// import CreatorsYouLove from './creatorsyoulove';
// import ExploreByCategory from './explorebycategory';
// import ExploreByDestinations from './explorebydestinations';
// import BasedOnYourVibe from './basedonyourvibe';
// import LastMinuteReels from './lastminutereels';
// // import BottomNavigation from '../bottomnavigation';
// import { travelDiscoveryData } from '../data/traveldiscoverydata.js';

// const TravelDiscoveryPage = () => {
//   const [activeTab, setActiveTab] = useState('tabs');

//   return (
//     <div style={{
//       background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
//       minHeight: '100vh',
//       maxWidth: '400px',
//       margin: '0 auto',
//       position: 'relative',
//       paddingBottom: '90px'
//     }}>
//       {/* Search Header */}
//       <SearchHeader />

//       {/* Content Sections */}
//       <div style={{ 
//         paddingTop: '24px',
//         paddingBottom: '2px'
//       }}>
//         <PickedForYou experiences={travelDiscoveryData.pickedForYou} />
        
//         <CreatorsYouLove creators={travelDiscoveryData.creatorsYouLove} />
        
//         <ExploreByDestinations destinations={travelDiscoveryData.destinations} />
        
//         <BasedOnYourVibe experiences={travelDiscoveryData.basedOnYourVibe} />
        
//         <ExploreByCategory categories={travelDiscoveryData.categories} />
        
//         <LastMinuteReels reels={travelDiscoveryData.lastMinuteReels} />
//       </div>

//       {/* Bottom Navigation */}
      

//       {/* Enhanced Styles */}
//       <style>{`
//         /* Hide scrollbar */
//         ::-webkit-scrollbar {
//           display: none;
//         }
        
//         * {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
        
//         /* Smooth scrolling */
//         html {
//           scroll-behavior: smooth;
//         }
        
//         /* Enhanced touch targets for mobile */
//         @media (max-width: 768px) {
//           button, [role="button"] {
//             min-height: 44px;
//             min-width: 44px;
//           }
//         }
        
//         /* Focus management */
//         button:focus,
//         [role="button"]:focus {
//           outline: 2px solid #FF5722;
//           outline-offset: 2px;
//         }
        
//         /* Improved text readability */
//         p, span, div {
//           text-rendering: optimizeLegibility;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }
        
//         /* Performance optimizations */
//         img {
//           content-visibility: auto;
//           contain-intrinsic-size: 400px 300px;
//         }
        
//         /* Safe area handling for notched devices */
//         @supports (padding: max(0px)) {
//           .travel-discovery-page {
//             padding-bottom: max(90px, env(safe-area-inset-bottom));
//           }
//         }
        
//         /* Button press animations */
//         button {
//           transform: translateZ(0);
//           backface-visibility: hidden;
//           transition: all 0.3s ease;
//         }
        
//         button:active {
//           transform: scale(0.98);
//         }
        
//         /* Card hover effects */
//         .card-hover {
//           transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }
        
//         .card-hover:hover {
//           transform: translateY(-4px) scale(1.02);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.15);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default TravelDiscoveryPage;




import React, { useState } from 'react';
import SearchHeader from './searchheader';
import PickedForYou from './pickedforyou';
import CreatorsYouLove from './creatorsyoulove';
import ExploreByCategory from './explorebycategory';
import ExploreByDestinations from './explorebydestinations';
import BasedOnYourVibe from './basedonyourvibe';
import LastMinuteReels from './lastminutereels';
// import BottomNavigation from '../bottomnavigation';
import { travelDiscoveryData } from '../data/traveldiscoverydata.js';

const TravelDiscoveryPage = () => {
  const [activeTab, setActiveTab] = useState('tabs');

  return (
    <div style={{
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
      minHeight: '100vh',
      maxWidth: '400px',
      margin: '0 auto',
      position: 'relative',
      paddingBottom: '90px'
    }}>
      {/* Search Header */}
      <SearchHeader />

      {/* Content Sections */}
      <div style={{ 
        paddingTop: '16px', // REDUCED from 24px to 16px
        paddingBottom: '2px'
      }}>
        <div style={{ marginBottom: '8px' }}> {/* REDUCED space after PickedForYou */}
          <PickedForYou experiences={travelDiscoveryData.pickedForYou} />
        </div>
        
        <div style={{ marginBottom: '32px' }}> {/* Normal space for other components */}
          <CreatorsYouLove creators={travelDiscoveryData.creatorsYouLove} />
        </div>
        
        <ExploreByDestinations destinations={travelDiscoveryData.destinations} />
        
        <BasedOnYourVibe experiences={travelDiscoveryData.basedOnYourVibe} />
        
        <ExploreByCategory categories={travelDiscoveryData.categories} />
        
        <LastMinuteReels reels={travelDiscoveryData.lastMinuteReels} />
      </div>

      {/* Bottom Navigation */}
      
      {/* Enhanced Styles */}
      <style>{`
        /* Hide scrollbar */
        ::-webkit-scrollbar {
          display: none;
        }
        
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced touch targets for mobile */
        @media (max-width: 768px) {
          button, [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
        }
        
        /* Focus management */
        button:focus,
        [role="button"]:focus {
          outline: 2px solid #FF5722;
          outline-offset: 2px;
        }
        
        /* Improved text readability */
        p, span, div {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        /* Performance optimizations */
        img {
          content-visibility: auto;
          contain-intrinsic-size: 400px 300px;
        }
        
        /* Safe area handling for notched devices */
        @supports (padding: max(0px)) {
          .travel-discovery-page {
            padding-bottom: max(90px, env(safe-area-inset-bottom));
          }
        }
        
        /* Button press animations */
        button {
          transform: translateZ(0);
          backface-visibility: hidden;
          transition: all 0.3s ease;
        }
        
        button:active {
          transform: scale(0.98);
        }
        
        /* Card hover effects */
        .card-hover {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .card-hover:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
};

export default TravelDiscoveryPage;