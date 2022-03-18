import React from "react";
import "./Portfolio.css";
import portfolioImg from "../../assets/portfolio.jpg";
import honda from "../../assets/portfolio/honda.png";
import barber from "../../assets/portfolio/barber.png";
import ecommerce from "../../assets/portfolio/ecommerce.png";
import needwork from "../../assets/portfolio/needwork.png";
import golden from "../../assets/portfolio/golden.png"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={needwork} alt="" />
          </div>
          <h3>Needwork Agency</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/SumonChandraTopu/needwork" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://needwork.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={barber} alt="" />
          </div>
          <h3>Barber Shop</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/SumonChandraTopu/Selon_website" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://barbershophare.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={honda} alt="" />
          </div>
          <h3>Bike Shop 2</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/SumonChandraTopu/honda-crb" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://bike-shop2.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={golden} alt="" />
          </div>
          <h3>Golden Academy</h3>
          <div className="portfolio_item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://goldenacademe.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={ecommerce} alt="" />
          </div>
          <h3>EXKO eCommerce ( Not Responsive )</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/SumonChandraTopu/exkoo-ecommerce" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://exkoo.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={portfolioImg} alt="" />
          </div>
          <h3>Upcoming</h3>
          <div className="portfolio_item-cta">
            <a href="#" className="btn" target="_blank">
              Github
            </a>
            <a
              href="#"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
