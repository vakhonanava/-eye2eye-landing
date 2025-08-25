// src/components/Contact.js
import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact"
      role="region"
      aria-labelledby="contact-title"
    >
      <div className="contact-inner">
        <p className="contact-eyebrow"></p>
        <h2 id="contact-title" className="contact-title">
          Get in Touch
        </h2>
        <p className="contact-sub">
          Interested in investing or partnering with us? Let’s shape the future
          of eye care together.
        </p>

        <div className="contact-cta">
          {/* Primary CTA — Calendly ან შენი form route */}
          <a
            className="btn btn-primary"
            href="mailto:eye2eyecompany@gmail.com" // ჩაანაცვლე რეალურით ან /#contact-form
            target="_blank"
            rel="noreferrer"
          >
            Email us
          </a>

          <a
            className="btn btn-primary"
            href="https://www.linkedin.com/company/eye2eye-company/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
