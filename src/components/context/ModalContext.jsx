"use client"
import {createContext, useEffect, useState} from 'react'

export const ModalContext = createContext()

export const ModalProvider = ({children})=>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);


          // Add a useEffect to manage scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup by resetting the overflow property when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  
    const openModal = (content)=>{
        setModalContent(content);
        setIsModalOpen(true);
    }

    const closeModal = ()=>{
        setIsModalOpen(false);
        setModalContent(null);
    }
    
    // Handle logic when user clicks outside the modal
    const domNodeClick = () => setIsModalOpen(false);

    return (
    <ModalContext.Provider value={{ isModalOpen, domNodeClick, modalContent, openModal, closeModal}}>
        {children}
    </ModalContext.Provider>
    );
};