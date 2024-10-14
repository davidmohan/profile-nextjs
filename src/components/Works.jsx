import React from "react";
import WorkStyle from "../assets/sass/Works.module.scss";
import Image from "next/image";
import emsImg from "../assets/img/portfolio/ems.jpg";
import onlineOdImg from "../assets/img/portfolio/online-od.jpg";
import skatingImg from "../assets/img/portfolio/skating.jpg";
import todoImg from "../assets/img/portfolio/todo.jpg";
import { Link2Icon } from "@radix-ui/react-icons";
import churchImg from "../assets/img/portfolio/church-of-our-divine-lady-of-good-health.jpg";
import drraajanImg from "../assets/img/portfolio/drraajan.jpg";

export default function Works() {
  return (
    <div className={WorkStyle.outer}>
      <div className={WorkStyle.inner}>
        <div className={WorkStyle.top}>
          <div className={WorkStyle.title}>Works</div>
          <div className={WorkStyle.line}></div>
        </div>
        <div className={WorkStyle.bottom}>
          <div className={WorkStyle.portfolio}>
            <a
              href="https://gitlab.com/event-management-system-ng"
              target="_blank"
            >
              <Link2Icon color="#fff" className={WorkStyle.link} />
            </a>
            <Image src={emsImg} alt="emsImg" className={WorkStyle.img} />
          </div>
          <div className={WorkStyle.portfolio}>
            <a href="https://gitlab.com/todo-list-ng" target="_blank">
              <Link2Icon color="#fff" className={WorkStyle.link} />
            </a>
            <Image src={todoImg} alt="todoImg" className={WorkStyle.img} />
          </div>
          <div className={WorkStyle.portfolio}>
            <a href="https://gitlab.com/online-od-form" target="_blank">
              <Link2Icon color="#fff" className={WorkStyle.link} />
            </a>
            <Image
              src={onlineOdImg}
              alt="onlineOdImg"
              className={WorkStyle.img}
            />
          </div>
          <div className={WorkStyle.portfolio}>
            <a href="https://gitlab.com/skating-academy" target="_blank">
              <Link2Icon color="#fff" className={WorkStyle.link} />
            </a>
            <Image
              src={skatingImg}
              alt="skatingImg"
              className={WorkStyle.img}
            />
          </div>
          <div className={WorkStyle.portfolio}>
            <a
              href="https://www.thooyaarockiyaannaichurch.com/"
              target="_blank"
            >
              <Link2Icon color="#fff" className={WorkStyle.link} />
            </a>
            <Image src={churchImg} alt="churchImg" className={WorkStyle.img} />
          </div>
          <div className={WorkStyle.portfolio}>
            <a href="https://www.drraajan.com/" target="_blank">
              <Link2Icon color="#fff" className={WorkStyle.link} />
            </a>
            <Image
              src={drraajanImg}
              alt="drraajanImg"
              className={WorkStyle.img}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
