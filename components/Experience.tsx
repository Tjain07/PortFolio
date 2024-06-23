import React from 'react'
import ExpeirenceSlider from './Helper/ExperienceSlider';

const Experience = () => {
  return (
    <section id="Experience">
    <div className='pt-[5rem] pb-[3rem] bg-gray-900 '>
        <div className='text-center'>
            <p className='heading__mini'>Expeirence</p>
            <h1 className='heading__primary'>My<span className='text-yellow-300'> Expeirence&apos;s</span></h1>
        </div>
        <div className='w-[80%] pt-[3rem] md:pt-[5rem] mx-auto'>
            <ExpeirenceSlider />
        </div>
    </div>
    </section>
  )
}

export default Experience;