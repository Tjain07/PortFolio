import React from 'react'
import ProjectCard from './Helper/ProjectCard'

const Projects = () => {
  return (
    <section id="Projects">
    <div className='pt-[5rem] pb-[3rem] bg-gray-900'>
        <div className='text-center'>
            <p className='heading__mini'>Recent Works</p>
            <h1 className='heading__primary'>My Best <span className='text-yellow-300'>Projects</span> </h1>
        </div>
            <ProjectCard 
            title="Song Recommendor Model"
            tech1="Open CV"
            tech2="CNN"
            tech3="Flask"
            tech4="TensorFlow"
            image="/images/p1.png"
            desc="Generate a personalized playlist based on real-time face emotion detection using video streaming from the device camera
            using computer vision techniques"
            link="https://github.com/vedansh19jaiswal/Song-Recommender"
            />
            <ProjectCard 
            title="Weather Predictor Model"
            tech1="Randorm Forest"
            tech2="XG Boost"
            tech3="Data-Preprocessing"
            tech4="Python"
            desc="Developed a sub-seasonal temperature forecasting model for the United States using machine learning models such as Random Forest,
            XGBoost, and AdaBoost, supported by exploratory data analysis and data preprocessing to achieve an accuracy of 77.58%. The dataset
            comprises approximately 300,000 entries sourced from Kaggle."
            image="/images/p2.png"
            link='https://colab.research.google.com/drive/1_26RoyfM80fHMPCMH2CbdcVfVu_VENt6?usp=sharing'
            />
            <ProjectCard 
            title="MediShelter Blockhain Based Platform"
            tech1="React.js"
            tech2="Node.js"
            tech3="MongoDB"
            tech4="Hyperledger-Fabric"
            image="/images/p3.png"
            desc="Developed a private blockchain-based platform designed to seamlessly integrate the three major entities of the
            healthcare sector: hospitals, pharmacies, and health insurers. This platform will leverage cutting-edge technologies to
            ensure secure, efficient, and transparent interactions among these entities."
            link='https://github.com/SiddheshJawadi/Medishelter-beta'
            />
    </div>
    </section>
  );
}

export default Projects;