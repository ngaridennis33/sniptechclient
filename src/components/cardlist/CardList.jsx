import React from 'react'
import Pagination from '@/components/pagination/Pagination';
import styles from "./cardList.module.scss";
import Card from './card/Card';

  // Get the post data
  const getData = async (page,cat)=> {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,{
      cache:"no-store"
    })

    if(!res.ok){
      throw new Error("False")
    }
    return res.json()
  }

const CardList = async ({page,cat}) => {
  const {posts, count} = await getData(page,cat);
      // At the beginning the post is 1, multiplying it by zero
      // makes it zero. Taking the first two posts then none will be skipped.
  const POST_PER_PAGE = 5;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page -1) + POST_PER_PAGE < count;


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.top}>
      <h1 className={styles.title}>Recent Posts</h1>
      <hr className={styles.hr1}/>
      <hr className={styles.hr2}/>
        </div>
      </div>
      <div className={styles.posts}>
        {posts?.map((item)=> (
          <Card key = {item._id} item = {item}/>
        ))}
      </div>
      <div className={styles.pagination}>
      <Pagination hasPrev={hasPrev} hasNext={hasNext} page={page}/>
      </div>
    </div>
  )
}

export default CardList