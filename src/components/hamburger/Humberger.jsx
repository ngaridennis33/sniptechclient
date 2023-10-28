
import React from 'react'
import styles from './hurmberger.module.css'
import Image from 'next/image';


// Open Menu Icon
export const Menu = ({mode}) =>{
    const container = `${styles.container} ${mode === 'dark' ? styles.dark : ''}`;
    return(
        <div className={container}>
            <span className={styles.icon}><Image alt="" width={30} height={30} src="/menu.svg" className={styles.icons}/></span>
        </div>
    )
}


// Close Menu Icon
export const CloseMenu = ({mode}) => {
    const container = `${styles.container} ${mode === 'dark' ? styles.dark : ''}`;
  return (
    <div className={container}>
            <span className={styles.icon}><Image alt="" width={30} height={30} src="/close.svg" className={styles.icons}/></span>
        </div>
  )
}
