
import styled, { keyframes } from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #417173;
    /* background-color: #d38db3; */
    border-left: 5px solid #4a6961;
    border-right: 5px solid #4a6961;
    margin: 0;
    padding: 0;
    
`
export const AnimationHeroWrapper = styled.div`
position: relative;
z-index: 4;
overflow: hidden;
`

export const HeroWrapper = styled.div`
width: 100%;
height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 999;
`


export const Top = styled.div`
  text-align: center;
`

export const NameBox = styled.div`
  margin-bottom: 20px;
`
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`
export const NameP1 = styled.p`
  margin: auto;
  background: -webkit-linear-gradient(#AE8625, #F7EF8A, #D2AC47);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Rampart One', cursive;
  font-size: 5.5rem;
  position: relative;
  animation-name: ${fadeIn};
  animation-duration: 5s;

`

export const Bottom = styled.div`
position: relative;
display: flex;
flex-direction: column;
text-align: center;
`

export const DetailsP = styled.p`
color: cornsilk;
font-family: 'Mingzat', sans-serif;
font-size: 1.5rem;
animation-name: ${fadeIn};
  animation-duration: 10s;
`

export const DetailsP2 = styled.p`
color: cornsilk;
font-family: 'Mingzat', sans-serif;
font-size: 1.5rem;
margin-top: -10px;
animation-name: ${fadeIn};
  animation-duration: 10s;
`