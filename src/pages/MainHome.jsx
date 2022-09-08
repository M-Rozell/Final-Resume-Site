import React, { useState, useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import Kira from '../components/Kira';
import MainNavbar from '../components/Navbar';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import { CatIcon } from '../components/Navbar/NavbarElements';
import { GiHollowCat } from 'react-icons/gi';

const MainHome = () => {
  const [cat, setCat] = useState(true)
  const [openKira, setOpenKira] = useState(false);
  const videoSection = useRef(null);


  const scrollDownVideo = () => {
    setTimeout(() => {
      window.scrollTo({
        top: videoSection.current.offsetTop,
        behavior: 'smooth'
      })
    }, 250)
  };

  const changeCat = () => {
    if (window.scrollY >= 80) {
      setCat(false)
    } else {
      setCat(true)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeCat)
  }, []);




  return (
    <>
      <MainNavbar CloseKiraVideo={setOpenKira}/>

      {cat && <CatIcon onClick={() => { setOpenKira(true) }} >
        <GiHollowCat onClick={() => { scrollDownVideo() }} />
      </CatIcon>}

      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <div ref={videoSection}>
        {openKira && <Kira></Kira>}
      </div>
    </>
  )
}

export default MainHome;