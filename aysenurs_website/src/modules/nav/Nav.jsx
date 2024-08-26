// import React, { useEffect } from 'react';
// import './nav.scss';
// import { Link } from 'react-router-dom'; // react-router-dom Link için yeni isim

// const Nav = () => {
//   useEffect(() => {
//     // Sayfa yüklendiğinde yukarı kaydır
//     window.scrollTo(0, 0);
// }, []); // Boş bağımlılık dizisiyle, bu etki sadece bileşen ilk yüklendiğinde çalışır
//   return (
//     <nav id='navbar'>
//       <Link to="/"><span>Anasayfa</span></Link>
//       <Link to="aboutUs"><span>Hakkımda</span></Link>
//       <Link to="projectDetail"><span>Projelerim</span></Link>
//       <Link to="background"><span>Deneyimlerim</span></Link>
//       <Link to="contact"><span>İletişim</span></Link>
//       {/* <Link to="log">Blog</Link> */}
//       {/* <Link to="background">Deneyimlerim</Link> */}
//     </nav>
//   );
// }

// export default Nav;




// import React, { useEffect } from 'react';
// import './nav.scss';
// import { Link } from 'react-router-dom';

// const Nav = () => {
//   useEffect(() => {
//     // Sayfa yüklendiğinde yukarı kaydır
//     window.scrollTo(0, 0);
//   }, []); // Boş bağımlılık dizisiyle, bu etki sadece bileşen ilk yüklendiğinde çalışır

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav id='navbar'>
//       <Link to="/"><span>Anasayfa</span></Link>
//       <Link to=""> <span onClick={() => scrollToSection('aboutUs')}>Hakkımda</span></Link>
//       <Link to=""><span onClick={() => scrollToSection('project')}>Projelerim</span></Link>
//       <Link to=""><span onClick={() => scrollToSection('background')}>Deneyimlerim</span></Link>
//       <Link to="" ><span onClick={() => scrollToSection('skills')}>Yetkinliklerim</span></Link>
//       <Link to=""><span onClick={() => scrollToSection('contact')}>İletişim</span></Link>
      
      
      
//     </nav>
//   );
// };

// export default Nav;

import React, { useEffect } from 'react';
import './nav.scss';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa yüklendiğinde yukarı kaydır
    window.scrollTo(0, 0);
  }, []);

  const scrollToSectionAfterNavigate = (sectionId) => {
    navigate('/'); // Anasayfaya yönlendir
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0); // Yönlendirme işlemi tamamlandıktan sonra kaydırma işlemini gerçekleştir
  };

  return (
    <nav id='navbar'>
      <span onClick={() => scrollToSectionAfterNavigate('header')}>Anasayfa</span>
      <span onClick={() => scrollToSectionAfterNavigate('aboutUs')}>Hakkımda</span>
      <span onClick={() => scrollToSectionAfterNavigate('project')}>Projelerim</span>
      <span onClick={() => scrollToSectionAfterNavigate('background')}>Deneyimlerim</span>
      <span onClick={() => scrollToSectionAfterNavigate('skills')}>Yetkinliklerim</span>
      <span onClick={() => scrollToSectionAfterNavigate('contact')}>İletişim</span>
    </nav>
  );
};

export default Nav;
