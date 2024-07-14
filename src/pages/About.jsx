import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {skills, experiences} from '../constants/index.js'
import CTA from '../components/CTA.jsx';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello I'm <span className='black-gradient_text font-semibold drop-shadow'>Mr. Hari</span> </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-700'>
        <p> I am a passionate tech explorer based in India, specializing in freelance projects and 
          innovative side ventures. As a self-taught developer, I flourish on creating not only beautiful 
          and functional websites but also exploring diverse areas of programming and technology. With 
          extensive experience in modern web technologies like React, Next.js, Three.js, and Tailwind 
          CSS, as well as a keen interest in other fields of programming, I am dedicated to integrating 
          cutting-edge solutions into my work. Currently, I am seeking exciting opportunities to 
          collaborate with inspiring individuals on groundbreaking projects across various tech domains.
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
      <div className='pt-14'>
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
      <div className='py-10'>
        <h3 className='subhead-text'>About the website</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-600'>
        <p>This project took off from a tutorial by JavaScript Mastery on 3D websites. 
          As the project progressed, I went my own way, incorporating my own design and 
          content, making it unique. It took me seven days of morning-to-late-night 
          sessions to bring this website to life. During this time, I did a lot of research 
          to add new elements and received help from various individuals along the way. 
          I'm always open to feedback and suggestions for improving the website. Feel 
          free to reach out to me with your thoughts and ideas—I'd love to hear from you. 
          Thank you for visiting my website.
          <br /><br />
          <span className='font-semibold'>Credits</span>
          <ul className='m-4 list-disc '>
            
            <li><a href='https://www.youtube.com/@javascriptmastery'>JavaScript mastery</a> </li>
            <li><a href='https://www.youtube.com/watch?v=FkowOdMjvYo'>Inspiration Tutorial</a></li>
            <li><a href='https://sketchfab.com/'>SketchFab</a></li>
            <li><a href='https://www.fiftysounds.com/'>Fiftysounds</a></li>
            <li><a href='https://emojidb.org/'>Emojis from emojidb</a></li>
            <li><a href='https://www.svgrepo.com/'>Icons from svgrepo</a></li>
            <li><a href='https://www.youtube.com/watch?v=ed7UrdNEYrQ'>Bgm: So Far Away</a></li>
            <br />
            <li><a href='https://skfb.ly/6YDPn'></a>Model Island by leslava</li>
            <li><a href='https://skfb.ly/oEVKL'></a>Model Sky by skybox3dArchitect</li>
            <li><a href='https://skfb.ly/6UEqU'></a>Model Drone by Kai Xiang</li>
            <li><a href='https://skfb.ly/ozS9S'></a>Model Car by Bandit.545</li>
            <li><a href='https://skfb.ly/oLvST'></a>Model Sword by Ergoni</li>
            <li><a href='https://skfb.ly/6zNVt'></a>Model Dragon by Maximum993</li>
            <li><a href='https://skfb.ly/6W8wI'></a>Model Helicopter by davimfs7</li>
            <li><a href='https://skfb.ly/6zCDK'></a>Model Reaper by YJW</li>
            <li><a href='https://skfb.ly/6YnOB'></a>Model Demon by mRiot</li>
            <li><a href='https://skfb.ly/YsvQ'></a>Model Heart by mano1creative</li>
            <li><a href='https://skfb.ly/6ZEHR'></a>Model Birds by Zacxophone</li>
            <li><a href='https://skfb.ly/6GMqo'></a>Model Deadpool by Aumentados</li>
          </ul>
        </p>
          </div>
        </div>
      <hr className='border-slate-400'></hr>
      <CTA />
    </section>
  )
}

export default About