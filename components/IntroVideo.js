import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import styles from "../styles/IntroVideo.module.css";

const FloatingVideo = ({ src, poster }) => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const touchStartY = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video && !expanded) {
      video.muted = true;
      video.play().catch(() => {});
    }
  }, [expanded]);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "video";
    link.href = src;
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, [src]);

  const handleExpand = () => {
    setExpanded(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      }
    }, 200);
  };

  const handleClose = () => {
    setExpanded(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      video.play().catch(() => {});
    }
  };

  const handleTouchStart = (e) => {
    if (expanded && isMobile) {
      touchStartY.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (!expanded || !isMobile || touchStartY.current === null) return;
    const currentY = e.touches[0].clientY;
    const diff = currentY - touchStartY.current;

    if (diff > 80) {
      handleClose();
      touchStartY.current = null;
    }
  };

  const containerClass = expanded
    ? styles.expanded
    : isMobile
    ? styles.mobileCollapsed
    : styles.desktopCollapsed;

  return (
    <AnimatePresence>
      <motion.div
        className={`${styles.videoContainer} ${containerClass}`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          loop
          muted={!expanded}
          playsInline
          preload="auto"
          loading="eager"
          className={styles.video}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: expanded ? "contain" : "cover",
            objectPosition: expanded ? "center" : "top",
          }}
        />

        {!expanded && (
          <motion.button
            className={styles.playOverlay}
            onClick={handleExpand}
            whileTap={{ scale: 0.9 }}
          >
            <FaPlay size={isMobile ? 10 : 20} />
          </motion.button>
        )}

        {expanded && !isMobile && (
          <button className={styles.closeBtn} onClick={handleClose}>
            ✕
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingVideo;