import React from 'react'
import { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import Intro from './Components/intro/Intro'
import Skills from './Components/skills/Skills'
import Works from './Components/works/Works'
import Contact from './Components/contact/Contact'
function App() {

  return (
    <>
     <Navbar/>
     <Intro/>
     <Skills/>
     <Works/>
     <Contact/>
    </>
  )
}

export default App
