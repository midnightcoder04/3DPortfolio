import React from 'react';
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html fullscreen className='z-20 bg-stone-200 opacity-100 p-0 m-0'>
      <div className="fixed top-0 bottom-0 right-0 left-0 opacity-100 z-20 flex justify-center items-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-blue-500 rounded-full animate-bounce"></div>
          <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-blue-300 rounded-full animate-pulse"></div>
          <h1 className='text-black font-semibold font-worksans text-xl flex items-center'>
            L<span className='from-neutral-950 animate-spin inline-block'>oOo</span>ading...
          </h1>
        </div>
      </div>
    </Html>
  );
};

export default Loader;