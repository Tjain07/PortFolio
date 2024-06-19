import AboutMe from '@/components/AboutMe';
import ContactMe from '@/components/ContactMe';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Nav from '@/components/Nav';
import NavMobile from '@/components/NavMobile';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const HomePage = () => {

  const [showNav,setShowNav]=useState(false);
  const showNavHandler =()=>setShowNav(true);
  const closeNavHandler =()=>setShowNav(false);

  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:'ease',
      once: true,
      anchorPlacement: "top-bottom",
    });
  },[]);

  return (
  <div className='overflow-hidden'>
    <NavMobile showNav= {showNav} closeNav={closeNavHandler} />
    <Nav openNav={showNavHandler}/>
    <Hero />
    <AboutMe />
    <Skills />
    <Projects />
    <Experience />
    <ContactMe />
    <Footer />
  </div>
  );
}

export default HomePage;