"use client";

import { heading, monospace } from "@/styles/fonts";
import Image from "next/image";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function About() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme } = useTheme();
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
            src={
              currentTheme === "light" ? "/aboutLight.png" : "/aboutDark.png"
            }
            alt="test"
            width={512}
            height={589}
          />
        </div>
        <div className={styles.aboutText}>
          <p>
            I'm Ryan, a passionate software developer with a keen eye for
            creating seamless and innovative digital experiences. My journey in
            the tech world has led me to explore various programming languages
            and web technologies, equipping me with the skills to tackle diverse
            challenges. I'm currently seeking exciting opportunities to apply my
            expertise and creativity.
          </p>
          <br />
          <p>
            Beyond coding, I'm a gym enthusiast, avid gamer, and computer
            builder. Whether perfecting my golf swing or tackling virtual
            challenges, I thrive on precision, strategy, and problem-solving. My
            commitment to growth extends to exploring machine learning for
            innovative solutions. If you're looking for a versatile developer
            with diverse interests and technical expertise, let's connect and
            explore exciting projects together.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
