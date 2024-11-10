import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Cookie Delight</h1>
      <div className={styles.content}>
        <Image 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cookie4.jpg-e9RXyBQvUL2RvQlTHqZHnMlL4obKm8.jpeg" 
          alt="Cookie dough being cut with cookie cutters" 
          width={600} 
          height={600} 
          className={styles.image}
        />
        <div className={styles.text}>
          <p>
            At Cookie Delight, we've been baking happiness since 1995. Our passion for creating the perfect cookie has led us to develop unique recipes that blend traditional flavors with innovative twists.
          </p>
          <p>
            Every cookie is handcrafted with love and the finest ingredients, ensuring a delightful experience with every bite. We believe in using only natural, high-quality ingredients to create cookies that are not only delicious but also wholesome.
          </p>
          <p>
            From our classic Chocolate Chip to our exotic Lavender White Chocolate, each cookie is a testament to our commitment to quality and flavor. We invite you to indulge in the Cookie Delight experience and taste the difference that passion and quality ingredients can make.
          </p>
        </div>
      </div>
    </div>
  )
}