// import React, { useState, useEffect } from 'react';
// import './scrollToTopButton.scss'; // Stil dosyasını ayırıyoruz

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   // Scroll olayını dinlemek için useEffect kullanıyoruz
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Temizlik fonksiyonu
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Sayfanın üstüne kaydırmak için fonksiyon
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className="scroll-to-top-button"
//       title="Go to top"
//       //style={{ display: isVisible ? 'block' : 'none' }}
//     >
//       Top
//     </button>
//   );
// };

// export default ScrollToTopButton;

// import React, { useEffect, useState } from 'react';
// import './scrollToTopButton.scss'; // Stil dosyasını import et

// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (document.documentElement.scrollTop > 300) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     // Alternatif olarak:
//     // document.documentElement.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     //isVisible && (
//       <button
//         onClick={scrollToTop}
//         className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
//       >
//         ^
//       </button>
//     //)
//   );
// };

// export default ScrollToTopButton;

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './scrollToTopButton.scss';
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const location = useLocation();
  useEffect(() => {
    // Sayfa yüklendiğinde yukarı kaydır
    window.scrollTo(0, 0);
  }, []); // Boş bağımlılık dizisiyle, bu etki sadece bileşen ilk yüklendiğinde çalışır

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  if (location.pathname === '/projectDetail') {
    return null;
  }
  return (
    
      <Link to=""> <span onClick={() => scrollToSection('header')}><button className='scroll-to-top-button'><FaAngleDoubleUp /></button></span></Link>
    
  );
}

export default ScrollToTopButton