
// import React, { useState, useEffect } from 'react';
// import './header.scss';
// import logo from './img/logo.svg';
// import video from './img/deniz.mp4';
// import hero from './img/hero.png';
// import { Link } from 'react-router-dom';

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);

//     const toggleNav = () => {
//         setIsOpen(!isOpen);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 0);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const scrollToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       };

//     return (
//         <header id='header'>
//             <div className={`header ${isScrolled ? "scrolled" : ""}`}>
//                 <section className="hero">
//                     <img src={hero} alt="hulk" />
//                     <video src={video} loop autoPlay muted></video>
//                 </section>
//                 <div className={`overlay ${isOpen ? 'open' : ''}`} id="myNav">
//                     {/* <button className="closebtn" onClick={toggleNav}></button> */}
//                     <div className="overlay-content">
//                         <Link to="/" onClick={toggleNav}><span>Anasayfa</span></Link>
//                         <Link to="" onClick={toggleNav}><span onClick={() => scrollToSection('aboutUs')}>Hakkımda</span></Link>
//                         <Link to="" onClick={toggleNav}><span onClick={() => scrollToSection('project')}>Projelerim</span></Link>
//                         <Link to="" onClick={toggleNav}><span onClick={() => scrollToSection('background')}>Deneyimlerim</span></Link>
//                         <Link to="" onClick={toggleNav}><span onClick={() => scrollToSection('skills')}>Yetkinliklerim</span></Link>
//                         <Link to="" onClick={toggleNav}><span onClick={() => scrollToSection('contact')}>İletişim</span></Link>
//                     </div>
//                 </div>
//                 <span className="openbtn" onClick={toggleNav}>
//                 {isOpen ? 'X' : '☰'}  
//                 </span>
//                 <div className='logo'>
//                     <img src={logo} alt="logo" />
//                 </div>
//                 <div className='hello' data-aos="fade-right">
//                     <h1>Merhaba, <span>Ben Ayşenur !</span></h1>
//                 </div>
//                 <div className='paragraph'>
//                     <p> Ben sadece icat ederim. Sonra insanların gelip icadıma ihtiyaç duymasını beklerim.<br/>
//                     "R. Buckminster Fuller" </p>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;


import React, { useState, useEffect } from 'react';
import './header.scss';
import logo from './img/logo.svg';
import video from './img/deniz.mp4';
import hero from './img/hero.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate(); // useNavigate hook'u kullanılıyor

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSectionAfterNavigate = (sectionId) => {
        navigate('/'); // Anasayfaya yönlendir
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0); // Yönlendirme işlemi tamamlandıktan sonra kaydırma işlemi
    };

    return (
        <header id='header'>
            <div className={`header ${isScrolled ? "scrolled" : ""}`}>
                <section className="hero">
                    <img src={hero} alt="hulk" />
                    <video src={video} loop autoPlay muted></video>
                </section>
                <div className={`overlay ${isOpen ? 'open' : ''}`} id="myNav">
                    <div className="overlay-content">
                        <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('header'); }}>Anasayfa</span>
                        <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('aboutUs'); }}>Hakkımda</span>
                        <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('project'); }}>Projelerim</span>
                        <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('background'); }}>Deneyimlerim</span>
                        <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('skills'); }}>Yetkinliklerim</span>
                        <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('contact'); }}>İletişim</span>
                    </div>
                </div>
                <span className="openbtn" onClick={toggleNav}>
                    {isOpen ? 'X' : '☰'}
                </span>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='hello' data-aos="fade-right">
                    <h1>Merhaba, <span>Ben Ayşenur !</span></h1>
                </div>
                <div className='paragraph'>
                    <p> Ben sadece icat ederim. Sonra insanların gelip icadıma ihtiyaç duymasını beklerim.<br />
                        "R. Buckminster Fuller" </p>
                </div>
            </div>
        </header>
    );
}

export default Header;


// import React, { useState, useEffect } from 'react';
// import './header.scss';
// import logo from './img/logo.svg';
// import video from './img/deniz.mp4';
// import hero from './img/hero.png';
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isAnimating, setIsAnimating] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const navigate = useNavigate();

//     const toggleNav = () => {
//         setIsAnimating(true);
//         if (isOpen) {
//             setTimeout(() => {
//                 setIsOpen(false); 
//                 setIsAnimating(false);
//             }, 500); // Kapanma animasyonu süresi
//         } else {
//             setIsOpen(true);
//         }
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 0);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     const scrollToSectionAfterNavigate = (sectionId) => {
//         navigate('/'); 
//         setTimeout(() => {
//             const element = document.getElementById(sectionId);
//             if (element) {
//                 element.scrollIntoView({ behavior: 'smooth' });
//             }
//         }, 0);
//     };

//     return (
//         <header id='header'>
//             <div className={`header ${isScrolled ? "scrolled" : ""}`}>
//                 <section className="hero">
//                     <img src={hero} alt="hulk" />
//                     <video src={video} loop autoPlay muted></video>
//                 </section>
//                 <div className={`overlay ${isOpen ? 'open' : ''} ${!isOpen && isAnimating ? 'close' : ''}`} id="myNav">
//                     <div className="overlay-content">
//                         <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('header'); }}>Anasayfa</span>
//                         <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('aboutUs'); }}>Hakkımda</span>
//                         <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('project'); }}>Projelerim</span>
//                         <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('background'); }}>Deneyimlerim</span>
//                         <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('skills'); }}>Yetkinliklerim</span>
//                         <span onClick={() => { toggleNav(); scrollToSectionAfterNavigate('contact'); }}>İletişim</span>
//                     </div>
//                 </div>
//                 <span className="openbtn" onClick={toggleNav}>
//                     {isOpen ? 'X' : '☰'}
//                 </span>
//                 <div className='logo'>
//                     <img src={logo} alt="logo" />
//                 </div>
//                 <div className='hello' data-aos="fade-right">
//                     <h1>Merhaba, <span>Ben Ayşenur !</span></h1>
//                 </div>
//                 <div className='paragraph'>
//                     <p> Ben sadece icat ederim. Sonra insanların gelip icadıma ihtiyaç duymasını beklerim.<br />
//                         "R. Buckminster Fuller" </p>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;
