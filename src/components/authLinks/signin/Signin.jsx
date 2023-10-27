"use client" 
import React, { useContext } from 'react'
import styles from "./signin.module.scss"
import Image from 'next/image'
import { ThemeContext } from '../../context/ThemeContext'
import LogoImg from "/public/sniptech-logos_transparent.png"
import { signIn, useSession } from 'next-auth/react'
import Spinner from '@/components/spinner/spinner'
import { useRouter } from 'next/router'

const SignIn = ({openModal}) => {

  // Context
  const {mode} = useContext(ThemeContext);

  // Router to redirect
  // const router = useRouter();

  // Login Session
  const {data,status} = useSession()
  if(status === "loading"){
    return (
    <div className={styles.loading}>Loading</div>
    )
  };

  // if(status === "authenticated"){
  //   return (
  //   router.push("/")
  //   )
  // };

  console.log(data, status)

  // Dynamic styles
  const containerClass = `${styles.container} ${mode === 'dark' ? styles.dark : ''}`;
  const socialLogin = `${styles.socialLogin} ${mode === 'dark' ? styles.dark : ''}`;
  const inputLabel = `${styles.inputLabel} ${mode === 'dark' ? styles.dark : ''}`;
  const inputLabelName = `${styles.inputLabelName} ${mode === 'dark' ? styles.dark : ''}`;
  const input = `${styles.input} ${mode === 'dark' ? styles.dark : ''}`;


  return (
    <div className={containerClass}>
      <div className={styles.header}>
        <div className={styles.logo}>
            <Image src={LogoImg} fill className={styles.logoImage} alt="logoImage" />
        </div>
        <h3 className='text-heading'>Sign in to SnipTech</h3>
      </div>

      <form className={styles.form}>
        {/* Email Container */}
        <div className={styles.inputCont}>
        <input className={input} placeholder=" " style={{ backgroundColor: mode === 'dark' ? '#031a31' : '#fff' }} autoFocus type="email" required/>
          <label htmlFor="input"  className={inputLabel}>
            <span className={inputLabelName}>Email Address</span>
          </label>
        </div>

        {/* Password Container */}
        <div className={styles.inputCont}>
        <input className={input} placeholder=" " style={{ backgroundColor: mode === 'dark' ? '#031a31' : '#fff' }} type="password" required />
          <label htmlFor="input" className={inputLabel}>
            <span className={inputLabelName}>Password</span>
          </label>
        </div>

        <span className='text-link'> Forgot Password? </span>
            <button style={{width:"100%"}} className={styles.action}>Login</button>
      </form>

    <div className={styles.register}>
      <span className={styles.text}> Don&apos;t have an account?</span>
      <span className="text-link" onClick={()=> openModal("register")}>Sign Up</span>
    </div>

{/* Or Container */}
    <div className={styles.orCont}>
      <hr className={styles.hr}/>
      <span className={styles.orText}>OR</span>
      <hr className={styles.hr}/>
    </div>

    <div className={socialLogin} onClick = {()=> signIn("google")} >
      <Image width={20} height={20} src="/5.png" alt="google"  priority={true}/>
      <span className={styles.socialText}>Continue with Google</span>
    </div>
    </div>
  )
}

export default SignIn

