import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black'>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
