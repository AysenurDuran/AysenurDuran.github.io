import React from 'react';
import './homePage.scss'
import resim from './img/fotograf.jpeg'
import resim1 from "./img/background1.svg"
import resim2 from "./img/background2.svg"
import resim3 from "./img/background3.svg"

import icon from "./img/icon.svg"
import rsm from "./img/software.jpg"
import rsm2 from "./img/software2.jpg"
import rsm3 from "./img/software3.jpg"
import rsm4 from "./img/software4.jpg"
import rsm5 from "./img/software5.jpg"
import rsm6 from "./img/software6.jpg"
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <>
    {/* --------------------------AboutUs-------------------------------- */}

    <div id="aboutUs" className={`about-us ${window.innerWidth <= 768 ? 'about-us-column' : ''}`}>
      <div className='text'>
      <h2>Ayşenur Duran Hakkında</h2>
      <p> Bilişime olan ilgim lise yıllarımda başladı. Anadolu Meslek Lisesi'nde Bilişim Teknolojileri/Web Programcılığı üzerine eğitim aldım ve bu alandaki lisans eğitimimi tamamladım. Üniversitemiz uygulama ağırlıklı bir okul olduğu için, geliştirdiğimiz projeler ve yaptığım stajlar sayesinde teorik bilgilerimi pratiğe dökme fırsatı buldum. Kendimi daha da geliştirmek adına şu anda bir bilişim eğitimi projesinde yer almaktayım.</p>
      </div>
  <div className="image animate__animated animate__fadeInRight">
  <img src={resim} alt="resim" />
  </div>
    </div>

{/* ------------------background---------------- */}

    <div id="background" className='background'>
      <div className='title'>
      <h2>Eğitimlerim & </h2>
      <h2>Deneyimlerim</h2>
      </div>
      
      <div className='card'>
<div className='background-education-card'>
<div className='card-first'>
          <img className='animate__animated animate__zoomIn' src={resim1} alt="image" />
          <h3>Mehmet Akif Ersoy</h3>
          <h3>Üniversitesi</h3>
          <hr />
          <h4>Yönetim Bilişim Sistemleri</h4>
          <p>Lisans, 2011-2016</p>
        </div>

        <div className='card-second'>
          <img className='animate__animated animate__zoomIn' src={resim2} alt="image" />
          <h3>Bilge Adam Boost + Yıldız</h3>
          <h3>Yazılımcı Geliştirme Programı</h3>
          <hr />
          <h4>Eğitim + Staj</h4>
          <p>11.2022-09.2023</p>
        </div>
</div>
        
<div className='background-business-card'>
<div className='card-third'>
          <img className='animate__animated animate__zoomIn' src={resim3} alt="image" />
          <h3>Final Eğitim Kurumları</h3>
          <hr />
          <h4>Muhasebe ve İdari işler Uzmanı </h4>
          <p>09.2021-11.2022</p>
        </div>

        <div className='card-fourth'>
        <img className='animate__animated animate__zoomIn' src={resim3} alt="image" />
          <h3>Etimesgut Belediyesi</h3>
          <hr />
          <h4>Bilgi İşlem Stajyeri</h4>
          <p>01.2015-06.2015</p>
        </div>

        <div className='card-fifth'>
        <img className='animate__animated animate__zoomIn' src={resim3} alt="image" />
          <h3>Ankara Trt Genel Müdürlüğü</h3>
          <hr />
          <h4>Stajyer</h4>
          <p>09.2008-06.2009</p>
        </div>
</div>
       
      </div>
    </div>

    {/* ----------------project--------------------- */}

    <div id="project" className='projects'>
       <div className='projects-title'>
        <h2>Projelerim</h2>
        <p>Ekip halinde veya bireysel çalıştığım projelerimden  bazıları</p>
       </div>
       <div className='projects-card'>

        <div className='card-first'>
            <img className='image' src={rsm} alt="" />
            <div className='text-container'>
              <h4>Bilge Adam Kampüs</h4>
              <h4></h4>
              <hr />
              <p>Detaylı görmek için <Link to ="/projectDetail#timelineElement-3">tıklatınız</Link> </p>
            </div>
        </div>

        <div className='card-first'>
            <img className='image' src={rsm5} alt="" />
            <div className='text-container'>
              <h4>İşletme Web Sitesi</h4>
              <hr />
              <p>Detaylı görmek için <Link to ="/projectDetail#timelineElement-1">tıklatınız</Link> </p>
            </div>
        </div>

        <div className='card-first'>
            <img className='image' src={rsm3} alt="" />
            <div className='text-container'>
              <h4>İnsan Kaynakları Yönetim Programı</h4>
              <hr />
              <p>Detaylı görmek için <Link to ="/projectDetail#timelineElement-4">tıklatınız</Link> </p>
            </div>
        </div>

        <div className='card-first'>
            <img className='image' src={rsm2} alt="" />
            <div className='text-container'>
              <h4>Kişisel Web Sayfası</h4>
              <hr />
              <p>Detaylı görmek için <Link to ="/projectDetail#timelineElement-2">tıklatınız</Link> </p>
            </div>
        </div>
        <div className='card-first'>
            <img className='image' src={rsm4} alt="" />
            <div className='text-container'>
              <h4>Blog Sitesi</h4>
              <hr />
              <p>Detaylı görmek için <Link to ="/projectDetail#timelineElement-5">tıklatınız</Link> </p>
            </div>
        </div>

        <div className='card-first'>
            <img className='image' src={rsm6} alt="" />
            <div className='text-container'>
              <h4>Diyet Takip Projesi</h4>
              <hr />
              <p>Detaylı görmek için <Link to ="/projectDetail#timelineElement-6">tıklatınız</Link> </p>
            </div>
        </div>

       </div>
    </div>

    {/* -------------------------Skills------------------------------- */}

    <div id='skills' className='skills'>
        <div className='skills-title'>
    <h2>Yetkinliklerim </h2>
    </div>
    <div className='card'>

        <div className='card-one'>
        <h3>Frameworks</h3>
        <hr />
        <p>"ASP.Net WebApi",  </p>
        <p> "ASP.Net MVC",</p>
        <p>".Net Core",</p>
        <p>"React.js"</p>
        </div>

        <div className='card-two'>
        <h3>ORM</h3>
        <hr />
        <p>"Entity Framework", </p>
        <p>"Entity Framework Core"</p>
        </div>

        <div className='card-five'>
        <h3>Programming Languages</h3>
        <hr />
        <p>"C#", </p>
        <p>"JavaScript"</p>
        </div>

        <div className='card-six'>
        <h3>Database Technologies</h3>
        <hr />
        <p>"Microsoft SQL", </p>
        <p>"Postgre SQL"</p>
        </div>

        <div className='card-three'>
        <h3>Tools</h3>
        <hr />
        <h4>~Databases~</h4>
        <p>"MS SQL Server", </p>
        <p>"Azure SQL Database"</p>
        <h4>~IDE~</h4>
        <p>"Visual Studio",</p>
        <p>"Visual Studio Code"</p>
        <h4>~Api Testing Communication~</h4>
        <p>"Postman", </p>
        <p>"SwaggerUI"</p>
        <h4>~Version Control~</h4>
        <p>"Github", </p>
        <p>"Git",</p>
        <p>”Azure TFS”</p>
        </div>

        <div className='card-four'>
        <h3>Web Design Tools</h3>
        <hr />
        <p>"Html",</p>
        <p>"CSS",</p>
        <p>”SCSS”,</p>
        <p>"Boostrap",</p>
        <p>"React Table"</p>
        </div>

        <div className='card-seven'>
        <h3>Software Project Development</h3>
        <hr />
        <h4>~Methodology~</h4>
        <p>"Agile Scrum"</p>
        <h4>~DevOps~</h4>
        <p>"Microsoft Azure DevOps"</p>
        </div>

    </div>
    </div>
    </>
  );
}

export default HomePage;
