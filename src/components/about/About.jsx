import React from "react";
import "./About.css";
import aboutMe from "../../assets/sumon.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const About = () => {
  return (
    <section id="about">
      <h5>Get in know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={aboutMe} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>100+ Clients</small>
            </article>
            <article className="about_card">
              <CgWebsite className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
            dignissimos corporis distinctio cumque placeat expedita optio vel
            illo in neque reprehenderit dolore accusantium itaque, est iure
            cupiditate. Nam id iusto, iure tempore sequi cupiditate tempora
            ullam autem animi qui. Porro.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
