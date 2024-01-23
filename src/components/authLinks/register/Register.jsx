import React, { useContext, useState } from 'react'
import styles from "./register.module.scss"
import FormInput from './FormInput/FormInput'
import Image from 'next/image';

import LogoImg from "/public/sniptech-logos_transparent.png"
import { ThemeContext } from '@/components/context/ThemeContext';



const Register = ({openModal}) => {

    const {mode} = useContext(ThemeContext);
    const containerClass = `${styles.container} ${mode === 'dark' ? styles.dark : ''}`;
    const socialLogin = `${styles.socialLogin} ${mode === 'dark' ? styles.dark : ''}`;
    const header = `${styles.header} ${mode === 'dark' ? styles.dark : ''}`;
  
    const [values, setValues] = useState({
      fullName:"",
      birthDay:"",
      email:"",
      userName:"",
      password:"",
      confirmPassword:"",
  });
  
  const handleSubmit =(e)=>{
      e.preventDefault();
  }
  
  const onChange = (e)=>{
      setValues({...values, [e.target.name]: e.target.value})
  }
  
      // User Input Data.
      const InputData=[
    {
        id:1,
        name:"email",
        type:"email",
        placeholder:"Email",
        errorMessage:"⁕ Email should be a valid email address!",
        label:"Email",
        required:true,
    },
    {
        id:2,
        name:"password",
        type:"password",
        placeholder:"Password",
        errorMessage:"⁕ Password should be between 8-20 characters. MUST include 1 uppercase and lowe case letter, 1 digit and 1 special character! (eg. asdASD123*)",
        label:"Password",
        pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!/@$%^&*-]).{8,20}$",
        required:true,
    },
    {
        id:3,
        name:"confirmPassword",
        type:"password",
        placeholder:"Confirm Password",
        errorMessage:"⁕ Passwords DO NOT match!",
        label:"ConfirmPassword",
        pattern:values.password,
        required:true,
    },
  ]
  return (
    <>
    
        <div className={containerClass}>
          <div className={header}>
          <div className={styles.logoContainer}>
              <Image src={LogoImg} fill className={styles.logoImage} alt="logoImage" />
          </div>
            <h3 className='text-heading'>Create your sniptech account</h3>
          </div>
    
          <form className={styles.form}>
          {InputData.map((input)=>(
                  <FormInput 
                    mode={mode}
                    names={input.label}
                        key={input.id} 
                        {...input} 
                        value={values[input.name]} 
                        onChange={onChange}
                        
                    />
                    ))}
          <button className={styles.action} style={{width:"100%", marginTop:"5px"}}>Register</button>

          </form>
    
          <div className={styles.bottom}>
            <div className={styles.login}>
          <span className={styles.text}>Already have an account?</span>
          <span className="text-link"  onClick={()=> openModal("login")}>Sign In</span>
        </div>
              {/* Or Container */}
               <div className={styles.orCont}>
               <hr className={styles.hr}/>
              <span className={styles.orText}>OR</span>
              <hr className={styles.hr}/>
         </div>
    
          <div className={socialLogin}>
            <Image width={20} height={20} src="/5.png" alt="google"  priority={true}/>
            <span className={styles.socialText}>Continue with Google</span>
         </div>
         </div>
    
         </div>
         </>
      )
    }

export default Register
