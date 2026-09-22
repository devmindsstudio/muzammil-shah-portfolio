import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "./Footer";
import styles from "../styles/Archive.module.css";
import ArchiveLogos from "./ArchiveLogos";
import Image from "next/image";
import Socials from "./Socials";
import ReturnHome from "./ReturnHome";
import { FiFolder, FiExternalLink, FiGithub } from "react-icons/fi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import {
  archiveFadeDownContainer,
  archiveFadeDownContainer2,
  archiveFadeDownContainer3,
  archiveFadeDownContainer4,
  archiveFadeDownContainer5,
  archiveFadeDown,
  archiveFadeRight,
  arrowFadeDownContainer,
  arrowFadeDown,
} from "../utils/Animations";

const data = {
  personalProjects: [
    {
      name: "Xyress",
      date: "2025",
      technologies: ["next.js", "web3", "blockchain", "ai Integration", "pbft-dpos", "responsive-ui"],
      site: "https://xyress.com/",
      github: "",
    },
    {
      name: "Makers Fund",
      date: "2025",
      technologies: ["three.js", "node.js", "react", "next.js", "3d-animation"],
      site: "https://www.makersfund.com/",
      github: "",
    },
    {
      name: "The DEBT Box",
      date: "2025",
      technologies: ["react", "next.js", "crypto", "blockchain"],
      site: "https://www.thedebtbox.com/",
      github: "",
    },
    {
      name: "Visa-Mex",
      date: "2025",
      technologies: ["react", "tailwind", "node.js", "express.js", "mongodb", "jwt", "cloudinary"],
      site: "https://dev.visasparamexicanos.com/",
      github: "",
    },
    {
      name: "BidCaribbean",
      date: "2025",
      technologies: ["react", "tailwind", "node.js", "express.js", "postgresql", "context-api", "pusher.js"],
      site: "https://lux-cars-production.vercel.app/",
      github: "",
    },
    {
      name: "RFID SMRT POS",
      date: "2025",
      technologies: ["react", "tailwind", "node.js", "express.js", "mongodb", "jwt", "arduino", "railway"],
      site: "https://visusctrl.com/",
      github: "",
    },
    {
      name: "Noshly",
      date: "2025",
      technologies: ["react", "next.js", "node.js", "rest-api", "responsive-ui", "community"],
      site: "https://noshly.io/",
      github: "",
    },
    {
      name: "Knnect.ai",
      date: "2025",
      technologies: ["rag", "kag", "llm", "vector-database", "ai", "web-platform"],
      site: "https://knnect.ai/",
      github: "",
    },
    {
      name: "JobGeniusAI",
      date: "2025",
      technologies: ["react", "next.js", "node.js", "express.js", "mongodb", "ai", "interview", "resume", "seo"],
      site: "https://job-genius-ai-beta.vercel.app/",
      github: "",
    },
    {
      name: "InfoDart",
      date: "2025",
      technologies: ["react", "node.js", "mongodb", "real-time", "data-visualization"],
      site: "https://www.infodartglobal.com/",
      github: "",
    },
  ],
  bloomtechPRs: [],
  bloomtechProjects: [],
  bloomtechSprints: [],
};

const Archive = () => {
  const [isDark, setIsDark] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(window.localStorage.getItem("theme"));
    }
  }, []);

  const labels = ["", "Name", "Category", "Technologies", "Link"];

  const handleBack = () => router.push("/projects/makersfund");
  const handleForward = () => router.push("/");

  return (
    <div className={isDark === "dark" ? styles.fulldark : styles.fulllight}>
      <div className={styles.container}>
        <div className={styles.archivecontainer}>
          <div className={styles.headercontainer}>
            <motion.div variants={archiveFadeRight} className={styles.titlecontainer}>
              <h1 className={styles.title}>Project Archive</h1>
              <p className={styles.about}>A record of the work I&apos;ve done.</p>
            </motion.div>
            <motion.div variants={arrowFadeDownContainer} className={styles.arrowcontainer}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={arrowFadeDown}
                onClick={handleBack}
                className={isDark === "dark" ? styles.backdark : styles.backlight}
              >
                <BsArrowLeftShort fontSize={35} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                variants={arrowFadeDown}
                onClick={handleForward}
                className={isDark === "dark" ? styles.forwarddark : styles.forwardlight}
              >
                <BsArrowRightShort fontSize={35} />
              </motion.div>
            </motion.div>
          </div>

          <div className={styles.archive}>
            <motion.div variants={archiveFadeDownContainer} className={styles.labelcontainer}>
              {labels.map((label, i) => {
                if (label === "Category" || label === "Technologies") {
                  return (
                    <motion.div
                      variants={archiveFadeDown}
                      className={label === "Category" ? styles.categorylabel : styles.techlabel}
                      key={i}
                    >
                      {label}
                    </motion.div>
                  );
                } else {
                  return (
                    <motion.div variants={archiveFadeDown} className={styles.label} key={i}>
                      {label}
                    </motion.div>
                  );
                }
              })}
            </motion.div>

            <motion.div variants={archiveFadeDownContainer2} className={styles.projectcontainer}>
              {data.personalProjects.map((project, i) => {
                return (
                  <motion.div variants={archiveFadeDown} key={i} className={styles.project}>
                    <FiFolder fontSize={22} />

                    {/* <p className={styles.date}>{project.date}</p> */}
                    <h1 className={styles.name}>{project.name}</h1>
                    <p className={styles.category}>Personal</p>

                    <div className={styles.technologies}>
                      {project.technologies.map((tech, i) => {
                        return <p key={i}>{tech}</p>;
                      })}
                    </div>

                    <div className={styles.link}>
                      <a
                        href={project.site}
                        rel="noreferrer"
                        target="_blank"
                        className={isDark === "dark" ? styles.sitedark : styles.sitelight}
                      >
                        <FiExternalLink fontSize={22} />
                      </a>
                      {project.github && (
                        <a
                          href={project.github}
                          rel="noreferrer"
                          target="_blank"
                          className={isDark === "dark" ? styles.githubdark : styles.githublight}
                        >
                          <FiGithub fontSize={22} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      <Footer dark={isDark === "dark"} links={false} />
      <ReturnHome isDark={isDark} />
      <Socials delay={false} isDark={isDark} />
    </div>
  );
};

export default Archive;
