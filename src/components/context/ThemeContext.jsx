"use client"
import {createContext, useEffect, useState} from 'react'

export const ThemeContext = createContext();


// Save the Theme mode on Local Storage
const getFromLocalStorage = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const value = localStorage.getItem('mode');
        return value || 'light';
      }
      return 'light'; // Return a default value if localStorage is not available
    };
    


export const ThemeContextProvider = ({children})=>{
    const [mode, setMode] = useState(()=>{
        return getFromLocalStorage()
    });

    const toogle =()=>{
        setMode(mode == "light" ? "dark" : "light");
    };

    useEffect(()=>{
        localStorage.setItem("mode", mode);
    },[mode]);

    
    return (
    <ThemeContext.Provider value={{toogle, mode}}>{children}</ThemeContext.Provider>
    );
};