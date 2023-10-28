import React from 'react'
import styles from "./announcement.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Announcement = () => {
  return (
    <div className={styles.container}>
       <div className={styles.categories}>
       <Image src="/cat.svg" width={20} height={20} className={styles.img} alt=""/> 
           <span className={styles.title}>Categories</span> 
            <div className={styles.dropMenu}>
                <ul className={styles.dropMenuItem}>
                <Link href={"/categorypage?cat=tech"} className={styles.dropMenuItemLink}>
                  <Image src="/net1.svg" width={20} height={20} className={styles.img} alt=""/> <span className={styles.catName}>Tech</span>
                </Link>
                <Link href={"/about"} className={styles.dropMenuItemLink}>
                  <Image src="/fashion1.svg" width={20} height={20} className={styles.img} alt=""/> <span className={styles.catName}>Fashion</span>
                </Link>
                <Link href={"/about"} className={styles.dropMenuItemLink}>
                  <Image src="/finance1.svg" width={20} height={20} className={styles.img} alt=""/> <span className={styles.catName}>Finance</span>
                </Link>
                <Link href={"/about"} className={styles.dropMenuItemLink}>
                  <Image src="/bag.svg" width={20} height={20} className={styles.img} alt=""/> <span className={styles.catName}>Travel</span>
                </Link>
                <Link href={"/about"} className={styles.dropMenuItemLink}>
                  <Image src="/sports1.svg" width={20} height={20} className={styles.img} alt=""/> <span className={styles.catName}>Sports</span>
                </Link>
                <Link href={"/about"} className={styles.dropMenuItemLink}>
                  <Image src="/art1.svg" width={20} height={20} className={styles.img} alt=""/><span className={styles.catName}>Art</span>
                </Link>
                </ul>
           </div>
        </div>
      <div className={styles.searchBox}>
        <input className={styles.input} type="text" placeholder="Search..." />
        <div className={styles.iconContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
        </div>
      </div>
        <div className={styles.social}>
          <Image src="/1.png" width={20} height={20} className={styles.icon} alt="sniptech fb"/>
          <Image src="/2.png" width={20} height={20} className={styles.icon} alt="sniptech"/>
          <Image src="/3.png" width={20} height={20} className={styles.icon} alt="sniptech"/>
          <Image src="/4.png" width={20} height={20} className={styles.icon} alt="sniptech"/>
        </div>
    </div>
  )
}

export default Announcement