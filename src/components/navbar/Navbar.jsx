import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

const Navbar = () => {
  return (
    <div className={styles.container}>
    <div className={styles.social}>
    <a href="https://www.facebook.com">
    <Image src="/facebook.png" alt="facebook" width={24} height={24}/>
    </a>
    <a href="https://www.instagram.com">
    <Image src="/instagram.png" alt="instagram" width={24} height={24}/>
    </a>
    <a href="https://www.youtube.com">
    <Image src="/youtube.png" alt="youtube" width={24} height={24}/>
    </a>
    </div>
    <div className={styles.logo}>Bloggerz</div> 
    <div className={styles.links}>
      <ThemeToggle/>
      <Link href="/" className={styles.link}>Homepage</Link>
      
      <AuthLinks/>
    </div>
    </div>
  );
};

export default Navbar;