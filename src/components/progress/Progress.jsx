"use client"
import React, { useEffect, useState } from 'react';
import styles from './progress.module.scss';

const Progress = () => {
  const [progress, setProgress] = useState(0);

  // Scroll handler
  const scrollHandler = () => {
    const screenHeight = window.innerHeight;
    const scrollY = Math.round(window.scrollY);
    const maxScreenHeight = document.documentElement.scrollHeight - screenHeight;

    const howMuchScroll = scrollY; 
    const calculatedProgress = (howMuchScroll / maxScreenHeight) * 100;
    setProgress(calculatedProgress);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);


  return (
    <progress
      className={styles.progressBar}
      id="progress"
      value={progress}
      max="100"
    ></progress>
  );
};

export default Progress;