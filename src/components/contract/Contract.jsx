import React, { useRef } from "react";
import "./Contract.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contract = () => {
  const form = useRef();

  const sentEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_74tka7j",
        "template_9zfxnzs",
        form.current,
        "user_E4YQZfabUbW66EvBPNHds"
      )
      .then((result) => {
        if (result.text === "OK") {
          alert("Success");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(form);
  };
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact_container">
        <div className="contact_potions">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>topu199041@gmail.com</h5>
            <a target="_blank" href="mailto:topu199041@gmail.com">
              Sent a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Sumon Chandra (Topu)</h5>
            <a target="_blank" href="https://m.me/SumonChandraForever/">
              Sent a message
            </a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+8801722077442</h5>
            <a
              target="_blank"
              href="https://api.whatsapp.com/sent?phone+8801722077442"
            >
              Sent a message
            </a>
          </article>
        </div>
        {/* ====== End of contact option ======= */}
        <form ref={form} onSubmit={sentEmail}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
          />
          <input type="email" name="email" required placeholder="Your email" />
          <textarea
            name="message"
            required
            placeholder="Message"
            cols="27"
            rows="
            5"
          ></textarea>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Contract;
