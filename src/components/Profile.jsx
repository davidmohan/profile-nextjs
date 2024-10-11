"use client"

import Image from 'next/image'
import React from 'react'
import ProfileImg from '../assets/img/male-profile.jpg'
import ProfileStyle from '../assets/sass/Profile.module.scss'
import { easeIn, motion } from 'framer-motion'

export default function Profile() {
  return (
    <motion.div className={ProfileStyle.profileOuter} 
      initial={{scale: 0}}
      animate={{scale: 1}}
      transition={{duration: 1}}
       >
      <div className={ProfileStyle.profile}>
      <Image src={ProfileImg} alt='Profile' className={ ProfileStyle.img } />
    </div>
    </motion.div>
  )
}
