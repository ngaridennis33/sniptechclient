import React from 'react'
import styles from "./delste.module.scss";
import Image from 'next/image';

const DeleteModal = () => {
  return (
    <div className={styles.container}>
    <div className={styles.confirmMessage}>
    <Image alt="" width={30} height={30} src="/delete.svg" className={styles.icons}/>
        <p className={styles.text}>Are you sure you want to delete this item?</p>
    </div>
    <div className={styles.deleteButtons}>
        <button className={styles.cancelButton}>Cancel</button>
        <button className={styles.confirmButton}>Delete</button>
    </div>
</div>
  )
}

export default DeleteModal