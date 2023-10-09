"use client";

import { heading, monospace } from "@/styles/fonts";
import Image from "next/image";
import styles from "./about.module.css";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Link from "next/link";

function About() {
  const [mounted, setMounted] = useState(false);


  const aboutText1 =
    "With a background in various programming languages and web technologies, I am actively seeking new opportunities to leverage my skills and creativity.";

  const aboutText2 =
    "In my spare time, I regularly attend the gym, am an avid golfer, and have built multiple computers. If you're looking for a versatile developer with varied interests and technical expertise, let's connect and explore exciting projects together.";

    const shouldReduceMotion = useReducedMotion();


  const reduceMotionVariant = {
    hidden: {
      opacity: 1,
      x:0,
      y:0
    },
    visible: {
      opacity: 1,
      x:0,
      y:0
    }
  }
  
    const aboutVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when it comes into view
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="about">
      <motion.div
        className={styles.aboutContainer}
        initial="hidden"
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={shouldReduceMotion ? reduceMotionVariant : aboutVariant}
        transition={{ duration: 1.5, delay: 0.1 }}
      >
        <h3 className={heading.className + " " + styles.aboutTitle}>
          <span className={monospace.className + " numberHeader"}>01.</span>
          About Me
        </h3>
        <div className={styles.imageContainer}>
          <Image
            className={styles.aboutImage}
            src={"/about.png"}
            alt="test"
            width={512}
            height={537}
          />
          <p className={monospace.className + " " + styles.imageCaption}>* Created with custom models, using <span className={styles.captionTech}>Stable Diffusion AI</span></p>
        </div>
        <div className={styles.aboutTextContainer}>
          <div className={styles.aboutText}>
            <p>
              {aboutText1}
            </p>
            <br />
            <p>
              {aboutText2}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
