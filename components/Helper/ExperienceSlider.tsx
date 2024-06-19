import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ExpeirenceCard from './ExperienceCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const ExpeirenceSlider = () => {
  return (
    <Carousel 
    responsive={responsive} 
    additionalTransfrom={0} 
    arrows={true} 
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    itemClass='item'
    >
        <ExpeirenceCard 
        image="/images/user1.jpg" 
        company="Accenture" 
        role="CyberSecurity Intern"
        desc="Getting Trained in JAVA Basics, CyberArk IAM Tool which includes knowledge of IAM, Privilege Access
        Management (PAM)"
        />
        <ExpeirenceCard 
        image="/images/user2.jpg" 
        company="Finkeep" 
        role="FrontEnd Developer"
        desc="Responsible to handle frontend development related task, mainly works on ReactJS Build the Dashboard UI and also
        other tabs Frontend in React"
        />
        <ExpeirenceCard 
        image="/images/user3.png" 
        company="GDSC" 
        role="Program Manager"
        desc="Organized an event of 500+ students for the current mutliple cutting edge softwares where participants were introduced to these softwares."
        />
    </Carousel>
  )
}

export default ExpeirenceSlider