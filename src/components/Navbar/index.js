
import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import { Nav, NavbarContainer, CatIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
import { GiHollowCat} from 'react-icons/gi'


const MainNavbar = () => {

  const [scrollNav, setScrollNav] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [navIcon, setNavIcon] = useState(true);
  const [cat, setCat] = useState(true)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  };

  const changeCat = () => {
    if(window.scrollY >= 80) {
      setCat(false)
    }else {
      setCat(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeCat)
  }, [])

  const handleMobileIcon = () => {
    setSidebar(true)
    setNavIcon(false)
  }


  return (
    <>
      <Nav scrollNav={scrollNav}>

        <NavbarContainer>

        <CatIcon>
          {cat && < GiHollowCat  />}
          
          </CatIcon>



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


