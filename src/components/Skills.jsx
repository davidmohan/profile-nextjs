import React from 'react'
import SkillStyle from '../assets/sass/Skills.module.scss'
import Image from 'next/image'
import angular from '../assets/img/skills/angular.png'
import azure from '../assets/img/skills/azure.png'
import bash from '../assets/img/skills/bash.png'
import bootstrap from '../assets/img/skills/bootstrap.png'
import canva from '../assets/img/skills/canva.png'
import css from '../assets/img/skills/css.png'
import docker from '../assets/img/skills/docker.png'
import expressjs from '../assets/img/skills/expressjs.png'
import figma from '../assets/img/skills/figma.png'
import firebase from '../assets/img/skills/firebase.png'
import git from '../assets/img/skills/git.png'
import github from '../assets/img/skills/github.png'
import gitlab from '../assets/img/skills/gitlab.png'
import grafana from '../assets/img/skills/grafana.png'
import html from '../assets/img/skills/html.png'
import illustrator from '../assets/img/skills/illustrator.png'
import java from '../assets/img/skills/java.png'
import javascript from '../assets/img/skills/javascript.png'
import jenkins from '../assets/img/skills/jenkins.png'
import kubernetes from '../assets/img/skills/kubernetes.png'
import linux from '../assets/img/skills/linux.png'
import mongodb from '../assets/img/skills/mongodb.png'
import murex from '../assets/img/skills/murex.png'
import mysql from '../assets/img/skills/mysql.png'
import nestjs from '../assets/img/skills/nestjs.png'
import nextjs from '../assets/img/skills/nextjs.png'
import nodejs from '../assets/img/skills/nodejs.png'
import oracle from '../assets/img/skills/oracle.png'
import photoshop from '../assets/img/skills/photoshop.png'
import php from '../assets/img/skills/php.png'
import python from '../assets/img/skills/python.png'
import reactjs from '../assets/img/skills/reactjs.png'
import redux from '../assets/img/skills/redux.png'
import sass from '../assets/img/skills/sass.png'
import supabase from '../assets/img/skills/supabase.png'
import tailwind from '../assets/img/skills/tailwind.png'
import typescript from '../assets/img/skills/typescript.png'
import wix from '../assets/img/skills/wix.png'
import android from '../assets/img/skills/android-studio.png'
import jquery from '../assets/img/skills/jquery.png'

export default function Skills() {
  return (
    <div className={SkillStyle.outer}>
      <div className={SkillStyle.inner}>
        <div className={SkillStyle.top}>
          <div className={SkillStyle.title}>
            Skills
          </div>
          <div className={SkillStyle.line}></div>
        </div>
        <div className={SkillStyle.skills}>
          <div className={SkillStyle.skill}>
            <Image src={reactjs} alt="reactjs" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={angular} alt="angular" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={nodejs} alt="nodejs" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={expressjs} alt="expressjs" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={nextjs} alt="nextjs" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={nestjs} alt="nestjs" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={html} alt="htnl" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={css} alt="css" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={sass} alt="sass" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={javascript} alt="javascript" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={typescript} alt="typescript" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={bootstrap} alt="bootstrap" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={tailwind} alt="tailwind" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={jquery} alt="jquery" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={java} alt="java" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={azure} alt="azure" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={docker} alt="docker" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={jenkins} alt="jenkins" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={kubernetes} alt="kubernetes" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={bash} alt="bash" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={linux} alt="linux" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={android} alt="android" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={supabase} alt="supabase" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={mysql} alt="mysql" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={mongodb} alt="mongodb" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={firebase} alt="typescript" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={photoshop} alt="photoshop" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={illustrator} alt="illustrator" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={figma} alt="figma" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={canva} alt="canva" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={grafana} alt="grafana" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={git} alt="git" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={github} alt="github" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={gitlab} alt="gitlab" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={wix} alt="wix" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={murex} alt="murex" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={python} alt="python" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={redux} alt="redux" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={php} alt="php" width={100} height={100} />
          </div>
          <div className={SkillStyle.skill}>
            <Image src={oracle} alt="oracle" width={100} height={100} />
          </div>
        </div>
      </div>
    </div>
  )
}
