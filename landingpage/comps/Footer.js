import React from 'react';
import styles from '@/styles/footer.module.css';
import { Inter } from 'next/font/google';
const inter = Inter({subsets:['latin']})

const Footer = () => {
  
  return (
    <div className={`${styles.footercover} ${inter.className}`}>
      <div className={styles.footer}>
      <div>
        <h2>Get started</h2>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>Company</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
      <div>
        <h2>Support</h2>
        <ul>
          <li>Help and Knowledge centre</li>
          <li>Discord chat</li>
          <li>Support contact</li>
          <li>About Photoswift</li>
          <li>API for developers</li>
        </ul>
      </div>
      <div>
        <h2>Contact</h2>
        <ul>
          <li>Krossing Technologies</li>
          <li>+233542871142</li>
          <li>krossingtechnologies@gmail.com</li>
        </ul>
      </div>
      </div>
      <p className={styles.copy}>© Krossing Technologies. All right reserved</p>
    </div>
  )
}

export default Footer