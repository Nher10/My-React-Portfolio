import React from 'react'
import { motion } from 'framer-motion'
import './Resume.css'
import ResumeLeft from './ResumeLeft'
import ResumeRight from './ResumeRight'

const Resume = () => {
  return (
    <div className='resume-body'>
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className='resume-container'
    >
      <ResumeLeft />
      <ResumeRight />
    </motion.div>
    </div>
  )
}

export default Resume
