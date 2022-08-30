import React from 'react';
import { HeroContainer, HeroWrapper, TextWrapper, Top, Bottom, NameBox, NameP1, DetailsP, DetailsP2, LinkBtns, GitHub, Email, LinkedIn } from './HeroElements';
import { AiOutlineMail } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";


const HeroSection = () => {

  return (
    <HeroContainer id='Hero'>

<HeroWrapper>
<TextWrapper>
          <Top>
            <NameBox>
              <NameP1 className="name fade-in-text">Maggie Rozell</NameP1>
            </NameBox>
          </Top>

          {/* <Bottom>
            <DetailsP>Web Designer</DetailsP>
            <DetailsP2>Full-Stack Developer</DetailsP2>
          </Bottom>

          <LinkBtns>
            <GitHub href="https://github.com/M-Rozell" target="_blank"><BsGithub /></GitHub>
            <Email href="mailto: maggiemagnum@gmail.com" ><AiOutlineMail /></Email>
            <LinkedIn href="https://www.linkedin.com/in/maggie-rozell/" target="_blank"><ImLinkedin /></LinkedIn>
          </LinkBtns> */}
</TextWrapper>
        
        </HeroWrapper>


      



    </HeroContainer>
  )
};

export default HeroSection;


