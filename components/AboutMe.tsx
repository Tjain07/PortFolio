import { CheckIcon } from '@heroicons/react/16/solid';
import React from 'react'

const AboutMe = () => {
  return (
    <section id='AboutMe'>
    <div className='mt-[-4rem] bg-black pb-[3rem]  '>
        <div className='w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1 
        lg:grid-cols-2 gap-[2 rem]'>
            <div>
                <p className='heading__mini'>About Me</p>
                <h1 className='heading__primary'>
                Crafting the Future of<span className='text-yellow-400'> Tech </span>with Innovation and Leadership
                </h1>
                <p className='text-[15px] mt-[1.3rem] text-white opacity-75'>
                I am a dedicated and versatile Frontend Developer with a keen interest in machine learning. With a Bachelor&apos;s degree in Computer Science Data Science from Shri Ramdeobaba College of Engineering and Management,
                I have cultivated a strong foundation in both technical and analytical skills.
                </p>
                <div className='mt-[2rem] space-y-3'>
                        <div  className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400 '/>
                            <p className='text-[18px] text-white'>FrontEnd Development</p>
                        </div>
                        <div  className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400 '/>
                            <p className='text-[18px] text-white'>C++ Programmer</p>
                        </div>
                        <div  className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400 '/>
                            <p className='text-[18px] text-white'>Web Development</p>
                        </div>
                        <div  className='flex items-center space-x-4'>
                            <CheckIcon className='w-[2rem] h-[2rem] text-yellow-400 '/>
                            <p className='text-[18px] text-white'>Python Programmer</p>
                        </div>
                </div>
            </div>
            <div className='lg:ml-auto mt-[2rem]'>
                <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem] '>
                    <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className='p-6 text-center bg-yellow-500 '>
                        <p className='text-[50px] text-black font-bold '>6+</p>
                        <p className='text-[15px] text-black font-600'>
                            Months Internship Experience 
                        </p>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200" className='p-6 text-center bg-yellow-500 '>
                        <p className='text-[50px] text-black font-bold '>500+</p>
                        <p className='text-[15px] text-black font-600'>
                            Students Crowd-Managed 
                        </p>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="400" className='p-6 text-center bg-yellow-500 '>
                        <p className='text-[50px] text-black font-bold '>3+</p>
                        <p className='text-[15px] text-black font-600'>
                            DL Projects Done 
                        </p>
                    </div>
                    <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="600" className='p-6 text-center bg-yellow-500 '>
                        <p className='text-[50px] text-black font-bold '>2+</p>
                        <p className='text-[15px] text-black font-600'>
                            Certifications Done
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default AboutMe;