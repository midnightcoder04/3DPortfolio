import React from 'react'

const Enter = () => {
    return (
        <div
          className={`w-full h-screen absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center bg-black bg-opacity-50 pointer-events-none`} >
          <div className="text-slate-100 font-mono text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold cursor-pointer pointer-events-auto p-2 hover:animate-pulse">
          <div className="flex items-center justify-center">
      <h1 className="text-center block lg:hidden">Click to Enter</h1>
    </div>
    <div className="flex items-center justify-center mt-4 mb-10">
      <h1 className="text-center block lg:hidden">&lt; Landscape mode &gt; for best Experience</h1>
    </div>
          <div className="flex items-center justify-center">
      <h1 className="text-center hidden lg:block">Press any key to Enter</h1>
    </div>
    <div className="flex items-center justify-center mt-4 mb-10">
      <h1 className="text-center hidden lg:block">&lt; Arrow-keys to navigate &gt; </h1>
    </div>
          <h1 className="hidden lg:block pl-6"> </h1>
            <h1 className="hidden mt-2 lg:block mb-20"> </h1>
          </div>
        </div>
      )
}

export default Enter