import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {skills, experiences} from '../constants/index.js'
import CTA from '../components/CTA.jsx';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello I'm <span className='black-gradient_text font-semibold drop-shadow'>Someone</span> </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-700'>
        <p> A tech explorer based in India, specializing in freelance work
          and cool side projects. I'm a self-taught developer with a passion for
          building beautiful and functional websites. I have experience working
          with modern web technologies like React, Next.js, Threejs, Tailwind CSS,
          and more. I'm currently seeking new opportunities to work on exciting
          projects with amazing people.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>Skills</h3>
        <div className='mt-16 flex flex-wrap gap-10'>
          {skills.map((skill) =>(
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.name} className='w-16 h-16 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-14'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-600'>
        <p>I have experience in programming through freelancing and solving 
          challenges on LeetCode. I’ve also worked on team projects in hackathons 
          and side projects involving web development, machine learning, and 
          design. I enjoy collaborating with others and am eager to work on 
          exciting projects with talented teams.</p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                key = {experience.company_name}
                date = {<span style={{ color: 'blue' }}>{experience.date}</span>}
                icon = {<div className='flex justify-center items-center w-full h-full'>
                  <img src={experience.icon}
                  alt = {experience.company_name}
                  className='w-[60%] h-[60%] object-contain' >
                  </img>
                </div>}
                iconStyle={{background: experience.iconBg, boxShadow: 'none'}}
                contentStyle={{borderBottom: '8px', borderStyle: 'solid', 
                  borderBottomColor: experience.iconBg, boxShadow: 'none'}}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-slate-600 font-normal pl-1 text-small'>{point}</li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ) )}
            </VerticalTimeline>
          </div>
      </div>
      <hr className='border-slate-400'></hr>
      <CTA />
    </section>
  )
}

export default About