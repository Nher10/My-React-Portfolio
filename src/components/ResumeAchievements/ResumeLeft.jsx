import React from 'react'
import nherwinImg from '../../assets/images/nherwinResumeImg.jpg'
import ContactInfo from './ResumeLeftParts/ContactInfo'
import Education from './ResumeLeftParts/Education'
import Language from './ResumeLeftParts/Language'

const ResumeLeft = () => {
  return (
    <div className='resume-left__side'>
        <div className='resumer-profileText'>
          <div className='resume-imgBx'>
            <img src={nherwinImg} alt="myPic" />
          </div>
          <h2>Nherwin Ostia<br></br><span>Seeking Entry-Level Position in Web Development</span></h2>
        </div>
        <ContactInfo />
        <Education />
        <Language />
        <button className='resume-left__sideButton'>Achievements</button>
    </div>
  )
}

export default ResumeLeft
