import React from 'react'
import {  Routes, Route, useLocation  } from 'react-router-dom';
import Main from './Main'
import AboutPage from './AboutPage'
import OffersPage from './OffersPage'
import ProjectsPage from './ProjectsPage'
import MySkillsPage from './MySkillsPage'
import ContactPage from './ContactPage'
import Resume from './ResumeAchievements/Resume';

import { AnimatePresence } from 'framer-motion';


const AnimatedRoutes = () => {

    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Main/>} />
            <Route exact path='/about' element={<AboutPage/>} />
            <Route exact path='/offers' element={<OffersPage/>} />
            <Route exact path='/projects' element={<ProjectsPage/>} />
            <Route exact path='/skills' element={<MySkillsPage/>} />
            <Route exact path='/contact' element={<ContactPage/>} />
            <Route exact path='/resume' element={<Resume/>} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
