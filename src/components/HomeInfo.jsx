import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const renderContent = (visible, setVisible) => ({
  1: (<div key='1' className='absolute top-16 md:top-20 lg:top-28 left-0 right-0 z-10 flex items-center justify-center pointer-events-none'>
    <h1 className='text-4xl sm:leading-snug text-center m-5 
    md:text-8xl sm:text-6xl lg:text-8xl font-bold text-white fadewelcome'>
      Welcome to Detro Island
    </h1>
    </div>
  ),
  2: (
    <div key='2' className='absolute bottom-12 md:bottom-14 lg:bottom-16 left-0 right-0 z-10 flex justify-center items-center pointer-events-none'>
    <h1 className={`sm:text-lg sm:leading-snug text-center py-4 px-8 ml-5 mr-2 ${visible ? 'visible fade-in' : 'invisible animate-pulse' }
    lg:text-2xl font-worksans text-black neo-brutalism-purple `}>
      Hi, I am <span className='font-bold'>Abq(nickname)</span> („• ֊ •„)
      <br />A simple fellow from planet Earth 🌏 </h1>
      <div className={`relative -bottom-0 -right-0 -left-0 -top-0 opacity-50 w-6 h-6 md:w-10 md:h-10 rounded-full 
      cursor-pointer pointer-events-auto ${visible ? 'bg-blue-500 fade-in' : 'bg-slate-300 animate-bounce'} `}
        onClick={() => setVisible(!visible)}> </div>
      </div>
  ),
  3: (
    <div key='3' className='absolute top-16 md:top-20 lg:top-24 left-0 right-0 z-10 flex items-center justify-start pointer-events-none'>
    <h1 className= {`sm:text-lg sm:leading-snug text-center py-4 px-8 mx-4 lg:mx-10 ${visible ? 'visible fade-in' : 'invisible animate-pulse' }
    lg:text-2xl font-worksans text-black neo-brutalism-purple`} >
      Curious <span className='font-bold'>About</span> this peculiar fellow and the project?... "૮₍  ˶•⤙•˶ ₎ა
      <br /><i>"Seek and ye shall find" - </i> <Link to='/about' className='font-mono font-semibold pointer-events-auto link'><i>Seek</i>🔎</Link>
      </h1>
      <div className={`relative -bottom-0 -right-0 -left-0 mr-2 -top-0 opacity-50 w-6 h-6 md:w-10 md:h-10 rounded-full 
      cursor-pointer pointer-events-auto ${visible ? 'bg-purple-300 fade-in' : 'bg-slate-300 animate-bounce'} `}
        onClick={() => setVisible(!visible)}> </div>
    </div>
  ),
  4: (
    <div key='4' className='absolute top-16 md:top-20 lg:top-24 left-0 right-0 z-10 flex items-center justify-end pointer-events-none'>
    <div className={`relative -bottom-0 -right-0 -left-0 -top-0 opacity-50 ml-2 w-6 h-6 md:w-10 md:h-10 rounded-full 
      cursor-pointer pointer-events-auto ${visible ? 'bg-lime-200 fade-in' : 'bg-slate-300 animate-bounce'} `}
      onClick={() => setVisible(!visible)}> </div>
    <h1 className= {`sm:text-lg sm:leading-snug text-center py-4 px-8 mx-5 lg:mx-10
    lg:text-2xl font-worksans text-black neo-brutalism-purple ${visible ? 'visible fade-in' : 'invisible animate-pulse' }`} >
      My ongoing handcrafted <span className='font-bold'>Resume</span> 📃.
      <br />It’s a work in progress ↻, 
      <br />as I’m still exploring new avenues.
      <br />You can check it out here -
      <Link to='/resume' className='font-mono font-semibold pointer-events-auto link'><i>pdf</i>📄</Link>
      </h1> </div>
  ),
  5: (
    <div key='5' className='absolute bottom-12 md:bottom-14 lg:bottom-16 left-0 right-0 z-10 flex justify-center items-center pointer-events-none'>
    <h1 className= {`sm:text-lg sm:leading-snug text-center py-4 px-8 mx-4 
    lg:text-2xl font-worksans text-black neo-brutalism-purple ${visible ? 'visible fade-in' : 'invisible animate-pulse' } `}>
      I don't have any other fun ones <i>atm</i> ... 😣
      <br />Someday, see more of my silly <span className='font-bold'>Projects</span> at -
      <Link to='/projects' className='font-mono font-semibold pointer-events-auto link'>🪁<i> Atelier</i> </Link>
      </h1>
      <div className={`relative mr-2 -bottom-0 -right-0 -left-0 -top-0 opacity-50 w-6 h-6 md:w-10 md:h-10 rounded-full 
      cursor-pointer pointer-events-auto ${visible ? 'bg-slate-700 fade-in' : 'bg-slate-300 animate-bounce'} `}
        onClick={() => setVisible(!visible)}> </div>
     </div>
  ),
  6: (
    <div key='6' className='absolute top-16 md:top-20 lg:top-24 left-0 right-0 z-10 flex items-center justify-start pointer-events-none'>
    <h1 className= {`sm:text-lg sm:leading-snug text-center py-4 px-8 mx-4 
    lg:text-2xl font-worksans text-black neo-brutalism-purple ${visible ? 'visible fade-in' : 'invisible animate-pulse' } `}>
      Wanna connect? 
      <Link to='/contact' className=' font-bold pointer-events-auto link'>
      <img src='/dove.jpg' 
      alt='Message' className='inline-block h-6 w-6 mx-1 mb-1.5' />
      <span className='font-bold'> Contact me</span></Link>for gigs 🧩<br />or just to say hi!... ( ᵔ ᵕ ᵔ)◜ 
      </h1> 
      <div className={`relative mr-2 -bottom-0 -right-0 -left-0 -top-0 opacity-50 w-6 h-6 md:w-10 md:h-10 rounded-full 
      cursor-pointer pointer-events-auto ${visible ? 'bg-cyan-300 fade-in' : 'bg-slate-300 animate-bounce'} `}
        onClick={() => setVisible(!visible)}> </div>
      </div>
  ),
  7: (
<div key='7' className='absolute bottom-12 md:bottom-14 lg:bottom-16 left-0 right-0 z-10 flex justify-center items-center pointer-events-none'>
  <h1 className= {`sm:text-lg sm:leading-snug text-center py-4 px-8 mx-3 lg:text-2xl font-worksans text-black neo-brutalism-purple ${visible ? 'visible fade-in' : 'invisible animate-pulse' }`} >
    Can't reach me? ↗ Join my <span className='font-bold'>Discord</span> server,
    <a href='https://discord.gg/maFy9h4sjK' target='_blank' rel='noreferrer' className='font-mono font-semibold pointer-events-auto link-amongus'>
      <img src='/sus.jpg' alt='Controller' className='inline-block h-6 w-6 mx-1' />
    </a>
     <br />and if you're lucky🍀 you'll find me there once a month. <i>P.S: Fate's been unkind.</i>
    </h1>
    <div className={`relative -bottom-0 -right-0 -left-0 -top-0 opacity-50 w-6 h-6 md:w-10 md:h-10 rounded-full mr-2
      cursor-pointer pointer-events-auto ${visible ? 'bg-red-500 fade-in' : 'bg-slate-300 animate-bounce'} `}
        onClick={() => setVisible(!visible)}> </div>
  </div>
  ),
  8: (<div key='8' className='absolute top-16 md:top-20 lg:top-28 left-0 right-0 z-10 flex items-center justify-center pointer-events-none'>
    <h1 className='text-2xl sm:leading-snug text-center m-5
    md:text-6xl font-poppins sm:text-4xl font-semibold text-white fade-bye'>
      <i>"Hidden paths reveal themseleves to those who wander"</i>
    </h1>
    </div>
  ),
});
const HomeInfo = ({currentStage}) => {
  const [visible, setVisible] = useState(true);

  return renderContent(visible, setVisible)[currentStage] || null;
}

export default HomeInfo