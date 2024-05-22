import React from 'react'
import {Html} from '@react-three/drei'
const Loader = () => {
  return (
    <Html>
        <div className = "flex justify-center items-center">
            <div className='w-20 h-20 border-2 border-opacity-30
            border-blue-600 border-t-blue-100 rounded-full animate-spin'>
    
            </div>
        </div>
    </Html>
    )
}

export default Loader