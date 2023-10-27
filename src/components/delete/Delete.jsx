import React from 'react'
import styles from "./delste.module.scss";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const DeleteModal = () => {
  return (
    <div className={styles.container}>
    <div className={styles.confirmMessage}>
    <DeleteForeverOutlinedIcon className={styles.trash}/>
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