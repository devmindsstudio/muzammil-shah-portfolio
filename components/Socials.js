import styles from "../styles/Socials.module.css";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import {
  socialsFadeLeftContainer,
  socialsFadeLeftContainerArchive,
  socialsFadeLeft,
} from "../utils/Animations";

const Socials = ({ dark, delay, isDark }) => {
  if (delay) {
    return (
      <div className={styles.socialcontainer}>
        <motion.div variants={socialsFadeLeftContainer} className={styles.icons}>
          <motion.div variants={socialsFadeLeft}>
            <div className={dark ? styles.linksdarkcontainer : styles.linkslightcontainer}>
              <a
                rel="noreferrer"
                target="_blank"
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://github.com/syedmuzammil779"
                id="github"
              >
                <FiGithub size={25} />
              </a>
            </div>
          </motion.div>
          {/* <motion.div variants={socialsFadeLeft}>
            <div className={dark ? styles.linksdarkcontainer : styles.linkslightcontainer}>
              <a
                rel="noreferrer"
                target="_blank"
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://www.linkedin.com/in/hafizmuahmmadkumail/"
                id="linkedin"
              >
                <FiLinkedin size={25} />
              </a>
            </div>
          </motion.div> */}
          {/* <motion.div variants={socialsFadeLeft}>
            <div className={dark ? styles.linksdarkcontainer : styles.linkslightcontainer}>
              <a
                rel="noreferrer"
                target="_blank"
                className={dark ? styles.linksdark : styles.linkslight}
                href="https://twitter.com/joseph_fantuzzi"
                id="twitter"
              >
                <FiTwitter size={25} />
              </a>
            </div>
          </motion.div> */}
          <motion.div variants={socialsFadeLeft}>
            <div className={dark ? styles.linksdarkcontainer : styles.linkslightcontainer}>
              <a
                rel="noreferrer"
                target="_blank"
                className={dark ? styles.linksdark : styles.linkslight}
                href="mailto:syyedmuzammilshah6@gmail.com"
                id="email"
              >
                <FiMail size={25} />
              </a>
            </div>
          </motion.div>
          <motion.div variants={socialsFadeLeft}>
            <div className={dark ? styles.linedark : styles.linelight}></div>
          </motion.div>
        </motion.div>
      </div>
    );
  } else {
    return (
      <div className={styles.socialcontainer}>
        <motion.div variants={socialsFadeLeftContainerArchive} className={styles.icons}>
          <motion.div variants={socialsFadeLeft}>
            <div
              className={isDark === "dark" ? styles.linksdarkcontainer : styles.linkslightcontainer}
            >
              <a
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.linksdark : styles.linkslight}
                href="https://github.com/syedmuzammil779"
                id="github"
              >
                <FiGithub size={25} />
              </a>
            </div>
          </motion.div>
          {/* <motion.div variants={socialsFadeLeft}>
            <div
              className={isDark === "dark" ? styles.linksdarkcontainer : styles.linkslightcontainer}
            >
              <a
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.linksdark : styles.linkslight}
                href="https://www.linkedin.com/in/hafizmuahmmadkumail/"
                id="linkedin"
              >
                <FiLinkedin size={25} />
              </a>
            </div>
          </motion.div> */}
          {/* <motion.div variants={socialsFadeLeft}>
            <div
              className={isDark === "dark" ? styles.linksdarkcontainer : styles.linkslightcontainer}
            >
              <a
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.linksdark : styles.linkslight}
                href="https://twitter.com/joseph_fantuzzi"
                id="twitter"
              >
                <FiTwitter size={25} />
              </a>
            </div>
          </motion.div> */}
          <motion.div variants={socialsFadeLeft}>
            <div
              className={isDark === "dark" ? styles.linksdarkcontainer : styles.linkslightcontainer}
            >
              <a
                rel="noreferrer"
                target="_blank"
                className={isDark === "dark" ? styles.linksdark : styles.linkslight}
                href="mailto:syyedmuzammilshah6@gmail.com"
                id="email"
              >
                <FiMail size={25} />
              </a>
            </div>
          </motion.div>
          <motion.div variants={socialsFadeLeft}>
            <div className={isDark === "dark" ? styles.linedark : styles.linelight}></div>
          </motion.div>
        </motion.div>
      </div>
    );
  }
};

export default Socials;
