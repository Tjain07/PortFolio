import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid';
import React, { useEffect, useState } from 'react'

interface Props {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {

    const [navSticky, setnavSticky] = useState(false)

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setnavSticky(true);
            }
            if (window.scrollY <= 90) {
                setnavSticky(false);
            }

        };
        window.addEventListener("scroll", handler);
    }, []);

    const stickStyle = navSticky ? 'bg-[#212428] shadow-gray-900 shadow-sm' : ''
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`fixed w-[100%] ${stickStyle} transition-all duration-300 z-[1000] `}>
            <div className='flex items-center h-[12vh] justify-between w-[80%] mx-auto'>
                <div className='font-logo text-white text-[18px]'>
                    <a href="" onClick={() => scrollToSection('Home')}>
                        <span className='text-[30px] md:text-[40px] text-yellow-400 mr-1'>Tanmay</span>
                        Jain
                    </a>
                </div>
                <ul className='md:flex hidden items-center space-x-10'>
                    <li>
                        <a className='nav__link' href="" onClick={() => scrollToSection('Home')}>Home</a>
                    </li>
                    <li>
                        <a className='nav__link' href="#aboutme" onClick={() => scrollToSection('AboutMe')}>About Me</a>
                    </li>
                    <li>
                        <a className='nav__link' href="#projects" onClick={() => scrollToSection('Projects')}>Projects</a>
                    </li>
                    <li>
                        <a className='nav__link' href="#experience" onClick={() => scrollToSection('Experience')}>Experience</a>
                    </li>
                    <li>
                        <a className='nav__link' href="#contactme" onClick={() => scrollToSection('ContactMe')}>Contact Me</a>
                    </li>
                </ul>
                <Bars3CenterLeftIcon
                    onClick={openNav}
                    className='w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180' />
            </div>
        </div>
    )
}

export default Nav;