import React from 'react'
import styles from "./card.module.scss"
import Image from 'next/image'
import Link from 'next/link'

const Card = ({key, item}) => {
  return (
    <div className={styles.wrapper}>
    <div className={styles.container} key= {key}>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                {item?.user?.image && <div className={styles.userImageContainer}>
                    <Image src={item.user.image} fill className={styles.avatar} alt=""/>
                </div>}
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>{item?.user.name}</span>
                    <span className={styles.date}>{item?.createdAt.substring(0,10)}</span>
                </div>
                    <span className={styles.category}>{item.catSlug} </span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                <h1 className={styles.title}>{item.title}</h1>
                </Link>
                <div className={styles.desc} dangerouslySetInnerHTML={{__html:item?.desc}} />
                <Link className={styles.authLink} href={`/posts/${item.slug}`}><button className={styles.readmoreLink}> Read More...</button></Link>
            </div>
            {item?.img && <div className={styles.imageContainer}>
                <Image src={item.img} alt = "" fill className={styles.image}/> 
            </div>}
    </div>
    </div>
  )
}

export default Card