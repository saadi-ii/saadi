import React from 'react'
import Image from 'next/image'

interface SkillsProps {
  url: string
  name: string
  percentage: string
}

const Skills: React.FC<SkillsProps> = (props) => {
    return (
        <div className='flex flex-col justify-center items-center p-5 bg-white drop-shadow-2xl rounded-2xl gap-2 '>
            <div><Image
                alt='next'
                width={100}
                height={100}
                src={props.url} /></div>
            <div>{props.name}</div>
            <div className='text-gray-700'>{props.percentage}%</div>
        </div>
    )
}

export default Skills
