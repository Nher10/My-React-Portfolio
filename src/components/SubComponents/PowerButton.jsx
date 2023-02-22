import React from 'react'
import Power from '../StyledComponents/Power'
import { PowerBtn } from '../AllSvgs'
import { NavLink } from 'react-router-dom'

const PowerButton = () => {
  return (
    <Power
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
        <NavLink to='/'>
            <PowerBtn width={30} height={30} fill='currentColor' />
        </NavLink>
    </Power>
  )
}

export default PowerButton
