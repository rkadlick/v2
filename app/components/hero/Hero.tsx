"use client";

import React from "react";
import Nav from "./Nav";
import Rocket from "./Rocket";
import Image from "next/image";
import { heading, monospace, subheading } from "@/styles/fonts";
import styles from "./hero.module.css";
import useScrollDirection from "../../hooks/useScrollDirection";
import { motion } from "framer-motion";

function Hero() {
  const greeting = "Hey, my name is";
  const name = "Ryan Kadlick.";
  const title = "I create unique designs and applications.";
  const description =
    "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm persuing a new adventure.";

  const greetVariant = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  const sentence = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0
    },
  };

  const image = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <header className={styles.hero}>
      <Nav />
      <section id="intro" className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={styles.introText}>
            {greeting.split("").map((char, index) => {
              const delay = index * 0.05;
              return (
                <motion.span
                  key={index}
                  className={monospace.className + " " + styles.greeting}
                  initial="hidden"
                  animate="visible"
                  variants={greetVariant}
                  transition={{ duration: 1, delay }}
                >
                  {char}
                </motion.span>
              );
            })}
            <motion.h1
              className={heading.className + " " + styles.introName}
              initial="hidden"
              animate="visible"
              variants={sentence}
              transition={{ duration: 2, delay: 0.9 }}
            >
              {name}
            </motion.h1>
            <motion.h2
              className={subheading.className + " " + styles.introTitle}
              initial="hidden"
              animate="visible"
              variants={sentence}
              transition={{ duration: 2, delay: 1.1 }}
            >
              {title}
            </motion.h2>
            <motion.p
              className={styles.introDescription}
              initial="hidden"
              animate="visible"
              variants={sentence}
              transition={{ duration: 2, delay: 1.3 }}
            >
              {description}
            </motion.p>
          </div>
          <motion.div
            className={styles.introImage}
            initial="hidden"
            animate="visible"
            variants={image}
            transition={{ duration: 2, delay: 1 }}
          >
            <Rocket />
          </motion.div>
        </div>
      </section>
    </header>
  );
}

export default Hero;
