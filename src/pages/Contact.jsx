import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import Deadpool from '../models/deadpool'
import Loader from '../components/Loader'
import { Canvas } from '@react-three/fiber'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [animate, setAnimate] = useState(0);
  const [alert, setAlert] = useState({visible: false, message: '', type: ''});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleFocus = () => { setAnimate(1); }
  const handleBlur = () => setAnimate(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAnimate(2);
    
    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Harikrishnan",
        from_email: form.email,
        to_email: 'imotokyo885@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setForm({ name: '', email: '', message: '' });
      setIsLoading(false);
      setTimeout(() => setAnimate(0), 10000);
      showAlert('Message sent successfully! 🎉', 'success');
    })
    .catch((error) => {
      setIsLoading(false);
      setAnimate(3);
      console.error(error);
      showAlert('Something went wrong! 😢', 'error');
    });
  };

  const showAlert = (message, type) => {
    setAlert({visible: true, message, type});
    setTimeout(() => setAlert({visible: false, message: '', type: ''}), 4000);
  }
  

  return (
    <section className='relative flex flex-col md:flex-row max-container h-[100vh]'>
      
      {alert.visible && (
        <div
          className={`absolute top-2 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 rounded-md text-white ${
            alert.type === 'success' ? 'bg-sky-500' : 'bg-red-600'
          }`}
        >
          {alert.message}
        </div>
      )}

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form className='w-full flex flex-col gap-5 mt-10 lg:mt-4 z-10'
        onSubmit={handleSubmit}>
          <label className="text-black font-semibold">
            Name
            <input type="text" name="name" className="input"
            placeholder='John Wick' required value={form.name}
            onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} /> 
          </label>
          <label className="text-black font-semibold">
            Email
            <input type="email" name="email" className="input"
            placeholder='Youkilledmydog?@gmail.com' required value={form.email}
            onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} /> 
          </label>
          <label className="text-black font-semibold">
            Your Message
            <textarea name="message" rows={4} className="textarea"
            placeholder='You killed my dog and took my car?' required value={form.message}
            onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} /> 
          </label>
          <button type="submit" className="btn" onFocus={handleFocus} onBlur={handleBlur} disabled={isLoading}>
            {isLoading ? 'Sending... 📨' : 'Send Message ✉︎'}
            </button>
        </form>
      </div>

      <div className=' md:w-1/2 w-full mt-4 lg:ml-6 md:h-auto h-60  pointer-events-none '>
        <Canvas
        camera={{
          position: [10, 10, 15],
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        className='pointer-events-none'>
          <directionalLight intensity={2.5} position={[0,0,1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Deadpool
              position={[0,-6,0]}
              rotation={[0,3.5,0]}
              scale={[0.025,0.025,0.025]}
              animate={animate} />
            </Suspense>
        </Canvas>
      </div>

      </section>
  )
}

export default Contact