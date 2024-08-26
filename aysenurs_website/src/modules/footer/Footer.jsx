import React, { useState } from 'react';
import './footer.scss'; // Stiller için CSS dosyasını import edin.
import { FaLinkedin } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:nurayse.duran@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Ad: ${formData.firstName} Soyad: ${formData.lastName}\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <footer id="contact">
            <div className='footer'>
            <div className='contact-info'>
                <span>Birlikte güzel projeler geliştirmek istiyorsanız bana ulaşın.</span>
                <hr />
                <b>ÇALIŞMALARIMIN DAHA FAZLASINI GÖRMEK İÇİN SOSYAL MEDYAMI ZİYARET EDİN:</b>
                <div className="social-media">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/aysenurduran/"><FaLinkedin /></a></li>
                        <li><a href="https://github.com/AysenurDuran"><FaGithub /></a></li>
                    </ul>
                </div>
                <div className='mail'>
                  <div className='mail-icon'>
                  <IoMdMailOpen />
                  </div>
                <div className='mail-text'>
                <b>E-Posta:</b>
                <p>nurayse.duran@gmail.com</p>
                </div>
                
                </div>
            </div>
            <div className='contact-form'>
                <span>Bana Mesaj Gönderin! </span>
                <form onSubmit={handleSubmit}>
                    <div className="form-group flex-group">
                        <div className='first-name'>
                        <input
                            type="text"
                            id="first-name"
                            name="firstName"
                            placeholder="Ad"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        </div>
                        <div className='last-name'>
                        <input
                            type="text"
                            id="last-name"
                            name="lastName"
                            placeholder="Soyad"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className='subject'>
                        <input className='input-subject'
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Konu"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        </div>
                        
                    </div>
                    <div className="form-group">
                        <div className='message'>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Mesaj"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit-btn">Mesaj Gönder</button>
                    </div>
                </form>
            </div>
            </div>
            {/* <hr /> */}
           
        </footer>
    );
};

export default Footer;
