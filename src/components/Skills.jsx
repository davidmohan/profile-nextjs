import React from "react";
import SkillStyle from "../assets/sass/Skills.module.scss";
import Image from "next/image";
import angular from "../assets/img/skills/angular.png";
import azure from "../assets/img/skills/azure.png";
import bash from "../assets/img/skills/bash.png";
import bootstrap from "../assets/img/skills/bootstrap.png";
import canva from "../assets/img/skills/canva.png";
import css from "../assets/img/skills/css.png";
import docker from "../assets/img/skills/docker.png";
import expressjs from "../assets/img/skills/expressjs.png";
import figma from "../assets/img/skills/figma.png";
import firebase from "../assets/img/skills/firebase.png";
import git from "../assets/img/skills/git.png";
import github from "../assets/img/skills/github.png";
import gitlab from "../assets/img/skills/gitlab.png";
import grafana from "../assets/img/skills/grafana.png";
import html from "../assets/img/skills/html.png";
import illustrator from "../assets/img/skills/illustrator.png";
import java from "../assets/img/skills/java.png";
import javascript from "../assets/img/skills/javascript.png";
import jenkins from "../assets/img/skills/jenkins.png";
import kubernetes from "../assets/img/skills/kubernetes.png";
import linux from "../assets/img/skills/linux.png";
import mongodb from "../assets/img/skills/mongodb.png";
import murex from "../assets/img/skills/murex.png";
import mysql from "../assets/img/skills/mysql.png";
import nestjs from "../assets/img/skills/nestjs.png";
import nextjs from "../assets/img/skills/nextjs.png";
import nodejs from "../assets/img/skills/nodejs.png";
import oracle from "../assets/img/skills/oracle.png";
import photoshop from "../assets/img/skills/photoshop.png";
import php from "../assets/img/skills/php.png";
import python from "../assets/img/skills/python.png";
import reactjs from "../assets/img/skills/reactjs.png";
import redux from "../assets/img/skills/redux.png";
import sass from "../assets/img/skills/sass.png";
import supabase from "../assets/img/skills/supabase.png";
import tailwind from "../assets/img/skills/tailwind.png";
import typescript from "../assets/img/skills/typescript.png";
import wix from "../assets/img/skills/wix.png";
import android from "../assets/img/skills/android-studio.png";
import jquery from "../assets/img/skills/jquery.png";

export default function Skills() {
  return (
    <div className={SkillStyle.outer}>
      <div className={SkillStyle.inner}>
        <div className={SkillStyle.top}>
          <div className={SkillStyle.title}>Skills</div>
          <div className={SkillStyle.line}></div>
        </div>
        <div className={SkillStyle.skills}>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={reactjs}
              alt="reactjs"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={angular}
              alt="angular"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={nodejs} alt="nodejs" />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={expressjs}
              alt="expressjs"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={nextjs} alt="nextjs" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={nestjs} alt="nestjs" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={html} alt="htnl" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={css} alt="css" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={sass} alt="sass" />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={javascript}
              alt="javascript"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={typescript}
              alt="typescript"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={bootstrap}
              alt="bootstrap"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={tailwind}
              alt="tailwind"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={jquery} alt="jquery" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={java} alt="java" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={azure} alt="azure" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={docker} alt="docker" />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={jenkins}
              alt="jenkins"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={kubernetes}
              alt="kubernetes"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={bash} alt="bash" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={linux} alt="linux" />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={android}
              alt="android"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={supabase}
              alt="supabase"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={mysql} alt="mysql" />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={mongodb}
              alt="mongodb"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={firebase}
              alt="typescript"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={photoshop}
              alt="photoshop"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={illustrator}
              alt="illustrator"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={figma} alt="figma" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={canva} alt="canva" />
          </div>
          <div className={SkillStyle.skill}>
            <Image
              className={SkillStyle.skillIcon}
              src={grafana}
              alt="grafana"
            />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={git} alt="git" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={github} alt="github" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={gitlab} alt="gitlab" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={wix} alt="wix" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={murex} alt="murex" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={python} alt="python" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={redux} alt="redux" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={php} alt="php" />
          </div>
          <div className={SkillStyle.skill}>
            <Image className={SkillStyle.skillIcon} src={oracle} alt="oracle" />
          </div>
        </div>
      </div>
    </div>
  );
}
