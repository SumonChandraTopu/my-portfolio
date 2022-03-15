import React, { useState } from "react";
import "./Nav.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { MdContacts } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
        href="#"
      >
        <FaHome />
      </a>
      <a
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")}
        href="#about"
      >
        <FaUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <FaBook />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <RiServiceFill />
      </a>
      <a
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
        href="#contact"
      >
        <MdContacts />
      </a>
    </nav>
  );
};

export default Nav;
