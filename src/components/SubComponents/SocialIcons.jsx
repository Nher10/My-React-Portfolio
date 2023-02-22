import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github, GooglePlus, Twitter } from '../AllSvgs'
import Icons from '../StyledComponents/Icons'
import { lightTheme } from '../Themes'
import { motion } from 'framer-motion'

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? lightTheme.body : lightTheme.text};
`

const SocialIcons = (props) => {
  return (
    <Icons
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 1 } }}
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
        <motion.div
                initial={{scale:0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1 }}
        >
            <NavLink style={{color: '#C0EEF2'}} target='_blank' to={{pathname:'https://github.com/Nher10'}}>
                <Github width={30} height={25} fill={props.theme === 'dark' ? lightTheme.body : lightTheme.text}/>
            </NavLink>
        </motion.div>
        <motion.div
                initial={{scale:0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.2 }}
        >
            <NavLink style={{color: '#C0EEF2'}} target='_blank' to={{pathname:'https://twitter.com/Nher10'}}>
                <Twitter width={30} height={25} fill={props.theme === 'dark' ? lightTheme.body : lightTheme.text}/>
            </NavLink>
        </motion.div>
        <motion.div
                initial={{scale:0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.4 }}
        >
            <NavLink style={{color: '#C0EEF2'}} target='_blank' to={{pathname:'https://gmail.com/Nher10'}}>
                <GooglePlus width={30} height={25} fill={props.theme === 'dark' ? lightTheme.body : lightTheme.text}/>
            </NavLink>
        </motion.div>
        <motion.div
                initial={{scale:0 }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.6 }}
        >
            <NavLink style={{color: '#C0EEF2'}} target='_blank' to={{pathname:'https://github.com/Nher10'}}>
                <Facebook width={30} height={25} fill={props.theme === 'dark' ? lightTheme.body : lightTheme.text}/>
            </NavLink>
        </motion.div>
        <Line
        initial={{height: 0,}}
        animate={{height: "8rem",}}
        transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.8,
                    }}
        color={props.theme}/>
    </Icons>
  )
}

export default SocialIcons
