import React from 'react'
import CTA from '../components/CTA'

const Resume = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My <span className='black-gradient_text font-semibold drop-shadow'>Resume</span> </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-700'>
        <p> Bear with me, it's a work in progress... 
        </p>
      </div>
      <div className='flex my-16 gap-12 flex-grow '>
      <iframe 
          src='/resume.pdf' 
          title='Resume' 
          className='w-full border border-slate-300 rounded-lg'
          style={{ minHeight: '80vh' }}
        ></iframe>
      </div>

      <hr className='border-slate-400' />
      <CTA />
    </section>
  )
}

export default Resume