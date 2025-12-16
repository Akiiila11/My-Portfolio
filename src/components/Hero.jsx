import { ChevronsRight } from 'lucide-react'
import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
      // <section className='w-full h-screen flex items-center justify-center text-center px-6'>
      //   <div className='flex flex-col items-center justify-center'>
      //     <p className='font-bold text-black dark:text-white sm:text-4xl text-xl'>React.js Developer</p>
      //     <h1 className='font-bold text-3xl md:text-7xl  text-black dark:text-white sm:mt-4 mt-2'>I'm <span className='bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Akilandeshwari</span> </h1>
      //     <p className='text-gray-400 dark:text-gray-500 sm:mt-3 mt-2'>Turning ideas into smooth, interactive, and responsive web applications.</p>
      //     <button className='bg-linear-to-r from-[#5044E5] to-[#4d8cea] px-5 py-2 mt-9 rounded-xl text-white flex items-center gap-2 cursor-pointer'>
      //       Explore 
      //       <ChevronsRight />
      //     </button>
      //     <div className='relative'>
      //       <img src={assets.bg_image1} className='absolute -top-40 -right-40 sm:-top-100 sm:-right-70 -z-1 dark:hidden' alt="" />
      //     </div> 
      //   </div>   
      // </section>
      <section className='w-full'>
        <div className='relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center '>
            <img src={assets.bg_hero} className='dark:hidden' alt="" />
          </div> 
        <div className='w-full flex items-center justify-center'>
          <div className='w-full h-screen absolute inset-0 backdrop-blur-xl flex flex-col items-center justify-center'>
            <p className='font-bold text-black dark:text-white text-xl sm:text-4xl '>React.js Developer</p>
            <h1 className='font-bold text-3xl md:text-7xl text-black dark:text-white sm:mt-4 mt-3'>I'm <span className='bg-linear-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>Akilandeshwari</span> </h1>
            <p className='text-gray-800 dark:text-gray-500 sm:mt-3 mt-2 px-3 md:p-0 text-sm md:text-md'>Turning ideas into smooth, interactive, and responsive web applications.</p>
            <a href='#about' className='bg-linear-to-r from-[#0c0295] to-[#3765aa] px-5 py-2 mt-9 rounded-xl text-white flex items-center gap-2 cursor-pointer'>
              Explore 
              <ChevronsRight />
            </a>
          </div>
        </div>   
      </section>
  )
}

export default Hero
