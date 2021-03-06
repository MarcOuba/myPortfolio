import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import{BsLinkedin} from 'react-icons/bs'
import './footer.css';

function Footer() {
  return (
    <footer>
        <a href="#" className='footer__logo'>MARC</a>
        <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>

        </ul>
        <div className="footer__socials">
            <a href="https://www.facebook.com/marc.ouba.58/" target="_blank"><FaFacebookF /></a>
            <a href="https://www.instagram.com/marc_ouba/" target="_blank"><FiInstagram /></a>
            <a href="https://www.linkedin.com/in/marc-ouba-4544691b9/" target="_blank"><BsLinkedin /></a>
        </div>
        <div className="footer__copyright">
            <small>&copy; Marc Ouba all rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer