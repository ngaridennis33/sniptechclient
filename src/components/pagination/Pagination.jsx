"use client"
import React from 'react'
import styles from "./pagination.module.scss"
import {useRouter} from "next/navigation"

const Pagination = ({page, hasPrev, hasNext}) => {

  const router = useRouter()
  return (
    <div className={styles.container}>
      <button disabled={!hasPrev} className={styles.preBtn} onClick={()=> router.push(`?page=${page - 1}`)}>Previous</button>
      <button disabled={!hasNext} className={styles.nxtBtn} onClick={()=> router.push(`?page=${page + 1}`)} >Next</button> 
    </div>
  )
}

export default Pagination