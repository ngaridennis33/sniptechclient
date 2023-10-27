"use client"
import React, { Fragment, useState } from 'react'
import styles from "./dropDown.module.css"
import Link from 'next/link'




const TreeItem = ({label, children, link,handleHamburgerClose})=>{
  const [dataisopen, setIsOpen] = useState(false)
  console.log(children)
  return(
    <div className={styles.treeItemContainer}>
      {link && (<li className={styles.navMenuItem}><Link onClick={handleHamburgerClose} style={{width:"100%",padding: "0 10px"}}  href={link}>{label}</Link></li>)}
      {!link && (<div className={styles.dropdownContainer} onClick={() => setIsOpen((p)=> !p)}>
        <span dataisopen={dataisopen.toString()} className={styles.dropdownLabel}> {label} </span>
      </div>)}
      {children && dataisopen && <div className={styles.treeChildContainer}>{children}</div>}
    </div>
  )

}

const Dropdown = ({tree,handleHamburgerClose, mode}) => {

const createTree = (branch) => (
  <TreeItem label={branch.label} link = {branch.link} handleHamburgerClose={handleHamburgerClose}>
    {branch?.branches?.map((branch, index) => (
                <Fragment key={index}>{createTree(branch)}</Fragment>
            ))}
  </TreeItem>

)
  return (
    <div className={styles.dropdownContainer}>
      {tree.map((branch, index) => (
      <Fragment key={index}>{createTree(branch)}</Fragment>
      ))}
    </div>
  )
}

export default Dropdown