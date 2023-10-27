import React from 'react'
import styles from "./footer.module.scss"
import Image from 'next/image'
import Link from 'next/link'
import Logo from "/public/sniptech-logos_transparent.png"


const Footer = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.info}>
        <Link className={styles.logoContainer} href="/">
          <Image src="/sniptech-logos_transparent.png" fill alt="" className={styles.logo}/>
        </Link>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit alias animi quis non, saepe cupiditate?
        </p>

        <div className={styles.social}>
          <Image src="/1.png" width={15} height={15} className={styles.icon} alt="sniptech fb"/>
          <Image src="/2.png" width={15} height={15} className={styles.icon} alt="sniptech"/>
          <Image src="/3.png" width={15} height={15} className={styles.icon} alt="sniptech"/>
          <Image src="/4.png" width={15} height={15} className={styles.icon} alt="sniptech"/>
        </div>
      </div>

        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}> Links</span>
            <Link href="/">Homepage</Link>
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/portfolio">Portfolio</Link>
          </div>

          <div className={styles.list}>
            <span className={styles.listTitle}> Tags</span>
            <Link href="/">Style</Link>
            <Link href="/">Fashion</Link>
            <Link href="/">Tech</Link>
            <Link href="/">Travel</Link>
          </div>
        </div>
        
    </div>
    <div className={styles.copyRight}>© 2023. All rights reserved</div>
    </div>
  )
}

export default Footer