import React, { useState, useEffect, lazy, Suspense } from 'react';
import Image from 'react-bootstrap/Image';
import ScrollImage from '../../images/undraw_to_the_moon_v1mv.svg';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <Image
      src={ScrollImage}
      className="scrollTop"
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  );
};

export default ScrollToTop;

// import React, { useEffect, useState } from 'react';

// <>Method 2</>
// import { useLocation } from 'react-router-dom';

// export default function ScrollToTop() {
//   const { pathname } = useLocation();
//   const [isVisible, setIsVisible] = useState(false);

//   // Top: 0 takes us all the way back to the top of the page
//   // Behavior: smooth keeps it smooth!
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   useEffect(() => {
//     // Button is displayed after scrolling for 500 pixels
//     const toggleVisibility = () => {
//       if (window.pageYOffset > 400) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);

//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, [pathname]);

//   //scroll-to-top classes: fixed, bottom:0, right:0
//   return (
//     <div className="scroll-to-top">
//       {isVisible && (
//         <Image src={ScrollImage} className="scrollTop" onClick={scrollToTop} />
//       )}
//     </div>
//   );
// }
