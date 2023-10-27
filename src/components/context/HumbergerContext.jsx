"use client"
import {createContext, useState} from 'react'

export const HamburgerContext = createContext()

export const HamburgerProvider = ({children})=>{
    const [navbarOpen,setNavbarOpen] = useState(false);
    const handleHamburgerClose = () => setNavbarOpen(!navbarOpen);
    
    // Handle logic when user clicks outside the hamburger
    const domNodeClick = () => setNavbarOpen(false);
    return (
    <HamburgerContext.Provider value={{handleHamburgerClose, navbarOpen, domNodeClick}}>
        {children}
    </HamburgerContext.Provider>
    );
};