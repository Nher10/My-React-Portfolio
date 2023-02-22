import React, { useEffect } from 'react'
import { preLoaderAnim } from './Load'
import './PreLoader.css'

const PreLoader = () => {

  useEffect(() => {
    preLoaderAnim()
  }, [])

  return (
    <div className='preloader'>
      <div className='texts-container'>
        <span className='preloader-r'>Revitalizing</span>
        <span className='preloader-e'>Energy for</span>
        <span className='preloader-a'>Artistic and</span>
        <span className='preloader-c'>Creative</span>
        <span className='preloader-t'>Tenacity.</span>
      </div>
    </div>
  )
}

export default PreLoader
