import React from 'react'
import styles from"./featured.module.css"
import Image from"next/image"

const Featured = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>
     <b> Bloggerz: </b> Crafting Dreams, One Post at a Time
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Mastering the Art of Blogging: Your Path to Digital Influence</h1>
          <p className={styles.postDesc}>
          Welcome to a world of endless possibilities!
           Dive into the realm of blogging where words become art, 
           and ideas ignite passions.
           Discover the secrets to crafting compelling content, engaging your audience,
           and building your digital influence.
          </p>
          
        </div>
      </div>
    </div>
  )
}

export default Featured