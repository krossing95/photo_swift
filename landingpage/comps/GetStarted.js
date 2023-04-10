import React from 'react';
import styles from '@/styles/GetStarted.module.css';

const GetStarted = () => {
  return (
    <div className={styles.getstarted}>
        <div>
            <h2>Create an account and get<br/> started free!</h2>
            <div className={styles.button}>
            <button><span>GEt started</span><img src="/forward.svg" alt="go" /></button>
            </div>
            <p>👉 Familiarize yourself with the terms and legal details</p>
            
        </div>
    </div>
  )
}

export default GetStarted