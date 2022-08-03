import React from 'react';
import { HeroContainer } from './HeroElements';

const HeroSection = ({toggle}) => {
  return (
    <HeroContainer id='Hero' onClick={toggle}>

    </HeroContainer>
  )
}

export default HeroSection;