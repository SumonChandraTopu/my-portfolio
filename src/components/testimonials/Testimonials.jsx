import React from "react";
import "./Testimonials.css";
import client from "../../assets/player-3.png";

// import Swiper core and required modules
import {  Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonial</h2>

      <Swiper 
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
    //    scrollbar={{ draggable: true }}
    //    onSwiper={(swiper) => console.log(swiper)}
    //    onSlideChange={() => console.log('slide change')}
      className="container testimonial_container">
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={client} alt="" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos autem
            nihil nam voluptate veniam, hic debitis. Asperiores hic quasi
            voluptates perferendis inventore porro exercitationem totam corporis
            ab minima, esse molestias!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={client} alt="" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos autem
            nihil nam voluptate veniam, hic debitis. Asperiores hic quasi
            voluptates perferendis inventore porro exercitationem totam corporis
            ab minima, esse molestias!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={client} alt="" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos autem
            nihil nam voluptate veniam, hic debitis. Asperiores hic quasi
            voluptates perferendis inventore porro exercitationem totam corporis
            ab minima, esse molestias!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={client} alt="" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos autem
            nihil nam voluptate veniam, hic debitis. Asperiores hic quasi
            voluptates perferendis inventore porro exercitationem totam corporis
            ab minima, esse molestias!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={client} alt="" />
          </div>
          <h5 className="client_name">Ernest Achiever</h5>
          <small className="client_review">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos autem
            nihil nam voluptate veniam, hic debitis. Asperiores hic quasi
            voluptates perferendis inventore porro exercitationem totam corporis
            ab minima, esse molestias!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
