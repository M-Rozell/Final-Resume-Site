import React, { useState } from 'react'
import { SidebarContainer, SidebarIcon, SidebarCloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ closeSidebar }) => {


    return (
        <>
            <SidebarContainer >

                <SidebarIcon onClick={() => closeSidebar(false)}>
                    <SidebarCloseIcon />
                </SidebarIcon>

                <SidebarWrapper>

                    <SidebarMenu>
                        <SidebarLink to='Hero' onClick={() => closeSidebar(false)}>Home</SidebarLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink to='About' onClick={() => closeSidebar(false)}>About</SidebarLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink to='Projects' onClick={() => closeSidebar(false)}>Projects</SidebarLink>
                    </SidebarMenu>


                    <SidebarMenu>
                        <SidebarLink to='Skills' onClick={() => closeSidebar(false)}>Skills</SidebarLink>
                    </SidebarMenu>


                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;