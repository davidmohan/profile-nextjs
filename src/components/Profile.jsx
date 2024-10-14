"use client";

import Image from "next/image";
import React from "react";
import ProfileImg from "../assets/img/profile.jpg";
import ProfileStyle from "../assets/sass/Profile.module.scss";

export default function Profile() {
  return (
    <div className={ProfileStyle.profileOuter}>
      <div className={ProfileStyle.profile}>
        <Image src={ProfileImg} alt="Profile" className={ProfileStyle.img} />
      </div>
    </div>
  );
}
