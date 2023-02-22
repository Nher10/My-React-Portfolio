import React from 'react'

const Language = () => {
  return (
    <div className='resume-contactInfo language'>
        <h3 className='resume-contactInfo__title'>Languages</h3>
        <ul>
        <li>
            <span className='text'>Tagalog</span>
            <span className='percent'>
            <div style={{width: '99%'}}></div>
            </span>
        </li>
        <li>
            <span className='text'>Kapampangan</span>
            <span className='percent'>
            <div style={{width: '89%'}}></div>
            </span>
        </li>
        <li>
            <span className='text'>English</span>
            <span className='percent'>
            <div style={{width: '70%'}}></div>
            </span>
        </li>
        </ul>
    </div>
  )
}

export default Language
