import React, { useEffect } from 'react';
import "./projectDetail.scss";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { LiaBusinessTimeSolid } from "react-icons/lia";
import 'react-vertical-timeline-component/style.min.css'; 

const events = [
  {
      id: 1,
      start: new Date('2024-09-01'),
      end: new Date('2025-06-01'),
      position: 'İşletme Web Sitesi',
      company: '2024',
      description: 'OD Eğitim şirketinden gelen talepler doğrultusunda, JavaScript, HTML, CSS ve React.js kütüphanesi kullanarak geliştirdiğim projeye devam ediyorum. <br /> (Web Sitesi linki: <a href=" https://odegitim.com.tr/">Tıklayın </a>) '
  },
  {
    id: 2,
    start: new Date('2024-09-01'),
    end: new Date('2025-06-01'),
    position: 'Kişisel Web Sayfası',
    company: '2024',
    description: 'Kişisel bilgilerim ve projelerim hakkında bilgiler verdiğim ve düzenli olarak güncellediğim kişisel web sayfam.'
},
  {
      id: 3,
      start: new Date('2024-09-01'),
      end: new Date('2025-06-01'),
      position: 'Bilge Adam Kampüs',
      company: '2023',
      description: 'Bilge Adam Teknoloji bünyesinde, ekip olarak Agile Scrum metodolojisini kullanarak .NET Web API ve React.js ile bir ön yüz tasarım projesi gerçekleştirdik. Bu proje, BilgeAdam Akademi ve özel okullar için bir öğrenci, öğretmen ve ders yönetim sistemi olarak tasarlandı. Projede front-end ekibinde yer aldım ve Figma üzerinden UI/UX tasarımlarının oluşturulmasında ve kodlama süreçlerinde aktif rol aldım.'
  },
  {
      id: 4,
      start: new Date('2024-09-01'),
      end: new Date('2025-06-01'),
      position: 'İnsan Kaynakları Yönetim Programı',
      company: '2023',
      description: 'Bu projeyi Onion Architecture mimarisini kullanarak geliştirdik ve C# ile JavaScript programlama dillerinden faydalandık. Front-end tarafında HTML5, CSS ve Bootstrap gibi teknolojileri kullanırken, back-end kısmında Identity Framework, ASP.NET Core altyapısı ve MVC Design Pattern uyguladık. Takım arkadaşlarımla birlikte Azure DevOps kullanarak bu süreci başarılı bir şekilde yönettik. Ayrıca MSSQL veritabanı yönetim sistemi kullanarak bir Cloud Database oluşturduk. Projede Admin, Yönetici ve Çalışan olmak üzere üç farklı kullanıcı rolü bulunmaktadır. <br /> (Github linki: <a href=" https://github.com/AysenurDuran/HumanResourcesProject.git/">Tıklayın </a>)'
  },
  {
      id: 5,
      start: new Date('2024-09-01'),
      end: new Date('2025-06-01'),
      position: 'Blog Sitesi',
      company: '2023',
      description: 'ASP.Net Core MVC ve Entity Framework Core teknolojisi kullanarak Code First yaklaşımıyla geliştirilmiş bir blog sitesidir. Sitede crud işlemleri uygulanmıştır. Kullanıcı paneli sayesinde makaleler yayınlanabilmektedir.  <br /> (Github linki: <a href=" https://github.com/AysenurDuran/AysenursBlog.git/">Tıklayın </a>)'
  },
  {
    id: 6,
    start: new Date('2024-09-01'),
    end: new Date('2025-06-01'),
    position: 'Diyet Takip Projesi',
    company: '2022',
    description: 'Masaüstü bir uygulama olarak hazırlanmıştır. Kullanıcı bilgilerini dikkate alarak günlük alınması gereken kaloriyi hesaplayıp tüketilen besinlerden ne kadar kalori alındığını hesaplayan bir uygulamadır.  <br /> (Github linki: <a href=" https://github.com/AysenurDuran/DietaProject.git/">Tıklayın </a>)'
},
  // Diğer olaylar buraya gelecek
];

const formatDate = (date) => {
  return date.toLocaleDateString('tr-TR', { year: 'numeric', month: 'short' });
};
export const ProjectDetail = () => {
  useEffect(() => {
    const elementId = window.location.hash.substring(1); // URL'deki hash kısmı
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}, []);
return (
  <div className='ProjectDetail'>
 <VerticalTimeline>
        {events.map((data, index) => (
            <VerticalElement key={`${data.id}`} data={data} />
        ))}
    </VerticalTimeline>
  </div>
   
);
};

const VerticalElement = ({ data }) => {
return (
    <VerticalTimelineElement
    id={`timelineElement-${data.id}`}  // ID ekleme
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(49,64,40)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(155,72,25)' }}
    // date={`${formatDate(data.start)} - ${data.end ? formatDate(data.end) : "Günümüz"}`}
    iconStyle={{ background: '#9B4819', color: '#fff' }}
        // İkon için gerekli bileşeni buraya ekleyebilirsiniz
        icon={<LiaBusinessTimeSolid />}
    >
        <h3 className="vertical-timeline-element-title">{data.position}</h3>
        <h4 className="vertical-timeline-element-subtitle">{data.company}</h4>
        <p dangerouslySetInnerHTML={{ __html: data.description }} />
    </VerticalTimelineElement>
);
}
