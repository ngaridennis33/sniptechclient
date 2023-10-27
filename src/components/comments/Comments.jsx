"use client" 
import React, { useContext, useState } from 'react'
import styles from "./comments.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import useSWR from "swr"
import { useSession } from 'next-auth/react';
import Spinner from '../spinner/spinner';
import { ModalContext } from '../context/ModalContext';

// Fetch all Comments from the db
const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();
  if (!res.ok){
    const error = new Error(data.message)
    throw error;
  }
  return data;
}

const Comments = ({postSlug}) => {
  // Open modal to login
const {openModal} = useContext(ModalContext);

  
  const {status} = useSession();
  const {data,mutate, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`,fetcher)
  
  
  const [desc,setDesc] = useState("");

  // Send a new comment
  const handleSubmit = async () => {
    await fetch("/api/comments",{
      method:"POST",
      body:JSON.stringify({desc,postSlug})
    });
    mutate();
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{data?.length} Comment{data?.length === 1 ? "": "s"}</h3>
      {status === "authenticated" ? (<div className={styles.write}>
        <textarea className={styles.input} placeholder='write a comment..' onChange={(e)=> setDesc(e.target.value)} />
        <button className={styles.action} onClick={handleSubmit}>  Send </button>
      </div>) : (<button className={styles.authButton} onClick={()=> openModal("login")}> Add a comment</button>)}
     <div className={styles.comments} >

     {isLoading ? (
    <Spinner />
  ) : data?.length > 0 ? (
    data.map((item) => (
      <div className={styles.comment} key={item.id}>
        <div className={styles.user} >
          {item?.user?.image && (
            <Image src={item.user.image} alt="" width={50} height={50} className={styles.image} />
          )}
          <div className={styles.userInfo}>
            <span className={styles.userName}>{item.user.name}</span>
            <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
          </div>
        </div>
          <p className={styles.description}>{item.desc}</p>
      </div>
      
    ))
  ) : (
   ""
  )}
    </div>

    
    </div>

  )
}

export default Comments