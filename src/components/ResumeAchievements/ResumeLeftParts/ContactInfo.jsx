import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const ContactInfo = () => {
  return (
    <div className='resume-contactInfo'>
        <h3 className='resume-contactInfo__title'>Contact Info</h3>
        <ul>
        <li>
            <FontAwesomeIcon className='resume-contactInfo__icon' icon={faPhone}></FontAwesomeIcon>
            <span className='resume-contactInfo__text'>09915807187</span>
        </li>
        <li>
            <FontAwesomeIcon className='resume-contactInfo__icon' icon={faEnvelope}></FontAwesomeIcon>
            <span className='resume-contactInfo__text'>nherwinostia2@gmail.com</span>
        </li>
        <li>
            <FontAwesomeIcon className='resume-contactInfo__icon' icon={faMapMarkerAlt}></FontAwesomeIcon>
            <span className='resume-contactInfo__text'>Lapaz, Tarlac, Philippines</span>
        </li>
        </ul>
    </div>
  )
}

export default ContactInfo
