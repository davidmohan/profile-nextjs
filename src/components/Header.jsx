"use client";

import React from "react";
import HeaderStyle from "../assets/sass/Header.module.scss";
import { saveAs } from "file-saver";
import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function Header() {
  const saveFile = () => {
    saveAs(
      "https://ik.imagekit.io/dowdy/profile/RESUME_MOHAN_A.pdf",
      "MOHAN_A_RESUME.pdf"
    );
  };

  return (
    <>
      <button onClick={() => saveFile()} className={HeaderStyle.btn}>
        Get Resume
      </button>
      <button onClick={() => saveFile()} className={HeaderStyle.btn_icon}>
        <ArrowDownIcon className={HeaderStyle.arrowIcon} />
      </button>
    </>
  );
}
