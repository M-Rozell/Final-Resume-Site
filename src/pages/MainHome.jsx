import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import HeroSection from '../components/HeroSection';
import Kira from '../components/Kira';
import MainNavbar from '../components/Navbar';
// import About from './About';
// import Projects from './Projects';
// import Skills from './Skills';
import { CatIcon } from '../components/Navbar/NavbarElements';
import { GiHollowCat } from 'react-icons/gi';
import "../css/MainHome.css";
// import useScrollSnap from 'react-use-scroll-snap';


const About = lazy(() => import('./About'));
const Projects = lazy(() => import('./Projects'));
const Skills = lazy(() => import('./Skills'));


const MainHome = () => {

  // const mainHomeContainer = useRef(null)
  
  // const scrollSnap = () => {
  //   const element = mainHomeContainer.current
  //   createScrollSnap(element, {
  //     snapDestinationX: '0%',
  //     snapDestinationY: '50%',
  //     timeout: 100,
  //     duration: 300,
  //     threshold: 0.2,
  //   }, console.log('snapped'))
    
  // }
  // useEffect(() => {
  //   scrollSnap()
  // },[mainHomeContainer])

  const [cat, setCat] = useState(true)
  const [openKira, setOpenKira] = useState(false);
  const videoSection = useRef(null);

  const scrollDownVideo = () => {
    setTimeout(() => {
      window.scrollTo({
        top: videoSection.current.offsetTop,
        behavior: 'smooth'
      })
    }, 100)
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

  // const scrollRef = useRef(null);
  // useScrollSnap({ref: scrollRef, duration: 25, delay: 5});


  return (
    
<div className='sectionContainer' id='mainHomeContainer' >
      <MainNavbar CloseKiraVideo={setOpenKira} />

      {cat && <CatIcon onClick={() => { setOpenKira(true) }} >
        <GiHollowCat onClick={() => { scrollDownVideo() }} />
      </CatIcon>}

      <div className='snapScrollContainer' >

        <section className='homeSections' >
          <HeroSection />
        </section>
        <section className='homeSections'>
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
                  </section>
        <section className='homeSections'>
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
          </Suspense>
        </section>
        <section className='homeSections'>
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
          </Suspense>
        </section>

      </div>

      <section className='homeSections' >
        <div ref={videoSection}>
          {openKira && <Kira />}
        </div>
      </section>
</div>
    
  )
};

export default MainHome;