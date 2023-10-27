import Link from 'next/link'
import React from 'react'
import styles from "./menuCategories.module.scss"

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.art}`}>Art</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.finance}`}>Finance</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.fashion}`}>Style</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.tech}`}>Tech</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.sports}`}>Sport</Link>
      </div>
  )
}

export default MenuCategories