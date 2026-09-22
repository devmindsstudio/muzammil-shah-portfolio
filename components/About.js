import React, { useRef } from "react";
import styles from "../styles/About.module.css";
import { MdOutlinePersonOutline } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";
import { scrollRevealFadeUp, initialScrollRevealFadeUp } from "../utils/Animations";

const About = ({ dark }) => {
  const aboutContainer = useRef(null);
  const isInView = useInView(aboutContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  return (
    <motion.div
      id="about"
      className={styles.aboutcontainer}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={aboutContainer}
    >
      <div className={styles.intro}>
        <MdOutlinePersonOutline size={50} className={dark ? styles.icondark : styles.iconlight} />
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>01.</span>About Me
        </h1>
      </div>
      <div className={dark ? styles.textcontainerdark : styles.textcontainerlight}>
        <p className={styles.text}>
          I&apos;m Muzammil Shah, a Senior Full-Stack Developer with 6+ years of experience and over 20+ products delivered. 
          I specialize in building scalable, user-focused web applications and products, creating seamless digital experiences 
          through robust frontend and backend development.
        </p>
        <p className={styles.text}>
          My expertise spans modern web technologies including <strong>HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, Next.js, 
          Angular, Redux, Node.js, Express.js, Python, MongoDB, and MySQL</strong>. I also have experience with <strong>APIs, 
          cloud services (AWS), DevOps practices (Docker & CI/CD), version control (Git & GitHub), authentication & security, 
          testing and debugging, Agile project management, and design tools like Figma</strong>. 
          By combining frontend creativity with backend reliability, I deliver robust, scalable solutions that enhance user experiences.
        </p>
        <p className={styles.text}>
          Over the years, I&apos;ve partnered with leading brands and agencies, implementing complex functionalities, 
          integrating apps and APIs, and crafting custom features tailored to unique business needs. Every project 
          I work on emphasizes optimized performance, clean code, and user-focused design.
        </p>
        <p className={styles.lasttext}>
          With a strong problem-solving mindset, I approach challenges with technical precision and creative solutions—always 
          committed to figuring things out and never giving up. Check out some of my most impactful skills and projects below!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
