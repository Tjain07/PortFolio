import React from 'react'
import SkillCard from './Helper/SkillCard';

const Skills = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black'>
        <div className='grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center '>
            <div className='col-span-3'>
                <p className='heading__mini'>My Skills</p>
                <h1 className='heading__primary'>
                Showcasing My Expertise:<span className='text-yellow-300'> A Journey Through Skill and Experience</span>
                </h1>
                <p className='text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]'>
                Here are some of my standout skills, honed through diverse experiences. From data science to frontend development, 
                my journey reflects a commitment to mastering cutting-edge technologies and leading impactful projects.
                </p>
            </div>
            <div className='col-span-4'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem]
                    items-center '>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" >
                            <SkillCard title='React' 
                            image='/images/react.svg'
                            percentage='90% '/>
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
                            <SkillCard title='CSS' 
                            image='/images/css.svg'
                            percentage='97% '/>
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                            <SkillCard title='JavaScript' 
                            image='/images/js.svg'
                            percentage='90% '/>
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
                            <SkillCard title='TypeScript' 
                            image='/images/ts.svg'
                            percentage='65% '/>
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
                            <SkillCard title='HTML' 
                            image='/images/html.svg'
                            percentage='88% '/>
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
                            <SkillCard title='Node JS' 
                            image='/images/node.svg'
                            percentage='70% '/>
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
                            <SkillCard title='C++' 
                            image='/images/c.svg'
                            percentage='90% '/>
                        </div>
                        <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1400">
                            <SkillCard title='Python' 
                            image='/images/python.svg'
                            percentage='89% '/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;