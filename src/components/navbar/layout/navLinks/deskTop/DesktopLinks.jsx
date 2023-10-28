import Link from 'next/link'
import React from 'react'
import styles from "./desktop.module.css"


const DesktopLinks = ({mode}) => {
    const navMenuItem = `${styles.navMenuItem} ${mode === 'dark' ? styles.dark : ''}`;


  return (
    <nav className={styles.navMenu}>
        <ul className={styles.navMenuList}>
            <li className={navMenuItem}>
                <Link href={"/"} className={styles.navMenuItemLink}> Home</Link>
            </li>

            <li className={navMenuItem}>
                <Link href={"/blog"} className={styles.navMenuItemLink}> Blog</Link>
            </li>


            <li className={navMenuItem}>
                <Link href={"/portfolio"} className={styles.navMenuItemLink}> Portfolio</Link>
            </li>

            {/* Drop Down Menu */}
            <li className={navMenuItem}>
                <div className={styles.dropDownCont}>
                    <span className={styles.navMenuItemLink}>About</span>
                    <svg className={styles.dropDownIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                 </div>
                
                
                {/* Drop Down */}
                <ul className={styles.dropMenu}>
                    <li className={styles.dropMenuItem}>
                        <Link href={"/about"} className={styles.dropMenuItemLink}>About Us</Link>
                    </li>

                    <li className={styles.dropMenuItem}>
                        <Link href={"/mission"} className={styles.dropMenuItemLink}>Mission</Link>
                    </li>

                    <li className={styles.dropMenuItem}>
                        <Link href={"/vision"} className={styles.dropMenuItemLink}>Vision</Link>
                    </li>
                </ul>
                {/* End of Dropdown */}

            </li>

            <li className={navMenuItem}>
                <Link href={"/contact"} className={styles.navMenuItemLink}> Contact</Link>
            </li>

        </ul>
    </nav>
  )
}



export default DesktopLinks