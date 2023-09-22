"use client";

import { heading, monospace } from "@/styles/fonts";
import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function About() {
	const [mounted, setMounted] = useState(false)
    const { systemTheme, theme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme;

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
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="about">
      <motion.div
        className={styles.aboutContainer}
        initial="hidden"
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        variants={aboutVariant}
        transition={{ duration: 1.5, delay: 0.1 }}
      >
        <h3 className={heading.className + " " + styles.aboutTitle}>
          <span className={monospace.className + " numberHeader"}>01.</span>
          About Me
        </h3>
        <div className={styles.imageContainer}>
          <Image
            className={styles.aboutImage}
            src={currentTheme === "light" ? '/aboutLight.png' : '/aboutDark.png'}
            alt="test"
            width={512}
            height={589}
          />
        </div>
        <div className={styles.aboutText}>
          <p>
            As a lifelong musician, before tech I taught guitar and voice, ran a
            rehearsal studio, and booked concerts in NYC and beyond.
          </p>
          <p>
            In 2020, I took a leap and trained in modern app development at
            Fullstack Academy. I quickly absorbed new concepts, while bringing
            ambitious ideas and a positive attitude to every challenge.
          </p>
          <p>
            When I&apos;m not coding, I&apos;m usually doing yoga, testing out a
            new recipe, or writing a musical parody on guitar.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
