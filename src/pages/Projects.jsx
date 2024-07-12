import React from 'react'
import {projects} from '../constants/index.js'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='black-gradient_text font-semibold drop-shadow'>Projects</span> </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-700'>
        <p> I've worked on a ton of projects, ranging from web development to machine learning.
          Here are a few of my favorites. You can find more of my projects on my GitHub profile.
          Or so I'd like to say but for now .. I'm still working on it.
        </p>
      </div>
      <div className='flex flex-wrap my-16 gap-12'>
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className='block-container w-12 h-12' >
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'> 
                <img src={project.iconUrl}
                alt="Project icon"
                className='w-1/2 h-1/2 object-contain' ></img>
              </div>
            </div>
            <div className='mt-5 flex flex-col'> 
              <h4 className='text-2xl font-poppins font-semibold text-black '> {project.name} </h4>
              <p className='mt-2 text-slate-600' > {project.description} </p>
              <div className='mt-4 flex items-center gap-2 font-poppins'>
                <Link to={project.link}
                target='_blank'
                rel='noreferrer noopener'
                className='font-semibold text-slate-500 hover:text-slate-800' >
                Live Link</Link>
                <img src={arrow}
                alt ="Arrow"
                className='w-4 h-4 object-contain' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-400' />
      <CTA />
    </section>
  )
}

export default Projects