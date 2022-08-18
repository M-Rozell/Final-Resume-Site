import React, {useState} from 'react';
import { HeroContainer, AnimationHeroWrapper, HeroWrapper, Top, Bottom, NameBox, NameP1, DetailsP, DetailsP2 } from './HeroElements';
import Animation from '../StarAnimation/index'


const HeroSection = () => {

  return (
    <HeroContainer id='Hero'>
      
      <AnimationHeroWrapper>
      <Animation />
      <HeroWrapper>

        <Top>
          <NameBox>
            <NameP1 className="name fade-in-text">Maggie Rozell</NameP1>
          </NameBox>
        </Top>

        <Bottom>
          <DetailsP>Web Designer</DetailsP>
          <DetailsP2>Full-Stack Developer</DetailsP2>
        </Bottom>

      </HeroWrapper>
      
      </AnimationHeroWrapper>
      
      
    </HeroContainer>
  )
};

export default HeroSection;
  

