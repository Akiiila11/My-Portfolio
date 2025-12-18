import React from 'react'
import { assets, projects } from '../assets/assets'
import { Link } from 'react-router-dom'
import { CircleArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Footer = ({theme}) => {

  return (
    <section className='w-full z-50 bg-gray-900 dark:bg-gray-900 text-white p-4'>
      <div className='flex flex-col items-center justify-center'> 
        <div className='w-full grid md:grid-cols-1 lg:grid-cols-4 p-5 gap-6'>
          <div className='w-full'>
            <a className='flex flex-col items-center justify-center' href="/"></a>
            <img src={theme === 'dark' ? assets.nav_logo : assets.favi_logo} className='w-[100px]' alt="" />
          </div>

          <div className='w-full flex flex-col'>
            <p className='font-bold text-2xl mt-9 md:mt-3 underline-half'>Navigation</p>
            <div className='flex flex-col mt-6 space-y-3'>
              <a href='#hero' to='/' className='flex gap-2'><CircleArrowRight width={20} />Home</a>
              <a href='#about' to='/about' className='flex gap-2'><CircleArrowRight width={20} />About</a>
              <a href='#skills' to='/skills' className='flex gap-2'><CircleArrowRight width={20} />Skills</a>
              <a href='#projects' to='/projects' className='flex gap-2'><CircleArrowRight width={20} />Projects</a>
              <a href='#contact' to='/contact' className='flex gap-2'><CircleArrowRight width={20} />Contact</a>
            </div>
          </div>

          <div className='w-full flex flex-col'>
            <p className='font-bold text-2xl mt-9 md:mt-3 underline-half'>Projects</p>
            <div className='mt-6 space-y-3'>
              {projects.map((proj)=> (
                <div key={proj.id} className=''>
                  <a href={proj.url} target='_blank' className='flex gap-2'><CircleArrowRight width={20} />{proj.name}</a>
                </div>
              ))}
            </div> 
          </div>

          <div className='w-full flex flex-col gap-5'>
            <p className='font-bold text-2xl mt-9 md:mt-3 underline-half'>Contact</p>
            <div className='space-y-3'>
              <a className='flex flex-col md:flex-row gap-2' href='https://www.linkedin.com/in/akilandeshwari-v' target='_blank'><Linkedin width={15} />akilandeshari-v</a>
              <a className='flex flex-col md:flex-row gap-2' href='mailto:akilavenkatraj2001@gmail.com' target='_blank'><Mail width={15} />akilavenkatraj2001@gmail.com</a>
              <a className='flex flex-col md:flex-row gap-2' href='https://github.com/Akiiila11' target='_blank'><Github width={15} />Akiiila11</a> 
            </div>   
          </div>
        </div>
      </div>

      <hr className='m-8 text-red font-bold' />

      <div>
        <p className='text-center'>&copy; 2025 All rights reserved | Ak</p>
      </div>
    </section>
  )
}

export default Footer
