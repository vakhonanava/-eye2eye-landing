// src/components/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-label="Get in touch">
      <div className="contact__inner">
        <p className="contact__kicker">Let’s talk</p>
        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__subtitle">
          Interested in investing or partnering with us? Let’s shape the future
          of eye care together.
        </p>

        <div className="contact__actions">
          <a
            className="btn btn--primary"
            href="mailto:eye2eyecompany@gmail.com"
            aria-label="Email Eye2Eye"
          >
            Contact Us
          </a>

        </div>
      </div>
    </section>
  );
}
