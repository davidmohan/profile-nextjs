import React from "react";
import FooterStyle from "../assets/sass/Footer.module.scss";
import "../assets/lib/fontawesome/css/all.css";

import gitlab from "../assets/img/social/gitlab.png";
import instagram from "../assets/img/social/instagram.png";
import linkedin from "../assets/img/social/linkedin.png";
import twitter from "../assets/img/social/twitter.png";
import whatsapp from "../assets/img/social/whatsapp.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitlab,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faWhatsapp,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faContactBook,
  faContactCard,
  faEnvelope,
  faPerson,
  faPersonCane,
} from "@fortawesome/free-solid-svg-icons";
import {
  ArrowRightIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className={FooterStyle.outer}>
        <div className={FooterStyle.left}>
          <div className={FooterStyle.top}>
            <div className={FooterStyle.title}>Reach Me!</div>
            <div className={FooterStyle.line}></div>
            <div className={FooterStyle.icons}>
              <Image src={gitlab} className={FooterStyle.icon} />
              <Image src={twitter} className={FooterStyle.icon} />
              <Image src={whatsapp} className={FooterStyle.icon} />
              <Image src={linkedin} className={FooterStyle.icon} />
              <Image src={instagram} className={FooterStyle.icon} />

              {/* <FontAwesomeIcon className={FooterStyle.icon} icon={faWhatsapp} />
            <FontAwesomeIcon className={FooterStyle.icon} icon={faGitlab} />
            <FontAwesomeIcon className={FooterStyle.icon} icon={faEnvelope} />
            <FontAwesomeIcon className={FooterStyle.icon} icon={faInstagram} />
            <FontAwesomeIcon className={FooterStyle.icon} icon={faLinkedinIn} /> */}
            </div>
          </div>
          <div className={FooterStyle.bottom}>
            <div className={FooterStyle.name}>
              {/* <FontAwesomeIcon icon={faPerson} /> */}
              <span>Mohan A</span>
            </div>
            <div className={FooterStyle.phone}>
              {/* <FontAwesomeIcon icon={faContactBook} /> */}
              <span>- 6374856198</span>
            </div>
            <div className={FooterStyle.mail}>
              <div>- admohan2002@gmail.com</div>
              <div>- im.mohanarjunan@gmail.com</div>
              <div>- im.mohan@outlook.com</div>
            </div>
            <div className={FooterStyle.address}>
              - 117/A Arachipatti Nadar Street,
              <br />
              &nbsp; Srivilliputhur 626 125,
              <br />
              &nbsp; Virudunagar, Tamil Nadu,
              <br />
              &nbsp; India.
            </div>
          </div>
        </div>
        <div className={FooterStyle.right}>
          <div className={FooterStyle.title}>Quick Links</div>
          <ul className={FooterStyle.links}>
            <li className={FooterStyle.link}>
              <ArrowRightIcon color="#fff" /> Passion
            </li>
            <li className={FooterStyle.link}>
              <ArrowRightIcon color="#fff" /> About
            </li>
            <li className={FooterStyle.link}>
              <ArrowRightIcon color="#fff" /> Skills
            </li>
            <li className={FooterStyle.link}>
              <ArrowRightIcon color="#fff" /> Education
            </li>
            <li className={FooterStyle.link}>
              <ArrowRightIcon color="#fff" /> Experience
            </li>
            <li className={FooterStyle.link}>
              <ArrowRightIcon color="#fff" /> Works
            </li>
          </ul>
        </div>
      </div>
      <div className={FooterStyle.credit}>
        Developed by&nbsp;
        <a href="https://gitlab.com/mohan.env" target="_blank">
          <i>@mohan.env</i>
        </a>
      </div>
    </>
  );
}
