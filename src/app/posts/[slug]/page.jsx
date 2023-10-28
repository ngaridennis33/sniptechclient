import React from 'react'
import styles from "./page.module.scss";
import Menu from '@/components/menu/Menu';
import Image from 'next/image';
import Comments from '@/components/comments/Comments';


  // Get the Single post
  const getData = async (slug)=> {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`,{
      cache:"no-store"
    })

    if(!res.ok){
      throw new Error("False")
    }
    return res.json()
  }


const SinglePage = async ({ params }) => {


    const {slug} = params;
    const data = await getData(slug);
  return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{data?.title}</h1>
                <div className={styles.user}>
                {data?.user?.image && <div className={styles.userImageContainer}>
                    <Image src={data.user.image} fill className={styles.avatar} alt=""/>
                </div>}
                <div className={styles.userTextContainer}>
                    <span className={styles.username}>{data?.user?.name}</span>
                    <span className={styles.date}>{data?.createdAt?.substring(0,10)}</span>
                </div>
                </div>
            </div>
            {data?.img && <div className={styles.imageContainer}>
                <Image src={data.img} fill className={styles.image} alt=""/>
            </div>}
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description} dangerouslySetInnerHTML={{__html:data?.desc}}/>
                <div className={styles.comment}>
                    <Comments postSlug={slug}/>
                </div>
            </div>
            
        </div>
        </div>
        <Menu/>
    </div>
  )
}

export default SinglePage