import { PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react'

const ContactMe = () => {
  return (
    <section id="ContactMe">
    <div className='pt-[5rem] pb-[3rem] bg-gray-900 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto '>
            <div>
                <p className='heading__mini'>Get in Touch</p>
                <h1 className='heading__primary'>Heyy Let&apos;s<span className='text-yellow-400'> Connect!!</span></h1>
                <p className='text-[15px] text-white mt-[1rem]'>
                Let&apos;s connect and bring innovative ideas to life! Whether you&apos;re looking to hire a passionate 
                tech enthusiast or discuss groundbreaking projects, I&apos;m excited to collaborate. Reach out and let&apos;s create 
                something extraordinary together!
                </p>
                <h1 className='mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold flex'>
                    <PhoneIcon className='w-10 h-10 mr-5'/>+91 86682 01716
                </h1>
            </div>
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
                    <input type="text" 
                    placeholder='Name' 
                    className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4' 
                    />
                    <input type="email" 
                    placeholder='Email' 
                    className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4' 
                    />
                </div>
                <input type="text" placeholder='Subject' className='py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full ouline-none 
                text-white bg-gray-800 rounded-md px-4 ' />
                <textarea placeholder='Message' className='py-[0.7rem] mb-[1.5rem] w-full oultline-none text-white 
                bg-gray-800 rounded-md px-4 mb-[1.5rem]' rows={5}></textarea>
                <button className='py-[0.7rem] mb-[1.5rem] w-full ouline-none text-white bg-blue-700 hover:bg-blue-800 
                rounded-md px-4'>
                    Submit
                </button>
            </div>
        </div>
    </div>
    </section>
  );
}

export default ContactMe;