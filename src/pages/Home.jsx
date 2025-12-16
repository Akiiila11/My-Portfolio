import React from 'react'
import Hero from '../components/Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Skills from './Skills'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills /> 
      <Projects />
      <Contact /> 
    </>
  )
}

export default Home



