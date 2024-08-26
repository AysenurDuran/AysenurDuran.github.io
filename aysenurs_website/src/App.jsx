import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss'
import 'animate.css';
import 'aos/dist/aos.css'; // AOS stil dosyası
import AOS from 'aos'; // AOS JavaScript dosyası
import Header from './modules/header/Header';
import Nav from './modules/nav/Nav';
import HomePage from './modules/homePage/HomePage';
import Footer from './modules/footer/Footer';
import { ProjectDetail } from './modules/projectDetails/ProjectDetail';
import ScrollToTopButton from './modules/scrollToTop/ScrollToTopButton';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animasyon süresi
      once: false , // animasyon bir kez tetiklensin
    easing: 'ease-in-out', // animasyon kolaylaştırması
    mirror: false, // kaydırma geri yapıldığında animasyonları tekrar etme
    }); AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Nav/>
        <main>
          <Routes>
          <Route path="/" element={<HomePage/>}/>  
          <Route path="projectDetail" element={<ProjectDetail/>}/> 
          </Routes>
        </main>
        <ScrollToTopButton />
    <Footer/>
      </div>
    </Router>
  )
}

export default App
