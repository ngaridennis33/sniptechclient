import Image from 'next/image'
import React from 'react'
import LogoImg from "/public/sniptech-logos_transparent.png"
import styles from './logo.module.css'


const Logo = ({mode}) => {
  return (
    <div className={styles.logoImageContainer}>
    {mode === "dark" ? (<Image src={LogoImg} className={styles.logoImage} alt="logoImage" fill/>):(<Image src={LogoImg} className={styles.logoImage} alt="logoImage" fill />)}
    </div>
  )
}

export default Logo