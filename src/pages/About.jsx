import React, { useState } from 'react'
import { assets, education, experience, skills } from '../assets/assets'
import { Link } from 'react-router-dom'

const About = () => {

  const [activeTab, setActiveTab] = useState('experience') 
  
  const tabs = [
    {
      id : 1,
      label : "experience",
      button : "Experience"
    },
    {
      id : 2,
      label : "education",
      button : "Education"
    }
  ]
  
  return (
    <section id='about' className='w-full md:h-screen items-center justify-center flex px-4 md:px-6 py-15 dark:bg-linear-to-r dark:from-black dark:to-black'>
      <div className='max-w-4xl w-full flex items-center'>
        <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8'>
          <div className=''>
            <img src={assets.Ak_img} className='rounded-2xl w-50 md:w-80' alt="" /> 
          </div>
          <div className='w-full lg:w-2/3 flex flex-col items-center md:items-start text-left md:text-start justify-center gap-2'>
            <h1 className='font-bold text-4xl md:text-6xl dark:text-white'>About Me</h1>
            <h3 className='bg-linear-to-r from-[#0c0295] to-[#3765aa] bg-clip-text text-transparent font-bold text-center text-md md:text-lg'>React.js Developer with passion for building web solutions</h3>
            <p className='mt-5 dark:text-gray-600 text-gray-700'>
              I am a passionate React.js Developer with a solid foundation in frontend development and hands-on experience building responsive web interfaces. I enjoy creating clean, user-focused designs using React, JavaScript, and Tailwind CSS. As a fresher, I’m eager to learn, grow, and contribute to a dynamic development team.
            </p>

            {/* <div className='tab-titles'>
              <ul className='flex items-center justify-center space-x-10 mt-8'>
                <li className='dark:text-white tab-links active-link'><Link to='/skills'>Skills</Link></li>
                <li className='dark:text-white tab-links'><Link to='/experience'>Experience</Link></li>
                <li className='dark:text-white tab-links'><Link to='/education'>Education</Link></li>
              </ul>
            </div> */}
            <div className='w-full flex flex-col '>
              <div className='w-full flex gap-4 py-1.5 items-center justify-center md:justify-start mt-5'>
              {tabs.map((tab)=> (
                <button key={tab.id} onClick={()=> setActiveTab(tab.label)} className={`${activeTab === tab.label ? 'underline decoration-red-500 decoration-2 underline-offset-8 transition-all duration-300' : 'decoration-0 '} dark:text-white w-fit text-lg md:text-xl font-bold`}>{tab.button}</button>
              ) )}
              </div>
              {/* {activeTab === 'skills' && (
                // <div className='w-full bg-amber-200 gap-3'> 
                <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-3 mt-6'>
                  {skills.map((skill)=> (
                    <div key={skill.id} className='flex items-center justify-start gap-3 p-3 shadow-xl rounded-2xl dark:bg-white text-center'>
                      <img src={skill.img} className='w-5 h-5' alt="" />
                      <p className='text-gray-700'>{skill.title}</p>                   
                    </div>
                  ))}
                </div>
                // </div>
                
              )} */}
              {activeTab === 'experience' && (
                <div className='mt-6 space-y-5'>
                  {experience.map((exp)=> (
                    <div key={exp.id} className='text-center md:text-start'>
                      <p className='bg-linear-to-r from-[#0c0295] to-[#3765aa] bg-clip-text text-transparent '>{exp.year}</p>
                      <p className='dark:text-gray-700'>{exp.company}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'education' && (
                <div className='mt-6 space-y-5'>
                  {education.map((edu)=> (
                    <div key={edu.id} className='text-center md:text-start'>
                      <p className='bg-linear-to-r from-[#0c0295] to-[#3765aa] bg-clip-text text-transparent'>{edu.year}</p>
                      <p className='dark:text-gray-700'>{edu.education}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            

            {/* <div className="tab-contents active-tab">
              <ul className='mt-5 text-center space-y-3'>
                <div className='flex gap-4'>
                  <img src={assets.html_logo} width={20} alt="" /><li>Html</li>
                  </div>
                <div className='flex gap-4'>
                  <img src={assets.css_logo} width={20} alt="" /><li>CSS</li>
                </div>
                <div className='flex gap-4'>
                  <img src={assets.js_logo} width={20} alt="" /><li>Javascript</li>
                </div>
                <div className='flex gap-4'>
                  <img src={assets.reactjs_logo} width={20} alt="" /><li>React.js</li>
                </div>
                <div className='flex gap-4'>
                  <img src={assets.html_logo} width={20} alt="" /><li>Tailwind CSS</li>
                </div>
                <div className='flex gap-4'>
                  <img src={assets.bootstrap_logo} width={20} alt="" /><li>Bootstrap</li>
                </div>
              </ul>
            </div> */}



            {/* <div className='tab-contents'>
              <ul>
                <li className='flex flex-col'><span>Dec 2024 - Apr 2025 </span> Intership at Strings Infinity. </li>
                <li className='flex flex-col'><span>Apr 2024 - Aug 2024 </span> Intership at ELGI EQUIPMENTS LIMITED · </li>
              </ul>
            </div>

            <div className='tab-contents'>
              <ul>
                <li className='flex flex-col'><span>2023 - 2025</span>  M.sc. Computer Science at PSGR Krishnammal college for women</li>
                <li className='flex flex-col'><span>2019 - 2022</span> B.sc. Computer Science at KG college of arts & science</li>
              </ul>
            </div> */}

          </div>
        </div>
      </div>  
    </section>
  )
}

export default About
