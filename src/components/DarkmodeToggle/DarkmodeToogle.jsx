"use client"
import React, { useContext } from 'react'
import styles from './darkmode.module.css'
import { ThemeContext } from '../context/ThemeContext'


const DarkmodeToogle = () => {
    const { toogle, mode} = useContext(ThemeContext) 
  return (
    <div className={styles.container} onClick={toogle} style={mode ==="light" ? {background:"#011222"}: {background:"#FFF"}}>
        <div className={styles.icon}>☀️</div>
        <div className={styles.icon}>🌙</div>
        <div className={styles.ball}
        style={mode ==="light" ? {left: "2px", background:"#FFF" }: {right: "2px",background:"#011222"}}
        />
    </div>
  )
}

export default DarkmodeToogle