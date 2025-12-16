import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import ThemeToggleBtn from './ThemeToggleBtn'
import {ChevronRight, Menu, X}  from 'lucide-react'

const Navbar = ({theme, setTheme}) => {

    const [sideBarOpen, setSideBarOpen] = useState(false)

    const openMenu = ()=> setSideBarOpen(true)
    const closMenu = ()=> setSideBarOpen(false)

  return (
    <header className='w-full fixed top-0 left-0 z-50 font-medium p-6'>
        <div className='w-full shadow-xl rounded-2xl backdrop-blur-xl bg-white/50 p-6 dark:bg-gray-900/70 hidden lg:block'>
            <div className='flex items-center justify-between'>
                <div className='w-100'>
                    <img src={theme === 'dark' ? assets.favi_logo : assets.nav_logo} className='w-10' alt="" />
                </div>
                <nav className='flex w-full justify-center items-center'>
                    <ul className='flex gap-6 text-gray-700 dark:text-white'>
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a href='/'>Home</a></li>
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a href='#about'>About</a></li>
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a href='#skills'>Skills</a></li>
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a href='#projects'>Projects</a></li>
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a href='#contact'>Contact</a></li>
                    </ul> 
                </nav>
            
                <div className='w-100 flex gap-5 items-center justify-end'>
                    <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
                    <a href="#contact" className='bg-linear-to-r from-[#0c0295] to-[#3765aa] flex items-center text-md px-5 py-2 rounded-3xl text-white text-sm gap-2'>
                        Connect <ChevronRight width={17} />
                    </a>
                </div>
            
                
            </div>
        </div>

        <div className='block lg:hidden'>
            <div className='flex items-center justify-between shadow-2xl px-4 py-3 rounded-2xl backdrop-blur-xl bg-white/50 dark:bg-gray-900/70'>
                <img src={theme === 'dark' ? assets.favi_logo : assets.nav_logo} width={40} alt="" />
                <Menu onClick={openMenu} className='dark:text-white' />  
            </div>
            <div className={`${sideBarOpen ? 'left-0' : 'left-full'} duration-300 absolute inset-0 h-screen bg-white dark:bg-gray-950 p-2`}>
                <div className='flex justify-between items-center p-5 '>
                    <img src={theme === 'dark' ? assets.favi_logo : assets.nav_logo} width={35} alt="" />
                    {/* <div className='flex items-center'> */}
                        {/* <ThemeToggleBtn theme={theme} setTheme={setTheme} /> */}
                        <X onClick={closMenu} className='dark:text-white font-bold' width={35} />
                    {/* </div> */}
                </div>
                <nav>
                    <ul className='flex flex-col gap-6 space-y-4 text-gray-700 dark:text-white ml-5 mt-10'>
                        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a onClick={closMenu} href='/'>Home</a></li>
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a onClick={closMenu} href='#about'>About</a></li>
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a onClick={closMenu} href='#skills'>Skills</a></li>
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a onClick={closMenu} href='#projects'>Projects</a></li>
                        <li className='sm:hover:border-b sm:hover:border-gray-400'><a onClick={closMenu} href='#contact'>Contact</a></li>
                    </ul> 
                </nav>
            </div>

        </div>

    </header>
  )
}

export default Navbar
