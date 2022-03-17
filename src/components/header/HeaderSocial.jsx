import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_socials">
      <a href="https://www.facebook.com/SumonChandraForever/" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://github.com/SumonChandraTopu" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/Sumon__Chandra" target="_blank">
        <BsTwitter />
      </a>
      <a href="https://www.linkedin.com/in/sumonchandra/" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocial;
