import React from 'react'
import Power from '../StyledComponents/Power'
import { PowerBtn } from '../AllSvgs'
import { Link } from 'react-router-dom'

const PowerButton = () => {
  return (
    <Power
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
        <Link to='/'>
            <PowerBtn width={30} height={30} fill='currentColor' />
        </Link>
    </Power>
  )
}

export default PowerButton
