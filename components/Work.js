import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import styles from "../styles/Work.module.css";
import { CgBriefcase } from "react-icons/cg";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import {
  initialScrollRevealFadeUp,
  scrollRevealFadeUp,
  arrowHover,
  arrowTap,
} from "../utils/Animations";
import PortfolioLogos from "./PortfolioLogos";

const Work = ({ dark }) => {
  const workContainer = useRef(null);
  const isInView = useInView(workContainer);
  const animationControl = useAnimation();

  isInView ? animationControl.start(scrollRevealFadeUp) : "";

  return (
    <motion.div
      id="work"
      className={styles.container}
      initial={initialScrollRevealFadeUp}
      animate={animationControl}
      ref={workContainer}
    >
      <div className={styles.intro}>
        <div className={dark ? styles.icondark : styles.iconlight}>
          <CgBriefcase size={50} />
        </div>
        <h1 className={dark ? styles.titledark : styles.titlelight}>
          <span className={dark ? styles.numberdark : styles.numberlight}>03.</span>What I&apos;ve
          Worked On
        </h1>
      </div>
      <div className={styles.allworkcontainer}>
        <div className={dark ? styles.sprixlworkcontainerdark : styles.sprixlworkcontainerlight}>
          <div className={styles.logo}>
            <div className={styles.logo}>
              <PortfolioLogos.JobGeniusAI />
            </div>
          </div>
          <p className={styles.sprixlprojecttitle}>JobGeniusAI</p>
          <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                JobGeniusAI is a <strong>career growth platform</strong> built with the <strong>MERN stack</strong> and <strong>Next.js</strong>. It empowers users with <strong>AI-driven tools</strong> for <strong>personalized guidance</strong>, <strong>smart interview prep</strong>, <strong>industry insights</strong>, and <strong>automated resume building</strong>—all within a smooth, <strong>SEO-optimized experience</strong>.
              </p>
          </div>
          <Link href="https://job-genius-ai-beta.vercel.app/" target="_blank" rel="noreferrer">
            <motion.div
              whileHover={arrowHover}
              whileTap={arrowTap}
              className={dark ? styles.arrowdark : styles.arrowlight}
            >
              <BsArrowRightShort fontSize={40} />
            </motion.div>
          </Link>
          <div className={styles.linkscontainer}>
            <a
              className={dark ? styles.linksdark : styles.linkslight}
              href="https://job-genius-ai-beta.vercel.app/"
              rel="noreferrer"
              target="_blank"
            >
              <FiExternalLink fontSize={22} />
            </a>
          </div>
        </div>
        <div className={styles.row}>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.MakersFund />
            </div>
            <p className={styles.projecttitle}>Makers Fund</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                Makers Fund is a global VC platform empowering entrepreneurs in interactive entertainment and tech. We accelerate industry growth from Asia out, providing capital, strategic network, and guidance to the shapers of tomorrow.
              </p>
            </div>
            <Link href="https://www.makersfund.com/">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://www.makersfund.com/"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.DEBT />
            </div>
            <p className={styles.projecttitle}>D.E.B.T</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                The DEBT Box is a decentralized platform bridging crypto and commodities. It provides asset-backed tokens and digital mining opportunities, allowing users to invest directly in real-world resource projects for long-term growth.
              </p>
            </div>
            <Link href="https://www.thedebtbox.com/">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://www.thedebtbox.com/"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.knnect />
            </div>
            <p className={styles.projecttitle}>Knnect</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                Knnect.ai is the AI learning platform featuring personalized, 24/7 virtual tutors. It adapts to your pace and goals, using advanced retrieval techniques to deliver tailored, context-aware explanations, hints, and feedback.
              </p>
            </div>
            <Link href="https://knnect.ai/">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://knnect.ai/"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
          <div className={dark ? styles.workcontainerdark : styles.workcontainerlight}>
            <div className={styles.logo}>
              <PortfolioLogos.XYRESS />
            </div>
            <p className={styles.projecttitle}>Xyress</p>
            <div className={styles.aboutcontainer}>
              <p className={styles.about}>
                Xyress is a decentralized Web3 hub connecting Web2 and Web3 through secure wallets, AI tools, and passwordless access. Powered by hybrid PBFT+DPoS consensus, it ensures speed, security, and seamless blockchain adoption.
              </p>
            </div>
            <Link href="https://xyress.com/">
              <motion.div
                whileHover={arrowHover}
                whileTap={arrowTap}
                className={dark ? styles.arrowdark : styles.arrowlight}
              >
                <BsArrowRightShort fontSize={40} />
              </motion.div>
            </Link>
            <div className={styles.linkscontainer}>
              <a
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://xyress.com/"
                rel="noreferrer"
                target="_blank"
              >
                <FiExternalLink fontSize={22} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.archivecontainer}>
          <Link href="/projects/jobGeniusAi" style={{ textDecoration: "none" }}>
            <div className={dark ? styles.archivebtndark : styles.archivebtnlight}>
              <h1 className={styles.archivetitle}>View Projects</h1>
              <AiOutlineFolderOpen fontSize={25} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Work