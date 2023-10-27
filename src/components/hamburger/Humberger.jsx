
import React from 'react'
import styles from './hurmberger.module.css'
import OpenIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/CloseRounded';


// Open Menu Icon
export const Menu = ({mode}) =>{
    const container = `${styles.container} ${mode === 'dark' ? styles.dark : ''}`;
    return(
        <div className={container}>
            <span className={styles.icon}><OpenIcon className={styles.icons}/></span>
        </div>
    )
}


// Close Menu Icon
export const CloseMenu = ({mode}) => {
    const container = `${styles.container} ${mode === 'dark' ? styles.dark : ''}`;
  return (
    <div className={container}>
            <span className={styles.icon}><CloseIcon/></span>
        </div>
  )
}
