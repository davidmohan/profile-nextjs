import React from "react";
import BannerStyles from "../assets/sass/Banner.module.scss";

export default function Banner() {
  return (
    <>
      <div className={BannerStyles.outer}>
        <div className={BannerStyles.content}>
          <span className={BannerStyles.name}>Mohan A</span>
          <span className={BannerStyles.passion}>
            Full Stack Development Enthusiast
          </span>
        </div>
      </div>
    </>
  );
}
