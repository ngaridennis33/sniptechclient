"use client"
import React, { useContext } from 'react'
import styles from "./featured.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, welcome to SnipTech</b> Discover new stories and creative Ideas
      </h1>
      <hr className={styles.hr1}/>
      <hr className={styles.hr}/>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/apps.jpg" alt='' fill className={styles.img}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.PostTitle}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, necessitatibus?</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sed ea provident quia, nulla voluptatem sunt dolores, minima aut corporis id earum molestiae hic eligendi. Quaerat aliquid unde dicta accusamus.
          </p>
          <Link href="/readmore" className={styles.authLink} styles={{width:"maxContent"}}>
          <button className={styles.ctaButton}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured