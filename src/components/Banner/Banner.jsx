import React from 'react'
import styles from "./banner.module.scss"
import Image from 'next/image'


const Banner = () => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
        <div className={styles.textBox}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Experience your ultimate mobile application</h1>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae dolorem accusamus eum iusto iure quisquam?</p>
            <button className={styles.action} style={{background:"#fff", color:"#000", marginTop:"50px"}}>Get Started</button>
            </div>
        </div>
        <div className={styles.imageBox}>
            <div className={styles.imageBox}>
                <Image className={styles.img} fill src="/home/banner-thumb.png" alt=""/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner