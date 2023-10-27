import React, { useState } from 'react'
import styles from "./forminput.module.scss"

const FormInput = (props) => {

  const inputLabel = `${styles.inputLabel} ${props.mode === 'dark' ? styles.dark : ''}`;
  const input = `${styles.input} ${props.mode === 'dark' ? styles.dark : ''}`;

    // When the user clicks outside the input, validate  their entries.
    // const [focused, setFocused] = useState(false)
    const [list, setList] = useState(false)
    const handleFocus =(e)=>{
    setList(true);
    }

    // Destructure the Props.
    const {label,errorMessage,onChange, id, ...inputProps} = props;


  return (
    <div className={styles.wrapper}>
        <label className={inputLabel}>{label}</label>
        <input className={input}
        {...inputProps}
        onChange={onChange} 
        onBlur={handleFocus} 
        list= {list.toString()}
        onFocus = {()=> inputProps.name === "confirmPassword" && setList(true)}
        />
        <span className={styles.errorMessage}>{errorMessage}</span>
    </div>
  )
}

export default FormInput