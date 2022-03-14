import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";


const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
            <a href="https://github.com" target="_blank"><BsGithub /></a>
            <a href="https://twitter.com" target="_blank"><BsTwitter /></a>
            <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            
        </div>
    );
};

export default HeaderSocial; 