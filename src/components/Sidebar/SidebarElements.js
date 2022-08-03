import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';


export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100px;
height: 200px;
background: cornsilk;
border-radius: 8px;
box-shadow: 2px 2px 2px 2px black;
display: flex;
justify-content: center;
align-items: center;
top: 10px;
right: 20px;
transition: 0.3s ease-in-out;

@media screen and (min-width: 768px){
    display: none;
}
`

export const SidebarCloseIcon = styled(AiOutlineCloseCircle)`
color: black;
`

export const SidebarIcon = styled.div`
position: absolute;
top: 2px;
right: 5px;
background: transparent;
font-size: 1rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
margin-top: 20px;
`

export const SidebarMenu = styled.ul`
padding: 0;
`

export const SidebarLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
text-decoration: none;
list-style: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: black;
cursor: pointer;

&:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
}
`