import React from "react";
import BannerStyles from "../assets/sass/Banner.module.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function Banner() {
  return (
    <>
      <div className={BannerStyles.outer}>
        <div className={BannerStyles.content}>
          <AnimatePresence>
            <motion.span
              className={BannerStyles.name}
              animate={{ y: [0, 20, 0] }}
              transition={{
                repeat: Infinity,
                repeatDelay: 0,
                repeatType: "loop",
                duration: 3,
              }}
            >
              Mohan A
            </motion.span>
          </AnimatePresence>
          <span className={BannerStyles.passion}>
            Full Stack Development Enthusiast
          </span>
        </div>
      </div>
    </>
  );
}
