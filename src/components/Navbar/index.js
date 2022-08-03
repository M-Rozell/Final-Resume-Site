
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const MainNavbar = () => {

  const [scrollNav, setScrollNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);



  return (
    <>
      <Nav scrollNav={scrollNav}>

        <NavbarContainer>

          <MobileIcon onClick={() => { setSidebar(true) }}>
            <FaBars />
          </MobileIcon>

          {sidebar && <Sidebar closeSidebar={setSidebar} />}

          <NavMenu>

            <NavItem>
              <NavLinks to="Hero">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="About">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Skills">Skills</NavLinks>
            </NavItem>

          </NavMenu>

        </NavbarContainer>
      </Nav>
    </>
  )
}

export default MainNavbar;


