import React from 'react'
import { assets, projects } from '../assets/assets'
import { CircleChevronUp, SquareArrowOutUpRight } from 'lucide-react'

const Projects = () => { 
  return (
    <section id='projects' className='w-full h-full flex flex-col items-center justify-center px-4 md:px-6 pt-20 lg:pt-38 dark:bg-linear-to-r dark:from-black dark:to-black'>
      <div className='max-w-3xl w-full'>
        <h1 className='font-bold text-4xl md:text-6xl text-center dark:text-white'>My Crafts</h1>
        <p className='mt-3 dark:text-gray-600 text-gray-700 text-center text-sm md:text-lg'>The following projects demonstrate my hands-on experience with modern web technologies, including brief descriptions and tech stacks.</p>
      </div>
      <div className='max-w-7xl w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-15'>
        {/* {projects.map((proj)=> (
          <div key={proj.id} className=' w-full h-full shadow-2xl dark:shadow-white/50 px-3 md:px-5 py-4 md:py-10
           rounded-2xl'>
            <img src={proj.img} className='rounded' alt="" />
            <div className='w-full h-full flex flex-col justify-between'>
              <div className='w-full h-full'>
                <h1 className='text-2xl font-bold mt-5 dark:text-white/90'>{proj.name}</h1>
                <p className='text-gray-400 text-sm font-medium mt-2'>{proj.description}</p>
                <div className='flex flex-wrap gap-2 mt-4'> 
                  {proj.technologies.map((tech, index) => (
                    <span
                      key={index} 
                      className='px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs'>
                      {tech}
                    </span>
                  ))}          
                </div>
              </div>
              <div className='w-full h-full md:mb-6 mt-8 md:mt-0'>
                <a href={proj.url} target='_blank' className='bg-linear-to-r from-[#0c0295] to-[#3765aa] flex items-center justify-center font-bold gap-2 px-3 py-2 rounded-2xl text-sm text-white'>Live Demo <SquareArrowOutUpRight size={15} /></a>
              </div>
            </div> 
          </div>
        ))} */}

        {
          projects.map((item)=> {
            return(
              <div key={item.id} className='w-full flex flex-col rounded-2xl project-card'>
                {/* img */}
                <div className='w-full rounded-2xl'>
                  <img src={item.img} className='rounded-2xl' alt="" />
                  {/* text layer */}
                    <div className='w-full rounded-2xl p-5 project-content-layer'>
                      <div className='w-full flex items-center justify-between project-title'> 
                        <h3 className='text-2xl font-bold m-2'>{item.name}</h3>
                        <a href={item.url} target='_blank' className='icon'>
                          <CircleChevronUp />
                        </a>
                      </div>
                      <div className='rounded-2xl project-content'>
                        <p className='mt-5 font-medium'>{item.description}</p>
                        <h4 className='text-md font-bold mt-4'>Technologies Used :</h4>
                        <div className='w-fit flex flex-wrap gap-3 mt-3'>
                          {
                              Array.isArray(item.technologies) && item.technologies.length > 0 && (
                                item.technologies.map((tech, ind) => (
                                  <span key={ind} className='text-xs font-medium border rounded-2xl px-2 py-1 transition-all duration-300 hover:bg-gray-900 hover:text-white'>
                                    {tech}
                                  </span>
                                ))
                              )
                          }
                        </div>
                        <a href={item.url} target='_blank' className='w-fit flex items-center gap-2 mt-6 bg-linear-to-r from-[#0c0295] to-[#3765aa] rounded-2xl px-4 py-2 text-white'>
                          View Project <SquareArrowOutUpRight size={13} strokeWidth={3} /> 
                        </a>
                      </div>
                    </div>
                </div>
              </div>
            )
          })
        }
      </div>     
    </section>
  )
}

export default Projects