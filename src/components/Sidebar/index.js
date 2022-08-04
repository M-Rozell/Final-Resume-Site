import React, { useState } from 'react'
import { SidebarContainer, SidebarIcon, SidebarCloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements'

const Sidebar = ({ CloseSidebar }) => {


    return (
        <>
            <SidebarContainer >

                <SidebarIcon onClick={() => CloseSidebar(false)}>
                    <SidebarCloseIcon />
                </SidebarIcon>

                <SidebarWrapper>

                    <SidebarMenu>
                        <SidebarLink to='Hero' onClick={() => CloseSidebar(false)}>Home</SidebarLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink to='About' onClick={() => CloseSidebar(false)}>About</SidebarLink>
                    </SidebarMenu>

                    <SidebarMenu>
                        <SidebarLink to='Projects' onClick={() => CloseSidebar(false)}>Projects</SidebarLink>
                    </SidebarMenu>


                    <SidebarMenu>
                        <SidebarLink to='Skills' onClick={() => CloseSidebar(false)}>Skills</SidebarLink>
                    </SidebarMenu>


                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;