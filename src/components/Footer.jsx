import React from "react";
import FooterStyle from "../assets/sass/Footer.module.scss";
import "../assets/lib/fontawesome/css/all.css";
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

export default function Footer() {
  return (
    <div className={FooterStyle.outer}>
      {/* Developed by&nbsp;
      <a href="https://gitlab.com/mohan.env" target="_blank">
        <i>@mohan.env</i>
      </a> */}

      <div className={FooterStyle.left}>
        <div className={FooterStyle.top}>
          <div className={FooterStyle.title}>Reach Me!</div>
          <div className={FooterStyle.line}></div>
          <div className={FooterStyle.icons}>
            <FontAwesomeIcon className={FooterStyle.icon} icon={faWhatsapp} />
            <FontAwesomeIcon className={FooterStyle.icon} icon={faGitlab} />
            <FontAwesomeIcon className={FooterStyle.icon} icon={faEnvelope} />
            <FontAwesomeIcon className={FooterStyle.icon} icon={faInstagram} />
            <FontAwesomeIcon className={FooterStyle.icon} icon={faLinkedinIn} />
          </div>
        </div>
        <div className={FooterStyle.bottom}>
          <div>
            {/* <FontAwesomeIcon icon={faPerson} /> */}
            <span>Mohan A</span>
          </div>
          <div>
            {/* <FontAwesomeIcon icon={faContactBook} /> */}
            <span>6374856198</span>
          </div>
          <div>
            <div>admohan2002@gmail.com</div>
            <div>im.mohanarjunan@gmail.com</div>
            <div>im.mohan@outlook.com</div>
          </div>
          <div>
            <address>
              117/A Arachipatti Nadar Street,
              <br />
              Srivilliputhur 626 125,
              <br />
              Virudunagar, Tamil Nadu,
              <br />
              India.
            </address>
          </div>
        </div>
      </div>
      <div className={FooterStyle.right}>
        <div className={FooterStyle.title}>Quick Links</div>
        <ul className={FooterStyle.links}>
          <li className={FooterStyle.link}>Passion</li>
          <li className={FooterStyle.link}>About</li>
          <li className={FooterStyle.link}>Skills</li>
          <li className={FooterStyle.link}>Education</li>
          <li className={FooterStyle.link}>Experience</li>
          <li className={FooterStyle.link}>Works</li>
        </ul>
      </div>
    </div>
  );
}
