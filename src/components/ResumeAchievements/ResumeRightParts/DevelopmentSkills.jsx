import React from 'react'

const DevelopmentSkills = () => {
  return (
    <div className='resume-about skills'>
      <h2 className='resume-title2'>Web Development Skills</h2>
      <div className='resume-box_frontback'>
          <h3>FRONTEND:</h3>
          <div>
            <div className='resume-box'>
              <h4>Html</h4>
              <div className='percent'>
                <div style={{width: '98%'}}></div>
              </div>
            </div>
            <div className='resume-box'>
              <h4>CSS</h4>
              <div className='percent'>
                <div style={{width: '98%'}}></div>
              </div>
            </div>
            <div className='resume-box'>
              <h4>Javascript</h4>
              <div className='percent'>
                <div style={{width: '87%'}}></div>
              </div>
            </div>
            <div className='resume-box'>
              <h4>Bootstrap</h4>
              <div className='percent'>
                <div style={{width: '90%'}}></div>
              </div>
            </div>
            <div className='resume-box'>
              <h4>React</h4>
              <div className='percent'>
                <div style={{width: '87%'}}></div>
              </div>
            </div>
          </div>
      </div>
      <div className='resume-box_frontback'>
        <h3>BACKEND:</h3>
        <div>
          <div className='resume-box'>
              <h4>NodeJs</h4>
              <div className='percent'>
              <div style={{width: '87%'}}></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DevelopmentSkills
