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
background: #dfb255;
/* background-image: radial-gradient( #dfb255,#ddad0b ); */
border-radius: 8px;
/* box-shadow: 0 0 2px 2px #f0f9db; */
display: flex;
top: 10px;
right: 20px;
transition: 0.3s ease-in-out;

@media screen and (min-width: 768px){
    display: none;
}
`

export const SidebarCloseIcon = styled(AiOutlineCloseCircle)`
color: #f0f9db;
`

export const SidebarIcon = styled.div`
position: absolute;
top: 1px;
right: 5px;
background: transparent;
font-size: 1.5rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: #fff;
position: relative;
display: flex;
flex-direction: row;
transition: all 0.2s ease-in-out;
justify-content: space-around;
align-items: center;
text-align: center;

`

export const SidebarMenu = styled.ul`
display: flex;
margin-left: 25px;
`

export const SidebarLink = styled(LinkScroll)`
display: flex;
font-size: 1rem;
text-decoration: none;
list-style: none;

text-decoration: none;
color: #f0f9db;
cursor: pointer;

&:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
}
`