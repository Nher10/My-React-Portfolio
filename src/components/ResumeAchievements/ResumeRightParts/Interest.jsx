import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faGuitar, faBook, faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Interest = () => {
  return (
    <div className="resume-about interest">
      <h2 className='resume-title2'>INTEREST</h2>
      <ul>
        <li>
          <FontAwesomeIcon className='resume-contactInfo__icon' icon={faGamepad}></FontAwesomeIcon>
          <span className='resume-contactInfo__text'>Gaming</span>
        </li>
        <li>
          <FontAwesomeIcon className='resume-contactInfo__icon' icon={faGuitar}></FontAwesomeIcon>
          <span className='resume-contactInfo__text'>Guitar</span>
        </li>
        <li>
          <FontAwesomeIcon className='resume-contactInfo__icon' icon={faBook}></FontAwesomeIcon>
          <span className='resume-contactInfo__text'>Reading</span>
        </li>
        <li>
          <FontAwesomeIcon className='resume-contactInfo__icon' icon={faMicrophone}></FontAwesomeIcon>
          <span className='resume-contactInfo__text'>Singing</span>
        </li>
      </ul>
    </div>
  )
}

export default Interest
