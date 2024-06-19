import React from 'react'
import TypeWriteEffect from './Helper/TypeWriteEffect';
import Image from 'next/image';

const Hero = () => {

    const handleClick = () => {
        const email = 'tjain5780@gmail.com';
        const subject = 'Hiring Opportunity';
        const body = `Hi [Your Name],
    
    I am interested in discussing a potential hiring opportunity with you. Please let me know when you are available to talk further.
    
    Best regards,
    [Your Name]`;
    
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      };

      const handleDownload = () => {
        window.open('https://drive.google.com/uc?export=download&id=1xmtymmbJ4pmNzKlVJ8W8sTuPy673FHZ7', '_blank');
      };
    
  return (
    <section id="Home">
    <div className='w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg'>
        <div className='flex justify-center flex-col w-[80%] h-[100%] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[3rem] items-center'>
                <div>
                    <h1 data-aos="fade-right" className='text-[#c4cfde] mb-[1.3rem]'>WELCOME TO MY WORLD</h1>
                    <div data-aos="fade-left" data-aos-delay="400">
                        <h1 className='xl-text-[50px] lg-text-[40px] sm:text-[35px] text-[25px] font-semibold leading-[2.
                        6rem] text-white'>
                            Hi,I&apos;m <span className='text-yellow-300'>Tanmay</span>
                        </h1>
                        <TypeWriteEffect />
                    </div>
                    <p data-aos="fade-up" data-aos-delay="800" className='mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]'>
                        Aspiring Computer Science graduate with expertise in Data Science and frontend development.
                        Proven leader with hands-on experience in cutting-edge technologies and successful event management.
                    </p>
                    <div className='mt-[2rem] flex items-center space-x-6'>
                        <button data-aos="zoom-in" data-aos-delay="1200" className='relative flex h-[50px] w-40 items-center justify-center font-semibold 
                        overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 
                        before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56  
                        hover:before:w-56' onClick={handleClick}>
                            <span className='relative z-10'>Hire me</span>
                        </button>
                        <button data-aos="zoom-out" data-aos-delay="1600" className='before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white
                        font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
                        before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 
                        before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black 
                        hover:before:-rotate-180' onClick={handleDownload}>
                            <span className='relative z-10'>Download CV</span>
                        </button>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="2000" className='hidden md:block ml-[140px]'>
                    <Image 
                    src={'/images/hero.png'}
                    alt='hero' 
                    width={500} 
                    height={500} 
                    className='object-contain '/>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Hero;