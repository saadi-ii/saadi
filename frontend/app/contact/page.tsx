import React from 'react'
import Pic from "./Pic"
import Contact from "./Contact"
import ContactDetails from "./ContactDetails"
import FreeLance from "./FreeLance"
import Form from "./Form"

const page: React.FC = () => {
  return (
    <div className='bg-gray-300 '>
      <div className='bg-gray-800 h-80 flex items-center justify-around'>
        <Contact/>
        <div className='self-end  relative top-40'><Pic/></div>
    </div>
    <div className='mt-15 p-10'>
        <ContactDetails/>
    </div>
    <div className='mt-15 p-10'>
        <FreeLance/>
    </div>
    <div className='p-20'>
        <Form/>
    </div>
    </div>
  )
}

export default page
