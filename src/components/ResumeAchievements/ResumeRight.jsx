import React from 'react'
import Profile from './ResumeRightParts/Profile'
import WorkFreelance from './ResumeRightParts/WorkFreelance'
import DevelopmentSkills from './ResumeRightParts/DevelopmentSkills'
import Interest from './ResumeRightParts/Interest'

const ResumeRight = () => {
  return (
    <div className='resume-right__side'>
        <Profile />
        <WorkFreelance />
        <DevelopmentSkills />
        <Interest />
    </div>
  )
}

export default ResumeRight
