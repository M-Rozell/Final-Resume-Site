import React from 'react';
import HeroSection from '../components/HeroSection';
import MainNavbar from '../components/Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';


const MainHome = () => {

  

  return (
    <>
   
    <MainNavbar />
    <HeroSection />
    <About />
    <Projects />
    <Skills />
    
    </>
  )
}

export default MainHome;