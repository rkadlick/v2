'use client'

import React from "react";
import { heading, text, monospace } from "@/styles/fonts";
import styles from "./contact.module.css";
import Logo from "./Logo";
import ContactForm from "./ContactForm";
import { motion, useReducedMotion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

function Contact() {

  const shouldReduceMotion = useReducedMotion();


  const reduceMotionVariant = {
    hidden: {
      opacity: 1,
      x: 0,
      y: 0
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0
    }
  }

  const containerVariant = {
		hidden: { 
		  opacity: 0,
		  y: 50 },
		visible: { 
		  opacity: 1,
		  y: 0 },
	};

    const [ref, inView] = useInView({
      triggerOnce: true, // Animation triggers only once when it comes into view
    });

  return (
    <section 
      id="contact"
      className={styles.contactSection}
    >
      <motion.div 
        className={styles.contactContainer}
        initial="hidden"
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={shouldReduceMotion ? reduceMotionVariant : containerVariant}
        transition={{ duration: 1, delay: 0.3}}
      >
        <h3 className={heading.className + " " + styles.contactTitle}>
          <span className={monospace.className + " numberHeader"}>04.</span>
          Contact
        </h3>
        <div className={styles.formContainer}>
          <p className={styles.contactText}>
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <ContactForm />
        </div>
        <div 
          className={styles.contactLogo}
        >
          <Logo />
        </div>
      </motion.div>
    </section>
  );
  }

export default Contact;
