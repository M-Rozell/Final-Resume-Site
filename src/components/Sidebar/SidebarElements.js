import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';


export const SidebarContainer = styled.aside`
position: fixed;
margin: 0;
padding: 0;
z-index: 999;
width: 325px;
height: 50px;
background: transparent;
/* background-image: radial-gradient( #dfb255,#ddad0b ); */
border-radius: 8px;
box-shadow: 0 0 2px 2px #f0f9db;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
top: 10px;
right: 20px;

@media screen and (min-width: 768px){
    display: none;
}
`
export const SidebarWrapper = styled.div`
display: flex;
flex-direction: row;
margin-right: 25px;
`
export const SidebarCloseIcon = styled(AiOutlineCloseCircle)`
color: #f0f9db;
`

export const SidebarIcon = styled.div`
position: absolute;
top: 3px;
right: 8px;
background: transparent;
font-size: 1.5rem;
cursor: pointer;
outline: none;
`



export const SidebarMenu = styled.ul`
margin: 7px;
padding: 0;
`

export const SidebarLink = styled(LinkScroll)`
font-size: 1rem;
text-decoration: none;
list-style: none;
font-family: 'Mingzat', sans-serif;
text-decoration: none;
color: #f0f9db;
cursor: pointer;

&:hover {
    color: #f56036;
}
`