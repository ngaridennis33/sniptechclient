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
          <Image className={styles.icon} src="search.svg" alt="" width={15} height={15}/>
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