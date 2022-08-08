import React from 'react';
import { HeroContainer, NameBox, NameP, NameP1, DetailsBg, DetailsP, HiBg, HiP, Im } from './HeroElements';

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
      
    
    </HeroContainer>
  )
}

export default HeroSection;