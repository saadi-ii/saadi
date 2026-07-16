import React from 'react'
import Image from 'next/image'

interface MySkillsProps {
  url: string
  name: string
  percentage: string
}

const MySkills: React.FC<MySkillsProps> = (props) => {
    return (
        <div>
        <div className='flex justify-center items-center p-5 border border-white drop-shadow-2xl rounded-2xl gap-2  w-full h-20'>
            <div className='w-32'><Image
                alt='next'
                width={70}
                height={70}
                src={props.url} /></div>
            <div className='w-80 h-2 bg-white'><div className='bg-gray-700 h-2 ' style={{ width: `${props.percentage}%` }}></div></div>
            <div className='w-32'>{props.name}</div>
        </div>
        </div>
    )
}

export default MySkills
