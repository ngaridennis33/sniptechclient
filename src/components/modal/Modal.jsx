"use client"
import React, { useContext } from "react";
import styles from "./modal.module.scss";
import { useClickOutside } from "@/hooks/hooks";
import { ThemeContext } from "../context/ThemeContext";
import { ModalContext } from "../context/ModalContext";


const Modal = ({children, title }) => {

// Toogle Background color mode
    const {mode} = useContext(ThemeContext)
    const modal = (`${styles.modal} ${mode === 'dark' ? styles.dark : ''}`);

// Toogle the modal open or close when the user clicks on the Donate button.
    const {closeModal,domNodeClick} = useContext(ModalContext);

//Toggle Modal open or close when user clicks outside the Modal.
    let domNode = useClickOutside(()=>{
    domNodeClick();
    })

return(
        <div className={styles.modalOverlay}>
            <div className={styles.modalWrapper} ref={domNode}>
                <div className={modal}>
                        <span onClick={closeModal} className={styles.close}>
                        &times;
                        </span>
                    <div className={styles.modalBody}>{children}</div>
                </div>
            </div>
        </div>
)

};

export default Modal