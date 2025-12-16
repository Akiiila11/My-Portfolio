import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
