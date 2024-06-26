import { EnvelopeIcon, MapIcon, PhoneIcon } from '@heroicons/react/16/solid';
import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <div className='pt-[5rem] pb-[3rem] bg-black'>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px]
             pb-5 border-gray-600 border-opacity-40'>
                <div>
                    <div className='font-logo text-white text-[18px]'>
                        <span className='text-[30px] md:text[40px] text-yellow-400'>Tanmay </span>
                         Jain
                    </div>
                    <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70 '>
                    Aspiring Computer Science graduate with expertise in Data Science and frontend development.
                    Proven leader with hands-on experience in cutting-edge technologies and successful event management.
                    </h1>
                    <p className='mt-[1.3rem] text-yellow-300 underline font-semibold '>
                        tjain5780@gmail.com
                    </p>
                </div>
                <div className='md:mx-auto flex flex-col items-center'>
                    <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                        Quick Link
                    </h1>
                    <a className='text-[15px] text-white opactiy-80 mb-[1rem] cursor-pointer hover:text-yellow-300' href="#aboutme" onClick={() => scrollToSection('AboutMe')}>
                        About Me
                    </a>
                    <a className='text-[15px] text-white opactiy-80 mb-[1rem] cursor-pointer hover:text-yellow-300' href="#projects" onClick={() => scrollToSection('Projects')}>
                        Experience
                    </a>
                    <a className='text-[15px] text-white opactiy-80 mb-[1rem] cursor-pointer hover:text-yellow-300' href="#experience" onClick={() => scrollToSection('Experience')}>
                        Projects
                    </a>
                    <a className='text-[15px] text-white opactiy-80 mb-[1rem] cursor-pointer hover:text-yellow-300' href="#contactme" onClick={() => scrollToSection('ContactMe')}>
                        Contact Me
                    </a>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='text-white font-semibold mb-[1.4rem] text-[17px]'>
                        Address
                    </h1>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <MapIcon className='w-[1rem] h-[1rem] text-yellow-300'/>
                        <p className='text-[17px] font-normal text-white opacity-75'>
                            104, utkarsh complex kotwal nagar ring road nagpur
                        </p>
                    </div>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <EnvelopeIcon className='w-[1rem] h-[1rem] text-yellow-300'/>
                        <p className='text-[17px] font-normal text-white opacity-75'>
                            tjain5780@gmail.com
                        </p>
                    </div>
                    <div className='flex items-center mt-[1rem] space-x-2'>
                        <PhoneIcon className='w-[1rem] h-[1rem] text-yellow-300'/>
                        <p className='text-[17px] font-normal text-white opacity-75'>
                            +91 86682 01716
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-[1.4rem] w-[80%] mx-auto text-white opacity-70'>
                &#169; Copyright Tanmay Sunil Jain 2024
                <div className="float-right flex">
                <a href="https://www.linkedin.com/in/tanmay-jain-136159206/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <FaLinkedin size={20} />
                </a>
                <a href="https://github.com/Tjain07" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <FaGithub size={20} />
                </a>
                <a href="https://www.instagram.com/tanmay017/?next=%2F" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                    <FaInstagram size={20} />
                </a>
            </div>
            </div>
        </div>
    );
};

export default Footer;