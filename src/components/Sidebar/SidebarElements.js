import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link as LinkScroll } from 'react-scroll';


export const SidebarContainer = styled.aside`
position: fixed;
margin: 0;
padding: 0;
z-index: 999;
width: 350px;
height: 50px;
/* background: #82e6cf; */
background-image: radial-gradient( #dfb255,#ddad0b );
border-radius: 8px;
box-shadow: 0 0 2px 2px #f0f9db;
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
position: absolute;
display: flex;
top: 0;
left: 0;
/* flex-direction: column; */
`

export const SidebarMenu = styled.ul`
margin-top: 12px;
justify-content: space-around;
`

export const SidebarLink = styled(LinkScroll)`
display: flex;
font-size: 1rem;
text-decoration: none;
list-style: none;
transition: all 0.2s ease-in-out;
text-decoration: none;
color: #f0f9db;
cursor: pointer;

&:hover {
    color: #01bf71;
    transition: all 0.2s ease-in-out;
}
`