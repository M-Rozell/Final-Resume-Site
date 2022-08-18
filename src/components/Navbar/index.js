
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const MainNavbar = () => {

  const [scrollNav, setScrollNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [navIcon, setNavIcon] = useState(true);
  const [ load, setLoad ] = useState(true)

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

  const handleMobileIcon = () => {
    setSidebar(true)
    setNavIcon(false)
  }


  return (
    <>
      <Nav scrollNav={scrollNav}>

        <NavbarContainer>

          {navIcon && <MobileIcon onClick={() => { handleMobileIcon() }}>
            <FaBars />
          </MobileIcon>}

          {sidebar && <Sidebar CloseSidebar={setSidebar} OpenNavIcon={setNavIcon} />}

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


