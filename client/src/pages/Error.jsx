import React from 'react'

function Error() {
  return (
    <div className='h-[100vh] w-[100%] absolute top-0 z-20'>
     <div className="black h-[100%] w-full bg-white flex justify-center items-center flex-col text-8xl font-bold">
        <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>404</h1>
        <br />
        <h2 className='bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  bg-clip-text text-transparent p-4'>Page Not Found !</h2>

     </div>
    </div>
  )
}

export default Error