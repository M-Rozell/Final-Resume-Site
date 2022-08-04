
import styled from 'styled-components';

export const HeroContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #417173;
    /* background-color: #d38db3; */
    border-left: 5px solid #4a6961;
    border-right: 5px solid #4a6961;
    margin: 0;
    padding: 0;
`
export const HiBg = styled.div`
position: relative;

`

export const HiP = styled.p`
position: relative;
display: flex;
color: cornsilk;
/* font-family: 'Amatic SC', cursive; */
font-family: 'Bakbak One', cursive;
font-size: 3rem;
margin-top: 150px;
margin-left: 100px;
`

export const Im = styled.p`
position: relative;
display: flex;
color: cornsilk;
margin-top: -30px;
font-family: 'Bakbak One', cursive;
font-size: 3rem;
margin-left: 100px;
`

export const NameBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  
`
export const NameP1 = styled.p`
  margin: auto;
  background: -webkit-linear-gradient(#AE8625, #F7EF8A, #D2AC47);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Rampart One', cursive;
  font-size: 6rem;
  margin-top: -50px;
`
// export const NameP = styled.p`
//   margin: auto;
//   background: -webkit-linear-gradient(#AE8625, #F7EF8A, #D2AC47);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-family: 'Rampart One', cursive;
//   justify-content: center;
//   font-size: 6rem;
// `

export const HeroBg = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
`
export const VideoBg = styled.video`
width: 350px;
height: 600px;
background: #a84909;
border-radius: 50%;

-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const DetailsBg = styled.div`
display: flex;
flex-direction: column;
position: relative;
align-items: center;
`

export const DetailsP = styled.p`
color: black;
`