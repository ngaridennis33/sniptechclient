"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import styles from './authLinks.module.scss';
import { HamburgerContext } from '../context/HumbergerContext';
import { signOut, useSession } from 'next-auth/react';



const AuthLinks = ({openModal}) => {

  const {handleHamburgerClose} = useContext(HamburgerContext);

// Check User login status
const { data = null, status = null } = useSession();

  return(
  <div className={styles.authStatusCont}>
    {status === "authenticated" ? (
    <div className={styles.authCont}>
        <Link href = "/write" className={styles.write}>Write</Link> 
        <span className={styles.logout} onClick={signOut}>Logout</span>
    </div>
    ): (
    <div onClick={handleHamburgerClose} className={styles.button}><button className={styles.authButton} onClick={()=> openModal("login")}>Login</button></div> 
    )}

  </div>
  )
  
}

export default AuthLinks