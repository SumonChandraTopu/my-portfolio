import React from 'react';
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <footer id='footer'>
            <a href="#" className='footer_logo'>SUMON CHANDRA SHIL</a>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#service">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_socials">
                <a href=" https://www.facebook.com/SumonChandraForever/">
                    <BsFacebook />
                </a>
                <a href="https://github.com/SumonChandraTopu">
                    <BsGithub />
                </a>
                <a href="https://twitter.com/Sumon__Chandra">
                    <BsTwitter />
                </a>
                <a href="https://twitter.com/Sumon__Chandra">
                    <BsLinkedin />
                </a>
                
            </div>
            <div className="footer_copyright">
                <small>&copy; Copyright Sumon Chandra Shil 2022.</small>
            </div>
        </footer>
    );
};

export default Footer;