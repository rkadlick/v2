import React from "react";
import { heading, text, monospace } from "@/styles/fonts";
import styles from "./contact.module.css";
import Logo from "./Logo";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section id="contact">
      <div className={styles.contactContainer}>
        <h3 className={heading.className + " " + styles.contactTitle}>
          <span className={monospace.className + " numberHeader"}>04.</span>
          Contact
        </h3>
        <div 
          className={styles.contactLogo}
        >
          <Logo />
        </div>
        <div className={styles.formContainer}>
          <p className={styles.contactText}>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
  }

export default Contact;
