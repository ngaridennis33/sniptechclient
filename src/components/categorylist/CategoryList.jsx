import React from 'react'
import styles from "./categoryList.module.scss"
import Link from 'next/link'
import Image from 'next/image'


  // Get the category data
  const getData = async ()=> {
    const res = await fetch("http://localhost:3000/api/categories",{
      cache:"no-store"
    })

    if(!res.ok){
      throw new Error("False")
    }
    return res.json()
  }


const CategoryList = async () => {
   const data = await getData();


  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Popular Categories</h1>
      <div className={styles.categories}>

          {data?.map((item) =>(
          <Link href={`/blog/categorypage?cat=${item.slug}`} className={`${styles.category} ${styles[item.slug]}`} key={item._id}>
          <div className={styles.left}>
          <Image src={item.img[0]} width={32} height={32} className={styles.img} alt=""/> 
            <h2 className={styles.subTitle}>{item.title}</h2>
            <p className={styles.desc}>{item.desc}</p>
            </div>
            <div className={styles.right}>
          <Image src={item.img[1]} width={32} height={32} className={styles.img} alt=""/> 
            </div>
          </Link>
          ))  
          }


        </div>
    </div>
  )
}

export default CategoryList