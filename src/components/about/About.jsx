import React from "react";
import "./About.css";
import aboutMe from "../../assets/sumon.png";
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
              <small>1.5+ years working</small>
            </article>
            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>
            <article className="about_card">
              <CgWebsite className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Projects</small>
            </article>
          </div>
          <p>
            My name is Sumon Chandra Shil. I am a Front-End developer. I spend my whole day with HTML, CSS,
            JavaScript etc technology. Creating gorgeous and awesome web pages
            is something I use in one of the most popular JavaScript library
            called React. The second tool I mention is Redux, which I use to
            maintain React's state management and to easily create
            eCommerce-type sites. I have done some of my personal projects as
            well as client projects. Every day I face some new challenges in my
            coding experience. The challenges and errors that give me the
            motivation to learn something new give me the kick I need. Google
            and YouTube are my go-to sources for finding those solutions to
            these problems. For me, Youtube helps me a lot more than Google to
            find any solutions. Finally, I enjoy coding a lot and I'm passionate
            about it.
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
