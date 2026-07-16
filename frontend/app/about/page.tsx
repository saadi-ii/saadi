import React from 'react'
import About from './About'
import Pic from './Pic'
import Details from './Details'

const page: React.FC = () => {
  return (
    <div className='bg-gray-300 '>
      <div className='bg-gray-800 h-80 flex items-center justify-around'>
        <About/>
        <div className='self-end  relative top-40'><Pic/></div>
    </div>
    <div className='mt-15 p-10'>
        <Details/>
    </div>
    </div>
  )
}

export default page
