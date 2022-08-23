import React from 'react';
import { HeroContainer, AnimationHeroWrapper, HeroWrapper, Top, Bottom, NameBox, NameP1, DetailsP, DetailsP2, LinkBtns, GitHub, Email, LinkedIn } from './HeroElements';
import Animation from '../StarAnimation/index';
import { AiOutlineMail } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";


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

          <LinkBtns>
            <GitHub href="https://github.com/M-Rozell" target="_blank"><BsGithub /></GitHub>
            <Email href="mailto: maggiemagnum@gmail.com" ><AiOutlineMail /></Email>
            <LinkedIn href="https://www.linkedin.com/in/maggie-rozell/" target="_blank"><ImLinkedin /></LinkedIn>
          </LinkBtns>

        </HeroWrapper>


      </AnimationHeroWrapper>



    </HeroContainer>
  )
};

export default HeroSection;


