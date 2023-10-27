import React from 'react'
import styles from './page.module.css'
import Spinner from '@/components/spinner/spinner';


export const metadata = {
  title: "About SnipTech",
  description: "Welcome to our blogsite! Dive into captivating articles, thought-provoking discussions, and inspiring content. Our diverse team covers technology, fashion, travel, and more, aiming to inform, entertain, and engage. Join our community of knowledge seekers as we explore trends, share insights, and embrace the power of storytelling. Let's embark on a rewarding adventure through our digital realm.",
};

const About = () => {
  return (
    <div className={styles.container}>
      {/* <Spinner/> */}
      About Sniptech
    </div>
  )
}

export default About