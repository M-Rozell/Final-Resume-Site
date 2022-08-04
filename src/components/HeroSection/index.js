import React from 'react';
import { HeroContainer, NameBox, NameP, NameP1, HeroBg, VideoBg, DetailsBg, DetailsP, HiBg, HiP, Im } from './HeroElements';
import Video from '../../video/Kira.mp4'
const HeroSection = () => {
  return (
    <HeroContainer id='Hero'>
      
      
      
      
      <NameBox>
        <HiBg>
        <HiP>Hi there!</HiP>
        <Im>I'm</Im>
      </HiBg>
        <NameP1>Maggie Rozell</NameP1>
        {/* <NameP>Rozell</NameP> */}
      </NameBox>

      <DetailsBg>
        <DetailsP>Web Designer</DetailsP>
        <DetailsP>Full-Stack Developer</DetailsP>
      </DetailsBg>
      
      {/* <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg> */}
    
    </HeroContainer>
  )
}

export default HeroSection;