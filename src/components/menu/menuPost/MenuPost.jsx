import React from 'react'
import styles from "./menuPost.module.scss"
import Link from 'next/link'
import Image from 'next/image'

const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
    <Link href = "/" className={styles.item}>
      {withImage && <div className={styles.imageContainer}>
        <Image src="/hero.png" fill alt="" className={styles.image}/>
      </div>}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur magnam numquam.
        </h3>
        <div className={styles.detail}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.date}>-10.03.2023</span>
        </div>
      </div>
    </Link>

    <Link href = "/" className={styles.item}>
      {withImage && <div className={styles.imageContainer}>
        <Image src="/hero.png" fill alt="" className={styles.image}/>
      </div>}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur magnam numquam.
        </h3>
        <div className={styles.detail}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.date}>-10.03.2023</span>
        </div>
      </div>
    </Link>

    <Link href = "/" className={styles.item}>
      {withImage && <div className={styles.imageContainer}>
        <Image src="/contact.png" fill alt="" className={styles.image}/>
      </div>}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.tech}`}>Tech</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur magnam numquam.
        </h3>
        <div className={styles.detail}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.date}>-10.03.2023</span>
        </div>
      </div>
    </Link>

    <Link href = "/" className={styles.item}>
      {withImage && <div className={styles.imageContainer}>
        <Image src="/profile.jpg" fill alt="" className={styles.image}/>
      </div>}
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.style}`}>Style</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur magnam numquam.
        </h3>
        <div className={styles.detail}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.date}>-10.03.2023</span>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default MenuPost