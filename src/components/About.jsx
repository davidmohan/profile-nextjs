import React from "react";
import AboutStyle from "../assets/sass/About.module.scss";

export default function About() {
  return (
    <>
      <div className={AboutStyle.outer}>
        <div className={AboutStyle.inner}>
        <span className={AboutStyle.title}>About</span>
        <span className={AboutStyle.line}></span>
        <span className={AboutStyle.content}>
          DevOps Engineer with a fervent interest in Full Stack Web Development.
          Equipped with deep knowledge of frontend and backend frameworks, I am
          passionate about building cohesive, efficient web applications that
          marry seamless user experiences with robust functionality. My
          background in DevOps complements my development skills, enabling me to
          integrate best practices in automation, scalability, and deployment
          into every project. Eager to contribute to dynamic teams pushing the
          boundaries of web development innovation.
        </span>
        </div>
      </div>
    </>
  );
}
